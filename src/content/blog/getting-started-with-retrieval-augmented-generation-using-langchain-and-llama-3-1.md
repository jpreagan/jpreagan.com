---
title: Getting started with retrieval augmented generation using Langchain and Llama 3.1
description: A quick look at using Langchain and Llama 3.1 for retrieval augmented generation. I'll walk through the basics of setting up and testing a simple RAG system.
pubDate: 2024-09-22
coverImage: "/f310d0b1-419a-477d-9c44-b6ec703f1c2e.jpg"
---

In this blog post, we'll explore Retrieval Augmented Generation (RAG) using [Langchain](https://www.langchain.com/) and [Llama 3.1](https://ai.meta.com/blog/meta-llama-3-1/). RAG combines large language models (LLMs) with external knowledge sources, enabling the model to generate more accurate and context-aware responses.

This is necessary because real-world use cases with LLMs often require access to information beyond the model's training data, especially when dealing with frequently changing or domain-specific knowledge. RAG is one technique we have that helps mitigate hallucination in large language models, ultimately delivering more reliable answers to users.

## What you'll need

Before we get started, make sure you have:

- A Google account to access [Google Colab](https://colab.research.google.com/)
- A [Fireworks API key](https://docs.fireworks.ai/getting-started/quickstart) (don't worry, you get $1 of free credit to start)

I've prepared a Google Colab notebook to accompany this blog post. It allows you to run the code and experiment. You can find it [here](https://github.com/jpreagan/notebooks/blob/main/hello_llama.ipynb).

## Setting up your environment

We need to install a few Python libraries that are necessary for this RAG implementation:

- **LangChain**: A framework that simplifies the development of applications that use LLMs.
- **Sentence Transformers**: Provides pre-trained models for generating embeddings from sentences, which are numerical representations of text.
- **FAISS (Facebook AI Similarity Search)**: A library for efficient similarity search and clustering of dense vectors.

```bash
pip install langchain langchain-fireworks langchain-huggingface langchain-community sentence-transformers faiss-cpu
```

By installing these libraries, we set up our environment to handle text processing, embedding generation, vector storage, and interaction with the LLM.

## Configuring the language model

Next, we'll set up Llama 3.1 through the Fireworks API. Once you have an account, log in, and you can get your API key [here](https://fireworks.ai/account/api-keys).

```python
import getpass
import os

if "FIREWORKS_API_KEY" not in os.environ:
    os.environ["FIREWORKS_API_KEY"] = getpass.getpass("Enter your Fireworks API key: ")

from langchain_fireworks import ChatFireworks
llm = ChatFireworks(
    model="accounts/fireworks/models/llama-v3p1-8b-instruct",
    temperature=0,
    max_tokens=None,
    timeout=None,
)
```

This code checks for your API key and initializes the Llama 3.1 model. We're using a temperature of 0 for consistent outputs, but feel free to adjust this if you want more creative responses. Also, note that you can change the model to `70b` or `405b` if you wish as well.

## Preparing the document

The main purpose of RAG is the ability to retrieve relevant information from a document. Let's set that up:

```python
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import WebBaseLoader

loader = WebBaseLoader(["https://huggingface.co/blog/llama31"])
docs = loader.load()

text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
all_splits = text_splitter.split_documents(docs)

vectorstore = FAISS.from_documents(all_splits, HuggingFaceEmbeddings(model_name="sentence-transformers/all-mpnet-base-v2"))
```

This code loads a particular blog post announcing Llama 3.1 on Hugging Face, splits it into manageable chunks, and stores these chunks in a FAISS vector database. This allows for efficient similarity searches later.

## Creating a Q&A chain

Now, let's create our first RAG pipeline:

```python
from langchain.chains import RetrievalQA
qa_chain = RetrievalQA.from_chain_type(
    llm,
    retriever=vectorstore.as_retriever()
)
```

This chain combines our language model with the vector store, allowing us to ask questions about the document we loaded.

## Testing the Q&A chain

Let's test our chain with a couple of questions. For the first question:

```python
question = "What's new with Llama 3.1?"
result = qa_chain({"query": question})
print(result['result'])
```

We get results something like:

```
According to the text, Llama 3.1 is a new iteration of the Llama family,
and it comes in three sizes: 8B, 70B, and 405B. Each size has a base
model and an instruction-tuned variant. Additionally, Llama Guard 3 and
Prompt Guard were released alongside Llama 3.1. The text also mentions
that an evaluation of Llama 3.1 is being conducted, but the results are
not fully available yet.
```

What happens, though, if we ask for a specific follow-up question:

```python
result = qa_chain({"query": "Can you elaborate on that third point?"})
print(result['result'])
```

I don't know what the third point refers to. Could you please provide more context or clarify what you are referring to? I'll do my best to help.

Hmm... ok, a bit of confusion. You'll notice that while the system can answer both questions, it doesn't maintain context between queries. Let's see how we can improve this experience with a conversational chain.

## Implementing a conversational chain

To maintain context across multiple questions, we'll use a conversational chain.

```python
from langchain.chains import ConversationalRetrievalChain
chat_chain = ConversationalRetrievalChain.from_llm(llm, vectorstore.as_retriever(), return_source_documents=True)

question = "What's new with Llama 3.1?"
result = chat_chain({"question": question, "chat_history": []})
print(result['answer'])
```

```
Llama 3.1 is a new iteration of the Llama family, and it includes several
new features and models. Specifically, it includes eight open-weight
models (three base models and five fine-tuned ones) that are available on
the Hub. These models come in three sizes: 8B, 70B, and 405B, each with
base and instruction-tuned variants. Additionally, Llama Guard 3 and
Prompt Guard were also released.
```

```python
chat_history = [(question, result["answer"])]
followup = "Can you elaborate on that third point?"
followup_answer = chat_chain({"question": followup, "chat_history": chat_history})
print(followup_answer['answer'])
```

```
According to the context, Llama Guard 3 and Prompt Guard are two new
models released by Meta.

Llama Guard 3 is a safeguard model that can classify LLM (Large Language
Model) inputs and generations to detect content that would be considered
unsafe in a risk taxonomy.

Prompt Guard is a small classifier that detects prompt injections and
jailbreaks.
```

This chain can maintain context across multiple questions, providing more coherent and contextually relevant answers to follow-up queries.

## Conclusion

In this blog post, we've built a simple RAG system using Llama 3.1 and LangChain. This system can answer questions about a specific topic by retrieving relevant information from a document and generating responses using a large language model. We've progressed from simple question-answering to maintaining context in a conversation.

Our implementation is a great starting point for learning using an in-memory vector store. Real-world RAG systems, however, typically use persistent databases. This allows them to handle larger datasets and retain knowledge between sessions.

It's also important to note that documents and information often change in real-world scenarios. A production RAG system needs mechanisms to update its knowledge base, ensuring that responses always reflect the most current information.

Happy coding!
