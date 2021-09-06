function display(value){
    document.getElementById("result").value+=value;
    
}
function compute(){
    var myInput = document.getElementById("result").value;
    var myOutput = eval(myInput);
    document.getElementById("result").value = myOutput;
}
function clr(){
    document.getElementById("result").value = "";   
}
function del(){
    document.getElementById("result").value = document.getElementById("result").value.slice(0, -1);
}
function sqr(){
    var inVal = document.getElementById("result").value;
    var proVal = Math.pow(inVal, 2);
    document.getElementById("result").value = proVal;
}
function log(){
    var inexVal = document.getElementById("result").value;
    var prexVal = Math.log(inexVal) / Math.LN10;
    document.getElementById("result").value = eval(prexVal);
}
function In(){
    var incexVal = document.getElementById("result").value;
    var precxVal = Math.log(incexVal);
    document.getElementById("result").value = eval(precxVal);
}
function inv(){
    var valInp = document.getElementById("result").value;
    var valPro = 1 / valInp;
    var execPro = eval(valPro)
    document.getElementById("result").value = execPro;
}
function sqrt(){
    var exInp = document.getElementById("result").value;
    var exPro = Math.sqrt(exInp);
    document.getElementById("result").value = exPro;
}

function shift(){
    if(document.getElementById("sine").value == "sin" && document.getElementById("cosine").value == "cos"
    && document.getElementById("tangent").value ==  "tan" ){
        document.getElementById("sine").value = "sin^-1";
        document.getElementById("cosine").value = "cos^-1";
        document.getElementById("tangent").value = "tan^-1";
    }
}
function shiftrt(){
    if(document.getElementById("sine").value = "sin^-1"){
        document.getElementById("sine").value = "sin";
    }
   if(document.getElementById("cosine").value = "cos^-1" ){
       document.getElementById("cosine").value = "cos";
   }
    if(document.getElementById("tangent").value = "tan^-1"){
        document.getElementById("tangent").value = "tan";
    }
} 
function sin(){
     if( document.getElementById("cosine").value == "cos"){
    var inpValue = document.getElementById("result").value;
    var expValue = Math.sin((inpValue * Math.PI ) / 180);
    var proValue = eval(expValue);
    document.getElementById("result").value = proValue.toFixed(4);
     }
      else if (document.getElementById("cosine").value == "cos^-1") {
    document.getElementById("cosine").value = "cos^-1";
    var inpeValue = document.getElementById("result").value;
    var expeValue = Math.asin(inpeValue);
    var intmValue= expeValue * 180 / Math.PI;
    var proValue = eval(intmValue);
    document.getElementById("result").value =proValue.toFixed(4);
    }
}
function cos(){
     if( document.getElementById("cosine").value == "cos"){
    var inpValue = document.getElementById("result").value;
    var expValue = Math.cos((inpValue * Math.PI ) / 180);
    var proValue = eval(expValue);
    document.getElementById("result").value = proValue.toFixed(4);
     }
      else if (document.getElementById("cosine").value == "cos^-1") {
    document.getElementById("cosine").value = "cos^-1";
    var inpeValue = document.getElementById("result").value;
    var expeValue = Math.acos(inpeValue);
    var intmValue= expeValue * 180 / Math.PI;
    var proValue = eval(intmValue);
    document.getElementById("result").value =proValue.toFixed(4);
    }
}
function tan(){
     if( document.getElementById("cosine").value == "cos"){
    var inpValue = document.getElementById("result").value;
    var expValue = Math.tan((inpValue * Math.PI ) / 180);
    var proValue = eval(expValue);
    document.getElementById("result").value = proValue.toFixed(4);
     }
      else if (document.getElementById("cosine").value == "cos^-1") {
    document.getElementById("cosine").value = "cos^-1";
    var inpeValue = document.getElementById("result").value;
    var expeValue = Math.atan(inpeValue);
    var intmValue= expeValue * 180 / Math.PI;
    var proValue = eval(intmValue);
    document.getElementById("result").value =proValue.toFixed(4);
    }
}