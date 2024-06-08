import React from 'react'
import BlogLayout from '@/layouts/blog.layout'
import { useRouter } from 'next/navigation'
import { articles } from '../../blog'
import * as Token from '@fold-dev/design/tokens'
import { Card, Heading, Image, Link, Pill, Stack, Text, View } from '@fold-dev/core'

export default function Blog({ children }) {
    const router = useRouter()
    return (
        <View 
            p="5rem" 
            m="0 auto"
            className="text-content"
            style={{ maxWidth: 1200 }}>
            {articles.map((article: any, index: number) => (
                <Card
                    key={index}
                    width={300}
                    header={
                        <Image
                            width="100%"
                            height={250}
                            src={article.image}
                        />
                    }>
                    <View p={20}>
                        <Stack
                            direction="vertical"
                            spacing={10}>
                            <View
                                display="none"
                                row
                                gap={5}
                                justifyContent="flex-start">
                                {article.tags.map((tag, index) => {
                                    <Pill
                                        key={index}
                                        color={Token.ColorElectric400}
                                        subtle
                                        size="sm">
                                        {tag}
                                    </Pill>
                                })}
                            </View>
                            <Heading
                                as="h2"
                                p={0}
                                m={0}>
                                {article.title}
                            </Heading>
                            <Text
                                fontWeight="bold"
                                colorToken="text-weaker"
                                size="sm"
                                p={0}
                                m={0}>
                                {article.date}
                            </Text>
                            <Text
                                p={0}
                                m={0}>
                                {article.summary}
                            </Text>
                            <Link
                                p={0}
                                m={0} 
                                href={'/blog/' + article.slug}>
                                Read more
                            </Link>
                        </Stack>
                    </View>
                </Card>
            ))}
        </View>
    )
}

Blog.getLayout = function getLayout(page: React.ReactElement) {
    return <BlogLayout>{page}</BlogLayout>
}


/* export default function BlogLayout1(props: any) {
    const { children } = props
    const [showChild, setShowChild] = useState(false)

    useEffect(() => {
        setShowChild(true)
    }, [])

    //if (!showChild) return null

    return (
        <BlogLayout>
            <HeaderComponent
                title="Blog"
            />

            <View 
                p="5rem" 
                m="0 auto"
                className="text-content"
                style={{ maxWidth: 1200 }}>
                {articles.map((article: any, index: number) => (
                    <Card
                        key={index}
                        width={300}
                        header={
                            <Image
                                width="100%"
                                height={250}
                                src={article.image}
                            />
                        }>
                        <View p={20}>
                            <Stack
                                direction="vertical"
                                spacing={10}>
                                <View
                                    display="none"
                                    row
                                    gap={5}
                                    justifyContent="flex-start">
                                    {article.tags.map((tag, index) => {
                                        <Pill
                                            key={index}
                                            color={Token.ColorElectric400}
                                            subtle
                                            size="sm">
                                            {tag}
                                        </Pill>
                                    })}
                                </View>
                                <Heading 
                                    as="h2"
                                    p={0}
                                    m={0}>
                                    {article.title}
                                </Heading>
                                <Text 
                                    fontWeight="bold"
                                    colorToken="text-weaker"
                                    size="sm"
                                    p={0}
                                    m={0}>
                                    {article.date}
                                </Text>
                                <Text
                                    p={0}
                                    m={0}>
                                    {article.summary}
                                </Text>
                                <Link
                                    p={0}
                                    m={0} 
                                    href={'/blog/' + article.slug}>
                                    Read more
                                </Link>
                            </Stack>
                        </View>
                    </Card>
                ))}
            </View>
        </BlogLayout>
    )
}
 */
