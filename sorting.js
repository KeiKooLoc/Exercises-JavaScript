function genNumArr(){
  return Array.from(Array(100), x => Math.floor(Math.random() * 100));
};

function genStr(){
  let str = '';
  const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let strLen = Math.floor(Math.random() * 10) + 1;
  for (let i = 0; i < strLen; i++){
    str += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  return str;
};

function genStrArr(){
  return Array.from(Array(30), x => genStr());
};

function genObjArr(){
  const arr = [];
  const salary = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
  for (let i = 0; i < 30; i++){
    arr.push(
    {
      name: genStr(),
      salary : salary[Math.floor(Math.random() * salary.length)]
    }
  )};
  return arr;
};

////////// SORTING ARRAY OF NUMBERS //////////
function ascendingNum(arr){
  return arr.sort((a, b) => a - b);
};

function descendingNum(arr){
  return arr.sort((a, b) => b - a);
};

////////// SORTING ARRAY OF STRINGS //////////
function ascendingStr(arr){
  return arr.sort((a, b) => a.localeCompare(b));
};

function descendingStr(arr){
  return arr.sort((a, b) => a.localeCompare(b)).reverse();
};

function ascendingStrLen(arr){
  return arr.sort((a, b) => a.length - b.length  || a.localeCompare(b))
};

//sorting array of strings in descending order by string length
//and strings with the same length sorting by alphabet in descending order
function descendingStrLen(arr){
  arr.sort(function(a, b){
    if (b.length === a.length){
      return a.localeCompare(b) === -1 ? 1 : a.localeCompare(b) === 1 ? -1 : 0;
    }
    return b.length - a.length;
  });
  return arr;
};

////////// SORTING ARRAY OF OBJECTS //////////
function ascendingName(arr){
  return arr.sort((a, b) => a.name.localeCompare(b.name));
};

function descendingName(arr){
  return arr.sort((a, b) => a.name.localeCompare(b.name)).reverse();
};

function ascendingSalary(arr){
  return arr.sort((a, b) => a.salary - b.salary || a.name.localeCompare(b.name));
};


//sorting array of obj by salary prop. in descending order
// and objects with the same salary sorted in descending order by alphabet by name prop.
function descendingSalary(arr){
  return arr.sort(function(a, b){
    if (b.salary === a.salary){
      return a.name.localeCompare(b.name) === -1 ? 1 : a.name.localeCompare(b.name) === 1 ? -1 : 0;
    }
    return b.salary - a.salary;
  });
};

// sort array of objects in ascending order by salary then by name length and then by alphabet
function ascendingObjArr(arr){
  return arr.sort((a, b) => a.salary - b.salary || a.name.length - b.name.length || a.name.localeCompare(b.name));
};

// sort array of objects in descending order by salary then by name length and then by alphabet
function descObjArr(arr){
  arr.sort(function(a, b){
    if (b.salary - a.salary !== 0){
      return b.salary - a.salary;
    } else if (b.name.length - a.name.length !== 0) {
      return b.name.length - a.name.length;
    } else {
      return a.name.localeCompare(b.name) === -1 ? 1 : a.name.localeCompare(b.name) === 1 ? -1 : 0;
    }
  });
  return arr;
};

/*
console.log(`ASCENDING NUM SORT: ${ascendingNum(genNumArr())}`);
console.log('---------------------------');
console.log(`DESCENDING NUM SORT: ${descendingNum(genNumArr())}`);
console.log('---------------------------');
*/
/*
console.log('ASCENDING STR SORT: ', ascendingStr(genStrArr()));
console.log('---------------------------');
console.log('DESCENDING STR SORT: ', descendingStr(genStrArr()));
console.log('---------------------------');

console.log('strings with the same length are sorted by alphebet in ascending order', ascendingStrLen(genStrArr()));
console.log('strings with the same length are sorted by alphebet in descending order', descendingStrLen(genStrArr()));
*/
/*
console.log('ASCENDING OBJ BY NAME SORT: ', ascendingName(genObjArr()));
console.log('---------------------------');
console.log('DESCENDING OBJ BY NAME SORT: ', descendingName(genObjArr()));
console.log('---------------------------');
console.log('ASCENDING OBJ BY SALARY SORT: ', ascendingSalary(genObjArr()));
console.log('---------------------------');
console.log('DESCENDING OBJ BY SALARY SORT: ', descendingSalary(genObjArr()));
console.log('---------------------------');
*/
/*
console.log(ascendingObjArr(genObjArr()));
console.log(descObjArr(genObjArr()));
*/
