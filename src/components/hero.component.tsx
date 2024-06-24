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
            style={{  overflow: 'hidden' }}
            className="hero-background">
            <GraphicRight
                style={{ position: 'absolute', top: -100, right: -100, opacity: 0.5 }}
                height={882 / 2}
                width={1456 / 2}
            />
            <View
                column
                id="home"
                gap={70}
                flex={1}
                width="100%"
                p="2rem 0 550px 0"
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
                        style={{ textTransform: 'uppercase', opacity: 0.5 }}
                        letterSpacing={5}
                        colorToken="accent">
                        Introducing
                    </Text>

                    <Heading
                        textAlign="center"
                        colorToken="accent"
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
                        colorToken="accent"
                        fontWeight={400}
                        width="90%">
                        Powerful, fully customizable React components for scaling your project to the next level. 
                        Supercharge your dev workflow by using Fold's zero-dependency UI components.
                    </Heading>

                    <View
                        row
                        gap={20}
                        colorToken="white">
                        <Button
                            outline
                            as="a"
                            href="#pro"
                            border="0.15rem solid var(--f-color-accent)"
                            style={{
                                '--f-button-color': 'var(--f-color-accent)',
                            }}>
                            Buy Now
                        </Button>
                        <Link
                            href="/docs"
                            target="_blank"
                            textDecoration="none"
                            className="f-underline"
                            m="0 -1rem 0 0"
                            colorToken="accent">
                            Read Documentation ↗
                        </Link>
                    </View>

                    <Text
                        size="sm"
                        colorToken="accent">
                        <Link
                            style={{ '--f-underline-size': '1.5px' }}
                            size="sm"
                            target="_blank"
                            textDecoration="none"
                            className="f-underline"
                            colorToken="accent"
                            href="https://61fb81a2.sibforms.com/serve/MUIFAIdcVTZB8JLOGmoTu48YYshDwC7Uinyzu3h4sQKqJioZOki2cl7S5BCY9S_sw31Joe2i5fz6RGJfuKXy641YsGYsxkJLqlrTpZXa7H5tzVKRVbkDZvBCKpluQAp4hLkdoWVl7WsceXoIa6GPGRfxYe4tOM8IGmYO-1GfJ-DqScQ1p65akSfLMCl-fGu0sgUUYYnMUlZPn-CW">
                            Subscribe to the newsletter
                        </Link> & get notified of any updates.
                    </Text>

                    <GraphicLeft
                        style={{ position: 'absolute', top: 400, left: -200, opacity: 0.5 }}
                        width={1107 / 2}
                        height={559 / 2}
                    />
                </View>
            </View>
        </View>
    )
}
