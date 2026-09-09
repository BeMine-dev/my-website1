/* ============================================================
   ShopEase — script.js
   1. Product Data        9. Cart Sidebar
   2. Category Data      10. Coupon System
   3. App State          11. Render Products
   4. localStorage       12. Render Categories
   5. Toast              13. Filter Pills
   6. Stars Renderer     14. Search
   7. Cart System        15. Sort
   8. Wishlist           16-24. More features...
   ============================================================ */

/* ============================================================
   1. PRODUCT DATA
   ============================================================ */
const PRODUCTS = [
  {
    id: 1, name: "Pro Wireless Headphones",
    price: 49.99, originalPrice: 79.99, rating: 4.5, reviews: 248,
    category: "electronics", image: "https://picsum.photos/seed/headphones1/400/400",
    description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and hi-res audio support. Perfect for work, travel, and workouts.",
    tag: "Best Seller", inStock: true,
  },
  {
    id: 2, name: "Smart Fitness Watch",
    price: 129.99, originalPrice: 199.99, rating: 4.8, reviews: 512,
    category: "electronics", image: "https://picsum.photos/seed/watch2/400/400",
    description: "Track your health 24/7 with this advanced smartwatch. GPS, heart rate, blood oxygen, sleep tracking, and 7-day battery — all in one sleek device.",
    tag: "Hot", inStock: true,
  },
  {
    id: 3, name: "Running Sneakers Ultra",
    price: 89.99, originalPrice: 129.99, rating: 4.3, reviews: 187,
    category: "sports", image: "https://picsum.photos/seed/sneakers3/400/400",
    description: "Lightweight, breathable, and built for speed. Ultra foam cushioning and energy-return soles for maximum performance on any surface.",
    tag: "Sale", inStock: true,
  },
  {
    id: 4, name: "Minimal Linen Tote Bag",
    price: 34.99, originalPrice: null, rating: 4.6, reviews: 93,
    category: "fashion", image: "https://picsum.photos/seed/bag4/400/400",
    description: "A timeless linen tote with interior pockets and a zip closure. Eco-friendly, spacious, and stylish for everyday errands or beach days.",
    tag: null, inStock: true,
  },
  {
    id: 5, name: "Retinol Night Cream",
    price: 28.99, originalPrice: 44.99, rating: 4.7, reviews: 341,
    category: "beauty", image: "https://picsum.photos/seed/cream5/400/400",
    description: "Clinically proven retinol formula that reduces fine lines, evens skin tone, and boosts collagen production overnight. Suitable for all skin types.",
    tag: "Editor's Pick", inStock: true,
  },
  {
    id: 6, name: "Boho Pendant Table Lamp",
    price: 59.99, originalPrice: 89.99, rating: 4.4, reviews: 76,
    category: "home", image: "https://picsum.photos/seed/lamp6/400/400",
    description: "Hand-woven rattan pendant lamp that casts warm, dreamy patterns. Ideal for bedrooms, reading nooks, and cozy corners.",
    tag: "New", inStock: true,
  },
  {
    id: 7, name: "Atomic Habits — Book",
    price: 14.99, originalPrice: 22.99, rating: 5.0, reviews: 1102,
    category: "books", image: "https://picsum.photos/seed/book7/400/400",
    description: "James Clear's life-changing guide to building good habits and breaking bad ones. Over 10 million copies sold worldwide — a must-read.",
    tag: "Bestseller", inStock: true,
  },
  {
    id: 8, name: "Portable Bluetooth Speaker",
    price: 39.99, originalPrice: 59.99, rating: 4.2, reviews: 205,
    category: "electronics", image: "https://picsum.photos/seed/speaker8/400/400",
    description: "360-degree surround sound, IPX7 waterproof, 12-hour playtime. Rugged, compact, and great for outdoors, parties, and travel.",
    tag: null, inStock: true,
  },
  {
    id: 9, name: "Organic Yoga Mat",
    price: 49.99, originalPrice: null, rating: 4.6, reviews: 128,
    category: "sports", image: "https://picsum.photos/seed/yoga9/400/400",
    description: "Made from 100% natural rubber with non-slip texture. Alignment lines, extra thickness (6mm), and free carry strap included.",
    tag: "Eco", inStock: true,
  },
  {
    id: 10, name: "Ceramic Pour-Over Coffee Set",
    price: 44.99, originalPrice: 64.99, rating: 4.9, reviews: 89,
    category: "home", image: "https://picsum.photos/seed/coffee10/400/400",
    description: "Handcrafted ceramic pour-over dripper and server set. Experience specialty coffee at home with the perfect brew every time.",
    tag: "Fan Fave", inStock: true,
  },
  {
    id: 11, name: "Velvet Midi Dress",
    price: 64.99, originalPrice: 99.99, rating: 4.5, reviews: 63,
    category: "fashion", image: "https://picsum.photos/seed/dress11/400/400",
    description: "Elegant crushed-velvet midi dress with puff sleeves and a wrap-style silhouette. Perfect for date nights and special occasions.",
    tag: "Trending", inStock: true,
  },
  {
    id: 12, name: "Vitamin C Glow Serum",
    price: 19.99, originalPrice: 32.99, rating: 4.3, reviews: 274,
    category: "beauty", image: "https://picsum.photos/seed/serum12/400/400",
    description: "15% stabilized Vitamin C complex that brightens, protects against UV damage, and gives you a radiant, glass-skin glow in 2 weeks.",
    tag: "Sale", inStock: true,
  },
];

