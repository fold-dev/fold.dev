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
                alignItems="flex-start">
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
                                text: 'We love feedback, and if you have a GitHub account, you can use GitHub Discussions for any sort of question or suggestion.',
                            },
                            {
                                url: 'https://github.com/fold-dev/fold/issues',
                                title: 'Issues',
                                text: 'Open an issue or pull request on our GitHub repository if you want to contribute or report a bug.',
                            },
                            {
                                url: 'https://groups.google.com/a/fold.dev/g/early-access',
                                title: 'Fold Pro',
                                text: 'Have an issue related to Fold Pro (Early Access)? If you\'ve bought a license you get access to premium support via the private Google Group.',
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
                                <Text colorToken="text-weaker">{text}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    )
}
