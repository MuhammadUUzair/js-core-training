let errorParagraph = document.getElementById("error")
console.log("ep" + errorParagraph)

function buttonError(){
    console.log("button clicked")
    errorParagraph.textContent = "Some thing went wrong, please try again"
}