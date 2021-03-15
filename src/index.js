module.exports = function reverse (n) {
  let str =n.toString();
  let arr = str.split('');
  let x = arr.reverse();
    let y = x.join('');
    if(y.includes("-") == true){
        
        y = y.substring(0, y.length - 1); 
    }
  return y;
}
