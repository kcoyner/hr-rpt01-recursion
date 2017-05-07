// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (Object(obj) && Object.prototype.toString.call(obj) !== '[object Array]'){
    return stringifyObj(obj);
  } else if (Object.prototype.toString.call(obj) === "[object Null]"){
    return "null";
  } else if (Object.prototype.toString.call(obj) === "[object String]") {
    return `"${obj.toString()}"`;
  } else if (Object.prototype.toString.call(obj) === "[object Boolean]") {
    return obj.toString();
  } else if (Object.prototype.toString.call(obj) === "[object Number]") {
    return obj.toString();
  } else if (Object.prototype.toString.call(obj) === "[object Array]") {
    return stringifyArr(obj);
  }
};


var foo = [1,2];
var foo = {'a': 'apple'};
var foo = ['1','2'];
var foo =  [[[[[[['abc']]]]]]];

console.log(stringifyJSON(foo));
console.log(JSON.stringify(foo));

function stringifyArr (obj) {
  let pre = '[';
  let post = ']';
  let str = '';
  for (let item of obj) {
    str += stringifyJSON(item);
    str = `${str},`;
  }
  str = str.slice(0, str.length - 1);
  return pre + str + post;
}

function stringifyObj (obj) {
  let pre = '{';
  let post = '}';
  var strKey = '';
  var strVal = '';
  // console.log('obj: ', obj);
  for (var x in obj) {
    // console.log('x: ', x);
    // console.log('obj[x]: ', obj[x]);
    // strKey = stringifyJSON(x);
    strVal += stringifyJSON(obj.x);
    console.log('strVal: ', strVal);
  }
  return pre + strKey + strVal + post;
}



