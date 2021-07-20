// Part 1, adding just the images

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
    // TODO 1: Construct array with image paths.
  
    var mainImage = document.getElementById("mainImage");
    
    var imagePaths = [
      "./images/bailey.jpeg",
      "./images/fireworks.jpeg",
      "./images/arts-quad.jpeg",
      "./images/overlook.jpeg",
      "./images/uris.jpeg"
    ]
    
    // TODO 2: Set a variable to a reference to the thumbnail ribbon element (ID: thumbnailRibbon)
    
    var thumbnailRibbon = document.getElementById("thumbnailRibbon");
  
    // TODO 3: Use a for of loop to generate the thumbnails for each path in the array. Attach an event listener to each one.
    for (var imagePath of imagePaths ) {
      //   console.log(imagePath)
      // TODO: 3.1: Set a variable to a newly created image element. Add the "thumbnail" class and set the source.
      var imageElement = document.createElement("img");
      imageElement.classList.add("thumbnail");
      imageElement.setAttribute("src", imagePath);
       // TODO 3.2: Attach an event listener to each thumbnail that sets the mainImage to the clicked upon thumbnail.
      imageElement.addEventListener("click", function (event) {
        var source = event.target.getAttribute("src");
        mainImage.setAttribute("src", source)
      });
      // TODO 3.3: Append the created thumbnail element to the ribbon.
      thumbnailRibbon.appendChild(imageElement);
    }
    // TODO 4: Set the main image's source to the first path in the array.
    mainImage.setAttribute("src", imagePaths[0]);
  };
  