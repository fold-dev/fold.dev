import {
    Heading,
    Link,
    Text,
    View
} from '@fold-dev/core'

export const SupportComponent = (props) => {
    return (
        <View 
            row 
            id="support"
            position="relative"
            p="5rem 0rem"
            width="100%"
            style={{ overflow: 'hidden' }}>
            <View
                row
                gap={50}
                width="85%"
                radius="var(--f-radius)"
                position="relative"
                style={{ overflow: 'hidden' }}
                alignItems="flex-start"
                className="support">
                <View
                    column
                    flex={1}
                    gap={30}
                    alignItems="flex-start"
                    p="5rem 0rem 5rem 5rem">
                    <Text
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="text-weakest"
                        id="features">
                        Support
                    </Text>
                    <Heading
                        fontWeight={400}>
                        Have a question or need assistance?
                    </Heading>
                </View>

                <View
                    column
                    flex={2}
                    gap={30}
                    alignItems="flex-start"
                    p="5rem">
                    <View
                        column
                        gap={30}
                        position="relative">
                        {[
                            {
                                url: 'https://github.com/fold-dev/fold/discussions',
                                title: 'Discussions',
                                text: 'If you have a question or a suggestion, feel free to engage with the community on GitHub Discussions. Discussions allow you to ask for help, share ideas, and participate in conversations with other contributors.',
                            },
                            {
                                url: 'https://github.com/fold-dev/fold/issues',
                                title: 'Issues',
                                text: 'If you want to contribute to the project or report a bug, you can open an issue or submit a pull request on the GitHub repository.',
                            },
                            {
                                url: 'https://groups.google.com/a/fold.dev/g/pro',
                                title: 'Fold Pro',
                                text: 'If you\'ve purchased a license, you will gain access to the Fold Pro Google Group. This exclusive group provides additional support, resources, and discussions specifically for licensed users.',
                            },
                        ].map(({ title, text, url }, index) => (
                            <View
                                key={index}
                                width="100%">
                                <Link
                                    href={url}
                                    target="_blank"
                                    textDecoration="none">
                                    <Heading
                                        as="h2"
                                        m="0 0 0.25rem 0"
                                        colorToken="text">
                                        {title} ↗
                                    </Heading>
                                </Link>
                                <Text colorToken="text-weaker">
                                    {text}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    )
}
