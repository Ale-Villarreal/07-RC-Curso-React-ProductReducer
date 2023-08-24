import React, { useContext } from 'react'
import { AuthContext } from './contexts/AuthContext';

export const ProfilePage = () => {

    const { user } =  useContext(AuthContext);
  return (
    <>
        <h3>Datos de usuario</h3>
        <div className='mb-5'>{ JSON.stringify(user, null, 3) }</div>
    </>

  )
}
