function filterElements(selectedClass) {
    // Get all elements inside the .items container
    const allItems = document.querySelectorAll("catalog a");
  
    // Loop through each item
    allItems.forEach(item => {
      if (selectedClass === 'all') {
        // Show all items if 'all' is selected
        item.classList.add("show");
      } else {
        // Check if the item contains the selected class
        if (item.classList.contains(selectedClass)) {
          item.classList.add("show");
        } else {
          item.classList.remove("show");
        }
      }
    });

}