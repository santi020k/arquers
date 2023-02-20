// Libs
import { type ReactNode } from 'react'
// Providers:
import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import { KittenProvider } from './kitten'
import { IconRegistry } from './icon-registry'

export function Provider({ children }: { children: ReactNode }) {
  return (
    <IconRegistry>
      <KittenProvider>
        <NavigationProvider>
          <Dripsy>{children}</Dripsy>
        </NavigationProvider>
      </KittenProvider>
    </IconRegistry>
  )
}
