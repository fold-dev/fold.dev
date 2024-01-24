import { useEffect, useState } from 'react'
import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypePrettyCode from 'rehype-pretty-code'
import { Copy, Icon, View } from '@fold-dev/core'
import { DocumentIcon } from '@heroicons/react/24/outline'

const highlightCode = async (code: string, lang = 'javascript') => {
    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypePrettyCode, {
            keepBackground: false,
            theme: 'one-dark-pro',
            defaultLang: lang,
        })
        .use(rehypeStringify)
        .process(code)

    return String(file)
}

export default ({
    code,
    filename = '',
    lang = 'javascript',
    showSnippet = false,
    dontConvert = false,
    minHeight = 'fit-content',
}) => {
    const [html, setHtml] = useState('')
    const [snippet, setSnippet] = useState('')

    useEffect(() => {
        let decoded = code
        if (!dontConvert) decoded = atob(code)
        setSnippet(decoded)
        if (showSnippet) highlightCode(decoded, lang).then((html) => setHtml(html))
    }, [])

    return (
        <>
            <View
                row
                m="1rem 0 -1rem 0">
                <Copy
                    prefix={<Icon icon={DocumentIcon} />}
                    label={filename}
                    value={snippet}
                    bgToken="base-600"
                    border="0"
                    style={{
                        '--f-copy-color': 'var(--f-color-base-100)',
                        'borderBottomLeftRadius': 0,
                        'borderBottomRightRadius': 0,
                    }}
                />
            </View>
            {showSnippet && (
                <section
                    style={{ width: '100%', minHeight }}
                    dangerouslySetInnerHTML={{
                        __html: html,
                    }}
                />
            )}
        </>
    )
}
