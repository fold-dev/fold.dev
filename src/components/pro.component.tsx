import * as data from '@/dummy-data'
import {
    Button, Card, FIBin, FIX, Flexer,
    Form,
    Heading, Icon, Input, Link, Menu, MenuProvider, MenuSection, Modal, Option, Options, Pill, Portal,
    Text, View, generateUEID,
    useDialog
} from '@fold-dev/core'
import * as Token from '@fold-dev/design/tokens'
import {
    CalendarDays, CalendarProvider, CalendarSchedule, CsvImporter, DataGrid,
    DataGridHeader,
    DataGridTypes, DatePicker, DateRangeProvider, Detail,
    Kanban,
    KanbanColumnMenu, KanbanSelection, KanbanSwimlaneMenu, KanbanTypes, LabelMenu, Popup, Todo, TodoSectionMenu, UserMenu, dataGridState,
    dispatchDataGridEvent, dispatchKanbanEvent, dispatchTodoEvent, getShortDateFormat, kanbanState,
    todoState
} from '@fold-pro/react'
import { useMemo, useState } from 'react'

export const Calendar1 = () => {
    const [days, setDays] = useState(data.days)
    const [custom, setCustom] = useState(data.custom)
    const [date, setDate] = useState(data.date)
    const [events, setEvents] = useState(data.events)
    const [event, setEvent] = useState<any>({})
    const [title, setTitle] = useState('')
    const { setDialog, closeDialog } = useDialog()

    const handleEventUpdate = (ev) => {
        setEvents(events.map((event) => (event.id == ev.id ? { ...event, ...ev } : event)))
    }

    const handleEventDelete = (ev) => {
        setDialog({
            title: 'Are you sure?',
            description: 'This action cannot be undone.',
            footer: (
                <View
                    row
                    width="100%"
                    justifyContent="space-between">
                    <Button onClick={closeDialog}>Cancel</Button>
                    <Button
                        onClick={() => {
                            setEvents(events.filter((event) => event.id != ev.id))
                            closeDialog()
                        }}
                        variant="danger">
                        Delete
                    </Button>
                </View>
            ),
        })
    }

    const handleEventOpen = (event) => {
        setEvent(event)
    }

    const getMenu = ({ data: { target, payload }, dismiss }) => {
        return (
            <Popup
                colorPalette={data.colorPalette}
                item={{ ...payload }}
                onCancel={dismiss}
                onSave={(event) => {
                    dismiss()
                    handleEventUpdate({ ...payload, ...event })
                }}
                onView={() => {
                    dismiss()
                    setEvent(payload)
                }}
                onDelete={() => {
                    dismiss()
                    handleEventDelete(payload)
                }}
            />
        )
    }

    return (
        <>
            {!!event.id && (
                <Detail
                    colorPalette={data.colorPalette}
                    availableLabels={data.availableLabels}
                    availableUsers={data.availableUsers}
                    item={event}
                    onCancel={() => setEvent({})}
                    onSave={(event) => {
                        handleEventUpdate(event)
                        setEvent({})
                    }}
                    onDelete={(event) => {
                        handleEventDelete(event)
                        setEvent({})
                    }}
                />
            )}

            <MenuProvider menu={getMenu}>
                <CalendarProvider
                    dimPastEvents={false}
                    hideDateLabels={true}
                    scheduleEvent={undefined}
                    monthEvent={undefined}
                    onEventOpen={handleEventOpen}
                    onEventUpdate={handleEventUpdate}
                    onEventAdd={({ done, event }) => {
                        return (
                            <Modal
                                portal={Portal}
                                isVisible={true}
                                onDismiss={done}
                                header={<Heading as="h3">Create New Event</Heading>}
                                footer={
                                    <View
                                        row
                                        width="100%">
                                        <Button onClick={done}>Cancel</Button>
                                        <Flexer />
                                        <Button
                                            onClick={() => {
                                                setEvents([...events, { ...event, title, id: generateUEID() }])
                                                done()
                                            }}
                                            variant="accent"
                                            outline>
                                            Save
                                        </Button>
                                    </View>
                                }>
                                <Form
                                    column
                                    gap="1rem"
                                    onSubmit={() => {
                                        setEvents([...events, { ...event, title, id: generateUEID() }])
                                        done()
                                    }}
                                    width="100%">
                                    <Input
                                        autoFocus
                                        size="lg"
                                        placeholder="Enter event name"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Form>
                            </Modal>
                        )
                    }}>
                    <View
                        row
                        p="0 0 0 var(--f-calendar-schedule-gutter-width)"
                        width="100%">
                        {days.map(({ date }, index) => {
                            return (
                                <Text
                                    flex={1}
                                    p="1rem"
                                    fontWeight="bold"
                                    textAlign="center"
                                    key={index}>
                                    {getShortDateFormat(date)}
                                </Text>
                            )
                        })}
                    </View>
                    <View
                        p="0 0 0 var(--f-calendar-schedule-gutter-width)"
                        width="100%"
                        m="0 0 -1px 0">
                        <CalendarDays
                            noClamp
                            date={date}
                            events={events.filter((e) => e.allDay)}
                            custom={custom}
                            height="fit-content"
                        />
                    </View>
                    <View
                        width="100%"
                        flex={1}>
                        <CalendarSchedule
                            days={days}
                            events={events.filter((e) => !e.allDay)}
                        />
                    </View>
                </CalendarProvider>
            </MenuProvider>
        </>
    )
}

