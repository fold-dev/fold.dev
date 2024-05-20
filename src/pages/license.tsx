import React from 'react'
import { Heading, Text, View } from '@fold-dev/core'
import { GraphicLeft, GraphicRight } from '../components/graphic.component'
import * as Token from '@fold-dev/design/tokens'

function License(props){
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
                        License
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
                <div>
                
                
                <h1>Fold Pro License Agreement</h1>
                
                <p>This license is a legal agreement between you (either an individual or a single entity, also referred to as "LICENSEE", "YOU") and Fold ("Johannes du Plessis") for the use of Fold Pro (the "SOFTWARE") or Fold Figma Pro (the "DESIGN SYSTEM").</p>
                <p>By purchasing, installing, or using the SOFTWARE or DESIGN SYSTEM, you agree to be bound by the terms and conditions of this License Agreement. Johannes du Plessis (Fold) reserves the right to alter this agreement at any time, for any reason, without notice.</p>

                <h2>Permitted Use</h2>
                
                <h3>Indie License</h3>
                <p>You are granted a license to use the SOFTWARE as the basis of one commercial application, unlimited internal applications and one developer, so long as that application is owned and operated by you, the LICENSEE, or is owned and operated by clients of LICENSEE.</p>

                <h3>Internal License</h3>
                <p>You are granted a license to use the SOFTWARE as the basis of unlimited applications and up to 20 developers, so long as that application is owned and operated by you, the LICENSEE, or is owned and operated by clients of LICENSEE.</p>

                <h2>Restrictions</h2>
                <p>Unless you have been granted prior, written consent from Johannes du Plessis (Fold), you may not:</p>
                <ul>
                <li>At no time may the SOFTWARE be used for development purposes by other individuals than the licensed developer(s).</li>
                <li>The SOFTWARE and/or DESIGN SYSTEM may not be distributed for use with solutions or packaged products other than those developed by you.</li>
                <li>The SOFTWARE and/or DESIGN SYSTEM may not be distributed as part of products that have the same or substantially the same primary functionality.</li>
                <li>You are not allowed to resell, transfer, rent, lease, or sublicense the SOFTWARE, and/or DESIGN SYSTEM and your associated rights.</li>
                <li>Under no circumstances shall you grant further redistribution rights to the end-users of your solution.</li>
                <li>You are not allowed to use, copy, modify, or merge copies of the SOFTWARE, DESIGN SYSTEM, and any accompanying documents except as permitted in this LICENSE.</li>
                </ul>

                <h2>Redistribution Rights</h2>
                <p>You may distribute the SOFTWARE provided that:</p>
                <p>You reasonably ensure that the SOFTWARE is not distributed in any form that allows it to be reused by any application other than your solution. You need to duly inform your customers that they are not allowed to use the SOFTWARE independently from your solution, and that to redistribute the SOFTWARE in any form they must obtain an appropriate license from Johannes du Plessis (Fold).</p>
                <p>You may not redistribute the SOFTWARE to anyone and via any means other than to your customers as a part of a purchased, integrated solution, that includes functionality above and beyond that provided solely by the SOFTWARE.</p>

                <h2>Technical Support</h2>
                <p>Technical support is limited to bug reports and feature requests. No support will be provided to diagnose or advise application-level code issues. If you require more specialised support or consultancy contact us at hello@fold.dev.</p>

                <h2>Refunds</h2>
                <p>Johannes du Plessis (Fold) offers limited refunds on SOFTWARE and DESIGN SYSTEM within 14 days of purchase. Contact hello@fold.dev for assistance.</p>
                <p>If we issue a refund, you agree to delete all files within 24 hours and are not permitted to use SOFTWARE or DESIGN SYSTEM in projects (including personal/non-commercial projects).</p>

                <h2>Indemnity</h2>
                <p>You agree to indemnify and hold harmless Johannes du Plessis (Fold) and its resellers for any third-party claims, actions or suits, as well as any related expenses, liabilities, damages, settlements or fees arising from your use or misuse of the Software, or a violation of any terms of this license.</p>

                <h2>Miscellaneous</h2>
                <p>This license is governed by the laws of The Netherlands. If any provision of this license is to be held unenforceable, such holding will not affect the validity of the other provisions hereof. Failure of a party to enforce any provision of this license shall not constitute or be construed as a waiver of such provision or of the right to enforce such provision. This license represents the entire understanding between the parties with respect to its subject matter.</p>

                <h2>Disclaimer Of Warranty</h2>
                <p>THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF QUALITY, PERFORMANCE, NON-INFRINGEMENT, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE. FURTHER, LARAVEL LLC DOES NOT WARRANT THAT THE SOFTWARE OR ANY RELATED SERVICE WILL ALWAYS BE AVAILABLE.</p>

                <h2>Limitations Of Liability</h2>
                <p>YOU ASSUME ALL RISK ASSOCIATED WITH THE INSTALLATION AND USE OF THE SOFTWARE. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS OF THE SOFTWARE BE LIABLE FOR CLAIMS, DAMAGES OR OTHER LIABILITY ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE. LICENSE HOLDERS ARE SOLELY RESPONSIBLE FOR DETERMINING THE APPROPRIATENESS OF USE AND ASSUME ALL RISKS ASSOCIATED WITH ITS USE, INCLUDING BUT NOT LIMITED TO THE RISKS OF PROGRAM ERRORS, DAMAGE TO EQUIPMENT, LOSS OF DATA OR SOFTWARE PROGRAMS, OR UNAVAILABILITY OR INTERRUPTION OF OPERATIONS.</p></div>

                <p>Last updated 20 May, 2024</p>
                <h2>Contact Information</h2>
                <p>Address: Marine Drive, Umhlanga, KZN, ZA</p>
                <p>Email: legal@fold.dev</p>
            </View>
        </View>
    )
}

License.noLayout = true

export default License
