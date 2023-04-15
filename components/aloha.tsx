import Image from "next/image";
import styles from "./aloha.module.css";
import image from "~/public/images/jpreagan.jpg";

export default function Aloha() {
  return (
    <div className="flex flex-col items-center">
      <p className="font-display text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl md:text-6xl lg:text-7xl lg:leading-none">
        Aloha <span className={`inline-block ${styles.wave}`}>👋</span>,
        I&apos;m
      </p>
      <p className="font-display text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl md:text-6xl lg:text-7xl lg:leading-none">
        <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
          James Reagan
        </span>
        .
      </p>
      <Image
        className="my-8"
        src={image}
        alt="James Reagan"
        width={250}
        height={250}
        priority
        style={{ borderRadius: "100%" }}
      />
      <p className="my-2 md:text-lg lg:text-xl">
        💻 I&apos;m a software engineer 🌴 living in Hawaii.
      </p>
      <p className="my-2 md:text-lg lg:text-xl">
        💕 Lover of 80&apos;s music and 🍜 udon noodles!
      </p>
      <div className="my-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <button
          type="submit"
          className="whitespace-nowrap rounded-md bg-pink-600 bg-gradient-to-r from-purple-800 to-pink-600 px-4 py-2 text-center font-display text-white sm:text-left"
        >
          Subscribe to my newsletter
        </button>
        <div className="rounded-md bg-pink-600 bg-gradient-to-r from-purple-800 to-pink-600 p-px">
          <button className="w-full rounded-md bg-gray-900 px-4 py-2">
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
}