export const CSVImporter1 = () => {
    return (
        <CsvImporter
            step={1}
            separator=","
            onComplete={(data) => console.log('data', data)}
            csvData={data.csv}
            defaultRecords={data.records}
            defaultHeader={data.headers}
            defaultMapping={data.mapping}
            schema={[
                { key: 'customer-id', label: 'Customer ID', type: 'string' },
                { key: 'first-name', label: 'First Name', type: 'string' },
                { key: 'last-name', label: 'Last Name', type: 'string' },
                { key: 'company', label: 'Company', type: 'string' },
                { key: 'website', label: 'Website', type: 'string' },
                {
                    key: 'email',
                    label: 'Email',
                    type: 'string',
                    validate: ({ value }) => {
                        const valid = String(value)
                            .toLowerCase()
                            .match(
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            )

                        if (valid) {
                            return []
                        } else {
                            return ['Not a valid email address']
                        }
                    },
                },
                {
                    key: 'subscription-date',
                    label: 'Subscription Date',
                    type: 'date',
                    transform: ({ value }) => {
                        return new Date(value).toLocaleDateString('en-US', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })
                    },
                },
            ]}
            toolbar={
                <View
                    row
                    gap={5}
                    justifyContent="flex-start">
                    <Link
                        href="https://drive.google.com/uc?id=1x2IdSNcHGLmot9i1h90gwMJr5lULC2QV&export=download"
                        target="_blank">
                        Download CSV file ↗
                    </Link>
                </View>
            }
        />
    )
}

export const DataGrid1 = () => {
    const [columnWidths, setColumnWidths] = useState(data.widths)
    const [columns, setColumns] = useState<DataGridTypes.Column[]>(data.columns)
    const [footerColumns, setFooterColumns] = useState<DataGridTypes.Column[]>(data.footer)
    const [columnTypes, setColumnTypes] = useState(data.columnTypes)
    const [rows, setRows] = useState<DataGridTypes.Cell[][]>(data.rows)
    const { setDialog, closeDialog } = useDialog()

    const handleColumnMove = ({ origin, target }) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columnTypes,
            setColumnTypes,
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
            columnTypes,
            setColumnTypes,
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
            columnTypes,
            setColumnTypes,
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
            columnTypes,
            setColumnTypes,
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
            columnTypes,
            setColumnTypes,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleCellDelete({ row, col })
    }

    return (
        <MenuProvider
            menu={({ data: { target, payload }, dismiss }) => (
                <Menu>
                    <MenuSection>Menu for: {target}</MenuSection>
                </Menu>
            )}>
            <DataGrid
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
                rows={rows}
                columnWidths={columnWidths}
                columnTypes={columnTypes}
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
                        display={!Object.values(rowSelection).length ? 'none' : 'flex'}
                        style={{ bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
                        <Text color="inherit">
                            {Object.values(rowSelection).length}{' '}
                            {Object.values(rowSelection).length == 1 ? 'row' : 'rows'} selected
                        </Text>
                        <Icon
                            icon={FIBin}
                            className="f-buttonize"
                            onClick={() => {
                                setDialog({
                                    title: 'Are you sure?',
                                    description: 'This action cannot be undone.',
                                    portal: Portal,
                                    footer: (
                                        <View
                                            width="100%"
                                            row
                                            justifyContent="space-between">
                                            <Button onClick={closeDialog}>Cancel</Button>
                                            <Button
                                                variant="danger"
                                                onClick={() => {
                                                    const rowIndexes = Object.keys(rowSelection).map(
                                                        (key: any) => +key.split('-')[1]
                                                    )
                                                    setRows(rows.filter((_, index) => !rowIndexes.includes(index)))
                                                    closeDialog()
                                                    dispatchDataGridEvent('select-rows', { instanceId: 'instance-1' })
                                                }}>
                                                Delete
                                            </Button>
                                        </View>
                                    ),
                                })
                            }}
                        />
                    </View>
                )}
            />
        </MenuProvider>
    )
}

