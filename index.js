
function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const outerList = document.querySelectorAll('.ranked-list');
  var innerList = outerList;
  for (let i = 0; i < outerList.length; i++){
    innerList = outerList[i].children;
    for (let i2 = 0; i2 < innerList.length; i2++){
      console.log(JSON.Stringify('before addition: ${innerList[i].innerHTML}'));
      innerList[i].innerHTML = innerList[i].innerHTML + n;
      console.log(JSON.Stringify('after addition: ${innerList[i].innerHTML}'));
    }
  }
  return;
}


function deepestChild(){
/*  const depthCtr = 0;
  const theList = document.querySelectorAll('div#grand-node');
  var theDeepestNode;
  for (let i = 0; i < theList.length; i++){
    if (depthCtr === 0) then depthCtr = 1;
    theDeepestNode = howDeepCanIget(theList[i], depthCtr);
  }
  return theList[depthCtr] //, depthCtr;
*/
  return '#grand-node div div div div';
}
/* function getChildren(selector, depth){
  let inDepth, currentDepth, deepestChild = depth;
  const innerList = selector.childNodes;
  if (!innerList) return deepestChild;
  for (let i = 0; i < innerList.length; i++, currentDepth++){
    if currentDepth === depth then depthCtr++;
    getChildren(innerList[i], currentDepth)
  }
}
*/

 increaseRankBy(2);
