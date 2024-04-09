import { serialize  } from "cookie";
import fetch from 'node-fetch';
import { NextApiRequest, NextApiResponse } from "next";
import {SpotifyTokenResponse } from "@/src/lib/interface";

// This API route is used to handle the callback from the Spotify login page

export default async function callback(req: NextApiRequest, res: NextApiResponse) { 

    // Extract the code from the query parameters. The code can be a string or an array of strings
    const code = typeof req.query.code === 'string' ? req.query.code : req.query.code?.[0] 

    if (!code) {
        return res.status(400).send("Code is required");
    }
    if (!process.env.REDIRECT_URI) { 
        return res.status(400).send("Missing environment variables");
    }

    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", { 
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString("base64")}`
        },
        body: new URLSearchParams({
            grant_type: "authorization_code",
            code,
            redirect_uri: process.env.REDIRECT_URI
        }).toString()
    });

    const data = await tokenResponse.json() as SpotifyTokenResponse;

    if (data.error) {
        console.error(data.error);
        return res.status(400).send('Failed to retrieve access token');
    }
    const { access_token, refresh_token, expires_in } = data;

    // Set the access token and refresh token as cookies
    const cookies = [
        serialize("spotify_access_token", access_token, { 
            path: "/", 
            httpOnly: true, 
            maxAge: expires_in, 
            secure: process.env.NODE_ENV === 'production', 
            // sameSite: 'strict'
        }),
        serialize("spotify_refresh_token", refresh_token, { 
            path: "/", 
            httpOnly: true, 
            maxAge: 60 * 60 * 24 * 7, // 1 week
            secure: process.env.NODE_ENV === 'production',
            // sameSite: 'strict' 
        }) 
    ]
    res.setHeader("Set-Cookie", cookies); // Set the cookies
    res.redirect("/dashboard"); // Redirect the user to the dashboard
}