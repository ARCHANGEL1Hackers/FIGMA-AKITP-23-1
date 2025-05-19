const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;

function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})

show(imageIndex);
document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.querySelector("#register-btn");
  
    if (!registerBtn) {
      console.error("Registration button not found!");
      return;
    }
  
    registerBtn.addEventListener("click", function (e) {
      e.preventDefault();
  
      const form = registerBtn.closest("form");
      if (!form) {
        alert("Form not found!");
        return;
      }
  
      const name = form.querySelector("input[name='name']");
      const email = form.querySelector("input[name='email']");
      const password = form.querySelector("input[name='password']");
  
      let errors = [];
  
      if (!name || name.value.trim() === "") {
        errors.push("Name is required.");
      }
  
      if (!email || !/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email.value.trim())) {
        errors.push("Valid email is required.");
      }
  
      if (!password || password.value.length < 6) {
        errors.push("Password must be at least 6 characters.");
      }
  
      if (errors.length > 0) {
        alert("Form validation failed:\n\n" + errors.join("\n"));
        return;
      }
  
      alert("Registration successful!");
      form.submit(); // or handle via JS
    });
  });
  
