'use client'

import {useState, useEffect} from 'react';
import Indicator from '@/app/lib/components/Indicator/Indicator';

export default function Indicators() { 

    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async (url: string) => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                console.log('user data: ', data)
            } catch {
                console.error('No data')
            }
            
        }
        fetchData('https://api.spotify.com/v1/me')
    },[])

    return (
        <section className='flex justify-start gap-4 pb-10 lg:pb-14'>
            <Indicator label='Heures' value={60} />
            <Indicator label='Chansons' value={350}/>
            <Indicator label='Artistes' value={72}/>
        </section>
    )
}