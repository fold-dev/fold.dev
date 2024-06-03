import { Button, Heading, Link, Text, View } from '@fold-dev/core'
import * as Token from '@fold-dev/design/tokens'
import { GraphicLeft, GraphicRight } from './graphic.component'

export const HeroComponent = () => {
    return (
        <View
            width="100%"
            p="111px 0 0 0"
            m="-111px 0 0 0"
            position="relative"
            style={{ overflow: 'hidden' }}
            bg={`linear-gradient(175deg, var(--f-color-accent-500), var(--f-color-accent-600))`}>
            <GraphicRight
                style={{ position: 'absolute', top: -100, right: -100, opacity: 0.2 }}
                height={882 / 2}
                width={1456 / 2}
            />
            <View
                column
                id="home"
                gap={70}
                flex={1}
                width="100%"
                p="4rem 0 600px 0"
                justifyContent="stretch"
                className="hero">
                <View
                    column
                    flex={1}
                    gap={40}
                    width="80%"
                    m="0 auto"
                    position="relative">
                    <Text
                        textAlign="center"
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="accent-300">
                        Introducing
                    </Text>

                    <Heading
                        textAlign="center"
                        colorToken="white"
                        fontWeight={700}
                        fontSize="6rem"
                        letterSpacing={-5}
                        lineHeight={0.9}
                        p="0 3rem"
                        className="hero__heading">
                        The UI component library for product teams.
                    </Heading>

                    <Heading
                        as="h3"
                        textAlign="center"
                        colorToken="accent-50"
                        fontWeight={400}
                        width="90%">
                        Powerful, fully customizable React components for scaling your project to the
                        next level. Supercharge your dev workflow by using Fold's zero-dependency UI
                        components.
                    </Heading>

                    <View
                        row
                        gap={20}
                        colorToken="white">
                        <Button
                            outline
                            as="a"
                            href="#pro"
                            border="0.15rem solid var(--f-color-white)"
                            style={{
                                '--f-button-color': 'var(--f-color-white)',
                                '--f-color-text-on-color': 'var(--f-color-accent-400)',
                            }}>
                            Buy Now
                        </Button>
                        <Link
                            href="/docs"
                            target="_blank"
                            textDecoration="none"
                            className="f-underline"
                            m="0 -1rem 0 0"
                            colorToken="white">
                            Read Documentation ↗
                        </Link>
                    </View>

                    <Text
                        size="sm"
                        colorToken="accent-200">
                        <Link
                            style={{ '--f-underline-size': '1.5px' }}
                            size="sm"
                            target="_blank"
                            textDecoration="none"
                            className="f-underline"
                            colorToken="accent-100"
                            href="https://61fb81a2.sibforms.com/serve/MUIFAIdcVTZB8JLOGmoTu48YYshDwC7Uinyzu3h4sQKqJioZOki2cl7S5BCY9S_sw31Joe2i5fz6RGJfuKXy641YsGYsxkJLqlrTpZXa7H5tzVKRVbkDZvBCKpluQAp4hLkdoWVl7WsceXoIa6GPGRfxYe4tOM8IGmYO-1GfJ-DqScQ1p65akSfLMCl-fGu0sgUUYYnMUlZPn-CW">
                            Subscribe to the newsletter
                        </Link> & get notified of any updates.
                    </Text>

                    <GraphicLeft
                        style={{ position: 'absolute', top: 400, left: -200, opacity: 0.2 }}
                        width={1107 / 2}
                        height={559 / 2}
                    />
                </View>
            </View>
        </View>
    )
}
