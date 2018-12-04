const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const num = 0;

function queue(arr, num){
  if (num < 1 || typeof num != 'number' || typeof arr != 'object' || arr.length === 0){
    return 'there are no free ticket window or no visitors';
  } else {
    const lst = arr.sort((a, b) => b - a).splice(0, num);
    for (let i = 0; i < arr.length; i++){
      lst[lst.indexOf(Math.min.apply(null, lst))] += arr[i];
    }
    return Math.max.apply(null, lst);
  }
};
console.log(queue(arr, num));


/*


const a = [1, 3, 6, 8, 8, 8, 9, 14, 15, 20, 5, 16, 6, 1, 1, 4, 13, 67];
const a2 = [1, 1, 1, 3, 4, 5, 6, 6, 8, 8, 8, 9, 13, 14, 15, 16, 20, 67];
//console.log(a.reduce((a, b) => a + b, 0));
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function justTry(arr, num){
  const lst = arr.sort((a, b) => b - a).splice(0, num)
  for (let i = 0; i < arr.length; i++){
    lst[lst.indexOf(Math.min.apply(null, lst))] += arr[i];
  }
  return Math.max.apply(null, lst);
};
console.log(justTry([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 400], 500));

*/
/*
11 10 9 8 | 11 10 9 8
        7 | 11 10 9 15
      6   | 11 10 15 15
    5     | 11 15 15 15
4         | 15 15 15 15
3         | 18 15 15 15
  2       | 18 17 15 15
  */
/*
10 9 8 7 | 10 9 8 7
       6 | 10 9 8 13
     5   | 10 9 13 13
   4     | 10 13 13 13
 3       | 13 13 13 13
 2       | 15 13 13 13
   1     |    14
   */
/*
 67 20 | 67 20
    16 | 67 36
    15 | 67 51
    14 | 67 65
    13 | 67 78
  9    | 76 78
  8    | 84 78
     8 | 84 86
  8    | 92 86
     6 | 92 92
     6 | 92 98
  5    | 97 98
  4    |101 98
     3 |101 101
     1 |101 102
  1    |102 102
  1    |103
  */
  /*
10 9 | 10 9
   8 | 10 17
 7   | 17 17
 6   | 23 17
   5 | 23 23
   4 | 23 27
 3   | 26 27
 2   | 27 27
   1 | 27 28
*/
//console.log((b.reduce((a, b) => a + b, 0) - 3) / 4);
