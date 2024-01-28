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
    Logo,
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
    Text,
    View,
    useVisibility,
} from '@fold-dev/core'
import * as Token from '@fold-dev/design/tokens'
import Head from 'next/head'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import {
    PiCircleDashedDuotone,
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
    PiSignpostDuotone,
    PiTwitterLogoDuotone,
} from 'react-icons/pi'
import { navigation } from '../navigation'
import PageNavigationComponent from '@/pages/components/page-navigation.component'

export const StorybookIcon = (props: any) => {
    return (
        <svg
            width={18}
            height={20}
            viewBox="-31.5 0 319 319"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
            fill="#000000">
            <g
                id="SVGRepo_bgCarrier"
                strokeWidth={0}
            />
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
                <defs>
                    <path
                        d="M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z"
                        id="path-1">
                    </path>
                </defs>
                <g>
                    <mask
                        id="mask-2"
                        fill="white">
                        <use xlinkHref="#path-1"> </use>
                    </mask>
                    <use
                        fill="#FF4785"
                        fillRule="nonzero"
                        xlinkHref="#path-1">
                    </use>
                    <path
                        d="M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                        mask="url(#mask-2)">
                    </path>
                </g>
            </g>
        </svg>
    )
}

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
            case 'releases':
                return true
            default:
                return false
        }
    }, [url])

    useEffect(() => {
        if (!showChild) return

        if (!noToc) {
            setTimeout(() => {
                const headings = document.querySelectorAll('.docs-content > h3, .docs-content > h4')
                const toc: any = []

                Array.from(headings).forEach((element: any) => {
                    const id = element.innerText.toLowerCase().split(' ').join('-')

                    element.id = id

                    toc.push({
                        href: '#' + id,
                        text: element.innerText,
                        type: element.tagName.toLowerCase(),
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
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    httpEquiv="X-UA-Compatible"
                    content="IE=edge, IE=11, IE=10"
                />
                <meta
                    name="robots"
                    content="noindex,follow"
                />
                <meta
                    name="description"
                    content="Powerful, fully customizable React components for scaling your product to the next level. Supercharge your dev workflow by using our zero-dependency UI components."
                />
                <title>Fold Documentation</title>
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon.png"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                    data-google="yes"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    data-google="yes"
                />
                <link
                    data-google="yes"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    data-google="yes"
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <style id="custom-styles" />

            <SkipNav>Skip To Content</SkipNav>
            <MobileComponent />

            <FoldProvider license="fake-license-code">
                {/* 
                <View
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
                </View> 
                */}
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
                                max={400}
                                min={220}
                                height="100%"
                                handle={<></>}
                                style={{ '--f-resizable-color': 'transparent' }}>
                                <Header
                                    height="4.5rem"
                                    p="0 1.5rem"
                                    width="101%"
                                    gap={10}
                                    colorToken="text-weakest">
                                    <Link
                                        href="/"
                                        row>
                                        <LogoSolid size="sm" />
                                    </Link>
                                    <Heading
                                        as="h4"
                                        fontWeight="semibold">
                                        Documentation
                                    </Heading>
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
                                            onClick={() =>
                                                router.push('/docs/introduction', { scroll: false })
                                            }
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
                                            onClick={() =>
                                                router.push('/docs/community', { scroll: false })
                                            }
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
                                            onClick={() =>
                                                router.push('/docs/faq', { scroll: false })
                                            }
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
                                            active={url == 'releases'}
                                            onClick={() =>
                                                router.push('/docs/releases', { scroll: false })
                                            }
                                            prefix={
                                                <Icon
                                                    icon={PiFlagDuotone}
                                                    color={Token.ColorYellow400}
                                                    strokeWidth={2}
                                                />
                                            }>
                                            Releases
                                        </NavigationItem>
                                        <NavigationItem
                                            href="https://github.com/orgs/fold-dev/projects/8"
                                            target="_blank"
                                            prefix={
                                                <Icon
                                                    icon={PiSignpostDuotone}
                                                    color={Token.ColorTeal400}
                                                    strokeWidth={2}
                                                />
                                            }>
                                            Roadmap
                                        </NavigationItem>
                                        <NavigationItem
                                            href="https://storybook.fold.dev"
                                            target="_blank"
                                            prefix={<StorybookIcon />}>
                                            Storybook
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
                                            onClick={() =>
                                                router.push('/docs/theming', { scroll: false })
                                            }
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
                                            onClick={() =>
                                                router.push('/docs/icons', { scroll: false })
                                            }
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
                                            onClick={() =>
                                                router.push('/docs/tokens', { scroll: false })
                                            }
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
                                        <NavigationItem
                                            active={url == 'hooks'}
                                            onClick={() =>
                                                router.push('/docs/core/hooks', { scroll: false })
                                            }>
                                            Hooks
                                        </NavigationItem>
                                        <NavigationItem
                                            href="https://fold-dev.github.io/fold"
                                            target="_blank">
                                            TypeDocs
                                        </NavigationItem>
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
                                    <Pill
                                        size="xs"
                                        color={Token.ColorNeonpink400}
                                        subtle
                                        fontWeight={800}>
                                        v0.1
                                    </Pill>
                                    <Link
                                        href="/"
                                        style={{ textWrap: 'nowrap' }}>
                                        <Logo size="sm" />
                                    </Link>
                                    <Popover
                                        arrow
                                        width={310}
                                        anchor="bottom-right"
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
                                            row
                                            colorToken="accent"
                                            className="f-buttonize"
                                            onClick={show}>
                                            <Icon
                                                icon={PiCircleDashedDuotone}
                                                size="lg"
                                            />
                                        </View>
                                    </Popover>
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

                                {/* <PageNavigationComponent /> */}

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
                                            {!toc.length && <Text>No sections available.</Text>}
                                            {toc.map(({ href, text, type }, index: number) => (
                                                <Li key={index}>
                                                    <Link
                                                        href={href}
                                                        size={type == 'h3' ? 'md' : 'sm'}
                                                        p={type == 'h3' ? '' : '0 0 0 1rem'}
                                                        textDecoration="none"
                                                        fontWeight="normal">
                                                        {text}
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
