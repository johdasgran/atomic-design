import React from 'react'

export const authContext = React.createContext()

const numbers = [0,1,2,3,4,5,6]


export default function AuthContext({children}) {
  return (
    <authContext.Provider
        value={numbers}
    >
        {children}
    </authContext.Provider>
  )
}
