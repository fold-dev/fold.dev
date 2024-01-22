import React from 'react'
import * as Token from '@fold-dev/design/tokens'
import {
    Affix,
    Attachment,
    Avatar,
    Badge,
    ButtonGroup,
    Card,
    Copy,
    DarkModeButton,
    DarkModeToggle,
    DateRangeProvider,
    Divider,
    Flexer,
    FoldProvider,
    Header,
    Heading,
    IconLib,
    Image,
    Input,
    Logo,
    LogoSolid,
    Menu,
    MenuItemOption,
    MenuOptionGroup,
    Pill,
    ScrollingDatePicker,
    SkipNavMain,
    Sparkline,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    Timeline,
    TimelineItem,
    View,
    documentObject,
    useCacheValue,
    useVisibility,
    Button,
    Cookie,
    Grid,
    GridItem,
    Li,
    List,
    Navigation,
    NavigationItem,
    Link,
    Options,
    Option,
    Toggle,
    useCheck,
} from '@fold-dev/core'
import Head from 'next/head'
import { useEffect, useMemo, useRef, useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import MobileComponent from './components/mobile.component'

const ScrollingPicker = () => {
    const { today, tomorrow, day1, day2, disabled1, disabled2 } = useMemo(() => {
        const today = new Date()
        const tomorrow = new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000)
        const day1 = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000)
        const day2 = new Date(today.getTime() + 6 * 24 * 60 * 60 * 1000)
        const disabled1 = new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000)
        const disabled2 = new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000)
        const disabledMonth1 = new Date(today.getTime() - 196 * 24 * 60 * 60 * 1000)
        const disabledMonth2 = new Date(today.getTime() - 93 * 24 * 60 * 60 * 1000)
        const disabledYear1 = new Date(today.getFullYear() - 3, 1, 1)
        const disabledYear2 = new Date(today.getFullYear() - 2, 1, 1)
        return {
            today,
            tomorrow,
            day1,
            day2,
            disabled1,
            disabled2,
        }
    }, [])
    const ref = useRef(null)
    const [date, setDate] = useState(new Date())
    const [selection, setSelection] = useState<any[]>([
        [today, tomorrow],
        [day1, day2],
    ])

    const handleSelection = (date: Date) => {
        if (selection.length == 0) {
            setSelection([[date, null]])
        } else {
            const selected = selection[0]
            if (!selected[0]) return setSelection([date, null])
            if (!!selected[0] && !!selected[1]) return setSelection([[date, null]])
            if (!!selected[0] && !selected[1])
                return setSelection(
                    selected[0] > date ? [[date, selected[0]]] : [[selected[0], date]]
                )
        }
    }

    return (
        <DateRangeProvider>
            <ScrollingDatePicker
                ref={ref}
                className="f-scrollbar"
                defaultDate={date}
                selection={selection}
                onChange={handleSelection}
                disabled={[[disabled1, disabled2]]}
                renderDay={(day) => {
                    if (day.getDate() == 7 && day.getMonth() == date.getMonth()) {
                        return (
                            <>
                                {day.getDate()}
                                <Badge
                                    variant="danger"
                                    anchor="top-left"
                                    width={7}
                                    height={7}
                                    style={{ marginLeft: 7, marginTop: 7 }}
                                />
                            </>
                        )
                    } else {
                        return day.getDate()
                    }
                }}
            />
        </DateRangeProvider>
    )
}

const sparkline = [
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
]

