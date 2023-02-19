import { useSx, View, H1, P, Row, A } from 'dripsy'
import { Layout, Text } from '@ui-kitten/components'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

export function HomeScreen() {
  const sx = useSx()

  return (
    <View
      sx={ { flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 } }
    >
      <Text>Welcome to Solito.</Text>
      <View sx={ { maxWidth: 600 } }>
        <Text>
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </Text>
        { /* eslint-disable-next-line react-native/no-raw-text */ }
        <Text>Sólito is made by{ ' ' }
          <A
            href="https://twitter.com/fernandotherojo"
            // @ts-expect-error react-native-web only types
            hrefAttrs={ {
              target: '_blank',
              rel: 'noreferrer',
            } }
            sx={ { color: 'blue' } }
          >
            Fernando Rojo
            { /* eslint-disable-next-line react-native/no-raw-text */ }
          </A>.
        </Text>
      </View>
      <View sx={ { height: 32 } } />
      <Row>
        <TextLink
          href="/user/fernando"
          textProps={ {
            style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
          } }
        >
          Regular Link
        </TextLink>
        <View sx={ { width: 32 } } />
        <MotiLink
          href="/user/fernando"
          animate={ ({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          } }
          from={ {
            scale: 0,
            rotateZ: '0deg',
          } }
          transition={ {
            type: 'timing',
            duration: 150,
          } }
        >
          <Text
            selectable={ false }
          >
            Moti Link
          </Text>
        </MotiLink>
      </Row>
      <Layout>
        <Text category='h1'>HOME</Text>
      </Layout>
    </View>
  )
}
