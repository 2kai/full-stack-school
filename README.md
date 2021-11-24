It is recommended to put each part and exercises to the corresponding directories. I will try to follow this
recommendation but alongside I will make a tag after each exercise. So with `git checkout v0.4` someone can easily
checkout the repository on the moment and state of particular exercise.

##### Part 0

###### Exercise 0.4

Diagram of requests - part0/0.4.txt and part0/0.4.png

###### Exercise 0.5

Diagram of requests - part0/0.5.txt and part0/0.5.png

###### Exercise 0.6

Diagram of requests - part0/0.6.txt and part0/0.6.png

##### Part 1

###### Exercise 1.1

```shell
docker run -p 80:3000 -v "$PWD":/opt -u node -w /opt node:17.1.0-alpine3.14 sh -c 'cd /opt/part1/courseinfo && npm i && NODE_OPTIONS=--openssl-legacy-provider npm start'
```

Open http://localhost and see the first version of "Course information" application

##### Development notes

```shell
docker run --rm -it -p 80:3000 -v "$PWD":/opt -u node -w /opt node:17.1.0-alpine3.14 sh
```

For Node.JS 17.1.0 run application as follows:

```shell
NODE_OPTIONS=--openssl-legacy-provider npm start
```

More information see
on [Stack Overflow](https://stackoverflow.com/questions/69665222/node-17-0-1-causes-some-error-digital-envelope-routinesunsupported)

