
import * as ReactQuery from 'react-query'

import * as Server_Tours from 'server/Tours'

export const useTours = () => {

  const fetch = async () => (await Server_Tours.api.tours.getAll()).data

  const all = ReactQuery.useQuery({
    queryKey: ['tours'],
    queryFn: fetch,
    select: (dataSet) => dataSet.tours
  })

  return {
    records: all.data
  }
}