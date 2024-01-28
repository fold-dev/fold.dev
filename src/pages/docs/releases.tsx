import DocsLayout from '@/layouts/docs.layout'
import {
    Breadcrumb,
    BreadcrumbItem,
    Divider,
    Heading,
    Icon,
    Link,
    Stack,
    Text,
    View
} from '@fold-dev/core'
import { NextPageContext } from 'next'
import { Octokit } from 'octokit'
import React from 'react'
import { PiTagDuotone } from 'react-icons/pi'
import { remark } from 'remark'
import html from 'remark-html'

async function markdownToHtml(markdown: string) {
    const result = await remark().use(html).process(markdown)
    return result.toString()
}

export default function Releases(props) {
    const { data, content } = props

    console.log(content, data)

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
            <br/>
            {!data.length && <Text as="blockquote">There are no releases yet.</Text>}

            {/* https://docs.github.com/en/rest/releases/releases?apiVersion=2022-11-28#list-releases-for-a-repository */}
            
            {data.map(({ html_url, name, tag_name, body }, index) => (
                <Stack direction="vertical" spacing={10} key={index} m="0 0 2rem 0">
                    <Heading as="h3" fontWeight={700}>{name}</Heading>
                    <View row gap={5} justifyContent="flex-start">
                        <Icon icon={PiTagDuotone} size="sm" color="var(--f-color-accent)" />
                        <Text>{tag_name}</Text>
                    </View>
                    {/* <Text fontWeight="semibold">{body}</Text> */}
                    <Link target="_blank" href={html_url}>View release on GitHub</Link>
                </Stack>
            ))}            
        </View>
    )
}

Releases.getInitialProps = async (ctx: NextPageContext) => {
    try {
        const octokit = new Octokit({
            auth: process.env.GH_TOKEN,
        })

        const result = await octokit.request('GET /repos/fold-dev/fold/releases', {
            owner: 'OWNER',
            repo: 'REPO',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        })

        //const content = await markdownToHtml(result.data.body)

        return { data: result.data }
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
