import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Home.module.css"

function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
      </Head>
      <main className={styles.main}>
        <h1>Blog</h1>
        <Link href="/">Home</Link>
      </main>
    </div>
  )
}

export default Blog
