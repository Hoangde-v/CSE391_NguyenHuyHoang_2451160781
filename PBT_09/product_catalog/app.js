const products = [
  {
    id: 1,
    name: "iPhone 16",
    price: 25990000,
    category: "phone",
    image: "https://placehold.co/200",
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    name: "Samsung S25",
    price: 23990000,
    category: "phone",
    image: "https://placehold.co/200",
    rating: 4.7,
    inStock: true
  },
  {
    id: 3,
    name: "MacBook Air M4",
    price: 32990000,
    category: "laptop",
    image: "https://placehold.co/200",
    rating: 4.9,
    inStock: true
  },
  {
    id: 4,
    name: "Dell XPS 15",
    price: 29990000,
    category: "laptop",
    image: "https://placehold.co/200",
    rating: 4.6,
    inStock: true
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    price: 7990000,
    category: "audio",
    image: "https://placehold.co/200",
    rating: 4.8,
    inStock: true
  },
  {
    id: 6,
    name: "AirPods Pro",
    price: 6490000,
    category: "audio",
    image: "https://placehold.co/200",
    rating: 4.4,
    inStock: true
  },
  {
    id: 7,
    name: "Gaming Mouse",
    price: 990000,
    category: "accessory",
    image: "https://placehold.co/200",
    rating: 4.2,
    inStock: true
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    price: 1890000,
    category: "accessory",
    image: "https://placehold.co/200",
    rating: 4.5,
    inStock: true
  },
  {
    id: 9,
    name: "iPad Pro",
    price: 21990000,
    category: "tablet",
    image: "https://placehold.co/200",
    rating: 4.7,
    inStock: true
  },
  {
    id: 10,
    name: "Galaxy Tab S10",
    price: 17990000,
    category: "tablet",
    image: "https://placehold.co/200",
    rating: 4.5,
    inStock: true
  },
  {
    id: 11,
    name: "Bluetooth Speaker",
    price: 2590000,
    category: "audio",
    image: "https://placehold.co/200",
    rating: 4.3,
    inStock: false
  },
  {
    id: 12,
    name: "USB-C Hub",
    price: 790000,
    category: "accessory",
    image: "https://placehold.co/200",
    rating: 4.1,
    inStock: true
  }
];

let filteredProducts = [...products];
let currentCategory = "all";
let cartCount = 0;

const body = document.body;

function init() {
  renderLayout();
  renderProducts(products);
}

function renderLayout() {
  const container =
    document.createElement("div");

  container.className = "container";

  const header =
    document.createElement("div");

  header.className = "header";

  const title =
    document.createElement("h1");

  title.textContent =
    "Interactive Product Catalog";

  const right =
    document.createElement("div");

  right.className = "header-right";

  const darkBtn =
    document.createElement("button");

  darkBtn.textContent =
    "🌙 Dark Mode";

  darkBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });

  const cart =
    document.createElement("div");

  cart.className = "cart";
  cart.textContent = "🛒";

  const badge =
    document.createElement("span");

  badge.className = "badge";
  badge.id = "badge";
  badge.textContent = "0";

  cart.appendChild(badge);

  right.appendChild(darkBtn);
  right.appendChild(cart);

  header.appendChild(title);
  header.appendChild(right);

  const controls =
    document.createElement("div");

  controls.className = "controls";

  const search =
    document.createElement("input");

  search.placeholder =
    "Search products...";

  search.addEventListener(
    "input",
    searchProducts
  );

  controls.appendChild(search);

  const categories = [
    "all",
    "phone",
    "laptop",
    "audio",
    "accessory",
    "tablet"
  ];

  categories.forEach(cat => {
    const btn =
      document.createElement("button");

    btn.textContent = cat;
    btn.className =
      "category-btn";

    if (cat === "all") {
      btn.classList.add("active");
    }

    btn.addEventListener(
      "click",
      () => filterByCategory(cat)
    );

    controls.appendChild(btn);
  });

  const sortSelect =
    document.createElement("select");

  sortSelect.innerHTML = `
<option value="">Sort</option>
<option value="priceAsc">
Price ↑
</option>
<option value="priceDesc">
Price ↓
</option>
<option value="name">
Name A-Z
</option>
<option value="rating">
Highest Rating
</option>
`;

  sortSelect.addEventListener(
    "change",
    sortProducts
  );

  controls.appendChild(sortSelect);

  const productsContainer =
    document.createElement("div");

  productsContainer.id =
    "productsContainer";

  productsContainer.className =
    "products";

  container.appendChild(header);
  container.appendChild(controls);
  container.appendChild(
    productsContainer
  );

  body.appendChild(container);
}

