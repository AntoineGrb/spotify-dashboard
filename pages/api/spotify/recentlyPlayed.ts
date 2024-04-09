import fetch from 'node-fetch';
import { NextApiRequest, NextApiResponse } from "next";

export default async function recentlyPlayed(req: NextApiRequest, res: NextApiResponse) { 
    
    //Acces to cookies to get the access token
    const accessToken = req.cookies.spotify_access_token;
    if (!accessToken) {
        return res.status(401).send("Access token is required");
    }

    const spotifyResponse = await fetch("https://api.spotify.com/v1/me/player/recently-played", {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const data = await spotifyResponse.json();

    if (spotifyResponse.status !== 200) {
        return res.status(spotifyResponse.status).json({error: 'Failed to retrieve user data'});
    }

    res.status(200).json(data);
}