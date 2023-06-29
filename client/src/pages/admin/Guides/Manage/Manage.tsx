
import * as React from 'react'

import * as Icons from 'assets/icons'
import * as Card from 'components/common/Cards/Card'
import * as InfoCard from 'components/common/Cards/InfoCard'
import * as Table from 'components/common/Table/Table'
import * as TableBody from 'components/common/Table/Body'
import * as TableCell from 'components/common/Table/Cell'
import * as TableHeadCell from 'components/common/Table/HeadCell'
import * as TableHeader from 'components/common/Table/Header'
import * as TableRow from 'components/common/Table/Row'
import * as Hooks from 'hooks'

import * as Styles from './styles'

const Manage: React.FC = () => {

  const guides = Hooks.Server.useGuides()

  const TableHead = () => (
    <TableHeader.Component>
      <TableHeadCell.Component>id</TableHeadCell.Component>
      <TableHeadCell.Component>name</TableHeadCell.Component>
      <TableHeadCell.Component>email</TableHeadCell.Component>
      <TableHeadCell.Component>role</TableHeadCell.Component>
    </TableHeader.Component>
  )

  const TableData = () => (
    <TableBody.Component>
      {guides.all.data?.map(dataSet => (
        <TableRow.Component>
          <TableCell.Component>{dataSet._id}</TableCell.Component>
          <TableCell.Component>{dataSet.firstName} {dataSet.lastName}</TableCell.Component>
          <TableCell.Component>{dataSet.email}</TableCell.Component>
          <TableCell.Component>{dataSet.role}</TableCell.Component>
        </TableRow.Component>
      ))}
    </TableBody.Component>
  )

  const generateTable = () => (
    <Table.Component 
      header={<TableHead />}
      body={<TableData />}
    />
  )

  return (
    <Styles.Manage>
      <div>
        <InfoCard.Component icon={<Icons.Outline.Calendar size='30' />} label='active guides' data={6} />
        <InfoCard.Component icon={<Icons.Outline.Calendar size='30' />} label='active guides' data={6} />
        <InfoCard.Component icon={<Icons.Outline.Calendar size='30' />} label='active guides' data={6} />
      </div>
      <div>
        <Card.Component>
          {guides.guide.data && generateTable()}
          {!guides.guide.data && <div>no data</div>}
        </Card.Component>
      </div>
    </Styles.Manage>
  )
}

export const Component = Manage