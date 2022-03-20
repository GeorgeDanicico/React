import React from 'react'
import {
  Navigate,
} from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';

export function RequireAuth({ children }: { children: JSX.Element }): JSX.Element {
  const { isLogged } = useUserContext();

  if (!isLogged) {
    return <Navigate to="/login" replace />
  }

  return children;
}