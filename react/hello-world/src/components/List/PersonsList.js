import React, { Component } from "react";
import Person from "./Person";

export class PersonsList extends Component {
  render() {
    const persons = [
      { id: 1, name: "Omar", age: 31 },
      { id: 2, name: "Yassine", age: 35 },
      { id: 3, name: "Hicham", age: 19 },
      { id: 4, name: "Mohammed", age: 23 },
      { id: 10, name: "El khaldi", age: 30 }
    ];
    const personsList = persons.map(person => (
      <Person key={person.id} person={person} />
    ));
    return <div>{personsList}</div>;
  }
}

export default PersonsList;
