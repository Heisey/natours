
import * as Checkbox from 'components/Inputs/Checkbox'

export interface Props<T> {
  title: string
  filters: Checkbox.Props[]
  updateFilters: (args: T) => void
}