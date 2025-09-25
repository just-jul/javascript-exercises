const palindromes = function (string) {
    let replaced = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let left = 0;
    let right = replaced.length - 1;

    while (left < right){
        if (replaced[left] !== replaced[right]) return false;
        left++;
        right--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
