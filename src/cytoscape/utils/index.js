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
    classes: 'table',
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
    classes: 'header',
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
    classes: 'column',
}

class Uml {
    // 格式化表格
    static formatToTable = ({ tables = [], tableRelations = [], rowRelations = [] }) => {
        if (!Array.isArray(tables)) {
            return { nodes: [], edges: [] }
        }
        const tmpTables = _.cloneDeep(tables)
        const tableArr = []
        const edges = []
        // 表处理 sql相关
        tmpTables.forEach((element, currTableIndex) => {
            const tableNode = _.cloneDeep(tableTemplate)
            const headerNode = _.cloneDeep(headerTemplate)
            const { id } = element
            tableNode.data.id = element.id
            tableNode.data.tableName = element.tableName
            // tableNode.data.type = element.type
            tableNode.renderedPosition = element.position
            tableArr.push(tableNode)

            const { x, y } = element.position
            headerNode.data.id = uuidv4()
            headerNode.data.name = element.tableName
            headerNode.data.parent = id
            headerNode.renderedPosition = {
                x,
                y: y + 20,
            }
            tableArr.push(headerNode)
            if (!Array.isArray(element.columns)) {
                return
            }
            element.columns.forEach((item, currColumnIndex) => {
                const columnNode = _.cloneDeep(columnTemplate)
                columnNode.data = item
                columnNode.data.parent = id
                columnNode.data.id = item.guid || uuidv4()
                columnNode.data.name = item.name
                columnNode.data.dataType = item.dataType
                // columnNode.data.def = item.def
                // columnNode.data.relation = item.relation
                columnNode.renderedPosition = {
                    x,
                    y: y + (currColumnIndex + 1) * 30 + 10,
                }
                // if (item.primary) {
                columnNode.classes = ['column', 'table-primary']
                // }

                if (element.columns.length - 1 === currColumnIndex) {
                    columnNode.classes.push('last-column')
                }
                if (item.relation) {
                    edges.push({
                        group: 'edges',
                        data: {
                            id: uuidv4(),
                            target: item.guid || uuidv4(),
                            source: item.relation.column.guid,
                            tableIndex: currTableIndex,
                            columnIndex: currColumnIndex,
                            type: 'pk',
                            sourceTableName: item.relation.table.name,
                            targetTableName: element.name,
                        },
                        classes: ['foreign-key-relation'],
                    })
                }
                tableArr.push(columnNode)
            })
        })
        // 表关系处理 不涉及sql
        tableRelations.forEach((item) => {
            edges.push(item)
        })
        // 行关系处理 不涉及sql
        rowRelations.forEach((item) => {
            edges.push(item)
        })
        return { nodes: tableArr, edges }
    }
}

export default Uml
