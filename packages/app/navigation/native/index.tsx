import { useAuthentication } from '../../firebase/utils/hooks/useAuthentication'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { UserStack } from './userStack'
import { AuthStack } from './authStack'

const Stack = createNativeStackNavigator()

export function NativeNavigation() {
  const { user } = useAuthentication()

  return user ? <UserStack /> : <AuthStack />
}
