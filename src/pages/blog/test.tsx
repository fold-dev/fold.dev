import BlogLayout from '@/layouts/blog.layout'
import { Link, View } from '@fold-dev/core'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Test({ children }) {
    return (
        <View 
            p="5rem" 
            m="0 auto"
            className="text-content"
            style={{ maxWidth: 1200 }}>
            <Link
                p={0}
                m={0} 
                href={'/blog/test'}>
                test
            </Link>
            /
            <Link
                p={0}
                m={0} 
                href={'/blog/demo'}>
                demo
            </Link>
        </View>
    )
}
