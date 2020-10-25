### Gambit challenge

##Problem Description
This is a challenge designed by Gambit. The data is retrieved from [Live data](http://tuftuf.gambitlabs.fi/feed.txt). This data comprises of a date timestamp and values of first 100 registers. More information on registers are available on pages 39-42 of [docs/tuf-2000m.pdf](https://github.com/gambit-labs/tuf-2000m/blob/master/docs/tuf-2000m.pdf).

Developers are required to chose one of the two options to test their skills:

- Option 1:
  Create a program that parses the data, converts it to human readable data like integers, decimals and strings and presents it in a nice way. Depending on your skills and interests you can create a web service that will provide the conversion data, or you could even create a UI to visualize the data somehow, it is entirely up to you what you make of it!

- Option 2:

Presenting your solution
Provide your solution as a Git repository, e-mail me the link to your private repo, or as a zip file and describe your solution either in the mail or using the README markdown. We appreciate if you can host your solution somewhere in the cloud so we can see an actual demo of it, rather than just looking at code.

I have not worked with data conversions which are not native to Javascript, so I decided to attempt the second option. Solving the first option would require a learning curve to which I look forward tp eagerly. However ,due to time constraint I would focus on the second option in this repo.

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

The data is fetched using useEffect Hook , formatted and saved in the local state. The data is displayed in a table with search functionality and pagination.

## Important Files

useFetch.ts - Contains the lpogic for fetching and formatting the data
home/index.tsx - Contains The entry view for the application.
