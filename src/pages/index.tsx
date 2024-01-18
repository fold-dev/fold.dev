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
                return setSelection(selected[0] > date ? [[date, selected[0]]] : [[selected[0], date]])
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
                                A once in a lifetime opportunity to live and work remotely in a breathtaking location!
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

function HomeOld() {
    const [showChild, setShowChild] = useState(false)
    const { visible, hide, show } = useVisibility(false)
    const { isCached, getSafeCache, setCache, deleteCache } = useCacheValue('cookies')

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
                    content="React components for product builders."
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
                <Cookie
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
                    position="fixed"
                    width="100%"
                    height="100%"
                    style={{ top: 0, left: 0 }}
                    zIndex={1000}
                    bgToken="background">
                    <View
                        column
                        width="100%"
                        height="100%"
                        justifyContent="stretch"
                        position="absolute">
                        <View
                            row
                            p={10}
                            gap={10}
                            zIndex={10000}
                            position="relative"
                            bgToken="accent"
                            colorToken="accent-weak"
                            width="100%"
                            className="strip">
                            <Text color="inherit">
                                We've just launched the (Very) Early Access version. Check out the documentation{' '}
                                <Link
                                    href="/docs"
                                    colorToken="surface"
                                    target="_blank">
                                    here
                                </Link>
                                ! 🚀
                            </Text>
                            {/* <IconLib icon="arrow-right" /> */}
                        </View>

                        {/*  
                    <Header border="none" bgToken="background">
                            <View row gap={10} width="100%" height="5rem" p="0rem 1rem">
                                <Logo color="var(--f-color-accent)" /> 
                                <Flexer />
                                <DarkModeButton bgToken="background" colorToken="accent" zIndex={10000} position="relative" />
                            </View>
                        </Header> 

                        <Affix width="100%" zIndex={100}>
                            {(stuck) => (
                                <Header border="none" bgToken="background">
                                    <View row gap={10} width="100%" height="5rem" p="0rem 1rem">
                                        <Logo color="var(--f-color-accent)" />
                                        <Flexer />
                                        <Navigation transparent variant="navbar">
                                            <NavigationItem>Home</NavigationItem>
                                            <NavigationItem>Documentation</NavigationItem>
                                            <NavigationItem>Licensing</NavigationItem>
                                            <NavigationItem>Blog</NavigationItem>
                                            <NavigationItem>Support</NavigationItem>
                                        </Navigation>
                                        <Button outline variant="accent">
                                            Get Started
                                        </Button> 
                                        <DarkModeButton bg="transparent" colorToken="accent" />
                                    </View>
                                </Header>
                            )}
                        </Affix>
                        */}

                        <View
                            row
                            justifyContent="stretch"
                            gap={30}
                            flex={1}
                            width="100%"
                            height="100%">
                            <View
                                column
                                flex={1}
                                gap={30}
                                alignItems="flex-start"
                                p="60px 100px 100px 100px">
                                <LogoSolid color="var(--f-color-accent)" />

                                <Heading
                                    huge
                                    colorToken="accent-500"
                                    fontWeight={800}
                                    lineHeight={0.9}>
                                    The UI component library for product teams.
                                </Heading>

                                <Heading
                                    as="h3"
                                    colorToken="text-weak"
                                    fontWeight={400}>
                                    Powerful, fully customizable React components for scaling your product to the next
                                    level. Supercharge your dev workflow by using our zero-dependency UI components.
                                </Heading>

                                <View
                                    row
                                    gap={10}
                                    justifyContent="flex-start"
                                    width="100%">
                                    <Button
                                        as="a"
                                        variant="accent"
                                        size="lg"
                                        target="_blank"
                                        href="/docs">
                                        Get Started
                                    </Button>
                                    <Button
                                        subtle
                                        as="a"
                                        size="lg"
                                        variant="accent"
                                        target="_blank"
                                        href="https://61fb81a2.sibforms.com/serve/MUIFAIdcVTZB8JLOGmoTu48YYshDwC7Uinyzu3h4sQKqJioZOki2cl7S5BCY9S_sw31Joe2i5fz6RGJfuKXy641YsGYsxkJLqlrTpZXa7H5tzVKRVbkDZvBCKpluQAp4hLkdoWVl7WsceXoIa6GPGRfxYe4tOM8IGmYO-1GfJ-DqScQ1p65akSfLMCl-fGu0sgUUYYnMUlZPn-CW">
                                        Subcribe to Newsletter
                                    </Button>
                                </View>

                                {/*       <form
                                    className="js-cm-form"
                                    id="subForm"
                                    action="https://www.createsend.com/t/subscribeerror?description="
                                    method="post"
                                    data-id="2BE4EF332AA2E32596E38B640E905619C04EF28A90AC36A564A78CCE13EA4904A4290119CABCE4A7F936014B7C76B79185EDC529AEBEEF7B01539E1B9D886849">
                                    <Stack spacing={5}>
                                        <Input
                                            placeholder="Full name"
                                            aria-label="Name"
                                            id="fieldName"
                                            name="cm-name"
                                            type="text"
                                            size="lg"
                                        />
                                        <Input
                                            placeholder="E-mail"
                                            autoComplete="Email"
                                            aria-label="Email"
                                            className="js-cm-email-input qa-input-email"
                                            id="fieldEmail"
                                            name="cm-jiyhtkj-jiyhtkj"
                                            required
                                            type="email"
                                            size="lg"
                                        />
                                        <Button
                                            type="submit"
                                            variant="accent"
                                            size="lg">
                                            Subscribe
                                        </Button>
                                    </Stack>
                                </form>

                                <script
                                    type="text/javascript"
                                    src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"
                                    async></script> */}

                                {/*    <Text
                                    size="sm"
                                    colorToken="accent">
                                    Subscribe to our newsletter to be notified of when we launch!
                                </Text> */}

                                <View
                                    row
                                    gap={10}>
                                    <Link
                                        size="sm"
                                        href="/terms-of-use"
                                        target="_blank"
                                        textDecoration="none">
                                        Terms of Use
                                    </Link>
                                    <Link
                                        size="sm"
                                        href="/privacy-policy"
                                        target="_blank"
                                        textDecoration="none">
                                        Privacy Policy
                                    </Link>
                                </View>
                            </View>

                            <View
                                row
                                flex={1.5}
                                height="100%"
                                position="relative">
                                <All />
                            </View>
                        </View>
                    </View>
                </View>

                {/* 
                <Hero 
                    theme="electric"
                    title="Kanban Board"
                    subtitle="Pro Component"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />

                <HeroReverse 
                    theme="purple"
                    title="Todo List"
                    subtitle="Pro Component"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />

                <Hero 
                    theme="neonpink"
                    title="Calendar"
                    subtitle="Pro Component"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />

                <HeroReverse
                    theme="red"
                    title="Kitchen Sink"
                    subtitle="Pro Component"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />

                <WebsiteFooter />

                <Card 
                    p={50} 
                    zIndex={1} 
                    m="-160px auto 150px auto" 
                    width="90%" 
                    border="none"
                    bgToken="surface-inverse">
                    <Stack p={50} spacing={40} width="100%" direction="horizontal">
                        <View flex={1}>
                            <Stack direction="vertical" spacing={20} align="v-middle-left">
                                <Pill color={Token.ColorAccent400} subtle>
                                    Built to Scale
                                </Pill>
                                <Heading as="h2" colorToken="text-weakest">Everything you need to build something awesome.</Heading>
                                <Text size="lg" colorToken="text-weakest">
                                    Whether it's a SaaS product or enterprise app, we have you covered.
                                </Text>
                                <List type="none" colorToken="text-weakest">
                                    <Li align="h-middle-left">
                                        <IconLib icon="check" size="xl" />
                                        <Text size="xl">Zero dependancy</Text>
                                    </Li>
                                    <Li align="h-middle-left">
                                        <IconLib icon="check" size="xl" />
                                        <Text size="xl">Fully customizable</Text>
                                    </Li>
                                    <Li align="h-middle-left">
                                        <IconLib icon="check" size="xl" />
                                        <Text size="xl">Great performance</Text>
                                    </Li>
                                    <Li align="h-middle-left">
                                        <IconLib icon="check" size="xl" />
                                        <Text size="xl">Modern architecture</Text>
                                    </Li>
                                    <Li align="h-middle-left">
                                        <IconLib icon="check" size="xl" />
                                        <Text size="xl">Supports React 16+</Text>
                                    </Li>
                                    <Li align="h-middle-left">
                                        <IconLib icon="check" size="xl" />
                                        <Text size="xl">Dark Mode by default</Text>
                                    </Li>
                                </List>
                                <Text size="sm" colorToken="accent">
                                    Fold Core is free to use without any subscription.
                                </Text>
                            </Stack>
                        </View>
                        <View flex={3}>
                            <Stack spacing={20} direction="vertical" width="100%">
                                <FormControl>
                                    <FormLabel htmlFor="one">Enter your plan name here (disabled)</FormLabel>
                                    <Input
                                        id="one"
                                        placeholder="Enter plan name"
                                        value={text}
                                        onChange={(e) => setText(e)}
                                    />
                                    <FormHelperText kind="info">Remember: use your real name!</FormHelperText>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="one">Pick a color</FormLabel>
                                    <Input
                                        id="two"
                                        type="color"
                                        placeholder="Enter plan name"
                                        value={text}
                                        onChange={(e) => setText(e)}
                                    />
                                    <FormHelperText kind="info">Your favourite color</FormHelperText>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="one">Add a description</FormLabel>
                                    <Textarea
                                        value={text}
                                        maxHeight={300}
                                        placeholder="Enter plan name"
                                        onChange={(e) => setText(e)}
                                    />
                                    <FormHelperText kind="info">Something descriptive</FormHelperText>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="one">Set the correct amount to use</FormLabel>
                                    <Input
                                        id="three"
                                        type="number"
                                        placeholder="Enter plan name"
                                        value={text}
                                        onChange={(e) => setText(e)}
                                    />
                                    <FormHelperText kind="info">No higher than 5</FormHelperText>
                                </FormControl>
                                <Slider
                                    markers={6}
                                    onChange={(value) => setValue([...value])}
                                    values={value}
                                    format=""
                                    min={0}
                                    max={1}
                                    anchor={0}
                                    labels
                                    popupValue={(val) => Math.round(val * 100) + ' %'}
                                    labelValue={(val) => Math.round(val * 20) + ' %'}
                                />
                            </Stack>
                        </View>
                    </Stack>
                </Card>

                <View m="-700px 0 0 0" p="650px 0 0 0" zIndex={0} bgToken="surface" theme="accent" />

                <View m="-700px 0 0 0" p="650px 0 100px 0" zIndex={0} bgToken="surface" theme="accent">
                    <Stack width="100%" spacing={30} alignItems="center" direction="vertical">
                        <Heading jumbo textAlign="center">
                            Deliver world class UX <br />
                            with Pro components
                        </Heading>
                        <Heading as="h2" colorToken="text-weak" textAlign="center">
                            Leverage SaaS-ready React components to deliver complex, <br />
                            business-critical product features in no time.
                        </Heading>
                    </Stack>

                    <WebsiteProductsList />

                    <View row p={50} justifyContent="center">
                        <Stack direction="horizontal" spacing={15}>
                            <Options selected={option} onOptionChange={(index: number) => setOption(index)}>
                                <Option>Yearly</Option>
                                <Option>Monthly</Option>
                            </Options>
                            <Checkbox onChange={check} checked={checked} id="check" />
                            <Label colorToken="text-weaker" htmlFor="check">
                                Use in SaaS
                            </Label>
                        </Stack>
                    </View>
                </View>
                */}
            </FoldProvider>
        </>
    )
}

