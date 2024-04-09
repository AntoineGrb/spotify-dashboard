import { cookies } from 'next/headers';

export const getUserProfile = async () => { 

    const cookieStore = cookies();
    const accessToken = cookieStore.get('spotify_access_token');
    if (!accessToken) { 
        throw new Error('No access token found');
    }

    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: `Bearer ${accessToken.value}`
        }
    })

    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }

    const userData = await response.json();
    console.log('response', response);

    return userData;
}