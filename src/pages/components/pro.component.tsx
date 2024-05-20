import { FIX, Icon, Option, Options, Pill, Text, View } from '@fold-dev/core'
import * as Token from '@fold-dev/design/tokens'
import {
    DataGrid,
    DataGridHeader,
    DataGridTypes,
    dataGridState,
    dispatchDataGridEvent,
    setExperimentalGlobalRowCellComponents,
} from '@fold-pro/react'
import { useLayoutEffect, useState } from 'react'
import * as data from '@/dummy_data'

export const Borderless = () => {
    const [columnWidths, setColumnWidths] = useState(data.widths)
    const [columns, setColumns] = useState<DataGridTypes.Column[]>(data.columns)
    const [footerColumns, setFooterColumns] = useState<DataGridTypes.Column[]>(data.footer)
    const [rows, setRows] = useState<DataGridTypes.Cell[][]>(data.rows)

    const handleColumnMove = ({ origin, target }) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleColumnMove({ origin, target })
    }

    const handleRowMove = ({ origin, target }) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleRowMove({ origin, target })
    }

    const handleColumnClick = (index, column: DataGridTypes.Column) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleColumnClick(index, column)
    }

    const handleCellUpdate = ({ value, row, col }) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleCellUpdate({ value, row, col })
    }

    const handleCellDelete = ({ row, col }) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleCellDelete({ row, col })
    }

    useLayoutEffect(() => {
        // Why do we do this?
        // Specifying a custom component on each row cell is supported,
        // however to optimise render performance (for larger datasets),
        // a global array of custom components is stored that is accessible
        // to each row cell at render time. We store it as a global variable
        // to not pollute the Context (for now).
        setExperimentalGlobalRowCellComponents(data._rowCellComponents)
    }, [])

    return (
        <div
            style={
                {
                    '--f-data-grid-row-padding-left': '3rem',
                    '--f-data-grid-row-padding-right': '3px',
                } as any
            }>
            <DataGrid
                border="0"
                id="instance-1"
                // provider:
                defaultCellSelection={{}}
                defaultRowSelection={{}}
                draggableColumns
                draggableRows
                maxRowsSelectable={undefined}
                singleRowSelect={false}
                onSelect={({ rows, cols }: any) => null}
                // core:
                // height={467}
                // variant="default"
                variant="virtual"
                virtual={{
                    rows: 10,
                    rowHeight: 40,
                    paddingTop: 40,
                    paddingBottom: 30,
                }}
                hideCheckbox={false}
                hideGutter={false}
                rows={rows}
                columnWidths={columnWidths}
                header={
                    <DataGridHeader
                        resizableColumns
                        columns={columns}
                        onColumnClick={handleColumnClick}
                        onWidthChange={(index, width) =>
                            setColumnWidths(columnWidths.map((w, i) => (i == index ? width : w)))
                        }
                    />
                }
                footer={
                    <DataGridHeader
                        hideCheckbox
                        component={data.FooterCell}
                        columns={footerColumns}
                        style={{
                            '--f-data-grid-cell-height': '30px',
                            'bottom': 0,
                        }}
                    />
                }
                pinFirst
                pinLast
                onCellUpdate={handleCellUpdate}
                onCellDelete={handleCellDelete}
                onColumnMove={handleColumnMove}
                onRowMove={handleRowMove}
                toolbar={({ rowSelection, cellSelection }) => (
                    <View
                        row
                        position="absolute"
                        bgToken="surface-inverse"
                        colorToken="text-on-color"
                        p="1rem 2rem"
                        radius="var(--f-radius)"
                        shadow="var(--f-shadow-xl)"
                        zIndex={1000}
                        gap={10}
                        display={
                            !Object.values(rowSelection).length &&
                            Object.values(cellSelection).length < 2
                                ? 'none'
                                : 'flex'
                        }
                        style={{ bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
                        <Text color="inherit">
                            {Object.values(rowSelection).length} rows, &nbsp;
                            {Object.values(cellSelection).length} cells
                        </Text>
                        <Icon
                            icon={FIX}
                            className="f-buttonize"
                            onClick={() => {
                                dispatchDataGridEvent('select-cells', { instanceId: 'instance-1' })
                                dispatchDataGridEvent('select-rows', { instanceId: 'instance-1' })
                            }}
                        />
                    </View>
                )}
            />
        </div>
    )
}

export const ProComponent = () => {
    const [option, setOption] = useState(4)

    return (
        <View
            row
            height="fit-content"
            zIndex={10}
            position="relative"
            m="-500px 0 0 0">
            <View
                bgToken="surface"
                width="95%"
                p="1rem"
                radius="var(--f-radius)"
                justifyContent="flex-start"
                alignContent="flex-start"
                alignItems="flex-start"
                position="relative">
                <Options
                    m="0 auto 1rem auto"
                    animated
                    position="relative"
                    zIndex={10000}
                    selected={option}
                    onOptionChange={setOption}>
                    <Option>Kanban Board</Option>
                    <Option>Todo List</Option>
                    <Option>Calendar</Option>
                    <Option>CSV Importer</Option>
                    <Option
                        suffix={
                            <Pill
                                color={Token.ColorAccent400}
                                size="xs"
                                subtle>
                                BETA
                            </Pill>
                        }>
                        Data Grid
                    </Option>
                    <Option>Date Picker</Option>
                </Options>

                <View
                    width="100%"
                    height="fit-content"
                    position="relative"
                    zIndex={0}>
                    <Borderless />
                </View>
            </View>
        </View>
    )
}