const All = () => {
    const [selected, setSelected] = useState<any>([])

    return (
        <View
            row
            gap={10}
            height="fit-content"
            width="fit-content"
            justifyContent="flex-end">
            <View
                column
                gap={10}
                width={300}>
                <Menu width={300}>
                    <MenuOptionGroup
                        title="State Management"
                        defaultValue="redux"
                        type="radio">
                        <MenuItemOption value="redux">Redux</MenuItemOption>
                        <MenuItemOption value="mobx">MobX</MenuItemOption>
                        <MenuItemOption value="zustand">Zustand</MenuItemOption>
                        <MenuItemOption value="none">None</MenuItemOption>
                    </MenuOptionGroup>
                </Menu>

                <Card
                    p={20}
                    width="100%">
                    <Sparkline
                        data={sparkline}
                        variant="bar"
                        width="100%"
                        height={30}
                    />
                </Card>

                <Card
                    p={20}
                    width="100%">
                    <Heading
                        as="h5"
                        fontWeight="bold"
                        m="0 0 1rem 0">
                        Activity
                    </Heading>
                    <Timeline>
                        <TimelineItem
                            marker={
                                <Avatar
                                    size="xs"
                                    src="https://randomuser.me/api/portraits/men/12.jpg"
                                />
                            }>
                            <Text>Rob opened the attachment in Microsoft Outlook</Text>
                        </TimelineItem>
                        <TimelineItem colorToken="text">
                            <Text>Image attachment downloaded from the server</Text>
                        </TimelineItem>
                        <TimelineItem colorToken="text">
                            <Text>Message flagged as harmless by anti-virus system</Text>
                        </TimelineItem>
                    </Timeline>
                </Card>

                <Card
                    p="0rem 1rem"
                    width="100%"
                    row>
                    <Tabs
                        selected={selected}
                        onSelect={setSelected}
                        animated>
                        <TabList
                            height={60}
                            border="none"
                            stretch
                            disableScroll>
                            <Tab>Members</Tab>
                            <Tab>Security</Tab>
                            <Tab>Account</Tab>
                        </TabList>
                    </Tabs>
                </Card>

                <Attachment
                    width="100%"
                    mime="image/png"
                    filesize={24325}
                    label="screenshot.png"
                    href="https://fold.dev"
                />

                <Copy
                    value="049d2ee4-6672-11ee-8c99-0242ac120002"
                    prefix={<IconLib icon="circle" />}
                    suffix={
                        <Pill
                            size="xs"
                            m="0 1rem">
                            UUID
                        </Pill>
                    }
                />

                <View
                    row
                    justifyContent="flex-start"
                    gap={5}
                    width="100%">
                    <Pill
                        size="sm"
                        color={Token.ColorNeonpink500}>
                        React
                    </Pill>
                    <Pill
                        size="sm"
                        color={Token.ColorPurple100}>
                        UI
                    </Pill>
                    <Pill
                        size="sm"
                        color={Token.ColorBlue300}>
                        Components
                    </Pill>
                    <Pill
                        size="sm"
                        color={Token.ColorSeagreen100}>
                        0 Dependency
                    </Pill>
                </View>
            </View>

            <View
                column
                width={300}
                gap={10}
                flex={1}
                alignItems="flex-end">
                <Card
                    width={300}
                    footer={
                        <>
                            <Divider />
                            <ButtonGroup
                                p={15}
                                justifyContent="stretch"
                                width="100%">
                                <Button>Book Now</Button>
                                <Button>Add to Wishlist</Button>
                            </ButtonGroup>
                        </>
                    }
                    header={
                        <Image
                            width="100%"
                            height={150}
                            src="./building.png"
                        />
                    }>
                    <View p={20}>
                        <Stack
                            direction="vertical"
                            spacing={10}>
                            <View
                                row
                                gap={5}
                                justifyContent="flex-start">
                                <Pill
                                    color={Token.ColorElectric400}
                                    subtle
                                    size="sm">
                                    co-working
                                </Pill>
                                <Pill
                                    color={Token.ColorAccent400}
                                    subtle
                                    size="sm">
                                    remote
                                </Pill>
                            </View>
                            <Heading as="h2">Perfect Getaway</Heading>
                            <Text>
                                A once in a lifetime opportunity to live and work remotely in a
                                breathtaking location!
                            </Text>

                            <Text
                                size="sm"
                                colorToken="accent">
                                Terms & conditions apply
                            </Text>
                        </Stack>
                    </View>
                </Card>

                <Card
                    width="100%"
                    style={{ overflow: 'hidden' }}>
                    <ScrollingPicker />
                </Card>

                <View
                    row
                    justifyContent="flex-end"
                    gap={10}>
                    <Text
                        as="label"
                        htmlFor="dm">
                        Toggle Dark Mode
                    </Text>
                    <DarkModeToggle id="dm" />
                </View>
            </View>
        </View>
    )
}

