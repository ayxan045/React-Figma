import React from 'react'
import Adobe from '../../components/adobe/Adobe'
import Header from '../../components/header/Header'
import Resources from '../../components/resources/Resources'
import "./about.scss"

const About = () => {
  return (
    <section className="about">
    <Header />
    <div className="container">
    <Resources />
    <Adobe />
    </div>
    </section>
  )
}

export default About