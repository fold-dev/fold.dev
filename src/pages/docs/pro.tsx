import DocsLayout from '@/layouts/docs.layout'
import { Breadcrumb, BreadcrumbItem, Heading, Link, Text, View, 
    Accordion,
    AccordionItem,
    AccordionHeading,
    AccordionPanel, } from '@fold-dev/core'
import { CodeComponent } from '../components/code.component'
import React from 'react'
import { GraphicLeft } from '..'
import * as Token from '@fold-dev/design/tokens'

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
            <Heading as="h2">Get started with Fold, the UI component library for product teams.</Heading>
            <Text>
                Welcome to Fold, a collection of reusable React components that will help you build beautiful and
                functional user interfaces. This guide will walk you through the steps to get started with our library
                so that you can quickly integrate these components into your projects.
            </Text>
            




            <View
                column
                gap="2rem"
                width="100%"
                radius="var(--f-radius)"
                bgToken="accent-500"
                position="relative"
                style={{ overflow: 'hidden' }}
                alignItems="flex-start">
                <GraphicLeft
                    color={Token.ColorAccent200}
                    style={{ position: 'absolute', bottom: -100, left: -200, opacity: 0.1 }}
                    width={1107 / 2}
                    height={559 / 2}
                />

                <View
                    column
                    flex={1}
                    gap={30}
                    alignItems="flex-start"
                    p="5rem 5rem 0rem 5rem">
                    <Text
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="accent-300"
                        id="features">
                        What's Included
                    </Text>
                    <Heading
                        colorToken="accent-50"
                        fontWeight={400}>
                        Made for product builders. Whether it's a SaaS product or enterprise app, we got you covered.
                    </Heading>
                </View>

                <View
                    p="0 5rem 5rem 5rem"
                    position="relative"
                    style={{
                        '--f-accordion-border-color': 'var(--f-color-accent-400)',
                        '--f-accordion-background': 'var(--f-color-accent-500)',
                        '--f-accordion-color': 'var(--f-color-accent-100)',
                        '--f-accordion-color-description': 'var(--f-color-accent-300)',
                        '--f-accordion-hover-border-color': 'var(--f-color-accent-400)',
                        '--f-accordion-hover-background-color': 'var(--f-color-accent-400)',
                        '--f-accordion-active-background-color': 'var(--f-color-accent-300)',
                        '--f-accordion-active-background': 'var(--f-color-accent-200)',
                        '--f-accordion-active-color': 'var(--f-color-accent-100)',
                    } as any}>
                    <Accordion>
                        <AccordionItem>
                            <AccordionHeading>Are there really no dependencies?</AccordionHeading>
                            <AccordionPanel>
                                None. The sole dependencies are React and ReactDOM, and of course any additional libraries you
                                integrate into your project.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>Does Fold use CSS-in-JS?</AccordionHeading>
                            <AccordionPanel>
                                No. Fold utilizes pure CSS, compiled at build time, to tailor the appearance of components and
                                provides helper classes for added customization.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>Are there other runtime targets available?</AccordionHeading>
                            <AccordionPanel>
                                Currently, only ES6 Modules are supported. However, we are actively seeking feedback on how we
                                can accommodate a broader range of users. Please let us on know at our{' '}
                                <Link
                                    href="https://github.com/fold-dev/fold/discussions"
                                    target="_blank"
                                    fontSize="inherit">
                                    repository
                                </Link>{' '}
                                on GitHub.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>Where can I file bugs or feature requests?</AccordionHeading>
                            <AccordionPanel>
                                Please visit at our{' '}
                                <Link
                                    href="https://github.com/fold-dev/fold"
                                    target="_blank"
                                    fontSize="inherit">
                                    repository
                                </Link>{' '}
                                on GitHub.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>Are there plans to support other frameworks like Svelte or Vue?</AccordionHeading>
                            <AccordionPanel>Not yet.</AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>Can I use this for production?</AccordionHeading>
                            <AccordionPanel>
                                Certainly, however Fold is currently in its alpha stage. Nevertheless, you have the option to
                                use it in a production environment if you wish.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>Can I contribute?</AccordionHeading>
                            <AccordionPanel>
                                Absolutely! Please visit at our{' '}
                                <Link
                                    href="https://github.com/fold-dev/fold"
                                    target="_blank"
                                    fontSize="inherit">
                                    repository
                                </Link>{' '}
                                on GitHub to find out how.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>Is there a premium support package available?</AccordionHeading>
                            <AccordionPanel>Not yet.</AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>What are the future plans for Fold?</AccordionHeading>
                            <AccordionPanel>
                                Please see our{' '}
                                <Link
                                    href="https://github.com/orgs/fold-dev/projects/8"
                                    target="_blank"
                                    fontSize="inherit">
                                    Roadmap
                                </Link>{' '}
                                for upcoming development.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>





                </View>
            </View>
        

            <Text as="blockquote">Fold has been developed using React v18.2</Text>
            <Heading as="h3">Installation</Heading>
            <Text>
                To begin using Fold, you'll need to install it in your project. You can do this via npm or Yarn:
            </Text>
            <CodeComponent
                showSnippet
                dontConvert
                lang="bash"
                filename="console"
                code={`
    # Using npm
    npm install @fold-dev/core

    # Using yarn
    yarn add @fold-dev/core
                `}
            />
            <Heading as="h3">Setup</Heading>
            <Text>
                Once the library is installed, you'll need to include the CSS stylesheet & React Context Provider.
            </Text>
            <Heading as="h4">CSS</Heading>
            <Text>
                Add the stylesheet to the root level of your project. If you're utilizing SASS, Less, or another CSS
                preprocessor, you can also import it directly.
            </Text>
            <CodeComponent
                code={`
    import '@fold-dev/core/dist/styles.css'
                `}
                showSnippet
                dontConvert
                filename="App.tsx"
            />
            <Heading as="h4">Context Provider</Heading>
            <Text>
                Include <code>FoldProvider</code> in the root if your app.
            </Text>
            <CodeComponent
                code={`
    import React from 'react'
    import { FoldProvider } from '@fold-dev/core'

    function App() {
        return (
            <FoldProvider>
                <YourApp />
            </FoldProvider>
        )
    }
                `}
                showSnippet
                dontConvert
                filename="App.tsx"
            />

            <Heading as="h3">Done</Heading>
            <Text>
                You're now ready to start building with Fold. Here's an example of how to use one of our components:
            </Text>

            <CodeComponent
                code={`
    import React from 'react'
    import { FoldProvider } from '@fold-dev/core'

    function MyComponent() {
        return (
            <View>
                <Heading>Hello Fold!</Heading>
                <Button label="Click me" onClick={() => alert('Button clicked!')} />
            </View>
        )
    }
                `}
                showSnippet
                dontConvert
                filename="App.tsx"
            />
            <br />
            <Heading as="h3">Build Targets</Heading>
            <Text>
                Fold has been crafted using TypeScript and exported to es2015 as a target. If you have preferences for
                an alternative compilation target,{' '}
                <Link
                    href="https://github.com/fold-dev/fold/discussions"
                    target="_blank">
                    let us know
                </Link>
                . We aim to cater to as many users as possible to facilitate the use of Fold in their projects.
            </Text>
        </View>
    )
}

GettingStarted.getLayout = function getLayout(page: React.ReactElement) {
    return <DocsLayout style={{ padding: 30 }}>{page}</DocsLayout>
}
