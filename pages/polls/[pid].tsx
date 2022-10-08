import { GetServerSideProps } from 'next'
import useSWR from 'swr'
import { MetaHeader } from '@/src/components/MetaHeader'
import { PageHeader } from '@/src/components/PageHeader'
import { Footer } from '@/src/components/Footer'
import { PageLayout } from '@/src/layouts/PageLayout'
import { fetcher } from '@/src/utils/fetcher'

import styles from '../../styles/Home.module.css'

type PollDetailProps = {
  id: string
}

const Data = ({ id }: PollDetailProps) => {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/api/v1/polls/${id}`, fetcher)
  
  if (!data) return (<div>loading</div>)
  if (error) return (<div>error</div>)

  if (data.errors.length) {
    return (
      <div>Something went wrong</div>
    )
  }

  return (
    <div className="max-w-xs md:max-w-lg border p-4 rounded border-black dark:border-white">
      <h4 className="text-center font-bold md:text-lg overflow-hidden pb-2">{data?.title}</h4>
      <h5>{data?.description}</h5>
      <h6 className="text-xs py-2">{data?.url}</h6>

      <div>{
        data?.choices?.map((choice: any) => {
          return (<div key={choice._id}>{choice.title} / {choice.totalVotes}</div>)
        })
      }</div>
    </div>
  )
}

const PollDetail = ({ id }: PollDetailProps) => {
  return (
    <>
      <MetaHeader title='Home' />
      
      <PageHeader />

      <PageLayout>
        <main className={styles.main}>
          <Data id={id} />
        </main>
      </PageLayout>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.pid
    }
  }
}


export default PollDetail
