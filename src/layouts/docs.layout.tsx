import { colors } from '@/pages'
import MobileComponent from '@/pages/components/mobile.component'
import { SearchComponent } from '@/pages/components/search.component'
import {
    App,
    Content,
    DarkModeToggle,
    Flexer,
    FoldProvider,
    Header,
    Heading,
    Icon,
    Li,
    Link,
    List,
    LogoSolid,
    Main,
    Navigation,
    NavigationDivider,
    NavigationHeading,
    NavigationItem,
    NavigationSection,
    Option,
    Options,
    Palette,
    Pill,
    Popover,
    Range,
    Resizable,
    Sidebar,
    SkipNav,
    SkipNavMain,
    Stack,
    View,
    useVisibility,
} from '@fold-dev/core'
import * as Token from '@fold-dev/design/tokens'
import Head from 'next/head'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import {
    PiDropDuotone,
    PiFingerprintSimpleDuotone,
    PiFlagDuotone,
    PiGithubLogoDuotone,
    PiLifebuoyDuotone,
    PiLinkedinLogoDuotone,
    PiMagicWandDuotone,
    PiMarkerCircleDuotone,
    PiPackageDuotone,
    PiPersonArmsSpreadDuotone,
    PiPinwheelDuotone,
    PiPlanetDuotone,
    PiQuestionDuotone,
    PiRocketLaunchDuotone,
    PiTwitterLogoDuotone,
} from 'react-icons/pi'
import { navigation } from '../navigation'

