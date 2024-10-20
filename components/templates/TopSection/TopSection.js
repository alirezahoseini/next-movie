import InsidePagesHeader from '@/components/modules/InsidePagesHeader/InsidePagesHeader'
import MoviesGrid from '@/components/modules/MoviesGrid/MoviesGrid'
import SortForm from '@/components/modules/SortForm/SortForm'
import React from 'react'

function TopSection({title}) {
    return (
        <>
            <InsidePagesHeader title={title} />
            <SortForm />
            <MoviesGrid />
        </>
    )
}

export default TopSection