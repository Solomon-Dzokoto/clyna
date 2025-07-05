import React from 'react'

const DashboardCardContainer = ({children}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-3 py-3 px-2'>
        {children}
    </div>
  )
}

export default DashboardCardContainer