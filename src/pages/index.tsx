import { All, CoreComponent } from '@/components/core.component'
import { CtaSection } from '@/components/cta.component'
import { HeroComponent } from '@/components/hero.component'
import { ProComponent } from '@/components/pro.component'
import { Divider } from '@fold-ui/core'
import { useEffect, useState } from 'react'
import {
    Button,
    Card,
    DarkModeToggle,
    Flexer,
    Grid,
    Header,
    Heading,
    IconLib,
    Image,
    Logo,
    Navigation,
    NavigationItem,
    Text,
    View
} from '@fold-ui/core'
import React from 'react'

const work = [
    {
        eyebrow: 'Find the hard edge',
        title: 'Start with the workflow that matters most.',
        body: 'We untangle dense product flows, surface the decisions hiding inside them, and turn the complicated part into a practical plan your team can act on.',
        link: 'Explore the Clarity Sprint',
        image: '/fold-studio/lane-workspace.jpg',
        alt: 'Lane workspace showing a project plan and structured workflow',
    },
    {
        eyebrow: 'Shape the whole flow',
        title: 'Product design and engineering, in one loop.',
        body: 'Structure, interactions and edge cases are worked through together, so the thinking survives the journey from product direction to the real interface.',
        link: 'Explore the Workflow Sprint',
        image: '/fold-studio/lane-economics.jpg',
        alt: 'Lane project economics interface with budgets and delivery data',
    },
    {
        eyebrow: 'Ship a system',
        title: 'A coherent foundation, not a collection of mockups.',
        body: 'The result is production-tested React backed by a reusable component system—clear enough for the next feature, the next developer and the next release.',
        link: 'Explore Design + Build',
        image: '/fold-studio/product-system.png',
        alt: 'A product interface built from a reusable component system',
    },
]

const capabilities = [
    'Product and interface audits that find the hard edge',
    'End-to-end design for one critical product workflow',
    'Responsive, production-ready React interfaces',
    'Component systems that make the next screen easier',
    'Loading, empty, error, and edge states included',
    'Launch support and a clean team handover',
]

const inclusions = [
    'A fixed outcome, scope, and timeframe',
    'Direct access to the designer and builder',
    'A focused working session with your team',
    'Decisions documented as the work develops',
    'Real working files—not presentation theatre',
    'Loading, empty, error, and edge states',
    'Responsive behaviour where code is included',
    'Accessibility considered from the start',
    'Reusable components where they add leverage',
    'Product direction grounded in the real workflow',
    'Clear weekly progress and next decisions',
    'No junior handoff or account-management layer',
    'Implementation guidance your team can use',
    'A recorded walkthrough and handover',
    'Source files and code produced in the engagement',
    'Launch support for production builds',
    'A practical next-step plan when the sprint ends',
]

const offers = [
    {
        name: 'Clarity Sprint',
        timing: '5 working days',
        price: '$3,500',
        qualifier: 'USD',
    },
    {
        name: 'Workflow Sprint',
        timing: '2 weeks',
        price: '$9,500',
        qualifier: 'USD',
    },
    {
        name: 'Design + Build',
        timing: '4–6 weeks',
        price: '$24,000',
        qualifier: 'from',
    },
]

