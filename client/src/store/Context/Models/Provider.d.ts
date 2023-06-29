
import * as React from 'react'

import * as Stores from '../../';

export interface Provider {
  store: Stores.Root;
  children: React.ReactNode;
}