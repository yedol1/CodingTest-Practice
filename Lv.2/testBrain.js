function firstReverseArray(arr) {
  var result = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(firstReverseArray([1, 2, 3, 4, 5]));

function secondReverseArray(arr) {
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  console.log(arr);
}

console.log(secondReverseArray([1, 2, 3, 4, 5]));

function countEnumerableProperties(obj) {
  let count = 0;
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      count++;
    }
  }
  return count;
}

console.log(countEnumerableProperties((a = { a: 1, b: 2, c: 3 })));

function solution(str) {
  let wordCounts = {};
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (!wordCounts[word]) {
      wordCounts[word] = 0;
    }
    wordCounts[word]++;
  }
  for (let word in wordCounts) {
    console.log(`${word}: ${wordCounts[word]}`);
  }
}

console.log(solution("The quick brown brown quick"));

function consecutiveCounts(s) {
  let result = [];
  let currentCount = 1;
  let currentNum = s[0];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === currentNum) {
      currentCount++;
    } else {
      result.push(currentCount);
      currentNum = s[i];
      currentCount = 1;
    }
  }
  result.push(currentCount);
  return result;
}
console.log(consecutiveCounts("00011101"));

function moveElement(a, orgIndex, newIndex) {
  if (orgIndex < 0 || orgIndex >= a.length || newIndex < 0 || newIndex >= a.length) {
    return;
  }
  let element = a[orgIndex];
  a.splice(orgIndex, 1);
  a.splice(newIndex, 0, element);
  return a;
}
console.log(moveElement((a = ["a", "b", "c", "d"]), (orgIndex = 3), (newIndex = 0)));

function calculateSumOfLength(t) {
  if (!t || !t.length) return;

  const tree = {};
  t.forEach((node) => {
    tree[node.id] = { ...node, children: [] };
  });
  Object.values(tree).forEach((node) => {
    const parent = tree[node.parentId];
    if (parent) {
      parent.children.push(node);
    }
  });

  const calculate = (node) => {
    let sum = node.value.length;
    node.children.forEach((child) => {
      sum += calculate(child);
    });
    node.sumOfLength = sum;
    return sum;
  };

  Object.values(tree).forEach((node) => {
    if (!node.parentId) {
      calculate(node);
    }
  });

  t.forEach((node) => {
    node.sumOfLength = tree[node.id].sumOfLength;
  });
}

console.log(
  calculateSumOfLength([
    { id: "a", parentId: null, value: "z" },
    { id: "b1", parentId: "a", value: "zz" },
    { id: "b2", parentId: "a", value: "zzz" },
    { id: "c1", parentId: "b1", value: "zzzz" },
  ])
);
