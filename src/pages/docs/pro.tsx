import DocsLayout from '@/layouts/docs.layout'
import {
    Accordion,
    AccordionHeading,
    AccordionItem,
    AccordionPanel,
    Breadcrumb, BreadcrumbItem, Heading, Link, Text, View
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
        
            <Heading as="h3">
                Getting a License Key
            </Heading>

            <Text>
                You are able to purchase a license but clicking <a href="http://localhost:3000/#pro" target="_blank">here</a>.
            </Text>

            <Text>
                After purchasing a license, you will receive an automated email containing a list of license keys, quantity, when the license keys are valid until & a OTP to use for support (more on that below).
                You will also receive an invoice from <a href="https://www.lemonsqueezy.com/" target="_blank">Lemon Squeezy</a>, who we use as our merchant of record.
            </Text>

            <Heading as="h3">
                Set up the Fold Pro NPM registry
            </Heading>

            <Text>
                Once you have a valid license key ready, you're ready to install Fold Pro in your project. 
            </Text>

            <Text>
                Add a license key to your <code>.npmrc</code> file. <code>NPM_TOKEN</code> in this case must be available as an environment variable.
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

            <Heading as="h3">Requirements</Heading>

            <Text>
                Fold Pro relies on the latest version of Fold Core. 
                Make sure you have Fold Core installed correctly by following the guide <a href="/docs/getting-started" target="_blank">here</a>. 
            </Text>

            <Text>
                Once you have Fold Core installed, you're ready to proceed.
            </Text>

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
                Once Pro is installed, you'll need to include the Pro CSS stylesheet.
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
                You can request access to join the exclusive <a href="https://groups.google.com/a/fold.dev/g/early-access" target="_blank">Fold Pro Early Access Google Group</a>.
                This private community is dedicated to providing you with premium support, access to the source code, and a platform to connect with fellow Early Access users.
            </Text>
            
            <Text>
                To get access, simply visit the Google Group & request access using your secret code that was emailed (see above).
            </Text>

            <Heading as="h3">Source Code</Heading>

            <Text>
                After every release, we post the source code to the Early Access Google Group.
            </Text>
        </View>
    )
}

GettingStarted.getLayout = function getLayout(page: React.ReactElement) {
    return <DocsLayout style={{ padding: 30 }}>{page}</DocsLayout>
}
