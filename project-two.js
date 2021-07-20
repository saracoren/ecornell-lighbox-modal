// Part 2, adding headigs to the images and image alt tags

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
  
    var urls = [
      "images/bailey.jpg",
      "images/fireworks.jpg",
      "images/arts-quad.jpg",
      "images/overlook.jpg",
      "images/uris.jpg"
    ];
  
    // TODO 1: Construct an array of image descriptions.
    var descriptions = [
      "Bailey Hall",
      "Fireworks Over Campus",
      "The Arts Quad",
      "An Overlook of Campus",
      "Uris Library at Sunset"
    ]
  
    var mainImage = document.getElementById("mainImage");
    var mainDescription = document.getElementById("mainDescription");
  
    var ribbon = document.getElementById("thumbnailRibbon");
  
    // TODO 2: Populate the Thumbnail Ribbon
    // TODO 2.1: Change the for...of loop to a FOR LOOP to iterate through each element in the array.
    for (i = 0; i < urls.length; i++) {
      // Set a variable to a newly created image element. Add the "thumbnail" class and set the source and alt tag.
      var imageElement = document.createElement("img");
      imageElement.classList.add("thumbnail");
      imageElement.setAttribute("src", urls[i]);
      imageElement.setAttribute("alt", descriptions[i]);
  
      // TODO 2.2: Attach an event listener to each thumbnail that sets the mainImage to the clicked upon thumbnail.
      // This event listener SHOULD ALSO set the main description's innerText to the clicked upon thumbnail's alt tag.
      imageElement.addEventListener("click", function (event) {
        var source = event.target.getAttribute("src");
        mainImage.setAttribute("src", source);
        var alt = event.target.getAttribute("alt");
        mainDescription.innerText=alt;
        mainImage.setAttribute("alt", alt);
      });
  
      // Append the created thumbnail element to the ribbon.
      ribbon.appendChild(imageElement);
    };
  
    // TODO 3: Set the main image's source to the first path in the array. Set the main image's alt tag and thee main description's innerText to the first description in the array.
    mainImage.setAttribute("src", urls[0]);
    mainImage.setAttribute("alt", descriptions[0]);
    mainDescription.innerText=("alt", descriptions[0]);
  };
  