/* ============================================================
   2. CATEGORY DATA
   ============================================================ */
const CATEGORIES = [
  { id: "electronics", name: "Electronics",  icon: "fas fa-bolt",      color: "#dbeafe", iconColor: "#3B82F6", count: 3 },
  { id: "fashion",     name: "Fashion",       icon: "fas fa-tshirt",    color: "#fce7f3", iconColor: "#EC4899", count: 2 },
  { id: "home",        name: "Home & Living", icon: "fas fa-couch",     color: "#fef3c7", iconColor: "#F59E0B", count: 2 },
  { id: "beauty",      name: "Beauty",        icon: "fas fa-spa",       color: "#ede9fe", iconColor: "#8B5CF6", count: 2 },
  { id: "sports",      name: "Sports",        icon: "fas fa-dumbbell",  color: "#dcfce7", iconColor: "#22C55E", count: 2 },
  { id: "books",       name: "Books",         icon: "fas fa-book-open", color: "#ffedd5", iconColor: "#F97316", count: 1 },
];

/* ============================================================
   3. APP STATE
   ============================================================ */
const state = {
  cart: [], wishlist: [],
  currentCategory: "all",
  currentSearch: "",
  currentSort: "default",
  visibleCount: 8,
  couponDiscount: 0,
  couponApplied: false,
};

const VALID_COUPONS = { SAVE10: 0.10, WELCOME20: 0.20, DEAL15: 0.15 };

/* ============================================================
   4. LOCALSTORAGE HELPERS
   ============================================================ */
function loadState() {
  try {
    state.cart     = JSON.parse(localStorage.getItem("se_cart"))     || [];
    state.wishlist = JSON.parse(localStorage.getItem("se_wishlist")) || [];
  } catch (_) { state.cart = []; state.wishlist = []; }
}
function saveCart()     { localStorage.setItem("se_cart",     JSON.stringify(state.cart)); }
function saveWishlist() { localStorage.setItem("se_wishlist", JSON.stringify(state.wishlist)); }

/* ============================================================
   5. TOAST NOTIFICATIONS
   ============================================================ */
