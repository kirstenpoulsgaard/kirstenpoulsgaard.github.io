

const nav=document.querySelector(".navbar");
fetch("/navbar.html")
.then(
    res=>res.text()
)
.then(    
    data=>{
       nav.innerHTML=data;
       let currenturl=new URL(window.location.href);
       const currentmenulink = document.querySelector(`[href="${currenturl.pathname}"]`);
       //let _txt=currentmenulink.innerHTML.toUpperCase();
       let _txt=currentmenulink.innerHTML;
       currentmenulink.parentNode.innerHTML=_txt;
    }
);








