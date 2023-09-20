function solution(inputArray) {
  let arrayWord = inputArray.split("");
  let insideParenthese = false;
  let newReferenceArray = [];
  let newRefArrayCnt = 0;
  let currentRef = "";

  let result = [];
  let resultCount = 0;

  let numOfReference = [];
  let numOfRefCnt = 0;

  for (const char of arrayWord) {
    if (char === "[") {
      result[resultCount++] = "[";
      insideParenthese = true;
    } else if (char === "]") {
      if (currentRef !== "") {
        let found = newReferenceArray.indexOf(currentRef);

        if (found === -1) {
          newReferenceArray.push(currentRef);
          numOfReference.push(newRefArrayCnt);
          newRefArrayCnt++;
        } else {
          numOfReference.push(found);
        }
      }

      numOfReference.sort((a, b) => a - b);

      for (let i = 0; i < numOfReference.length; i++) {
        result[resultCount++] = " " + (numOfReference[i] + 1);
        if (i + 1 < numOfReference.length) {
          result[resultCount++] = ",";
        }
      }

      numOfReference = [];
      numOfRefCnt = 0;
      currentRef = "";
      result[resultCount++] = " ]";
      insideParenthese = false;
    } else if (insideParenthese) {
      if (char === ",") {
        let found = newReferenceArray.indexOf(currentRef);

        if (found === -1) {
          newReferenceArray.push(currentRef);
          numOfReference.push(newRefArrayCnt);
          newRefArrayCnt++;
        } else {
          numOfReference.push(found);
        }
        currentRef = "";
      } else if (char !== " ") {
        currentRef += char;
      }
    } else {
      result[resultCount++] = char;
    }
  }

  console.log(result.join(""));
  for (let i = 0; i < newReferenceArray.length; i++) {
    console.log("[" + (i + 1) + "] " + newReferenceArray[i]);
  }
}

const input2 =
  "Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously.[ some_paper_a, some_paper_b ] We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions.[ some_book_a, some_paper_a ] We provide comprehensive empirical evidence showing that these residual networks are easier to optimize, and can gain accuracy from considerably increased depth. [ some_book_b ]";

solution(input2);

const input = "deeper previously.[ some_paper_a, some_paper_b ] We [ some_book_a, some_paper_a ] increased depth. [ some_book_b ]";
const array_word = input.split("");
