import React from "react";

import type { Language as LanguageType } from "../pages/projects";

import * as styles from "./Language.css";

type LanguageProps = {
  language: LanguageType;
  stargazerCount: number;
};

export default function Language({
  language: { name, color },
  stargazerCount,
}: LanguageProps) {
  return (
    <p>
      <span style={{ backgroundColor: color }} className={styles.color} />{" "}
      <span itemProp="programmingLanguage">{name}</span>
      {stargazerCount > 0 && (
        <span>
          {" "}
          <span role="img" aria-label="star">
            ⭐️
          </span>{" "}
          {stargazerCount}
        </span>
      )}
    </p>
  );
}
