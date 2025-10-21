import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import SEO from '../../components/SEO/SEO'

function Main() {
    return (
        <div>
            <SEO />
            <Navbar />        
            <Landing />
            <About />
            <Skills />
            <Education />            
            <Experience />  
            <Achievement />          
            <Projects />
            <Services />
            <Testimonials />
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
