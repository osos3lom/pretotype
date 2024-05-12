import { FileType } from '../../../typings'
import React from 'react'
import { Button } from '../ui/button'
import { columns } from './columns'
import {DataTable} from "./Table"

export default function TableWrapper({skeletonFiles}:{skeletonFiles:FileType[]}) {
  return (
    <div>

        <Button> ترتيب</Button>
        <DataTable columns={columns} data={skeletonFiles}/>
    </div>
  )
}
