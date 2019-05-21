console.log('not hello');


let questionOptions = {
    'graph_LineWithNoBackground': lineWithNoBackground,
    'graph_LineWithFunctionBackground': lineWithFunctionBackground
};

function lineWithNoBackground(id, lineColor) {
    console.log('lineWithNoBackground; id:' + id);
    if (/^#[0-9A-F]{6}$/i.test(lineColor)) {
        var lnColor = lineColor
    } else {
        var lnColor = '#ff0000'
    }

    var b = JXG.JSXGraph.initBoard(id, {boundingbox: [-5, 2, 5, -2], axis: true});
    var pointA = b.create('point', [-1, 1], {name: 'A', size: 4});
    var pointB = b.create('point', [2, -1], {name: 'B', size: 4});
    var lineAb = b.create('line', ["A", "B"], {strokeColor: lnColor, strokeWidth: 2});
    b.update()
}

function lineWithFunctionBackground(id, lineColor, functionAttr) {
    console.log('lineWithFunctionBackground; id:' + id);
    if (/^#[0-9A-F]{6}$/i.test(lineColor)) {
        var lnColor = lineColor
    } else {
        var lnColor = '#ff0000'
    }

    var b = JXG.JSXGraph.initBoard(id, {boundingbox: [-5, 2, 5, -2], axis: true});
    var pointA = b.create('point', [-1, 1], {name: 'A', size: 4});
    var pointB = b.create('point', [2, -1], {name: 'B', size: 4});
    var lineAb = b.create('line', ["A", "B"], {strokeColor: lnColor, strokeWidth: 2});
    b.update()

    function f(x) {
        return Math.cos(x);
    }
    plot(b, f);
}

// // Macro function plotter
function addCurve(board, func, atts) {
    return board.create('functiongraph', [func], atts);
}

// // Simplified plotting of function
function plot(board, func, atts) {
    if (atts == null) {
        return addCurve(board, func, {strokewidth: 2});
    } else {
        return addCurve(board, func, atts);
    }
}