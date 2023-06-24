function solution(clothes) {
  let clothesMap = new Map();
  for (let clothe of clothes) {
    if (!clothesMap.has(clothe[1])) {
      clothesMap.set(clothe[1], [clothe[0]]);
    } else {
      clothesMap.set(clothe[1], [...clothesMap.get(clothe[1]), clothe[0]]);
    }
  }
  let comb = 1;
  const values = Array.from(clothesMap.values());
  for (let value of values) {
    comb *= value.length + 1;
  }
  let answer = comb - 1;
  return answer;
}
