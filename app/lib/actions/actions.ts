'use server'

import { redirect } from 'next/navigation';

//Handle the form data to update the filters and reload data with the new filter
export const updateFilters = async (formData: FormData) => {
    
    for (let entry of formData.entries()) { 
        const [key, value] = entry;

        //Verify if the key is a filter with a correct value
        if (key.startsWith('filter-') && ['month', 'year', 'all-time'].includes(value.toString())) {
            const pageName = key.replace('filter-', '');
            if (!value) {
                return;
            }
            const filterValue = value.toString();
            const params = new URLSearchParams([
                ['filter', filterValue]
            ]);
            redirect(`/${pageName}?${params.toString()}`);
        }

    }}