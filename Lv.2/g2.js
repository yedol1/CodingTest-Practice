function solution(P) {
  let firstRightArrowIdx = -1;
  let endLeftArrowIdx = -1;

  for (let i = 0; i < P.length; i++) {
    if (firstRightArrowIdx === -1 && P[i] === ">") {
      firstRightArrowIdx = i;
    }
    if (firstRightArrowIdx !== -1 && P[i] === "<") {
      endLeftArrowIdx = i;
    }
  }

  if (firstRightArrowIdx === -1 || endLeftArrowIdx === -1) {
    return P.length;
  } else {
    return P.length - (endLeftArrowIdx - firstRightArrowIdx + 1);
  }
}

console.log(solution("<<<><"));
