/*window.onload = function() {
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

  var descriptions = [
    "Bailey Hall",
    "Fireworks Over Campus",
    "The Arts Quad",
    "An Overlook of Campus",
    "Uris Library at Sunset"
  ];

  // TODO 1: Replace the above two arrays with an indexed array of associative arrays holding each image's attributes: url, description, height, and width.

  var mainImage = document.getElementById("mainImage");
  var mainDescription = document.getElementById("mainDescription");

  var ribbon = document.getElementById("thumbnailRibbon");

  // TODO 2: Modify your existing code to make use of the new combined array.
  for (var i = 0; i < urls.length; i=i+1) {
    // TODO 2.1: Store the current image associative array in a variable.

    // TODO 2.2: Calculate and store the image's aspect ratio in a variable

    // TODO 3: Create a new image element for the current image (associative array).
    // Apply the appropriate CSS class depending on the aspect ratio: verticalThumbnail or horizontalThumbnail
    var thumbnail = document.createElement("img");
    thumbnail.classList.add("thumbnail");
    thumbnail.setAttribute("src", urls[i]);
    thumbnail.setAttribute("alt", descriptions[i]);

    thumbnail.addEventListener("click", function (event) {
      var source = event.target.getAttribute("src");
      var description = event.target.getAttribute("alt");
      mainImage.setAttribute("src", source);
      mainImage.setAttribute("alt", description);
      mainDescription.innerText = description;
    });

    ribbon.appendChild(thumbnail);
  };

  // TODO 4: Set the main image's source to the url of the first image in the array.
  // Set the main image's alt tag and the main description's innerText to the description of the first image in the array.
  mainImage.setAttribute("src", urls[0]);
  mainImage.setAttribute("alt", descriptions[0]);
  mainDescription.innerText = descriptions[0];

};
*/
// Module 3 Project Solution
window.onload = function() {
  console.log("SOLUTION RUNNING");
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
  // TODO 1: Construct an indexed array of associative arrays holding each image's attributes: url, description, height, and width.
  let images = [
    {"url": "images/bailey.jpg", "description": "Bailey Hall", "height": 500, "width": 750},
    {"url": "images/fireworks.jpg", "description": "Fireworks Over Campus", "height": 500, "width": 750},
    {"url": "images/arts-quad.jpg", "description": "The Arts Quad", "height": 500, "width": 750},
    {"url": "images/overlook.jpg", "description": "An Overlook of Campus", "height": 500, "width": 750},
    {"url": "images/uris.jpg", "description": "Uris Library at Sunset", "height": 500, "width": 750},
    {"url": "images/sage.jpg", "description": "Sage Hall in the Fall", "height": 500, "width": 333},
    {"url": "images/balch.jpg", "description": "Students Walking by Balch", "height": 500, "width": 333}
  ];

  var arrayString = JSON.stringify(images);
  localStorage.setItem("assocArray", arrayString);
  
  var mainImage = document.getElementById("mainImage");
  var mainDescription = document.getElementById("mainDescription");

  var ribbon = document.getElementById("thumbnailRibbon");

  for (var i = 0; i < images.length; i=i+1) {
    // TODO 2: Set a variable to a reference to the current image in the iteration.
    var currentImage = images[i];

    // TODO 3: Store the image's aspect ratio in a variable
    var aspectRatio = currentImage["height"] / currentImage["width"];

    // TODO 4: Create a new image element for each image (associative array) in the indexed array.
    // Apply the appropriate CSS class depending on the aspect ratio: verticalThumbnail or horizontalThumbnail
    var thumbnail = document.createElement("img");
    thumbnail.setAttribute("src", currentImage["url"]);
    thumbnail.setAttribute("alt", currentImage["description"]);
    if (aspectRatio > 1) {
      thumbnail.classList.add("verticalThumbnail");
    } else {
      thumbnail.classList.add("horizontalThumbnail");
    };

    thumbnail.addEventListener("click", function (event) {
      var source = event.target.getAttribute("src");
      var description = event.target.getAttribute("alt");
      mainImage.setAttribute("src", source);
      mainImage.setAttribute("alt", description);
      mainDescription.innerText = description;
    });

    ribbon.appendChild(thumbnail);
  };

  // TODO 5: Set the main image's source to the url of the first image in the array.
  // Set the main description's innerText to the description of the first image in the array.
  var firstImage = images[0];
  mainImage.setAttribute("src", firstImage["url"]);
  mainDescription.innerText = firstImage["description"];

};
