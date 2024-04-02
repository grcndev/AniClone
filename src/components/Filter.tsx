import React from 'react'

const Filter = ({category}) => {
  return (
    <div>
        <div className="cursor-pointer">
          <h6 className="text-txtfilter text-base font-medium pt-3 mb-1">
           {category}
          </h6>
          <div className="items-center justify-center rounded-md outline-none bg-white box-border shadow-filter grid py-2 px-1.5">
            <input placeholder="any" />
        </div>
        </div>    
    </div>
  )
}

export default Filter