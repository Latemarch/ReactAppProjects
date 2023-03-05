import React from 'react'
import { Navigate } from 'react-router-dom'
import { IContext, useAuthContext } from '../context/ContextShoppy'

export default function ProtectedRouteShoppy({
  children,
  requireAdmin,
}: {
  children: React.FC
  requireAdmin: boolean
}) {
  const { user } = useAuthContext() as IContext

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/shoppy" replace />
  }

  return children
}
