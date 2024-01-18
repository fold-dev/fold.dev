import { navigation } from '../navigation'
import * as Token from '@fold-dev/design/tokens'
import {
    App,
    Content,
    DarkModeToggle,
    FISearch,
    Flexer,
    FoldProvider,
    Header,
    Heading,
    Icon,
    Input,
    InputControl,
    InputSuffix,
    Link,
    LogoSolid,
    Main,
    Navigation,
    NavigationDivider,
    NavigationHeading,
    NavigationItem,
    NavigationSection,
    Pill,
    Popover,
    Resizable,
    Sidebar,
    Text,
    View,
    useVisibility,
    Li,
    List,
    IconLib,
    Stack,
    useEvent,
    SkipNav,
    SkipNavMain,
} from '@fold-dev/core'
import {
    ArrowLeftIcon,
    ArrowUpRightIcon,
    CreditCardIcon,
    CubeIcon,
    FingerPrintIcon,
    FireIcon,
    FlagIcon,
    HomeIcon,
    LifebuoyIcon,
    MegaphoneIcon,
    PaintBrushIcon,
    QuestionMarkCircleIcon,
    RectangleGroupIcon,
    SwatchIcon,
} from '@heroicons/react/24/outline'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { SocialIcon } from 'react-social-icons'
import { SearchComponent } from '@/pages/components/search.component'

export default function DocsLayout(props: any) {
    const { children } = props
    const router = useRouter()
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
            case 'introduction':
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

    useEffect(() => {
        setShowChild(true)
    }, [])

    if (!showChild) return null

    return (
        <>
            <Head>
                <title>Documentation</title>
            </Head>

            <SkipNav>Skip To Content</SkipNav>

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
                                        PREVIEW
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
                                                    icon={CubeIcon}
                                                    color={Token.ColorTeal400}
                                                    strokeWidth={2}
                                                />
                                            }>
                                            Introduction
                                        </NavigationItem>
                                        <NavigationItem
                                            active={url == 'getting-started'}
                                            onClick={() => router.push('/docs/getting-started', { scroll: false })}
                                            prefix={
                                                <Icon
                                                    icon={RectangleGroupIcon}
                                                    color={Token.ColorBlue400}
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
                                                    icon={LifebuoyIcon}
                                                    color={Token.ColorViolet400}
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
                                                    icon={QuestionMarkCircleIcon}
                                                    color={Token.ColorPurple400}
                                                    strokeWidth={2}
                                                />
                                            }>
                                            FAQ
                                        </NavigationItem>
                                        <NavigationDivider />
                                        <NavigationHeading>Design</NavigationHeading>
                                        <NavigationItem
                                            active={url == 'design-system'}
                                            onClick={() => router.push('/docs/design-system', { scroll: false })}
                                            prefix={
                                                <Icon
                                                    icon={PaintBrushIcon}
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
                                                    icon={SwatchIcon}
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
                                                    icon={FireIcon}
                                                    color={Token.ColorYellow400}
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
                                                    icon={FingerPrintIcon}
                                                    color={Token.ColorGreen400}
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
                                                    router.push('/docs/core/' + component.slug, { scroll: false })
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
                                                                BETA
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
                                        <NavigationHeading>Development</NavigationHeading>
                                        <NavigationItem
                                            active={url == 'changelog'}
                                            onClick={() => router.push('/docs/changelog', { scroll: false })}>
                                            Changelog
                                        </NavigationItem>
                                        <NavigationItem
                                            active={url == 'roadmap'}
                                            onClick={() => router.push('/docs/roadmap', { scroll: false })}>
                                            Roadmap
                                        </NavigationItem>
                                        <NavigationItem
                                            href="https://fold-dev.github.io/fold"
                                            target="_blank">
                                            TypeDocs
                                        </NavigationItem>
                                        <NavigationItem
                                            href="https://fold.dev"
                                            target="_blank">
                                            fold.dev
                                        </NavigationItem>
                                        <NavigationSection
                                            row
                                            gap={10}
                                            justifyContent="flex-start">
                                            <Heading
                                                as="h5"
                                                colorToken="base-300"
                                                fontWeight={500}>
                                                Fold &copy; 2023
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
                                    spacing={15}
                                    noStretch>
                                    {/* <SocialIcon url="https://facebook.com" target="_blank" style={{ width: 30, height: 30 }} fgColor="var(--f-color-surface)" /> */}
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
                                    <Link
                                        href="/docs/community"
                                        style={{ textWrap: 'nowrap' }}>
                                        Help & Support
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
                                    style={{ 'overflow': 'hidden', '--f-tabs-panel-padding': '30px' } as any}>
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
