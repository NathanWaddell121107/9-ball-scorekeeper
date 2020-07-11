import * as React from 'react'
import Layout from '../src/components/layout/layout'
import Header from '../src/components/landing page/header'
import ScoreTracker from '../src/components/score-keeping/score-tracker'

const ScoreKeepingPage = () => {
  return (
    <Layout>
      <Header />
      <ScoreTracker />
    </Layout>
  )
}

export default ScoreKeepingPage
