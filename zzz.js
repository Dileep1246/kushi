
const dishes = [
  {
    name: "Dum Biryani",
    category: "biryani",
    price: 120,
    tag: "Favourite",
    desc: "Fragrant rice with warming spices.",
    image: "C:\\Users\\dilee\\Downloads\\mario-raj-ysmeQt1dzcw-unsplash.jpg"
  },
  {
    name: "Fry Piece Biryani",
    category: "biryani",
    price: 130,
    tag: "Popular",
    desc: "Flavourful biryani with chicken pieces.",
    image: "C:\\Users\\dilee\\Downloads\\fry.webp"
  },
  {
    name: "Lollipop Biryani",
    category: "biryani",
    price: 150,
    tag: "Spicy",
    desc: "Biryani served with chicken lollipop.",
    image: "C:\\Users\\dilee\\Downloads\\lollipop.jpg"
  },
  {
    name: "Mughalai Biryani",
    category: "biryani",
    price: 150,
    tag: "Classic",
    desc: "Rich, aromatic biryani.",
    image: "C:\\Users\\dilee\\Downloads\\mughlai.jpg"
  },
 
  {
    name: "Chicken Noodles",
    category: "chinese",
    price: 80,
    tag: "Wok Tossed",
    desc: "Noodles with chicken and vegetables.",
    image: "C:\\Users\\dilee\\Downloads\\noodles c.jpg"
  },
  {
    name: "Egg Noodles",
    category: "chinese",
    price: 60,
    tag: "Popular",
    desc: "Noodles tossed with egg and sauces.",
    image: "C:\\Users\\dilee\\Downloads\\noodles e.jpg"
  },
  {
    name: "Veg Noodles",
    category: "chinese",
    price: 50,
    tag: "Vegetarian",
    desc: "Noodles with colourful vegetables.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=85"
  },
  {
    name: "Chicken Fried Rice",
    category: "chinese",
    price: 90,
    tag: "Popular",
    desc: "Fried rice with chicken and vegetables.",
    image: "C:\\Users\\dilee\\Downloads\\friedrice.webp"
  },
  {
    name: "Egg Fried Rice",
    category: "chinese",
    price: 80,
    tag: "Classic",
    desc: "Wok-fried rice with egg.",
    image: "C:\\Users\\dilee\\Downloads\\egg fried rice.webp"
  },
  {
    name: "Veg Fried Rice",
    category: "chinese",
    price: 70,
    tag: "Vegetarian",
    desc: "Fried rice with vegetables.",
    image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=800&q=85"
  },
  {
    name: "Chilli Chicken",
    category: "nonveg",
    price: 110,
    tag: "Spicy",
    desc: "Chicken tossed in chilli sauce.",
    image: "C:\\Users\\dilee\\Downloads\\Chilli_Chicken.webp"
  },
 
  {
    name: "Chicken 65",
    category: "nonveg",
    price: 140,
    tag: "Favourite",
    desc: "Crispy chicken with Indian spices.",
    image: "C:\\Users\\dilee\\Downloads\\Chicken65.webp"
  },
  {
    name: "Chicken Lollipop",
    category: "nonveg",
    price: 120,
    tag: "Starter",
    desc: "Crispy and spicy chicken starter.",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=85"
  },
  {
    name: "Veg Manchurian",
    category: "veg",
    price: 80,
    tag: "Vegetarian",
    desc: "Vegetable bites in Manchurian sauce.",
    image: "C:\\Users\\dilee\\Downloads\\veg manchurain.jpg"
  },

  {
    name: "Paneer 65",
    category: "veg",
    price: 120,
    tag: "Vegetarian",
    desc: "Spicy, crispy paneer bites.",
    image: "C:\\Users\\dilee\\Downloads\\paneer-65.webp"
  },
  {
    name: "Chicken Roll",
    category: "rolls",
    price: 50,
    tag: "Quick Bite",
    desc: "Chicken filling wrapped in a roll.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=85"
  },
  {
    name: "Egg Roll",
    category: "rolls",
    price: 30,
    tag: "Quick Bite",
    desc: "A classic egg roll.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=85"
  },
  {
    name: "Double Egg Omelette",
    category: "rolls",
    price: 30,
    tag: "Eggs",
    desc: "Freshly prepared double egg omelette.",
    image: "C:\\Users\\dilee\\Downloads\\egg.jpg"
  }
];

// Render the food menu
const foodGrid = document.getElementById("foodGrid");
const dishCount = document.getElementById("dishCount");
const filters = document.querySelectorAll(".filter");

function renderMenu(category = "all") {
  const visibleDishes =
    category === "all"
      ? dishes
      : dishes.filter(dish => dish.category === category);

  dishCount.textContent =
    `${visibleDishes.length} delicious dishes`;

  foodGrid.innerHTML = visibleDishes.map((dish, index) => `
    <article class="food-card"
      style="animation-delay:${index * 45}ms">

      <div class="food-photo">
        <img
          src="${dish.image}"
          alt="${dish.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80'">

        <span class="food-tag">${dish.tag}</span>
      </div>

      <div class="food-info">
        <h3>${dish.name}</h3>
        <p>${dish.desc}</p>

        <div class="food-bottom">
          <span class="price">₹${dish.price}</span>

          <button
            class="ask-btn"
            data-dish="${dish.name}"
            aria-label="Ask about ${dish.name}"
            title="Ask about this dish">+</button>
        </div>
      </div>
    </article>
  `).join("");
}

// Filter buttons
filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(filter => filter.classList.remove("active"));

    button.classList.add("active");
    renderMenu(button.dataset.category);
  });
});

// WhatsApp enquiry buttons
foodGrid.addEventListener("click", event => {
  const button = event.target.closest(".ask-btn");

  if (!button) return;

  const message =
    `Hi Kusitha Food Court, I want to enquire about ${button.dataset.dish}.`;

  const url =
    `https://wa.me/919014301641?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener");
});

// Automatic slideshow
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const slideNumber = document.getElementById("slideNumber");

let currentSlide = 0;
let slideTimer;
let paused = false;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });

  slideNumber.textContent =
    String(currentSlide + 1).padStart(2, "0");
}

function startSlideshow() {
  clearInterval(slideTimer);

  slideTimer = setInterval(() => {
    if (!paused) {
      showSlide(currentSlide + 1);
    }
  }, 5000);
}

document.getElementById("next").addEventListener("click", () => {
  showSlide(currentSlide + 1);
  startSlideshow();
});

document.getElementById("prev").addEventListener("click", () => {
  showSlide(currentSlide - 1);
  startSlideshow();
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.slide));
    startSlideshow();
  });
});

// Pause the slideshow when the mouse is over it
const hero = document.querySelector(".hero");

hero.addEventListener("mouseenter", () => {
  paused = true;
});

hero.addEventListener("mouseleave", () => {
  paused = false;
});

showSlide(0);
startSlideshow();

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// Back to top
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  backTop.classList.toggle("visible", window.scrollY > 400);
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Current year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Initial menu
renderMenu();
