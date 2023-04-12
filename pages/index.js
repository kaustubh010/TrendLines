import { React, useState } from 'react'
import News from '@/components/News';
import LoadingBar from 'react-top-loading-bar'

const Index = () => {
  const [progress, setProgress] = useState(0)

  return (
    <>
    <LoadingBar height={3} color='#f11946' progress={progress} />
    <News setProgress={setProgress} category='science'/>
    </>
  )
}

export default Index