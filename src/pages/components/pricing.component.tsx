import {
    Button,
    Card,
    Flexer,
    Grid,
    GridItem,
    Heading,
    IconLib,
    Li,
    Link,
    List,
    Pill,
    Range,
    Text,
    View,
} from '@fold-dev/core'
import * as Token from '@fold-dev/design/tokens'
import { useState } from 'react'
import { GraphicLeft, GraphicRight } from './graphic.component'

export const PricingComponent = () => {
    const [seats, setSeats] = useState(1)

    const clamp = (price, min, max) => {
        return Math.min(Math.max(price, min), max)
    }

    const formatCurrency = (amount) => {
        return Intl.NumberFormat('en-US', {
            notation: 'standard',
            maximumFractionDigits: 2,
        }).format(amount)
    }

    const pricingEnterprise = (p = 699) => {
        const price = Math.min(Math.max(seats, 1), 30) * p
        return formatCurrency(clamp(price, 0, 99999))
    }

    const pricingSaas = (p = 2449) => {
        const price = Math.min(Math.max(seats, 1), 30) * p
        return formatCurrency(clamp(price, 0, 99999))
    }

    const pricingIndie = (p = 349) => {
        const price = Math.min(Math.max(seats, 1), 30) * p
        return formatCurrency(clamp(price, 0, 9999))
    }

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
                    Get access to our Pro components to supercharge your product. Whether you're
                    building a SaaS or internal dashboard, we have flexible licensing options.
                </Heading>

                <Pill
                    subtle
                    color={Token.ColorPurple500}
                    m="2rem 0">
                    We are currently in Early Access. 🚀 &nbsp;{' '}
                    <Link
                        color={Token.ColorPurple400}
                        href="">
                        Read more here
                    </Link>{' '}
                    &nbsp; about how that affects licensing & pricing.
                </Pill>

                <View
                    row
                    gap="1rem"
                    width={500}>
                    <Range
                        style={{ '--f-range-background': 'var(--f-color-base-700)' }}
                        min={1}
                        max={10}
                        step={1}
                        value={seats}
                        onChange={(e) => setSeats(+e.target.value)}
                    />
                    <Text
                        colorToken="base-400"
                        display="inline-block"
                        width={130}>
                        {seats} {seats == 1 ? 'Developer' : 'Developers'}
                    </Text>
                </View>

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
                        height={650}
                        p="2rem"
                        gap="1rem"
                        border="none"
                        alignItems="flex-start"
                        alignContent="flex-start"
                        justifyContent="flex-start">
                        <Heading as="h2">Indie</Heading>
                        <Text colorToken="base-300">
                            For teams building products that haven't launched to market yet.
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
                            {pricingIndie(499)} USD
                        </Heading>
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
                                <IconLib icon="check" /> 1 year of updates
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" />
                                NPM access
                                <Pill
                                    subtle
                                    size="xs"
                                    m="0 0 0 0.5rem"
                                    color={Token.ColorAccent400}>
                                    Coming Soon
                                </Pill>
                            </Li>
                            <Li
                                row
                                colorToken="purrple-400"
                                width="fit-content">
                                <IconLib icon="check" />
                                Roadmap components
                            </Li>
                        </List>
                        <Flexer />
                        <Button
                            as="a"
                            href="https://fold.lemonsqueezy.com/buy/5c98013d-1db7-4377-8980-39fcc04ab206?quantity=2"
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
                        height={650}
                        p="2rem"
                        gap="1rem"
                        border="none"
                        alignItems="flex-start"
                        alignContent="flex-start"
                        justifyContent="flex-start">
                        <Heading as="h2">Internal</Heading>
                        <Text colorToken="base-300">
                            For teams building internal-use products that generate no revenue.
                        </Text>
                        <View
                            row
                            m="1rem 0 0 0"
                            gap={5}
                            alignItems="flex-start">
                            <Heading huge>{pricingEnterprise()}</Heading>
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
                            {pricingEnterprise(999)} USD
                        </Heading>
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
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" /> Source code
                            </Li>
                        </List>
                        <Flexer />
                        <Button
                            as="a"
                            href="https://fold.lemonsqueezy.com/buy/5c98013d-1db7-4377-8980-39fcc04ab206?embed=1&discount=0"
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
                        height={650}
                        p="2rem"
                        gap="1rem"
                        border="none"
                        alignItems="flex-start"
                        alignContent="flex-start"
                        justifyContent="flex-start">
                        <Heading as="h2">SaaS</Heading>
                        <Text colorToken="base-300">
                            For teams that have launched to market or acquired external funding.
                        </Text>
                        {/*  <View
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
                    </Heading> */}
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
                                <IconLib icon="check" /> Source code
                            </Li>
                        </List>
                        <Flexer />
                        <Button
                            as="a"
                            href="https://fold.lemonsqueezy.com/buy/5c98013d-1db7-4377-8980-39fcc04ab206?embed=1&discount=0"
                            className="lemonsqueezy-button"
                            m="1rem 0 0 0"
                            size="xl"
                            width="100%"
                            variant="accent">
                            Contact Us
                        </Button>
                    </Card>
                </View>

                <View row>
                    <Text colorToken="base-600">
                        More than 10 developers? <Link href="#">Contact us.</Link> Pro licensing are
                        subject to our <Link href="#">terms & conditions</Link>.
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
                    row
                    gap={50}
                    width="85%"
                    radius="var(--f-radius)"
                    bgToken="base-700"
                    position="relative"
                    style={{ overflow: 'hidden' }}
                    alignItems="flex-start">
                    <View
                        column
                        flex={1}
                        gap={30}
                        alignItems="flex-start"
                        p="5rem 0rem 5rem 5rem">
                        <Pill
                            subtle
                            style={{ textTransform: 'uppercase' }}
                            color={Token.ColorAccent400}>
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

                    <View
                        column
                        flex={2}
                        gap={30}
                        alignItems="flex-start"
                        p="5rem">
                        <Grid
                            columns={2}
                            gap="40px 40px"
                            minChildWidth={100}>
                            {[
                                {
                                    title: 'Customizable',
                                    text: 'Best of both worlds: traditional CSS & Javascript. Fold gives you flexibility without impacting performance.',
                                },
                                {
                                    title: 'Performant',
                                    text: 'Render performance has been a key consideration at virtually every step of the way, we believe apps should be snappy.',
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
                                    text: 'Every use-case, we have you covered. Fold currently has 85+ custom components, with more on the way.',
                                },
                            ].map(({ title, text }, index) => (
                                <GridItem key={index}>
                                    <Heading
                                        as="h2"
                                        colorToken="base-100"
                                        m="0 0 0.25rem 0">
                                        {title}
                                    </Heading>
                                    <Text colorToken="base-400">{text}</Text>
                                </GridItem>
                            ))}
                        </Grid>
                    </View>
                </View>
            </View>
        </>
    )
}