HomeOld.noLayout = true

const HeroReverse = ({ theme, title, subtitle, description }) => (
    <View
        row
        alignItems="stretch"
        width="100%"
        bgToken={`${theme}-100`}
        height={500}>
        <View
            flex={1}
            p={50}></View>
        <View
            column
            flex={1}
            alignItems="flex-start"
            p={100}>
            <Text
                size="sm"
                colorToken={`${theme}-400`}
                className="f-uppercase"
                fontWeight={500}>
                {subtitle}
            </Text>
            <Heading
                huge
                colorToken={`${theme}-800`}>
                {title}
            </Heading>
            <Text
                colorToken={`${theme}-400`}
                size="xl">
                {description}
            </Text>
        </View>
    </View>
)

const Hero = ({ theme, title, subtitle, description }) => (
    <View
        row
        alignItems="stretch"
        width="100%"
        bgToken={`${theme}-100`}
        height={500}>
        <View
            column
            flex={1}
            alignItems="flex-start"
            p={100}>
            <Text
                size="sm"
                colorToken={`${theme}-400`}
                className="f-uppercase"
                fontWeight={500}>
                {subtitle}
            </Text>
            <Heading
                huge
                colorToken={`${theme}-800`}>
                {title}
            </Heading>
            <Text
                colorToken={`${theme}-400`}
                size="xl">
                {description}
            </Text>
        </View>
        <View
            flex={1}
            p={50}></View>
    </View>
)

