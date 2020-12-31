///************ 1st search filter attempt*//

/*

function images() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toLowerCase();
  a = document.getElementById("myGallery");
  li = ul.getElementsByTagName('a');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < images.length; i++) {
    a = images[i].getElementsByTagName("a")[0];
    searchValue = a.textContent || a.innerText;
    if (searchValue.toLowerCase().indexOf(search) > -1) {
      images[i].style.display = "";
    } else {
      images[i].style.display = "none";
    }
  }
}*/

////***2nd attempt */////
/*
$(document).ready(function() {

let images = document.getElementsByTagName('a');
    $("#myInput").on('keyup', function() {
        let search = $('#myInput').val().toLowerCse();

        for (var i = 0; i < images.length; i++) {
            let searchVal = images[i].getAttribute('data-caption');
            if (searchVal.toLowerCase().indexOf(search) > -1) {
                images[i].style.display = "";
            } else {
            images[i].style.display = "none";
            }
        }
    });

});*/

///3rd attempt*////
/*
const myGallery = document.getElementsById('myGallery');
const myInput = document.getElementById('myInput');
let images = $('#myInput').val().toLowerCase();

searchBar.addEventListener('keyup', e => {
    const searchString = e.target.value.toLowerCase;
    const filteredImages = img.filter(image => {
      return (
        image.alt.toLowerCase.includes(searchString) ||
        image.data-caption.toLowerCase.includes(searchString)
      );
    });
    displayImages(filteredImages);
  });*/

  function myInput() { 
    let input = document.getElementById('myInput').value 
    input = input.toLowerCase(); 
    let x = document.getElementsByClassName('gallery'); 
      
    for (var i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display = "none"; 
        } 
        else { 
            x[i].style.display = "";                  
        } 
    } 
} 