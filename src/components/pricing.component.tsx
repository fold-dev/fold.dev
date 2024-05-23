import {
    Button,
    Card,
    Flexer,
    Grid,
    GridItem,
    Heading,
    IconLib,
    Accordion,
    AccordionItem,
    AccordionHeading,
    AccordionPanel, 
    Li,
    Link,
    List,
    Pill,
    Range,
    Text,
    View,
} from '@fold-dev/core'
import * as Token from '@fold-dev/design/tokens'
import { useEffect, useState } from 'react'
import { GraphicLeft, GraphicRight } from './graphic.component'

export const FAQAccordion = (props) => (
    <Accordion>
        <AccordionItem>
            <AccordionHeading>Is it production ready?</AccordionHeading>
            <AccordionPanel>
                Consider Early Access to be pre-release software & still relatively unstable. We have made every effort to minimize bugs & other issues,
                but there is still work left to do. If you have a Fold Pro Early Access license & have experienced a bug, please consider posting 
                it to the <Link target="_blank" href="https://groups.google.com/a/fold.dev/g/early-access" colorToken="accent-400">Google Group</Link> or 
                on <Link href="https://github.com/fold-dev/fold" target="_blank" fontSize="inherit" colorToken="accent-400">GitHub.</Link> (label it as Pro)
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeading>Is the source code available?</AccordionHeading>
            <AccordionPanel>
                The source code of every release will be posted to the <Link target="_blank" href="https://groups.google.com/a/fold.dev/g/early-access" colorToken="accent-400">Google Group</Link>.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeading>How long will Early Access last?</AccordionHeading>
            <AccordionPanel>
                Until it is stable. However, we don't anticipate this taking longer than a quarter.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeading>What comes after Early Access?</AccordionHeading>
            <AccordionPanel>
                Once Fold Pro is stable, we will go into Beta (which will also mean a price change).
                If you have purchased a Fold Pro Early Access license, you will automatically get access without having to pay extra. 
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeading>What does private support mean?</AccordionHeading>
            <AccordionPanel>
                Access to a private Fold Pro Early Access <Link target="_blank" href="https://groups.google.com/a/fold.dev/g/early-access" colorToken="accent-400">Google Group</Link> where support issues are prioritized.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeading>Where can I file bugs or feature requests for Early Access?</AccordionHeading>
            <AccordionPanel>
                On the <Link target="_blank" href="https://groups.google.com/a/fold.dev/g/early-access" colorToken="accent-100">Google Group</Link> or 
                on <Link href="https://github.com/fold-dev/fold" target="_blank" fontSize="inherit" colorToken="accent-100">GitHub.</Link> (label it as Pro).
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeading>What are Roadmap components?</AccordionHeading>
            <AccordionPanel>
                If you purchase a Fold Pro Early Access licence, you will get access to any <Link target="_blank" href="https://github.com/orgs/fold-dev/projects/8/views/2" colorToken="accent-100">Roadmap</Link> components as they become available.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeading>I have another question?</AccordionHeading>
            <AccordionPanel>
                For any other questions, please email us at <Link target="_blank" href="mailto:support@fold.dev" colorToken="accent-100">support@fold.dev</Link>.
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
)

export const FAQ = (props) => (
    <View
        row
        flex={2}
        alignItems="flex-start"
        p="4rem 2rem 4rem 0"
        style={{
            //minHeight: 600,
            '--f-accordion-border-color': 'var(--f-color-base-700)',
            '--f-accordion-background': 'var(--f-color-base-800)',
            '--f-accordion-color': 'var(--f-color-base-300)',
            '--f-accordion-color-heading': 'var(--f-color-base-300)',
            '--f-accordion-color-description': 'var(--f-color-base-300)',
            '--f-accordion-hover-border-color': 'var(--f-color-base-700)',
            '--f-accordion-hover-background-color': 'var(--f-color-base-700)',
            '--f-accordion-active-background-color': 'var(--f-color-base-500)',
            '--f-accordion-active-background': 'var(--f-color-base-600)',
            '--f-accordion-active-color': 'var(--f-color-base-300)',
        } as any}>
        <FAQAccordion />
    </View>
)

