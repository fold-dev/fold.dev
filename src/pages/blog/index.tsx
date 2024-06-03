import { useEffect, useState } from 'react'
import React from 'react'
import { Avatar, Card, Heading, Image, Li, Link, List, Notification, NotificationContent, Pill, Stack, Text, View } from '@fold-dev/core'
import { GraphicLeft, GraphicRight } from '../../components/graphic.component'
import * as Token from '@fold-dev/design/tokens'
import { articles } from '../../blog'
import { HeaderComponent } from '@/components/header.component'

export default function BlogLayout(props: any) {
    const { children } = props
    const [showChild, setShowChild] = useState(false)

    useEffect(() => {
        setShowChild(true)
    }, [])

    if (!showChild) return null

    return (
        <View>
            <HeaderComponent
                title="Blog"
            />

            <View 
                p="5rem" 
                m="0 auto"
                className="text-content"
                style={{ maxWidth: 1200 }}>
                {articles.map((article: any, index: number) => (
                    <Card
                        key={index}
                        width={300}
                        header={
                            <Image
                                width="100%"
                                height={250}
                                src={article.image}
                            />
                        }>
                        <View p={20}>
                            <Stack
                                direction="vertical"
                                spacing={10}>
                                <View
                                    display="none"
                                    row
                                    gap={5}
                                    justifyContent="flex-start">
                                    {article.tags.map((tag, index) => {
                                        <Pill
                                            key={index}
                                            color={Token.ColorElectric400}
                                            subtle
                                            size="sm">
                                            {tag}
                                        </Pill>
                                    })}
                                </View>
                                <Heading 
                                    as="h2"
                                    p={0}
                                    m={0}>
                                    {article.title}
                                </Heading>
                                <Text 
                                    fontWeight="bold"
                                    colorToken="text-weaker"
                                    size="sm"
                                    p={0}
                                    m={0}>
                                    {article.date}
                                </Text>
                                <Text
                                    p={0}
                                    m={0}>
                                    {article.summary}
                                </Text>
                                <Link
                                    p={0}
                                    m={0} 
                                    href={'/blog/' + article.slug}>
                                    Read more
                                </Link>
                            </Stack>
                        </View>
                    </Card>
                ))}
            </View>
        </View>
    )
}
