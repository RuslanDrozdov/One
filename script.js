let num = "666611224223335566";

function faindNumber(num) {
  num = [...String(num)];
  console.log(num);
  let res = {};
  for (let i = 0; i < num.length; i++) {
    if (res[num[i]]) {
      res[num[i]]++;
    } else {
      res[num[i]] = 1;
    }
  }
  console.log(res);

  let result = 0;
  for (let key in res) {
    if (res[key] == key) {
      result = Math.max(result, key);
    }
  }
  return result;
}

console.log(faindNumber(num));