export default function DocsLayout(props: any) {
    const { children } = props
    const router = useRouter()
    const { visible, show, hide } = useVisibility(false)
    const [color, setColor] = useState(Token.ColorElectric400)
    const [value, setValue] = useState(5)
    const [option, setOption] = useState(0)
    const [toc, setToc] = useState([])
    const [showChild, setShowChild] = useState(false)
    const [text, setText] = useState('')
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const url = useMemo(() => {
        const parts = pathname.split('/')
        return parts[parts.length - 1]
    }, [pathname, searchParams])
    const noToc = useMemo(() => {
        switch (url) {
            case 'community':
                return true
            case 'faq':
                return true
            case 'changelog':
                return true
            case 'roadmap':
                return true
            default:
                return false
        }
    }, [url])

    useEffect(() => {
        if (!showChild) return
        if (!noToc) {
            setTimeout(() => {
                const headings = document.querySelectorAll('.docs-content > h3')
                const toc: any = []

                Array.from(headings).forEach((element: any) => {
                    toc.push({
                        href: '#' + element.innerText.toLowerCase(),
                        text: element.innerText,
                    })
                })

                setToc(toc)
            }, 10)
        }
    }, [children, showChild, noToc])

    const setAccent = (color) => {
        document.getElementById('custom-styles').innerHTML = colors[color]
    }

    const setFont = (family) => {
        const d: any = document.querySelector(':root')

        d.style.setProperty('--f-font-heading', family)
        d.style.setProperty('--f-font-body', family)
    }

    useEffect(() => {
        if (!showChild) return

        switch (option) {
            case 0:
                return setFont(
                    '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
                )
            case 1:
                return setFont(
                    'Inter, -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
                )
            case 2:
                return setFont(
                    'DM Sans, -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
                )
        }
    }, [option])

    useEffect(() => {
        if (!showChild) return

        const of = 2
        const percent = value / 10
        const radius = of * percent + 'rem'
        const d: any = document.querySelector(':root')

        d.style.setProperty('--f-radius', radius)
    }, [value])

    useEffect(() => {
        if (!showChild) return

        switch (color) {
            case Token.ColorPurple400:
                return setAccent('purple')
            case Token.ColorNeonpink400:
                return setAccent('neonpink')
            case Token.ColorRed400:
                return setAccent('red')
            case Token.ColorOrange400:
                return setAccent('orange')
            case Token.ColorYellow400:
                return setAccent('yellow')
            case Token.ColorGreen400:
                return setAccent('green')
            case Token.ColorTeal400:
                return setAccent('teal')
            case Token.ColorCyan400:
                return setAccent('cyan')
            case Token.ColorElectric400:
                return setAccent('electric')
        }
    }, [color])

    useEffect(() => {
        setShowChild(true)
    }, [])

    if (!showChild) return null

    return (
        <>
            <Head>
                <title>Documentation</title>
            </Head>
            <style id="custom-styles" />

            <SkipNav>Skip To Content</SkipNav>
            <MobileComponent />

            <FoldProvider license="fake-license-code">
                {/* <View
                    row
                    height="3rem"
                    gap={10}
                    width="100%"
                    colorToken="base-100"
                    bg="linear-gradient(177deg, var(--f-color-base-800), var(--f-color-base-700))">
                    <Text colorToken="base-100">
                        We've just launched! <Link colorToken="accent-300">Click here</Link> to let us know what you
                        think. 🚀
                    </Text>
                </View> */}
                <App>
                    <Content
                        row
                        width="100%"
                        height="100%">
                        <Sidebar
                            left
                            width="fit-content"
                            height="100%">
                            <Resizable
                                column
                                justifyContent="stretch"
                                width={250}
                                max={350}
                                min={160}
                                height="100%"
                                handle={<></>}
                                style={{ '--f-resizable-color': 'transparent' }}>
                                <Header
                                    height="4.5rem"
                                    p="0 1.5rem"
                                    width="101%"
                                    gap={10}
                                    colorToken="text-weakest">
                                    <LogoSolid size="sm" />
                                    <Heading
                                        as="h4"
                                        fontWeight="semibold">
                                        Docs
                                    </Heading>
                                    <Pill
                                        size="xs"
                                        color={Token.ColorNeonpink400}
                                        subtle
                                        fontWeight={800}>
                                        ALPHA
                                    </Pill>
                                    <Flexer />
                                </Header>
                                <View
                                    flex={1}
                                    width="100%"
                                    style={{ overflow: 'scroll' }}>
                                    <Navigation
                                        width="100%"
                                        height="100%"
                                        alignItems="flex-start">
                                        <NavigationHeading>Overview</NavigationHeading>
                                        <NavigationItem
                                            active={url == 'introduction'}
                                            onClick={() => router.push('/docs/introduction', { scroll: false })}
                                            prefix={
                                                <Icon
                                                    icon={PiPackageDuotone}
                                                    color={Token.ColorElectric400}
                                                    strokeWidth={2}
                                                />
                                            }>
                                            Introduction
                                        </NavigationItem>
                                        <NavigationItem
                                            active={url == 'getting-started'}
                                            onClick={() =>
                                                router.push('/docs/getting-started', {
                                                    scroll: false,
                                                })
                                            }
                                            prefix={
                                                <Icon
                                                    icon={PiRocketLaunchDuotone}
                                                    color={Token.ColorPurple400}
                                                    strokeWidth={2}
                                                />
                                            }>
                                            Getting Started
                                        </NavigationItem>
                                        <NavigationItem
                                            active={url == 'community'}
                                            onClick={() => router.push('/docs/community', { scroll: false })}
                                            prefix={
                                                <Icon
                                                    icon={PiPersonArmsSpreadDuotone}
                                                    color={Token.ColorNeonpink400}
                                                    strokeWidth={2}
                                                />
                                            }>
                                            Community
                                        </NavigationItem>
                                        <NavigationItem
                                            active={url == 'faq'}
                                            onClick={() => router.push('/docs/faq', { scroll: false })}
                                            prefix={
                                                <Icon
                                                    icon={PiQuestionDuotone}
                                                    color={Token.ColorOrange400}
                                                    strokeWidth={2}
                                                />
                                            }>
                                            FAQ
                                        </NavigationItem>
                                        <NavigationItem
                                            active={url == 'changelog'}
                                            onClick={() => router.push('/docs/changelog', { scroll: false })}
                                            prefix={
                                                <Icon
                                                    icon={PiMagicWandDuotone}
                                                    color={Token.ColorYellow400}
                                                    strokeWidth={2}
                                                />
                                            }>
                                            Changelog
                                        </NavigationItem>
                                        <NavigationItem
                                            active={url == 'roadmap'}
                                            onClick={() => router.push('/docs/roadmap', { scroll: false })}
                                            prefix={
                                                <Icon
                                                    icon={PiFlagDuotone}
                                                    color={Token.ColorTeal400}
                                                    strokeWidth={2}
                                                />
                                            }>
                                            Roadmap
                                        </NavigationItem>
                                        <NavigationDivider />
                                        <NavigationHeading>Design</NavigationHeading>
                                        <NavigationItem
                                            active={url == 'design-system'}
                                            onClick={() =>
                                                router.push('/docs/design-system', {
                                                    scroll: false,
                                                })
                                            }
                                            prefix={
                                                <Icon
                                                    icon={PiPlanetDuotone}
                                                    color={Token.ColorNeonpink400}
                                                    strokeWidth={2}
                                                />
                                            }>
                                            Design System
                                        </NavigationItem>
                                        <NavigationItem
                                            active={url == 'theming'}
                                            onClick={() => router.push('/docs/theming', { scroll: false })}
                                            prefix={
                                                <Icon
                                                    icon={PiMarkerCircleDuotone}
                                                    color={Token.ColorOrange400}
                                                    strokeWidth={2}
                                                />
                                            }>
                                            Theming
                                        </NavigationItem>
                                        <NavigationItem
                                            active={url == 'icons'}
                                            onClick={() => router.push('/docs/icons', { scroll: false })}
                                            prefix={
                                                <Icon
                                                    icon={PiPinwheelDuotone}
                                                    color={Token.ColorPurple400}
                                                    strokeWidth={2}
                                                />
                                            }>
                                            Icons
                                        </NavigationItem>
                                        <NavigationItem
                                            active={url == 'tokens'}
                                            onClick={() => router.push('/docs/tokens', { scroll: false })}
                                            prefix={
                                                <Icon
                                                    icon={PiFingerprintSimpleDuotone}
                                                    color={Token.ColorElectric400}
                                                    strokeWidth={2}
                                                />
                                            }>
                                            Tokens
                                        </NavigationItem>
                                        <NavigationDivider />
                                        <NavigationHeading>Components</NavigationHeading>
                                        {navigation.map((component: any, index: number) => (
                                            <NavigationItem
                                                active={url == component.slug}
                                                key={index}
                                                style={{ textTransform: 'capitalize' }}
                                                onClick={() =>
                                                    router.push('/docs/core/' + component.slug, {
                                                        scroll: false,
                                                    })
                                                }
                                                suffix={
                                                    <View
                                                        gap={5}
                                                        row>
                                                        {component.experimental && (
                                                            <Pill
                                                                color={Token.ColorViolet400}
                                                                size="xs"
                                                                subtle>
                                                                EARLY ACCESS
                                                            </Pill>
                                                        )}
                                                        {component.pro && (
                                                            <Pill
                                                                color={Token.ColorAccent400}
                                                                size="xs"
                                                                subtle>
                                                                PRO
                                                            </Pill>
                                                        )}
                                                        {component.soon && (
                                                            <Pill
                                                                color={Token.ColorNeonpink400}
                                                                size="xs"
                                                                subtle>
                                                                COMING SOON
                                                            </Pill>
                                                        )}
                                                    </View>
                                                }>
                                                {component.slug.replace('-', ' ')}
                                            </NavigationItem>
                                        ))}
                                        <NavigationDivider />
                                        <NavigationHeading>Helpers</NavigationHeading>
                                        {/* 
                                        <NavigationItem
                                            active={url == 'changelog'}
                                            onClick={() => router.push('/docs/hooks', { scroll: false })}>
                                            Hooks
                                        </NavigationItem>
                                        <NavigationItem
                                            active={url == 'changelog'}
                                            onClick={() => router.push('/docs/hooks', { scroll: false })}>
                                            CSS Utilities
                                        </NavigationItem>   
                                        */}
                                        <NavigationItem
                                            href="https://fold-dev.github.io/fold"
                                            target="_blank">
                                            TypeDocs
                                        </NavigationItem>
                                        {/* <NavigationItem
                                            href="https://fold.dev"
                                            target="_blank">
                                            fold.dev
                                        </NavigationItem> */}
                                        <NavigationSection>
                                            <Heading
                                                p="1rem"
                                                as="h6"
                                                colorToken="text-weakest"
                                                fontWeight={500}>
                                                Fold &copy; 2024
                                            </Heading>
                                        </NavigationSection>
                                    </Navigation>
                                </View>
                            </Resizable>
                        </Sidebar>

                        <Main
                            column
                            flex={1}
                            height="100%"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            style={{ overflow: 'hidden' }}
                            bgToken="surface">
                            <Header
                                gap={10}
                                height="4.5rem"
                                p="0.5rem 1rem 0.5rem 0"
                                colorToken="text-weaker">
                                <SearchComponent />
                                <Stack
                                    m="0 0 0 1rem"
                                    spacing={15}
                                    noStretch>
                                    <Popover
                                        arrow
                                        width={310}
                                        anchor="bottom-center"
                                        content={
                                            <View
                                                p={20}
                                                column
                                                gap={10}
                                                alignItems="flex-start">
                                                <Heading as="h5">Font Family:</Heading>
                                                <Options
                                                    animated
                                                    width="100%"
                                                    selected={option}
                                                    onOptionChange={setOption}>
                                                    <Option>System Font</Option>
                                                    <Option>Inter</Option>
                                                    <Option>DM Sans</Option>
                                                </Options>
                                                <Heading as="h5">Color:</Heading>
                                                <Palette
                                                    justifyContent="center"
                                                    gap={1}
                                                    color={color}
                                                    colors={[
                                                        Token.ColorPurple400,
                                                        Token.ColorNeonpink400,
                                                        Token.ColorRed400,
                                                        Token.ColorOrange400,
                                                        Token.ColorYellow400,
                                                        Token.ColorGreen400,
                                                        Token.ColorTeal400,
                                                        Token.ColorCyan400,
                                                        Token.ColorElectric400,
                                                    ]}
                                                    onChange={setColor}
                                                />
                                                <Heading as="h5">Radius:</Heading>
                                                <Range
                                                    min={0}
                                                    max={10}
                                                    step={1}
                                                    value={value}
                                                    onChange={(e) => setValue(e.target.value)}
                                                />
                                            </View>
                                        }
                                        isVisible={visible}
                                        onDismiss={hide}>
                                        <View
                                            colorToken="neonpink-300"
                                            m="0 1rem 0 0.5rem"
                                            className="f-buttonize"
                                            onClick={show}>
                                            <Icon
                                                icon={PiDropDuotone}
                                                size="lg"
                                            />
                                        </View>
                                    </Popover>
                                    {/* 
                                    <SocialIcon
                                        url="https://github.com/fold-dev/fold"
                                        target="_blank"
                                        style={{ width: 30, height: 30 }}
                                        fgColor="var(--f-color-surface)"
                                        bgColor="var(--f-color-surface-inverse)"
                                    />
                                    <SocialIcon
                                        url="https://twitter.com/fold_dev"
                                        target="_blank"
                                        style={{ width: 30, height: 30 }}
                                        fgColor="var(--f-color-surface)"
                                    />
                                    <SocialIcon
                                        url="https://www.linkedin.com/company/fold-dev"
                                        target="_blank"
                                        style={{ width: 30, height: 30 }}
                                        fgColor="var(--f-color-surface)"
                                    /> 
                                    */}
                                    <Link
                                        href="https://github.com/fold-dev/fold"
                                        target="_blank"
                                        style={{ textWrap: 'nowrap' }}>
                                        <Icon
                                            icon={PiGithubLogoDuotone}
                                            size="lg"
                                        />
                                    </Link>
                                    <Link
                                        href="https://twitter.com/fold_dev"
                                        target="_blank"
                                        style={{ textWrap: 'nowrap' }}>
                                        <Icon
                                            icon={PiTwitterLogoDuotone}
                                            size="lg"
                                        />
                                    </Link>
                                    <Link
                                        href="https://www.linkedin.com/company/fold-dev"
                                        target="_blank"
                                        style={{ textWrap: 'nowrap' }}>
                                        <Icon
                                            icon={PiLinkedinLogoDuotone}
                                            size="lg"
                                        />
                                    </Link>
                                    <Link
                                        href="/docs/community"
                                        style={{ textWrap: 'nowrap' }}>
                                        <Icon
                                            icon={PiLifebuoyDuotone}
                                            size="lg"
                                        />
                                    </Link>
                                    <DarkModeToggle />
                                </Stack>
                            </Header>

                            <View
                                row
                                flex={1}
                                bgToken="surface"
                                width="100%"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                className="scroll-content">
                                <View
                                    p={0}
                                    flex={1}
                                    width="100%"
                                    position="relative"
                                    className="f-overflow-y-auto"
                                    style={
                                        {
                                            'overflow': 'hidden',
                                            '--f-tabs-panel-padding': '30px',
                                        } as any
                                    }>
                                    <SkipNavMain />
                                    {children}
                                </View>

                                {!noToc && (
                                    <Sidebar
                                        right
                                        p={30}
                                        width={250}
                                        display="block"
                                        bgToken="surface"
                                        style={{ top: 0 }}
                                        position="sticky">
                                        <Heading as="h4">On this page</Heading>
                                        <List
                                            type="none"
                                            bullet=""
                                            p={0}
                                            m="1rem 0 0 0">
                                            {toc.map((line: any, index: number) => (
                                                <Li key={index}>
                                                    <Link
                                                        href={line.href}
                                                        textDecoration="none"
                                                        fontWeight="normal">
                                                        {line.text}
                                                    </Link>
                                                </Li>
                                            ))}
                                        </List>
                                    </Sidebar>
                                )}
                            </View>
                        </Main>
                    </Content>
                </App>
            </FoldProvider>
        </>
    )
}
