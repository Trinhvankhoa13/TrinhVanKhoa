import { db } from '@/lib/firebase'
import { collection } from 'firebase/firestore'
import useSWRSubscription from 'swr/subscription'
 
export function Post({ id }) {
  const { data } = useSWRSubscription(["categories"], ([path], { next }) => {
    const ref = collection(db , path);
    ref.on('value',
      snapshot => next(null, snapshot.data()),
      err => next(err)
    )
    return () => ref.off()
  })
 
  return <span>Your post has {data} views!</span>
}