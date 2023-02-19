// Libs:
import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import { KittenProvider } from './kitten'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <KittenProvider>
      <NavigationProvider>
        <Dripsy>{children}</Dripsy>
      </NavigationProvider>
    </KittenProvider>
  )
}
