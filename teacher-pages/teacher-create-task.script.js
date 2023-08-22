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
const btn_add_choice = document.querySelector(".btn-add-choice");
const radio_choice_group = document.querySelector(".radio-choice-group");

// assignment
btn_create_assignment.addEventListener("click", () => {
	assignment_creation_form.classList.toggle("hidden");
});
// quiz
btn_create_quiz.addEventListener("click", () => {
	quiz_creation_form.classList.toggle("hidden");
	if (btn_create_quiz.innerText === "Add Quiz") {
		// change color and text
		btn_create_quiz.style.backgroundColor = "var(--red)";
		return (btn_create_quiz.innerText = "Cancel");
	}
	btn_create_quiz.innerHTML = "Add Quiz";
	btn_create_quiz.style.backgroundColor = "var(--light-purple)";
});

// get input
const choice_data = document.querySelector(".choice-data");
btn_add_choice.addEventListener("click", (event) => {
	event.preventDefault();

	if (choice_data.value) {
		const choice_option = document.createElement("input");
		choice_option.type = "radio";
		choice_option.value = choice_data.value;
		choice_option.id = choice_data.value;
		// change name in here if you do with backend
		choice_option.name = "quiz1";

		const choice_label = document.createElement("label");
		choice_label.innerText = choice_data.value;
		choice_label.setAttribute("for", choice_data.value);

		// correct answer
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";

		const choice = document.createElement("div");
		choice.className = "option";
		choice.appendChild(choice_option);
		choice.appendChild(choice_label);
		choice.appendChild(checkbox);
		return radio_choice_group.appendChild(choice);
	}
});

// homework
// btn_create_homework.addEventListener("click", () => {
// 	homework_creation_form.classList.toggle("hidden");
// });

//todo: code this
// if teacher choose course, course-module select data will change according
// to which module teacher choose
