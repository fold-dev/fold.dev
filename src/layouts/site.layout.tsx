import {
    Affix,
    Button,
    Cookie,
    Divider,
    Flexer,
    FoldProvider,
    Header,
    Heading,
    Li,
    Link,
    List,
    LogoSolid,
    Navigation,
    NavigationItem,
    Pill,
    SkipNavMain,
    Text,
    View,
    useCacheValue,
    useVisibility
} from '@fold-dev/core'
import * as Token from '@fold-dev/design/tokens'
import { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import MobileComponent from '../components/mobile.component'

export default function SiteLayout({ children }) {
    const [showChild, setShowChild] = useState(false)
    const { visible, hide, show } = useVisibility(false)
    const { isCached, getSafeCache, setCache } = useCacheValue('cookies')

    const denied = () => {
        setCache('no')
        hide()
    }

    const accepted = () => {
        setCache('yes')
        hide()
    }

    useEffect(() => {
        if (showChild) {
            if (getSafeCache().trim() == 'no') {
                document.querySelectorAll('[data-google="yes"]').forEach((el) => el.remove())
                hide()
            } else if (getSafeCache().trim() == 'yes') {
                hide()
            } else {
                show()
            }
        }
    }, [showChild, isCached])

    useEffect(() => {
        setShowChild(true)
    }, [])

    if (!showChild) return null

    return (
        <FoldProvider license="fake-license-code">
            <style id="custom-styles" />

            <SkipNavMain />
            <MobileComponent />

            <Cookie
                style={{
                    border: 'none',
                    background: 'var(--f-color-background)',
                }}
                onDismiss={() => null}
                isVisible={visible}
                buttons={[
                    { label: 'Deny', action: denied, variant: 'accent' },
                    { label: 'Accept', action: accepted, variant: 'accent' },
                ]}
                title="🍪 Cookie Policy"
                description={
                    <Text>
                        We use essential cookies to make our site work. With your consent, we may also use
                        non-essential cookies to improve user experience and analyze website traffic.
                    </Text>
                }
            />

            <View
                display="none"
                row
                p={10}
                gap={10}
                zIndex={10000}
                width="100%"
                height={40}
                position="relative"
                bg="rgba(0, 44, 91, 0.4)"
                style={{ 
                    backdropFilter: 'blur(5px)',
                    transition: 'background 0.1s',
                }}>
                <Text
                    color="inherit"
                    colorToken="accent-100">
                    We've just launched Fold Pro Early Access! 🚀 There are limited seats available <a
                        href="#pro"
                        style={{ color: 'var(--f-color-accent-100)' }}>
                        read more below.
                    </a>
                </Text>
            </View>

            <Affix zIndex={100}>
                {(stuck) => (
                    <View 
                        position="sticky"
                        height={100}
                        zIndex={10}
                        style={{ 
                            top: 0,
                        }}>
                        <Header
                            height={100}
                            position="relative"
                            border="none"
                            bg={stuck ? 'var(--f-color-accent-500)' : 'transparent'}
                            style={{
                                backdropFilter: 'blur(5px)',
                                transition: 'background 0.1s',
                            }}>
                            <View
                                row
                                gap="1rem"
                                width="100%"
                                p="0 4rem">
                                <LogoSolid color="var(--f-color-accent-200)" />
                                <Flexer />
                                <Navigation
                                    bg="transparent"
                                    variant="navbar"
                                    style={{
                                        '--f-navigation-item-color-system-active': 'var(--f-color-accent-600)',
                                        '--f-navigation-item-background-color-hover': 'var(--f-color-accent-700)',
                                        '--f-navigation-item-background-color-active': 'var(--f-color-accent-500)',
                                        '--f-navigation-item-color': 'var(--f-color-accent-50)',
                                        '--f-navigation-item-color-hover': 'var(--f-color-accent-50)',
                                        '--f-navigation-item-color-active': 'white',
                                    }}>
                                    <NavigationItem href="/#home">Home</NavigationItem>
                                    <NavigationItem href="/#core">Core</NavigationItem>
                                    <NavigationItem 
                                        style={{
                                            '--f-pill-color': 'var(--f-color-accent-3200)',
                                            '--f-pill-background-color': 'var(--f-color-accent-800)',
                                            '--f-pill-border-color': 'var(--f-color-accent-100)',
                                        }}
                                        suffix={(
                                            <Pill
                                                border="0"
                                                height={25} 
                                                size="xs">
                                                EARLY ACCESS
                                            </Pill>
                                        )}
                                        href="/#pro">
                                        Pro
                                    </NavigationItem>
                                    <NavigationItem href="/#support">Support</NavigationItem>
                                </Navigation>
                                <Button
                                    href="/docs"
                                    as="a"
                                    target="_blank"
                                    outline
                                    border="0.15rem solid white"
                                    style={{
                                        '--f-button-color': 'var(--f-color-white)',
                                        '--f-color-text-on-color': 'var(--f-color-accent-400)',
                                        '--f-button-color-hover': 'var(--f-color-accent-400)',
                                        '--f-button-background-color-hover': 'var(--f-color-white)',
                                    }}>
                                    Documentation
                                </Button>
                                <Button
                                    href="/#pro"
                                    as="a"
                                    border="0.15rem solid white"
                                    style={{
                                        '--f-button-background-color': 'var(--f-color-white)',
                                        '--f-button-background-color-hover': 'var(--f-color-base-100)',
                                        '--f-button-color': 'var(--f-color-accent)',
                                        '--f-button-color-hover': 'var(--f-color-accent-600)',
                                    }}>
                                    Buy
                                </Button>
                                <SocialIcon
                                    url="https://github.com/fold-dev"
                                    target="_blank"
                                    style={{ width: 35, height: 35 }}
                                    fgColor="var(--f-color-accent)"
                                    bgColor="var(--f-color-white)"
                                />
                                <SocialIcon
                                    url="https://twitter.com/fold_dev"
                                    target="_blank"
                                    style={{ width: 35, height: 35 }}
                                    fgColor="var(--f-color-accent)"
                                    bgColor="var(--f-color-white)"
                                />
                                <SocialIcon
                                    url="https://www.linkedin.com/company/fold-dev"
                                    target="_blank"
                                    style={{ width: 35, height: 35 }}
                                    fgColor="var(--f-color-accent)"
                                    bgColor="var(--f-color-white)"
                                />
                            </View>
                        </Header>
                    </View>
                )}
            </Affix>

            {children}

            <Divider />

            {/* footer */}

            <View
                row
                p={100}
                alignItems="flex-start">
                <View
                    flex={1}
                    column
                    gap={20}
                    alignItems="flex-start">
                    <LogoSolid color="var(--f-color-accent-400)" />
                    <Text colorToken="accent-400">Fold &copy; 2024</Text>
                    <View
                        row
                        gap={10}
                        justifyContent="flex-start">
                        <SocialIcon
                            url="https://github.com/fold-dev/fold"
                            target="_blank"
                            style={{ width: 37, height: 37 }}
                            fgColor="var(--f-color-accent)"
                            bgColor="var(--f-color-accent-100)"
                        />
                        <SocialIcon
                            url="https://twitter.com/fold_dev"
                            target="_blank"
                            style={{ width: 37, height: 37 }}
                            fgColor="var(--f-color-accent)"
                            bgColor="var(--f-color-accent-100)"
                        />
                        <SocialIcon
                            url="https://www.linkedin.com/company/fold-dev"
                            target="_blank"
                            style={{ width: 37, height: 37 }}
                            fgColor="var(--f-color-accent)"
                            bgColor="var(--f-color-accent-100)"
                        />
                    </View>
                </View>
                <View
                    column
                    flex={1}
                    gap={20}
                    alignItems="flex-start">
                    <Text
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="accent-300">
                        Navigation
                    </Text>
                    <List flex={1}>
                        <Li>
                            <Text
                                as="a"
                                href="/"
                                size="xl"
                                fontWeight={400}
                                colorToken="accent-400"
                                textDecoration="none">
                                Home
                            </Text>
                        </Li>
                        <Li>
                            <Text
                                as="a"
                                href="/#core"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-400">
                                Core
                            </Text>
                        </Li>
                        <Li>
                            <Text
                                as="a"
                                href="/#pro"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-400">
                                Pro
                            </Text>
                        </Li>
                        <Li>
                            <Text
                                as="a"
                                href="/#support"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-400">
                                Support
                            </Text>
                        </Li>
                    </List>
                </View>
                <View
                    column
                    flex={1}
                    gap={20}
                    alignItems="flex-start">
                    <Text
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="accent-300">
                        Helpful Links
                    </Text>
                    <List flex={1}>
                        <Li>
                            <Text
                                as="a"
                                href="/docs"
                                target="_blank"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-400">
                                Documentation
                            </Text>
                        </Li>
                        <Li>
                            <Text
                                as="a"
                                href="https://github.com/fold-dev/fold"
                                target="_blank"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-400">
                                GitHub
                            </Text>
                        </Li>
                        <Li>
                            <Text
                                as="a"
                                href="/docs/releases"
                                target="_blank"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-400">
                                Releases
                            </Text>
                        </Li>
                        <Li>
                            <Text
                                as="a"
                                href="https://github.com/orgs/fold-dev/projects/8/views/2"
                                target="_blank"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-400">
                                Roadmap
                            </Text>
                        </Li>
                    </List>
                </View>
                <View
                    column
                    flex={1}
                    gap={20}
                    alignItems="flex-start">
                    <Text
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="accent-300">
                        Legal
                    </Text>
                    <List flex={1}>
                        <Li>
                            <Text
                                as="a"
                                target="_blank"
                                href="/privacy-policy"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-400">
                                Privacy Policy
                            </Text>
                        </Li>
                        <Li>
                            <Text
                                as="a"
                                target="_blank"
                                href="/terms-of-use"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-400">
                                Terms of Use
                            </Text>
                        </Li>
                        <Li>
                            <Text
                                as="a"
                                target="_blank"
                                href="/license"
                                size="xl"
                                fontWeight={400}
                                textDecoration="none"
                                colorToken="accent-400">
                                License
                            </Text>
                        </Li>
                    </List>
                </View>
                <View
                    column
                    flex={0.5}
                    gap={20}
                    alignItems="flex-end">
                    <Button
                        variant="accent"
                        as="a"
                        target="_blank"
                        href="/docs">
                        Get Started
                    </Button>
                    <Button
                        width={200}
                        variant="accent"
                        as="a"
                        target="_blank"
                        href="https://61fb81a2.sibforms.com/serve/MUIFAIdcVTZB8JLOGmoTu48YYshDwC7Uinyzu3h4sQKqJioZOki2cl7S5BCY9S_sw31Joe2i5fz6RGJfuKXy641YsGYsxkJLqlrTpZXa7H5tzVKRVbkDZvBCKpluQAp4hLkdoWVl7WsceXoIa6GPGRfxYe4tOM8IGmYO-1GfJ-DqScQ1p65akSfLMCl-fGu0sgUUYYnMUlZPn-CW">
                        Subscribe to Newsletter
                    </Button>
                </View>
            </View>
        </FoldProvider>
    )
}
