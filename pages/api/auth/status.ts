import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const accessToken = req.cookies.spotify_access_token;

    if (!accessToken) {
        console.error('no access token')
        return res.status(401).json({ isLoggedIn: false });
    }

    try {
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        const userData = await response.json();
        res.status(200).json({ isLoggedIn: true, user: userData});

    } catch (error) { 
        console.error('Error fetching user data', error);
        return res.status(500).json({ isLoggedIn: false, error:'Failed to fetch user data from Spotify'});
    }
}