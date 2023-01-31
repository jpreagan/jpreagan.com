import type { Repository } from "../lib/types";

type Props = {
  project: Repository;
};

export default function Project({
  project: { name, description, url, primaryLanguage, stargazerCount },
}: Props) {
  return (
    <a
      href={url}
      className="block cursor-pointer rounded-md border border-gray-300 p-4 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1.5 dark:border-gray-700"
    >
      <article>
        <h2 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {name}
          </span>
        </h2>
        <p className="my-2">{description}</p>
        <p>
          <span
            style={{ backgroundColor: primaryLanguage?.color }}
            className="primary-language-color"
          />{" "}
          <span itemProp="programmingLanguage">{primaryLanguage?.name}</span>
          {stargazerCount > 0 && (
            <span>
              <span role="img" aria-label="star" className="pl-4 pr-1">
                ⭐️
              </span>
              {stargazerCount}
            </span>
          )}
        </p>
      </article>
    </a>
  );
}
