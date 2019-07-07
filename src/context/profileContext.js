import React, { useState, createContext } from 'react'


export const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {

  const [profile, setProfile] = useState({
    firstName: '', lastName: '', password: "", email: '', img: "", position: "", experience: [{ position: "", company: "", startExp: "", endExp: "" }], education: [], appliedPosition: [], savedPosition: [], searchingSetting: { location: "", field: "" }
  });


  return (
    <ProfileContext.Provider value={[profile, setProfile]}>
      {children}
    </ProfileContext.Provider>

  )

}





