function applyOperation(numbers, operation) {
    const result = [];
    for (let num of numbers) {
        result.push(operation(num));
    }
    return result;
}

function double(num) {
    return num * 2;
}

function square(num) {
    return num * num;
}

const nums = [1, 2, 3, 4];

console.log("Double:", applyOperation(nums, double));
console.log("Square:", applyOperation(nums, square));
