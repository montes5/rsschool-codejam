function sumOfOther(arr) {
  let tempArr = [];
  for(let i = 0; i < arr.length; i++) {
    tempArr[i] = arr.slice(0,i).concat(arr.slice(i+1)).reduce((acc,elem) => acc + elem);
  }
  return tempArr;
}
