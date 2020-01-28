import React from 'react'
import ProjectSummary from './ProjectSummary'
import { useSelector } from 'react-redux'

function ProjectList() {
  const projects = useSelector(state => state.project.projects)
  return (
    <div className='project-list section'>
      {projects.map(project => (
        <ProjectSummary key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectList
