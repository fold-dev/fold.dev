import React from 'react'
import '@fold-dev/core/dist/styles.css'
import '@/styles/globals.css'
import DocsLayout from '@/layouts/docs.layout'
import SiteLayout from '@/layouts/site.layout'
import BlogLayout from '@/layouts/blog.layout'
import Head from 'next/head'

export default function App(props: any) {
    const { 
        Component, 
        pageProps, 
        router: { route },
    } = props

    if (route.includes('/docs')) {
        return (
            <>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <title>Fold Documentation</title>
                </Head>
                <DocsLayout>
                    <Component {...pageProps} />
                </DocsLayout>
            </>
        )
    } 

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Fold</title>
            </Head>
            <SiteLayout>
                <Component {...pageProps} />
            </SiteLayout>
        </>
    )
}
