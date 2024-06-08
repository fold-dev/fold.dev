import React from 'react'
import '@fold-dev/core/dist/styles.css'
import '@fold-pro/react/dist/styles.css'
import '@/styles/globals.css'
import DocsLayout from '@/layouts/docs.layout'
import SiteLayout from '@/layouts/site.layout'
import BlogLayout from '@/layouts/blog.layout'

export default function App(props: any) {
    const { 
        Component, 
        pageProps, 
        router: { route },
    } = props

    if (route.includes('/docs')) {
        return (
            <DocsLayout>
                <Component {...pageProps} />
            </DocsLayout>
        )
    } 

    return (
        <SiteLayout>
            <Component {...pageProps} />
        </SiteLayout>
    )
}
