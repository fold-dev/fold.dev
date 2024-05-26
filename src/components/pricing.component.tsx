import { LicenseContent } from '@/pages/license'
import {
    Accordion,
    AccordionHeading,
    AccordionItem,
    AccordionPanel,
    Button,
    Card,
    Divider,
    Flexer,
    Heading,
    Icon,
    IconLib,
    Li,
    Link,
    List,
    Modal,
    ModalClose,
    Option,
    Options,
    Pill,
    Portal,
    Range,
    Text,
    Tooltip,
    TooltipContent,
    View
} from '@fold-dev/core'
import * as Token from '@fold-dev/design/tokens'
import { useEffect, useState } from 'react'
import { PiSparkle } from 'react-icons/pi'
import { GraphicLeft, GraphicRight } from './graphic.component'

export const FAQAccordion = (props) => (
    <Accordion>
        <AccordionItem>
            <AccordionHeading>
                Is it production ready?
            </AccordionHeading>
            <AccordionPanel>
                Consider Early Access to be alpha/pre-release software & still relatively unstable. However, every effort is being made to fix bugs & other issues.
                If you have a Fold Pro Early Access license & have experienced a bug, or have a suggestion, please consider posting it to the <Link target="_blank" href="https://groups.google.com/a/fold.dev/g/pro">Fold Pro Google Group</Link> or 
                on <Link href="https://github.com/fold-dev/fold" target="_blank" fontSize="inherit">GitHub</Link> (label it as Pro).
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeading>
                Is the source code available?
            </AccordionHeading>
            <AccordionPanel>
                The source code of every release will be posted to the <Link target="_blank" href="https://groups.google.com/a/fold.dev/g/pro">Fold Pro Google Group</Link>.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeading>
                How long will Early Access last?
            </AccordionHeading>
            <AccordionPanel>
                Until it is stable & mobile (touch) support has landed. 
                You can view progress via the public roadmap <Link target="_blank" href="https://github.com/orgs/fold-dev/projects/8/views/2">here</Link>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeading>
                What comes after Early Access?
            </AccordionHeading>
            <AccordionPanel>
                After Early Access a public beta will be launched, which will bring a price change.
                If you have purchased a Fold Pro Early Access license, you will automatically get access without having to pay extra. 
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeading>
                Will the beta affect the Early Access license?
            </AccordionHeading>
            <AccordionPanel>
                If you've purchased a Fold Pro Early Access license, you won't be affected by the new license terms or price increase.
                And if you choose to renew your license after the initial 2 year period, you will be charged for the Early Access pricing and not the new pricing.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeading>
                What support channels are available?
            </AccordionHeading>
            <AccordionPanel>
                A private <Link target="_blank" href="https://groups.google.com/a/fold.dev/g/pro">Fold Pro Google Group</Link> and email at <Link target="_blank" href="mailto:support@fold.dev">support@fold.dev</Link>.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeading>
                Where can I file bugs or feature requests?
            </AccordionHeading>
            <AccordionPanel>
                On the <Link target="_blank" href="https://groups.google.com/a/fold.dev/g/pro">Fold Pro Google Group</Link>, <Link target="_blank" href="https://github.com/fold-dev/fold/discussions">GitHub Discussions</Link> or on <Link href="https://github.com/fold-dev/fold/issues" target="_blank" fontSize="inherit">GitHub Issues</Link> (label it as Pro).
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeading>
                Does Early Access include the planned roadmap?
            </AccordionHeading>
            <AccordionPanel>
                The roadmap includes planned features, enhancements, and new components.
                If you purchase any Fold Pro licence, you will automatically get access to the <Link target="_blank" href="https://github.com/orgs/fold-dev/projects/8/views/2">roadmap items</Link> as they become available.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeading>
                What if I don't renew my license?
            </AccordionHeading>
            <AccordionPanel>
                You will retain access to the last version you downloaded and remain bound by the same license agreement as when you purchased the license.
                However, your access to NPM and the Google Group will be revoked, and you will not receive any future roadmap functionalities.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeading>
                I bought a license, now what?
            </AccordionHeading>
            <AccordionPanel>
                Head over to the <Link target="_blank" href="/docs/pro">documentation</Link> to get started.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeading>I have another question?</AccordionHeading>
            <AccordionPanel>
                For any other questions, please email <Link target="_blank" href="mailto:support@fold.dev">support@fold.dev</Link>.
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
            '--f-link-color': 'var(--f-color-accent-400)',
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
    const [seats, setSeats] = useState(2)
    const [down, setDown] = useState(false)
    const [selection, setSelection] = useState<'indie' | 'internal' | ''>('')

    const openPayment = () => {
        if (selection == 'indie') {
            window.open("https://fold.lemonsqueezy.com/buy/5c98013d-1db7-4377-8980-39fcc04ab206?enabled=179904%2C385207")
        }

        if (selection == 'internal') {
            window.open("https://fold.lemonsqueezy.com/buy/080b3f6a-0e21-46d7-9a02-4c13258efeb6?enabled=179904%2C385207")
        }

        setSelection('')
    }

    const clamp = (price, min, max) => {
        return Math.min(Math.max(price, min), max)
    }

    const formatCurrency = (amount) => {
        return Intl.NumberFormat('en-US', {
            notation: 'standard',
            maximumFractionDigits: 2,
        }).format(amount)
    }

    const developers = () => {
        switch (seats) {
            case 1: return '1 Developer'
            case 2: return '3 Developers'
            case 3: return '5 Developers'
            case 4: return '10 Developers'
            case 5: return '20 Developers'
        }
    }

    const pricingEA = (seats) => {
        switch (seats) {
            case 1: return 399
            case 2: return 599
            case 3: return 749
            case 4: return 1399
            case 5: return 2699
        }
    }

    const pricingFull = (seats) => {
        switch (seats) {
            case 1: return 799
            case 2: return 1199
            case 3: return 1499
            case 4: return 2799
            case 5: return 5399
        }
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
            <Modal
                //noDocumentScrolling
                portal={Portal}
                width={600}
                height="fit-content"
                anchor="middle-center"
                onDismiss={() => setSelection('')}
                isVisible={selection != ''}
                header={
                    <View
                        row
                        gap={10}
                        width="100%">
                        <Heading as="h4">
                            License Agreement
                        </Heading>
                        <Flexer />
                        <ModalClose onClick={() => setSelection('')} />
                    </View>
                }
                footer={
                    <View
                        row
                        gap={10}
                        width="100%">
                        <Button onClick={() => setSelection('')}>
                            Cancel
                        </Button>
                        <Flexer />
                        <Button
                            onClick={openPayment}
                            variant="accent"
                            outline
                            disabled={!down}>
                            Accept & Continue
                        </Button>
                    </View>
                }>
                <View
                    p={20}
                    width="100%"
                    className="f-overflow-y-auto"
                    onScroll={(e) => {
                        setDown((e.currentTarget.scrollTop + 50) > (e.currentTarget.scrollHeight - e.currentTarget.offsetHeight))
                    }}
                    height={500}>
                    <LicenseContent />
                </View>
            </Modal>
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
                    Supercharge your next project with Fold Pro.
                    Fold Pro is built specifically for teams who need high-end components for building exceptional product experiences.
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
                    width="75%"
                    style={{ minWidth: '50%', maxWidth: '90%' }}
                    m="0 auto"
                    gap={20}
                    position="relative">

                    <Card
                        column
                        flex={1}
                        height={450}
                        p="2rem"
                        gap="1rem"
                        alignItems="flex-start"
                        alignContent="flex-start"
                        justifyContent="flex-start"
                        bgToken="base-200">
                        <Heading as="h2">
                            Early Access
                        </Heading>
                        <Text colorToken="base-600" size="lg">
                            For developers & teams that need to scale their project to the next nevel.
                            Fold Pro gives you tools you need to get there.
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
                            {pricingSaas(1999)} USD
                        </Heading>  
                        */}
                        <List>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" color="var(--f-color-accent)" /> All Pro components
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" color="var(--f-color-accent)" /> Perpetual use
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" color="var(--f-color-accent)" /> Private Google Group access
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" color="var(--f-color-accent)" /> NPM access
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" color="var(--f-color-accent)" /> Source code
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" color="var(--f-color-accent)" /> Non commercial/internal use only
                            </Li>
                            <Li
                                row
                                width="fit-content">
                                <IconLib icon="check" color="var(--f-color-accent)" /> Single active project
                            </Li>
                            <Tooltip text="Renews at regular 1 year duration.">
                                <Li
                                    row
                                    width="fit-content">
                                    <IconLib icon="check" color="var(--f-color-accent)" /> 2 years of updates&nbsp;<span style={{ color: 'var(--f-color-accent)' }}>*</span>
                                </Li>
                            </Tooltip>
                            <Tooltip text="Subject to Early Access only, renews at regular 1 year duration.">
                                <Li
                                    row
                                    width="fit-content">
                                    <Icon icon={PiSparkle} color="var(--f-color-accent)" /> Renewals fixed at Early Access pricing&nbsp;<span style={{ color: 'var(--f-color-accent)' }}>*</span>
                                </Li>
                            </Tooltip>
                        </List>
                        <Divider style={{ '--f-divider-color': 'var(--f-color-border-strong)' }} />
                        <Text colorToken="base-600" textAlign="center">
                            <Link href="licensing@fold.dev" target="_blank">Contact us</Link> for distributable OEM license options.
                        </Text>

                    </Card>

                    <Card
                        width={325}
                        column
                        height={450}
                        p="2rem"
                        gap="1rem"
                        alignItems="flex-start"
                        alignContent="flex-start"
                        justifyContent="flex-start">
                        <Heading as="h2">
                            Indie
                        </Heading>
                        <Text colorToken="base-300">
                            For single developers who need to level up their next big idea.
                        </Text>
                        <View
                            row
                            m="1rem 0 0 0"
                            gap={5}
                            alignItems="flex-start">
                            <Heading huge>
                                {formatCurrency(pricingEA(1))}
                            </Heading>
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
                            {formatCurrency(pricingFull(1))} USD
                        </Heading>
                        <Flexer />
                        <Button
                            onClick={() => setSelection('indie')}
                            m="1rem 0 0 0"
                            size="xl"
                            width="100%"
                            variant="accent">
                            Buy
                        </Button>
                    </Card>

                    <Card
                        width={325}
                        column
                        height={450}
                        p="2rem"
                        gap="1rem"
                        alignItems="flex-start"
                        alignContent="flex-start"
                        justifyContent="flex-start">
                        <Heading as="h2">
                            Team
                        </Heading>
                        <Text colorToken="base-300">
                            For teams of 3+ developers, building internal or non commercial projects.
                        </Text>
                        <View
                            row
                            m="1rem 0 0 0"
                            gap={5}
                            alignItems="flex-start">
                            <Heading huge>
                                {formatCurrency(pricingEA(seats))}
                            </Heading>
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
                            {formatCurrency(pricingFull(seats))} USD
                        </Heading>
                        <View
                            row
                            gap="1rem"
                            width="100%">
                            <Range
                                min={2}
                                max={5}
                                step={1}
                                value={seats}
                                onChange={(e) => setSeats(+e.target.value)}
                            />
                            <Text
                                colorToken="base-400"
                                display="inline-block"
                                width={190}>
                                {developers()}
                            </Text>
                        </View>
                        {seats == 5 && (
                            <Text
                                size="sm"
                                m="1rem 0 0 0">
                                Need more than 20 developers? <Link href="mailto:licensing@fold.dev" size="sm">Contact us</Link>.
                            </Text>
                        )}
                        <Flexer />
                        <Button
                            onClick={() => setSelection('indie')}
                            m="1rem 0 0 0"
                            size="xl"
                            width="100%"
                            variant="accent">
                            Buy
                        </Button>
                    </Card>
                </View>

                <View lineHeight={2}>
                    <Text colorToken="base-600" textAlign="center">
                        Please email <Link href="mailto:licensing@fold.dev" colorToken="accent-400">licensing@fold.dev</Link> if you are unsure which license applies to you.
                    </Text>
                    <Text colorToken="base-600" textAlign="center">
                        Purchasing a license is subject to the <Link href="/license" target="_blank">licence agreement</Link>.
                    </Text>
                    <Text colorToken="base-600" textAlign="center">
                        VAT may apply based on your location.
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
                                Fold Pro Early Access has launched, but what does that mean?
                            </Heading>
                        </View>

                        <FAQ />
                    </View>
                </View>
            </View>
        </>
    )
}
