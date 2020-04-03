
 $('[data-fancybox="gallery"]').fancybox({
    buttons : [ 
    'zoom',
    'fullScreen',
    'close'
    ],
    infobar: false,
    loop: true,
    touch: false,
    preventCaptionOverlap: true
});


$('[data-fancybox="images"]').fancybox({
    afterLoad : function(instance, current) {
        var pixelRatio = window.devicePixelRatio || 1;

        if ( pixelRatio > 1.5 ) {
            current.width  = current.width  / pixelRatio;
            current.height = current.height / pixelRatio;
        }
    }
});


const search = document.getElementById('searchbox');                        // Targets the search input from user
const caption = document.querySelectorAll('.fancy');                        // Targets the photo captions

search.addEventListener('keyup', function() {
    const searchTerm = search.value.toLowerCase();                          // Ensures search is not case sensitive
    for (let i = 0; i < caption.length; i ++) {
        const searchedPhoto = caption[i].getAttribute('data-caption');        
        if (searchedPhoto.toLowerCase().includes(searchTerm)) {                 
            caption[i].parentNode.style.display = "block";                  // If the searched term is included in the caption show the photo
        }   else { 
            caption[i].parentNode.style.display = "none";                   // If the searched term is included in the caption hide the photo
        }
    }
    });

   
    