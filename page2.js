var showThePage = document.querySelector('.showThePage');
var btn=document.getElementsByClassName('btn');
var firstPage = document.getElementById('firstPage');
var albumHead = document.querySelector('.albumHead');
var span2=document.getElementsByClassName('span2');

function backToFirstPage(e) {
    e.target.style.visibility="hidden";
    window.location.reload();
    window.document.body.scrollTop = 0;
    window.document.documentElement.scrollTop = 0;
}

function inToAlbum(e){
    window.document.body.scrollTop = 0;
    window.document.documentElement.scrollTop = 0;
    var j=e.target.getAttribute('value');

    //console.log(e.target.getAttribute('value'));

    firstPage.style.visibility="visible";
    var albumName=span2[j-1].innerHTML;
    albumHead.innerHTML=albumName;

    showThePage.innerHTML = '';
    
    for (var i=1;i<6;i++){
        eval('diver'+i+'=document.createElement("div")');
        eval('img'+i+'=document.createElement("img")');
        eval('img'+i).src="pictures/album"+j+"/"+i+".JPG";
        
        eval('a'+i+'=document.createElement("a")');
        eval('a'+i).href="pictures/album"+j+"/"+i+".JPG";
        eval('a'+i).target="_blank";
        eval('a'+i).appendChild(eval('img'+i));

        eval('diver'+i).appendChild(eval('a'+i));
        showThePage.appendChild(eval('diver'+i));
    }
}


/////////////////////////////////////////////  addEventListeners

for(var j=0;j<btn.length;j++){
    btn[j].addEventListener('click',inToAlbum);
}
firstPage.addEventListener('click',backToFirstPage);





