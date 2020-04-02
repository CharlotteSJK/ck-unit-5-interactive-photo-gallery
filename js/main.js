const search = document.getElementById('searchbox');
const caption = document.querySelectorAll('.light');

search.addEventListener('keyup', function() {
    const searchTerm = search.value.toLowerCase();
    for (let i = 0; i < caption.length; i ++) {
        const searchedPhoto = caption[i].getAttribute('data-title');
        if (searchedPhoto.toLowerCase().includes(searchTerm)) {
            caption[i].style.display = "block";
        }   else { 
            caption[i].style.display = "none";
        }
    }
    });

   
