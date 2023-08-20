// forms
const assignment_creation_form = document.querySelector(
	".assignment-creation-form"
);
const quiz_creation_form = document.querySelector(".quiz-creation-form");
const homework_creation_form = document.querySelector(
	".homework-creation-form"
);

// btn create
const btn_create_assignment = document.querySelector(".btn-create-assignment");
const btn_create_quiz = document.querySelector(".btn-create-quiz");
const btn_create_homework = document.querySelector(".btn-create-homework");

// quiz form
const btn_create_choice = document.querySelector(".btn-create-choice");
const radio_choice_group = document.querySelector(".radio-choice-group");

// assignment
btn_create_assignment.addEventListener("click", () => {
	assignment_creation_form.classList.toggle("hidden");
});
// quiz
btn_create_quiz.addEventListener("click", () => {
	quiz_creation_form.classList.toggle("hidden");
	assignment_creation_form.classList.remove("hidden");
});
btn_create_choice.addEventListener("click", () => {
	const radio_choice = document.createElement("div");

	const input_radio = document.createElement("input");
	input_radio.type = "radio";

	const choice_label = document.createElement("label");
	choice_label.innerText = "RadioChoice";

	radio_choice.appendChild(input_radio);
	radio_choice.appendChild(choice_label);
	radio_choice_group.appendChild(radio_choice);
	console.log("created!");
});

// homework
btn_create_homework.addEventListener("click", () => {
	homework_creation_form.classList.toggle("hidden");
});
