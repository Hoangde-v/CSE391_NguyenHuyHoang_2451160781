const images = [
  "https://placehold.co/900x500?text=Image+1",
  "https://placehold.co/900x500?text=Image+2",
  "https://placehold.co/900x500?text=Image+3",
  "https://placehold.co/900x500?text=Image+4",
  "https://placehold.co/900x500?text=Image+5",
  "https://placehold.co/900x500?text=Image+6",
  "https://placehold.co/900x500?text=Image+7",
  "https://placehold.co/900x500?text=Image+8",
  "https://placehold.co/900x500?text=Image+9"
];

const commands = [
  "Go Home",
  "Next Image",
  "Previous Image",
  "Open Modal",
  "Play Slideshow",
  "Pause Slideshow"
];

const galleryImage =
  document.getElementById(
    "galleryImage"
  );

const prevBtn =
  document.getElementById(
    "prevBtn"
  );

const nextBtn =
  document.getElementById(
    "nextBtn"
  );

const openModalBtn =
  document.getElementById(
    "openModal"
  );

let currentIndex = 0;
let playing = false;
let interval = null;

function renderImage() {
  galleryImage.src =
    images[currentIndex];
}

function nextImage() {
  currentIndex =
    (currentIndex + 1) %
    images.length;

  renderImage();
}

function prevImage() {
  currentIndex =
    (currentIndex - 1 +
      images.length) %
    images.length;

  renderImage();
}

function toggleSlideshow() {
  playing = !playing;

  if (playing) {
    interval = setInterval(
      nextImage,
      2000
    );
  } else {
    clearInterval(interval);
  }
}

function openModal() {
  const overlay =
    document.createElement(
      "div"
    );

  overlay.className =
    "modal-overlay";

  overlay.id =
    "imageModal";

  const modal =
    document.createElement(
      "div"
    );

  modal.className =
    "modal";

  const img =
    document.createElement(
      "img"
    );

  img.src =
    images[currentIndex];

  img.alt =
    "Modal image";

  const closeBtn =
    document.createElement(
      "button"
    );

  closeBtn.textContent =
    "Close";

  closeBtn.setAttribute(
    "aria-label",
    "Close modal"
  );

  closeBtn.addEventListener(
    "click",
    () => overlay.remove()
  );

  modal.append(
    img,
    closeBtn
  );

  overlay.appendChild(
    modal
  );

  document.body.appendChild(
    overlay
  );

  closeBtn.focus();
}

function openPalette() {
  if (
    document.getElementById(
      "palette"
    )
  ) {
    return;
  }

  const overlay =
    document.createElement(
      "div"
    );

  overlay.className =
    "palette-overlay";

  overlay.id = "palette";

  const palette =
    document.createElement(
      "div"
    );

  palette.className =
    "command-palette";

  const input =
    document.createElement(
      "input"
    );

  input.placeholder =
    "Search command...";
  input.setAttribute(
    "aria-label",
    "Command search"
  );

  const list =
    document.createElement(
      "ul"
    );

  list.className =
    "command-list";

  function renderCommands(
    keyword = ""
  ) {
    list.innerHTML = "";

    const filtered =
      commands.filter(cmd =>
        cmd
          .toLowerCase()
          .includes(
            keyword.toLowerCase()
          )
      );

    filtered.forEach(
      (cmd, index) => {
        const li =
          document.createElement(
            "li"
          );

        li.className =
          "command-item";

        li.tabIndex = 0;

        li.textContent =
          cmd;

        if (index === 0) {
          li.classList.add(
            "active"
          );
        }

        li.addEventListener(
          "click",
          () =>
            selectCommand(
              cmd
            )
        );

        list.appendChild(li);
      }
    );
  }

  function selectCommand(cmd) {
    switch (cmd) {
      case "Next Image":
        nextImage();
        break;

      case "Previous Image":
        prevImage();
        break;

      case "Open Modal":
        openModal();
        break;

      case "Play Slideshow":
        if (!playing) {
          toggleSlideshow();
        }
        break;

      case "Pause Slideshow":
        if (playing) {
          toggleSlideshow();
        }
        break;
    }

    overlay.remove();
  }

  input.addEventListener(
    "input",
    e => {
      renderCommands(
        e.target.value
      );
    }
  );

  input.addEventListener(
    "keydown",
    e => {
      if (e.key === "Enter") {
        const first =
          document.querySelector(
            ".command-item"
          );

        if (first) {
          selectCommand(
            first.textContent
          );
        }
      }
    }
  );

  renderCommands();

  palette.append(
    input,
    list
  );

  overlay.appendChild(
    palette
  );

  document.body.appendChild(
    overlay
  );

  input.focus();
}

document.addEventListener(
  "keydown",
  e => {
    if (
      e.ctrlKey &&
      e.key.toLowerCase() ===
        "k"
    ) {
      e.preventDefault();
      openPalette();
    }

    if (e.key === "ArrowRight") {
      nextImage();
    }

    if (e.key === "ArrowLeft") {
      prevImage();
    }

    if (
      /^[1-9]$/.test(e.key)
    ) {
      const index =
        Number(e.key) - 1;

      if (images[index]) {
        currentIndex =
          index;

        renderImage();
      }
    }

    if (e.code === "Space") {
      e.preventDefault();
      toggleSlideshow();
    }

    if (e.key === "Escape") {
      const modal =
        document.getElementById(
          "imageModal"
        );

      const palette =
        document.getElementById(
          "palette"
        );

      if (modal) {
        modal.remove();
      }

      if (palette) {
        palette.remove();
      }
    }
  }
);

prevBtn.addEventListener(
  "click",
  prevImage
);

nextBtn.addEventListener(
  "click",
  nextImage
);

openModalBtn.addEventListener(
  "click",
  openModal
);

renderImage();