import React, { useReducer, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { authReducer } from '../reducers/authReducer';
import { types } from '../types/types';

const initialState = {
    isLogged: false,
    name: null
}

export const AuthProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(authReducer, initialState);


    const login = () => {
        dispatch({
            type: types.auth.loginType,
            payload: 'Alberto Perez'
        });
    }


    const logout = () => {
        dispatch({
            type: types.auth.logoutType,
        })
    }

    

  return (
    
    <AuthContext.Provider value={{
        state,
        login,
        logout
    }}>
        { children  }
    </AuthContext.Provider>
  )
}
