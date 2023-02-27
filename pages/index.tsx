import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { withDefaultLayout } from '@/layouts'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <>
      <div>
        PROVA
      </div>
    </>
  )
}

export default withDefaultLayout(Home)
