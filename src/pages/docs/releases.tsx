import DocsLayout from '@/layouts/docs.layout'
import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Grid,
    Heading,
    Icon,
    Link,
    Stack,
    Text,
    Timeline,
    TimelineItem,
    View,
} from '@fold-dev/core'
import { CodeComponent } from '../components/code.component'
import React from 'react'
import {
    LifebuoyIcon,
    PaintBrushIcon,
    QuestionMarkCircleIcon,
    RectangleGroupIcon,
    SwatchIcon,
} from '@heroicons/react/24/outline'
import { NextPageContext } from 'next'
import { Octokit } from 'octokit'

export default function Releases(props) {
    const { data } = props

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
            {!data.length && <Text as="blockquote">There are no releases yet.</Text>}

            {/* 
            https://docs.github.com/en/rest/releases/releases?apiVersion=2022-11-28#list-releases-for-a-repository
            
            <Timeline>
                {data.map(({ url, name, tag_name, body }, index) => (
                    <TimelineItem colorToken="text">
                        <Stack direction="vertical" spacing={10}>
                            <Heading as="h3">{name}</Heading>
                            <Text as="blockquote">{tag_name}</Text>
                            <Text fontWeight="semibold">{description}</Text>
                            <Link size="sm" target="_blank" href={url}>View release</Link>
                        </Stack>
                    </TimelineItem>
                ))}
            </Timeline> 
            */}
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
