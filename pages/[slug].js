import { React, useState } from 'react'
import { useRouter } from 'next/router'
import News from '@/components/News'
import LoadingBar from 'react-top-loading-bar'

const Post = () => {
    const router = useRouter()
    const { slug } = router.query
    const [progress, setProgress] = useState(0)
    if (slug == "sports") {
        return (
            <><LoadingBar height={3} color='#f11946' progress={progress} /><News setProgress={setProgress} category='sports' /></>
        )
    }
    else if (slug == "technology") {
        return (
            <><LoadingBar height={3} color='#f11946' progress={progress} /><News setProgress={setProgress} category='technology' /></>
        )
    }
    else if (slug == "world") {
        return (
            <><LoadingBar height={3} color='#f11946' progress={progress} /><News setProgress={setProgress} category='world' /></>
        )
    }
    else if (slug == "job market") {
        return (
            <><LoadingBar height={3} color='#f11946' progress={progress} /><News setProgress={setProgress} category='job market' /></>
        )
    }
    else if (slug == "movies") {
        return (
            <><LoadingBar height={3} color='#f11946' progress={progress} /><News setProgress={setProgress} category='movies' /></>
        )
    }
    else if (slug == "science") {
        return (
            <><LoadingBar height={3} color='#f11946' progress={progress} /><News setProgress={setProgress} category='science' /></>
        )
    }
    else if (slug == "crosswords & games") {
        return (
            <><LoadingBar height={3} color='#f11946' progress={progress} /><News setProgress={setProgress} category='crosswords & games' /></>
        )
    }
}

export default Post