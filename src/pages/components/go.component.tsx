import { Button, Heading, Link, Text, View } from '@fold-dev/core'
import * as Token from '@fold-dev/design/tokens'
import { GraphicLeft } from './graphic.component'

export const GoComponent = () => {
    return (
        <View 
            row 
            m="5rem 0"
            width="100%">
            <View
                row
                gap="2rem"
                width="85%"
                radius="var(--f-radius)"
                bgToken="accent-500"
                position="relative"
                style={{ overflow: 'hidden' }}
                alignItems="flex-start">
                <GraphicLeft
                    color={Token.ColorAccent200}
                    style={{ position: 'absolute', bottom: -100, left: -200, opacity: 0.1 }}
                    width={1107 / 2}
                    height={559 / 2}
                />

                <View
                    column
                    flex={1}
                    gap={30}
                    alignItems="flex-start"
                    p="5rem 0rem 5rem 5rem">
                    <Text
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="accent-300"
                        id="features">
                        Ready. Set. Go.
                    </Text>
                    <Heading
                        colorToken="accent-50"
                        fontWeight={400}>
                        Need help scaling your next big idea? Let Fold do the heavy lifting.
                    </Heading>
                </View>
                <View
                    flex={2}
                    p="5rem"
                    position="relative">
                    <View
                        column
                        gap={30}
                        position="relative">
                        {[
                            {
                                url: 'https://github.com/fold-dev/fold/discussions',
                                title: 'SaaS Licensing',
                                text: 'Fold offers a SaaS license option that enables you to leverage all Pro components for your next project.',
                            },
                            {
                                url: 'https://github.com/fold-dev/fold/issues',
                                title: 'Custom Development',
                                text: 'Open an issue or pull request on our GitHub repository if you want to contribute or report a bug.',
                            },
                            {
                                url: 'mailto:support@fold.dev',
                                title: 'Email',
                                text: 'We try to answer all of the emails that land in our inbox.',
                            },
                        ].map(({ title, text, url }, index) => (
                            <View
                                key={index}
                                width="100%">
                                <Link
                                    href={url}
                                    target="_blank"
                                    textDecoration="none">
                                    <Heading
                                        as="h2"
                                        m="0 0 0.25rem 0"
                                        colorToken="base-100">
                                        {title} ↗
                                    </Heading>
                                </Link>
                                <Text colorToken="base-300">{text}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </View> 
    )
}
