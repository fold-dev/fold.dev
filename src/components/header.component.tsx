import React from 'react'
import { Heading, Li, Link, List, Notification, NotificationContent, Text, View } from '@fold-dev/core'
import { GraphicLeft, GraphicRight } from '../components/graphic.component'
import * as Token from '@fold-dev/design/tokens'

export const HeaderComponent = ({ title, subtitle = null, description = null }) => {
    return  (
        <View
            width="100%"
            p="50px 0 0 0"
            m="-100px 0 0 0"
            position="relative"
            style={{ overflow: 'hidden' }}
            bg="linear-gradient(175deg, var(--f-color-accent-500), var(--f-color-accent-600))">
            <GraphicRight
                style={{ position: 'absolute', top: -100, right: -100, opacity: 0.2 }}
                height={882 / 2}
                width={1456 / 2}
            />

            <View
                column
                id="home"
                gap="2rem"
                flex={1}
                width="100%"
                p="5rem 0"
                justifyContent="stretch">

                {!!subtitle && (
                    <Text
                        textAlign="center"
                        style={{ textTransform: 'uppercase' }}
                        letterSpacing={5}
                        colorToken="accent-300">
                        {subtitle}
                    </Text>
                )}
                <Heading
                    huge
                    textAlign="center"
                    colorToken="white">
                    {title}
                </Heading>

                {!!description && (
                    <Heading
                        as="h3"
                        textAlign="center"
                        colorToken="white"
                        width="80%">
                        {description}
                    </Heading>
                )}

           {/*      {!!subtitle && (
                    <Heading
                        as="h5"
                        textAlign="center"
                        colorToken="white"
                        width="80%">
                        {subtitle}
                    </Heading>
                )} */}
            
                <GraphicLeft
                    style={{ position: 'absolute', top: 400, left: -200, opacity: 0.2 }}
                    width={1107 / 2}
                    height={559 / 2}
                />
            </View>
        </View>
    )
}
