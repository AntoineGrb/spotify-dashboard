import { serialize  } from "cookie";
import { URLSearchParams } from "url";
import { NextApiRequest, NextApiResponse } from "next";

// This API route is used to build the Spotify login URL and redirect the user to it

export default function login(req: NextApiRequest, res: NextApiResponse) { 
    const state = generateRandomString(16); // Generate a random string for the state parameter
    const scope = "user-read-private user-read-email"; // Define the scopes for the request

    // Check if the environment variables are set
    if (!process.env.CLIENT_ID || !process.env.REDIRECT_URI) { 
        return res.status(400).send("Missing environment variables");
    }

    res.setHeader("Set-Cookie", serialize("spotify_auth_state", state, { path: "/", httpOnly:true })); // Set the state cookie
    const queryParams = new URLSearchParams({
        response_type: "code",
        client_id: process.env.CLIENT_ID,
        scope,
        redirect_uri: process.env.REDIRECT_URI,
        state
    }).toString(); // Create the query parameters string

    const loginUrl = `https://accounts.spotify.com/authorize?${queryParams}`;
    res.redirect(loginUrl); // Redirect the user to the Spotify login page
}

function generateRandomString(length: number): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}
