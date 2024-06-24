import {
    Affix,
    Button,
    Cookie,
    Divider,
    Flexer,
    FoldProvider,
    Header,
    Heading,
    Icon,
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
import { PiRocket } from 'react-icons/pi'
import { SocialIcon } from 'react-social-icons'

export default function SiteLayout(props: any) {
    const { children } = props
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
        <>
            <FoldProvider license="fake-license-code">
                <style id="custom-styles" />

                <SkipNavMain />

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
                    row
                    p="0.6rem"
                    gap={10}
                    zIndex={10000}
                    width="100%"
                    position="relative"
                    bg="linear-gradient(15deg, var(--f-color-purple-500), var(--f-color-neonpink-400))">
                    <Text
                        color="inherit"
                        colorToken="purple-50">
                            We've just launched Fold Pro Early Access! 
                            Get your license now - <a href="/#pro" style={{ color: 'var(--f-color-purple-50)' }}>click here</a> to learn more.
                    </Text>
                    <Icon icon={PiRocket} style={{ transform: 'rotate(45deg)', color: 'var(--f-color-purple-50)' }} />
                </View>

                <Affix zIndex={100}>
                    {(stuck) => (
                        <View 
                            className="navigation"
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
                                bg={stuck ? 'rgb(from var(--f-color-surface) r g b / 0.9)' : 'transparent'}
                                style={{
                                    backdropFilter: 'blur(5px)',
                                    transition: 'background 0.1s',
                                }}>
                                <View
                                    row
                                    gap="1rem"
                                    width="100%"
                                    p="0 4rem">
                                    <Link href="/">
                                        <LogoSolid />
                                    </Link>
                                    <Flexer />
                                    <Navigation
                                        bg="transparent"
                                        variant="navbar"
                                        style={{
                                            '--f-navigation-item-color-system-active': 'var(--f-color-accent-weak)',
                                            '--f-navigation-item-background-color-hover': 'var(--f-color-accent-weak)',
                                            '--f-navigation-item-background-color-active':  'var(--f-color-accent)',
                                            '--f-navigation-item-color': 'var(--f-color-accent)',
                                            '--f-navigation-item-color-hover': 'var(--f-color-accent-strong)',
                                            '--f-navigation-item-color-active': 'var(--f-color-accent)',
                                        }}>
                                        <NavigationItem href="/#home">Home</NavigationItem>
                                        <NavigationItem href="/#core">Core</NavigationItem>
                                        <NavigationItem href="/#pro">Pro</NavigationItem>
                                        <NavigationItem href="/#support">Support</NavigationItem>
                                    </Navigation>
                                    <Button
                                        href="/docs"
                                        as="a"
                                        target="_blank"
                                        outline
                                        border="0.15rem solid var(--f-color-accent)"
                                        style={{
                                            '--f-button-color': 'var(--f-color-accent)',
                                            '--f-button-color-hover': 'var(--f-color-accent-weak)',
                                            '--f-button-background-color-hover': 'var(--f-color-accent)',
                                        }}>
                                        Documentation
                                    </Button>
                                    <Button
                                        href="/#pro"
                                        as="a"
                                        outline
                                        border="0.15rem solid var(--f-color-accent)"
                                        style={{
                                            '--f-button-color': 'var(--f-color-accent)',
                                            '--f-button-color-hover': 'var(--f-color-accent-weak)',
                                            '--f-button-background-color-hover': 'var(--f-color-accent)',
                                        }}>
                                        Buy
                                    </Button>
                                    <SocialIcon
                                        url="https://github.com/fold-dev"
                                        target="_blank"
                                        style={{ width: 35, height: 35 }}
                                        fgColor="var(--f-color-accent)"
                                        bgColor="var(--f-color-accent-weak)"
                                    />
                                    <SocialIcon
                                        url="https://twitter.com/fold_dev"
                                        target="_blank"
                                        style={{ width: 35, height: 35 }}
                                        fgColor="var(--f-color-accent)"
                                        bgColor="var(--f-color-accent-weak)"
                                    />
                                    <SocialIcon
                                        url="https://www.linkedin.com/company/fold-dev"
                                        target="_blank"
                                        style={{ width: 35, height: 35 }}
                                        fgColor="var(--f-color-accent)"
                                        bgColor="var(--f-color-accent-weak)"
                                    />
                                </View>
                            </Header>
                        </View>
                    )}
                </Affix>

                {children}

                <Divider />

                <View
                    row
                    p={100}
                    alignItems="flex-start"
                    className="footer">
                    <View
                        flex={1}
                        column
                        gap={20}
                        alignItems="flex-start"
                        className="footer_block">
                        <LogoSolid color="var(--f-color-accent-400)" />
                        <Text colorToken="accent-400">fold.dev &copy; 2024</Text>
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
                        className="footer_block"
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
                        className="footer_block"
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
                        className="footer_block"
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
                        alignItems="flex-end"
                        className="footer_buttons">
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
        </>
    )
}
