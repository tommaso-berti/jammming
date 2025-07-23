import React from 'react';
import { redirectToSpotify } from '../../auth/login.js';

export default function LoginButton() {
    return (
        <button onClick={redirectToSpotify}>
            Login with Spotify
        </button>
    );
}