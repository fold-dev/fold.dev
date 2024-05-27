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
import { remark } from 'remark'
import html from 'remark-html'

async function markdownToHtml(markdown: string) {
    const result = await remark().use(html).process(markdown)
    return result.toString()
}

export default function Releases(props) {
    const { data, content } = props
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [releases, setReleases] = useState([])
    const [option, setOption] = useState(0)

    const getProReleases = async () => {
        setLoading(true)
        setError(false)

        try {
            const response = await fetch('/api/releases?repo=pro')
            const { results: { data } } = await response.json()

            setReleases(data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            setError(true)
        }
    }

    const getCoreReleases = async () => {
        setLoading(true)
        setError(false)

        try {
            const response = await fetch('/api/releases?repo=fold')
            const { results: { data } } = await response.json()

            setReleases(data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            setError(true)
        }
    }

    useEffect(() => {
        if (option == 0) {
            getCoreReleases()
        } else {
            getProReleases()
        }
    }, [option])

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

            <Options
                m="1rem 0"
                selected={option}
                onOptionChange={setOption}>
                <Option>Core</Option>
                <Option>Pro</Option>
            </Options>

            {/* https://docs.github.com/en/rest/releases/releases?apiVersion=2022-11-28#list-releases-for-a-repository */}

            <Table>
                <THead>
                    <Tr>
                        <Th>Version</Th>
                        <Th>Release Date</Th>
                        <Th></Th>
                        {/* <Th></Th> */}
                    </Tr>
                </THead>
                <TBody>
                    {releases.map(({ html_url, name, id, tag_name, published_at }, index) => (
                        <Tr key={index}>
                            <Td>
                                <View
                                    row
                                    gap={5}
                                    justifyContent="flex-start">
                                    <Icon
                                        icon={PiTag}
                                        size="sm"
                                        color="var(--f-color-accent)"
                                    />
                                    <Text>{tag_name}</Text>
                                </View>
                            </Td>
                            <Td>
                                {new Date(published_at).toLocaleDateString('en-US', {
                                    weekday: 'short',
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                })}
                            </Td>
                            <Td>
                                <Link
                                    target="_blank"
                                    href={html_url}>
                                    GitHub ↗
                                </Link>
                            </Td>
                          {/*   <Td align="right">
                                <Link
                                    href={"/docs/release/" + id}>
                                    View Release
                                </Link>
                            </Td> */}
                        </Tr>
                    ))}
                </TBody>
            </Table>

            {!releases.length && <Text as="blockquote">There are no releases here (yet).</Text>}
        </View>
    )
}

Releases.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <DocsLayout
            style={{ padding: 30 }}
            noToc>
            {page}
        </DocsLayout>
    )
}
