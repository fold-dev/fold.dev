import React from 'react'
import { Heading, Text, View } from '@fold-dev/core'
import { GraphicLeft, GraphicRight } from '../pages/components/graphic.component'
import * as Token from '@fold-dev/design/tokens'

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
                
                    <GraphicLeft
                        style={{ position: 'absolute', top: 400, left: -200, opacity: 0.2 }}
                        width={1107 / 2}
                        height={559 / 2}
                    />
                </View>
            </View>

            <View p={100}>
                <style>
                    {`
                        h1 {
                            line-height: 4rem;
                            margin: 0.5rem 0 0.5rem 0;
                        }

                        h2 {
                            line-height: 2rem;
                            margin: 1rem 0 1rem 0;
                        }

                        h3 {
                            line-height: 2rem;
                            margin: 1.75rem 0 0rem 0;
                        }

                        h4 {
                            line-height: 1.25rem;
                            margin: 1.75rem 0;
                            font-weight: bold;
                        }

                        h5 {
                            line-height: 1rem;
                            margin: 1.75rem 0;
                        }

                        h6 {
                            line-height: 1rem;
                        }

                        p {
                            line-height: 1.5rem;
                            margin: 1rem 0;
                        }
                    `}
                </style>

                <p>
                    At fold.dev, accessible from https://fold.dev, one of our main priorities is the privacy of our
                    visitors. This Privacy Policy document contains types of information that is collected and recorded by
                    fold.dev and how we use it.
                </p>

                <h2>General Data Protection Regulation (GDPR)</h2>
                <p>We are a Data Controller of your information.</p>

                <p>
                    Fold legal basis for collecting and using the personal information described in this Privacy Policy
                    depends on the Personal Information we collect and the specific context in which we collect the
                    information:
                </p>
                <ul>
                    <li>Fold needs to perform a contract with you</li>
                    <li>You have given Fold permission to do so</li>
                    <li>Processing your personal information is in Fold legitimate interests</li>
                    <li>Fold needs to comply with the law</li>
                </ul>

                <p>
                    Fold will retain your personal information only for as long as is necessary for the purposes set out in
                    this Privacy Policy. We will retain and use your information to the extent necessary to comply with our
                    legal obligations, resolve disputes, and enforce our policies.
                </p>

                <p>
                    If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If
                    you wish to be informed what Personal Information we hold about you and if you want it to be removed
                    from our systems, please contact us.
                </p>

                <p>In certain circumstances, you have the following data protection rights:</p>
                <ul>
                    <li>The right to access, update or to delete the information we have on you.</li>
                    <li>The right of rectification.</li>
                    <li>The right to object.</li>
                    <li>The right of restriction.</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent</li>
                </ul>

                <h2>Log Files</h2>

                <p>
                    fold.dev follows a standard procedure of using log files. These files log visitors when they visit
                    websites. All hosting companies do this and a part of hosting services' analytics. The information
                    collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider
                    (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not
                    linked to any information that is personally identifiable. The purpose of the information is for
                    analyzing trends, administering the site, tracking users' movement on the website, and gathering
                    demographic information.
                </p>

                <h2>Privacy Policies</h2>

                <p>
                    You may consult this list to find the Privacy Policy for each of the advertising partners of fold.dev.
                </p>

                <p>
                    Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that
                    are used in their respective advertisements and links that appear on fold.dev, which are sent directly
                    to users' browser. They automatically receive your IP address when this occurs. These technologies are
                    used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising
                    content that you see on websites that you visit.
                </p>

                <p>
                    Note that fold.dev has no access to or control over these cookies that are used by third-party
                    advertisers.
                </p>

                <h2>Third Party Privacy Policies</h2>

                <p>
                    fold.dev's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to
                    consult the respective Privacy Policies of these third-party ad servers for more detailed information.
                    It may include their practices and instructions about how to opt-out of certain options.{' '}
                </p>

                <p>
                    You can choose to disable cookies through your individual browser options. To know more detailed
                    information about cookie management with specific web browsers, it can be found at the browsers'
                    respective websites.
                </p>

                <h2>Children's Information</h2>

                <p>
                    Another part of our priority is adding protection for children while using the internet. We encourage
                    parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                </p>

                <p>
                    fold.dev does not knowingly collect any Personal Identifiable Information from children under the age of
                    13. If you think that your child provided this kind of information on our website, we strongly encourage
                    you to contact us immediately and we will do our best efforts to promptly remove such information from
                    our records.
                </p>

                <h2>Online Privacy Policy Only</h2>

                <p>
                    Our Privacy Policy applies only to our online activities and is valid for visitors to our website with
                    regards to the information that they shared and/or collect in fold.dev. This policy is not applicable to
                    any information collected offline or via channels other than this website.
                </p>

                <h2>Consent</h2>

                <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
            </View>
        </View>
    )
}

PrivacyPolicy.noLayout = true

export default PrivacyPolicy
