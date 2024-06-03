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
        const { slug, title, summary, date, author, image, tags } = articles.find(
            (article) => article.slug == lastPart
        )

        return { 
            slug, 
            title, 
            summary, 
            date: new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            }), 
            author, 
            image, 
            tags,
        }
    }, [])

    useEffect(() => {
        setShowChild(true)
    }, [])

    if (!showChild) return null

    return (
        <View>
            <HeaderComponent
                title={title}
                subtitle="Blog"
                description={`${author} on ${date}`}
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
