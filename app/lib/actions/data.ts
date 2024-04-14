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

export const getRecentlyPlayedTracks = async (limit: number) => { 

    const cookieStore = cookies();
    const accessToken = cookieStore.get('spotify_access_token');
    if (!accessToken) { 
        throw new Error('No access token found');
    }

    const response = await fetch(`https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`, {
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

export const getTopArtists = async (timeRange: string, limit: number) => { 

    const cookieStore = cookies();
    const accessToken = cookieStore.get('spotify_access_token');
    if (!accessToken) { 
        throw new Error('No access token found');
    }

    timeRange === 'all-time' ? timeRange = 'long_term' : 
    timeRange === 'year' ? timeRange = 'medium_term' :
    timeRange = 'short_term'

    const response = await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=${limit}`, {
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

export const getTopTracks = async (timeRange: string, limit: number) => { 

    const cookieStore = cookies();
    const accessToken = cookieStore.get('spotify_access_token');
    if (!accessToken) { 
        throw new Error('No access token found');
    }

    timeRange === 'all-time' ? timeRange = 'long_term' : 
    timeRange === 'year' ? timeRange = 'medium_term' :
    timeRange = 'short_term'

    const response = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=${limit}`, {
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

export const getAudioFeatures = async (ids:string) => { 

    const cookieStore = cookies();
    const accessToken = cookieStore.get('spotify_access_token');
    if (!accessToken) { 
        throw new Error('No access token found');
    }

    const response = await fetch(`https://api.spotify.com/v1/audio-features?ids=${ids}`, {
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

export const getUserPlaylists = async () => { 

    const cookieStore = cookies();
    const accessToken = cookieStore.get('spotify_access_token');
    if (!accessToken) { 
        throw new Error('No access token found');
    }

    const response = await fetch(`https://api.spotify.com/v1/me/playlists`, {
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

export const getPlaylist = async (playlistId: string) => { 

    const cookieStore = cookies();
    const accessToken = cookieStore.get('spotify_access_token');
    if (!accessToken) { 
        throw new Error('No access token found');
    }

    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
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

export const getPlaylistTracks = async (playlistId: string) => { 

    const cookieStore = cookies();
    const accessToken = cookieStore.get('spotify_access_token');
    if (!accessToken) { 
        throw new Error('No access token found');
    }

    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
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