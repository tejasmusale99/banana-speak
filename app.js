let btnTranslate=document.querySelector("#btn-translate");
let inputText=document.querySelector("#input-text");
let outputText=document.querySelector("#output-text")

let serverURL="https:api.funtranslations.com/translate/minion.json" 

function getTranslationURL(text){
    return serverURL +"?"+ "text="+ text
}
function errorHandler(error){
    console.log("something error Occured",error)
    alert("error Occured try in some time")
}
function clickHandler(){
    // outputText.innerText=inputText.value

   let txtInput = inputText.value;

    fetch(getTranslationURL(txtInput))
    .then(response=>response.json())
    // .then(json=>console.log(json.contents.translated))
    .then(json=>{
        outputText.innerText=json.contents.translated   
    })
    .catch(errorHandler)
}                 
btnTranslate.addEventListener("click",clickHandler);
  