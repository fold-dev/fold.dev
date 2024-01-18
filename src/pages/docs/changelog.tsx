import DocsLayout from '@/layouts/docs.layout'
import { Breadcrumb, BreadcrumbItem, Card, Grid, Heading, Icon, Link, Stack, Text, Timeline, TimelineItem, View } from '@fold-dev/core'
import { CodeComponent } from '../components/code.component'
import React from 'react'
import {
    LifebuoyIcon,
    PaintBrushIcon,
    QuestionMarkCircleIcon,
    RectangleGroupIcon,
    SwatchIcon,
} from '@heroicons/react/24/outline'

export default function Changelog(props) {
    return (
        <View
            p={30}
            className="docs-content">
            <Breadcrumb>
                <BreadcrumbItem>Documentation</BreadcrumbItem>
                <BreadcrumbItem active>Changelog</BreadcrumbItem>
            </Breadcrumb>
            <Heading fontWeight="bold">Changelog</Heading>
            <Heading as="h2">Fold release changelog.</Heading>
            <Text as="blockquote">There are no releases yet.</Text>
            {/* 
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

Changelog.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <DocsLayout
            style={{ padding: 30 }}
            noToc>
            {page}
        </DocsLayout>
    )
}
