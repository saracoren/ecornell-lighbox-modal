// Part 2, adding headigs to the images

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
    var imageDescriptions = [
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
      var thumbnail = document.createElement("img");
      thumbnail.classList.add("thumbnail");
      thumbnail.setAttribute("src", urls[i]);
  
      // TODO 2.2: Attach an event listener to each thumbnail that sets the mainImage to the clicked upon thumbnail.
      // This event listener SHOULD ALSO set the main description's innerText to the clicked upon thumbnail's alt tag.
      thumbnail.addEventListener("click", function (event) {
        var source = event.target.getAttribute("src");
        mainImage.setAttribute("src", source);
        console.log(i);
        i = imageDescriptions[i]
        mainDescription.innerText=imageDescriptions[i]
      });
  
      // Append the created thumbnail element to the ribbon.
      ribbon.appendChild(thumbnail);
    };
  
    // TODO 3: Set the main image's source to the first path in the array. Set the main image's alt tag and thee main description's innerText to the first description in the array.
    mainImage.setAttribute("src", urls[0]);
    mainDescription.innerText=imageDescriptions[0]
  };
  
  



// Part 1, adding just the images

// window.onload = function() {
//   // LIGHTBOX CODE START
//     var modalDiv = document.getElementById("galleryModal");
//     var openGalleryButton = document.getElementById("openGallery");
  
//     // Open modalDiv on button click.
//     openGalleryButton.addEventListener("click", function () {
//       modalDiv.classList.remove("hidden");
//     });
  
//     // When the user clicks anywhere outside of the modalDiv, close it
//     window.addEventListener("click", function (event) {
//       if (event.target == modalDiv) {
//         modalDiv.classList.add("hidden");
//       };
//     });
  
//   // LIGHTBOX CODE END
  
  
//   // YOUR CODE STARTS HERE
//     // TODO 1: Construct array with image paths.
  
//     var mainImage = document.getElementById("mainImage");
    
//     var imagePaths = [
//       "./images/bailey.jpeg",
//       "./images/fireworks.jpeg",
//       "./images/arts-quad.jpeg",
//       "./images/overlook.jpeg",
//       "./images/uris.jpeg"
//     ]
    
//     // TODO 2: Set a variable to a reference to the thumbnail ribbon element (ID: thumbnailRibbon)
    
//     var thumbnailRibbon = document.getElementById("thumbnailRibbon");
  
//     // TODO 3: Use a for of loop to generate the thumbnails for each path in the array. Attach an event listener to each one.
//     for (var imagePath of imagePaths ) {
//       //   console.log(imagePath)
//       // TODO: 3.1: Set a variable to a newly created image element. Add the "thumbnail" class and set the source.
//       var imageElement = document.createElement("img");
//       imageElement.classList.add("thumbnail");
//       imageElement.setAttribute("src", imagePath);
//        // TODO 3.2: Attach an event listener to each thumbnail that sets the mainImage to the clicked upon thumbnail.
//       imageElement.addEventListener("click", function (event) {
//         var source = event.target.getAttribute("src");
//         mainImage.setAttribute("src", source)
//       });
//       // TODO 3.3: Append the created thumbnail element to the ribbon.
//       thumbnailRibbon.appendChild(imageElement);
//     }
//     // TODO 4: Set the main image's source to the first path in the array.
//     mainImage.setAttribute("src", imagePaths[0]);
//   };
  