const assignment_creation_form = document.querySelector(
	".assignment-creation-form"
);
const btn_create_assignment = document.querySelector(".btn-create-assignment");
const btn_create_quiz = document.querySelector(".btn-create-quiz");
const btn_create_homework = document.querySelector(".btn-create-homework");

btn_create_assignment.addEventListener("click", () => {
	assignment_creation_form.classList.toggle("hidden");
});
btn_create_quiz.addEventListener("click", () => {});
