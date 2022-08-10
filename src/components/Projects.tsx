import React from "react";

import Project from "./Project";

import * as styles from "./Projects.css";

import type { Project as ProjectType } from "../pages/projects";

type ProjectsProps = {
  projects: ProjectType[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className={styles.projects}>
      {projects.map((project: ProjectType) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}