export const PricingComponent = () => {
    const [seatsIndie, setSeatsIndie] = useState(1)
    const [seatsInternal, setSeatsInternal] = useState(1)

    const clamp = (price, min, max) => {
        return Math.min(Math.max(price, min), max)
    }

    const formatCurrency = (amount) => {
        return Intl.NumberFormat('en-US', {
            notation: 'standard',
            maximumFractionDigits: 2,
        }).format(amount)
    }

    const pricingInternal = (p = 699) => {
        const price = Math.min(Math.max(seatsInternal, 1), 30) * p
        return formatCurrency(clamp(price, 0, 99999))
    }

    const pricingIndie = (p = 399) => {
        const price = Math.min(Math.max(seatsIndie, 1), 30) * p
        return formatCurrency(clamp(price, 0, 9999))
    }

    useEffect(() => {
       /*  
       const Paddle: any = window['Paddle']
        Paddle.Environment.set("sandbox")
        Paddle.Initialize({ 
            token: 'test_341b6905e3ca3a3b2a7b42ffdcc'
        })
        Paddle.Checkout.open({
            items: [
                {
                  priceId: "pri_01hyazedstjg85vqm34pj8pfry",
                  quantity: 5
                },
                {
                  priceId: "pri_01hq64m3jpm5y1vf3rx6a5g8cx",
                  quantity: 1
                }
            ],
            // customer: {
            //     email: "sam@example.com",
            //     address: {
            //       countryCode: "US",
            //       postalCode: "10021"
            //     }
            //   }
        }) */
    }, [])

    return (
        <>
            <View
                id="pro"
                column
                gap="2rem"
                flex={1}
                bgToken="base-800"
                width="100%"
                position="relative"
                style={{ overflow: 'hidden' }}
                p="10rem 0">
                <GraphicRight
                    color={Token.ColorAccent200}
                    style={{ position: 'absolute', top: -100, right: -100, opacity: 0.1 }}
                    height={882 / 2}
                    width={1456 / 2}
                />

                <Text
                    textAlign="center"
                    style={{ textTransform: 'uppercase' }}
                    letterSpacing={5}
                    colorToken="base-500">
                    Fold Pro
                </Text>

                <Heading
                    textAlign="center"
                    colorToken="base-200"
                    fontWeight={400}
                    width="80%">
                    Get access to Fold Pro components to supercharge your next project.
                    Whether you're building an MVP or internal dashboard, we have you covered.
                </Heading>

                <Pill
                    subtle
                    color={Token.ColorPurple500}
                    m="2rem 0">
                    Early Access has launched. 🎉 Keep reading below to find out more.
                </Pill>

                <View
                    row
                    justifyContent="space-between"
                    width="fit-content"
                    flex={1}
                    gap={20}
                    position="relative">
                    <Card
                        column
                        width={325}
                        height={750}
                        p="2rem"
                        gap="1rem"
                        alignItems="flex-start"
                        alignContent="flex-start"
                        justifyContent="flex-start">
                        <Heading as="h2">Indie</Heading>
                        <Text colorToken="base-300">
                            For teams building projects that haven't launched to market yet.
                        </Text>
                        <View
                            row
                            m="1rem 0 0 0"
                            gap={5}
                            alignItems="flex-start">
                            <Heading huge>{pricingIndie()}</Heading>
                            <Heading
                                as="h5"
                                fontWeight={600}>
                                USD
                            </Heading>
                        </View>
                        <Heading
                            as="h4"
                            colorToken="text-weakest"
                            textDecoration="line-through">
                            {pricingIndie(599)} USD
                        </Heading>
                        <View
                            row
                            gap="1rem"
                            width="100%">
                            <Range
                                min={1}
                                max={10}
                                step={1}
                                value={seatsIndie}
                                onChange={(e) => setSeatsIndie(+e.target.value)}
                            />
                            <Text
                                colorToken="base-400"
                                display="inline-block"
                                width={160}>
                                {seatsIndie} {seatsIndie == 1 ? 'Developer' : 'Developers'}
                            </Text>
                        </View>
                        <List>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Kanban Board
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Todo List
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Calendar
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Date & Time Pickers
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Data Grid
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> CSV Importer
                            </Li>

                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Limited to prototyping
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Private support group
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" />
                                NPM access
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Source code
                            </Li>
                            <Li
                                row
                                colorToken="purrple-400"
                                width="fit-content">
                                <IconLib icon="check" />
                                Roadmap components
                                <Pill
                                    subtle
                                    size="xs"
                                    m="0 0 0 0.5rem"
                                    color={Token.ColorAccent400}>
                                    Planned
                                </Pill>
                            </Li>
                            <Li
                                row
                                textDecoration="line-through"
                                width="fit-content"
                                color="var(--f-color-text-weakest)">
                                <IconLib icon="check" /> 1 year of updates
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> 2 years of updates
                            </Li>
                        </List>
                        <Flexer />
                        <Button
                            as="a"
                            //target="_blank"
                            href={"https://fold.lemonsqueezy.com/buy/5c98013d-1db7-4377-8980-39fcc04ab206?enabled=179904%2C385207?quantity=" + seatsIndie}
                            className="lemonsqueezy-button"
                            m="1rem 0 0 0"
                            size="xl"
                            width="100%"
                            variant="accent">
                            Buy
                        </Button>
                    </Card>

                    <Card
                        column
                        width={325}
                        height={750}
                        p="2rem"
                        gap="1rem"
                        alignItems="flex-start"
                        alignContent="flex-start"
                        justifyContent="flex-start">
                        <Heading as="h2">Internal</Heading>
                        <Text colorToken="base-300">
                            For teams building internal-use projects that generate no revenue.
                        </Text>
                        <View
                            row
                            m="1rem 0 0 0"
                            gap={5}
                            alignItems="flex-start">
                            <Heading huge>{pricingInternal()}</Heading>
                            <Heading
                                as="h5"
                                fontWeight={600}>
                                USD
                            </Heading>
                        </View>
                        <Heading
                            as="h4"
                            colorToken="text-weakest"
                            textDecoration="line-through">
                            {pricingInternal(999)} USD
                        </Heading>
                        <View
                            row
                            gap="1rem"
                            width="100%">
                            <Range
                                min={1}
                                max={10}
                                step={1}
                                value={seatsInternal}
                                onChange={(e) => setSeatsInternal(+e.target.value)}
                            />
                            <Text
                                colorToken="base-400"
                                display="inline-block"
                                width={160}>
                                {seatsInternal} {seatsInternal == 1 ? 'Developer' : 'Developers'}
                            </Text>
                        </View>
                        <List>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Everything in Indie
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Unlimited internal use
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Prioritized support
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Prioritized feature requests
                            </Li>
                        </List>
                        <Flexer />
                        <Button
                            as="a"
                            //target="_blank"
                            href={"https://fold.lemonsqueezy.com/buy/080b3f6a-0e21-46d7-9a02-4c13258efeb6?enabled=179904%2C385207&quantity=" + seatsInternal}
                            className="lemonsqueezy-button"
                            m="1rem 0 0 0"
                            size="xl"
                            width="100%"
                            variant="accent">
                            Buy
                        </Button>
                    </Card>

                    <Card
                        column
                        width={325}
                        height={750}
                        p="2rem"
                        gap="1rem"
                        alignItems="flex-start"
                        alignContent="flex-start"
                        justifyContent="flex-start">
                        <Heading as="h2">SaaS</Heading>
                        <Text colorToken="base-300">
                            For teams that have launched to market or acquired external funding.
                        </Text>
                        {/*  
                        <View
                            row
                            m="1rem 0 0 0"
                            gap={5}
                            alignItems="flex-start">
                            <Heading huge>{pricingSaas()}</Heading>
                            <Heading as="h5" fontWeight={600}>USD</Heading>
                        </View>
                        <Heading
                            as="h4"
                            colorToken="text-weakest"
                            textDecoration="line-through">
                            {pricingSaas(3399)} USD
                        </Heading> 
                        */}
                        <List>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Everything in Indie
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Dedicated support email
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Onboarding call
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Unlimited internal & external use
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Prioritized support
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Prioritized feature requests
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Distributable
                            </Li>
                        </List>
                        <Flexer />
                        <Button
                            as="a"
                            href="mailto:saas@fold.dev"
                            m="1rem 0 0 0"
                            size="xl"
                            width="100%"
                            variant="accent">
                            Contact Us
                        </Button>
                    </Card>
                </View>

                <View lineHeight={2}>
                    <Text colorToken="base-600" textAlign="center">
                        Please <Link href="mailto:licensing@fold.dev" colorToken="accent-400">email</Link> us if you are unsure which license applies to you.
                    </Text>
                    <Text colorToken="base-600" textAlign="center">
                        Purchasing a license is subject to the <Link href="/license" target="_blank">licence</Link> terms & <Link href="/terms-of-use" target="_blank">terms of use</Link> .
                    </Text>
                </View>
            </View>

            <View
                row
                bgToken="base-800"
                position="relative"
                p="0 0rem 11rem 0rem"
                width="100%"
                style={{ overflow: 'hidden' }}>
                <GraphicLeft
                    color={Token.ColorAccent200}
                    style={{ position: 'absolute', bottom: -100, left: -200, opacity: 0.1 }}
                    width={1107 / 2}
                    height={559 / 2}
                />

                <View
                    p="0.5rem"
                    width="85%"
                    radius="var(--f-radius)"
                    bg="linear-gradient(162deg, #EDCB1B -110.38%, #FF154D -59.98%, #C15AF1 -14.21%, #2087FF 41.76%, #00E1B9 100%)">
                    <View
                        row
                        gap={50}
                        width="100%"
                        radius="var(--f-radius)"
                        bgToken="base-800"
                        position="relative"
                        style={{ overflow: 'hidden' }}
                        alignItems="flex-start">
                        <View
                            column
                            flex={0.5}
                            gap={30}
                            alignItems="flex-start"
                            p="5rem 0rem 5rem 5rem">
                            <Pill
                                subtle
                                style={{ textTransform: 'uppercase' }}
                                color={Token.ColorPurple400}>
                                Fold Pro Early Access
                            </Pill>
                            <Text
                                style={{ textTransform: 'uppercase' }}
                                letterSpacing={5}
                                colorToken="base-500"
                                id="features">
                                Fineprint
                            </Text>
                            <Heading
                                colorToken="base-100"
                                fontWeight={400}>
                                We've just released Early Access, but what does that mean?
                            </Heading>
                        </View>

                        <FAQ />
                    </View>
                </View>
            </View>
        </>
    )
}
