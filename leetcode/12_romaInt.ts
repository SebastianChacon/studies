function romanToInt(s: string): number {
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let arrNum = [];

  for (let i: number = 0; i < s.length; i++) {
    arrNum[i] = romanNumbers[s[i] as keyof typeof romanNumbers];
  }
  console.log(arrNum);
  for (let i = 0; i < arrNum.length; i++) {
    let j = i + 1;
    if (arrNum[i] >= arrNum[j]) {
      total += arrNum[i];
    }
  }
  return total;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
