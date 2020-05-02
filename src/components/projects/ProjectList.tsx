import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";
import ProjectModel from "../../models/Project";

interface Props {
    projects: [ProjectModel];
}

const ProjectList = ({ projects }: Props) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <ProjectSummary project={project} />
          </Link>
        ))}
    </div>
  );
};

export default ProjectList;
