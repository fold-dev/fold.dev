import DocsLayout from '@/layouts/docs.layout'
import {
    Breadcrumb,
    BreadcrumbItem,
    Divider,
    Heading,
    Icon,
    If,
    Link,
    Notification,
    NotificationContent,
    Option,
    Options,
    Progress,
    Stack,
    TBody,
    THead,
    Table,
    Td,
    Text,
    Th,
    Tr,
    View,
} from '@fold-dev/core'
import { NextPageContext } from 'next'
import { Octokit } from 'octokit'
import React, { useEffect, useState } from 'react'
import { PiTag, PiTagDuotone } from 'react-icons/pi'
import { useRouter } from 'next/router'
import { useParams } from 'next/navigation'

export default function Release(props) {    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [releases, setReleases] = useState([])
    const [html, setHtml] = useState('')
    const [option, setOption] = useState(0)
    const params = useParams()

    const getRelease = async () => {
        setLoading(true)
        setError(false)

        try {
            const response = await fetch('/api/release?id='+params.id)
            const { html } = await response.json()

            setHtml(html)

            //setReleases(data)
            //setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
            setError(true)
        }
    }

    useEffect(() => {
        if (!!params?.id) getRelease()
    }, [params?.id])

    return (
        <View
            p={30}
            className="docs-content">
            <Breadcrumb>
                <BreadcrumbItem>Documentation</BreadcrumbItem>
                <BreadcrumbItem active>Releases</BreadcrumbItem>
            </Breadcrumb>
            <Heading fontWeight="bold">Releases</Heading>
            <Heading as="h2">Below is a list of all Fold releases.</Heading>
            <Divider />

            <If if={error}>
                <Notification
                    variant="danger"
                    leftAccent>
                    <NotificationContent>
                        <Text fontWeight="bold">Whoops, something has gone wrong.</Text>
                    </NotificationContent>
                </Notification>
            </If>

            <If if={loading}>
                <Progress
                    variant="accent"
                    value={50}
                    thickness={3}
                    indeterminate
                    bgToken="transparent"
                    position="absolute"
                    width="100%"
                    zIndex={1000}
                    style={{
                        inset: 0,
                    }}
                />
            </If>

            <p dangerouslySetInnerHTML={{ __html: html }} />
        </View>
    )
}

Release.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <DocsLayout
            style={{ padding: 30 }}
            noToc>
            {page}
        </DocsLayout>
    )
}
