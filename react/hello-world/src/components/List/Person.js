import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>ID : {person.id} , Name : {person.name} , Age : {person.age} </h2>
        </div>
    )
}

export default Person
