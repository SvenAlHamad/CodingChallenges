const multiplicationTable = n => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write (i * j + ' ');
    }
    console.log ('');
  }
};

multiplicationTable (12);
