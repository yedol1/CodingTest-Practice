function solution(numWinnerTicket, entriesNum) {
  const numTicket = parseInt(numWinnerTicket, 10);
  const entries = entriesNum.split(" ").map(Number);
  const entryCnt = {};
  const result = [];

  for (const entry of entries) {
    if (entryCnt[entry]) {
      entryCnt[entry]++;
    } else {
      entryCnt[entry] = 1;
    }
  }

  const winnerEntries = Object.keys(entryCnt)
    .map(Number)
    .sort((a, b) => a - b);

  if (winnerEntries.length < numTicket) {
    return winnerEntries.join(" ");
  }

  for (const entry of winnerEntries) {
    if (entryCnt[entry] === 1) {
      result.push(entry);
      if (result.length === numTicket) {
        break;
      }
    }
  }

  return result.join(" ");
}

console.log(lottery("3", "4 3 3 2 6"));
console.log(lottery("10", "1 2 3 4 5 4 3 2 1"));
// 이카운트 ERP박람회에서는 방문 참가자들을 대상으로 행운권 추첨을 진행한다.
// 박람회에 참가한 방문객들은 입장시 행운권을 지급받으며, 추첨전에 자신의 회원번호를 적어 추첨함에 넣어 응모할 수 있다. 추첨행사는 저녁에 진행되기 때문에 그 이전에 귀가하는 방문객은 행운권 추첨에 참가할 수 없다.
// 방문객들의 회원 번호는 하나의 자연수이며 모든 회원의 회원번호는 고유하다.
// 그렇기에 당연히 추첨함에는 중복된 회원번호가 적힌 응모권이 존재하지 않아야 한다.
// 하지만 저녁 추첨행사에 참가할 수 없는 일부 방문객들이 타인의 회원번호를 적어 응모한 후 귀가했다는 사실을 알게되었다.
// 주최측에서는 이 문제에 대한 해결방안으로 두 개 이상의 옹모권에 적힌 회원번호는 추첨 대상에서 제외하기로 결정했다.
// 단, 당첨시킬 응모권의 수보다 추첨함에 담긴 응모권의 수가 적으면 회원번호가 중복되더라도 추첨 대상으로 인정하기로 했다.

// 입력 형식
// 첫번째 줄에는 당첨시킬 응모권의 수를 나타내는 1,000이하의 자연수가 입력된다.
// 두번째 줄에는 추첨함 속 응모권에 적혀 있는 회원번호가 공백(스페이스)로 구분하여 입력된다.
// - 모든 회원번호는 1,000이하의 자연수이다.

// 출력 형식
// 추첨 대상에 해당하는 회원 번호들을 한 줄에 하나씩 오름차순으로 공백(스페이스)로 구분하여 출력한다.
// - 동일한 회원번호는 중복으로 출력되지 않는다.