function showToast(message, type = "success", duration = 2500) {
  const container = document.getElementById("toast-container");
  const icons = { success: "fas fa-circle-check", error: "fas fa-circle-xmark", info: "fas fa-circle-info" };
  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.setAttribute("role", "status");
  toast.innerHTML = `<i class="${icons[type] || icons.success}" aria-hidden="true"></i><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("fade-out");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, duration);
}

/* ============================================================
   6. STARS RENDERER
   ============================================================ */
function buildStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  let html = '<span class="stars" aria-hidden="true">';
  for (let i = 0; i < full;  i++) html += '<i class="fas fa-star"></i>';
  if (half)                       html += '<i class="fas fa-star-half-stroke"></i>';
  for (let i = 0; i < empty; i++) html += '<i class="far fa-star"></i>';
  html += '</span>';
  return html;
}

/* ============================================================
   7. CART SYSTEM
   ============================================================ */
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    if (existing.qty >= 10) { showToast("Maximum quantity (10) reached", "info"); return; }
    existing.qty++;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCartBadge();
  renderCartItems();
  showToast(`"${product.name}" added to cart! 🛒`, "success");
}

function removeFromCart(productId) {
  const product = state.cart.find(item => item.id === productId);
  state.cart = state.cart.filter(item => item.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartItems();
  if (product) showToast(`"${product.name}" removed from cart`, "error");
}

function updateCartQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.min(10, Math.max(1, item.qty + delta));
  saveCart();
  renderCartItems();
}

function updateCartBadge() {
  const total = state.cart.reduce((sum, i) => sum + i.qty, 0);
  const badge = document.getElementById("cart-badge");
  badge.textContent = total;
  badge.classList.add("pop");
  badge.addEventListener("animationend", () => badge.classList.remove("pop"), { once: true });
}

function updateCartTotal() {
  const subtotal   = state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discount   = subtotal * state.couponDiscount;
  const discounted = subtotal - discount;
  const tax        = discounted * 0.10;
  const total      = discounted + tax;
  document.getElementById("cart-subtotal").textContent = `$${discounted.toFixed(2)}${discount > 0 ? ` (−$${discount.toFixed(2)})` : ""}`;
  document.getElementById("cart-tax").textContent      = `$${tax.toFixed(2)}`;
  document.getElementById("cart-total").textContent    = `$${total.toFixed(2)}`;
}

function renderCartItems() {
  const container = document.getElementById("cart-items");
  const emptyEl   = document.getElementById("cart-empty");
  const footerEl  = document.getElementById("cart-footer");
  container.innerHTML = "";
  if (state.cart.length === 0) {
    emptyEl.classList.add("visible");
    footerEl.classList.remove("visible");
    updateCartTotal();
    return;
  }
  emptyEl.classList.remove("visible");
  footerEl.classList.add("visible");
  state.cart.forEach(item => {
    const el = document.createElement("div");
    el.className = "cart-item";
    el.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item__img" loading="lazy" />
      <div class="cart-item__info">
        <p class="cart-item__name" title="${item.name}">${item.name}</p>
        <p class="cart-item__price">$${(item.price * item.qty).toFixed(2)}</p>
        <div class="cart-item__qty">
          <button class="qty-btn" data-id="${item.id}" data-delta="-1" aria-label="Decrease quantity">−</button>
          <span class="qty-value" aria-label="Quantity">${item.qty}</span>
          <button class="qty-btn" data-id="${item.id}" data-delta="1" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="cart-item__remove" data-id="${item.id}" aria-label="Remove ${item.name} from cart">
        <i class="fas fa-trash-alt" aria-hidden="true"></i>
      </button>
    `;
    container.appendChild(el);
  });
  container.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", () => { updateCartQty(Number(btn.dataset.id), Number(btn.dataset.delta)); updateCartTotal(); });
  });
  container.querySelectorAll(".cart-item__remove").forEach(btn => {
    btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.id)));
  });
  updateCartTotal();
}

/* ============================================================
   8. WISHLIST SYSTEM
   ============================================================ */
function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);
  if (idx === -1) {
    state.wishlist.push(productId);
    showToast(`"${product.name}" added to wishlist! ❤️`, "info");
  } else {
    state.wishlist.splice(idx, 1);
    showToast(`"${product.name}" removed from wishlist`, "info");
  }
  saveWishlist();
  updateWishlistBadge();
  updateWishlistIcons();
}

