import React from 'react'

function ProjectDetails(props) {
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - {props.match.params.id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea pariatur excepturi
            laudantium, iure maiores, dolorem ducimus dolor ipsum non totam nesciunt deleniti soluta
            blanditiis quos perferendis recusandae earum nisi assumenda.
          </p>
        </div>
        <div className='card-action grey lighten-3 grey-text'>
          <div>Posted by El khaldi Abderrahim</div>
          <div>2nd September, 2 pm</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
