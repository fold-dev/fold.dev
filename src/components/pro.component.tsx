import { Option, Options, Pill, View } from '@fold-dev/core'
import * as Token from '@fold-dev/design/tokens'
import { useState } from 'react'
import { WeekView as Calendar } from '../pages/docs/pro/calendar.mdx'
import { Usage as CSVImporter } from '../pages/docs/pro/csv-importer.mdx'
import { Borderless as DataGrid } from '../pages/docs/pro/data-grid.mdx'
import { MultipleMonths as DatePicker } from '../pages/docs/pro/date-picker.mdx'
import { Usage as Kanban } from '../pages/docs/pro/kanban.mdx'
import { Usage as Todo } from '../pages/docs/pro/todo.mdx'

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
                style={{ 
                    maxHeight: 1000, 
                    overflow: 'scroll' 
                }}
                radius="var(--f-radius)"
                justifyContent="flex-start"
                alignContent="flex-start"
                alignItems="flex-start"
                position="relative">
                <Options
                    m="0 auto 2rem auto"
                    animated
                    position="sticky"
                    style={{ top: 10 }}
                    zIndex={1000}
                    selected={option}
                    onOptionChange={setOption}>
                    <Option>Kanban Board</Option>
                    <Option>Todo List</Option>
                    <Option>Calendar</Option>
                    <Option>CSV Importer</Option>
                    <Option>Data Grid</Option>
                    <Option>Date Picker</Option>
                </Options>

                <View
                    width="100%"
                    height="fit-content"
                    position="relative"
                    zIndex={0}>
                    {option == 0 && (<Kanban />)}
                    {option == 1 && (<Todo />)}
                    {option == 2 && (<Calendar />)}
                    {option == 3 && (<CSVImporter />)}
                    {option == 4 && (<DataGrid />)}
                    {option == 5 && (<View row><DatePicker /></View>)}
                </View>
            </View>
        </View>
    )
}