function updateWishlistBadge() {
  const badge = document.getElementById("wishlist-badge");
  badge.textContent = state.wishlist.length;
  badge.classList.add("pop");
  badge.addEventListener("animationend", () => badge.classList.remove("pop"), { once: true });
}

function updateWishlistIcons() {
  document.querySelectorAll(".product-card__wishlist").forEach(btn => {
    const id = Number(btn.dataset.id);
    const isWishlisted = state.wishlist.includes(id);
    btn.classList.toggle("active", isWishlisted);
    btn.setAttribute("aria-label", isWishlisted ? "Remove from wishlist" : "Add to wishlist");
    const icon = btn.querySelector("i");
    if (icon) icon.className = isWishlisted ? "fas fa-heart" : "far fa-heart";
  });
}

/* ============================================================
   9. CART SIDEBAR
   ============================================================ */
function openCart() {
  document.getElementById("cart-sidebar").classList.add("open");
  document.getElementById("overlay").classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  document.getElementById("cart-sidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("active");
  document.body.style.overflow = "";
}

/* ============================================================
   10. COUPON SYSTEM
   ============================================================ */
function initCoupon() {
  document.getElementById("apply-coupon").addEventListener("click", () => {
    const code     = document.getElementById("coupon-input").value.trim().toUpperCase();
    const msgEl    = document.getElementById("coupon-msg");
    const discount = VALID_COUPONS[code];
    if (!code) { msgEl.textContent = "Please enter a coupon code."; msgEl.className = "coupon-msg coupon-msg--error"; return; }
    if (state.couponApplied) { msgEl.textContent = "A coupon is already applied."; msgEl.className = "coupon-msg coupon-msg--error"; return; }
    if (discount) {
      state.couponDiscount = discount;
      state.couponApplied  = true;
      msgEl.textContent    = `✓ ${code} applied — ${discount * 100}% off!`;
      msgEl.className      = "coupon-msg coupon-msg--success";
      showToast(`Coupon ${code} applied — ${discount * 100}% off! 🎉`, "success");
      updateCartTotal();
    } else {
      msgEl.textContent = "Invalid coupon code. Try SAVE10 or DEAL15.";
      msgEl.className   = "coupon-msg coupon-msg--error";
    }
  });
}

/* ============================================================
   11. RENDER PRODUCTS
   ============================================================ */
function getFilteredProducts() {
  let list = [...PRODUCTS];
  if (state.currentCategory !== "all") list = list.filter(p => p.category === state.currentCategory);
  if (state.currentSearch) {
    const q = state.currentSearch.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.description && p.description.toLowerCase().includes(q))
    );
  }
  switch (state.currentSort) {
    case "price-asc":  list.sort((a, b) => a.price - b.price);  break;
    case "price-desc": list.sort((a, b) => b.price - a.price);  break;
    case "rating":     list.sort((a, b) => b.rating - a.rating); break;
    case "name":       list.sort((a, b) => a.name.localeCompare(b.name)); break;
  }
  return list;
}

