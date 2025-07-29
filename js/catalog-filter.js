function filterElementsArticle(selectedClass) {
    // Get all elements inside the .items container
    const allItems = document.querySelectorAll("catalog.articles a");
  
    // Loop through each item
    allItems.forEach(item => {
      if (selectedClass === 'article-all') {
        // Show all items if 'all' is selected
        item.classList.add("a-show");
      } else {
        // Check if the item contains the selected class
        if (item.classList.contains(selectedClass)) {
          item.classList.add("a-show");
        } else {
          item.classList.remove("a-show");
        }
      }
    });
}

function filterElementsProject(selectedClass) {
  // Get all elements inside the .items container
  const allItems = document.querySelectorAll("catalog.project a");

  // Loop through each item
  allItems.forEach(item => {
    if (selectedClass === 'project-all') {
      // Show all items if 'all' is selected
      item.classList.add("p-show");
    } else {
      // Check if the item contains the selected class
      if (item.classList.contains(selectedClass)) {
        item.classList.add("p-show");
      } else {
        item.classList.remove("p-show");
      }
    }});
}