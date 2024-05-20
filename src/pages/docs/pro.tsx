import DocsLayout from '@/layouts/docs.layout'
import { Breadcrumb, BreadcrumbItem, Heading, Link, Text, View, 
    Accordion,
    AccordionItem,
    AccordionHeading,
    AccordionPanel,
    Pill, 
} from '@fold-dev/core'
import { CodeComponent } from '../components/code.component'
import React from 'react'
import { GraphicLeft } from '../components/graphic.component'
import * as Token from '@fold-dev/design/tokens'
import * as data from '@/dummy_data'
import { FAQ } from '../components/pricing.component'

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
                    <Accordion>
                        <AccordionItem>
                            <AccordionHeading>Is it production ready?</AccordionHeading>
                            <AccordionPanel>
                                Consider Early Access to be pre-release software & still relatively unstable. We have made every effort to minimize bugs & other issues,
                                but there is still work left to do. If you have a Pro license & have experienced a bug, please consider posting 
                                it to the <Link target="_blank" href="https://groups.google.com/a/fold.dev/g/early-access" colorToken="accent-100">Google Group</Link> or 
                                on <Link href="https://github.com/fold-dev/fold" target="_blank" fontSize="inherit" colorToken="accent-100">GitHub.</Link> (label it as Pro)
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>Is the source code available?</AccordionHeading>
                            <AccordionPanel>
                                The source code will not be available during Early Access. If you have an Enterprise or SaaS license, the source code will be made available once Early Access ends.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>How long will Early Access last?</AccordionHeading>
                            <AccordionPanel>
                                Until it is stable. However we anticipate this being no more than 2 to 3 months at most.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>What comes after Early Access?</AccordionHeading>
                            <AccordionPanel>
                                After Early Access we will go into public Beta. If you have purchased an Early Access license, you will automatically get access. Any licensing purchase limits will fall away for Beta.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>I'm unsure which license applies to me?</AccordionHeading>
                            <AccordionPanel>
                                To briefly explain the license types: 
                                Indie is for teams currently building a product that hasn't launched yet, or need to prototype on an idea.
                                Enterpise is for teams generally inward facing, building apps that do not generate revenue or who do not directly contribute to revenue generation within the company.
                                SaaS is for teams that have a product that users pay for.
                                We are more than happy to assist with any questions you may have.
                                Please <Link
                                    href="licensing@fold.dev"
                                    target="_blank"
                                    fontSize="inherit"
                                    colorToken="accent-100">
                                    email
                                </Link> us & we'll reply as soon as we can.
                            </AccordionPanel>
                        </AccordionItem>
                    
{/*                         <AccordionItem>
                            <AccordionHeading>Does it include future components?</AccordionHeading>
                            <AccordionPanel>
                                If you purchase an Early Access licence, you will get access to any <Link target="_blank" href="https://github.com/orgs/fold-dev/projects/8/views/2" colorToken="accent-100">Roadmap</Link> items
                                when they become available.
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
                            <AccordionHeading>Can I get my money back?</AccordionHeading>
                            <AccordionPanel>Absolutely, there is a 14 day money back guarantee. This will also revoke any access to the NPM server.</AccordionPanel>
                        </AccordionItem> */}
                    </Accordion>





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