function buildProductCard(product) {
  const isWishlisted = state.wishlist.includes(product.id);
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
  return `
    <article class="product-card" role="listitem" data-id="${product.id}">
      <div class="product-card__img-wrap">
        <img src="${product.image}" alt="${product.name}" class="product-card__img" loading="lazy" />
        ${product.tag ? `<span class="product-card__sale-badge">${product.tag}</span>` : ""}
        <button class="product-card__wishlist ${isWishlisted ? "active" : ""}" data-id="${product.id}"
          aria-label="${isWishlisted ? "Remove from wishlist" : "Add to wishlist"}">
          <i class="${isWishlisted ? "fas" : "far"} fa-heart" aria-hidden="true"></i>
        </button>
        <div class="product-card__overlay" aria-hidden="true">
          <button class="product-card__quick-view" data-id="${product.id}">
            <i class="fas fa-eye"></i> Quick View
          </button>
        </div>
      </div>
      <div class="product-card__body">
        <span class="product-card__category">${product.category}</span>
        <h3 class="product-card__name">${product.name}</h3>
        <div class="product-card__rating">
          ${buildStars(product.rating)}
          <span class="product-card__rating-count" aria-label="${product.rating} out of 5 stars, ${product.reviews} reviews">
            (${product.reviews})
          </span>
        </div>
        <div class="product-card__pricing">
          <span class="product-card__price">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="product-card__original">$${product.originalPrice.toFixed(2)}</span>` : ""}
          ${discount ? `<span class="product-card__save">${discount}% off</span>` : ""}
        </div>
        <div class="product-card__actions">
          <button class="btn-add-to-cart" data-id="${product.id}" aria-label="Add ${product.name} to cart">
            <i class="fas fa-shopping-bag" aria-hidden="true"></i> Add to Cart
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const grid         = document.getElementById("products-grid");
  const noResults    = document.getElementById("no-results");
  const loadMoreWrap = document.getElementById("load-more-wrap");
  const filtered     = getFilteredProducts();
  const visible      = filtered.slice(0, state.visibleCount);
  grid.innerHTML = "";
  if (filtered.length === 0) { noResults.hidden = false; loadMoreWrap.style.display = "none"; return; }
  noResults.hidden = true;
  visible.forEach(p => grid.insertAdjacentHTML("beforeend", buildProductCard(p)));
  loadMoreWrap.style.display = filtered.length > state.visibleCount ? "block" : "none";
  attachProductEvents();
}

function attachProductEvents() {
  document.querySelectorAll(".btn-add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      flyToCart(btn);
      addToCart(id);
      btn.classList.add("added");
      btn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Added!';
      setTimeout(() => {
        btn.classList.remove("added");
        btn.innerHTML = '<i class="fas fa-shopping-bag" aria-hidden="true"></i> Add to Cart';
      }, 1500);
    });
  });
  document.querySelectorAll(".product-card__wishlist").forEach(btn => {
    btn.addEventListener("click", () => toggleWishlist(Number(btn.dataset.id)));
  });
  document.querySelectorAll(".product-card__quick-view").forEach(btn => {
    btn.addEventListener("click", () => openQuickView(Number(btn.dataset.id)));
  });
}

/* ============================================================
   12. RENDER CATEGORIES
   ============================================================ */
