import DocsLayout from '@/layouts/docs.layout'
import {
    Text,
    Progress,
    Heading,
    View,
    Card,
    Icon,
    Link,
    Grid,
    IconLib,
    Notification,
    NotificationIcon,
    NotificationContent,
    Breadcrumb,
    BreadcrumbItem,
} from '@fold-dev/core'
import {
    CubeIcon,
    FingerPrintIcon,
    FireIcon,
    LifebuoyIcon,
    PaintBrushIcon,
    QuestionMarkCircleIcon,
    RectangleGroupIcon,
    SwatchIcon,
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import React from 'react'

export default function Introduction(props) {
    const router = useRouter()

    return (
        <View
            p={30}
            className="docs-content">
            <Breadcrumb>
                <BreadcrumbItem>Documentation</BreadcrumbItem>
                <BreadcrumbItem>Overview</BreadcrumbItem>
                <BreadcrumbItem active>Introduction</BreadcrumbItem>
            </Breadcrumb>
            <Heading fontWeight="bold">Introduction</Heading>
            <Heading as="h2">
                Fold is a zero-dependency React UI library for product builders, built on modern web standards that aims
                to be flexible & performant. With this philosphy in mind, we're also aiming to build a developer
                experience that is pleasant for beginners, but also for veterans.
            </Heading>
            <Text>
                We've just launched and would love your feedback. If you've found bugs, have ideas or generally want to
                say hello, please check out our{' '}
                <Link
                    href="https://github.com/fold-dev/fold/discussions"
                    target="_blank"
                    fontSize="inherit">
                    GitHub
                </Link>{' '}
                repository or our{' '}
                <Link
                    href="/docs/faq"
                    target="_blank"
                    fontSize="inherit">
                    FAQ page
                </Link>
                .
            </Text>
            <Text>Below are some links to get you started.</Text>
            <Grid
                m="0 0 1rem 0"
                gap="1rem"
                columns={3}
                minChildWidth={150}>
                {[
                    {
                        title: 'Getting Started',
                        description: 'Guide on getting up and running quickly.',
                        color: 'blue-400',
                        icon: RectangleGroupIcon,
                        slug: 'getting-started',
                    },
                    {
                        title: 'FAQ',
                        description: 'Frequently asked questions about Fold.',
                        color: 'purple-400',
                        icon: QuestionMarkCircleIcon,
                        slug: 'faq',
                    },
                    {
                        title: 'Design System',
                        description: 'Overview of Fold Design System and tokens.',
                        color: 'neonpink-400',
                        icon: PaintBrushIcon,
                        slug: 'design-system',
                    },
                    {
                        title: 'Theming',
                        description: 'Customize Fold to suit your project.',
                        color: 'orange-400',
                        icon: SwatchIcon,
                        slug: 'theming',
                    },
                    {
                        title: 'Icons',
                        description: 'Building your own icon library set.',
                        color: 'yellow-400',
                        icon: FireIcon,
                        slug: 'icons',
                    },
                    {
                        title: 'Tokens',
                        description: 'Design tokens used throughout Fold.',
                        color: 'green-400',
                        icon: FingerPrintIcon,
                        slug: 'tokens',
                    },
                ].map((section, index) => (
                    <Card
                        key={index}
                        column
                        width="none"
                        flex={1}
                        colorToken={section.color}
                        height={250}
                        gap={5}
                        className="f-buttonize-outline"
                        onClick={() => router.push('/docs/' + section.slug)}>
                        <Icon
                            icon={section.icon}
                            size="md"
                            style={{
                                '--f-icon-sizing-md': '75px',
                                '--f-icon-stroke-width-md': '0.06rem',
                            }}
                        />
                        <Heading
                            as="h3"
                            fontWeight={600}
                            colorToken={section.color}>
                            {section.title}
                        </Heading>
                        <Text
                            colorToken="text-weak"
                            textAlign="center"
                            p="0 1rem">
                            {section.description}
                        </Text>
                    </Card>
                ))}
            </Grid>
            <Notification variant="highlight">
                <NotificationIcon>
                    <IconLib icon="info" />
                </NotificationIcon>
                <NotificationContent>
                    <Text>
                        Please consider these docs a work in progress. We're adding more detail all the time, but if you
                        have any questions - please feel free to ask them on{' '}
                        <Link
                            href="https://github.com/fold-dev/fold/discussions"
                            target="_blank">
                            GitHub
                        </Link>{' '}
                        or email us at <Link href="mailto:support@fold.dev">support@fold.dev</Link>.
                    </Text>
                </NotificationContent>
            </Notification>
        </View>
    )
}

Introduction.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <DocsLayout
            noToc
            style={{ padding: 30 }}>
            {page}
        </DocsLayout>
    )
}
