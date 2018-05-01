//Check the definition again
function rFloodFill(canvas, x, y, color) {
    var temp = canvas[x][y];
    canvas[x][y] = color;
    if (canvas[x - 1][y] == temp) {
        rFloodFill(canvas, x-1, y, color);
    }

    if (canvas[x + 1][y] == temp) {
        rFloodFill(canvas, x + 1, y, color);
    }
    if (canvas[x][y - 1] == temp) {
        rFloodFill(canvas, x, y - 1, color);
    }
    if (canvas[x][y + 1] == temp) {
        rFloodFill(canvas, x, y + 1, color);
    }

    return canvas;
}

not working yet
var canvas = [
    [1, 3, 5, 6, 7],
    [8, 8, 7, 4, 2],
    [3, 7, 2, 6, 0],
    [2, 5, 5, 3, 2],
    [1, 2, 4, 6, 7],
];

console.log(rFloodFill(canvas, 2, 1, 9));