import './App.css'
import { Cytoscape } from '@mlamp/cytoscape-react'
const defaultElements = {
    nodes: [
        { group: 'nodes', data: { id: 'a', label: 'apple' }, position: { x: 0, y: 0 } },
        { group: 'nodes', data: { id: 'b', label: 'banana' }, position: { x: 100, y: 0 } },
        { group: 'nodes', data: { id: 'c', label: 'cherry' }, position: { x: 200, y: 0 } },
    ],
}

const defaultProps = {
    className: '',
    global: '',
    elements: defaultElements,
    layout: {
        name: 'random',
    },
    layoutSelected: true,
    boxSelect: false,
    stylesheet: [
        {
            selector: '.hexagon',
            style: {
                shape: 'polygon',
                'shape-polygon-points':
                    '0 1, 0.8660254037844386 0.5, 0.8660254037844386 -0.5, 0 -1, -0.8660254037844386 -0.5, -0.8660254037844386 0.5',
            },
        },
    ],
    // 事件回调
    onDestroy: () => {},
    afterInit: () => {},
}

function App() {
    return <Cytoscape {...defaultProps} />
}

export default App
