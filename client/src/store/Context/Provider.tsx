
import * as GlobalContext from './'

import * as M_Context from './Models'

export const Provider: React.FC<M_Context.Provider> = (props) => {
  return (
    <GlobalContext.Context.Provider 
      value={props.store}
    >
      {props.children}
    </GlobalContext.Context.Provider>
  )
}