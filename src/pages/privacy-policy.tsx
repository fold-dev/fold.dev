import React from 'react'
import { Heading, Text, View } from '@fold-dev/core'
import { GraphicLeft, GraphicRight } from '../components/graphic.component'
import * as Token from '@fold-dev/design/tokens'
import Link from 'next/link'

function PrivacyPolicy(props) {
    return (
        <View>
            <View
                width="100%"
                p="111px 0 0 0"
                m="-111px 0 0 0"
                position="relative"
                style={{ overflow: 'hidden' }}
                bg={`linear-gradient(175deg, ${Token.ColorElectric700}, ${Token.ColorElectric400})`}>
                <GraphicRight
                    style={{ position: 'absolute', top: -100, right: -100, opacity: 0.2 }}
                    height={882 / 2}
                    width={1456 / 2}
                />

                <View
                    column
                    id="home"
                    gap="1rem"
                    flex={1}
                    width="100%"
                    p="5rem 0"
                    justifyContent="stretch">
                    <Heading
                        textAlign="center"
                        colorToken="white"
                        fontWeight={700}
                        fontSize="6rem"
                        letterSpacing={-5}
                        lineHeight={0.9}>
                        Privacy Policy
                    </Heading>

                    <Heading
                        as="h3"
                        textAlign="center"
                        colorToken="white"
                        width="80%">
                        We value your privacy and are committed to protecting your personal information. 
                        This Privacy Policy outlines our practices regarding the collection, use, and protection of your information when you visit this website.
                    </Heading>

                    <Heading
                        as="h5"
                        textAlign="center"
                        colorToken="white"
                        width="80%">
                        Last updated on 23 May 2024
                    </Heading>
                
                    <GraphicLeft
                        style={{ position: 'absolute', top: 400, left: -200, opacity: 0.2 }}
                        width={1107 / 2}
                        height={559 / 2}
                    />
                </View>
            </View>

            <View p={100} className="legal-content">
                <h2>Information Collection</h2>
                <p>We do not collect or track any personal information about our visitors. You can browse this website without revealing any personal data.</p>

                <h2>Cookies and Tracking</h2>
                <p>We do not use cookies or any other tracking technologies on this website. Your browsing activities are not monitored or recorded in any way.</p>

                <h2>Google Fonts</h2>
                <p>Our website uses Google Fonts for uniform and visually appealing text styling. When you visit our site, your browser loads the required web fonts directly from Google's servers. This means Google may receive your IP address and other data related to your browser and device.</p>

                <h2>Third-Party Links</h2>
                Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites and encourage you to review their privacy policies.

                <h2>Changes to This Policy</h2>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date of the latest revision will be indicated at the top.

                <h2>Contact Us</h2>
                If you have any questions or concerns about this Privacy Policy, please contact us at <Link href="mailto:support@fold.dev">support@fold.dev</Link>.
                
                <h2>Consent</h2>
                <p>By using this website, you hereby consent to our Privacy Policy and agree to its terms.</p>

                <h2>Contact Information</h2>
                <p>Address: Marine Drive, Umhlanga, KZN, ZA</p>
                <p>Email: <Link href="mailto:support@fold.dev">support@fold.dev</Link></p>
            </View>
        </View>
    )
}

PrivacyPolicy.noLayout = true

export default PrivacyPolicy
