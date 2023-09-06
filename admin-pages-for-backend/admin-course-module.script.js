// course module
const add_course_module = document.querySelector(".add-course-module");
const delete_course_module = document.querySelector(".delete-course-module");

// course module material
const add_course_module_material = document.querySelector(
	".add-course-module-material"
);

const delete_course_module_material = document.querySelector(
	".delete-course-module-material"
);

// forms

const module_creation_form = document.querySelector(".module-creation-form");
add_course_module.addEventListener("click", () => {
	console.log("clicked");
	module_creation_form.classList.toggle("hidden");
});

// ----------------------------------------

const module_material_creation_form = document.querySelector(
	".module-material-creation-form"
);

// cancel just toggle
const btnCancle = document.querySelector(".btn-cancel");
btnCancle.addEventListener("click", (event) => {
	event.preventDefault();
	module_material_creation_form.classList.toggle("hidden");
});

// in uni
const add_task = document.querySelector(".add-task");
const addMaterial = document.querySelector(".add-material");
const addAssignment = document.querySelector(".add-assignment");
const addQuiz = document.querySelector(".add-quiz");

add_course_module_material.addEventListener("click", () => {
	add_task.classList.toggle("hidden");
});
addMaterial.addEventListener("click", () =>
	module_material_creation_form.classList.toggle("hidden")
);

// FOR ASSIGNMENT

const assignmentForm = document.querySelector(".assignment-wrapper");

// create task
//const btnCreateAssignment = document.querySelector(".btn-create-assignment");

// form close btn
const closeBtn = document.querySelector(".close-button");

addAssignment.addEventListener("click", () => {
	console.log("create");
	assignmentForm.style.display = "block";
});

closeBtn.addEventListener("click", () => {
	assignmentForm.style.display = "none";
});

// FOR QUIZ
// 	MAIN-QUIZ-WRAPPER

const mainQuizForm = document.querySelector(".main-quiz-wrapper");
const btnQuiz = document.querySelector(".btn-quiz");
const closeBtnMainQuiz = document.querySelector(".close-button-main-quiz");
addQuiz.addEventListener("click", () => {
	console.log("create");
	mainQuizForm.style.display = "block";
});

closeBtnMainQuiz.addEventListener("click", () => {
	mainQuizForm.style.display = "none";
});
