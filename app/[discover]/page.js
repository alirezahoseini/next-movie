import React from 'react'
import TopSection from '@/components/templates/TopSection/TopSection';

async function page({ params }) {
  return (
    <>
      <TopSection mediaType={params.discover} />
    </>
  )
}

export default page;
