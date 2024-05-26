import React from 'react'
import '@fold-dev/core/dist/styles.css'
import '@fold-pro/react/dist/styles.css'
import '@/styles/globals.css'
import DocsLayout from '@/layouts/docs.layout'
import SiteLayout from '@/layouts/site.layout'

export default function App({ Component, pageProps }: any) {
    const getLayout = Component.noLayout 
        ? (page) => <SiteLayout>{page}</SiteLayout>
        : (page) => <DocsLayout>{page}</DocsLayout>
    return getLayout(<Component {...pageProps} />)
}
