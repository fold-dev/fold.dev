import DocsLayout from '@/layouts/docs.layout'
import {
    Breadcrumb,
    BreadcrumbItem,
    Divider,
    Heading,
    Icon,
    Link,
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
import { PiTagDuotone } from 'react-icons/pi'
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

    const getProReleases = async () => {
        setLoading(true)
        setError(false)

        try {
            const response = await fetch('/api/pro-releases')
            const { results } = await response.json()

            setReleases(results)
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
            const response = await fetch('/api/core-releases')
            const { results } = await response.json()

            setReleases(results)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            setError(true)
        }
    }

    useEffect(() => {
        //getCoreReleases()
        //getProReleases()
    }, [])

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
            <br />
            {!data.length && <Text as="blockquote">There are no releases yet.</Text>}

            {/* https://docs.github.com/en/rest/releases/releases?apiVersion=2022-11-28#list-releases-for-a-repository */}

            <Table>
                <THead>
                    <Tr>
                        <Th>Version</Th>
                        <Th>Tag</Th>
                        <Th>Release Date</Th>
                        <Th align="right">Link</Th>
                    </Tr>
                </THead>
                <TBody>
                    {data.map(({ html_url, name, tag_name, published_at }, index) => (
                        <Tr key={index}>
                            <Td>
                                <Text fontWeight="bold">{name}</Text>
                            </Td>
                            <Td>
                                <View
                                    row
                                    gap={5}
                                    justifyContent="flex-start">
                                    <Icon
                                        icon={PiTagDuotone}
                                        size="sm"
                                        color="var(--f-color-accent)"
                                    />
                                    <Text>{tag_name}</Text>
                                </View>
                            </Td>
                            <Td>
                                {new Date(published_at).toLocaleDateString()}
                            </Td>
                            <Td align="right">
                                <Link
                                    target="_blank"
                                    href={html_url}>
                                    View release on GitHub
                                </Link>
                            </Td>
                        </Tr>
                    ))}
                </TBody>
            </Table>
        </View>
    )
}

Releases.getInitialProps = async (ctx: NextPageContext) => {
    try {

        //return { data: result.data }
        return { data: [] }
    } catch (e) {
        return { data: [] }
    }
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
