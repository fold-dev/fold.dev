import { useEffect, useState } from 'react'
import React from 'react'
import { Avatar, Heading, Li, Link, List, Notification, NotificationContent, Text, View } from '@fold-dev/core'
import { GraphicLeft, GraphicRight } from '../components/graphic.component'
import * as Token from '@fold-dev/design/tokens'

export default function BlogLayout(props: any) {
    const { children, title, date, author, tags } = props
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
                    p="5rem 0"
                    justifyContent="stretch">
                    <Heading
                        textAlign="center"
                        colorToken="white"
                        fontWeight={700}
                        fontSize="6rem"
                        letterSpacing={-5}
                        lineHeight={0.9}>
                        {title}
                    </Heading>

                    <View 
                        row
                        gap="1rem"
                        width="80%">
                        <Avatar 
                            size="sm"
                            src="/men/01.jpg" 
                            name="Jo du Plessis" 
                        />
                        <Heading
                            as="h5"
                            textAlign="center"
                            colorToken="white">
                            {date} by {author}
                        </Heading>
                    </View>
                
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
                {children}
            </View>
        </View>
    )
}
