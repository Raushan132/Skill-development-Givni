import React from 'react'

const HeadTitle = ({ head }) => {
    return (
        <div className='flex text-center py-12 bg-blue-200 w-full justify-center'>
            <span className='px-2  font-semibold text-gray-400'>{`you are currently on {`}</span> <h1 className="relative uppercase text-xl font-bold inline-block before:content-[''] before:rounded-full before:absolute before:top-7 before:left-0  before:w-full before:border-2 before:bg-red-600 before:border-yellow-400 ">
                {head}</h1>  <span className='px-2  font-semibold text-gray-400'>{`} page`}</span>
            {/* use map here */}
        </div>
    )
}

export default HeadTitle