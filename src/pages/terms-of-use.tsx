import React from 'react'
import { Heading, Text, View } from '@fold-dev/core'
import { GraphicLeft, GraphicRight } from '../components/graphic.component'
import * as Token from '@fold-dev/design/tokens'
import Link from 'next/link'

function TermsOfUse(props){
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
                        Terms of Use
                    </Heading>

                    <Heading
                        as="h3"
                        textAlign="center"
                        colorToken="white"
                        width="80%">
                        These Terms of Use govern your use of this website. By accessing or using this website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use this website.
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
                <h2>Use of Website</h2>
                <p>You may use this website for lawful purposes only. You agree not to use this website in any way that violates any applicable laws or regulations.</p>

                <h2>Intellectual Property</h2>
                <p>All content on this website, including text, graphics, logos, images, and software, is the property of Fold or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, modify, or otherwise use any content from this website without prior written permission.</p>

                <h2>Disclaimer</h2>
                <p>The information provided on this website is for general informational purposes only. The Fold team make no representations or warranties of any kind, express or implied, about the accuracy, reliability, or suitability of the information contained on the website.</p>

                <h2>Limitation of Liability</h2>
                <p>To the fullest extent permitted by law, Fold team shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of this website.</p>

                <h2>Changes to Terms</h2>
                <p>Fold team reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on the website. By continuing to use this website after any changes to these Terms, you agree to be bound by the revised Terms.</p>

                <h2>Governing Law</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at <Link href="mailto:support@fold.dev">support@fold.dev</Link>.</p>

                <h2>Contact Information</h2>
                <p>Address: Marine Drive, Umhlanga, KZN, ZA</p>
                <p>Email: <Link href="mailto:support@fold.dev">support@fold.dev</Link></p>
            </View>
        </View>
    )
}

TermsOfUse.noLayout = true

export default TermsOfUse
