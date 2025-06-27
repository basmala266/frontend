

window.onload = function () {
  
  const places = [
    {
      name: "Pyramids of Giza",
      type: "Historical",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
      description: "One of the Seven Wonders of the World, located in Giza and considered the most famous pharaonic site."
    },
    {
      name: "Khan El Khalili",
      type: "Market",
      image: "https://tourismdaily.news/wp-content/uploads/2024/05/50398-%D8%AE%D8%A7%D9%86-%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D9%84%D9%8A-1.jpeg",
      description: "A historic traditional market in the heart of old Cairo, famous for its handmade goods and silver."
    },
    {
      name: "Karnak Temple",
      type: "Historical",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxupWexalS1IyXWax-qokMiAvAHRcL1zxXQ&s",
      description: "One of the largest temple complexes of ancient Egypt, located in Luxor."
    },
    {
      name: "Sharm El Sheikh",
      type: "Beach",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEC75-RBEnD6t8My2KdHRmboc4aa5a8Y2BiA&s",
      description: "A top Red Sea destination known for diving, beaches, and luxury resorts."
    }
  ];

  
  const container = document.querySelector(".places-container");

  places.forEach(place => {
    const card = document.createElement("div");
    card.className = "place-card";

    card.innerHTML = `
      <img src="${place.image}" alt="${place.name}">
      <h3>${place.name}</h3>
      <p>${place.description}</p>
    `;

    container.appendChild(card);
  });

  
  const toggleBtn = document.getElementById("toggleMode");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "") {
      alert("Please enter your name and email.");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email address.");
      return;
    }

    if (message.length < 5) {
      alert("Your message is too short.");
      return;
    }

    alert("Message sent successfully!");
    this.reset();
  });

const wishForm = document.getElementById("wishForm");
  const wishInput = document.getElementById("wishInput");
  const wishList = document.getElementById("wishList");

  wishForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const newWish = wishInput.value.trim();
    if (newWish !== "") {
      const li = document.createElement("li");
      li.textContent = newWish;
      wishList.appendChild(li);
      wishInput.value = "";
    }
  });

 
  setTimeout(() => {
    alert(" Welcome to Explore Egypt!");
  }, 3000);

};
