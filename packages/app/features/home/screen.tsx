// Libas:
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@ui-kitten/components'
import { signOut } from 'firebase/auth'
import { useRouter } from 'solito/router'
// Firebase:
import { useAuthentication } from '../../firebase/utils/hooks/useAuthentication'
import { auth } from '../../firebase'

export function HomeScreen() {
  const { user } = useAuthentication()
  const { push } = useRouter()

  const logout = () => {
    signOut(auth)
      .then(() => {
        push('/auth/welcome')
      })
      .catch((error) => {
        console.error('Sign Out error: ', error)
      })
  }

  return (
    <View style={styles.container}>
      <Text>Welcome {user?.email}!</Text>

      <Button style={styles.button} onPress={logout}>
        Sign Out
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
  },
})
