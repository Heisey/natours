
import * as Core_Keys from 'core/keys'

export type Months = {
  [key in typeof Core_Keys.Months[number]]: number;
};