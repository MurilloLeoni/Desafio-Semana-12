const Filter = () => {
  return (
    <div className='bg-#FFF3E3 w-screen px-24 py-9 flex justify-between font-poppins font-normal -mt-2'>
        <div className='flex items-center justify-between w-[420px]'>
            <div className='flex'>
                <img className='w-6 h-6 mr-2' src="/src/assets/icons/Icon-filter.png" alt="Filter" />
                <p className='text-xl'>Filter</p>
            </div>
            <img className='w-6 h-6' src="/src/assets/icons/Icon-grid.png" alt="Grid" />
            <img className='w-6 h-6' src="/src/assets/icons/Icon-list.png" alt="List" />
            <img className='' src="/src/assets/icons/Line.png" alt="|" />
            <p className='text-base'>Showing {'1-16'} of {32} results</p>
        </div>
        <div className='flex text-xl'>
            <div className='flex items-center'>
                <p>Show</p>
                <input className='w-14 h-14 ml-4 mr-6 text-center' type="select" placeholder='16'/>
            </div>
            <div className='flex items-center'>
                <p>Short by</p>
                <input className='ml-4 w-48 h-14 text-center' type="select" placeholder='Default'/>
            </div>
        </div>
    </div>
  )
}

export default Filter