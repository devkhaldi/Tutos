import React from 'react'

function ProjectSummary({ project }) {
  console.log(project)
  return (
    <div className='card z-depth-0 project-summary'>
      <div className='card-content text-grey text-darken-3'>
        <span className='card-title'>{project.title}</span>
        <p>Posted by El khaldi</p>
        <p className='grey-text'>3rd september, 2pm</p>
      </div>
    </div>
  )
}

export default ProjectSummary
