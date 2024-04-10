'use server'

import { redirect } from 'next/navigation';

export const updateFilters = async (formData: FormData) => { 
    const selectedFilter = formData.get('filter');
    console.log('active filtre' , selectedFilter)
    console.log(typeof selectedFilter)

    if (selectedFilter === null) {
        return;
    }

    const params = new URLSearchParams([
        ['filter', selectedFilter.toString()]
    ]);
    redirect(`/dashboard?${params.toString()}`);

}