import DocsLayout from '@/layouts/docs.layout'
import {
    Breadcrumb,
    BreadcrumbItem,
    Heading,
    Link,
    Text,
    View
} from '@fold-dev/core'
import React from 'react'

export default function Roadmap(props) {
    return (
        <View
            p={30}
            className="docs-content">
            <Breadcrumb>
                <BreadcrumbItem>Documentation</BreadcrumbItem>
                <BreadcrumbItem active>Roadmap</BreadcrumbItem>
            </Breadcrumb>
            <Heading fontWeight="bold">Roadmap</Heading>
            <Heading as="h2">Planned features & enhancements.</Heading>
            <Text as="blockquote">
                Please refer to our{' '}
                <Link
                    href="https://github.com/orgs/fold-dev/projects/8/views/2"
                    target="_blank"
                    fontSize="inherit">
                    GitHub
                </Link>{' '}
                project..
            </Text>

            {/* 
            <Text as="blockquote">There are no planned items yet.</Text>
            <Timeline>
                {[
                    {
                        title: 'Getting Started',
                        description: 'Guide on getting up and running quickly.',
                        color: 'purple-400',
                        icon: RectangleGroupIcon,
                    },
                    {
                        title: 'Design System',
                        description: 'Overview of Fold Design System and tokens.',
                        color: 'neonpink-400',
                        icon: PaintBrushIcon,
                    },
                    {
                        title: 'Theming',
                        description: 'Customize Fold to suit your project.',
                        color: 'yellow-400',
                        icon: SwatchIcon,
                    },
                    {
                        title: 'FAQ',
                        description: 'Frequently asked questions about Fold.',
                        color: 'violet-400',
                        icon: QuestionMarkCircleIcon,
                    },
                    {
                        title: 'Support',
                        description: 'Link and information on how to get help.',
                        color: 'teal-400',
                        icon: LifebuoyIcon,
                    },
                ].map((section, index) => (
                    <TimelineItem colorToken="text">
                        <Stack direction="vertical" spacing={10}>
                            <Heading as="h3">v0.10</Heading>
                            <Text fontWeight="semibold">Departed JFK airport via Uber.</Text>
                            <Text
                                size="sm"
                                colorToken="text-weaker">
                                56m ago
                            </Text>
                        </Stack>
                    </TimelineItem>
                ))}
            </Timeline> */}
        </View>
    )
}

Roadmap.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <DocsLayout
            style={{ padding: 30 }}
            noToc>
            {page}
        </DocsLayout>
    )
}
