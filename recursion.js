module.exports = function recursion(obj) {
  if(recursion.arr === undefined) recursion.arr = [];
  let stage = 0;
  let curVal = obj.value;
  let tempTree = Object.assign({},obj);
  while(curVal != tempTree.value) {
    if(curVal > tempTree.value) tempTree = tempTree.right;
    else tempTree = tempTree.left;
    stage++;
  }
  if(!Array.isArray(recursion.arr[stage])) recursion.arr[stage] = [];
  recursion.arr[stage].push(obj.value);
  if(obj.left !== undefined) recursion(obj.left);
  if(obj.right !== undefined) recursion(obj.right);
  return recursion.arr;
}
