/* ========================================
   DATA STORAGE: Products and Articles
   ======================================== */

// Array of products for the shop page
// Each product is an object with id, name, price, image, and category
const products = [
  {
    id: 101, // Unique identifier
    name: "Adaptogenic Elixir Drops",
    price: 49.0,
    image: "https://biocidin.com/cdn/shop/files/Biotonic_f1aeceb0-846b-4819-ad80-e369933c3115_1400x.png?v=1753327443",
    category: "Supplements",
  },
  {
    id: 102,
    name: "Ceramic Tea Infuser Set",
    price: 75.0,
    image: "https://suiroteas.com/wp-content/uploads/2024/03/infuser_mug.webp",
    category: "Rituals",
  },
  {
    id: 103,
    name: "Organic Linen Eye Pillow",
    price: 35.0,
    image: "https://www.hanakotherapies.com/cdn/shop/products/EyePillowBlush03.png?v=1636591427",
    category: "Mindfulness",
  },
  {
    id: 104,
    name: "Mindful Journaling Kit",
    price: 55.0,
    image: "https://joyfulsouls.in/wp-content/uploads/2025/06/3-4.jpg",
    category: "Mindfulness",
  },
];

// Array of articles for the editorial and detail pages
// Each article has id, title, category, author, date, and full HTML content
const articles = [
  {
    id: "anxiety", // Unique string identifier
    title: "Strategies to Ease Anxiety in Under 5 Minutes",
    category: "Mind & Spirit",
    image:
      "https://www.mindwellcare.com/mt-content/uploads/2023/08/6425304.webp",
    author: "Dr. Elara Vance, Clinical Psychologist",
    date: "October 14, 2024",
    content: `
      <p class="mb-6">The modern world is a constant source of low-level stress, but learning how to interrupt the anxiety cycle quickly is a superpower.</p>
      <h3 class="font-headline text-3xl font-bold text-primary mt-10 mb-4">The 4-7-8 Breathwork</h3>
      <p class="mb-6">This simple technique forces the nervous system to shift from "fight or flight" to "rest and digest".</p>
    `,
  },
  {
    id: "oats",
    title: "The Simple Power of Overnight Oats: 5 Recipes",
    category: "Nutrition",
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2022/09/overnight-oats.jpg",
    author: "Jenna Rourke, Registered Dietitian",
    date: "September 28, 2024",
    content: `
      <p class="mb-6">Overnight oats are more than just a convenient breakfast; they're a powerhouse of slow-releasing energy.</p>
    `,
  },
  // Additional articles would follow the same structure...
];

/* ========================================
   GLOBAL STATE MANAGEMENT
   ======================================== */

// Shopping cart array - stores items user has added
// Each item will have product info + quantity
let cart = [];

/* ========================================
   DOM ELEMENT REFERENCES
   ======================================== */

// Get references to important HTML elements for manipulation
const productListEl = document.getElementById("product-list"); // Shop page product container
const articleContentContainerEl = document.getElementById(
  "article-content-container"
); // Article detail content area
const messageBoxEl = document.getElementById("message-box"); // Notification popup
const cartDrawerEl = document.getElementById("cart-drawer"); // Cart sidebar panel
const cartBackdropEl = document.getElementById("cart-backdrop"); // Dark overlay behind cart
const cartItemsContainerEl = document.getElementById("cart-items-container"); // Cart items list
const cartTotalEl = document.getElementById("cart-total"); // Total price display
const cartCountEl = document.getElementById("cart-count"); // Cart item count badge

/* ========================================
   NAVIGATION FUNCTIONS (Single Page App)
   ======================================== */

/**
 * Internal function to show/hide page sections
 * @param {string} pageId - ID of the page to show (e.g., "cover", "shop")
 * @param {string} contentId - Optional ID for dynamic content (e.g., article ID)
 */
function _loadPage(pageId, contentId) {
  // First, hide ALL page sections
  document.querySelectorAll(".page-view").forEach((page) => {
    page.classList.remove("active"); // Remove "active" class from all pages
  });

  // Find and show the target page
  const targetPage = document.getElementById("page-" + pageId);

  if (targetPage) {
    targetPage.classList.add("active"); // Add "active" class to make it visible
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly

    // Special handling: If showing article detail page, load the article content
    if (pageId === "article-detail" && contentId) {
      renderArticleDetail(contentId); // Populate article content
    }

    // Close cart drawer if it's open
    if (cartDrawerEl.classList.contains("open")) {
      toggleCartDrawer(false);
    }
  } else {
    // If page doesn't exist, default to cover page
    document.getElementById("page-cover").classList.add("active");
  }
}

