// Libs:
import { type FC, type ReactElement } from 'react'
import { IconRegistry as KTIconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

export const IconRegistry: FC<{ children: ReactElement }> = ({ children }) => (
  <>
    <KTIconRegistry icons={EvaIconsPack} />
    {children}
  </>
)
