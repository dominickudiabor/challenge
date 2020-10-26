### Gambit challenge

##Problem Description
This is a challenge designed by Gambit. The data is retrieved from [Live data](http://tuftuf.gambitlabs.fi/feed.txt). This data comprises of a date timestamp and values of first 100 registers. More information on registers are available on pages 39-42 of [docs/tuf-2000m.pdf](https://github.com/gambit-labs/tuf-2000m/blob/master/docs/tuf-2000m.pdf).

Developers are required to chose one of the two options to test their skills:

- Option 1:
  Create a program that parses the data, converts it to human readable data like integers, decimals and strings and presents it in a nice way. Depending on your skills and interests you can create a web service that will provide the conversion data, or you could even create a UI to visualize the data somehow, it is entirely up to you what you make of it!

- Option 2:

## Built With

- [React](https://reactjs.org/) - The web framework used.
- [TypeScript](https://www.typescriptlang.org/) - For typing the data..
- [Axios](https://www.npmjs.com/package/axios) - Package for fetching data.
- [Material UI](https://d3js.org) - For User interface.
- React version 17.0.1 .

## Deployment

This web application is deployed in [Netlify](https://dominic-gambit-challenge.netlify.app/).

## Requirements

All dependencies can be installed using

```
yarn install
```

## Description

I have not previously worked with data conversions which are not native to Javascript, so I decided to attempt the second option. The data is fetched using useEffect Hook over an HTTPS connection. To avoid a CORS errors I used a proxy. Once the data is fetched I formated is as an object with descriptive properties as given in the documentation. The object is then saved in local state. The data is displayed in a table with search functionality and pagination.

## Important Files

useFetch.ts - Contains the lpogic for fetching and formatting the data
home/index.tsx - Contains The entry view for the application.
