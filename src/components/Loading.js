import React from 'react'

function Loading({loading, error,children}) {
  return (
    <>
        {loading ? (
         
            <p>Loading...</p>
          
        ) : error ? (
         
            <p>{error}</p>
          
        ) : (
          children
        )}
    </>
  )
}

export default Loading