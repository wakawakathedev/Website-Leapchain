import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { MetaHeader } from '@/src/components/MetaHeader'
import { PageHeader } from '@/src/components/PageHeader'
import { Footer } from '@/src/components/Footer'
import { PageLayout } from '@/src/layouts/PageLayout'

import { Poll } from '@/src/types/Polls'

import styles from '../../styles/Home.module.css'


const PollDetail = () => {
  const router = useRouter()
  const {pid} = router.query

  

  return (
    <>
      <MetaHeader title='Home' />
      
      <PageHeader />

      <PageLayout>
        <main className={styles.main}>
          <div className='mt-8'>
            <h2 className="text-center mb-4">{pid}</h2>
          </div>
        </main>
      </PageLayout>
      <Footer />
    </>
  )
}



// export async function getStaticProps({ params }) {
//   const id = params.id
//   const res = await fetch(`${process.env.REACT_APP_BACKEND_API}/api/v1/polls/${id}`)

//   const poll = await res?.json()
//   return {
//     props: {
//       poll,
//     }, // will be passed to the page component as props
//   }
// }

export default PollDetail
