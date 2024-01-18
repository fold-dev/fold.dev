import DocsLayout from '@/layouts/docs.layout'
import { Card, Grid, Heading, Icon, Link, Text, View } from '@fold-dev/core'
import { CodeComponent } from '../components/code.component'
import React from 'react'
import {
    LifebuoyIcon,
    PaintBrushIcon,
    QuestionMarkCircleIcon,
    RectangleGroupIcon,
    SwatchIcon,
} from '@heroicons/react/24/outline'

export default function Community(props) {
    return (
        <View
            p={30}
            className="docs-content">
            <Heading fontWeight="bold">Community</Heading>
            <Heading as="h2">
                Ask questions, submit bugs & request features at our{' '}
                <Link
                    href="https://github.com/fold-dev/fold"
                    target="_blank"
                    fontSize="inherit">
                    repository
                </Link>{' '}
                on GitHub.
            </Heading>
            <Text>
                If you have any ideas, suggestions, problems or just want to hi, please visit our{' '}
                <Link
                    href="https://github.com/fold-dev/fold/discussions"
                    target="_blank"
                    fontSize="inherit">
                    repository
                </Link>{' '}
                on GitHub.
            </Text>
            <Text>
                For any other questions, please check out our{' '}
                <Link
                    href="/docs/faq"
                    fontSize="inherit">
                    FAQ page
                </Link>
                , or follow us on social media.
            </Text>
        </View>
    )
}

Community.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <DocsLayout
            noToc
            style={{ padding: 30 }}>
            {page}
        </DocsLayout>
    )
}
