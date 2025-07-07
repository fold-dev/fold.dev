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
                    //bg="linear-gradient(15deg, var(--f-color-rose-500), var(--f-color-purple-600))"
                    //bgToken="slate-900"
                    style={{ 
                        borderBottom: '1px solid var(--f-color-slate-800)',
                        background: 'rgb(from var(--f-color-nav-translucent) r g b / 0.4)',
                        backdropFilter: 'blur(10px)',
                    }}
                    colorToken="accent"
                    >
                    <Text
                        textAlign="center"
                        color="inherit">
                            New! DataGrid has just been added! 
                            Check out the <a href="/docs" style={{ color: 'currentColor' }}>docs</a> for more information.
                    </Text>
                    <Icon icon={PiRocket} style={{ transform: 'rotate(45deg)', color: 'currentColor' }} />
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
                                className="page-nav"
                                bg={stuck ? 'rgb(from var(--f-color-nav-translucent) r g b / 0.9)' : 'transparent'}
                                style={{
                                    borderColor: 'var(--f-color-slate-800)',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'background 0.1s',
                                }}>
                                <View
                                    row
                                    gap="1rem"
                                    width="100%"
                                    p="0 4rem">
                                    <Link href="/">
                                        <LogoSolid color="var(--f-color-base-100)" />
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
                                            '--f-button-background-color-hover': 'var(--f-color-base-800)',
                                        }}>
                                        Documentation
                                    </Button>
                                    <Button
                                        target="_blank"
                                        href="https://github.com/fold-dev/fold"
                                        as="a"
                                        border="none"
                                        style={{
                                            '--f-button-color': 'var(--f-color-accent-50)',
                                            '--f-button-color-hover': 'var(--f-color-accent-50)',
                                            '--f-button-background-color': 'transparent',
                                            '--f-button-background-color-hover': 'var(--f-color-base-800)',
                                        }}>
                                        Download
                                    </Button>
                                    <SocialIcon
                                        url="https://github.com/fold-dev"
                                        target="_blank"
                                        style={{ width: 35, height: 35 }}
                                        fgColor="var(--f-color-base-100)"
                                        bgColor="var(--f-color-base-800)"
                                    />
                                    <SocialIcon
                                        url="https://twitter.com/fold_dev"
                                        target="_blank"
                                        style={{ width: 35, height: 35 }}
                                        fgColor="var(--f-color-base-100)"
                                        bgColor="var(--f-color-base-800)"
                                    />
                                    <SocialIcon
                                        url="https://www.linkedin.com/company/fold-dev"
                                        target="_blank"
                                        style={{ width: 35, height: 35 }}
                                        fgColor="var(--f-color-base-100)"
                                        bgColor="var(--f-color-base-800)"
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
                        <LogoSolid color="var(--f-color-accent)" />
                        <Text colorToken="accent">fold.dev &copy; 2025</Text>
                        <View
                            row
                            gap={10}
                            justifyContent="flex-start">
                            <SocialIcon
                                url="https://github.com/fold-dev/fold"
                                target="_blank"
                                style={{ width: 37, height: 37 }}
                                fgColor="var(--f-color-accent)"
                                bgColor="var(--f-color-surface-strong)"
                            />
                            <SocialIcon
                                url="https://twitter.com/fold_dev"
                                target="_blank"
                                style={{ width: 37, height: 37 }}
                                fgColor="var(--f-color-accent)"
                                bgColor="var(--f-color-surface-strong)"
                            />
                            <SocialIcon
                                url="https://www.linkedin.com/company/fold-dev"
                                target="_blank"
                                style={{ width: 37, height: 37 }}
                                fgColor="var(--f-color-accent)"
                                bgColor="var(--f-color-surface-strong)"
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
                            colorToken="accent">
                            Navigation
                        </Text>
                        <List flex={1}>
                            <Li>
                                <Text
                                    as="a"
                                    href="/"
                                    size="xl"
                                    fontWeight={400}
                                    colorToken="text"
                                    textDecoration="none">
                                    Home
                                </Text>
                            </Li>
                            {/* 
                            <Li>
                                <Text
                                    as="a"
                                    href="/#core"
                                    size="xl"
                                    fontWeight={400}
                                    textDecoration="none"
                                    colorToken="text">
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
                                    colorToken="text">
                                    Pro
                                </Text>
                            </Li> 
                            */}
                            <Li>
                                <Text
                                    as="a"
                                    href="/#support"
                                    size="xl"
                                    fontWeight={400}
                                    textDecoration="none"
                                    colorToken="text">
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
                            colorToken="accent">
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
                                    colorToken="text">
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
                                    colorToken="text">
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
                                    colorToken="text">
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
                                    colorToken="text">
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
                            colorToken="accent">
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
                                    colorToken="text">
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
                                    colorToken="text">
                                    Terms of Use
                                </Text>
                            </Li>
                            {/* 
                            <Li>
                                <Text
                                    as="a"
                                    target="_blank"
                                    href="/license"
                                    size="xl"
                                    fontWeight={400}
                                    textDecoration="none"
                                    colorToken="text">
                                    License
                                </Text>
                            </Li>
                            */}
                        </List>
                    </View>
                    <View
                        column
                        flex={0.5}
                        gap={20}
                        alignItems="flex-end"
                        className="footer_buttons">
                        <Button
                            as="a"
                            target="_blank"
                            href="/docs">
                            Get Started
                        </Button>
                        <Button
                            width={125}
                            as="a"
                            target="_blank"
                            href="https://fold.dev/docs">
                            Documentation
                        </Button>
                    </View>
                </View>
            </FoldProvider>
        </>
    )
}
