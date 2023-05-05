function solution(scoreArr) {
  let answer = [];
  // sort 는 원본배열에 영향을 끼치기때문에 [...arr] 과 같이 스프레드 문법을 사용해주어서 원본에 영향을 끼치지 않도록 한다.
  let rank = [...scoreArr].sort((a, b) => b - a);
  console.log(scoreArr);
  let rankOfScore = [[], rank[0]];
  for (let i = 1; i < rank.length; i++) {
    if (rank[i] !== rank[i - 1]) {
      rankOfScore.push(rank[i]);
    }
  }
  for (let i = 0; i < scoreArr.length; i++) {
    answer.push(rankOfScore.indexOf(scoreArr[i]));
  }
  console.log(answer);
}
console.log(solution([87, 89, 92, 100, 100, 76]));
