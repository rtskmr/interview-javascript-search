function showSearchResult(aval) {
    if (aval == "Choice") {
    hiddenDiv.style.display='inline-block';
    } 
    else{
    hiddenDiv.style.display='none';
    }
  }

  function mySearchItem() {
    var input, filter, mainDiv, list, a, i;
    input = document.getElementById("mySearchInput");
    filter = input.value.toUpperCase();
    mainDiv = document.getElementById("myUL");
    list = mainDiv.getElementsByTagName("id");
    for (i = 0; i < list.length; i++) {
        a = list[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }
}