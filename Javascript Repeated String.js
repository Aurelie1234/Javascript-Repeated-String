function repeatedString(s, n) {
    
let fracNumber = Math.trunc(n / s.length);
    let reminder = n % s.length;
    let count = 0;


    for (let i  = 0; i < s.length; i++) {
        if (s[i] == 'a') {
            count++
        }
    }
    count = count * fracNumber;
    for (let i = 0; i < reminder; i++) {
        if (s[i] == 'a') {
            count++
        }
    }
    return count
}
