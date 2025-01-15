      // nav
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const section = document.querySelector(this.getAttribute("href"));
          const headerOffset = 80;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        });
      });

      // Form
      function validateForm(event) {
        event.preventDefault();
        let isValid = true;

        const name = document.getElementById("name");
        const nameError = document.getElementById("name-error");
        if (!name.value.trim()) {
          nameError.style.display = "block";
          isValid = false;
        } else {
          nameError.style.display = "none";
        }

        const email = document.getElementById("email");
        const emailError = document.getElementById("email-error");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value)) {
          emailError.style.display = "block";
          isValid = false;
        } else {
          emailError.style.display = "none";
        }

        const message = document.getElementById("message");
        const messageError = document.getElementById("message-error");
        if (!message.value.trim()) {
          messageError.style.display = "block";
          isValid = false;
        } else {
          messageError.style.display = "none";
        }

        if (isValid) {
          alert("შეტყობინება წარმატებით გაიგზავნა!");
          event.target.reset();
        }

        return false;
      }

      // ახალი პროექტის დამატება
      function addProject() {
        const portfolio = document.querySelector(".portfolio-grid");
        const newProject = document.createElement("div");
        newProject.className = "portfolio-item fade-in";

        const projectNumber = portfolio.children.length + 1;

        newProject.innerHTML = `
                <img src="./images/new-project.jpeg" alt="პროექტი ${projectNumber}">
                <h3>პროექტი ${projectNumber}</h3>
            `;

        portfolio.appendChild(newProject);
      }