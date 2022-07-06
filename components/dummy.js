import React from 'react'

const Dummy = () => {
  return (
    <>
    {/* style jsx is component based, i.e. its properties only renders in this component. If we want to use properties of dummy in index.js also so we have to write style jsx global. */}
    <style jsx global>
        {`
           .dummy{
            background: yellow;
           }
        `}
    </style>
    <div className='dummy'>I am dummy baby</div>
    </>
  )
}

export default Dummy