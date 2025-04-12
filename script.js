function changeInfo() {
    const desc = document.getElementById('description');
    desc.textContent = "I'm Jeff, an aspiring full-stack developer passionate about building amazing web apps!";
    desc.style.color = "#007BFF";
    desc.style.fontWeight = "bold";
  }
  
  let bioVisible = false;
  
  function toggleBio() {
    const container = document.getElementById('bioContainer');
  
    if (!bioVisible) {
      const bio = document.createElement('p');
      bio.textContent = "In my free time, I love coding, learning new tech, and taking long walks in nature.";
      bio.id = "bioText";
      container.appendChild(bio);
      bioVisible = true;
    } else {
      const bio = document.getElementById('bioText');
      if (bio) {
        bio.remove();
        bioVisible = false;
      }
    }
  }
  