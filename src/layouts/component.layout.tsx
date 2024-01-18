import {
    Breadcrumb,
    BreadcrumbItem,
    Heading,
    IconLib,
    Notification,
    NotificationContent,
    NotificationIcon,
    Stack,
    Tab,
    Table,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    TBody,
    Td,
    Text,
    Th,
    THead,
    Tr,
    View,
} from '@fold-dev/core'
import { useEffect, useMemo, useState } from 'react'
import React from 'react'
import DocsLayout from './docs.layout'
import { useRouter } from 'next/navigation'

export default function ComponentLayout({ children, docs, props, css }) {
    const [showChild, setShowChild] = useState(false)
    const [selected, setSelected] = useState<any>(0)
    const hasCss = useMemo(() => !!css.length, [css])
    const hasProps = useMemo(() => !!props.length, [props])
    const router = useRouter()

    useEffect(() => {
        setShowChild(true)
    }, [])

    if (!showChild) return null

    return (
        <View className="styled-content">
            <View p="30px 30px 0 30px">
                <Breadcrumb>
                    <BreadcrumbItem>Documentation</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem active>{docs.title}</BreadcrumbItem>
                </Breadcrumb>
            </View>
            <Heading
                fontWeight="bold"
                p="0px 30px">
                {docs.title}
            </Heading>
            <Heading
                as="h2"
                p="0 30px">
                {docs.subtitle}
            </Heading>
            <Text
                p="0 30px"
                size="lg"
                fontWeight={300}>
                {docs.description}
            </Text>
            <View
                m="1rem 0 0 0"
                width="100%">
                <Tabs
                    animated
                    selected={selected}
                    onSelect={setSelected}
                    width="100%">
                    <TabList
                        width="100%"
                        p="0 30px">
                        <Tab>Usage</Tab>
                        <Tab>Props</Tab>
                        <Tab>CSS Variables</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel
                            bgToken="surface-strong"
                            p={30}>
                            <View
                                width="100%"
                                className="docs-content">
                                {children}
                            </View>
                        </TabPanel>
                        <TabPanel>
                            <View
                                column
                                alignItems="flex-start"
                                width="100%">
                                <Stack
                                    m="10px 0 0 0"
                                    direction="vertical"
                                    spacing={10}
                                    width="100%">
                                    {props.map(({ description, displayName, props }, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <Heading>{displayName}</Heading>
                                                <Table>
                                                    <THead>
                                                        <Tr>
                                                            <Th>Prop name</Th>
                                                            <Th>Type</Th>
                                                            <Th>Default value</Th>
                                                            <Th>Description</Th>
                                                            <Th>Required</Th>
                                                        </Tr>
                                                    </THead>
                                                    <TBody>
                                                        {!Object.keys(props).length && (
                                                            <Tr>
                                                                <Td colspan={5}>
                                                                    <Text p={20}>There are no props available.</Text>
                                                                </Td>
                                                            </Tr>
                                                        )}
                                                        {Object.keys(props).map((key, index) => {
                                                            const { description, name, required, type, tags } =
                                                                props[key]

                                                            return (
                                                                <Tr key={index}>
                                                                    <Td>{name}</Td>
                                                                    <Td>{type.name}</Td>
                                                                    <Td>{tags.defaultValue || 'Not available'}</Td>
                                                                    <Td>{description || 'Not available'}</Td>
                                                                    <Td>{required ? 'yes' : 'no'}</Td>
                                                                </Tr>
                                                            )
                                                        })}
                                                    </TBody>
                                                </Table>
                                            </React.Fragment>
                                        )
                                    })}
                                    {!hasProps && <Text p={20}>There are no props available.</Text>}
                                </Stack>
                            </View>
                        </TabPanel>
                        <TabPanel>
                            <View
                                column
                                alignItems="flex-start"
                                width="100%">
                                <Stack
                                    m="10px 0 0 0"
                                    direction="vertical"
                                    spacing={10}
                                    width="100%">
                                    {hasCss && (
                                        <Table>
                                            <THead>
                                                <Tr>
                                                    <Th>Variable name</Th>
                                                    <Th>Default value</Th>
                                                </Tr>
                                            </THead>
                                            <TBody>
                                                {css.map((set) =>
                                                    set.map((property, index) => (
                                                        <Tr key={index}>
                                                            <Td>{property[0]}</Td>
                                                            <Td>{property[1]}</Td>
                                                        </Tr>
                                                    ))
                                                )}
                                            </TBody>
                                        </Table>
                                    )}
                                    {!hasCss && <Text p={20}>There are no CSS variables available.</Text>}
                                    <Notification
                                        rightAccent
                                        className="f-buttonize"
                                        onClick={() => router.push('/docs/design-system', { scroll: false })}>
                                        <NotificationContent>
                                            Read more about the Fold Design System here.
                                        </NotificationContent>
                                        <NotificationIcon>
                                            <IconLib icon="arrow-right" />
                                        </NotificationIcon>
                                    </Notification>
                                </Stack>
                            </View>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </View>
        </View>
    )
}
