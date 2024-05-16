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
            <Heading as="h2">
                Ready to take your project to the next level? 
            </Heading>
            <Text>
                Introducing Fold Pro, designed specifically for developers and teams who need components for building exceptional products. Built on the solid foundation of Fold Core.
            </Text>
            




            <View
                column
                gap="2rem"
                width="100%"
                radius="var(--f-radius)"
                alignItems="flex-start"
                bgToken="accent-500"
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
                            <AccordionHeading>Is the Source Code available?</AccordionHeading>
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
                            <AccordionHeading>Does it include future components?</AccordionHeading>
                            <AccordionPanel>
                                If you purchase an Early Access licence, you will get access to any <Link target="_blank" href="https://github.com/orgs/fold-dev/projects/8/views/2" colorToken="accent-100">Roadmap</Link> items
                                when they become available.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeading>Will the price increase after Early Access?</AccordionHeading>
                            <AccordionPanel>
                                Yes. The Indie package will increase to 499 USD per developer, Enterprise to 999 USD per developer & SaaS to 3,399 USD per developer.
                                Please feel free to <Link
                                    href="licensing@fold.dev"
                                    target="_blank"
                                    fontSize="inherit"
                                    colorToken="accent-100">
                                    email
                                </Link> us for more information. After the Beta release, there will be another increase - however we have not finalised this.
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
                        </AccordionItem>
                    </Accordion>





                </View>
            </View>
        
            <Heading as="h3">Getting the Files</Heading>
            <Text>
                After buying a license, you will be added a private Google Group.
                The Fold Pro source code will be posted there after every release.
            </Text>
            <Text>
                <Link 
                    target="_blank"
                    href="https://groups.google.com/a/fold.dev/g/early-access">
                    Google Group link
                </Link>
            </Text>
            <Text>
                If you have a Pro license and have not been added to the group, 
                please email Pro support <Link href="mailto:pro@fold.dev">here</Link>.
            </Text>

            <Heading as="h3">Requirements</Heading>


            <Heading as="h3">Installation</Heading>

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
