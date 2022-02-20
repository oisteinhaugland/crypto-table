import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Table from '../components/Table/Table'
import { ICryptoData } from "../shared/interfaces";
import { API_URL } from '../shared/constants'

interface Props {
  data : ICryptoData
}

export default function Home({data}:Props){

  const entryList = data.Data.Data;
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Table</title>
        <meta name="description" content="Crypto Table" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Table entries={entryList} pageLimit={20} />

      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}

export const getServerSideProps = async () => { 
  const res = await fetch(API_URL)
  const data = await res.json()

  return {
    props: {
      data: data
    }, // will be passed to the page component as props
  }
}

