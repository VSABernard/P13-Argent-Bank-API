import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import chat from '../../assets/icon-chat.png'
import money from '../../assets/icon-money.png'
import security from '../../assets/icon-security.png'

import '../Homepage/Homepage.css'

/**
 * Component React which displays the homepage of the app
 * @component
 */

const Homepage = () => {
    return (
        <div className='home'>
            <Header />
            <main className='main'>
                <div className='hero'>
                    <section className='heroContent'>
                        <h2 className='srOnly'>Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section className="features">
                    <h2 className="srOnly">Features</h2>

                    <div className="featureItem">
                        <img src={chat} alt="Chat Icon" className="featureIcon" />
                        <h3 className="featureItemTitle">You are our #1 priority</h3>
                        <p>
                            Need to talk to a representative? You can get in touch through our
                            24/7 chat or through a phone call in less than 5 minutes.
                        </p>
                    </div>

                    <div className="featureItem">
                        <img src={money} alt="Chat Icon" className="featureIcon" />
                        <h3 className="featureItemTitle">
                            More savings means higher rates
                        </h3>
                        <p>
                            The more you save with us, the higher your interest rate will be!
                        </p>
                    </div>

                    <div className="featureItem">
                        <img src={security} alt="Chat Icon" className="featureIcon" />
                        <h3 className="featureItemTitle">Security you can trust</h3>
                        <p>
                            We use top of the line encryption to make sure your data and money
                            is always safe.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Homepage
