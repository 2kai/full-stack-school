import React, {useState} from 'react';

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', number: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4},
    ]);

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
            <div>
                filter shown with <input onChange={handleFilterChange}/>
            </div>
            <h2>add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {
                persons
                    .filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
                    .map(({id, name, number}) => <p key={id}> {name} {number}</p>)
            }
        </div>
    );
}

export default App;
