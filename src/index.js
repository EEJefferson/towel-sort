module.exports = function towelSort(matrix) {
    let via = [];
    for (let i = 0; i < matrix.length; i += 1) {
        let part;
        if (i % 2 === 0) {
            part = matrix[i];
        } else {
            part = [...matrix[i]].reverse();
        }
        via = via.concat(part);
    }
    return via;
}
