const teacher = document.getElementById("teacher");
const student = document.getElementById("student");
const course = document.getElementById("course");
const subject = document.getElementById("subject");
const attendence = document.getElementById("attendence");
const department = document.getElementById("department");
const view = document.getElementById("view");

const inputs = document.getElementsByTagName("input");

const buttons = document.getElementsByTagName("li");

const reset = document.getElementById("reset");
const submit = document.getElementById("submit");


const formteacher = document.getElementsByClassName("formteacher")[0];
const formstudent = document.getElementsByClassName("formstudent")[0];
const formcourse = document.getElementsByClassName("formcourse")[0];
const formsubject = document.getElementsByClassName("formsubject")[0];
const formattendence = document.getElementsByClassName("formattendence")[0];
const formdepartment = document.getElementsByClassName("formdepartment")[0];
const formview = document.getElementsByClassName("formview")[0];

const forms = document.getElementsByTagName("form");


department.addEventListener('click', ()=>{
    Array.from(forms).forEach(element => {
        element.classList.add("deactivate");
    });
    formdepartment.classList.remove("deactivate");
    
    Array.from(buttons).forEach(element => {
        element.classList.add("button-deactivate");
    });
    department.classList.remove("button-deactivate");
    
})
course.addEventListener('click', ()=>{
    Array.from(forms).forEach(element => {
        element.classList.add("deactivate");
    });
    formcourse.classList.remove("deactivate");
    formcourse.classList.add("activate");
    Array.from(buttons).forEach(element => {
        element.classList.add("button-deactivate");
    });
    course.classList.remove("button-deactivate");
    course.classList.add("button-activate");
})
teacher.addEventListener('click', ()=>{
    Array.from(forms).forEach(element => {
        element.classList.add("deactivate");
    });
    formteacher.classList.remove("deactivate");
    formteacher.classList.add("activate");
    Array.from(buttons).forEach(element => {
        element.classList.add("button-deactivate");
    });
    teacher.classList.remove("button-deactivate");
    teacher.classList.add("button-activate");
})
subject.addEventListener('click', ()=>{
    Array.from(forms).forEach(element => {
        element.classList.add("deactivate");
    });
    formsubject.classList.remove("deactivate");
    formsubject.classList.add("activate");
    Array.from(buttons).forEach(element => {
        element.classList.add("button-deactivate");
    });
    subject.classList.remove("button-deactivate");
    subject.classList.add("button-activate");
})
student.addEventListener('click', ()=>{
    Array.from(forms).forEach(element => {
        element.classList.add("deactivate");
    });
    formstudent.classList.remove("deactivate");
    formstudent.classList.add("activate");
    Array.from(buttons).forEach(element => {
        element.classList.add("button-deactivate");
    });
    student.classList.remove("button-deactivate");
    student.classList.add("button-activate");
})
attendence.addEventListener('click', ()=>{
    Array.from(forms).forEach(element => {
        element.classList.add("deactivate");
    });
    formattendence.classList.remove("deactivate");
    formattendence.classList.add("activate");
    Array.from(buttons).forEach(element => {
        element.classList.add("button-deactivate");
    });
    attendence.classList.remove("button-deactivate");
    attendence.classList.add("button-activate");
})
view.addEventListener('click', ()=>{
    Array.from(forms).forEach(element => {
        element.classList.add("deactivate");
    });
    view.classList.remove("deactivate");
    view.classList.add("activate");
    Array.from(buttons).forEach(element => {
        element.classList.add("button-deactivate");
    });
    view.classList.remove("button-deactivate");
    view.classList.add("button-activate");
})



const clicked = document.getElementById("clicked");

clicked.addEventListener('click', ()=>{
    if(document.getElementsByTagName("body")[0].classList.contains("color")){
        document.getElementsByTagName("body")[0].classList.remove("color");
    }
    else{
        document.getElementsByTagName("body")[0].classList.add("color");
    }
})
