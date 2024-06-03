import { useEffect, useState } from 'react'
import React from 'react'
import { Avatar, Card, Heading, Image, Li, Link, List, Notification, NotificationContent, Pill, Stack, Text, View } from '@fold-dev/core'
import { GraphicLeft, GraphicRight } from '../../components/graphic.component'
import * as Token from '@fold-dev/design/tokens'
import { articles } from '../../blog'

export default function BlogLayout(props: any) {
    const { children } = props
    const [showChild, setShowChild] = useState(false)

    useEffect(() => {
        setShowChild(true)
    }, [])

    if (!showChild) return null

    return (
        <View className="legal">
            <View
                width="100%"
                p="111px 0 0 0"
                m="-111px 0 0 0"
                position="relative"
                style={{ overflow: 'hidden' }}
                bg={`linear-gradient(175deg, ${Token.ColorElectric700}, ${Token.ColorElectric400})`}>
                <GraphicRight
                    style={{ position: 'absolute', top: -100, right: -100, opacity: 0.2 }}
                    height={882 / 2}
                    width={1456 / 2}
                />

                <View
                    column
                    id="home"
                    gap="1rem"
                    flex={1}
                    width="100%"
                    p="2rem 0 5rem 0"
                    justifyContent="stretch">
                    <Heading
                        textAlign="center"
                        colorToken="white"
                        fontWeight={700}
                        fontSize="6rem"
                        letterSpacing={-5}
                        lineHeight={0.9}>
                        Blog
                    </Heading>
                
                    <GraphicLeft
                        style={{ position: 'absolute', top: 400, left: -200, opacity: 0.2 }}
                        width={1107 / 2}
                        height={559 / 2}
                    />
                </View>
            </View>

            <View 
                p="5rem" 
                className="legal-content"
                m="0 auto"
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
