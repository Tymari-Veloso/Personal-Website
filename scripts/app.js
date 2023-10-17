let colorBtn = document.querySelector("#color-btn");

colorBtn.addEventListener("click", myFunction);
function myFunction(){
    if(document.body.style.backgroundColor == "black"){
        document.body.style.backgroundColor = "white"
        console.log("Changing Background to White")
    }
    else{
        document.body.style.backgroundColor = "black"
        console.log("Changing Background to Black")
    }
}

