function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  var rankedItems = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < rankedItems.length; i++) {
    rankedItems[i].innerHTML = parseInt(rankedItems[i].innerHTML) + n;
  }
}

function deepestChild() {
  const grandNode = document.getElementById('grand-node')
  const grandNodeChildren = grandNode.querySelectorAll('div');
  const lastChild = (grandNodeChildren.length - 1);
  const theTarget = grandNodeChildren[lastChild];
  console.log(theTarget.innerHTML);
}

function myFunction() {
  // console.log('test');
  console.log(document.getElementByID('grand-node').querySelectorAll('div')[3])
}

function deepestChild() {
  var grandNode = document.getElementById('grand-node')
  var grandNodeChildren = grandNode.querySelectorAll('div');
  var lastChild = (grandNodeChildren.length - 1);
  var theTarget = grandNodeChildren[lastChild];
  return theTarget;
  // console.log(theTarget.innerHTML);
}
