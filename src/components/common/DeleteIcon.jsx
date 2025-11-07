import React from 'react'

const DeleteIcon = () => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cercle rouge */}
      <circle cx="12" cy="12" r="12" fill="#E21B1B" />
      
      {/* Croix blanche (X) */}
      <path 
        d="M16.5 7.5L7.5 16.5" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      <path 
        d="M7.5 7.5L16.5 16.5" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
    </svg>
  )
}

export default DeleteIcon