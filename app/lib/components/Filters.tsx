'use client'

import { useState, useRef } from "react";
import { updateFilters } from "../actions/actions";

export default function Filters() {

    const [selected, setSelected] = useState<'month' | 'year' | 'all-time'>('month');
    const formRef = useRef<HTMLFormElement>(null);

    const handleSelect = (selectedFilter: 'month' | 'year' | 'all-time') => { 
        console.log(selectedFilter)
        if (formRef.current) {
            const input = formRef.current.querySelector('input[name="filter"]') as HTMLInputElement;
            if (input) {
                input.value = selectedFilter;
                console.log('input' , input.value)
                setSelected(selectedFilter);
                formRef.current.requestSubmit();
            }
        }
    }

    return (
        <>
        <form ref={formRef} action={updateFilters}>
            <section className="w-full flex justify-center pb-8">
                <input type="hidden" name="filter" defaultValue={'month'} />
                <div onClick={() => handleSelect('month')} className={`w-full flex justify-center items-center border-b-2 pb-1 ${selected === 'month' && 'border-green'}`}>
                    <p className={` cursor-pointer ${selected === 'month' && 'text-green font-semibold'}`}> Month </p>
                </div>
                <div onClick={() => handleSelect('year')} className={`w-full flex justify-center items-center border-b-2 pb-1 ${selected === 'year' && 'border-green'}`}>
                    <p className={` cursor-pointer ${selected === 'year' && 'text-green font-semibold'}`}> Year </p>
                </div>
                <div onClick={() => handleSelect('all-time')} className={`w-full flex justify-center items-center border-b-2 pb-1 ${selected === 'all-time' && 'border-green'}`}>
                    <p className={` cursor-pointer ${selected === 'all-time' && 'text-green font-semibold'}`}> All time </p>
                </div>
            </section>
        </form>
        </>

    )
}