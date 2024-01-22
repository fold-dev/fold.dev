import { Heading, Link, LogoSolid, Text, View } from '@fold-dev/core'

export default (props) => {
    return (
        <View
            className="mobile-component"
            column
            gap={10}
            p={50}>
            <LogoSolid size="lg" />
            <Heading textAlign="center">Mobile support coming soon.</Heading>
            <Text
                size="xl"
                textAlign="center">
                Please view the site on a desktop device, mobile support{' '}
                <Link size="xl">is coming soon</Link>.
            </Text>
        </View>
    )
}
