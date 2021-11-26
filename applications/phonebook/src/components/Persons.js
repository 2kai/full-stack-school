import React from 'react';
import Person from './Person';

const Persons = ({persons, filter}) =>
    persons
        .filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
        .map((person) => <Person key={person.id} person={person}/>)
;

export default Persons;
