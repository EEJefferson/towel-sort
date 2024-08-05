module.exports = function towelSort(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i += 1) {
        if (i % 2 === 0) {
            result = result.concat(matrix[i]);
        } else {
            result = result.concat(matrix[i].reverse());
        }
    }
    return result;
}
