import { type FC, type ReactElement } from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'

export const KittenProvider: FC<{ children: ReactElement }> = ({ children }) =>
  <ApplicationProvider { ...eva } theme={ eva.light }>{ children }</ApplicationProvider>
