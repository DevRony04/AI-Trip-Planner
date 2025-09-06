import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const Pricing = () => {
  return (
    <div className='mt-15'>
        <h2 className='font-bold text-3xl my-6 text-center'>🚙 AI-Powered Trip Planning - <span className='text-orange-600'>Pick Your Plan :-</span></h2>
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '0 1rem' }}>
      <PricingTable />
    </div>
    </div>
  )
}

export default Pricing