function renderCategories() {
  const grid = document.getElementById("categories-grid");
  grid.innerHTML = CATEGORIES.map(cat => `
    <button class="category-card" role="listitem" data-category="${cat.id}"
      aria-label="Browse ${cat.name} category, ${cat.count} products">
      <div class="category-icon" style="background:${cat.color}; color:${cat.iconColor};">
        <i class="${cat.icon}" aria-hidden="true"></i>
      </div>
      <h3>${cat.name}</h3>
      <p>${cat.count} items</p>
    </button>
  `).join("");
  grid.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      const cat = card.dataset.category;
      state.currentCategory = cat;
      state.visibleCount = 8;
      setActiveCategory(cat);
      renderProducts();
      document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* ============================================================
   13. CATEGORY FILTER PILLS
   ============================================================ */
function buildFilterPills() {
  const container = document.getElementById("filter-pills");
  CATEGORIES.forEach(cat => {
    const pill = document.createElement("button");
    pill.className = "pill";
    pill.dataset.category = cat.id;
    pill.setAttribute("role", "tab");
    pill.setAttribute("aria-selected", "false");
    pill.textContent = cat.name;
    container.appendChild(pill);
  });
  container.addEventListener("click", e => {
    const pill = e.target.closest(".pill");
    if (!pill) return;
    state.currentCategory = pill.dataset.category;
    state.visibleCount = 8;
    setActiveCategory(pill.dataset.category);
    renderProducts();
  });
}

function setActiveCategory(cat) {
  document.querySelectorAll(".pill").forEach(p => {
    const isActive = p.dataset.category === cat;
    p.classList.toggle("pill--active", isActive);
    p.setAttribute("aria-selected", isActive);
  });
}

/* ============================================================
   14. SEARCH FUNCTIONALITY
   ============================================================ */
function initSearch() {
  const mainInput   = document.getElementById("search-input");
  const mobileInput = document.getElementById("mobile-search-input");
  function handleSearch(value) {
    state.currentSearch = value.trim();
    state.visibleCount = 8;
    renderProducts();
  }
  [mainInput, mobileInput].forEach(input => {
    if (!input) return;
    input.addEventListener("input",  () => handleSearch(input.value));
    input.addEventListener("keydown", e => { if (e.key === "Enter") handleSearch(input.value); });
  });
  document.getElementById("clear-search").addEventListener("click", () => {
    state.currentSearch = "";
    mainInput.value = "";
    if (mobileInput) mobileInput.value = "";
    renderProducts();
  });
}

/* ============================================================
   15. SORT FUNCTIONALITY
   ============================================================ */
function initSort() {
  document.getElementById("sort-select").addEventListener("change", e => {
    state.currentSort  = e.target.value;
    state.visibleCount = 8;
    renderProducts();
  });
}

/* ============================================================
   16. LOAD MORE
   ============================================================ */
function initLoadMore() {
  document.getElementById("load-more-btn").addEventListener("click", () => {
    state.visibleCount += 4;
    renderProducts();
  });
}

/* ============================================================
   17. QUICK VIEW MODAL
   ============================================================ */
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const isWishlisted = state.wishlist.includes(productId);
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
  const body = document.getElementById("modal-body");
  body.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="modal__img" loading="lazy" />
    <div class="modal__info">
      <span class="modal__category">${product.category}</span>
      <h2 class="modal__name">${product.name}</h2>
      <div class="product-card__rating">
        ${buildStars(product.rating)}
        <span class="product-card__rating-count">(${product.reviews} reviews)</span>
      </div>
      <p class="modal__desc">${product.description}</p>
      <div class="modal__pricing">
        <span class="modal__price">$${product.price.toFixed(2)}</span>
        ${product.originalPrice ? `<span class="modal__original">$${product.originalPrice.toFixed(2)}</span>` : ""}
        ${discount ? `<span class="product-card__save">${discount}% off</span>` : ""}
      </div>
      <div class="modal__actions">
        <button class="btn btn--primary btn--full modal-add-to-cart" data-id="${productId}">
          <i class="fas fa-shopping-bag" aria-hidden="true"></i> Add to Cart
        </button>
        <button class="btn btn--outline btn--full modal-wishlist-btn ${isWishlisted ? "active" : ""}" data-id="${productId}">
          <i class="${isWishlisted ? "fas" : "far"} fa-heart" aria-hidden="true"></i>
          ${isWishlisted ? "Wishlisted" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  `;
  document.getElementById("quick-view-modal").classList.add("open");
  document.getElementById("overlay").classList.add("active");
  document.body.style.overflow = "hidden";
  body.querySelector(".modal-add-to-cart").addEventListener("click", () => addToCart(productId));
  body.querySelector(".modal-wishlist-btn").addEventListener("click", function() {
    toggleWishlist(productId);
    const isNow = state.wishlist.includes(productId);
    this.classList.toggle("active", isNow);
    this.innerHTML = `<i class="${isNow ? "fas" : "far"} fa-heart" aria-hidden="true"></i> ${isNow ? "Wishlisted" : "Add to Wishlist"}`;
    updateWishlistIcons();
  });
}

function closeQuickView() {
  document.getElementById("quick-view-modal").classList.remove("open");
  if (!document.getElementById("cart-sidebar").classList.contains("open")) {
    document.getElementById("overlay").classList.remove("active");
    document.body.style.overflow = "";
  }
}

/* ============================================================
   18. NEWSLETTER FORM
   ============================================================ */
function initNewsletter() {
  const form = document.getElementById("newsletter-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("newsletter-email").value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast("Please enter a valid email address", "error");
      return;
    }
    showToast("You're subscribed! Welcome to ShopEase. 🎉", "success", 3500);
    form.reset();
  });
}

/* ============================================================
   19. HEADER
   ============================================================ */
function initHeader() {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 10), { passive: true });

  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");
  hamburger.addEventListener("click", () => {
    const open = hamburger.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", open);
    mobileNav.hidden = !open;
  });
  mobileNav.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", false);
      mobileNav.hidden = true;
    });
  });

  document.getElementById("cart-toggle-btn").addEventListener("click", openCart);
  document.getElementById("close-cart").addEventListener("click", closeCart);
  document.getElementById("overlay").addEventListener("click", () => { closeCart(); closeQuickView(); });
  document.getElementById("close-modal").addEventListener("click", closeQuickView);
  document.getElementById("wishlist-icon-btn").addEventListener("click", () => {
    showToast(`You have ${state.wishlist.length} item${state.wishlist.length !== 1 ? "s" : ""} in your wishlist`, "info");
  });
  document.getElementById("checkout-btn").addEventListener("click", () => {
    if (state.cart.length === 0) { showToast("Your cart is empty!", "error"); return; }
    showToast("Redirecting to checkout... (demo only) 🛒", "info", 3000);
    setTimeout(closeCart, 2000);
  });
  document.getElementById("start-shopping").addEventListener("click", closeCart);

  document.querySelectorAll("[data-filter]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const cat = link.dataset.filter;
      state.currentCategory = cat;
      state.visibleCount = 8;
      setActiveCategory(cat);
      renderProducts();
      document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    });
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeCart(); closeQuickView(); }
  });
}

/* ============================================================
   20. BACK TO TOP
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => btn.classList.toggle("visible", window.scrollY > 400), { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ============================================================
   21. DARK MODE
   ============================================================ */
function initTheme() {
  const btn  = document.getElementById("theme-toggle");
  const root = document.documentElement;
  const body = document.body;
  const saved = localStorage.getItem("se_theme") || "light";
  body.dataset.theme = saved;
  root.dataset.theme = saved;
  updateThemeIcon(saved);
  btn.addEventListener("click", () => {
    const next = body.dataset.theme === "dark" ? "light" : "dark";
    body.dataset.theme = next;
    root.dataset.theme = next;
    localStorage.setItem("se_theme", next);
    updateThemeIcon(next);
    showToast(`${next === "dark" ? "Dark 🌙" : "Light ☀️"} mode enabled`, "info");
  });
}
function updateThemeIcon(theme) {
  const icon = document.querySelector("#theme-toggle i");
  if (!icon) return;
  icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

/* ============================================================
   22. FOOTER YEAR
   ============================================================ */
function setFooterYear() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ============================================================
   23. FLY-TO-CART ANIMATION
   ============================================================ */
function flyToCart(btn) {
  const cartBtn  = document.getElementById("cart-toggle-btn");
  const btnRect  = btn.getBoundingClientRect();
  const cartRect = cartBtn.getBoundingClientRect();
  const dot = document.createElement("div");
  dot.className = "fly-dot";
  dot.style.cssText = `
    left: ${btnRect.left + btnRect.width / 2 - 5}px;
    top:  ${btnRect.top  + btnRect.height / 2 - 5}px;
    opacity: 1;
  `;
  document.body.appendChild(dot);
  void dot.offsetWidth; // force reflow
  dot.style.left      = `${cartRect.left + cartRect.width / 2 - 5}px`;
  dot.style.top       = `${cartRect.top  + cartRect.height / 2 - 5}px`;
  dot.style.opacity   = "0";
  dot.style.transform = "scale(0.3)";
  dot.addEventListener("transitionend", () => dot.remove(), { once: true });
}

/* ============================================================
   24. INIT — Bootstrap everything
   ============================================================ */
function init() {
  loadState();
  initTheme();
  initHeader();
  renderCategories();
  buildFilterPills();
  renderProducts();
  renderCartItems();
  updateCartBadge();
  updateWishlistBadge();
  initSearch();
  initSort();
  initLoadMore();
  initNewsletter();
  initCoupon();
  initBackToTop();
  setFooterYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}