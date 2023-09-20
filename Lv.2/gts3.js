// 한 번에 최대 N 잔까지 동시에 커피를 추출할 수 있는 커피 추출기가 있습니다. 이 커피 추출기를 이용해 커피를 만들 때, 커피가 만들어지는 순서를 구하려 합니다.
// 만들어야 하는 커피가 M잔이면, 커피에 1부터 M까지 순서대로 주문번호가 붙어있습니다. 또, 주문번호 순으로 빈 커피 추출구에 서 커피를 만들기 시작합니다. 만약 빈 추출구가 없다면, 빈 추출구가 생길 때까지 다음 주문은 잠시 기다리며, 빈 추출구가 생기면 대기 중인 다음 커피를 즉시 만들기 시작합니다.
// 모든 커피는 만드는데 일정 시간이 소요되는데, 소요 시간은 커피 종류별로 다를 수 있습니다. 따라서 커피 제조 시간에 따라 각 주 문이 완료되는 순서는 다를 수 있습니다.
// 커피 추출구 개수 N, 각 커피를 만드는데 걸리는 시간이 주문번호 순서대로 담긴 배열 coffee._times가 매개변수로 주어질 때, 커 피가 완성되는 순서대로 주문번호를 배열에 담아 return 하도록 solution 함수를 자바스크립트 코드로 완성해주세요.
// 단, 커피 주문이 추출구에 배정되는데 걸리는 시간은 없다고 가정하며, 커피 추출이 동시에 완료됐을 경우 작은 주문번호가 앞에 오 도록 하면 됩니다.
// 제한사항
// • N은 1 이상 10,000 이하인 자연수입니다.
// • coffee_times의 길이는 1 이상 300,000 이하입니다.
// • coffee_ times의 원소는 1 이상 100,000,000 이하인 자연수입니다.

function solution(N, coffee_times) {
  let extractors = Array(N).fill(0);
  let orderNumbers = Array(N).fill(0);
  let completedOrders = [];

  let currentOrder = 0;

  while (completedOrders.length < coffee_times.length) {
    for (let j = 0; j < extractors.length; j++) {
      if (extractors[j] > 0) {
        extractors[j] -= 1;
      }

      if (extractors[j] === 0 && orderNumbers[j] !== 0) {
        completedOrders.push(orderNumbers[j]);
        orderNumbers[j] = 0;
      }
    }

    for (let j = 0; j < extractors.length; j++) {
      if (extractors[j] === 0 && currentOrder < coffee_times.length) {
        extractors[j] = coffee_times[currentOrder];
        orderNumbers[j] = currentOrder + 1;
        currentOrder += 1;
      }
    }
  }

  return completedOrders;
}

console.log(solution(3, [4, 2, 2, 5, 3]));
console.log(solution(1, [100, 1, 50, 1, 1]));

// 이 함수는 커피 추출기의 수인 'N'과 각 커피를 순서대로 만드는 데 걸리는 시간을 포함하는 배열인 'coffee_times'의 두 가지 입력 매개변수를 사용합니다. 커피 주문이 완료된 순서대로 주문 번호가 포함된 배열을 반환합니다.

// 알고리즘은 다음과 같이 작동합니다.

// 길이가 'N'인 배열 'extractors'를 초기화하고 0으로 채웁니다. 이 배열은 각 추출기의 남은 추출 시간을 저장합니다.
// coffee_times와 길이가 같은 배열 orderNumbers를 초기화하고 0으로 채웁니다. 이 배열은 각 추출기에 할당된 주문 번호를 저장합니다.
// 빈 배열 completedOrders를 초기화하여 커피 완료 순서대로 주문 번호를 저장합니다.
// coffee_times 배열을 반복하고 각 커피 주문에 대해 모든 추출기 중에서 최소 추출 시간을 찾아 모든 추출기의 추출 시간에서 뺍니다.
// 추출기가 커피 추출을 완료하고(남은 추출 시간은 0) 할당된 주문 번호가 있는 경우 주문 번호를 completedOrders 배열에 푸시하고 orderNumbers 배열의 해당 주문 번호를 0으로 설정합니다.
// 남은 추출 시간이 0인 첫 번째 사용 가능한 추출기를 찾고 추출 시간을 'coffee_times' 배열의 값으로 설정하고 주문 번호를 'orderNumbers'의 해당 인덱스에 할당하여 현재 커피 주문을 할당합니다. 정렬.
// 모든 커피 주문이 추출기에 할당된 후에도 여전히 일부 추출이 진행 중일 수 있습니다. 최소 추출 시간을 찾아 모든 추출기의 추출 시간에서 빼고 완료된 주문 번호를 'completedOrders' 배열로 푸시하는 과정을 모든 주문이 완료될 때까지 계속합니다.
// 커피가 완성된 순서대로 주문 번호가 포함된 completedOrders 배열을 반환합니다.

// 이 기능은 주어진 커피 추출기 수와 커피 추출 시간을 기반으로 커피 주문이 완료되는 순서를 효율적으로 계산합니다.
