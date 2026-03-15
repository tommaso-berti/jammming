# Jammming

A React application that integrates with the Spotify Web API to search tracks, view user playlists, and save new playlists directly to a Spotify account.

## Overview

This project was built as a practical frontend exercise focused on OAuth 2.0 (PKCE) authentication, React state management, and REST API integration with external services.

## Main Features

- Spotify login via OAuth 2.0 PKCE
- Track search by song title, artist, or album
- Display of the user's Spotify playlists
- Selection of an existing playlist and loading of its tracks
- Creation of a new local playlist from selected tracks
- Saving playlists to Spotify
- Logout with token cleanup from `localStorage`

## Tech Stack

- React 19
- Create React App
- Fetch API
- Spotify Web API
- CSS Modules

## Requirements

- Node.js 18+ (recommended)
- npm 9+ (recommended)
- Spotify account
- Spotify App configured in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)

## Spotify Configuration

The project currently uses `client_id` and `redirect_uri` values hardcoded in the source code:

- `client_id` in `src/auth/login.js` and `src/auth/callback.js`
- `redirect_uri` in `src/auth/login.js`

To use your own Spotify app:

1. Create an app in the Spotify Developer Dashboard.
2. Update the `client_id` in the auth files.
3. Set the correct `redirect_uri` both in the code and in your Spotify app settings.
4. Make sure the callback path is `/callback`.

Note: in local development (for example `http://localhost:3000`), `redirect_uri` must exactly match a URI registered in Spotify, otherwise login will fail.

## Run the Project

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm start
```

Create production build:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## Main Structure

```text
src/
  api/
    spotify.js          # Spotify Web API calls
  auth/
    auth.js             # token/session management
    login.js            # OAuth redirect (PKCE)
    callback.js         # code -> access token exchange
  components/
    SearchBar/
    SearchResults/
    Playlist/
    PlaylistList/
    Track/
    Tracklist/
  App.js                # main UI/state orchestration
```

## Application Flow

1. The user logs in with Spotify.
2. After callback, the access token is stored in `localStorage`.
3. The user can search tracks and add them to the playlist being built.
4. Alternatively, the user can open an existing playlist from their account.
5. The playlist is created and then saved to Spotify with the selected tracks.

## Possible Improvements

- Token expiration handling and refresh token support
- Move `client_id` and URLs to environment variables
- Better error handling and loading states
- Non-blocking UI feedback instead of `alert`
- More tests for components and API integration

## Author

Project developed as a learning exercise on React + Spotify API integration.
