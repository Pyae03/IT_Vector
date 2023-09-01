// add form creation features with js

const expand = document.getElementById("expand");
const event_description = document.querySelector(".event-description");
expand.addEventListener("click", () => {
  event_description.classList.toggle("hidden");
});

// for event creation
const event_form = document.querySelector(".event-form");
const btn_create = document.querySelector(".btn-create");
btn_create.addEventListener("click", () => {
  event_form.classList.toggle("hidden");
  if (btn_create.innerText === "Create") {
    btn_create.style.backgroundColor = "var(--red)";
    return (btn_create.innerText = "Cancel");
  }

  btn_create.style.backgroundColor = "var(--light-blue)";
  return (btn_create.innerHTML = "Create");
});