function renderProducts(data) {
  const container =
    document.getElementById(
      "productsContainer"
    );

  container.innerHTML = "";

  data.forEach(product => {
    const card =
      document.createElement("div");

    card.className = "card";

    card.addEventListener("click", () => {
      showModal(product);
    });

    const img =
      document.createElement("img");

    img.src = product.image;

    const content =
      document.createElement("div");

    content.className =
      "card-content";

    const name =
      document.createElement("h3");

    name.textContent =
      product.name;

    const price =
      document.createElement("p");

    price.className = "price";
    price.textContent =
      product.price.toLocaleString()
      + " VNĐ";

    const rating =
      document.createElement("p");

    rating.textContent =
      "⭐ " + product.rating;

    const stock =
      document.createElement("p");

    stock.className = "stock";

    stock.textContent =
      product.inStock
      ? "In Stock"
      : "Out of Stock";

    const btn =
      document.createElement("button");

    btn.textContent =
      "Thêm giỏ";

    btn.className =
      "add-cart";

    btn.addEventListener(
      "click",
      e => {
        e.stopPropagation();
        cartCount++;
        document.getElementById(
          "badge"
        ).textContent =
          cartCount;
      }
    );

    content.append(
      name,
      price,
      rating,
      stock,
      btn
    );

    card.append(img, content);

    container.appendChild(card);
  });
}

function filterByCategory(category) {
  currentCategory = category;

  document
    .querySelectorAll(
      ".category-btn"
    )
    .forEach(btn => {
      btn.classList.remove(
        "active"
      );

      if (
        btn.textContent === category
      ) {
        btn.classList.add(
          "active"
        );
      }
    });

  filteredProducts =
    category === "all"
      ? [...products]
      : products.filter(
          p =>
            p.category === category
        );

  renderProducts(
    filteredProducts
  );
}

function searchProducts(e) {
  const keyword =
    e.target.value.toLowerCase();

  const searched =
    filteredProducts.filter(
      p =>
        p.name
          .toLowerCase()
          .includes(keyword)
    );

  renderProducts(searched);
}

function sortProducts(e) {
  const value = e.target.value;

  let sorted =
    [...filteredProducts];

  switch (value) {
    case "priceAsc":
      sorted.sort(
        (a, b) =>
          a.price - b.price
      );
      break;

    case "priceDesc":
      sorted.sort(
        (a, b) =>
          b.price - a.price
      );
      break;

    case "name":
      sorted.sort((a, b) =>
        a.name.localeCompare(
          b.name
        )
      );
      break;

    case "rating":
      sorted.sort(
        (a, b) =>
          b.rating - a.rating
      );
      break;
  }

  renderProducts(sorted);
}

function showModal(product) {
  const overlay =
    document.createElement("div");

  overlay.className =
    "modal-overlay";

  const modal =
    document.createElement("div");

  modal.className = "modal";

  modal.innerHTML = `
    <img src="${product.image}">
    <h2>${product.name}</h2>
    <p>Price:
      ${product.price.toLocaleString()} VNĐ
    </p>
    <p>Category:
      ${product.category}
    </p>
    <p>Rating:
      ⭐ ${product.rating}
    </p>
  `;

  const closeBtn =
    document.createElement("button");

  closeBtn.textContent =
    "Close";

  closeBtn.className =
    "close-btn";

  closeBtn.addEventListener(
    "click",
    () => overlay.remove()
  );

  modal.appendChild(closeBtn);
  overlay.appendChild(modal);

  overlay.addEventListener(
    "click",
    e => {
      if (e.target === overlay) {
        overlay.remove();
      }
    }
  );

  body.appendChild(overlay);
}

init();