import React from "react";

import Language from "./Language";

import * as styles from "./Project.css";

import type {
  Project as ProjectType,
  Language as LanguageType,
} from "../pages/projects";

type ProjectProps = {
  project: ProjectType;
};

export default function Project({
  project: { url, name, description, languages, stargazerCount },
}: ProjectProps) {
  return (
    <a href={url} className={styles.link}>
      <article>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        {languages.nodes.map((language: LanguageType) => (
          <Language
            key={language.id}
            language={language}
            stargazerCount={stargazerCount}
          />
        ))}
      </article>
    </a>
  );
}
