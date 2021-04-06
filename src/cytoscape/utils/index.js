import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'

const tableTemplate = {
    data: {
        class: 'table',
        id: 'table1',
        label: '',
        type: 'table',
    },
    group: 'nodes',
    removed: false,
    selected: false,
    selectable: true,
    locked: false,
    grabbable: true,
    pannable: false,
    classes: ['table'],
}

const headerTemplate = {
    data: {
        class: '',
        id: '',
        label: '',
        parent: '',
        type: 'header',
    },
    group: 'nodes',
    removed: false,
    selected: false,
    selectable: false,
    locked: false,
    grabbable: false,
    pannable: false,
    classes: ['header'],
}

const columnTemplate = {
    data: {
        id: '',
        class: '',
        label: 'id',
        datatype: '',
        parent: '',
        type: 'column',
        relation: {},
    },
    group: 'nodes',
    removed: false,
    selected: false,
    selectable: true,
    locked: false,
    grabbable: false,
    pannable: false,
    classes: ['column'],
}

class Uml {
    // 格式化表格
    static formatToTable = ({ tables = [], tableRelations = [], rowRelations = [] }) => {
        if (!Array.isArray(tables)) {
            return { nodes: [], edges: [] }
        }
        const tmpTables = _.cloneDeep(tables)
        const tableList = []
        const edges = []
        // 表处理 sql相关
        tmpTables.forEach((currentTable, currentTableIndex) => {
            const tableNode = _.cloneDeep(tableTemplate)
            const headerNode = _.cloneDeep(headerTemplate)
            const { id } = currentTable
            tableNode.data.id = currentTable.id
            tableNode.data.tableName = currentTable.tableName
            // tableNode.data.type = currentTable.type
            tableNode.renderedPosition = currentTable.position
            tableList.push(tableNode)

            const { x, y } = currentTable.position
            headerNode.data.id = uuidv4()
            headerNode.data.name = currentTable.tableName
            headerNode.data.parent = id
            headerNode.renderedPosition = {
                x,
                y: y + 20,
            }
            if (currentTable.main) {
                headerNode.classes = ['main-table-header']
            }

            tableList.push(headerNode)
            if (!Array.isArray(currentTable.columns)) {
                return
            }

            currentTable.columns.forEach((currentRow, currentColumnIndex) => {
                const columnNode = _.cloneDeep(columnTemplate)
                columnNode.data = currentRow
                columnNode.data.parent = id
                columnNode.data.id = currentRow.id
                columnNode.data.name = currentRow.name
                columnNode.data.dataType = currentRow.dataType
                columnNode.renderedPosition = {
                    x,
                    y: y + (currentColumnIndex + 1) * 30 + 10,
                }

                if (currentTable.columns.length - 1 === currentColumnIndex) {
                    columnNode.classes.push('last-column')
                }
                if (currentRow.relations) {
                    currentRow.relations.forEach((itemRelation) => {
                        let classes = ['normal']
                        if (itemRelation.column.type === 'mapping') {
                            classes = ['mapping']
                        }
                        const sourceTable = tmpTables.find((item) => item.id === itemRelation.table.id)

                        console.log(`sourceTable`, sourceTable)

                        edges.push({
                            group: 'edges',
                            data: {
                                id: uuidv4(),
                                target: currentRow.id || uuidv4(),
                                source: itemRelation.column.id,
                                tableIndex: currentTableIndex,
                                columnIndex: currentColumnIndex,
                                type: itemRelation.type,
                                label: itemRelation.relationLabel,
                                sourceTableName: itemRelation.table.tableName,
                                targetTableName: currentTable.tableName,
                                relativePositon: currentTable.position.x > sourceTable.position.x ? 1 : 0,
                            },
                            classes: classes,
                        })
                    })
                }
                tableList.push(columnNode)
            })
        })
        // 表关系处理 不涉及sql
        tableRelations.forEach((currentRow) => {
            edges.push(currentRow)
        })
        // 行关系处理 不涉及sql
        rowRelations.forEach((currentRow) => {
            edges.push(currentRow)
        })
        return { nodes: tableList, edges }
    }
}

export default Uml
