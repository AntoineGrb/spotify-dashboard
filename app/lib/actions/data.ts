'use server'

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

    const data = await response.json();
    return data;
}

//! Modifier les fonctions avec des paramètres pour les filtres (month, year, all-time) et la limite (10 ou 50)
export const getRecentlyPlayedTracks = async () => { 

    const cookieStore = cookies();
    const accessToken = cookieStore.get('spotify_access_token');
    if (!accessToken) { 
        throw new Error('No access token found');
    }

    const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=10', {
        headers: {
            Authorization: `Bearer ${accessToken.value}`
        }, 
    })

    if (!response.ok) {
        throw new Error('Failed to fetch user data');
        console.error('Failed to fetch user data');
    }

    const data = await response.json();
    return data;
}

export const getTopArtists = async (timeRange: string) => { 

    const cookieStore = cookies();
    const accessToken = cookieStore.get('spotify_access_token');
    if (!accessToken) { 
        throw new Error('No access token found');
    }

    timeRange === 'all-time' ? timeRange = 'long_term' : 
    timeRange === 'year' ? timeRange = 'medium_term' :
    timeRange = 'short_term'

    const response = await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=10`, {
        headers: {
            Authorization: `Bearer ${accessToken.value}`
        }, 
    })

    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }

    const data = await response.json();
    return data;
}

export const getTopTracks = async (timeRange: string) => { 

    const cookieStore = cookies();
    const accessToken = cookieStore.get('spotify_access_token');
    if (!accessToken) { 
        throw new Error('No access token found');
    }

    timeRange === 'all-time' ? timeRange = 'long_term' : 
    timeRange === 'year' ? timeRange = 'medium_term' :
    timeRange = 'short_term'

    const response = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=10`, {
        headers: {
            Authorization: `Bearer ${accessToken.value}`
        }, 
    })

    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }

    const data = await response.json();
    return data;
}