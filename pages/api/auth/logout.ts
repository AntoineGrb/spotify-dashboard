import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from 'next/navigation'


export default function logout(req: NextApiRequest, res: NextApiResponse) { 
    
    // Clear cookies by setting their maxAge to 0
    const cookies = [
        serialize("spotify_access_token", '', { 
            path: "/", 
            httpOnly: true, 
            maxAge: 0, 
        }),
        serialize("spotify_refresh_token", '', { 
            path: "/", 
            httpOnly: true, 
            maxAge: 0
        }) 
    ]
    res.setHeader("Set-Cookie", cookies); // Set the cookies
    res.end()
}