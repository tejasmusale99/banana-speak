// Reference
let btnTranslate=document.querySelector("#btn-translate");
let inputText=document.querySelector("#input-text");
// console.log(btnTranslate);
function clickHandler(){
    // console.log("Clicked")
    console.log("input",inputText.value)
}
let txtInput=btnTranslate.addEventListener("click",clickHandler);
