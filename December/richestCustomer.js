const accounts = [[1,2,3],[8,2,1]]

var maximumWealth = function(accounts) {
    let sum1 = [];
    for (let i = 0; i < accounts.length; i++) {
        let sum = 0
        for (let j = 0; j < accounts[i].length;j++) {
            sum += accounts[i][j]
        }
    sum1.push(sum);
    }

    return Math.max(...sum1 );
};

console.log(maximumWealth(accounts));