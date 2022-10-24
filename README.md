# Spotify App 🎧

# Introduction :wave:

A work-in-progress app that currently allows Spotify users to search up and play songs, save selected songs into their profile library, and read lyrics (if applicable) for a selected song. Each user logs in and is given a Spotify Access Token so that the client can make requests to Spotify Web API Node, Spotify Web Player, and Lyrics Searcher. Refresh Tokens are used to let the application get new Access Tokens without having to ask the user to log in again.

---

## **Features :computer:**

<img width="750" alt="image" src="https://user-images.githubusercontent.com/76791687/197640249-c364ebd1-42c4-457f-aadf-7c5d8996e745.png">

<img width="750" alt="image" src="https://user-images.githubusercontent.com/76791687/197640371-f160ddfd-addf-4bb8-9f9c-8919ee2af3af.png">

## **Deploying The Project :computer:**

Clone the repository to your local machine using the terminal:

`$ git clone git@github.com:steven94le/spotify-app.git`

### Installing the dependencies:

### The Client

1. Navigate to the client folder `cd client`
2. Install the required packages `yarn install`
3. Once that's done you can start the server with `yarn start`

This will run the app in development mode. Open http://localhost:3000 to view it in the browser! The page will reload if you make changes.

### The Server

1. Navigate to the server folder `cd server`
2. Install the required packages `yarn install`
3. Once that's done you can start the server with `npm run Devstart`

### Resources Used

1. Spotify For Developers - Dashboard (Connect and setup to retrieve Redirect URI, Client Id, and Client Secret)
- https://developer.spotify.com/dashboard/login

2. Spotify For Developers - Authorization Code Flow
- https://developer.spotify.com/documentation/general/guides/authorization/
- https://developer.spotify.com/documentation/general/guides/authorization/code-flow/

3. Library: Spotify Web API Node
- https://github.com/thelinmichael/spotify-web-api-node

3. Library: Spotify Web Player
- https://github.com/gilbarbara/react-spotify-web-playback

3. Library: Lyrics Searcher
- https://github.com/alias-rahil/lyrics-searcher

## **Technologies Used :computer:**

Frontend:
- JavaScript, HTML, CSS
- React.js
- Styled Components

Backend:
- Node.js
- Express

## **Author :bust_in_silhouette:**

- Steven Le (GitHub: [@steven94le](https://github.com/steven94le))
