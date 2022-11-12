
var host = "kirstenpoulsgaard.dk"
if (window.location.host == host && window.location.protocol != "https:") {
  window.location.protocol = "https:"
}


let currenturl=new URL(window.location.href);
const txtcontent=document.querySelector(".txtcontent"); 

switch(currenturl.pathname) {
    case "/":
        
        fetch("/tekster/index.txt")
        .then(
            res=>res.text()
        )
        .then(    
            data=>{  
                txtcontent.innerHTML=data.replace(/(\r\n|\r|\n)/g, '<br>');;
            }
        );
      break;
    case "/index.html":
        
        fetch("/tekster/index.txt")
        .then(
            res=>res.text()
        )
        .then(    
            data=>{  
                txtcontent.innerHTML=data.replace(/(\r\n|\r|\n)/g, '<br>');;
            }
        );
      break;
    case "/udstillinger.html":        
        fetch("/tekster/udstillinger.txt")
        .then(
            res=>res.text()
        )
        .then(    
            data=>{  
                txtcontent.innerHTML=data.replace(/(\r\n|\r|\n)/g, '<br>');;
            }
        );
    break;
    case "/kontakt.html":        
        fetch("/tekster/kontakt.txt")
        .then(
            res=>res.text()
        )
        .then(    
            data=>{  
                txtcontent.innerHTML=data.replace(/(\r\n|\r|\n)/g, '<br>');;
            }
        );
    break;
    case "/profil.html":        
        fetch("/tekster/profil.txt")
        .then(
            res=>res.text()
        )
        .then(    
            data=>{  
                txtcontent.innerHTML=data.replace(/(\r\n|\r|\n)/g, '<br>');;
            }
        );
    break;
    default:
        //console.log(curentpathname);
      
  }
