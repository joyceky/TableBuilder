"use strict";
//Change this to change the size of the squares (table data cells)
//Turns into one large square around val 340
var squareSize = 15;

//ID of container required
addTable(document.getElementById('divTableContainer'),
    getNumRowsFromGridSize(),
    getNumCellsFromGridSize()
);

function getSquareSize() {
    squareSize = document.getElementById('squareSizeInput').value;
    var myTableContainer = document.getElementById('divTableContainer');
    myTableContainer.innerHTML = '';
    myTableContainer = addTable(myTableContainer,
        getNumRowsFromGridSize(),
        getNumCellsFromGridSize()
    );
}

/*
Takes 5 parameters, the ta
If there is no table, create a table
then for the specified number of rows, create  a row
and for the specified number cells, create a cell
each cell is given a class, and the cell is appended to the end of the row
then a class is added to each row, and the row is appended to the table
*/
function populateTable(table, rows, cells, tableClass, rowClass, cellClass) {
    if (!table) table = document.createElement('table');

    for (var i = 0; i < rows; ++i) {
        var row = document.createElement('tr');
        for (var j = 0; j < cells; ++j) {
            var cell = document.createElement('td');
            cell.setAttribute('class', cellClass);
            row.appendChild(cell);
        }
        row.setAttribute('class', rowClass);
        table.appendChild(row);
    }
    table.setAttribute('class', tableClass);
    // table.setAttribute('id', "theTable");
    return table;
}

/*
Takes 3 parameters; a container for the table, height of table in rows, width of table in cells
Function creates table and appends to container. Also sets bg color to white
*/
function addTable(container, height, width) {
    container.appendChild(populateTable(null, height, width, 'grid', 'row', 'cell'));
}

function getNumCellsFromGridSize() {
    var containerWidth = document.getElementById('divTableContainer').clientWidth;
    var numOfCells = Math.floor(containerWidth / squareSize);
    return numOfCells;
}

function getNumRowsFromGridSize() {
    var containerHeight = document.getElementById('divTableContainer').clientHeight;
    var cellHeight = Math.floor(containerHeight / squareSize);
    return cellHeight;
}
