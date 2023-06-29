
import * as React from 'react'
import * as ReactQuery from 'react-query'

import * as _M from './Props'

const QueryProvider: React.FC<_M.Props> = (props) => {

  const client = new ReactQuery.QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

  return (
    <ReactQuery.QueryClientProvider client={client}>
      {props.children}
    </ReactQuery.QueryClientProvider>
  )
}

export const Component = QueryProvider