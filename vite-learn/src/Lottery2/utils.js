function getRandomInt(n) {
    let randArr = new Array(n);

    for (let i = 0; i < n; i++) {
        randArr[i] = Math.floor(Math.random() * 10);
    }

    return randArr;
}

function sumOfArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function getAllSame(size){
    let arr = new Array(size);
    let commonNum = Math.floor(Math.random() * 10);
    for (let i = 0; i < size; i++) {
        arr[i] = commonNum;
    }
    return arr;
}

export { getRandomInt, sumOfArray, getAllSame };