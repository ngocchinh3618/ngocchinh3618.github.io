var content="";
function reset(){
  document.getElementById("outputData").value='';
  content = ''
}
function myfunction(e){
  
  content += e.innerHTML;
  document.getElementById("outputData").value = content;

  e.innerHTML == 'AC' && reset();
}

function myKQ(){
  document.getElementById("outputData").value = eval(content);
  content=document.getElementById("outputData").value
}