export const getUserProfile = async () => { 

    const accessToken = 'BQAafMs6dxBP1-HD-45N70Ayx3JeIj6cU_bSuzZamzZ-3nt6iWPPvZUWYJfaodkf4CLiWIefYRP2-6i8nNwhkLTl97h9Q2OrpOjXknI8-jc3vpGn5PXjCqNjkH4pYjybjVc-xrKgjK1lkxDWE5SCZz0I_XrdxcY89bGA8xQ46iOHV2vOsSe12K5U7ymxvUsrouJg3XaEN54rn_1RnGld4A'

    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }

    const userData = await response.json();
    console.log('response', response);

    return userData;
}