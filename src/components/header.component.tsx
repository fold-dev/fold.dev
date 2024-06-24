import React from 'react'
import { Divider, Heading, Li, Link, List, Notification, NotificationContent, Text, View } from '@fold-dev/core'
import { GraphicLeft, GraphicRight } from '../components/graphic.component'
import * as Token from '@fold-dev/design/tokens'

export const HeaderComponent = ({ title, subtitle = null, description = null }) => {
    return  (
        <>
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
