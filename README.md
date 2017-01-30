# Frontend Take-Home Exercise for Converge

The purpose of this exercise is to test your ability to build a basic front-end
application in react which can pull data from an api.

The Converge Platform allows our users to visualise and compare sensor data from
their sites. The aim for this exercise is to build a simple application which
loads sensors from an api server and displays them with their latest data in a
list showing the sensor name, when it last reported, and its latest value. It
should also display a graph of the last five minute's worth of data. This does
not need to be a real-time, streaming system but can just display a static
snapshot of the data.

You are expected to create:

1. The web client (a dashboard with which to view sensors), built in React.
2. A basic http api server to serve data from the json file to the web client.

The HTTP server should be written in node.js, and need only be very simple,
serving a list of sensors via `GET /sensors` and serving data for each sensor
via `GET /sensors/:sensorId`.

This should be done in a git repository to which we can be given access (so
something like github, bitbucket, etc.).

The layout of this dashboard is up to you to determine. It should be useful for
viewing, at a glance, the state of various sensors.

The design aesthetic is not explicitly being tested here, but the ability to
structure information in a useful way to the user is a factor. The main factors
in this exercise are code structure and cleanliness (as well as the end result
being functional).

## Included files

1. README.md (this file)
2. data.json (data for the sensors, note that they have fixed timestamps)
3. sensors.json (information for each sensor)
4. .eslintrc (eslint config against which your code should lint successfully)
5. package.json (very basic, just includes eslint and a script to lint)

For your convenience, we have included a script `npm run lint` which will check
your code against the eslint config.

# How to run

Run Yarn then Yarn start to start the app. You should be able to access it on http://localhost:3000/.

# Troubleshooting issue due to latest webpack 2.2.0: 

npm uninstall webpack then npm install webpack@2.1.0-beta.22 --save-dev should fix the problem.

