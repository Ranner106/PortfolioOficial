import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { ProjectSectionContainer, ProjectCardsContainer } from './style';
import { projects } from '../data';

function ProjectMain() {
  return (
    <ProjectSectionContainer
      id="Projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      <h1>Projects</h1>
      <div className="purple-line" />

      <ProjectCardsContainer>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name + project.description}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            repository={project.repository}
            deploy={project.deploy ?? ''}
            image={project.image}
            position={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </ProjectCardsContainer>
    </ProjectSectionContainer>
  );
}

export default ProjectMain;
