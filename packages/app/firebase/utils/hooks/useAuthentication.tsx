import { useEffect, useState } from 'react'
import { onAuthStateChanged, type User } from 'firebase/auth'
import { auth } from '../../index'

export function useAuthentication() {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(
      auth,
      (userData) => {
        if (userData) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setUser(userData)
        } else {
          // User is signed out
          setUser(undefined)
        }
      }
    )

    return unsubscribeFromAuthStatuChanged
  }, [])

  return { user }
}
