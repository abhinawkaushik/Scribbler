function MakeEditable(){
    document.getElementsByClassName("MainDiv")[0].style.display='none';
    document.getElementsByClassName("MainDiv-1")[0].style.display='block';
}
function SaveEdit(){
    document.getElementsByClassName("MainDiv-1")[0].style.display='none';
    document.getElementsByClassName("MainDiv")[0].style.display='block';
}
function LikeThis(){
document.getElementById("like").innerHTML="1 person likes this!";
}
function comment(){
    var _obj = document.createElement('div');
    _obj.className='cmnt';
    _obj.innerHTML = document.getElementById('cmnt').value;
    var _parent = document.getElementsByClassName("allcomments")[0];
    _parent.appendChild(_obj);
    _parent.style.display='block';
}