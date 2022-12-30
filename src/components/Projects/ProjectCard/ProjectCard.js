/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { HiExternalLink } from 'react-icons/hi';
import { ProjectCardContainer } from './style';

function ProjectCard(props) {
  const {
    position,
    image,
    name,
    description,
    technologies,
    repository,
    deploy,
  } = props;
  return (
    <ProjectCardContainer
      initial={{ opacity: 0, x: position === 'right' ? 200 : -200 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <div className="project-image-container">
        <img className="project-image" src={image} alt={name} />
      </div>

      <div className="info-container">
        <p className="project-name">{name}</p>
        <p className="project-description">{description}</p>

        <div className="project-techs">
          {technologies.map((item, index) => (
            <span className="tech" key={item + index}>
              {item}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a target="_blank" href={repository} rel="noreferrer">
            Repository <HiExternalLink className="icon" size={16} />
          </a>
          {deploy && (
            <a target="_blank" href={deploy} rel="noreferrer">
              Live preview <HiExternalLink className="icon" size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="purple-line" />
    </ProjectCardContainer>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf.isRequired,
  repository: PropTypes.string.isRequired,
  deploy: PropTypes.string.isRequired,
};

export default ProjectCard;
