// Reference
let btnTranslate=document.querySelector("#btn-translate");
let inputText=document.querySelector("#input-text");
let outputText=document.querySelector("#output-text")

// console.log(btnTranslate);
function clickHandler(){
    // console.log("Clicked")
    // console.log("input",inputText.value)
    outputText.innerText=inputText.value
}
let txtInput=btnTranslate.addEventListener("click",clickHandler);
 