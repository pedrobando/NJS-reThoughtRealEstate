import React from 'react'

const ExclusiveListingContact = async ({listing}) => {
  return (
    <div className='flex px-6 justify-end'>
    <img src="https://rethought-realestate.com/wp-content/uploads/2021/05/Rudy-New-2-e1620845912437.png" className='max-h-[550px]'/>
    <div className='flex-col px-6 content-end'>
    <h2 className='font-heading text-6xl font-bold tracking-tight text-gray-900'>Ready to go see it?</h2>
    <p className='py-10 text-gray-900'>Let's a closer look at {listing.address.deliveryLine} together. Whether you're searching for your dream home or an investment opportunity, we've got you covered. Ready to explore further? </p>
    </div>
    </div>
  )
}

export default ExclusiveListingContact