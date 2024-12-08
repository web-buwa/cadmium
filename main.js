// Smooth scroll effect for teacher cards
document.querySelectorAll('.teacher-card').forEach(card => {
  card.addEventListener('click', () => {
      // Add your scrolling logic here
      const subjectId = card.querySelector('p').textContent.split('-')[1].trim().toLowerCase(); // Extract the subject
      const target = document.getElementById(subjectId);
      if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
      }
  });
});

// Smooth scroll to details section
function scrollToDetails(imageId) {
  const detailsSection = document.getElementById('details');
  detailsSection.scrollIntoView({ behavior: 'smooth' });

  // Update the details section content (you can expand this)
  const detailsContent = {
      image1: 'Details for Image 1.',
      image2: 'Details for Image 2.',
      image3: 'Details for Image 3.',
      image4: 'Details for Image 4.',
      image5: 'Details for Image 5.',
      image6: 'Details for Image 6.',
  };

  document.querySelector('#details p').innerText = detailsContent[imageId];
}


function showDetails(teacherId) {
  const teacherDetails = {
      teacher1: "Mr. Smith is an experienced Mathematics teacher with a passion for numbers.",
      teacher2: "Ms. Johnson is a Science specialist with a keen interest in biology.",
      teacher3: "Mr. Lee teaches History with a focus on global civilizations.",
      teacher4: "Ms. Carter is an English educator dedicated to literature and language."
  };
  
  alert(teacherDetails[teacherId]);
}
