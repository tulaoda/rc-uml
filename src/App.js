import './App.css'
import { Cytoscape } from '@mlamp/cytoscape-react'
import graphCanvasStyle from './cytoscape/conf/graphCanvasStyle'
import Uml from './cytoscape/utils'
import Data from './cytoscape/test'

const defaultElements = Uml.formatToTable({ tables: Data })

const defaultProps = {
    className: '',
    global: '',
    elements: defaultElements,
    layout: {
        name: 'preset',
    },
    layoutSelected: true,
    boxSelect: false,
    stylesheet: graphCanvasStyle,
    // 事件回调
    onDestroy: () => {},
    afterInit: (cy) => {
        console.log(`cy`, cy)
    },
}

function App() {
    return <Cytoscape {...defaultProps} />
}

export default App
