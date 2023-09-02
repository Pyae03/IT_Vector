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

const module_material_creation_form = document.querySelector(
	".module-material-creation-form"
);

add_course_module_material.addEventListener("click", () => {
	module_material_creation_form.classList.toggle("hidden");
});
