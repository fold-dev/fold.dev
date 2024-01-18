import DocsLayout from '@/layouts/docs.layout'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Home({ children }) {
    const router = useRouter()
    router.push('/docs/introduction')
    return <div style={{ padding: 10, color: 'var(--f-color-text)' }}>Loading...</div>
}

Home.getLayout = function getLayout(page: React.ReactElement) {
    return <DocsLayout>{page}</DocsLayout>
}
