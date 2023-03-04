import React from 'react'

export default function UserShoppy({ user: { photoURL, displayName } }: any) {
  return (
    <div className="flex items-center">
      <img className="w-8 h-8 rounded-full" src={photoURL} alt={displayName} />
      <span className="hidden md:block ml-1">{displayName}</span>
    </div>
  )
}
