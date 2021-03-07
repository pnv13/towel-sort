module.exports = function towelSort(matrix) {
    if (arguments.length === 0) return [];
    let resultArr = [];
    let newArr = matrix.map((item, index) =>
        !(index % 2 === 0) ? item.reverse() : item
    );
    return (resultArr = resultArr.concat(...newArr));
};
