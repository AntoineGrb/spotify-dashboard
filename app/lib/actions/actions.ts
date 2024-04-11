'use server'

import { redirect } from 'next/navigation';

//Handle the form data to update the filters and reload data with the new filter
export const updateFilters = async (formData: FormData) => { 
    const selectedFilter = formData.get('filter');
    console.log(selectedFilter)

    if (selectedFilter === null) {
        return;
    }

    const params = new URLSearchParams([
        ['filter', selectedFilter.toString()]
    ]);
    redirect(`/dashboard?${params.toString()}`);

}