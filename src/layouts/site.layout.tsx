import {
    Affix,
    Button,
    Cookie,
    Flexer,
    AppProvider,
    Header,
    Icon,
    Li,
    Link,
    List,
    Logo,
    Navigation,
    NavigationItem,
    SkipNavMain,
    Text,
    View,
    useCacheValue,
    useVisibility,
    Heading,
    IconLib,
    Grid,
    DarkModeToggle
} from '@fold-ui/core'
import { useEffect, useLayoutEffect, useState } from 'react'
import { PiSparkle } from 'react-icons/pi'
import { SocialIcon } from 'react-social-icons'

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

export default function SiteLayout(props: any) {
    const { children, forceDark = false } = props
    const [showChild, setShowChild] = useState(false)
    const { visible, hide, show } = useVisibility(false)
    const { isCached, getSafeCache, setCache } = useCacheValue('cookies')

    useIsomorphicLayoutEffect(() => {
        if (!forceDark) return

        const root = document.documentElement
        const previousTheme = root.getAttribute('data-theme')
        const enforceDarkTheme = () => {
            //if (root.getAttribute('data-theme') !== 'dark') root.setAttribute('data-theme', 'dark')
        }
        const observer = new MutationObserver(enforceDarkTheme)

        enforceDarkTheme()
        observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })

        return () => {
            observer.disconnect()

            if (previousTheme) root.setAttribute('data-theme', previousTheme)
            else root.removeAttribute('data-theme')
        }
    }, [forceDark])

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
            <AppProvider license="fake-license-code">
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

                {/* 
                <View
                    row
                    p="0.75rem 1rem"
                    gap={10}
                    zIndex={10000}
                    width="100%"
                    position="relative"
                    //bg="linear-gradient(8deg, var(--f-color-violet-600), var(--f-color-indigo-600))"
                    colorToken="accent"
                    style={{ borderBottom: '1px solid var(--f-color-slate-800)' }}
                    >
                    <Text
                        textAlign="center"
                        color="inherit">
                            New <strong>Kanban</strong>, <strong>Todo</strong> & <strong>Calendar</strong> components! Check out the <a href="/docs" style={{ color: 'currentColor' }}>docs</a> for more information.
                    </Text>
                    <Icon icon={PiSparkle} style={{ transform: 'rotate(45deg)', color: 'currentColor' }} size="lg" />
                </View> 
                */}

                <Header
                    bgToken="background"
                    m="0 0 1rem 0"
                    zIndex={100}
                    p="2rem"
                    gap="0.5rem"
                    position="sticky"
                    style={{ top: 0 }}
                    border="none"
                    radius="var(--f-radius)">
                    <Logo
                        size="md"
                        color="var(--f-color-text)"
                    />

                    <Flexer />

                    <Navigation variant="navbar">
                        <NavigationItem active>Studio</NavigationItem>
                        <NavigationItem>Components</NavigationItem>
                    </Navigation>

                    <Navigation variant="navbar">
                        <NavigationItem>Expertise</NavigationItem>
                        <NavigationItem>Work</NavigationItem>
                        <NavigationItem>Process</NavigationItem>
                        <NavigationItem>Pricing</NavigationItem>
                        <NavigationItem>Documentation</NavigationItem>
                        <NavigationItem style={{ '--f-navbar-item-padding': '0rem' }}>
                            <Button
                                variant="accent"
                                suffix={
                                    <IconLib
                                        icon="arrow-right"
                                        size="sm"
                                    />
                                }>
                                Start a project
                            </Button>
                        </NavigationItem>
                    </Navigation>
                </Header>

                {/*                 
                <Affix zIndex={100}>
                    {(stuck) => true  ? null : (
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
                                className="page-nav"
                                border="none"
                                style={{
                                    background: 'rgb(from var(--f-color-nav-translucent) r g b / 0.9)',
                                    backdropFilter:'blur(10px)',
                                    transition: 'background 0.1s',
                                }}>
                                <View
                                    row
                                    gap="1rem"
                                    width="100%"
                                    p="0 4rem">
                                    <Link href="/">
                                        <Logo color="var(--f-color-accent-50)" />
                                    </Link>
                                    <Flexer />
                                    <Navigation
                                        display="none"
                                        bg="transparent"
                                        variant="navbar">
                                        <NavigationItem href="/#home">Home</NavigationItem>
                                        <NavigationItem href="/#core">Core</NavigationItem>
                                        <NavigationItem href="/#pro">Pro</NavigationItem>
                                        <NavigationItem href="/#support">Support</NavigationItem>
                                    </Navigation>
                                    <Button
                                        href="/docs"
                                        as="a"
                                        target="_blank"
                                        border="none"
                                        style={{
                                            '--f-button-color': 'var(--f-color-accent-50)',
                                            '--f-button-color-hover': 'var(--f-color-accent-50)',
                                            '--f-button-background-color': 'transparent',
                                            '--f-button-background-color-hover': 'rgb(from var(--f-color-nav-translucent) r g b / 0.33)',
                                        }}>
                                        Documentation
                                    </Button>
                                    <Button
                                        target="_blank"
                                        href="https://github.com/fold-ui/fold"
                                        as="a"
                                        border="none"
                                        style={{
                                            '--f-button-color': 'var(--f-color-accent-50)',
                                            '--f-button-color-hover': 'var(--f-color-accent-50)',
                                            '--f-button-background-color': 'transparent',
                                            '--f-button-background-color-hover': 'rgb(from var(--f-color-nav-translucent) r g b / 0.33)',
                                        }}>
                                        Download
                                    </Button>
                                    <SocialIcon
                                        url="https://github.com/fold-ui"
                                        target="_blank"
                                        style={{ width: 35, height: 35 }}
                                        fgColor="var(--f-color-base-100)"
                                        bgColor="transparent"
                                    />
                                </View>
                            </Header>
                        </View>
                    )}
                </Affix>
                */}

                {children}

                <View
                    bgToken="base-900"
                    m="5rem 0 0 0">
                    <View>
                        <View
                            p="5rem"
                            row
                            justifyContent="space-between">
                            <Heading
                                colorToken="base-200"
                                width="75%">
                                Bring us the complicated part. &nbsp;
                                <Text
                                    as="span"
                                    fontSize="inherit"
                                    colorToken="base-400">
                                    We will help you find the clearest way through.
                                </Text>
                            </Heading>

                            <Button
                                as="a"
                                href="mailto:support@fold.dev?subject=Studio%20project"
                                variant="accent"
                                size="lg"
                                suffix={
                                    <IconLib
                                        icon="arrow-right"
                                        size="sm"
                                    />
                                }>
                                Start a conversation
                            </Button>
                        </View>

                        <View
                            column
                            alignItems="stretch"
                            p="6.5rem 5rem 3.5rem">
                            <Grid
                                columns={4}
                                gap="5rem"
                                width="100%"
                                p="0 0 5rem 0">
                                <View
                                    column
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    gap="1.5rem">
                                    <Text
                                        as="span"
                                        size="sm"
                                        colorToken="base-500">
                                        Studio
                                    </Text>
                                    <Text
                                        as="a"
                                        href="#expertise"
                                        colorToken="base-300"
                                        fontWeight="var(--f-font-weight-normal)"
                                        textDecoration="none">
                                        Expertise
                                    </Text>
                                    <Text
                                        as="a"
                                        href="#work"
                                        colorToken="base-300"
                                        fontWeight="var(--f-font-weight-normal)"
                                        textDecoration="none">
                                        What we ship
                                    </Text>
                                    <Text
                                        as="a"
                                        href="#process"
                                        colorToken="base-300"
                                        fontWeight="var(--f-font-weight-normal)"
                                        textDecoration="none">
                                        Process
                                    </Text>
                                    <Text
                                        as="a"
                                        href="#pricing"
                                        colorToken="base-300"
                                        fontWeight="var(--f-font-weight-normal)"
                                        textDecoration="none">
                                        Pricing
                                    </Text>
                                </View>

                                <View
                                    column
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    gap="1.5rem">
                                    <Text
                                        as="span"
                                        size="sm"
                                        colorToken="base-500">
                                        Expertise
                                    </Text>
                                    <Text
                                        as="a"
                                        href="#expertise"
                                        colorToken="base-300"
                                        fontWeight="var(--f-font-weight-normal)"
                                        textDecoration="none">
                                        Product clarity
                                    </Text>
                                    <Text
                                        as="a"
                                        href="#expertise"
                                        colorToken="base-300"
                                        fontWeight="var(--f-font-weight-normal)"
                                        textDecoration="none">
                                        Interface design
                                    </Text>
                                    <Text
                                        as="a"
                                        href="#expertise"
                                        colorToken="base-300"
                                        fontWeight="var(--f-font-weight-normal)"
                                        textDecoration="none">
                                        React engineering
                                    </Text>
                                </View>

                                <View
                                    column
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    gap="1.5rem">
                                    <Text
                                        as="span"
                                        size="sm"
                                        colorToken="base-500">
                                        Products
                                    </Text>
                                    <Text
                                        as="a"
                                        href="https://lane.work"
                                        colorToken="base-300"
                                        fontWeight="var(--f-font-weight-normal)"
                                        textDecoration="none">
                                        Lane
                                    </Text>
                                    <Text
                                        as="a"
                                        href="https://fold-ui.com"
                                        colorToken="base-300"
                                        fontWeight="var(--f-font-weight-normal)"
                                        textDecoration="none">
                                        Product system
                                    </Text>
                                </View>

                                <View
                                    column
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    gap="1.5rem">
                                    <Text
                                        as="span"
                                        size="sm"
                                        colorToken="base-500">
                                        Contact
                                    </Text>
                                    <Text
                                        as="a"
                                        href="mailto:support@fold.dev?subject=Studio%20project"
                                        colorToken="base-300"
                                        fontWeight="var(--f-font-weight-normal)"
                                        textDecoration="none">
                                        Start a project
                                    </Text>
                                    <Text
                                        as="a"
                                        href="mailto:support@fold.dev"
                                        colorToken="base-300"
                                        fontWeight="var(--f-font-weight-normal)"
                                        textDecoration="none">
                                        support@fold.dev
                                    </Text>
                                </View>
                            </Grid>

                            <View
                                width="100%"
                                height="1px"
                                bgToken="base-750"
                                m="1rem 0"
                            />

                            <Text
                                as="span"
                                colorToken="base-200"
                                fontWeight="var(--f-font-weight-medium)"
                                m="0.5rem 0 0 0">
                                <Logo color="var(--f-color-base-500)" size="sm" />
                            </Text>

                            <View
                                row
                                gap="1rem"
                                justifyContent="flex-start"
                                width="100%"
                                m="2rem 0 0 0">
                                <Text
                                    as="span"
                                    size="sm"
                                    colorToken="base-500">
                                    © 2026 Fold. All rights reserved.
                                </Text>
                                <Flexer />
                                <DarkModeToggle />
                                <Text
                                    as="span"
                                    size="sm"
                                    colorToken="base-500">
                                    Independent product studio · Working worldwide
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* 
                <View
                    row
                    p="3rem 100px 100px 100px"
                    alignItems="flex-start"
                    className="footer"
                    style={forceDark ? { background: '#0e0f15' } : undefined}>
                    <View
                        flex={1}
                        column
                        gap={20}
                        className="footer_block">
                        <Logo color="var(--f-color-accent)" />
                        <View 
                            row
                            gap="1rem">
                                <Text
                                    as="a"
                                    href="https://github.com/fold-ui/fold"
                                    target="_blank"
                                    fontWeight={400}
                                    textDecoration="none"
                                    colorToken="text-weaker">
                                    GitHub
                                </Text>
                                <Text
                                    as="a"
                                    href="/docs"
                                    target="_blank"
                                    fontWeight={400}
                                    textDecoration="none"
                                    colorToken="text-weaker">
                                    Documentation
                                </Text>
                                <Text
                                    as="a"
                                    target="_blank"
                                    href="/privacy-policy"
                                    fontWeight={400}
                                    textDecoration="none"
                                    colorToken="text-weaker">
                                    Privacy Policy
                                </Text>
                                <Text
                                    as="a"
                                    target="_blank"
                                    href="/terms-of-use"
                                    fontWeight={400}
                                    textDecoration="none"
                                    colorToken="text-weaker">
                                    Terms of Use
                                </Text>
                        </View>
                        <Text colorToken="text-weakest">Fold &copy; 2026</Text>
                    </View>
                </View> */}
            </AppProvider>
        </>
    )
}
