var count = 0;
  function nextPage() {
    var pages = document.getElementsByClassName ("page");
    var length = pages.length;
    console.log(pages);
    pages [count].style.display ="none";
    console.log(pages[count].style.display);

    count+=1;
    // pages[count].style.display="block";
    console.log(pages[count].style.display);
    pages[count].style.display="flex";
console.log(pages[count].style.display);
    hideButton();
  }

  // function myFunction() {
    // var x = document.getElementById("myDIV");
    // if (x.innerHTML === "Unplugged?") {
      // x.innerHTML = " Or Replugged?";
    // } else {
      // x.innerHTML = "Unplugged?";
    // }
  // }

function showButton(){
  document.getElementById("Begin").style.display = "block";
}
function hideButton(){
  document.getElementById("Begin").style.display = "none";

}



function mouseOverHeadline(){
  document.getElementById("title").innerHTML = 'Unplugged?';

}
function mouseOutOfHeadline(){
  document.getElementById("title").innerHTML = 'Or Replugged?';
  setTimeout(showButton, 1000);



}

function hidebegin(){

document.getElementById("page0").style.display = "hidden";


}



  document.addEventListener('DOMContentLoaded',function()
  {
    document.getElementById("Begin").addEventListener("click",nextPage);
    document.getElementById("nextPage").addEventListener("click",nextPage);
    document.getElementById("nextPage2").addEventListener("click",nextPage);
    document.getElementById("nextPage3").addEventListener("click",nextPage);
    document.getElementById("nextPage4").addEventListener("click",nextPage);
    document.getElementById("nextPage5").addEventListener("click",nextPage);
    document.getElementById("nextPage6").addEventListener("click",nextPage);
    document.getElementById("nextPage7").addEventListener("click",nextPage);


  });
