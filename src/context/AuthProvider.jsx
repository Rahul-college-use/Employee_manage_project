import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage } from '../util/Localstorage';


export const Authcontext = createContext();

const AuthProvider = ({children}) => {

  const [userdata,setUserdata]=useState(null)
  useEffect(()=>{
    const {Employees,Admin} = getLocalStorage()
    setUserdata({Employees,Admin})
    // console.log(userdata)
  },[])
  
  return (
    <div>
      <Authcontext.Provider value={userdata}>
        {children}
      </Authcontext.Provider>
    </div>
  );
}

export default AuthProvider;
