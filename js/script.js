
function myInput() 
{ 
    let input = document.getElementById('myInput').value.toLowerCase();
    
    let x = document.querySelectorAll('.gallery a');

    for (var i = 0; i < x.length; i++) 
    {  
        if (!x[i].getAttribute('data-caption').includes(input)) { 
            x[i].style.display = "none"; 
        } 
        else { 
            x[i].style.display = "";                  
        }
    } 
} 