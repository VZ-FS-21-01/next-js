import Head from 'next/head'
import Headline from '../components/Headline'
import styles from '../styles/Home.module.css'

export default function Home() {
  const num = 12
  return (
    <>
      <div>
        <Headline color="red" text="Some Headline" />
      </div>
      <style jsx>{`
      h1 {
        color: ${num < 10 ? "gold" : "purple"};
      }
      div {
        // background: green;
      }
    `}</style>
      <style jsx global>{`
      body {
        // background: lime;
      }
    `}</style>
    </>
  )
}
