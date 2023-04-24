const dfs = (iceTray, i, j) => {
  if (i < 0 || j < 0 || i >= iceTray.length || j >= iceTray[0].length || iceTray[i][j] !== 1) {
  }

  iceTray[i][j] = -1;

  dfs(iceTray, i + 1, j);
  dfs(iceTray, i - 1, j);
  dfs(iceTray, i, j + 1);
  dfs(iceTray, i, j - 1);
  console.log("트레이", iceTray);
};

const countIceCreams = (iceTray) => {
  let count = 0;
  for (let i = 0; i < iceTray.length; i++) {
    for (let j = 0; j < iceTray[0].length; j++) {
      if (iceTray[i][j] === 1) {
        count++;
        console.log("카운트:", count);
        dfs(iceTray, i, j);
      }
    }
  }
  return count;
};

const iceTray = [
  [1, 1, 0, 0, 1],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
];
console.log(countIceCreams(iceTray)); // Output: 3