export const FoldStudio = () => (
    <View
        width="100%"
        p="15rem 5rem">
        <View>
            <View
                column
                alignItems="flex-start"
                gap="10rem">
                <View
                    width="75%"
                    column
                    alignItems="flex-start"
                    gap="1rem">
                    <Text
                        style={{ textTransform: 'uppercase' }}
                        colorToken="text-weaker">
                        Independent product studio · Working worldwide
                    </Text>
                    <Heading 
                        fontWeight="var(--f-font-weight-light)"
                        fontSize="var(--f-font-size-large)">
                        Complex software, made clear. &nbsp;
                        <Text as="span" colorToken="text-weak" fontSize="inherit">
                            Fold designs and builds the workflows at the heart of serious B2B software—from product
                            thinking to production React.
                        </Text>
                    </Heading>
                </View>

                {work.map((item, index) => (
                    <View
                        width="100%"
                        key={index}>
                        <View
                            column
                            width="75%"
                            alignItems="flex-start"
                            gap="1rem">
                            <Text
                                style={{ textTransform: 'uppercase' }}
                                colorToken="text-weaker">
                                0{index + 1} · {item.eyebrow}
                            </Text>
                            <Heading as="h3">{item.title}</Heading>
                            <Text colorToken="text-weak">{item.body}</Text>
                            <Text
                                row
                                as="a">
                                {item.link}{' '}
                                <IconLib
                                    icon="arrow-right"
                                    size="sm"
                                />
                            </Text>
                        </View>
                        <Card
                            row
                            p="2rem"
                            m="7.5rem 0 0 0"
                            bgToken="surface-stronger"
                            border="none"
                            width="100%">
                            {/* <Image
                                src={item.image}
                                alt={item.alt}
                                width="100%"
                                height="auto"
                                objectFit="cover"
                                style={{ maxWidth: 1200 }}
                            /> */}
                            <All />
                        </Card>
                    </View>
                ))}
            </View>

            <View
                width="100%"
                m="5rem 0">
                <View
                    row
                    justifyContent="space-between"
                    width="100%"
                    p="0 0 3rem 0">
                    <Text
                        size="lg"
                        fontWeight="var(--f-font-weight-medium)">
                        Work that moves from decision to production.
                    </Text>
                    <Button
                        as="a"
                        href="#offers"
                        size="lg">
                        See the offers
                    </Button>
                </View>

                <Divider />

                {capabilities.map((capability) => (
                    <React.Fragment key={capability}>
                        <View
                            row
                            justifyContent="space-between"
                            width="100%"
                            p="1.5rem 0">
                            <Text
                                size="lg"
                                fontWeight="var(--f-font-weight-medium)">
                                {capability}
                            </Text>
                            <Text
                                as="span"
                                size="xl"
                                lineHeight="1">
                                ↘
                            </Text>
                        </View>
                        <Divider />
                    </React.Fragment>
                ))}
            </View>

            <View
                id="offers"
                width="100%">
                <Grid
                    columns={2}
                    gap="2.5rem"
                    width="100%"
                    alignItems="stretch">
                    <Card
                        column
                        alignItems="stretch"
                        justifyContent="flex-start"
                        bgToken="surface-stronger"
                        border="none"
                        width="auto"
                        height="100%"
                        p="2.25rem 2rem">
                        <View
                            column
                            alignItems="flex-start"
                            gap="1rem">
                            <Text fontWeight="var(--f-font-weight-medium)">Every engagement includes</Text>
                            <Text
                                colorToken="text-weaker"
                                width="65%"
                                lineHeight="1.5">
                                A senior, hands-on collaboration with no mystery phase between product decisions and
                                delivery.
                            </Text>
                        </View>

                        <View
                            column
                            alignItems="flex-start"
                            gap="0.875rem"
                            m="3.5rem 0 0 0">
                            {inclusions.map((item) => (
                                <View
                                    row
                                    justifyContent="flex-start"
                                    gap="1rem"
                                    key={item}>
                                    <IconLib
                                        icon="plus"
                                        size="xs"
                                        color="var(--f-color-text-weaker)"
                                    />
                                    <Text fontWeight="var(--f-font-weight-medium)">{item}</Text>
                                </View>
                            ))}
                        </View>
                    </Card>

                    <Card
                        column
                        alignItems="stretch"
                        width="auto"
                        height="100%"
                        p="2.25rem 2rem"
                        bgToken="base-900"
                        border="none">
                        <View
                            column
                            alignItems="flex-start"
                            gap="1rem">
                            <Text
                                colorToken="base-200"
                                fontWeight="var(--f-font-weight-medium)">
                                Productised pricing
                            </Text>
                            <Text
                                colorToken="base-500"
                                width="55%"
                                lineHeight="1.5">
                                Start with the smallest engagement that can create a meaningful change. Scope and
                                price are agreed before work begins.
                            </Text>
                        </View>

                        <Flexer />

                        <View>
                            <View
                                row
                                justifyContent="flex-start"
                                gap="1rem">
                                <Text colorToken="base-200">Fixed scope</Text>
                                <Text colorToken="base-500">·</Text>
                                <Text colorToken="base-500">USD, excluding tax</Text>
                            </View>

                            <View m="2rem 0 0 0">
                                {offers.map((offer, index) => (
                                    <React.Fragment key={offer.name}>
                                        <View
                                            row
                                            justifyContent="space-between"
                                            width="100%"
                                            p="0.75rem 0">
                                            <Text colorToken="base-200">
                                                {offer.name} · {offer.timing}
                                            </Text>
                                            <View
                                                row
                                                gap="0.5rem">
                                                <Text
                                                    size="lg"
                                                    colorToken="base-200">
                                                    {offer.price}
                                                </Text>
                                                <Text colorToken="base-500">{offer.qualifier}</Text>
                                            </View>
                                        </View>
                                        {index < offers.length - 1 && (
                                            <View
                                                width="100%"
                                                height="1px"
                                                bgToken="base-750"
                                            />
                                        )}
                                    </React.Fragment>
                                ))}
                            </View>

                            <Button
                                as="a"
                                href="mailto:support@fold.dev?subject=Clarity%20Sprint"
                                size="lg"
                                width="100%"
                                m="2rem 0 0 0"
                                bgToken="base-50"
                                colorToken="base-600"
                                border="1px solid var(--f-color-base-400)">
                                Start with a Clarity Sprint
                            </Button>

                            <Text
                                size="sm"
                                colorToken="base-500"
                                width="70%"
                                lineHeight="1.4"
                                m="1rem 0 0 0">
                                Larger builds begin with a paid Clarity Sprint. Final scope and delivery dates are
                                agreed before the engagement starts.
                            </Text>
                        </View>
                    </Card>
                </Grid>
            </View>
        </View>
    </View>
)





function Home() {
    const [showChild, setShowChild] = useState(false)

    useEffect(() => {
        setShowChild(true)
    }, [])

    if (!showChild) return null

    return <FoldStudio />

    return (
        <>
            <HeroComponent />
            <ProComponent />
            <CoreComponent />
            <Divider />
            {/* 
            <PricingComponent />
            <Divider />
            <FAQComponent />
            <Divider />      
            <SupportComponent />
            <Divider />
            <GoComponent />   
            */}
            <CtaSection />
        </>
    )
}

Home.noLayout = true

export default Home
