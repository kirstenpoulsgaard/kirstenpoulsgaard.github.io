const txtcontent=document.querySelector(".txtcontent"); 
fetch("/tekster/index.txt")
.then(
    res=>res.text()
)
.then(    
    data=>{  
        txtcontent.innerHTML=data.replace(/(\r\n|\r|\n)/g, '<br>');;
    }
);