function Home() {
    const { checked, check } = useCheck(true)
    const [option, setOption] = useState(-1)
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
                    content="Schemabear is a flexible data importer your users will love. "
                />
                <title>Fold</title>
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon.png"
                />

                {getSafeCache().trim() != 'no' && (
                    <>
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
                            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
                            rel="stylesheet"
                        />
                        <link
                            data-google="yes"
                            href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
                            rel="stylesheet"
                        />
                    </>
                )}
            </Head>
            <FoldProvider license="fake-license-code">
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
                            We use essential cookies to make our site work. With your consent, we
                            may also use non-essential cookies to improve user experience and
                            analyze website traffic.
                        </Text>
                    }
                />

                <View
                    row
                    p={8}
                    gap={10}
                    zIndex={10000}
                    width="100%"
                    position="relative"
                    bg="linear-gradient(177deg, var(--f-color-accent-500) 00%, var(--f-color-neonpink-500) 200%)">
                    <Text
                        color="inherit"
                        colorToken="text-on-color">
                        We've just launched the alpha version of Fold. Get started{' '}
                        <Link
                            href="/docs"
                            colorToken="surface"
                            target="_blank">
                            here
                        </Link>
                        ! 🚀
                    </Text>
                </View>

                <Header
                    display="none"
                    bg="transparent"
                    border="none">
                    <View
                        row
                        gap={30}
                        width="100%"
                        p="2rem 2rem 0rem 2rem">
                        <LogoSolid />
                        <Flexer />
                        <Link
                            href="/terms-of-use"
                            target="_blank"
                            textDecoration="none">
                            Terms of Use
                        </Link>
                        <Link
                            href="/privacy-policy"
                            target="_blank"
                            textDecoration="none">
                            Privacy Policy
                        </Link>
                        <Link
                            href="/docs/community"
                            target="_blank"
                            textDecoration="none">
                            Support
                        </Link>
                        <Stack
                            spacing={10}
                            noStretch></Stack>
                        <DarkModeButton />
                    </View>
                </Header>

                <View
                    row
                    gap={30}
                    flex={1}
                    width="100%"
                    p="2rem 0 5rem 0"
                    justifyContent="center">
                    <View
                        column
                        flex={1}
                        gap={30}
                        alignItems="flex-start"
                        p="0 0 0 5rem"
                        id="home"
                        className="hero">
                        <LogoSolid color="var(--f-color-accent)" />

                        <Text
                            style={{ textTransform: 'uppercase' }}
                            letterSpacing={5}
                            colorToken="accent">
                            Introducing
                        </Text>

                        <Heading
                            jumbo
                            colorToken="accent"
                            fontWeight={800}
                            lineHeight={0.9}>
                            The UI component library for product teams.
                        </Heading>

                        <Heading
                            as="h3"
                            colorToken="accent"
                            fontWeight={400}>
                            Powerful, fully customizable React components for scaling your product
                            to the next level. Supercharge your dev workflow by using our
                            zero-dependency UI components.
                        </Heading>

                        <View
                            row
                            gap={5}
                            colorToken="accent-200">
                            <Button
                                variant="accent"
                                as="a"
                                target="_blank"
                                href="/docs">
                                Get Started
                            </Button>
                            <Button
                                subtle
                                as="a"
                                variant="accent"
                                target="_blank"
                                href="https://61fb81a2.sibforms.com/serve/MUIFAIdcVTZB8JLOGmoTu48YYshDwC7Uinyzu3h4sQKqJioZOki2cl7S5BCY9S_sw31Joe2i5fz6RGJfuKXy641YsGYsxkJLqlrTpZXa7H5tzVKRVbkDZvBCKpluQAp4hLkdoWVl7WsceXoIa6GPGRfxYe4tOM8IGmYO-1GfJ-DqScQ1p65akSfLMCl-fGu0sgUUYYnMUlZPn-CW">
                                Subcribe to Newsletter
                            </Button>
                        </View>

                        {/* 
                        <Text
                            size="sm"
                            colorToken="accent-200">
                            Subscribe to our newsletter to be notified of when we launch!
                        </Text> 
                        */}
                    </View>

                    <View
                        row
                        flex={1}
                        p="0 5rem 0 0"
                        height="100%"
                        position="relative"
                        justifyContent="flex-start"
                        className="al1-components">
                        <All />
                    </View>
                </View>

                {/* block */}
                <View
                    row
                    gap={100}
                    flex={1}
                    width="100%"
                    alignItems="flex-start"
                    bgToken="accent-600"
                    p="5rem 0">
                    <View
                        flex={1.5}
                        p="5rem 0rem 5rem 5rem"
                        position="relative">
                        <Grid
                            columns={2}
                            gap="40px 40px"
                            minChildWidth={100}>
                            {[
                                {
                                    title: 'Open Source',
                                    text: "We're open source. Free forever, no limits.",
                                },
                                {
                                    title: 'Customizable',
                                    text: 'Fold mixes traditional CSS variables with React Props to give you the most flexibility without impacting performance.',
                                },
                                {
                                    title: 'Performant',
                                    text: 'Render performance has been key considered at virtually every step of the way, we believe apps should be snappy.',
                                },
                                {
                                    title: 'Design System',
                                    text: 'Fold ships with its own Design System and builds on a large palette of options, all available to use.',
                                },
                                {
                                    title: 'Dark Mode',
                                    text: 'Fold supports Dark Mode, out of the box.',
                                },
                                {
                                    title: 'Zero Dependencies',
                                    text: 'Say goodbye to dependency hell, no other dependencies are used for Fold other than React & ReactDOM.',
                                },
                                {
                                    title: 'Full Featured',
                                    text: 'Every use-case, we have you covered. Fold currently has 85+ custom compponents, with more on the way.',
                                },
                                {
                                    title: 'Aesthetics',
                                    text: 'Fold has been designed to not only work great, but look great in any project.',
                                },
                            ].map(({ title, text }, index) => (
                                <GridItem key={index}>
                                    <Heading
                                        fontWeight={600}
                                        colorToken="accent-100"
                                        m="0 0 0.25rem 0">
                                        {title}
                                    </Heading>
                                    <Text colorToken="accent-200">{text}</Text>
                                </GridItem>
                            ))}
                        </Grid>
                    </View>
                    <View
                        column
                        flex={1}
                        gap={30}
                        alignItems="flex-start"
                        p="5rem 5rem 5rem 0rem">
                        <Text
                            style={{ textTransform: 'uppercase' }}
                            letterSpacing={5}
                            colorToken="accent-200"
                            id="features">
                            Features
                        </Text>

                        <Heading
                            huge
                            colorToken="accent-50"
                            fontWeight={800}
                            lineHeight={0.9}>
                            Built to scale with you.
                        </Heading>

                        <Heading
                            as="h3"
                            colorToken="accent-200"
                            fontWeight={400}>
                            Whether it's a SaaS product or enterprise app, we have you covered.
                        </Heading>

                        {/* 
                        Pro components (coming soon):

                        <List>
                            {[
                                'Todo List',
                                'Kanban Board',
                                'Data Grid',
                                'CSV Mapper',
                                'Rich Text Input',
                                'Calendar',
                                'TreeView',
                                'Gantt',
                            ].map((text, index) => (
                                <Li
                                    row
                                    gap={5}
                                    justifyContent="flex-start"
                                    colorToken="accent-100"
                                    key={index}>
                                    <IconLib icon="arrow-right" />
                                    <Text size="lg">{text}</Text>
                                    {index > 5 && (
                                        <Pill
                                            subtle
                                            style={{ textTransform: 'uppercase' }}
                                            size="xs"
                                            color="#ffffff">
                                            Q1 2024
                                        </Pill>
                                    )}
                                </Li>
                            ))}
                        </List> 
                        */}
                    </View>
                </View>

                <View
                    row
                    gap={100}
                    flex={1}
                    width="100%"
                    alignItems="flex-start"
                    bgToken="accent-800"
                    p="5rem 0">
                    <View
                        column
                        flex={1}
                        gap={30}
                        alignItems="flex-end"
                        p="5rem 0 5rem 5rem">
                        <Text
                            style={{ textTransform: 'uppercase' }}
                            letterSpacing={5}
                            colorToken="accent-400"
                            textAlign="right"
                            id="support">
                            Support
                        </Text>

                        <Heading
                            huge
                            colorToken="accent-200"
                            fontWeight={800}
                            lineHeight={0.9}
                            textAlign="right">
                            Need some help?
                        </Heading>

                        <Heading
                            as="h3"
                            colorToken="accent-300"
                            fontWeight={400}
                            textAlign="right">
                            Need a some help with using Fold in your project?
                        </Heading>
                    </View>

                    <View
                        column
                        gap={30}
                        flex={1.5}
                        p="5rem 5rem 5rem 0"
                        position="relative">
                        {[
                            {
                                url: 'https://github.com/fold-dev/fold/discussions',
                                title: 'Discussions',
                                text: 'We rely on GitHub Discussions to power our community. If you have a question or suggestion, start a discussion.',
                            },
                            {
                                url: 'https://github.com/fold-dev/fold/issues',
                                title: 'Issues',
                                text: 'Open an issue or pull request on our GitHub repository if you want to contribute or report a bug.',
                            },
                            {
                                url: 'mailto:support@fold.dev',
                                title: 'Email',
                                text: 'We do love async communication, but sometimes we get that something is urgent.',
                            },
                        ].map(({ title, text, url }, index) => (
                            <View
                                key={index}
                                width="100%">
                                <Link
                                    href={url}
                                    target="_blank"
                                    textDecoration="none">
                                    <Heading
                                        fontWeight={600}
                                        colorToken="accent-100">
                                        {title} ↗
                                    </Heading>
                                </Link>
                                <Text colorToken="accent-300">{text}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <View
                    row
                    p={100}
                    bgToken="accent"
                    alignItems="flex-start">
                    <View
                        flex={1}
                        column
                        gap={20}
                        alignItems="flex-start">
                        <LogoSolid color="var(--f-color-accent-100)" />
                        <Text colorToken="accent-50">Fold &copy; 2024</Text>
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
                                    href="#home"
                                    size="xl"
                                    fontWeight={400}
                                    colorToken="accent-100"
                                    textDecoration="none">
                                    Home
                                </Text>
                            </Li>
                            <Li>
                                <Text
                                    as="a"
                                    href="#features"
                                    size="xl"
                                    fontWeight={400}
                                    textDecoration="none"
                                    colorToken="accent-100">
                                    Features
                                </Text>
                            </Li>
                            <Li>
                                <Text
                                    as="a"
                                    href="#support"
                                    size="xl"
                                    fontWeight={400}
                                    textDecoration="none"
                                    colorToken="accent-100">
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
                            Helpful Link
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
                                    colorToken="accent-100">
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
                                    colorToken="accent-100">
                                    GitHub
                                </Text>
                            </Li>
                            <Li>
                                <Text
                                    as="a"
                                    href="/docs/changelog"
                                    target="_blank"
                                    size="xl"
                                    fontWeight={400}
                                    textDecoration="none"
                                    colorToken="accent-100">
                                    Changelog
                                </Text>
                            </Li>
                            <Li>
                                <Text
                                    as="a"
                                    href="/docs/roadmap"
                                    target="_blank"
                                    size="xl"
                                    fontWeight={400}
                                    textDecoration="none"
                                    colorToken="accent-100">
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
                                    href="/privacy-policy"
                                    target="_blank"
                                    size="xl"
                                    fontWeight={400}
                                    textDecoration="none"
                                    colorToken="accent-100">
                                    Privacy Policy
                                </Text>
                            </Li>
                            <Li>
                                <Text
                                    as="a"
                                    href="/terms-of-use"
                                    target="_blank"
                                    size="xl"
                                    fontWeight={400}
                                    textDecoration="none"
                                    colorToken="accent-100">
                                    Terms of Use
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
                            colorToken="accent-50"
                            variant="accent"
                            border="0.15rem solid white"
                            as="a"
                            target="_blank"
                            href="/docs">
                            Get Started
                        </Button>
                        <Button
                            colorToken="accent-50"
                            variant="accent"
                            border="0.15rem solid white"
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

Home.noLayout = true

export default Home
