import React from 'react';
import phonebook from '../services/phonebook';

const deletePerson = ({id, name}, persons, setPersonHandler) => {
    if (window.confirm(`Delete ${name}?`)) {
        phonebook
            .deletePerson(id)
            .then(() => setPersonHandler(persons.filter(person => person.id !== id)));
    }
}

const Person = ({person, persons, setPersonHandler}) => {
    return (
        <p>
            {person.name} {person.number}
            <button onClick={() => deletePerson(person, persons, setPersonHandler)}>delete</button>
        </p>
    );
}

export default Person;
