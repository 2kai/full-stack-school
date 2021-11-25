It is recommended to put each part and exercises to the corresponding directories. I will try to follow this
recommendation but alongside I will make a tag after each exercise. So with `git checkout v0.4` someone can easily
checkout the repository on the moment and state of particular exercise.

Many things can be changed during the course and this version of README can be not relevant for old tasks. Then checkout
on the tag will bring correct version of README for particular exercise.

README file for Part 0 is located `./part0/README.md`. README for applications from Part 1-2 is located
in `./applications/README.md`

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
