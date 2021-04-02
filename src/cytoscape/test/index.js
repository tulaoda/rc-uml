const data = [
    {
        id: '1',
        tableName: 'uploadFile',
        position: { x: 500, y: 0 },
        columns: [
            {
                id: '1-1',
                name: 'id',
                dataType: 'varchar',
                relations: [
                    {
                        column: {
                            id: '2-1',
                            name: 'url',
                            dataType: 'varchar',
                            type: 'mapping',
                        },
                        table: {
                            id: '2',
                            tableName: 'images',
                            position: { x: 100, y: 0 },
                        },
                    },
                ],
            },
            {
                id: '1-2',
                name: 'fileType',
                dataType: 'varchar',
            },
            {
                id: '1-3',
                name: 'filename',
                dataType: 'varchar',
            },
            {
                id: '1-4',
                name: 'filepath',
                dataType: 'varchar',
                relations: [
                    {
                        column: {
                            id: '2-4',
                            name: 'url',
                            dataType: 'varchar',
                            type: 'normal',
                        },
                        table: {
                            id: '2',
                            tableName: 'images',
                            position: { x: 100, y: 0 },
                        },
                    },
                ],
            },
        ],
    },

    {
        id: '2',
        tableName: 'images',
        position: { x: 100, y: 0 },
        columns: [
            {
                id: '2-1',
                name: 'url',
                dataType: 'varchar',
            },
            {
                id: '2-2',
                name: 'fileId',
                dataType: 'varchar',
            },
            {
                id: '2-3',
                name: 'filed1',
                dataType: 'varchar',
            },
            {
                id: '2-4',
                name: 'filed2',
                dataType: 'varchar',
            },
        ],
    },
    {
        id: '3',
        tableName: 'images',
        position: { x: 900, y: 200 },
        columns: [
            {
                id: '3-1',
                name: 'url',
                dataType: 'varchar',
            },
            {
                id: '3-2',
                name: 'fileId',
                dataType: 'varchar',
                relations: [
                    {
                        column: {
                            id: '2-4',
                            name: 'url',
                            dataType: 'varchar',
                            type: 'normal',
                        },
                        table: {
                            id: '2',
                            tableName: 'images',
                            position: { x: 100, y: 0 },
                        },
                    },
                ],
            },
            {
                id: '3-3',
                name: 'filed1',
                dataType: 'varchar',
            },
            {
                id: '3-4',
                name: 'filed2',
                dataType: 'varchar',
            },
        ],
    },
]

export default data
