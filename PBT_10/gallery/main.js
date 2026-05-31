const gallery = document.getElementById("gallery");
const loading = document.getElementById("loading");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");
let page = 1;
let isLoading = false;
/* ====================== FETCH PHOTOS ====================== */ async function loadMorePhotos() {
  if (isLoading) return;
  try {
    isLoading = true;
    loading.style.display = "block";
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=20`,
    );
    if (!response.ok) {
      throw new Error("Failed to load photos");
    }
    const photos = await response.json();
    renderPhotos(photos);
    page++;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.style.display = "none";
    isLoading = false;
  }
}
/* ====================== RENDER PHOTOS ====================== */ function renderPhotos(
  photos,
) {
  photos.forEach((photo) => {
    const card = document.createElement("div");
    card.className = "photo-card";
    const img = document.createElement("img"); // lazy loading
    img.dataset.src = photo.url;
    img.alt = photo.title;
    card.appendChild(img);
    gallery.appendChild(card);
    // modal click
    img.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modalImg.src = photo.url;
    });
    imageObserver.observe(img);
  });
}
/* ====================== LAZY LOADING IMAGES ====================== */ const imageObserver =
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        imageObserver.unobserve(img);
      }
    });
  });
/* ====================== INFINITE SCROLL ====================== */ const observer =
  new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      loadMorePhotos();
    }
  });
observer.observe(document.querySelector("#load-trigger"));
/* ====================== MODAL ====================== */ closeBtn.addEventListener(
  "click",
  () => {
    modal.classList.add("hidden");
  },
);
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
/* ====================== INIT ====================== */ loadMorePhotos();
