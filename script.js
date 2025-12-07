/* ========================================
   DATA STORAGE: Products and Articles
   ======================================== */

// Array of products for the shop page
// Each product is an object with id, name, price, image URL, and category
const products = [
  {
    id: 101, // Unique identifier for this product
    name: "Adaptogenic Elixir Drops",
    price: 49.0,
    image:
      "https://biocidin.com/cdn/shop/files/Biotonic_f1aeceb0-846b-4819-ad80-e369933c3115_1400x.png?v=1753327443",
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
    image:
      "https://www.hanakotherapies.com/cdn/shop/products/EyePillowBlush03.png?v=1636591427",
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
// Each article has id, title, category, author, date, and HTML content
const articles = [
  {
    id: "anxiety", // Unique string identifier for URL routing
    title: "Strategies to Ease Anxiety in Under 5 Minutes",
    category: "Mind & Spirit",
    image:
      "https://www.mindwellcare.com/mt-content/uploads/2023/08/6425304.webp",
    author: "Dr. Elara Vance, Clinical Psychologist",
    date: "October 14, 2024",
    content: `
      <p style="margin-bottom: 24px;">The modern world is a constant source of low-level stress, but learning how to interrupt the anxiety cycle quickly is a superpower. Our goal is not to eliminate anxiety entirely, but to have reliable tools to ease its intensity within a brief window.</p>
      <h3 style="font-family: 'Montserrat', sans-serif; font-size: 32px; font-weight: bold; color: #111; margin-top: 40px; margin-bottom: 16px;">The 4-7-8 Breathwork</h3>
      <p style="margin-bottom: 24px;">This simple technique, popularized by Dr. Andrew Weil, is one of the most effective non-pharmacological tranquilizers. It forces the nervous system to shift from sympathetic ("fight or flight") to parasympathetic ("rest and digest").</p>
      <ul style="list-style: disc; margin-left: 32px; margin-bottom: 24px; line-height: 1.8;">
        <li><strong>Step 1 (Exhale):</strong> Exhale completely through your mouth, making a whoosh sound.</li>
        <li><strong>Step 2 (Inhale):</strong> Close your mouth and inhale quietly through your nose to a count of four.</li>
        <li><strong>Step 3 (Hold):</strong> Hold your breath for a count of seven.</li>
        <li><strong>Step 4 (Exhale):</strong> Exhale completely through your mouth to a count of eight.</li>
      </ul>
      <h3 style="font-family: 'Montserrat', sans-serif; font-size: 32px; font-weight: bold; color: #111; margin-top: 40px; margin-bottom: 16px;">Tactical Grounding: The 5-4-3-2-1 Method</h3>
      <p style="margin-bottom: 24px;">When your mind is racing, grounding techniques anchor you to the present moment through your senses. This method is fast, discrete, and highly effective for panic or acute anxiety:</p>
      <ol style="list-style: decimal; margin-left: 32px; line-height: 1.8;">
        <li><strong>5:</strong> Acknowledge five things you can <strong>see</strong>.</li>
        <li><strong>4:</strong> Acknowledge four things you can <strong>feel</strong>.</li>
        <li><strong>3:</strong> Acknowledge three things you can <strong>hear</strong>.</li>
        <li><strong>2:</strong> Acknowledge two things you can <strong>smell</strong>.</li>
        <li><strong>1:</strong> Acknowledge one thing you can <strong>taste</strong>.</li>
      </ol>
      <p style="margin-top: 24px; font-style: italic; color: #3a4e5a;">Mastering these small shifts can redefine your relationship with stress, turning moments of panic into opportunities for mindful response.</p>
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
      <p style="margin-bottom: 24px;">Overnight oats are more than just a convenient breakfast; they're a powerhouse of slow-releasing energy, fiber, and essential nutrients. They require zero cooking and offer complete customization.</p>
      <h3 style="font-family: 'Montserrat', sans-serif; font-size: 32px; font-weight: bold; color: #111; margin-top: 40px; margin-bottom: 16px;">The Base Recipe</h3>
      <p style="margin-bottom: 16px;">Always start with a simple 1:1 ratio of liquid to oats, plus a binder and sweetener.</p>
      <ul style="list-style: disc; margin-left: 32px; margin-bottom: 24px; line-height: 1.8;">
        <li>1/2 cup Rolled Oats</li>
        <li>1/2 cup Milk (Dairy or Non-Dairy)</li>
        <li>1 tbsp Chia Seeds (essential for thickening)</li>
        <li>1 tsp Maple Syrup or Honey</li>
      </ul>
      <p style="margin-bottom: 24px;">Combine ingredients in a jar, stir, cover, and refrigerate overnight. In the morning, top with your desired ingredients.</p>
    `,
  },
  {
    id: "vagus",
    title: "Understanding Your Vagus Nerve: The Master Regulator",
    category: "Mind & Spirit",
    image: "https://placehold.co/1200x500/D1D1D1/4A4A4A?text=Vagus+Nerve",
    author: "Dr. Adrian Lowe, Neurologist",
    date: "October 3, 2024",
    content: `
      <p style="margin-bottom: 24px;">The Vagus Nerve is the longest cranial nerve, extending from the brainstem down to the abdomen, touching the heart, lungs, and digestive tract.</p>
      <h3 style="font-family: 'Montserrat', sans-serif; font-size: 32px; font-weight: bold; color: #111; margin-top: 40px; margin-bottom: 16px;">Vagal Tone and Well-being</h3>
      <p style="margin-bottom: 24px;">A high vagal tone means your body can relax faster after a stressful event. Low vagal tone is associated with chronic inflammation and anxiety.</p>
    `,
  },
  {
    id: "pilates",
    title: "The Art of Slow: Why Pilates is the Ultimate Longevity Workout",
    category: "Movement",
    image: "https://placehold.co/1200x500/C0C0C0/4A4A4A?text=Pilates",
    author: "Staff Writer",
    date: "October 10, 2024",
    content: `<h3 style="font-family: 'Montserrat', sans-serif; font-size: 32px; font-weight: bold; color: #111; margin-bottom: 16px;">Coming Soon!</h3><p>This article is currently being written. Check back soon for the full feature on Pilates and longevity.</p>`,
  },
  {
    id: "sleep",
    title: "The Science of Sleep and Its Impact on Skin Health",
    category: "Beauty & Skin",
    image: "https://placehold.co/1200x500/B0B0B0/4A4A4A?text=Sleep",
    author: "Staff Writer",
    date: "October 10, 2024",
    content: `<h3 style="font-family: 'Montserrat', sans-serif; font-size: 32px; font-weight: bold; color: #111; margin-bottom: 16px;">Coming Soon!</h3><p>This article explores how sleep affects skin health and collagen production.</p>`,
  },
  {
    id: "minerals",
    title: "Beyond Vitamins: Essential Minerals for Gut Health",
    category: "Supplements",
    image: "https://placehold.co/1200x500/A0A0A0/4A4A4A?text=Minerals",
    author: "Staff Writer",
    date: "October 10, 2024",
    content: `<h3 style="font-family: 'Montserrat', sans-serif; font-size: 32px; font-weight: bold; color: #111; margin-bottom: 16px;">Coming Soon!</h3><p>Learn about essential minerals for maintaining a healthy gut microbiome.</p>`,
  },
  {
    id: "travel",
    title: "The Art of Slow Travel: Recharging While on the Move",
    category: "Lifestyle",
    image: "https://placehold.co/1200x500/909090/4A4A4A?text=Travel",
    author: "Staff Writer",
    date: "October 10, 2024",
    content: `<h3 style="font-family: 'Montserrat', sans-serif; font-size: 32px; font-weight: bold; color: #111; margin-bottom: 16px;">Coming Soon!</h3><p>Discover how to make travel truly restorative through mindfulness.</p>`,
  },
];

/* ========================================
   GLOBAL STATE MANAGEMENT
   ======================================== */

// Shopping cart array - stores items user has added
// Each item will have product data plus a quantity property
let cart = [];

/* ========================================
   DOM ELEMENT REFERENCES
   ======================================== */

// Get references to important HTML elements we'll manipulate
const productListEl = document.getElementById("product-list");
const articleContentContainerEl = document.getElementById(
  "article-content-container"
);
const messageBoxEl = document.getElementById("message-box");
const cartDrawerEl = document.getElementById("cart-drawer");
const cartBackdropEl = document.getElementById("cart-backdrop");
const cartItemsContainerEl = document.getElementById("cart-items-container");
const cartTotalEl = document.getElementById("cart-total");
const cartCountEl = document.getElementById("cart-count");

/* ========================================
   NAVIGATION FUNCTIONS (Single Page App)
   ======================================== */

/**
 * Internal function to show/hide page sections
 * Hides all pages, then shows the target page
 * @param {string} pageId - ID of the page to show (e.g., "cover", "shop")
 * @param {string} contentId - Optional ID for dynamic content (e.g., article ID)
 */
function _loadPage(pageId, contentId) {
  // Step 1: Hide ALL page sections by removing "active" class
  document.querySelectorAll(".page-view").forEach((page) => {
    page.classList.remove("active");
  });

  // Step 2: Find and show the target page by adding "active" class
  const targetPage = document.getElementById("page-" + pageId);

  if (targetPage) {
    targetPage.classList.add("active"); // Make page visible
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly

    // Step 3: Special handling for article detail page
    // If showing an article, populate its content
    if (pageId === "article-detail" && contentId) {
      renderArticleDetail(contentId);
    }

    // Step 4: Close cart drawer if it's currently open
    if (cartDrawerEl.classList.contains("open")) {
      toggleCartDrawer(false);
    }
  } else {
    // Fallback: if page doesn't exist, show cover page
    document.getElementById("page-cover").classList.add("active");
  }
}

/**
 * Public navigation function - called when user clicks links
 * Updates browser URL and loads the appropriate page
 * @param {string} pageId - Page to navigate to
 * @param {string} contentId - Optional content identifier (e.g., article ID)
 * @param {Event} event - Click event (to prevent default link behavior)
 */
function navigateTo(pageId, contentId = null, event = null) {
  if (event) {
    event.preventDefault(); // Stop default link action (prevents page reload)
  }

  // Build URL hash (the part after #)
  // Examples: "#featured" or "#article-detail-anxiety"
  let hash = pageId;
  if (contentId) {
    hash += "-" + contentId;
  }

  // Update browser URL without reloading the page
  // This allows users to bookmark and share specific pages
  history.pushState({ pageId, contentId }, "", "#" + hash);

  // Actually load and display the page
  _loadPage(pageId, contentId);
}

/**
 * Parses current URL hash and loads the appropriate page
 * Called on initial page load and when browser back/forward buttons are clicked
 */
function _loadPageFromUrl() {
  const hash = window.location.hash.slice(1); // Get hash without the "#" symbol

  if (!hash) {
    // No hash in URL = show cover page
    _loadPage("cover", null);
    return;
  }

  // Parse hash to extract page ID and optional content ID
  // Example: "article-detail-anxiety" splits into ["article", "detail", "anxiety"]
  const parts = hash.split("-");
  let pageId = parts[0];
  let contentId = null;

  // Handle article detail URLs (special case with 3 parts)
  if (pageId === "article" && parts[1] === "detail" && parts.length > 2) {
    pageId = "article-detail";
    contentId = parts[2];
  }

  // Load the appropriate page based on parsed hash
  if (["cover", "featured", "editorial", "shop"].includes(pageId)) {
    _loadPage(pageId, null);
  } else if (pageId === "article-detail" && contentId) {
    _loadPage(pageId, contentId);
  } else {
    // Invalid hash = default to cover page
    _loadPage("cover", null);
  }
}

/* ========================================
   ARTICLE RENDERING FUNCTIONS
   ======================================== */

/**
 * Renders a single article's full content on the detail page
 * Finds article by ID and injects its HTML into the page
 * @param {string} articleId - ID of the article to display
 */
function renderArticleDetail(articleId) {
  // Search for article in articles array using find()
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    // Article not found - show error message
    articleContentContainerEl.innerHTML = `
      <h1 style="font-family: 'Montserrat', sans-serif; font-size: 48px; font-weight: 900; color: #111; margin-bottom: 16px;">Article Not Found</h1>
      <p style="font-size: 20px;">The article you're looking for doesn't exist yet. Please try another article.</p>
    `;
    return;
  }

  // Build and inject complete article HTML
  articleContentContainerEl.innerHTML = `
    <div style="margin-bottom: 40px;">
      <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 3px; color: #3a4e5a; font-weight: 600; margin-bottom: 8px;">${article.category}</p>
      <h1 style="font-family: 'Montserrat', sans-serif; font-size: 48px; font-weight: 900; color: #111; margin-bottom: 16px; line-height: 1.1;">${article.title}</h1>
      <p style="color: #4a4a4a; font-style: italic; font-size: 18px;">By ${article.author} | ${article.date}</p>
    </div>
    <img style="width: 100%; height: auto; object-fit: cover; border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); margin-bottom: 48px;" src="${article.image}" alt="${article.title}">
    <div style="font-size: 20px; color: #4a4a4a; line-height: 1.8;">
      ${article.content}
    </div>
  `;
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

/**
 * Shows a temporary notification message at bottom-right of screen
 * Message automatically disappears after 3 seconds
 * @param {string} text - Message to display
 */
function showMessage(text) {
  messageBoxEl.textContent = text; // Set message text
  messageBoxEl.classList.add("show"); // Make visible by adding "show" class

  // After 3 seconds (3000 milliseconds), hide the message
  setTimeout(() => {
    messageBoxEl.classList.remove("show");
  }, 3000);
}

/* ========================================
   SHOPPING CART FUNCTIONS
   ======================================== */

/**
 * Opens or closes the shopping cart drawer
 * Also controls the dark backdrop overlay
 * @param {boolean} open - True to open, false to close
 */
function toggleCartDrawer(open) {
  if (open) {
    cartDrawerEl.classList.add("open"); // Slide in cart drawer
    cartBackdropEl.classList.add("open"); // Show dark overlay
    renderCart(); // Update cart contents display
  } else {
    cartDrawerEl.classList.remove("open"); // Slide out cart drawer
    cartBackdropEl.classList.remove("open"); // Hide dark overlay
  }
}

/**
 * Generates HTML for all products and displays them on shop page
 * Uses array.map() to transform product data into HTML strings
 */
function renderProducts() {
  // Map over products array and create HTML for each product
  productListEl.innerHTML = products
    .map(
      (product, index) => `
    <div class="product-card animated-content" style="animation-delay: ${
      0.1 + index * 0.1
    }s;">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h4 class="product-name">${product.name}</h4>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <button class="btn-add-cart" onclick="addToCart(${product.id})">
          Add to Ritual
        </button>
      </div>
    </div>
  `
    )
    .join(""); // Join array of HTML strings into single string
}

/**
 * Updates the cart drawer display with current cart contents
 * Calculates totals and generates HTML for each cart item
 */
function renderCart() {
  let total = 0; // Running total of all prices
  let totalItems = 0; // Total number of items in cart

  if (cart.length === 0) {
    // Empty cart - show message
    cartItemsContainerEl.innerHTML = `<p class="cart-empty">Your cart is empty.</p>`;
    cartTotalEl.textContent = `$0.00`;
  } else {
    // Generate HTML for each item in cart
    cartItemsContainerEl.innerHTML = cart
      .map((item) => {
        const itemTotal = item.price * item.quantity; // Calculate subtotal for this item
        total += itemTotal; // Add to running total
        totalItems += item.quantity; // Add to item count

        // Return HTML for this cart item
        return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div class="cart-item-info">
            <h4 class="cart-item-name">${item.name}</h4>
            <p class="cart-item-category">${item.category}</p>
            <p class="cart-item-price">$${item.price.toFixed(2)} x ${
          item.quantity
        }</p>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      `;
      })
      .join("");

    cartTotalEl.textContent = `$${total.toFixed(2)}`; // Update total price display
  }

  cartCountEl.textContent = totalItems; // Update cart badge count in header
}

/**
 * Adds a product to the shopping cart
 * If item already exists, increases quantity; otherwise adds new item
 * @param {number} productId - ID of product to add
 */
function addToCart(productId) {
  // Find the product in products array using find() method
  const product = products.find((p) => p.id === productId);
  if (!product) return; // Product not found - exit function

  // Check if this product is already in the cart
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    // Item already in cart - just increase the quantity
    existingItem.quantity += 1;
  } else {
    // New item - add to cart with quantity of 1
    // Use spread operator {...product} to copy product data
    cart.push({ ...product, quantity: 1 });
  }

  // Show success notification
  showMessage(`Added ${product.name} to ritual.`);

  // Update cart display (count badge and drawer if open)
  renderCart();
}

/**
 * Removes a product completely from the cart
 * Uses array.filter() to create new array without the removed item
 * @param {number} productId - ID of product to remove
 */
function removeFromCart(productId) {
  const initialLength = cart.length; // Remember original cart size

  // Filter out the item with matching ID
  // filter() returns a new array excluding items where id matches
  cart = cart.filter((item) => item.id !== productId);

  // Only show message if something was actually removed
  if (cart.length !== initialLength) {
    showMessage("Item removed from ritual.");
    renderCart(); // Update cart display
  }
}

/* ========================================
   INITIALIZATION - Runs when page loads
   ======================================== */

// Wait for DOM (HTML) to be fully loaded before running code
document.addEventListener("DOMContentLoaded", () => {
  // Generate product cards on shop page
  renderProducts();

  // Initialize cart display (shows 0 items initially)
  renderCart();

  // Listen for browser back/forward button clicks
  // When user clicks back/forward, load appropriate page from URL
  window.onpopstate = (event) => {
    _loadPageFromUrl();
  };

  // Load the correct page based on initial URL hash
  // This runs once when page first loads
  _loadPageFromUrl();
});
