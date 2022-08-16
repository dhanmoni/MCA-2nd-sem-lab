// get all the action buttons
const studentBtn = document.getElementById("student-form-btn")
const teacherBtn = document.getElementById("teacher-form-btn")
const deptBtn = document.getElementById("dept-form-btn")
const subBtn = document.getElementById("sub-form-btn")
const clearBtn = document.getElementById("clear-btn")

const btns = document.getElementsByTagName("li");


// get the forms
const studentForm = document.getElementById("student-form")
const teacherForm = document.getElementById("teacher-form")
const deptForm = document.getElementById("dept-form")
const subForm = document.getElementById("subject-form")

const forms = document.getElementsByTagName("form");

// set display to block for student form 
// this makes sure the first time the page loads, this form appears
studentForm.style.display = 'block'

studentBtn.addEventListener('click', ()=> {
    Array.from(forms).forEach(element => {
        element.style.display = 'none'
    });
    Array.from(btns).forEach(element => {
        element.classList.remove('active-btn')
    });
    studentBtn.classList.add('active-btn')
    studentForm.style.display = 'block';
})

teacherBtn.addEventListener('click', ()=> {
    Array.from(forms).forEach(element => {
        element.style.display = 'none'
    });
    Array.from(btns).forEach(element => {
        element.classList.remove('active-btn')
    });
    teacherBtn.classList.add('active-btn')
    teacherForm.style.display = 'block';
})

deptBtn.addEventListener('click', ()=> {
    Array.from(forms).forEach(element => {
        element.style.display = 'none'
    });
    Array.from(btns).forEach(element => {
        element.classList.remove('active-btn')
    });
    deptBtn.classList.add('active-btn')
    deptForm.style.display = 'block';
})

subBtn.addEventListener('click', ()=> {
    Array.from(forms).forEach(element => {
        element.style.display = 'none'
    });
    Array.from(btns).forEach(element => {
        element.classList.remove('active-btn')
    });
    subBtn.classList.add('active-btn')
    subForm.style.display = 'block';
})

studentForm.onsubmit = function(e){
    e.preventDefault()
    let {s_name, s_dept,s_sem, s_gender, s_admyr, s_dob} = e.target.elements
    alert("Name: " + s_name.value.toUpperCase() + ", Gender: " + s_gender.value)
    studentForm.reset()
}   

teacherForm.onsubmit = function(e){
    e.preventDefault()
    let {t_name, t_desgination, t_gender} = e.target.elements
    alert("Name: " + t_name.value.toUpperCase() +  ", Designation: " + t_desgination.value.toUpperCase() + ", Gender: " + t_gender.value)
    teacherForm.reset()
}   

subForm.onsubmit = function(e){
    e.preventDefault()
    let {sub_name, sub_code} = e.target.elements
    alert("Subject Name: " + sub_name.value +  ", Subject Code: " + sub_code.value)
    subForm.reset()
}   

deptForm.onsubmit = function(e){
    e.preventDefault()
    let {dept_name} = e.target.elements
    alert("Dept Name: " + dept_name.value)
    deptForm.reset()
}   

clearBtn.addEventListener('click', ()=> {
    studentForm.reset()
    teacherForm.reset()
    deptForm.reset()
    subForm.reset()
})