export const Kanban1 = () => {
    const [swimlanes, setSwimlanes] = useState<KanbanTypes.Swimlane[]>([data.swimlanes[0]])
    const [card, setCard] = useState<any>({})
    const { setDialog, closeDialog } = useDialog()

    const handleCardMove = ({ origin, target }, selection: KanbanSelection[]) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleCardMove({ origin, target }, selection)
    }

    const handleColumnMove = ({ origin, target }) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleColumnMove({ origin, target })
    }

    const handleSwimlaneMove = ({ origin, target }) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleSwimlaneMove({ origin, target })
    }

    const handleCardOpen = (card) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleCardOpen(card)
    }

    const handleCardAdd = ({ value, swimlaneIndex, columnIndex }) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleCardAdd({ value, swimlaneIndex, columnIndex })
    }

    const handleCardUpdate = (ca) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleCardUpdate(ca)
    }

    const handleCardDelete = (ca) => {
        setDialog({
            title: 'Are you sure?',
            description: 'This action cannot be undone.',
            footer: (
                <View
                    row
                    width="100%"
                    justifyContent="space-between">
                    <Button onClick={closeDialog}>Cancel</Button>
                    <Button
                        onClick={() => {
                            kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleCardDelete(ca)
                            closeDialog()
                        }}
                        variant="danger">
                        Delete
                    </Button>
                </View>
            ),
        })
    }

    const handleColumnAdd = ({ value, swimlaneIndex }) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleColumnAdd({ value, swimlaneIndex })
    }

    const handleColumnUpdate = (col) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleColumnUpdate(col)
    }

    const handleColumnDelete = (col) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleColumnDelete(col)
    }

    const handleSwimlaneUpdate = (sl) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleSwimlaneUpdate(sl)
    }

    const handleSwimlaneDelete = (sl) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleSwimlaneDelete(sl)
    }

    const getMenu = ({ data: { target, payload }, dismiss }) => {
        switch (target) {
            case 'kanban-label':
                return (
                    <LabelMenu
                        onFilter={(value) => console.log('filter', value)}
                        availableLabels={data.availableLabels}
                        labels={payload.labels}
                        onCancel={dismiss}
                        onSave={(labels) => {
                            handleCardUpdate({ ...payload, labels })
                            dismiss()
                        }}
                    />
                )
            case 'kanban-user':
                return (
                    <UserMenu
                        onFilter={(value) => console.log('filter', value)}
                        availableUsers={data.availableUsers}
                        users={payload.users}
                        onCancel={dismiss}
                        onSave={(users) => {
                            handleCardUpdate({ ...payload, users })
                            dismiss()
                        }}
                    />
                )
            case 'kanban-menu':
                return (
                    <Popup
                        colorPalette={data.colorPalette}
                        item={payload}
                        onCancel={dismiss}
                        onSave={(card) => {
                            dismiss()
                            handleCardUpdate({ ...payload, ...card })
                        }}
                        onView={() => {
                            dismiss()
                            setCard(payload)
                        }}
                        onDelete={() => {
                            dismiss()
                            handleCardDelete(payload)
                        }}
                    />
                )
            case 'kanban-column':
                return (
                    <KanbanColumnMenu
                        colorPalette={data.colorPalette}
                        onSave={(column) => {
                            handleColumnUpdate({ ...payload, ...column })
                            dismiss()
                        }}
                        onDelete={() => {
                            handleColumnDelete(payload)
                            dismiss()
                        }}
                        column={payload}
                    />
                )
            case 'kanban-swimlane':
                return (
                    <KanbanSwimlaneMenu
                        colorPalette={data.colorPalette}
                        onSave={(swimlane) => {
                            handleSwimlaneUpdate({ ...payload, ...swimlane })
                            dismiss()
                        }}
                        onDelete={() => {
                            handleSwimlaneDelete(payload)
                            dismiss()
                        }}
                        swimlane={payload}
                    />
                )
            default:
                return null
        }
    }

    return (
        <View
            width="100%"
            height={700}>
            {!!card.id && (
                <Detail
                    colorPalette={data.colorPalette}
                    availableLabels={data.availableLabels}
                    availableUsers={data.availableUsers}
                    item={card}
                    onCancel={() => setCard({})}
                    onSave={(card) => {
                        handleCardUpdate(card)
                        setCard({})
                    }}
                    onDelete={(card) => {
                        handleCardDelete(card)
                        setCard({})
                    }}
                />
            )}

            <MenuProvider menu={getMenu}>
                <Kanban
                    id="kanban-instance-1"
                    //style={{ '--f-kanban-swimlane-minheight': '600px' }}
                    style={{ '--f-kanban-swimlane-minheight': '100%' }}
                    swimlanes={swimlanes}
                    onCardOpen={handleCardOpen}
                    onCardAdd={handleCardAdd}
                    onCardUpdate={handleCardUpdate}
                    onCardMove={handleCardMove}
                    onColumnAdd={handleColumnAdd}
                    onColumnMove={handleColumnMove}
                    onSwimlaneMove={handleSwimlaneMove}
                    onColumnUpdate={handleColumnUpdate}
                    onSwimlaneUpdate={handleSwimlaneUpdate}
                    defaultInteraction="animated"
                    targetVariant={{ 'projects': 'focus' }}
                    card={undefined}
                    columnHeader={undefined}
                    swimlaneHeader={undefined}
                    toolbar={({ selection }) => {
                        return (
                            <View
                                row
                                position="fixed"
                                bgToken="surface-inverse"
                                colorToken="text-on-color"
                                p="1rem 2rem"
                                radius="var(--f-radius)"
                                shadow="var(--f-shadow-xl)"
                                zIndex={1000}
                                gap={10}
                                className="f-fadein"
                                display={!Object.keys(selection).length ? 'none' : 'flex'}
                                style={{ bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
                                <Text color="inherit">{Object.keys(selection).length} selected</Text>
                                <Icon
                                    icon={FIBin}
                                    className="f-buttonize"
                                    onClick={() => {
                                        setDialog({
                                            title: 'Are you sure?',
                                            description: 'This action cannot be undone.',
                                            portal: Portal,
                                            footer: (
                                                <View
                                                    width="100%"
                                                    row
                                                    justifyContent="space-between">
                                                    <Button
                                                        onClick={() => {
                                                            closeDialog()
                                                            dispatchKanbanEvent('select', {
                                                                instanceId: 'kanban-instance-1',
                                                            })
                                                        }}>
                                                        Cancel
                                                    </Button>
                                                    <Button
                                                        variant="danger"
                                                        onClick={() => {
                                                            kanbanState({
                                                                swimlanes,
                                                                setSwimlanes,
                                                                card,
                                                                setCard,
                                                            }).handleSelectionDelete(selection)
                                                            dispatchKanbanEvent('select', {
                                                                instanceId: 'kanban-instance-1',
                                                            })
                                                            closeDialog()
                                                        }}>
                                                        Delete
                                                    </Button>
                                                </View>
                                            ),
                                        })
                                    }}
                                />
                            </View>
                        )
                    }}
                />
            </MenuProvider>
        </View>
    )
}

export const Todo1 = () => {
    const [sections, setSections] = useState<any>(data.sections)
    const [task, setTask] = useState<any>({})
    const [options, setOptions] = useState<any>([])
    const { setDialog, closeDialog } = useDialog()

    const handleTaskOpen = (task) => {
        todoState({ task, setTask, sections, setSections }).handleTaskOpen(task)
    }

    const handleTaskUpdate = (taskData) => {
        todoState({ task, setTask, sections, setSections }).handleTaskUpdate(taskData)
    }

    const handleTaskDelete = (task) => {
        setDialog({
            title: 'Are you sure?',
            description: 'This action cannot be undone.',
            footer: (
                <View
                    row
                    width="100%"
                    justifyContent="space-between">
                    <Button onClick={closeDialog}>Cancel</Button>
                    <Button
                        onClick={() => {
                            todoState({ task, setTask, sections, setSections }).handleTaskDelete(task)
                            closeDialog()
                        }}
                        variant="danger">
                        Delete
                    </Button>
                </View>
            ),
        })
    }

    const handleTaskAddBelow = ({ id, shouldIndent, task: { title, users, badges, labels } }) => {
        todoState({ task, setTask, sections, setSections }).handleTaskAddBelow({
            id,
            shouldIndent,
            task: { title, users, badges, labels },
        })
    }

    const handleTaskAdd = ({ task, sectionIndex }) => {
        todoState({ task, setTask, sections, setSections }).handleTaskAdd({ task, sectionIndex })
    }

    const handleTaskMove = ({ origin, target, selection }) => {
        todoState({ task, setTask, sections, setSections }).handleTaskMove({ origin, target, selection })
    }

    const handleSectionUpdate = (sec) => {
        todoState({ task, setTask, sections, setSections }).handleSectionUpdate(sec)
    }

    const handleSectionDelete = (sec) => {
        todoState({ task, setTask, sections, setSections }).handleSectionDelete(sec)
    }

    const handleSectionAdd = ({ name, sectionIndex }) => {
        todoState({ task, setTask, sections, setSections }).handleSectionAdd({ name, sectionIndex })
    }

    const handleSectionMove = ({ origin, target }) => {
        todoState({ task, setTask, sections, setSections }).handleSectionMove({ origin, target })
    }

    const handleTrigger = (word) => {
        if (word.trim().charAt(0) == '@') {
            setOptions(data.richInputUsers)
        } else if (word.trim().charAt(0) == '#') {
            setOptions(data.richInputLabels)
        } else {
            setOptions([])
        }
    }

    const handleHighlight = (word, cb, always = false) => {
        if (word.includes('date:')) {
            cb({
                phrase: word.trim(),
                type: 'date',
                value: word.split(':')[1].trim(),
            })
        } else {
            if (always) cb(null)
        }
    }

    const getMenu = ({ data: { target, payload }, dismiss }) => {
        switch (target) {
            case 'todo-label':
                return (
                    <LabelMenu
                        onFilter={(value) => console.log('filter', value)}
                        availableLabels={data.availableLabels}
                        labels={payload.labels}
                        onCancel={dismiss}
                        onSave={(labels) => {
                            handleTaskUpdate({ ...payload, labels })
                            dismiss()
                        }}
                    />
                )
            case 'todo-user':
                return (
                    <UserMenu
                        onFilter={(value) => console.log('filter', value)}
                        availableUsers={data.availableUsers}
                        users={payload.users}
                        onCancel={dismiss}
                        onSave={(users) => {
                            handleTaskUpdate({ ...payload, users })
                            dismiss()
                        }}
                    />
                )
            case 'todo-menu':
                return (
                    <Popup
                        isTodo
                        item={payload}
                        onCancel={dismiss}
                        colorPalette={data.colorPalette}
                        onTodoAddBelow={() => {
                            dismiss()
                            dispatchTodoEvent('open-addbelow', { id: payload.id })
                        }}
                        onTodoEdit={() => {
                            dismiss()
                            dispatchTodoEvent('edit-task', { id: payload.id })
                        }}
                        onSave={(card) => {
                            dismiss()
                            handleTaskUpdate({ ...payload, ...card })
                        }}
                        onView={() => {
                            dismiss()
                            setTask(payload)
                        }}
                        onDelete={() => {
                            dismiss()
                            handleTaskDelete(payload)
                        }}
                    />
                )
            case 'todo-section':
                return (
                    <TodoSectionMenu
                        colorPalette={data.colorPalette}
                        onSave={(section) => {
                            handleSectionUpdate({ ...payload, ...section })
                            dismiss()
                        }}
                        onDelete={() => {
                            handleSectionDelete(payload)
                            dismiss()
                        }}
                        section={payload}
                    />
                )
            default:
                return null
        }
    }

    return (
        <>
            {!!task.id && (
                <Detail
                    useRichTitle
                    colorPalette={data.colorPalette}
                    availableLabels={data.availableLabels}
                    availableUsers={data.availableUsers}
                    richInputHighlight={handleHighlight}
                    richInputTrigger={handleTrigger}
                    richInputOptions={options}
                    item={{ ...task }}
                    onCancel={() => {
                        setTask({})
                    }}
                    onSave={(task) => {
                        handleTaskUpdate(task)
                        setTask({})
                    }}
                    onDelete={(task) => {
                        handleTaskDelete(task)
                        setTask({})
                    }}
                />
            )}

            <MenuProvider menu={getMenu}>
                <Todo
                    id="todo-instance-1"
                    sections={sections}
                    onTaskOpen={handleTaskOpen}
                    onTaskUpdate={handleTaskUpdate}
                    onTaskAdd={handleTaskAdd}
                    onTaskAddBelow={handleTaskAddBelow}
                    onTaskMove={handleTaskMove}
                    onSectionUpdate={handleSectionUpdate}
                    onSectionAdd={handleSectionAdd}
                    onSectionMove={handleSectionMove}
                    availableLabels={data.availableLabels}
                    onLabelFilter={(value) => console.log('filter labels', value)}
                    availableUsers={data.availableUsers}
                    onUserFilter={(value) => console.log('filter users', value)}
                    richInputHighlight={handleHighlight}
                    richInputTrigger={handleTrigger}
                    richInputOptions={options}
                    targetVariant={{ 'projects': 'focus' }}
                    task={undefined}
                    sectionHeader={undefined}
                    defaultSelection={{}}
                    toolbar={({ selection }) => {
                        return (
                            <View
                                row
                                position="fixed"
                                bgToken="surface-inverse"
                                colorToken="text-on-color"
                                p="1rem 2rem"
                                radius="var(--f-radius)"
                                shadow="var(--f-shadow-xl)"
                                zIndex={1000}
                                gap={10}
                                className="f-fadein"
                                display={!Object.keys(selection).length ? 'none' : 'flex'}
                                style={{ bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
                                <Text color="inherit">{Object.keys(selection).length} selected</Text>
                                <Icon
                                    icon={FIBin}
                                    className="f-buttonize"
                                    onClick={() => {
                                        setDialog({
                                            title: 'Are you sure?',
                                            description: 'This action cannot be undone.',
                                            portal: Portal,
                                            footer: (
                                                <View
                                                    width="100%"
                                                    row
                                                    justifyContent="space-between">
                                                    <Button
                                                        onClick={() => {
                                                            closeDialog()
                                                            dispatchTodoEvent('select', {
                                                                instanceId: 'todo-instance-1',
                                                            })
                                                        }}>
                                                        Cancel
                                                    </Button>
                                                    <Button
                                                        variant="danger"
                                                        onClick={() => {
                                                            todoState({
                                                                task,
                                                                setTask,
                                                                sections,
                                                                setSections,
                                                            }).handleSelectionDelete(selection)
                                                            dispatchTodoEvent('select', {
                                                                instanceId: 'todo-instance-1',
                                                            })
                                                            closeDialog()
                                                        }}>
                                                        Delete
                                                    </Button>
                                                </View>
                                            ),
                                        })
                                    }}
                                />
                            </View>
                        )
                    }}
                />
            </MenuProvider>
        </>
    )
}

export const DatePicker1 = () => {
    const date = new Date()
    const { today, tomorrow, disabled1, disabled2 } = useMemo(() => {
        const today = new Date()
        const tomorrow = new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000)
        const disabled1 = new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000)
        const disabled2 = new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000)
        return {
            today,
            tomorrow,
            disabled1,
            disabled2,
        }
    }, [])
    const [selection, setSelection] = useState<any[]>([[today, tomorrow]])

    const handleSelection = (date: Date) => {
        if (selection.length == 0) {
            setSelection([[date, null]])
        } else {
            const selected = selection[0]
            if (!selected[0]) return setSelection([date, null])
            if (!!selected[0] && !!selected[1]) return setSelection([[date, null]])
            if (!!selected[0] && !selected[1])
                return setSelection(selected[0] > date ? [[date, selected[0]]] : [[selected[0], date]])
        }
    }

    return (
        <DateRangeProvider>
            <Card
                m="2rem 0 4rem 0"
                p="1rem"
                width="fit-content">
                <DatePicker
                    defaultDate={date}
                    selection={selection}
                    onChange={handleSelection}
                    disabled={[[disabled1, disabled2]]}
                    width={900}
                    height={350}
                    panels={3}
                />
            </Card>
        </DateRangeProvider>
    )
}

