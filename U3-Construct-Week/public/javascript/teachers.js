import { teachersData, oldTeachers } from "/javascript/teachersData.js";

showTeachers();
// console.log(oldTeachers);
function showTeachers() {

    let teachers_list = document.querySelector(".current_teachers_list");

    teachersData.map((el) => {

        let teacher_list_item = document.createElement("li");
        teacher_list_item.className = "teacher_list_item";
        teacher_list_item.addEventListener("click", function () {
            showDetails(el);
        });

        let name = document.createElement("h2");
        name.className = "name";
        name.textContent = el.name;

        let job = document.createElement("h3");
        job.className = "job";
        job.textContent = el.job;

        let img = document.createElement("img");
        img.className = "teacher_img";

        img.src = el.img;

        teacher_list_item.append(name, job, img);
        teachers_list.appendChild(teacher_list_item);

    })
}

function showDetails(data) {

    console.log(data);

}
document.getElementById("past_btn").addEventListener("click", show_past);;


function show_past() {
    document.getElementById("past_btn").style.display = "none";
    document.getElementById("old_teachers").style.display = "block";
    let old_teachers_list = document.querySelector(".old_teachers_list");

    oldTeachers.map((el) => {

        let teacher_list_item = document.createElement("li");
        teacher_list_item.className = "teacher_list_item";
        teacher_list_item.addEventListener("click", function () {
            showDetails(el);
        });

        let name = document.createElement("h2");
        name.className = "name";
        name.textContent = el.name;

        let job = document.createElement("h3");
        job.className = "job";
        job.textContent = el.job;

        let img = document.createElement("img");
        img.className = "teacher_img";

        img.src = el.img;

        teacher_list_item.append(name, job, img);
        old_teachers_list.appendChild(teacher_list_item);

    })
}


import  {navbar, footer} from "/componant/navbar.js";

 let nav_Data = navbar();

 let footer_Data = footer();


// console.log(nav_Data);
// console.log(footer_Data);

document.getElementById("my_header").innerHTML = (nav_Data);
document.getElementById("footer").innerHTML = (footer_Data);