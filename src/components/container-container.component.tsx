
import { View } from '@fold-dev/core'
import { useEffect, useMemo, useState } from 'react'

export const ContentContainerComponent = (props) => {
    return (
        <View
            p="5rem 0" 
            className="text-content"
            m="0 auto"
            style={{ maxWidth: 1000 }}>
            {props.children}
        </View>
    )
}
