import React, {useEffect, useState} from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => setPersons(response.data));
    }, []);

    const [newName, setNewName] = useState('');
    const handleNameChange = (event) => setNewName(event.target.value);

    const [newNumber, setNewNumber] = useState('');
    const handleNumberChange = (event) => setNewNumber(event.target.value);

    const [filter, setFilter] = useState('');
    const handleFilterChange = (event) => setFilter(event.target.value);

    const addPerson = (event) => {
        event.preventDefault();

        if (newName.length <= 0) {
            alert('name is required to add to phonebook');
            return;
        }

        if (newNumber.length <= 0) {
            alert('number is required to add to phonebook');
            return;
        }

        if (persons.findIndex(({name}) => name === newName) >= 0) {
            alert(`${newName} is already added to phonebook`);
            return;
        }

        setPersons(persons.concat({name: newName, number: newNumber, id: persons.length + 1}));
        setNewName('');
        setNewNumber('');
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filterChangeHandler={handleFilterChange}/>
            <h2>Add a new</h2>
            <PersonForm
                name={newName}
                nameChangeHandler={handleNameChange}
                number={newNumber}
                numberChangeHandler={handleNumberChange}
                addPersonHandler={addPerson}
            />
            <h2>Numbers</h2>
            <Persons persons={persons} filter={filter}/>
        </div>
    );
}

export default App;
