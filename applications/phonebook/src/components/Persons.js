import React from 'react';
import Person from './Person';

const Persons = ({persons, filter, setPersonHandler}) =>
    persons
        .filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
        .map((person) => <Person key={person.id} person={person} persons={persons} setPersonHandler={setPersonHandler}/>)
;

export default Persons;
