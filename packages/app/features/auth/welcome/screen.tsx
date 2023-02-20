import React, { type FC } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { useRouter } from 'solito/router'
import { Button, Text } from '@ui-kitten/components'

import { useAuthentication } from '../../../firebase/utils/hooks/useAuthentication'

export const WelcomeScreen: FC = () => {
  const { push } = useRouter()
  const { user } = useAuthentication()

  if (user) push('/home')

  return (
    <View style={styles.container}>
      <Text>Welcome screen!</Text>

      <View style={styles.buttons}>
        <Button
          style={styles.button}
          onPress={() => {
            push('/auth/sign-in')
          }}
        >
          Sign in
        </Button>
        <Button
          appearance="outline"
          style={styles.button}
          onPress={() => {
            push('/auth/sign-up')
          }}
        >
          {' '}
          Sign up
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttons: {
    flex: 1,
  },

  button: {
    marginTop: 10,
  },
})
