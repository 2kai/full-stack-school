###### How to run "Course information" application

```shell
docker run -p 80:3000 -v "$PWD":/opt -u node -w /opt node:17.1.0-alpine3.14 sh -c 'cd /opt/applications/courseinfo && npm i && NODE_OPTIONS=--openssl-legacy-provider npm start'
```

###### How to run "Unicafe" application

```shell
docker run -p 80:3000 -v "$PWD":/opt -u node -w /opt node:17.1.0-alpine3.14 sh -c 'cd /opt/applications/unicafe && npm i && NODE_OPTIONS=--openssl-legacy-provider npm start'
```

###### How to run "Anecdotes" application

```shell
docker run -p 80:3000 -v "$PWD":/opt -u node -w /opt node:17.1.0-alpine3.14 sh -c 'cd /opt/applications/anecdotes && npm i && NODE_OPTIONS=--openssl-legacy-provider npm start'
```

###### How to run "Phonebook" application

```shell
docker run -p 80:3000 -p 3001:3001 -v "$PWD":/opt -u node -w /opt node:17.1.0-alpine3.14 sh -c 'cd /opt/applications/phonebook && npm i && (npm run server&) && NODE_OPTIONS=--openssl-legacy-provider npm start'
```

###### How to run "Data for countries" application

```shell
docker run -p 80:3000 -v "$PWD":/opt -u node -w /opt -e REACT_APP_API_KEY=<OPENWEATHERMAP_API_KEY> node:17.1.0-alpine3.14 sh -c 'cd /opt/applications/countries && npm i && NODE_OPTIONS=--openssl-legacy-provider npm start'
```

##### Part 2

###### Exercises 2.1, 2.2, 2.3, "Course information" application

Open http://localhost and see the same picture as in Exercise 1.5. Just a refactoring was done in these exercises. So
visually nothing has been changed.

###### Exercise 2.4, "Course information" application

Open http://localhost and see that now multiple course can be shown on the page.

###### Exercise 2.5, "Course information" application

Open http://localhost and see the same picture as in Exercise 2.4. Just a refactoring was done in this exercise. So
visually nothing has been changed.

###### Exercise 2.6, "Phonebook" application

Open http://localhost and see list of persons and a form to add new person to the phonebook.

###### Exercise 2.7, "Phonebook" application

Open http://localhost and see list of persons and a form to add new person to the phonebook. Now there is a validation
rule to prevent duplicates in the phonebook.

###### Exercise 2.8, "Phonebook" application

Open http://localhost and see list of persons and a form to add new person to the phonebook. Now you can add a number as
well and also validation rules were added to avoid empty name or number in the phonebook.

###### Exercise 2.9, "Phonebook" application

Open http://localhost and see list of persons and a form to add new person to the phonebook. Now you can filter names.

###### Exercises 2.10, 2.11, "Phonebook" application

Open http://localhost and see the same picture as in Exercise 2.9. Just a refactoring was done in these exercises. So
visually nothing has been changed.

###### Exercise 2.12, "Data for countries" application

Open http://localhost and see the first version of "Data for countries" application.

###### Exercise 2.13, "Data for countries" application

Open http://localhost and see "Data for countries" application. You can filter countries, click "show" button to get
information about particular country or type in the full name of country to get this information.

###### Exercise 2.14, "Data for countries" application

Open http://localhost and see weather information for the capital of selected country.

###### Exercise 2.15, "Phonebook" application

Open http://localhost and see list of persons and a form to add new person to the phonebook. Now name and number are
stored on the server.

###### Exercise 2.16, "Phonebook" application

Open http://localhost and see the same picture as in Exercise 2.15. Just a refactoring was done in this exercise. So
visually nothing has been changed.

##### Part 1

###### Exercise 1.1, "Course information" application

Open http://localhost and see the first version of "Course information" application.

###### Exercises 1.2, 1.3, 1.4, 1.5, "Course information" application

Open http://localhost and see the same picture as in Exercise 1.1. Just a refactoring was done in these exercises. So
visually nothing has been changed.

###### Exercise 1.6, "Unicafe" application

Open http://localhost and see the first version of "Unicafe" application. You can already click the buttons that will
increase counters.

###### Exercise 1.7, "Unicafe" application

Open http://localhost and see the extended statistics including all, average and positive percentage and refreshing on
button click.

###### Exercise 1.8, "Unicafe" application

Open http://localhost and see the same picture as in Exercise 1.7. Just a refactoring was done in this exercise. So
visually nothing has been changed.

###### Exercise 1.9, "Unicafe" application

Open http://localhost and see a message "No feedback given" if there is no feedback yet.

###### Exercise 1.10, "Unicafe" application

Open http://localhost and see the same picture as in Exercise 1.9. Just a refactoring was done in this exercise. So
visually nothing has been changed.

###### Exercise 1.11, "Unicafe" application

Open http://localhost and see that statistics part is shown now in HTML table.

###### Exercise 1.12, "Anecdotes" application

Open http://localhost and see a page with anecdote. Click the button "next anecdote" and get new (random) one.

###### Exercise 1.13, "Anecdotes" application

Open http://localhost and see a page with anecdote. Now there are votes counter and "vote" button which increase vote
counter by one.

###### Exercise 1.14, "Anecdotes" application

Open http://localhost and see a page with anecdote. Now there is an anecdote with most votes as well.
