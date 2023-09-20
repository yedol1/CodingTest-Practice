function solution(dots, lines) {
  let minSegments = 11;

  function coverDots(startIndex, usedSegments) {
    console.log("시작인덱스:", startIndex);
    console.log("사용 선분갯수:", usedSegments);
    if (startIndex === dots.length) {
      minSegments = Math.min(minSegments, usedSegments);
      return;
    }

    for (let line of lines) {
      console.log("--------접근!!!!!!---------");
      let endPoint = dots[startIndex] + line;
      let nextIndex = startIndex;

      while (nextIndex < dots.length && dots[nextIndex] <= endPoint) {
        nextIndex++;
      }

      if (nextIndex > startIndex) {
        coverDots(nextIndex, usedSegments + 1);
      }
    }
  }

  coverDots(0, 0);

  return minSegments === 11 ? -1 : minSegments;
}

console.log(solution([1, 5, 8], [1, 3, 4, 7]));

// 제공된 JavaScript 함수 'solution(dots, lines)'은 제공된 입력을 기반으로 주어진 모든 점을 포함하는 데 필요한 최소 선분 수를 계산합니다. 다음은 코드에 사용된 알고리즘에 대한 설명입니다.

// 'minSegments' 변수를 필요한 최대 선 세그먼트 수보다 큰 값인 101로 초기화합니다.

// 두 개의 매개변수를 사용하는 재귀 함수 'coverDots(startIndex, usedSegments)'를 정의합니다.

// startIndex: dots 배열에서 발견되지 않은 첫 번째 지점의 인덱스입니다.
// usedSegments: 지금까지 사용된 라인 세그먼트의 수입니다.

// coverDots 함수 내부에서 startIndex가 dots 배열의 길이와 같은지 확인합니다. 그렇다면 모든 포인트가 커버됩니다. 현재 값과 usedSegments 사이의 최소값으로 minSegments를 업데이트한 다음 반환합니다.

// startIndex가 dots 배열의 길이와 같지 않으면 아직 덮이지 않은 점이 있음을 의미합니다. lines 배열의 각 선분에 대해 startIndex의 점 위치에 선의 길이를 더하여 선분의 끝점을 계산합니다.

// startIndex와 동일한 새 변수 nextIndex를 초기화합니다. nextIndex가 dots 배열의 범위 내에 있고 nextIndex의 점이 현재 라인 세그먼트의 끝점보다 작거나 같으면 nextIndex를 증가시킵니다. 이 루프는 현재 선분을 사용한 후 덮이지 않은 다음 점을 찾습니다.

// nextIndex가 startIndex보다 크면(현재 라인 세그먼트가 적어도 하나의 지점을 포함함을 의미) 업데이트된 nextIndex로 coverDots 함수를 재귀적으로 호출하고 usedSegments를 1씩 증가시킵니다.

// 재귀 프로세스는 모든 포인트가 처리될 때까지 계속되며, 이 시점에서 'minSegments' 변수는 필요한 선 세그먼트의 최소 수를 저장합니다

// 재귀가 완료된 후 'minSegments'의 최종 값이 여전히 11인지 확인합니다. 그렇다면 솔루션을 찾지 못했음을 의미하며 함수는 -1을 반환해야 합니다. 그렇지 않으면 모든 점을 포함하는 데 필요한 선 세그먼트의 최소 수를 나타내는 'minSegments' 값을 반환합니다.

// 이 알고리즘은 재귀적 접근 방식을 사용하여 제공된 입력을 기반으로 주어진 모든 점을 포함하는 데 필요한 최소 선분 수를 효과적으로 찾습니다.
