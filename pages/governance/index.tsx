import { MetaHeader } from '@/src/components/MetaHeader'
import { PageHeader } from '@/src/components/PageHeader'
import { Footer } from '@/src/components/Footer'
import { PageLayout } from '@/src/layouts/PageLayout'

import styles from '../../styles/Home.module.css'

type Props = {
  governers: any[]
}

const Governors = ({ governers }: Props) => {  
  return (
    <>
      <MetaHeader title='Home' />
      
      <PageHeader />

      <PageLayout>
        
        <main className={styles.main}>
          <h2 className="text-center mb-4">{governers.length > 0 ? 'Active' : 'No Active'} Governers</h2>

        </main>
      </PageLayout>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.REACT_APP_BACKEND_API}/api/v1/governors`)
  console.log(res)
  const governers = await res?.json()
  return {
    props: {
      governers,
    }, // will be passed to the page component as props
  }
}

export default Governors
