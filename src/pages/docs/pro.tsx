import DocsLayout from '@/layouts/docs.layout'
import {
    Accordion,
    AccordionHeading,
    AccordionItem,
    AccordionPanel,
    Breadcrumb, BreadcrumbItem, Button, Heading, Link, Text, View
} from '@fold-dev/core'
import * as Token from '@fold-dev/design/tokens'
import React from 'react'
import { CodeComponent } from '../../components/code.component'
import { GraphicLeft } from '../../components/graphic.component'
import { FAQAccordion } from '@/components/pricing.component'

export default function GettingStarted(props) {
    return (
        <View
            p={30}
            className="docs-content">
            <Breadcrumb>
                <BreadcrumbItem>Documentation</BreadcrumbItem>
                <BreadcrumbItem>Overview</BreadcrumbItem>
                <BreadcrumbItem active>Pro</BreadcrumbItem>
            </Breadcrumb>
            <Heading fontWeight="bold">Pro</Heading>
            <Heading as="h2">
                Welcome to Fold Pro, premium UI components to supercharge your project.
            </Heading>
            <Text>
                Fold Pro, built on the foundation of Fold Core, is designed specifically for teams who need high-end components for building exceptional product experiences.
            </Text>

            <View
                column
                gap="2rem"
                width="100%"
                radius="var(--f-radius)"
                alignItems="flex-start"
                bgToken="accent-500"
                position="relative"
                style={{ overflow: 'hidden' }}
                m="2rem 0 0 0">
                <GraphicLeft
                    color={Token.ColorAccent200}
                    style={{ position: 'absolute', bottom: -100, left: -200, opacity: 0.1 }}
                    width={1107 / 2}
                    height={559 / 2}
                />

                <View
                    column
                    flex={1}
                    gap="1rem"
                    alignItems="flex-start"
                    p="5rem 5rem 0rem 5rem">
                    <Text
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="accent-300"
                        id="features">
                        Before we get started
                    </Text>
                    <Heading
                        colorToken="accent-50"
                        fontWeight={400}>
                        What is Early Access?
                    </Heading>
                </View>

                <View
                    p="0 5rem 5rem 5rem"
                    position="relative"
                    style={{
                        '--f-link-color': 'var(--f-color-accent-100)',
                        '--f-accordion-border-color': 'var(--f-color-accent-400)',
                        '--f-accordion-background': 'var(--f-color-accent-500)',
                        '--f-accordion-color': 'var(--f-color-accent-100)',
                        '--f-accordion-color-heading': 'var(--f-color-accent-100)',
                        '--f-accordion-color-description': 'var(--f-color-accent-300)',
                        '--f-accordion-hover-border-color': 'var(--f-color-accent-400)',
                        '--f-accordion-hover-background-color': 'var(--f-color-accent-400)',
                        '--f-accordion-active-background-color': 'var(--f-color-accent-300)',
                        '--f-accordion-active-background': 'var(--f-color-accent-200)',
                        '--f-accordion-active-color': 'var(--f-color-accent-100)',
                    } as any}>
                    <FAQAccordion />
                </View>
            </View>

            <Text as="blockquote">Fold Pro has been developed using React v18.2</Text>

            <Heading as="h3">Before you get started</Heading>

            <Text>
                Fold Pro relies on the latest version of Fold Core. 
                Make sure you have Fold Core installed correctly by following the guide <a href="/docs/getting-started" target="_blank">here</a>. 
            </Text>

            <Text>
                Once you have Fold Core installed, you're ready to proceed.
            </Text>
        
            <Heading as="h3">
                License Key
            </Heading>

            <Text>
                You are able to purchase a license by <a href="http://localhost:3000/#pro" target="_blank">clicking here</a>.
            </Text>

            <Text>
                After purchasing a license, you will receive an automated email containing a list of license keys, license quantity, when the license keys are valid until & a OTP to use for support (more on this below).
                You will also receive an invoice from <a href="https://www.lemonsqueezy.com/" target="_blank">Lemon Squeezy</a>, who we use as our Merchant of Record.
            </Text>

            <Text>
                Once you have a valid license key, you're ready to proceed. 
            </Text>

            <Heading as="h3">
                NPM registry
            </Heading>

            <Text>
                Add a license key to your <code>.npmrc</code> file. <code>NPM_TOKEN</code> must be available as an environment variable.
            </Text>

            <CodeComponent
                showSnippet
                dontConvert
                lang="bash"
                filename=".npmrc"
                code={`
    @fold-pro:registry=https://npm.fold.dev
    //npm.fold.dev/:_authToken=\${NPM_TOKEN}
                `}
            />

            <Heading as="h3">Installation</Heading>

            <CodeComponent
                showSnippet
                dontConvert
                lang="bash"
                filename="console"
                code={`
    # Using npm
    npm install @fold-pro/react

    # Using yarn
    yarn add @fold-pro/react
                `}
            />
            <Heading as="h3">Setup</Heading>
            <Text>
                Once Pro is installed, you'll need to include the Fold Pro CSS stylesheet.
            </Text>
            <Heading as="h4">CSS</Heading>
            <Text>
                Add the stylesheet to the root level of your project. If you're utilizing SASS, Less, or another CSS
                preprocessor, you can also import it directly.
            </Text>
            <CodeComponent
                code={`
    import '@fold-pro/react/dist/styles.css'
                `}
                showSnippet
                dontConvert
                filename="App.tsx"
            />
            <Heading as="h3">Done</Heading>

            <Text>
                You're now ready to start building with Fold Pro. 
            </Text>

            <Heading as="h3">Support</Heading>

            <Text>
                Request access to join the private <a href="https://groups.google.com/a/fold.dev/g/pro" target="_blank">Fold Pro Google Group</a>.
                This private community is dedicated to providing you with premium support, access to the source code, and a platform to connect with fellow Fold Pro users.
            </Text>
            
            <Text>
                To get access, simply click the button below & request access using your secret code that was emailed (see above).
            </Text>

            <Button
                as="a"
                size="lg" 
                variant="accent"
                target="_blank"
                href="https://groups.google.com/a/fold.dev/g/pro">
                Join Now
            </Button>

            <Heading as="h3">Source Code</Heading>

            <Text>
                After every release, we post the source code to the Fold Pro Google Group.
            </Text>

            <Heading as="h3">License</Heading>

            <Text>
                Using Fold Pro is subject to our <a href="/license" target="_blank">License</a> agreement.
            </Text>
        </View>
    )
}

GettingStarted.getLayout = function getLayout(page: React.ReactElement) {
    return <DocsLayout style={{ padding: 30 }}>{page}</DocsLayout>
}
