import React, { useState, createContext } from 'react'


export const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {

  const [profile, setProfile] = useState({
    firstName: '', lastName: '', password: "", email: '', img: "", position: "", experience: [{ id: 1 }, { id: 2 }], education: [], appliedPositions: [{ id: 1 }, { id: 2 }], savedPositions: [{ id: 1 }, { id: 3 }], searchingSetting: { location: "", field: "" }
  });


  return (
    <ProfileContext.Provider value={[profile, setProfile]}>
      {children}
    </ProfileContext.Provider>

  )

}





