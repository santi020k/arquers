import { FC, ReactElement, useMemo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'

export const NavigationProvider: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              'user-detail': 'user/:id',
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
