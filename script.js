
const textbox=document.getElementById("textbox");
const toF=document.getElementById("toF");
const toC=document.getElementById("toC");
const button=document.getElementById("button");
const reset=document.getElementById("reset");
const result=document.getElementById("result");
let temperature;

function convert(){
  if(toC.checked){
    temperature=Number(textbox.value)
    temperature=(temperature - 32) * (5/9);
    result.textContent=temperature.toFixed(1) +"°C"

  }
  else if(toF.checked){
    temperature=Number(textbox.value)
    temperature=temperature * 9/5 + 32;
    result.textContent=temperature.toFixed(1) +"°F"

  }
  else if (textbox.value=== "" || isNaN(textbox.value)) {
    result.textContent="Please select a unit to convert"
  }
  else{
    result.textContent="Please select a unit to convert"
  }
}
function clearField(){
  textbox.value="0";
  result.textContent = "";
  toC.checked=false
  toF.checked=false
}

