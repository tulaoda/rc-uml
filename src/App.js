import './App.css'
import { Cytoscape } from '@mlamp/cytoscape-react'
import graphCanvasStyle from './cytoscape/conf/graphCanvasStyle'
import Uml from './cytoscape/utils'
import Data from './cytoscape/test'
import cytoscape from 'cytoscape'
import gridGuide from 'cytoscape-grid-guide'
import React from 'react'

cytoscape.use(gridGuide)

const defaultElements = Uml.formatToTable({ tables: Data })

const tableGridGuideOptions = {
    gridSpacing: 10, // Distance between the lines of the grid.
}
let cy
const defaultProps = {
    className: '',
    global: cytoscape,
    elements: defaultElements,
    layout: {
        name: 'preset',
    },
    layoutSelected: true,
    boxSelect: false,
    stylesheet: graphCanvasStyle,
    // 事件回调
    onDestroy: () => {},
    onInit: (cyItem) => {
        cy = cyItem
        cyItem.gridGuide(tableGridGuideOptions)
        console.log(`cy`, cy)
    },
}

function App() {
    return <Cytoscape {...defaultProps} />
}

export default App
