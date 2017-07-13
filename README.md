# An example of Hybrid and Native (Side by Side) comparison application

## About the app
This repository is a comparison project that compares an Ionic Application to a Native (Swift 3.0 Xcode-beta6) application.  The purpose is to show that for most applications; performance difference is almost identical.

The majority of performance hits on applications come from
* Large network requests
* Lack of lazy-loading
* Non-optimized graphics
* Network, network, network.

## To run

In ionic, simply run
```
npm install
ionic serve -lcc
```

In native, open the project via xcode.

## Credit

We based our Ionic Application off of lorismaz's Todo list native app.  It is simple enough to easily reproduce, so we built our own (identical) version in Ionic.  We are copying it here as we will be making edits and evolving the application for more performance showcase enhancements.

https://github.com/lorismaz/ToutDoux

Thank you Lorismaz :)
