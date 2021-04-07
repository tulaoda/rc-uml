const data = [
    {
        id: '1',
        tableName: '主数据表', //表名
        position: { x: 1000, y: 400 },
        main: true, //是否为主表
        columns: [
            {
                id: '1-1',
                name: 'filed1',
                dataType: 'varchar',
                relations: [
                    {
                        relationLabel: '测试',
                        column: {
                            id: '2-1',
                            name: 'url',
                            dataType: 'varchar',
                            type: 'mapping',
                        },
                        table: {
                            id: '3',
                            tableName: '源表2',
                        },
                    },
                ],
            },
            {
                id: '1-2',
                name: 'filed2',
                dataType: 'varchar',
            },
            {
                id: '1-3',
                name: 'filed3',
                dataType: 'varchar',
            },
            {
                id: '1-4',
                name: 'filed4',
                dataType: 'varchar',
                relations: [
                    {
                        relationLabel: '测试',
                        column: {
                            id: '2-4',
                            name: 'url',
                            dataType: 'varchar',
                            type: 'mapping',
                        },
                        table: {
                            id: '2',
                            tableName: '源表1',
                        },
                    },
                ],
            },
        ],
    },
    {
        id: '2',
        tableName: '源表1',
        position: { x: 300, y: 400 },
        columns: [
            {
                id: '2-1',
                name: 'filed1',
                dataType: 'varchar',
            },
            {
                id: '2-2',
                name: 'filed2',
                dataType: 'varchar',
            },
            {
                id: '2-3',
                name: 'filed3',
                dataType: 'varchar',
            },
            {
                id: '2-4',
                name: 'filed4',
                dataType: 'varchar',
            },
        ],
    },
    {
        id: '3',
        tableName: '源表2',
        position: { x: 600, y: 800 },
        columns: [
            {
                id: '3-1',
                name: 'filed1',
                dataType: 'varchar',
            },
            {
                id: '3-2',
                name: 'filed2',
                dataType: 'varchar',
                relations: [
                    {
                        relationLabel: '测试',
                        column: {
                            id: '2-4',
                            name: 'url',
                            dataType: 'varchar',
                            type: 'mapping',
                        },
                        table: {
                            id: '2',
                            tableName: '源表1',
                        },
                    },
                ],
            },
            {
                id: '3-3',
                name: 'filed3',
                dataType: 'varchar',
            },
            {
                id: '3-4',
                name: 'filed4',
                dataType: 'varchar',
            },
        ],
    },
    {
        id: '4',
        tableName: '源表2',
        position: { x: 700, y: 600 },
        columns: [
            {
                id: '4-1',
                name: 'filed1',
                dataType: 'varchar',
            },
            {
                id: '4-2',
                name: 'filed2',
                dataType: 'varchar',
                relations: [
                    {
                        relationLabel: '测试',
                        column: {
                            id: '2-4',
                            name: 'url',
                            dataType: 'varchar',
                            type: 'mapping',
                        },
                        table: {
                            id: '2',
                            tableName: '源表1',
                        },
                    },
                ],
            },
            {
                id: '4-3',
                name: 'filed3',
                dataType: 'varchar',
            },
            {
                id: '4-4',
                name: 'filed4',
                dataType: 'varchar',
            },
        ],
    },
]

export default data