/**
 * Public navigation function - called by user clicks
 * Updates URL and loads the appropriate page
 * @param {string} pageId - Page to navigate to
 * @param {string} contentId - Optional content identifier
 * @param {Event} event - Click event (to prevent default link behavior)
 */
function navigateTo(pageId, contentId = null, event = null) {
  if (event) {
    event.preventDefault(); // Stop default link action (prevents page reload)
  }

  // Build URL hash (e.g., "#featured" or "#article-detail-anxiety")
  let hash = pageId;
  if (contentId) {
    hash += "-" + contentId;
  }

  // Update browser URL without reloading page
  history.pushState({ pageId, contentId }, "", "#" + hash);

  // Actually load the page
  _loadPage(pageId, contentId);
}

/**
 * Parses current URL hash and loads appropriate page
 * Called on page load and browser back/forward button clicks
 */
function _loadPageFromUrl() {
  const hash = window.location.hash.slice(1); // Get hash without the "#"

  if (!hash) {
    _loadPage("cover", null); // No hash = show cover page
    return;
  }

  // Parse hash (e.g., "article-detail-anxiety" splits into parts)
  const parts = hash.split("-");
  let pageId = parts[0];
  let contentId = null;

  // Handle article detail URLs (format: article-detail-ID)
  if (pageId === "article" && parts[1] === "detail" && parts.length > 2) {
    pageId = "article-detail";
    contentId = parts[2];
  }

  // Load the appropriate page
  if (["cover", "featured", "editorial", "shop"].includes(pageId)) {
    _loadPage(pageId, null);
  } else if (pageId === "article-detail" && contentId) {
    _loadPage(pageId, contentId);
  } else {
    _loadPage("cover", null); // Invalid hash = default to cover
  }
}

/* ========================================
   ARTICLE RENDERING FUNCTIONS
   ======================================== */

/**
 * Renders a single article's full content on the detail page
 * @param {string} articleId - ID of the article to display
 */
function renderArticleDetail(articleId) {
  // Find the article in our articles array
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    // Article not found - show error message
    articleContentContainerEl.innerHTML = `
      <h1 class="font-headline text-5xl text-primary font-black mb-4">Article Not Found</h1>
      <p class="text-xl">The article you're looking for doesn't exist yet.</p>
    `;
    return;
  }

  // Build and inject article HTML
  articleContentContainerEl.innerHTML = `
    <div class="mb-10">
      <p class="text-sm uppercase tracking-widest text-accent font-semibold mb-2">${article.category}</p>
      <h1 class="font-headline text-5xl md:text-6xl text-primary font-black mb-4">${article.title}</h1>
      <p class="text-body italic text-lg">By ${article.author} | ${article.date}</p>
    </div>
    <img class="w-full h-auto object-cover rounded-lg shadow-lg mb-12" src="${article.image}" alt="${article.title}">
    <div class="font-body text-xl text-body leading-relaxed space-y-6">
      ${article.content}
    </div>
  `;
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

/**
 * Shows a temporary notification message at bottom-right of screen
 * @param {string} text - Message to display
 */
function showMessage(text) {
  messageBoxEl.textContent = text; // Set message text
  messageBoxEl.classList.remove("opacity-0", "pointer-events-none"); // Make visible
  messageBoxEl.classList.add("opacity-100");

  // After 3 seconds, hide the message
  setTimeout(() => {
    messageBoxEl.classList.remove("opacity-100");
    messageBoxEl.classList.add("opacity-0", "pointer-events-none");
  }, 3000);
}

/* ========================================
   SHOPPING CART FUNCTIONS
   ======================================== */

/**
 * Opens or closes the shopping cart drawer
 * @param {boolean} open - True to open, false to close
 */
