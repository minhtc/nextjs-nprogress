import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.main}>
        <h1>Home</h1>
        <Link href="/blog">Blog</Link>
      </main>
    </div>
  )
}
