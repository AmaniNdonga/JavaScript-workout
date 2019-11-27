//with the double equal sign type conversion occurs

function comparisonEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(comparisonEquality(10, "10"))

//with the strict operator type conversion doesn't happen thus the console.log bellow will return false
function comparisonEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(comparisonEquality(10, "10"))