export const ProComponent = () => {
    const [option, setOption] = useState(0)

    return (
        <View
            column
            height="fit-content"
            zIndex={10}
            position="relative"
            m="-475px 0 0 0"
            className="pro">
                            
            <View
                bgToken="surface"
                width="86%"
                shadow="var(--f-shadow-menu)"
                border="1px solid var(--f-color-border)"
                p="0rem"
                style={{ overflow: 'hidden' }}
                radius="var(--f-radius)"
                position="relative">
                <View 
                    row
                    position="relative"
                    zIndex={0}
                    gap="0.75rem"
                    p="1rem 2rem 1rem 1rem">
                    <Options
                        position="sticky"
                        style={{ top: '1rem' }}
                        animated
                        shadow="var(--f-shadow-card)"
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
                    <Flexer />
                    <Pill
                        subtle
                        size="sm"
                        color={Token.ColorAccent400}>
                        New
                    </Pill>
                    <Link
                        target="_blank"
                        href="https://app-sandbox.fold.dev"
                        color="var(--f-color-accent)"
                        className="f-underline"
                        textDecoration="none">
                        AppSandbox ↗
                    </Link>
                </View>
                <View
                    p="0.5rem"
                    style={{ 
                        overflow: 'auto',
                        maxHeight: 1000, 
                    }}
                    className="f-scrollbar"
                    justifyContent="flex-start"
                    alignContent="flex-start"
                    alignItems="flex-start"
                    >
                    <View
                        width="100%"
                        height="fit-content"
                        position="relative"
                        zIndex={0}>
                        {option == 0 && (<Kanban1 />)}
                        {option == 1 && (<Todo1 />)}
                        {option == 2 && (<Calendar1 />)}
                        {option == 3 && (<CSVImporter1 />)}
                        {option == 4 && (<DataGrid1 />)}
                        {option == 5 && (<View row><DatePicker1 /></View>)}
                    </View>
                </View>
            </View>
           
            {/*             
            <View
                bgToken="surface"
                width="86%"
                shadow="var(--f-shadow-menu)"
                border="1px solid var(--f-color-border)"
                p="0rem"
                style={{ overflow: 'hidden' }}
                radius="var(--f-radius)"
                position="relative">
                    <a
                        href="https://app-sandbox.fold.dev" 
                        target="_blank"
                        className="f-buttonize"
                        style={{ 
                            border: 'none',
                            display: 'flex',
                            gap: '1rem',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            zIndex: 3,
                            inset: 0, 
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            color: 'var(--f-color-accent)',
                            paddingBottom: '5rem',
                            textDecoration: 'none',
                        }}>
                        <View
                            radius="var(--f-radius)"
                            p="0.5rem 1rem"
                            bgToken="accent-weak">
                            <Text colorToken="accent-strong" size="lg">
                                app-sandbox.fold.dev ↗
                            </Text>
                        </View>
                    </a>
                    <div 
                        style={{ 
                            zIndex: 2,
                            inset: 0, 
                            width: '100%',
                            opacity: 0.5,
                            height: '100%',
                            position: 'absolute',
                            background: 'radial-gradient(var(--f-color-surface) 0%, transparent 100%)',
                        }}
                    />
                    <div 
                        style={{ 
                            zIndex: 1,
                            inset: 0, 
                            opacity: 0,
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            background: 'var(--f-color-surface)',
                        }}
                    />
                    <img 
                        style={{ position: 'relative', zIndex: 0 }}
                        src="app-sandbox-light.png" 
                        width="100%"
                        className="pro-image"
                    />
            </View> 
            */}
        </View>
    )
}
