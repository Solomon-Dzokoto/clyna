import React from 'react'

// You can use this component independently or as children of the DashboardCardContainer component.

const DashboardCard = ({children, label, value}) => {
  return (
    <div className="bg-[#F2F2F2] px-[16px] py-[20px] rounded-xl">
      {/* The children prop here is to pass in the icons that will appear on the dashboard card */}
        <span className='text-primary md:text-[30px] mb-4 block'>{children}</span>
    <p className='text-base text-content-secondary font-bold mb-4'>{label}</p>
    <p className='text-[22px] text-primary'>{value}</p>
    </div>
  )
}

export default DashboardCard