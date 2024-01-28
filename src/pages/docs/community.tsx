import DocsLayout from '@/layouts/docs.layout'
import { Breadcrumb, BreadcrumbItem, Heading, Link, Text, View } from '@fold-dev/core'
import React from 'react'

export default function Community(props) {
    return (
        <View
            p={30}
            className="docs-content">
            <Breadcrumb>
                <BreadcrumbItem>Documentation</BreadcrumbItem>
                <BreadcrumbItem>Overview</BreadcrumbItem>
                <BreadcrumbItem active>Community</BreadcrumbItem>
            </Breadcrumb>
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
