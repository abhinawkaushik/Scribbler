function InitEvents(){
    var elements = document.getElementsByClassName("fa-trash");

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', DeletePost, false);
    }

    var _ellipse = document.getElementsByClassName("fa-ellipsis-h")
    for (var i = 0; i < _ellipse.length; i++) {
        _ellipse[i].addEventListener('click', RedirectToDetailsPost, false);
    }
}
function RedirectToDetailsPost(){
window.location.href='../html/post.html'
}
function DeletePost(){
    openPopup('Are you sure you want to delete this post?','../html/delete.html',this);
}
// Get the modal
var modal = null;
var _this = null;
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function ClosePopup(){
    modal.style.display = "none";
}
function openPopup(title, page,_pageObj) {
    //Close the pup-up if it was open earlier
    _this = _pageObj;
    if(modal == null)
        modal = document.getElementById("myModal");
    modal.style.display = "none";
    // When the user clicks on the button, open the modal
    document.getElementsByClassName("model-title")[0].innerHTML = title;
    document.getElementsByClassName("model-data")[0].innerHTML =getHTML(page)
    modal.style.display = "block";
}
function getHTML(filepath) {
    var xhttp;
    if (window.XMLHttpRequest) {
      // code for modern browsers
      xhttp = new XMLHttpRequest();
    } else {
      // code for IE6, IE5
      xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }    
    xhttp.open("GET", filepath, false);
    xhttp.send();
    return xhttp.responseText;
    
  }
  function OpenPosts(){
      window.location.href="../html/postslist.html";
  }
  function DeletePostFromDOM(){
    ClosePopup();
    _this.parentElement.parentElement.parentElement.parentElement.remove()
  }