
var getElementsByClassName = function(className){
	var result = [];
	function getElements (node){
    /*
    Look for className in document.classList
    If you find className (which is the target), 
    then push it into the result array. If not,
    then look deeper until you hit bottom. 
    And if you find it nested, then push it to the result array.
    */

    if (node.classList !== undefined && node.classList !== null && node.classList.contains(className)){
      result.push(node);
    }

    node.childNodes.forEach(elem => {
      getElements(elem);
    });

	}
  getElements(document.body);
  return result;
};


