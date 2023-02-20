// Libs:
import React, { type FC, useState } from 'react'
import { StyleSheet, Pressable, type ImageProps } from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { View } from 'dripsy'
import { useRouter } from 'solito/router'
import { Button, Text, Input, Icon } from '@ui-kitten/components'
import { type RenderProp } from '@ui-kitten/components/devsupport'
// Firebase:
import { auth } from '../../../firebase'

export const SignUpScreen: FC = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [value, setValue] = useState({
    email: '',
    password: '',
    error: '',
  })

  const { push } = useRouter()

  const signUp = () => {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.',
      })
      return
    }

    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then(() => {
        push('/auth/sign-in')
      })
      .catch((error) => {
        setValue({
          ...value,
          error: (error as { message: string }).message,
        })
      })
  }

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  const renderIcon: RenderProp<Partial<ImageProps>> = (props) => (
    <Pressable onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </Pressable>
  )

  return (
    <View style={styles.container}>
      <Text>Signup screen!</Text>

      {!!value.error && (
        <View style={styles.error}>
          <Text>{value.error}</Text>
        </View>
      )}

      <View style={styles.controls}>
        <Input
          placeholder="Email"
          style={styles.control}
          value={value.email}
          onChangeText={(text) => {
            setValue({ ...value, email: text })
          }}
          accessoryRight={<Icon name="email-outline" size={16} />}
        />

        <Input
          placeholder="Password"
          style={styles.control}
          value={value.password}
          onChangeText={(text) => {
            setValue({ ...value, password: text })
          }}
          secureTextEntry={secureTextEntry}
          accessoryRight={renderIcon}
        />

        <Button style={styles.control} onPress={signUp}>
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

  controls: {
    flex: 1,
  },

  control: {
    marginTop: 10,
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  },
})
