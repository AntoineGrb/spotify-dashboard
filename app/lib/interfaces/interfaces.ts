
//API routes interfaces
export interface SpotifyTokenResponse { 
    access_token: string;
    token_type: string;
    scope: string;
    expires_in: number;
    refresh_token: string;
    error?: string;
}

export interface SearchParamsProps {
    [key: string]: string;
}
