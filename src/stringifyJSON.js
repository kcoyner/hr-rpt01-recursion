
var stringifyJSON = function(obj) {
  if (Object.prototype.toString.call(obj) === "[object Null]"){
    return "null";
  } else if (Object.prototype.toString.call(obj) === "[object String]") {
    return `"${obj}"`;
  } else if (Object.prototype.toString.call(obj) === "[object Boolean]") {
    return `${obj}`;
  } else if (Object.prototype.toString.call(obj) === "[object Number]") {
    return `${obj}`;
  } else if (Object.prototype.toString.call(obj) === "[object Array]") {
    return stringifyArr(obj);
  } else if (Object(obj) && Object.prototype.toString.call(obj) !== '[object Array]'){
    return stringifyObj(obj);
  } 
};

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
  if (Object.prototype.toString.call(obj) === "[object Function]") {
    return "";
  } else if (Object.prototype.toString.call(obj) === "[object Undefined]") {
    return "";
  } else {
    let pre = '{';
    let post = '}';
    var strKey = '';
    var strVal = '';
    var keyVal = '';
    var theKeys = Object.keys(obj);
    for (var x of theKeys) {
      if (obj[x] === 'functions' || obj[x] === undefined){
        return '{}';
      }
      strKey = stringifyJSON(x);
      strVal = stringifyJSON(obj[x]);
      keyVal += `${strKey}:${strVal}`;
      keyVal = `${keyVal},`;
    }
    keyVal = keyVal.slice(0, keyVal.length - 1);
    return pre + keyVal + post;
  }
}


/*
var foo = 9;
var foo = [1,2];
var foo = 'kevin';
var foo = ['1','2'];
var foo =  [[[[[[['abc']]]]]]];
var foo = {'a': 'apple'};
var foo = {'foo': true, 'bar': false, 'baz': null};
var foo = {a: '1', b: { c: { d: { g: 7, h: [[['', null, 'V']], 'i', 'c', {'bet you cant': 'get here by today'}]}, e: 5}}, f: 6};
var foo = {
    'functions': function() {},
    'undefined': undefined
  };

console.log(stringifyJSON(foo));
console.log(JSON.stringify(foo));
*/
