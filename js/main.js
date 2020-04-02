const search = document.getElementById('searchbox');                        // Targets the search input from user
const caption = document.querySelectorAll('.light');                        // Targets the photo captions

search.addEventListener('keyup', function() {
    const searchTerm = search.value.toLowerCase();                          // Ensures search is not case sensitive
    for (let i = 0; i < caption.length; i ++) {
        const searchedPhoto = caption[i].getAttribute('data-title');        
        if (searchedPhoto.toLowerCase().includes(searchTerm)) {                 
            caption[i].style.display = "block";                             // If the searched term is included in the caption show the photo
        }   else { 
            caption[i].style.display = "none";                              // If the searched term is included in the caption hide the photo
        }
    }
    });

   
