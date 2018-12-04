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