function toggleCartDrawer(open) {
  if (open) {
    cartDrawerEl.classList.add("open"); // Slide in cart
    cartBackdropEl.classList.add("open"); // Show dark overlay
    renderCart(); // Update cart contents
  } else {
    cartDrawerEl.classList.remove("open"); // Slide out cart
    cartBackdropEl.classList.remove("open"); // Hide overlay
  }
}

/**
 * Generates HTML for all products and displays on shop page
 */
function renderProducts() {
  // Map over products array and create HTML for each
  productListEl.innerHTML = products
    .map(
      (product, index) => `
    <div class="bg-secondary rounded-lg overflow-hidden article-card animated-content" 
         style="animation-delay: ${0.1 + index * 0.1}s;">
      <img class="w-full h-72 object-cover shadow-sm" 
           src="${product.image}" 
           alt="${product.name}">
      <div class="p-4 pt-6 text-center">
        <p class="text-xs uppercase tracking-wider text-gray-500">${
          product.category
        }</p>
        <h4 class="font-headline font-bold text-xl text-primary mt-1">${
          product.name
        }</h4>
        <p class="text-lg font-bold text-accent mt-2">$${product.price.toFixed(
          2
        )}</p>
        <button 
          onclick="addToCart(${product.id})"
          class="mt-4 w-full bg-primary text-secondary py-3 rounded-lg text-sm font-semibold hover:bg-accent transition duration-300">
          Add to Ritual
        </button>
      </div>
    </div>
  `
    )
    .join(""); // Join array into single HTML string
}

/**
 * Updates the cart drawer display with current cart contents
 */
function renderCart() {
  let total = 0; // Total price
  let totalItems = 0; // Total quantity

  if (cart.length === 0) {
    // Empty cart message
    cartItemsContainerEl.innerHTML = `<p class="text-gray-400 text-center">Your cart is empty.</p>`;
    cartTotalEl.textContent = `$0.00`;
  } else {
    // Generate HTML for each cart item
    cartItemsContainerEl.innerHTML = cart
      .map((item) => {
        const itemTotal = item.price * item.quantity; // Calculate item subtotal
        total += itemTotal; // Add to running total
        totalItems += item.quantity; // Add to item count

        return `
        <div class="flex items-center space-x-4 border-b border-gray-800 pb-4">
          <img class="w-16 h-16 object-cover rounded-md" src="${
            item.image
          }" alt="${item.name}">
          <div class="flex-grow">
            <h4 class="text-base font-headline font-semibold">${item.name}</h4>
            <p class="text-sm text-gray-400">${item.category}</p>
            <p class="text-sm text-accent font-bold">$${item.price.toFixed(
              2
            )} x ${item.quantity}</p>
          </div>
          <button class="text-gray-400 hover:text-red-500 p-1" onclick="removeFromCart(${
            item.id
          })">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      `;
      })
      .join("");

    cartTotalEl.textContent = `$${total.toFixed(2)}`; // Update total price
  }

  cartCountEl.textContent = totalItems; // Update cart badge count
}

/**
 * Adds a product to the shopping cart
 * @param {number} productId - ID of product to add
 */
function addToCart(productId) {
  // Find the product in products array
  const product = products.find((p) => p.id === productId);
  if (!product) return; // Product not found

  // Check if item already in cart
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1; // Increase quantity if already in cart
  } else {
    cart.push({ ...product, quantity: 1 }); // Add new item with quantity 1
  }

  showMessage(`Added ${product.name} to ritual.`); // Show confirmation
  renderCart(); // Update cart display
}

/**
 * Removes a product completely from the cart
 * @param {number} productId - ID of product to remove
 */
function removeFromCart(productId) {
  const initialLength = cart.length;
  cart = cart.filter((item) => item.id !== productId); // Remove item from array

  if (cart.length !== initialLength) {
    showMessage("Item removed from ritual."); // Show confirmation
    renderCart(); // Update cart display
  }
}

/* ========================================
   INITIALIZATION - Runs when page loads
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
  // This code runs after HTML is fully loaded

  renderProducts(); // Generate product cards on shop page
  renderCart(); // Initialize cart display (shows 0 items)

  // Listen for browser back/forward button clicks
  window.onpopstate = (event) => {
    _loadPageFromUrl(); // Load appropriate page based on URL
  };

  // Load the correct page based on initial URL
  _loadPageFromUrl();
});