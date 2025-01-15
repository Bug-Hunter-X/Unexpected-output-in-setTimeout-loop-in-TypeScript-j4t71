function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }
}

printNumbers(10); //This will print 11 11 11 11 11 11 11 11 11 11 instead of 1 to 10

function printNumbersCorrected(n: number): void {
  for (let i = 1; i <= n; i++) {
    (function(j) {
      setTimeout(() => {
        console.log(j);
      }, 0);
    })(i);
  }
}

printNumbersCorrected(10); //This will print 1 to 10 correctly