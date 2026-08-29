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
    useVisibility
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
            if (root.getAttribute('data-theme') !== 'dark') root.setAttribute('data-theme', 'dark')
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
                                  {/*   <SocialIcon
                                        url="https://twitter.com/fold_dev"
                                        target="_blank"
                                        style={{ width: 35, height: 35 }}
                                        fgColor="var(--f-color-base-100)"
                                        bgColor="transparent"
                                    />
                                    <SocialIcon
                                        url="https://www.linkedin.com/company/fold-ui"
                                        target="_blank"
                                        style={{ width: 35, height: 35 }}
                                        fgColor="var(--f-color-base-100)"
                                        bgColor="transparent"
                                    /> */}
                                </View>
                            </Header>
                        </View>
                    )}
                </Affix>

                {children}

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
                </View>
            </AppProvider>
        </>
    )
}