function HomeNew() {
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
                    p={10}
                    gap={10}
                    zIndex={10000}
                    width="100%"
                    position="relative"
                    bg="linear-gradient(177deg, var(--f-color-accent-500) 00%, var(--f-color-neonpink-500) 200%)">
                    <Text
                        color="inherit"
                        colorToken="text-on-color">
                        We've just launched! Offering 50% discount for our Early Access release. Read more below. 🚀
                    </Text>
                </View>

                <Header
                    bg="transparent"
                    border="none">
                    <View
                        row
                        gap={10}
                        width="100%"
                        p="2rem 2rem 0rem 2rem">
                        <LogoSolid />
                        <Heading
                            as="h4"
                            color="white"></Heading>
                        <Flexer />
                        <Navigation
                            transparent
                            variant="navbar">
                            <NavigationItem>Home</NavigationItem>
                            <NavigationItem active>Features</NavigationItem>
                            <NavigationItem>Use Cases</NavigationItem>
                            <NavigationItem>Pricing</NavigationItem>
                            <NavigationItem>Support</NavigationItem>
                        </Navigation>
                        <Button outline>Documentation</Button>
                        <Button variant="accent">Buy Now</Button>
                        <DarkModeButton />
                    </View>
                </Header>

                <View
                    row
                    gap={30}
                    flex={1}
                    width="100%"
                    p="2rem 0 5rem 0"
                    justifyContent="stretch">
                    <View
                        column
                        flex={1}
                        gap={30}
                        alignItems="flex-start"
                        p="0 0 0 5rem">
                        <Text
                            style={{ textTransform: 'uppercase' }}
                            letterSpacing={5}
                            colorToken="accent">
                            Early Access
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
                            Powerful, fully customizable React components for scaling your product to the next level.
                            Supercharge your dev workflow by using our zero-dependency UI components.
                        </Heading>

                        <View
                            row
                            gap={20}
                            colorToken="accent-200">
                            <Button variant="accent">Get Started</Button>
                            <Link>Read documentation ↗</Link>
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
                        justifyContent="flex-end">
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
                                    title: 'Unlimited Rows',
                                    text: 'You define the schema, so your users can define the data. Easy Peasy.',
                                },
                                {
                                    title: 'Customizable',
                                    text: 'SchemaBear runs in the browser with the user & works with any framework. You define the schema, so your users can define the data. Easy Peasy.',
                                },
                                {
                                    title: 'Validations',
                                    text: 'Stop paying for row limits, server costs & privacy risks. SchemaBear runs in the browser with the user & works with any framework. ',
                                },
                                {
                                    title: 'Transformations',
                                    text: 'Stop paying for row limits, server costs & privacy risks. SchemaBear runs in the browser with the user & works with any framework. ',
                                },
                                {
                                    title: 'Header Selection',
                                    text: 'You define the schema, so your users can define the data. Easy Peasy.',
                                },
                                {
                                    title: 'Framework Agnostic',
                                    text: 'Stop paying for row limits, server costs & privacy risks. SchemaBear runs in the browser with the user & works with any framework. ',
                                },
                                {
                                    title: 'Drag & Drop',
                                    text: 'Stop paying for row limits, server costs & privacy risks. SchemaBear runs in the browser with',
                                },
                                {
                                    title: 'Dark Mode',
                                    text: 'Stop paying for row limits, server costs & privacy risks. SchemaBear runs in the browser with the user & works with any framework. ',
                                },
                            ].map(({ title, text }, index) => (
                                <GridItem key={index}>
                                    <Heading
                                        fontWeight={600}
                                        colorToken="accent-100">
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
                            colorToken="accent-200">
                            Features
                        </Text>

                        <Heading
                            huge
                            colorToken="accent-50"
                            fontWeight={800}
                            lineHeight={0.9}>
                            Built to scale <br />
                            with you
                        </Heading>

                        <Heading
                            as="h3"
                            colorToken="accent-200"
                            fontWeight={400}>
                            Whether it's a SaaS product or enterprise app, we have you covered.
                        </Heading>

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
                    </View>
                </View>

                <View
                    column
                    gap={40}
                    p={50}>
                    <Heading
                        jumbo
                        colorToken="accent-600"
                        fontWeight={800}
                        textAlign="center"
                        lineHeight={0.9}>
                        World class UX <br />
                        with Pro components
                    </Heading>
                    <Heading
                        as="h3"
                        textAlign="center"
                        colorToken="accent-500"
                        fontWeight={400}>
                        Leverage SaaS-ready React components to deliver complex, <br />
                        business-critical product features in no time.
                    </Heading>
                    <Options
                        size="lg"
                        animated
                        selected={option}
                        onOptionChange={setOption}>
                        <Option>Todo List</Option>
                        <Option>Kanban Board</Option>
                        <Option>CSV Mapper</Option>
                        <Option>Date Picker</Option>
                        <Option>Calendar</Option>
                        <Option
                            suffix={
                                <Pill
                                    subtle
                                    style={{ textTransform: 'uppercase' }}
                                    size="sm">
                                    Beta
                                </Pill>
                            }>
                            Data Grid
                        </Option>
                        <Option
                            suffix={
                                <Pill
                                    subtle
                                    style={{ textTransform: 'uppercase' }}
                                    size="sm"
                                    color="#5946c1">
                                    Q1 2024
                                </Pill>
                            }>
                            TreeView
                        </Option>
                        <Option
                            suffix={
                                <Pill
                                    subtle
                                    style={{ textTransform: 'uppercase' }}
                                    size="sm"
                                    color="#5946c1">
                                    Q1 2024
                                </Pill>
                            }>
                            Gantt
                        </Option>
                    </Options>
                    <View height={700} />
                </View>

                {/* block */}
                <View
                    row
                    gap={100}
                    flex={1}
                    width="100%"
                    alignItems="flex-start"
                    bgToken="accent-50"
                    p="5rem 0">
                    <View
                        column
                        flex={1.5}
                        gap={30}
                        alignItems="flex-start"
                        p="5rem 0rem 5rem 5rem"
                        position="relative">
                        <View
                            row
                            gap={10}
                            justifyContent="flex-start">
                            <Toggle
                                onChange={check}
                                on={checked}
                            />
                            <Text colorToken="accent">Per month</Text>
                        </View>
                        <View
                            row
                            gap={5}
                            justifyContent="flex-start"
                            alignContent="flex-start"
                            alignItems="flex-start">
                            <Heading
                                jumbo
                                fontSize={180}
                                fontWeight={900}
                                letterSpacing={-5}
                                colorToken="accent-400">
                                29
                            </Heading>
                            <View
                                column
                                alignItems="flex-start">
                                <Heading
                                    as="h2"
                                    fontWeight="bold"
                                    colorToken="accent-300">
                                    USD
                                </Heading>
                                <Heading
                                    as="h5"
                                    colorToken="accent-300">
                                    Per Month
                                </Heading>
                                <Heading
                                    as="h5"
                                    colorToken="accent-300">
                                    Per Seat
                                </Heading>
                            </View>
                            <View width={20} />
                            <Heading
                                jumbo
                                fontSize={180}
                                fontWeight={900}
                                letterSpacing={-5}
                                position="relative"
                                colorToken="accent-100">
                                <span
                                    style={{
                                        display: 'block',
                                        position: 'absolute',
                                        top: '43%',
                                        left: -20,
                                        height: 20,
                                        width: 300,
                                        borderRadius: 50,
                                        background: 'var(--f-color-accent-100)',
                                        border: '0.3rem solid var(--f-color-accent-50)',
                                        transform: 'rotateZ(160deg)',
                                    }}
                                />
                                79
                            </Heading>
                            <View
                                column
                                alignItems="flex-start">
                                <Heading
                                    as="h2"
                                    fontWeight="bold"
                                    colorToken="accent-100">
                                    USD
                                </Heading>
                                <Heading
                                    as="h5"
                                    colorToken="accent-100">
                                    Per Month
                                </Heading>
                            </View>
                        </View>

                        <Heading
                            as="h3"
                            colorToken="accent-400"
                            fontWeight={400}>
                            Stop paying for row limits, server costs & privacy risks. Schemabear runs in the browser.
                        </Heading>

                        <List>
                            {[
                                'SchemaBear runs in the browser ',
                                'with the user & works with any framework',
                                'You define the schema, so your users ',
                                'can define the data. ',
                                'Easy Peasy.',
                            ].map((text, index) => (
                                <Li
                                    row
                                    justifyContent="flex-start"
                                    colorToken="accent-400"
                                    key={index}>
                                    <IconLib icon="arrow-right" />
                                    <Text size="lg">{text}</Text>
                                </Li>
                            ))}
                        </List>
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
                            colorToken="accent-400">
                            Pricing
                        </Text>

                        <Heading
                            huge
                            colorToken="accent-400"
                            fontWeight={800}
                            lineHeight={0.9}>
                            Pay once, yours forever.
                        </Heading>

                        <Heading
                            as="h3"
                            colorToken="accent-400"
                            fontWeight={400}>
                            Stop paying for row limits, server costs & privacy risks. Schemabear runs in the browser.
                        </Heading>
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
                            textAlign="right">
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
                            Stop paying for row limits, server costs & privacy risks. Schemabear runs in the browser
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
                                title: 'GitHub Discussions',
                                text: 'You define the schema, so your users can define the data. Easy Peasy.',
                            },
                            {
                                title: 'Google Group',
                                text: 'If you’ve purchased a license you will have access to the closed community of people.',
                            },
                            {
                                title: 'Email',
                                text: 'SchemaBear runs in the browser with the user & works with any framework. You define the schema, so your users can define the data. Easy Peasy.',
                            },
                        ].map(({ title, text }, index) => (
                            <View
                                key={index}
                                width="100%">
                                <Heading
                                    fontWeight={600}
                                    colorToken="accent-100">
                                    {title} ↗
                                </Heading>
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
                        <Text colorToken="accent-50">Fold &copy; 2023</Text>
                        <View
                            row
                            gap={10}
                            justifyContent="flex-start">
                            <img src="./icon-github.svg" />
                            <img src="./icon-x.svg" />
                            <img src="./icon-linkedin.svg" />
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
                                    size="xl"
                                    fontWeight={400}
                                    colorToken="accent-100">
                                    Features
                                </Text>
                            </Li>
                            <Li>
                                <Text
                                    size="xl"
                                    fontWeight={400}
                                    colorToken="accent-100">
                                    Use Cases
                                </Text>
                            </Li>
                            <Li>
                                <Text
                                    size="xl"
                                    fontWeight={400}
                                    colorToken="accent-100">
                                    Pricing
                                </Text>
                            </Li>
                            <Li>
                                <Text
                                    size="xl"
                                    fontWeight={400}
                                    colorToken="accent-100">
                                    Documentation
                                </Text>
                            </Li>
                            <Li>
                                <Text
                                    size="xl"
                                    fontWeight={400}
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
                                    size="xl"
                                    fontWeight={400}
                                    colorToken="accent-100">
                                    About Us
                                </Text>
                            </Li>
                            <Li>
                                <Text
                                    size="xl"
                                    fontWeight={400}
                                    colorToken="accent-100">
                                    SaaS Usage
                                </Text>
                            </Li>
                            <Li>
                                <Text
                                    size="xl"
                                    fontWeight={400}
                                    colorToken="accent-100">
                                    Roadmap
                                </Text>
                            </Li>
                            <Li>
                                <Text
                                    size="xl"
                                    fontWeight={400}
                                    colorToken="accent-100">
                                    Changelog
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
                                    size="xl"
                                    fontWeight={400}
                                    colorToken="accent-100">
                                    Privacy Policy
                                </Text>
                            </Li>
                            <Li>
                                <Text
                                    size="xl"
                                    fontWeight={400}
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
                            border="0.15rem solid white">
                            Buy Now
                        </Button>
                        <Button
                            colorToken="accent-50"
                            variant="accent"
                            border="0.15rem solid white">
                            Subscribe to Newsletter
                        </Button>
                        {/*  
                        <Button
                            variant="accent"
                            border="0.15rem solid white">
                            syncist.cloud ↗
                        </Button>    
                        */}
                    </View>
                </View>
            </FoldProvider>
        </>
    )
}

export default HomeOld
