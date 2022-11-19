import React from 'react'

const authContext = React.createContext()


export default function AuthContext({children}) {
  return (
    <authContext.Provider>
        {children}
    </authContext.Provider>
  )
}
