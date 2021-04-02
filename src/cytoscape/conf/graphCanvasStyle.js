const style = {
    core: {
        'selection-box-color': '#1890ff',
    },
    node: {
        width: '200px',
        shape: 'rectangle',
        'border-opacity': 1,
        // 'background-width': function backgroundWidth(ele) {
        //     return ele.data('bgImages').width ? ele.data('bgImages').width : 'auto'
        // },
        // 'background-height': function backgroundHeight(ele) {
        //     return ele.data('bgImages').height ? ele.data('bgImages').height : 'auto'
        // },
        'background-color': '#fff',
        'background-opacity': 1,
        // 'background-repeat': 'no-repeat',
        // 'background-fit': function backgroundFit(ele) {
        //     return ele.data('bgImages') && ele.data('bgImages').fit ? ele.data('bgImages').fit : 'none'
        // },
        // 'background-image': function backgroundImage(ele) {
        //     return ele.data('bgImages') ? ele.data('bgImages').image : 'none'
        // },
        // 'background-clip': function backgroundClip(ele) {
        //     return ele.data('bgImages').clip ? ele.data('bgImages').clip : 'none'
        // },
        // 'background-position-x': 'data(bgImages.positionX)',
        // 'background-position-y': 'data(bgImages.positionY)',
        content: 'data(name)',
        color: '#000',
        'font-family': 'Microsoft Yahei',
        'font-size': '14px',
        'text-halign': 'center',
        'text-valign': 'center',
        'text-wrap': 'ellipsis',
        'background-image-crossorigin': 'anonymous',
        'overlay-color': '#000000',
        'background-width-relative-to': 'inner',
        'background-height-relative-to': 'inner',
        padding: '0',
        'box-shadow': '10px 10px 5px #888888',
        'text-max-width': '200px',
        // ghost: 'yes',
        // 'ghost-opacity': 1,
        // 'ghost-offset-x': 5,
        // 'ghost-offset-y': -5
    },
    'node:parent': {
        'text-valign': 'top',
        'text-halign': 'center',
    },
    'node:selected': {
        'border-color': '#cccccc',
        'background-color': '#cccccc',
    },
    'node.table': {
        width: '200px',
        shape: 'round-rectangle',
        // padding: '1px',
        'border-width': 8,
        'border-color': '#666666',
        // 'z-compound-depth': 'top',
    },
    'node.table:selected': {
        'background-color': '#1890ff',
        'border-color': '#1890ff',
    },
    'node.header': {
        'border-width': 0,
        'background-color': '#000000',
        color: '#fff',
        height: '40px',
        opacity: 1,
        'text-margin-y': '-8px',
        shape: 'round-rectangle',
    },
    'node.column': {
        width: '200px',
        'border-width': 0.1,
        height: '30px',
        'background-color': '#FEFEFE',
        content: (ele) => `${ele.data('name')}`,
        'border-opacity': 0.5,
        // 'text-justification': 'left',
        'text-max-width': '200px',
        'border-style': 'dashed',
        // 'background-opacity': 0.5,
    },
    'node.column:selected': {
        'background-color': '#cccccc',
        color: '#fff',
    },
    'node.last-column': {
        shape: 'bottom-round-rectangle',
    },
    'node.table-primary': {
        'background-color': '#f6f7f9',
    },
    'node.table-primary:selected': {
        'background-color': '#cccccc',
    },
    edge: {
        width: '2px',
        // 'line-color': '#cccccc',
        content: 'data(label)',
        // 'z-index-compare': 'manual',
        color: '#cccccc',
        'font-size': '16px',
        'min-zoomed-font-size': '12px',
        'edge-text-rotation': 'autorotate',
        'curve-style': 'unbundled-bezier',
        // 'text-background-color': '#f6f7f9',
        // 'text-background-opacity': '0',
        // 'z-compound-depth': 'top',
        // 'target-arrow-shape': 'triangle',
        // 'source-arrow-shape': 'circle',
        // 'text-background-shape': 'roundrectangle',
        'arrow-scale': 1,
        // 'target-arrow-fill': 'hollow',
        // 'source-arrow-fill': 'hollow',
        // ghost: 'yes',
        // 'ghost-opacity': 1
    },
    'edge:selected': {
        'line-color': '#cccccc',
        'target-arrow-color': '#cccccc',
        'background-color': '#cccccc',
    },
    'edge.table-relation': {
        'line-color': '#000000',
        'line-style': 'dashed',
        // 'source-endpoint': '0deg',
        // 'target-endpoint': '0deg',
        'text-margin-y': '-15px',
        'curve-style': 'straight',
    },
    'edge.normal': {
        'line-color': '#19caad',
        'line-style': 'dashed',
        'target-arrow-shape': 'circle',
        'source-arrow-shape': 'circle',
        'source-endpoint': (ele) => {
            const deg = ele.data().sourceArrow === 0 ? '90deg' : '270deg'
            return deg
        },
        'target-endpoint': (ele) => {
            const deg = ele.data().sourceArrow === 0 ? '270deg' : '90deg'
            return deg
        },
    },
    'edge.mapping': {
        'line-color': '#1890ff',
        'target-arrow-shape': 'triangle',
        'source-arrow-shape': 'circle',
        'source-endpoint': (ele) => {
            const deg = ele.data().sourceArrow === 0 ? '90deg' : '270deg'
            return deg
        },
        'target-endpoint': (ele) => {
            const deg = ele.data().sourceArrow === 0 ? '270deg' : '90deg'
            return deg
        },
    },
}

export default style
