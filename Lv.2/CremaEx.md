# Error Digit Range

A programmer wrote a data translation function, but it has a bug. It reads in a series of digits from a foreign system and converts them to their local equivalents. The bug causes it to translate one of the digits wrong. For example, the input data value is 11891. If the bug relates to the 1 digits, and it translates them as 9 local equivalent, the function returns 99899. Notice that the 9 in the original value is not affected. Only the 1 value will be translated wrong under these assumptions.

Any 1 of the 10 possible digits in the input value, the digits 0-9, will be replaced with any other 1 of the possible 10 digits. Without knowing Which digit value is translated worng, analyze a number to find the maximum and minimum values that might be returned from the function. Return the difference in these values.

## Note:

- A translation cannot change the number of significant digits in the input.
- The first digit of the output cannot be 0.
- It is possible the digit being replaced does not occur in the input. In other words, the number returned from the function may be correct. For example, replace all 8's in 111 or 999 results in no change because 8's do not occur.

## Function Description

Complete the findRange function in the editor below.

findRange has the following parameter(s):
int num: the correct integer input

## Return:

long int: the difference between the maximum and minimum possible return values

## Constraints

- 1 <= num <= 100000000

## Sample Case

Sample Input

```
123512
```

Sample Output

```
820082
```

Explanation

- The maximum possible reconstruction is 923592 when 1 is interpreted as 9.
- The minimum possible reconstruction is 103510 when 2 is interpreted as 0.
  Thus the difference is 820082

---

# Longest Subarray

A subarray of array "a" is defined as a contiguous block of "a"'s elements having a length that is less than or equal to the length of the array. For example, the subarrays of array "a"=[1,2,3] are [1],[2],[3],[1,2],[2,3] and [1,2,3]. Given an integer, "k"=3, the subarrays having element that sum to a number <= "k" are [1],[2] and [1,2]. The longest of these subarrays is [1,2], which has a length of 2. Given an array, "a", determine its longest subarray that sums to less than or equal to a given value "k".

## Function Description

Complete the function maxLength in the editor below. The function must return an integer that represents the length of the longest subarray of "a" that sums to a number <= "k".

maxLength has the following parameter(s):
a[a[0],...,a[n-1]]: an array of integers
k: an integer

## Constains

- 1 <= n <= 100000
- 1 <= a[i] <= 1000
- 1 <= k <= 1000000000

## Sample Case

Sample Input

```
3
1
2
3
4
```

Sample Output

```
2
```

Explanation
The subarrays of [1,2,3] having elements that sum to a number <= ("k"=4) are [1],[2],[3] and [1,2]. The longest of these is [1,2], which has a length of 2. Return 2 as the answer.

---

# Longest Subarray

Given an array of words representing a dictionary, test each word to see if it can be made into another word in the dictionary when characters are removed one at a time. Each word represents its own first element of its string chain, so start with a string chain length of 1. Each time a character is removed, increment the string chain by 1. In order to remove a character, the resulting word must be in the original dictionary. Determine the longest string chain achievable for a given dictionary.

## Example

'n' = 4,
'words' = ['a','and','an','bear']
The word 'and' could be reduced to 'an' and then to 'a'.The single character 'a' cannot be reduced any further because there is not a null string in the dictionary. The word 'bear' cannot be reduced at all. The longest string chain has a length of 3.

## Function Description

Complete the function longestChain in the editor below.

longestChain has the following parameter(s):
int n: length of words
string words[n]: dictionary of strings to test

## Returns

int: the length of the longest string chain

## Constraints

- 1 <= 'n' <= 50000
- 1 <= |words[i]| <=60 , where 0 <= 'i' < 'n'
- Each words[i] is composed of lowercase letters in the range ascii[a-z].

## Sample Case

Sample Input

```
['a','b','ba','bca','bda','bdca']
```

Sample Output

```
4
```

---

# Minimum Tree Path

Given an unrooted, unweighted tree of 'n' nodes, traverse the tree from node 1 to node 'n'. The path must go through nodes listed in the visitNodes array in any order.

That is, the path

- starts at node 1.
- ends at node 'n'.
- can only travel from a node to an adjacent node.
- can visit a node any number of times.
- includes each of the nodes in visitNodes at least once.

Return the length of the shortest of these paths.

## Example

'n'=5,
'edges' = [[1,2],[1,3],[3,4],[3,5]]
'visitNodes' = [2,4]

The minimum length path is 1 -> 2 -> 1 -> 3 -> 4 -> 3 -> 5
Return the path length,6.

## Function Description

Complete the function minimumTreePath in the editor below.

minimumTreePath has the following parameters:
int 'n': the number of nodes in the tree
int edges[n-1][2]: a 2d array of connected nodes
int visitNodes[m]: nodes to include in the path

## Returns

int: the minimum path length

## Constraints

- 1 <= n <= 2\*10000
- 1 <= edges[i][0],edges[i][1] <= n
- 0 <= m <= max(0,n-2)
- 2 <= visitNodes[i] <= n-1
- The elements of visitNodes are distinct

## Sample Case

Sample Input

```
n=3
edges=[(1,2),(1,3)]
visitNodes=[2]
```

Sample Output

```
3
```

Explanation
The minimum length path is 1 -> 2 -> 1 -> 3
