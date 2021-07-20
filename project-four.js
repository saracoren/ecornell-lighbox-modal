// Module 5 Project
window.onload = function() {
  // LIGHTBOX CODE START
    var modalDiv = document.getElementById("galleryModal");
    var openGalleryButton = document.getElementById("openGallery");
  
    // Open modalDiv on button click.
    openGalleryButton.addEventListener("click", function () {
      modalDiv.classList.remove("hidden");
    });
  
    // When the user clicks anywhere outside of the modalDiv, close it
    window.addEventListener("click", function (event) {
      if (event.target == modalDiv) {
        modalDiv.classList.add("hidden");
      };
    });
  
  // LIGHTBOX CODE END
  
  
  // YOUR CODE STARTS HERE
  // document.getElementsByClassName("btn").style.border = "2px solid green";
    let images = [
      {"url": "images/bailey.jpg", "description": "Bailey Hall", "height": 500, "width": 750},
      {"url": "images/fireworks.jpg", "description": "Fireworks Over Campus", "height": 500, "width": 750},
      {"url": "images/arts-quad.jpg", "description": "The Arts Quad", "height": 500, "width": 750},
      {"url": "images/overlook.jpg", "description": "An Overlook of Campus", "height": 500, "width": 750},
      {"url": "images/uris.jpg", "description": "Uris Library at Sunset", "height": 500, "width": 750},
      {"url": "images/sage.jpg", "description": "Sage Hall in the Fall", "height": 500, "width": 333},
      {"url": "images/balch.jpg", "description": "Students Walking by Balch", "height": 500, "width": 333}
    ];
  
    var mainImage = document.getElementById("mainImage");
    var mainDescription = document.getElementById("mainDescription");
  
    var ribbon = document.getElementById("thumbnailRibbon");
  
    for (var i = 0; i < images.length; i++) {
      
      var currentImage = images[i];
  
      var aspectRatio = currentImage["height"] / currentImage["width"];
  
      var thumbnail = document.createElement("img");
      thumbnail.setAttribute("src", currentImage["url"]);
      thumbnail.setAttribute("alt", currentImage["description"]);
      if (aspectRatio > 1) {
        thumbnail.classList.add("verticalThumbnail");
        thumbnail.classList.add("thumbnail");
      } else {
        thumbnail.classList.add("horizontalThumbnail");
        thumbnail.classList.add("thumbnail");
      };
      
    
      thumbnail.addEventListener("click", function (event) {
        // TODO 1: Write the syntax to add the "selected" CSS class to the clicked upon thumbnail AFTER clearing the "selected" class from all other elements.
        // document.getElementsByClassName("thumbnail").classList.add("selected");
       
        event.target.classList.add("selected");
  
        // END TODO
        var source = event.target.getAttribute("src");
        var description = event.target.getAttribute("alt");
        mainImage.setAttribute("src", source);
        mainImage.setAttribute("alt", description);
        mainDescription.innerText = description;
      });
  
      ribbon.appendChild(thumbnail);
    };
  
    var firstImage = images[0];
    mainImage.setAttribute("src", firstImage["url"]);
    mainImage.setAttribute("alt", firstImage["description"]);
    mainDescription.innerText = firstImage["description"];
  //   thumbnail[0].classList.add("selected");
  };
  