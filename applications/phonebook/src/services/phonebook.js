import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => axios.get(baseUrl);

const createPerson = newObject => axios.post(baseUrl, newObject);

const deletePerson = id => axios.delete(`${baseUrl}/${id}`);

const phonebook = {getAll, createPerson, deletePerson};

export default phonebook;
