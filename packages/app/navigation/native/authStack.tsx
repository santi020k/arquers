import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { WelcomeScreen } from '../../features/auth/welcome/screen'
import { SignInScreen } from '../../features/auth/sign-in/screen'
import { SignUpScreen } from '../../features/auth/sign-up/screen'

const Stack = createNativeStackNavigator<{
  welcome: undefined
  'sign-in': undefined
  'sign-up': undefined
}>()

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="welcome"
        component={WelcomeScreen}
        options={{
          title: 'Welcome',
        }}
      />
      <Stack.Screen
        name="sign-in"
        component={SignInScreen}
        options={{
          title: 'Sign in',
        }}
      />
      <Stack.Screen
        name="sign-up"
        component={SignUpScreen}
        options={{
          title: 'Sign up',
        }}
      />
    </Stack.Navigator>
  )
}
