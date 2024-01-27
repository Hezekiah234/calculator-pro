function myAnswer(){
 try{
   document.getElementById('inp').value = eval(document.getElementById('inp').value).toFixed(1);
  }catch (error){
   document.getElementById('inp').value = '';
  }
 }

 function total(val) {
  // display.innerHTML += ''
  document.getElementById('inp').value += val;
}
function clearAll() {
 document.getElementById('inp').value =''
}
 let arr = []
function clearLast() {

 arr.splice(inp, 1)
 document.getElementById('inp').value = ""
}
function off(){
  var window
 window.close
}