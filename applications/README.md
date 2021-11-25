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

##### Part 2

###### Exercise 2.1, 2.2, 2.3, "Course information" application

Open http://localhost and see the same picture as in Exercise 1.5. Just a refactoring was done in these exercises. So
visually nothing has been changed.

##### Part 1

###### Exercise 1.1, "Course information" application

Open http://localhost and see the first version of "Course information" application.

###### Exercises 1.2, 1.3, 1.4, 1.5, "Course information" application

Open http://localhost and see the same picture as in Exercise 1.1. Just a refactoring was done in these exercises. So
visually nothing has been changed.

###### Exercises 1.6, "Unicafe" application

Open http://localhost and see the first version of "Unicafe" application. You can already click the buttons that will
increase counters.

###### Exercises 1.7, "Unicafe" application

Open http://localhost and see the extended statistics including all, average and positive percentage and refreshing on
button click.

###### Exercises 1.8, "Unicafe" application

Open http://localhost and see the same picture as in Exercise 1.7. Just a refactoring was done in this exercise. So
visually nothing has been changed.

###### Exercises 1.9, "Unicafe" application

Open http://localhost and see a message "No feedback given" if there is no feedback yet.

###### Exercises 1.10, "Unicafe" application

Open http://localhost and see the same picture as in Exercise 1.9. Just a refactoring was done in this exercise. So
visually nothing has been changed.

###### Exercises 1.11, "Unicafe" application

Open http://localhost and see that statistics part is shown now in HTML table.

###### Exercises 1.12, "Anecdotes" application

Open http://localhost and see a page with anecdote. Click the button "next anecdote" and get new (random) one.

###### Exercises 1.13, "Anecdotes" application

Open http://localhost and see a page with anecdote. Now there are votes counter and "vote" button which increase vote
counter by one.

###### Exercises 1.14, "Anecdotes" application

Open http://localhost and see a page with anecdote. Now there is an anecdote with most votes as well.
