It is recommended to put each part and exercises to the corresponding directories. I will try to follow this
recommendation but alongside I will make a tag after each exercise. So with `git checkout v0.4` someone can easily
checkout the repository on the moment and state of particular exercise. Many things can be changed during the course and
this version of README can be not relevant for old tasks. Then checkout on the tag will bring correct version of README
for particular exercise.

##### Part 0

###### Exercise 0.4

Diagram of requests - part0/0.4.txt and part0/0.4.png

###### Exercise 0.5

Diagram of requests - part0/0.5.txt and part0/0.5.png

###### Exercise 0.6

Diagram of requests - part0/0.6.txt and part0/0.6.png

##### Part 1

###### How to run "Course information" application

```shell
docker run -p 80:3000 -v "$PWD":/opt -u node -w /opt node:17.1.0-alpine3.14 sh -c 'cd /opt/part1/courseinfo && npm i && NODE_OPTIONS=--openssl-legacy-provider npm start'
```

###### How to run "Unicafe" application

```shell
docker run -p 80:3000 -v "$PWD":/opt -u node -w /opt node:17.1.0-alpine3.14 sh -c 'cd /opt/part1/unicafe && npm i && NODE_OPTIONS=--openssl-legacy-provider npm start'
```

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

##### Development notes

```shell
docker run --rm -it -p 80:3000 -v "$PWD":/opt -u node -w /opt node:17.1.0-alpine3.14 sh
```

For Node.JS 17.1.0 run application as follows:

```shell
NODE_OPTIONS=--openssl-legacy-provider npm start
```

More information see on
[Stack Overflow](https://stackoverflow.com/questions/69665222/node-17-0-1-causes-some-error-digital-envelope-routinesunsupported)
