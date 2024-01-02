// Example content script
console.log("Content script loaded!");

// Function to remove an element by ID
function removeElementById(elementId) {
  var elementToRemove = document.getElementById(elementId);
  if (elementToRemove) {
    elementToRemove.remove();
  }
}

// Replace 'yourSpecificId' with the ID of the element you want to remove
removeElementById("ethPrice");

// Function to remove a link by href
function removeLinkByHref(hrefToRemove) {
  var links = document.querySelectorAll('a[href="' + hrefToRemove + '"]');
  links.forEach(function (link) {
    link.remove();
  });
}

// Replace 'yourSpecificHref' with the href of the link you want to remove
removeLinkByHref("/chart/etherprice");
