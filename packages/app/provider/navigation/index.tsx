// Libs:
import { type FC, type ReactElement, useMemo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'

export const NavigationProvider: FC<{ children: ReactElement }> = ({
  children,
}) => {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'welcome',
            screens: {
              home: '',
              'user-detail': 'user/:id',
              welcome: 'auth/welcome',
              'sign-in': 'auth/sign-in',
              'sign-up': 'auth/sign-up',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
