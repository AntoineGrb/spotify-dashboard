import { NextApiRequest, NextApiResponse } from "next";

//API routes interfaces
export interface SpotifyTokenResponse { 
    access_token: string;
    token_type: string;
    scope: string;
    expires_in: number;
    refresh_token: string;
    error?: string;
}

//Recently played response interfaces
export interface RecentlyPlayedResponse {
    items: RecentlyPlayedItemProps[];
}

interface RecentlyPlayedItemProps {
    track: TrackProps;
}

interface TrackProps {
    album: AlbumProps;
    name: string;
    artists: ArtistsProps[];
}

interface AlbumProps {
    images: ImageProps[];
}

interface ArtistsProps {
    name: string;
}

interface ImageProps {
    url: string;
}
