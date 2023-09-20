function solution(K, user_scores) {
  let ranking = [];
  let changes = 0;
  let prevPage1 = [];

  user_scores.forEach((scoreData, timestamp) => {
    const [nickname, score] = scoreData.split(" ");
    const scoreNum = parseInt(score, 10);

    const userIndex = ranking.findIndex((user) => user.nickname === nickname);

    if (userIndex === -1) {
      ranking.push({ nickname, score: scoreNum, timestamp });
    } else if (ranking[userIndex].score < scoreNum) {
      ranking[userIndex].score = scoreNum;
    } else {
      return;
    }

    ranking.sort((a, b) => b.score - a.score || a.timestamp - b.timestamp);
    let newPage1 = ranking.slice(0, K).map((user) => user.nickname);
    console.log("뉴페이지:", newPage1);
    console.log("전페이지:", newPage1);

    if (JSON.stringify(newPage1) !== JSON.stringify(prevPage1)) {
      prevPage1 = newPage1;
      changes += 1;
    }
  });

  return changes;
}

console.log(solution(3, ["a 100", "b 200", "c 150", "d 100", "a 120", "c 300", "b 110"]));

// 제공된 자바스크립트 함수 solution(K, user_scores)는 주어진 기준에 따라 순위 페이지가 변경된 횟수를 계산합니다. 코드에 대한 단계별 설명은 다음과 같습니다.

// 변수를 초기화합니다.

// ranking: 사용자의 현재 순위를 저장할 빈 배열입니다.
// changes: 순위 페이지의 변경 횟수를 추적하는 카운터입니다.
// prevPage1: 순위의 첫 번째 페이지에 표시되는 이전 닉네임을 저장할 배열입니다.

// forEach를 사용하여 user_scores 배열의 각 항목을 반복합니다.

// split(" ") 메소드를 사용하여 scoreData 항목을 nickname 및 score로 분할합니다.
// score 문자열을 parseInt(score, 10)을 사용하여 정수로 변환합니다.

// findIndex를 사용하여 인덱스를 찾아 사용자가 이미 ranking 배열에 있는지 확인합니다. 사용자가 없으면 nickname, score 및 timestamp를 사용하여 ranking 배열에 새 항목을 추가합니다. 사용자가 이미 있고 새 점수가 현재 점수보다 큰 경우 'ranking' 배열에서 점수를 업데이트합니다. 사용자의 새 점수가 현재 점수보다 크지 않으면 무시하고 user_scores 배열의 다음 항목으로 이동합니다.

// 점수와 타임스탬프를 기준으로 '순위' 배열을 정렬합니다. 점수가 더 높은 사용자가 먼저 정렬된 다음 점수는 같지만 타임스탬프가 더 이른 사용자 순으로 정렬됩니다.

// 정렬된 'ranking' 배열에서 상위 K 사용자의 닉네임을 포함하는 새 배열 'newPage1'을 만듭니다.

// newPage1 배열을 prevPage1 배열과 비교합니다. 동일하지 않은 경우(순위 페이지에 변경 사항이 있음을 의미) changes 카운터를 증가시키고 새로운 닉네임 세트로 prevPage1을 업데이트합니다.

// user_scores 배열의 각 항목에 대해 이 프로세스를 계속합니다.

// 마지막으로 changes 카운터를 반환하여 순위 페이지의 총 변경 수를 반환합니다.

// 이 기능은 주어진 사용자 점수와 순위 기준에 따라 순위 페이지의 변경 횟수를 정확하게 계산합니다.
