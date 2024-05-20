import {
    Accordion,
    AccordionHeading,
    AccordionItem,
    AccordionPanel,
    Heading,
    Link,
    Text,
    View
} from '@fold-dev/core'

export const FAQComponent = () => {
    return (
        <View 
            row 
            id="faq"
            position="relative"
            p="5rem 0rem"
            width="100%"
            style={{ overflow: 'hidden' }}>
            <View
                column
                gap="2rem"
                position="relative">
                <Text
                    textAlign="center"
                    style={{ textTransform: 'uppercase' }}
                    letterSpacing={5}
                    colorToken="text-weakest">
                    FAQ
                </Text>
                <Heading
                    textAlign="center"
                    fontWeight={400}
                    width="80%">
                    Frequently Asked Questions
                </Heading>
                <Accordion 
                    m="1rem 0 0 0"
                    width="85%"
                    style={{ '--f-accordion-background': 'transparent' }}>
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
    )
}
