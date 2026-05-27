const form =
  document.getElementById(
    "registerForm"
  );

const nameInput =
  document.getElementById("name");

const emailInput =
  document.getElementById("email");

const passwordInput =
  document.getElementById(
    "password"
  );

const confirmInput =
  document.getElementById(
    "confirmPassword"
  );

const phoneInput =
  document.getElementById("phone");

const submitBtn =
  document.getElementById(
    "submitBtn"
  );

let valid = {
  name: false,
  email: false,
  password: false,
  confirm: false,
  phone: false
};

nameInput.addEventListener(
  "input",
  validateName
);

emailInput.addEventListener(
  "input",
  validateEmail
);

passwordInput.addEventListener(
  "input",
  validatePassword
);

confirmInput.addEventListener(
  "input",
  validateConfirm
);

phoneInput.addEventListener(
  "input",
  validatePhone
);

function validateName() {
  const value =
    nameInput.value.trim();

  const icon =
    document.getElementById(
      "nameIcon"
    );

  if (
    value.length >= 2 &&
    value.length <= 50
  ) {
    icon.textContent = "✅";
    valid.name = true;
  } else {
    icon.textContent = "❌";
    valid.name = false;
  }

  toggleSubmit();
}

function validateEmail() {
  const email =
    emailInput.value.trim();

  const error =
    document.getElementById(
      "emailError"
    );

  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    error.textContent =
      "Email không được để trống";
    valid.email = false;
  } else if (!regex.test(email)) {
    error.textContent =
      "Email không đúng định dạng";
    valid.email = false;
  } else {
    error.textContent = "";
    valid.email = true;
  }

  toggleSubmit();
}

function validatePassword() {
  const value =
    passwordInput.value;

  const fill =
    document.getElementById(
      "strengthFill"
    );

  const text =
    document.getElementById(
      "passwordText"
    );

  let strength = 0;

  const hasLetter =
    /[a-zA-Z]/.test(value);

  const hasNumber =
    /\d/.test(value);

  const hasUpper =
    /[A-Z]/.test(value);

  const hasLower =
    /[a-z]/.test(value);

  const special =
    /[!@#$%^&*]/.test(value);

  if (value.length < 8) {
    fill.style.width = "33%";
    fill.style.background =
      "red";

    text.textContent =
      "Yếu";

    valid.password = false;
  } else {
    if (
      hasLetter &&
      hasNumber
    ) {
      strength++;
    }

    if (
      hasUpper &&
      hasLower &&
      hasNumber &&
      special
    ) {
      strength++;
    }

    if (strength === 1) {
      fill.style.width = "66%";
      fill.style.background =
        "orange";

      text.textContent =
        "Trung bình";

      valid.password = true;
    }

    if (strength === 2) {
      fill.style.width = "100%";
      fill.style.background =
        "green";

      text.textContent =
        "Mạnh";

      valid.password = true;
    }
  }

  validateConfirm();
  toggleSubmit();
}

function validateConfirm() {
  const error =
    document.getElementById(
      "confirmError"
    );

  if (
    confirmInput.value ===
      passwordInput.value &&
    confirmInput.value !== ""
  ) {
    error.textContent =
      "✅ Password matched";

    valid.confirm = true;
  } else {
    error.textContent =
      "❌ Password không khớp";

    valid.confirm = false;
  }

  toggleSubmit();
}

function validatePhone() {
  let value =
    phoneInput.value.replace(
      /\D/g,
      ""
    );

  value =
    value.substring(0, 11);

  if (value.length > 4) {
    value =
      value.slice(0, 4) +
      "-" +
      value.slice(4);
  }

  if (value.length > 8) {
    value =
      value.slice(0, 8) +
      "-" +
      value.slice(8);
  }

  phoneInput.value = value;

  const clean =
    value.replace(/-/g, "");

  const error =
    document.getElementById(
      "phoneError"
    );

  if (clean.length === 10) {
    error.textContent =
      "✅ Valid phone";

    valid.phone = true;
  } else {
    error.textContent =
      "Phone phải đủ 10 số";

    valid.phone = false;
  }

  toggleSubmit();
}

function toggleSubmit() {
  submitBtn.disabled =
    !Object.values(valid).every(
      Boolean
    );
}

form.addEventListener(
  "submit",
  e => {
    e.preventDefault();

    showModal();
  }
);

function showModal() {
  const overlay =
    document.createElement(
      "div"
    );

  overlay.className =
    "modal-overlay";

  const modal =
    document.createElement(
      "div"
    );

  modal.className =
    "modal";

  modal.innerHTML = `
    <h2>
      Đăng ký thành công!
    </h2>

    <p>
      Name:
      ${nameInput.value}
    </p>

    <p>
      Email:
      ${emailInput.value}
    </p>

    <p>
      Phone:
      ${phoneInput.value}
    </p>
  `;

  const closeBtn =
    document.createElement(
      "button"
    );

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

  document.body.appendChild(
    overlay
  );
}