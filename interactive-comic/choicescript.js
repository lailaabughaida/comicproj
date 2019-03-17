var count = 0;
  function nextPage() {
    var pages = document.getElementsByClassName ("page");
    var length = pages.length;
    console.log(pages);
    pages [count].style.display ="none";
    console.log(pages[count].style.display);

    count+=1;
    pages[count].style.display="block";
  }
  document.addEventListener('DOMContentLoaded',function()
  {
    document.getElementById("nextPage").addEventListener("click",nextPage);
    document.getElementById("nextPage2").addEventListener("click",nextPage);
    document.getElementById("nextPage3").addEventListener("click",nextPage);
    document.getElementById("nextPage4").addEventListener("click",nextPage);

  });
