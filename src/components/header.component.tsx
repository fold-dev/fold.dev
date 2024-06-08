import React from 'react'
import { Divider, Heading, Li, Link, List, Notification, NotificationContent, Text, View } from '@fold-dev/core'
import { GraphicLeft, GraphicRight } from '../components/graphic.component'
import * as Token from '@fold-dev/design/tokens'

export const HeaderComponent = ({ title, subtitle = null, description = null }) => {
    return  (
        <>
        <View
            width="100%"
            p="50px 0 0 0"
            m="-100px 0 0 0"
            position="relative"
            style={{ overflow: 'hidden' }}
            height={100}
            bg="linear-gradient(175deg, var(--f-color-accent-500), var(--f-color-accent-600))">
            <GraphicRight
                style={{ position: 'absolute', top: -100, right: -100, opacity: 0.2 }}
                height={882 / 2}
                width={1456 / 2}
            />

            <GraphicLeft
                style={{ position: 'absolute', top: 400, left: -200, opacity: 0.2 }}
                width={1107 / 2}
                height={559 / 2}
            />
        </View>

        <View
            column
            id="home"
            gap="1.5rem"
            flex={1}
            width="100%"
            p="5rem 0"
            justifyContent="stretch">
            {!!subtitle && (
                <Text
                    textAlign="center"
                    style={{ textTransform: 'uppercase' }}
                    letterSpacing={5}
                    colorToken="text-weakest">
                    {subtitle}
                </Text>
            )}
            <Heading
                huge
                textAlign="center">
                {title}
            </Heading>

            {!!description && (
                <Heading
                    as="h3"
                    textAlign="center"
                    colorToken="text-weaker"
                    width="80%">
                    {description}
                </Heading>
            )}
        </View>

        <Divider />
    </>
    )
}
