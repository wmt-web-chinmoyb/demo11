import { Table } from 'antd'
import React from 'react'
import './NormalTable.scss'

const NormalTable = (props) => {

    const { dataSource, columns, heading } = props

    return (
        <div data-testid="normal-table">
            {heading ?<div className="fs-18 text-bolder mb-3" data-testid="normal-table-heading">{heading}</div>:null}
            <div className='table-box'>
                <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{x: 400}} data-testid="table-comp"/>
            </div>
        </div>
    )
}

export default NormalTable