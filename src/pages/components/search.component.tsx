import {
    Button,
    FISearch,
    Flexer,
    Header,
    Heading,
    Icon,
    Input,
    InputControl,
    InputSuffix,
    Menu,
    MenuItem,
    Pill,
    Popover,
    Stack,
    Text,
    View,
    getKey,
    useEvent,
    useVisibility,
} from '@fold-dev/core'
import {
    ChatBubbleBottomCenterIcon,
    ChatBubbleLeftEllipsisIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    CircleStackIcon,
    CubeIcon,
    HashtagIcon,
    UserIcon,
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'

export const plural = (qty, str) => (qty == 1 ? str : str + 's')

const SearchRow = ({ title, description, resource, type, selected, onSelect }) => {
    const [over, setOver] = useState(false)
    const icon = useMemo(() => {
        switch (type) {
            case 'message':
                return ChatBubbleBottomCenterIcon
            case 'task':
                return CheckCircleIcon
            case 'task-comment':
                return ChatBubbleLeftEllipsisIcon
            case 'user':
                return UserIcon
            case 'channel':
                return HashtagIcon
            default:
                return CubeIcon
        }
    }, [type])

    return (
        <View
            row
            p="0.5rem 1rem"
            gap={10}
            width="100%"
            colorToken="text-weaker"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            bgToken={selected || over ? 'surface-strong' : undefined}
            onMouseEnter={() => setOver(true)}
            onMouseLeave={() => setOver(false)}
            onClick={onSelect}
            className="f-buttonize">
            <Icon icon={icon} />
            <Text
                width={100}
                display="block">
                {title}
            </Text>
            <View
                flex={1}
                style={{ overflow: 'hidden' }}>
                <Text
                    size="sm"
                    width="100%"
                    display="block"
                    className="f-ellipsis"
                    colorToken="text-weakest">
                    {description}
                </Text>
            </View>
            <Pill
                size="sm"
                style={{ textTransform: 'capitalize' }}>
                {type}
            </Pill>
        </View>
    )
}

export const SearchComponent = (props: any) => {
    const [index, setIndex] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const open = useMemo(() => !!results.length, [results.length])
    const router = useRouter()

    const handleFocus = (e) => {
        setTimeout(() => searchPages(''), 500)
    }

    const handleResultSelect = ({ title, subtitle, type, slug, resource, description }) => {
        setResults([])
        setSearch('')
        router.push('/docs/core/' + slug)
    }

    const searchPages = async (query) => {
        setLoading(true)
        setError(false)

        try {
            const response = await fetch('/api/search?query=' + query)
            const { results } = await response.json()

            setLoading(false)
            setResults(
                results.slice(0, 7).map(({ title, subtitle, description, slug }) => ({
                    title,
                    subtitle,
                    description,
                    resource: 'Something?',
                    type: 'component',
                    slug,
                }))
            )
        } catch (e) {
            setLoading(false)
            setError(true)
        }
    }

    const handleKeyDown = (e) => {
        const { isDown, isUp, isEscape } = getKey(e)

        if (isUp) {
            e.preventDefault()
            setIndex(index == 0 ? results.length - 1 : index - 1)
        }

        if (isDown) {
            e.preventDefault()
            setIndex(index == results.length - 1 ? 0 : index + 1)
        }

        if (isEscape) {
            setResults([])
        }
    }

    const handleGlobalKeyDown = (e) => {
        const { isEnter } = getKey(e)

        if (isEnter) {
            e.preventDefault()
            handleResultSelect(results[index])
        }
    }

    useEvent('keydown', handleGlobalKeyDown)

    useEffect(() => {
        setIndex(0)
    }, [results.length])

    return (
        <Popover
            arrow
            width="100%"
            anchor="bottom-center"
            isVisible={open}
            onDismiss={() => {
                setResults([])
                setSearch('')
            }}
            content={
                <View
                    p={10}
                    column
                    alignItems="flex-start">
                    <Heading
                        as="h6"
                        p="0.5rem 1rem"
                        m="0 0 0.2rem 0"
                        colorToken="text-weakest">
                        Found {results.length} {plural(results.length, 'result')}
                    </Heading>
                    {results.map((result: any, i: number) => (
                        <SearchRow
                            key={i}
                            title={result.title}
                            description={result.subtitle}
                            resource={result.resource}
                            type={result.type}
                            selected={index == i}
                            onSelect={() => handleResultSelect(result)}
                        />
                    ))}
                </View>
            }>
            <View
                p="0 0 0 0.5rem"
                flex={1}>
                <InputControl>
                    <Input
                        placeholder="Search"
                        value={search}
                        onFocus={handleFocus}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => {
                            setSearch(e.target.value)
                            searchPages(e.target.value)
                        }}
                    />
                    <InputSuffix>
                        <Icon
                            icon={FISearch}
                            className="f-buttonize"
                        />
                    </InputSuffix>
                </InputControl>
            </View>
        </Popover>
    )
}

export default SearchComponent
