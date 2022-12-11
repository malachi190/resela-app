import React from 'react'
import { Header, Footer } from '../homepage'
import Download from './Download'
import Progress  from './Progress'
import Table from './Table'
import DetailedAnalysis from './DetailedAnalysis'
import CardSection from './CardSection'
import Harrow from './Harrow'

const Features = () => {
  return (
    <>
      <Header />
      <Progress />
      <Table />
      <DetailedAnalysis />
      <CardSection />
      <Harrow />
      <Download />
      <Footer />
    </>
  )
}

export default Features
