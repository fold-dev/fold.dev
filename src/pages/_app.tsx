import React from 'react'
import '@fold-dev/core/dist/styles.css'
import '@/styles/globals.css'
import DocsLayout from '@/layouts/docs.layout'

export default function App({ Component, pageProps }: any) {
    const getLayout = Component.noLayout ? (page) => page : (page) => <DocsLayout>{page}</DocsLayout>
    return getLayout(<Component {...pageProps} />)
}
