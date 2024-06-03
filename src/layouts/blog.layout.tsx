import { HeaderComponent } from '@/components/header.component'
import { View } from '@fold-dev/core'
import { useEffect, useMemo, useState } from 'react'
import { articles } from '../blog'

export default function BlogLayout(props: any) {
    const { children } = props
    const [showChild, setShowChild] = useState(false)
    const { title, date, author, tags } = useMemo(() => {
        const parts = window.location.pathname.split('/')
        const lastPart = parts[parts.length - 1]
        return articles.find((article) => article.slug == lastPart)
    }, [])

    useEffect(() => {
        setShowChild(true)
    }, [])

    if (!showChild) return null

    return (
        <View>
            <HeaderComponent
                title={title}
                subtitle={`${date} by ${author}`}
            />
            
            <View 
                p="5rem" 
                className="text-content"
                m="0 auto"
                style={{ maxWidth: 1200 }}>
                {children}
            </View>
        </View>
    )
}
