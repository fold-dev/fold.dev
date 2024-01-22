import { Heading, Link, LogoSolid, Text, View } from '@fold-dev/core'

export default (props) => {
    return (
        <View
            className="mobile-component"
            column
            gap={10}
            p={20}>
            <LogoSolid size="lg" />
            <Heading textAlign="center">Mobile support coming soon.</Heading>
            <Text
                size="xl"
                textAlign="center">
                Please view the site on a desktop device, mobile support{' '}
                <Link size="xl" href="https://github.com/orgs/fold-dev/projects/8" target="_blank">is coming soon</Link>.
            </Text>
        </View>
    )
}
