
import * as ReactQuery from 'react-query'

import * as Server_Guides from 'server/Guides'

const queryKey = 'guides'



export const useGuides = () => {

  const fetch = async () => {
    const response = await Server_Guides.api.Info.getAll()

    return response.data
  }

  const all = ReactQuery.useQuery({
    queryKey,
    queryFn: fetch,
    select: (dataSet) => dataSet.records
  })

  const guide = ReactQuery.useQuery({
    queryKey,
    queryFn: fetch,
    select: (dataSet) => dataSet.records.filter(data => data.role === 'guide')
  })

  // const leadGuides = ReactQuery.useQuery({
  //   queryKey,
  //   queryFn: fetch,
  //   select: (dataSet) => dataSet.records.filter(data => data.role === 'lead-guide')
  // })

  return {
    all,
    guide
  }
}