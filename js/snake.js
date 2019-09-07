/* CREATE THE BOARD */
function Board(containerId, rowsCount, colsCount) {
    this.containerId = containerId;
    this.rowsCount = rowsCount;
    this.colsCount = colsCount;

    this.render = function () {
        var html = "<div class = 'boardgame'><table>";
        for (var i = 0; i < this.rowsCount; i++) {
            html += "<tr id='row-" + i + "' class='row'>";

            for(var j = 0; j < this.colsCount; j++) {
                html += "<td id='" + cellId(i, j) + "' class='col'></td>";                
            }
            html += "</tr>";
        }
        html += "</table></div>";
        document.getElementById(containerId).innerHTML = html;
    }
}

/* ADD SNAKE AND FRUIT */