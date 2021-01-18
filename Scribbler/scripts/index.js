// Get the modal
var modal = null;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function initModel() {
    modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
}
function openPopup(title, page) {
    //Close the pup-up if it was open earlier
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