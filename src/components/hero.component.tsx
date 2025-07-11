import { Button, Divider, Heading, Link, Text, View } from '@fold-dev/core'
import * as Token from '@fold-dev/design/tokens'
import { GraphicLeft, GraphicRight } from './graphic.component'

export const HeroComponent = () => {
    return (
        <View
            width="100%"
            p="111px 0 0 0"
            m="-140px 0 0 0"
            position="relative"
            style={{  overflow: 'hidden' }}
            className="hero-background">
            <GraphicRight
                style={{ position: 'absolute', top: -100, right: -100, opacity: 0.5 }}
                height={882 / 2}
                width={1456 / 2}
                color="var(--f-color-accent-300)"
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
                    p="5rem 0 0 0"
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
                        colorToken="white"
                        fontWeight="var(--f-font-weight-bold)"
                        fontSize="6rem"
                        lineHeight={0.9}
                        p="0 3rem"
                        className="hero__heading">
                        The UI component library for product teams.
                    </Heading>

                    <Heading
                        as="h3"
                        textAlign="center"
                        colorToken="base-300"
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
                            as="a"
                            variant="accent"
                            radius="var(--f-radius-full)"
                            p="0 2rem"
                            colorToken="accent-100"
                            href="#core"
                            size="lg"
                            style={{
                                '--f-button-color': 'var(--f-color-base-50)',
                                '--f-button-color-hover': 'var(--f-color-base-900)',
                                '--f-button-background-color': 'transparent',
                                '--f-button-background-color-hover': 'var(--f-color-base-50)',
                            }}>
                            Read More
                        </Button>
                        <Link
                            href="/docs"
                            target="_blank"
                            textDecoration="none"
                            className="f-underline"
                            m="0 -1rem 0 0"
                            colorToken="base-50">
                            Documentation ↗
                        </Link>
                    </View>

                    <Text
                        size="sm"
                        colorToken="accent">
                        <Link
                            style={{ '--f-underline-size': '2px' }}
                            size="sm"
                            target="_blank"
                            textDecoration="none"
                            className="f-underline"
                            color="currentColor"
                            href="https://twitter.com/fold_dev">
                            Follow us on social media
                        </Link> & get notified of any updates.
                    </Text>

                    <GraphicLeft
                        style={{ position: 'absolute', top: 400, left: -250, opacity: 0.5 }}
                        width={1107 / 2}
                        height={559 / 2}
                        color="var(--f-color-accent-300)"
                    />
                </View>
            </View>
            <Divider />
        </View>
    )
}
