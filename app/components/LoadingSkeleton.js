const LoadingSkeleton = () => {
  return (
    <div className='flex flex-col gap-3 sm:gap-4'>
      {/* Skeleton for expense items */}
      {[...Array(3)].map((_, index) => (
        <div key={index} className='flex items-center justify-between bg-gray-100 p-3 sm:p-4 rounded-xl shadow-lg animate-pulse'>
          <div className='flex flex-col gap-1 sm:gap-2 min-w-0 flex-1 pr-2'>
            <div className='h-4 sm:h-5 bg-gray-300 rounded w-3/4'></div>
            <div className='flex flex-col sm:flex-row sm:gap-2 gap-1'>
              <div className='h-3 sm:h-4 bg-gray-300 rounded w-20'></div>
              <div className='h-3 sm:h-4 bg-gray-300 rounded w-16'></div>
            </div>
          </div>
          <div className='flex-shrink-0 ml-2'>
            <div className='w-4 h-4 sm:w-5 sm:h-5 bg-gray-300 rounded'></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LoadingSkeleton
