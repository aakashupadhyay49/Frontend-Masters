import data from "/javascript/guidesData.js";
showGuides();
function showGuides() {
    let guide_list = document.getElementById("guide_list");
    data.map((el) => {
        let guide_item = document.createElement("li");
        guide_item.className = "guide_items"


        let img_link = document.createElement("a");
        img_link.src = "#";


        let img = document.createElement("img");
        img.className = "guide_img";
        img.src = el.img;

        img_link.append(img);

        let book_link = document.createElement("div");
        book_link.className = "book_link"

        let book_a = document.createElement("a");
        book_a.href = "#"
        book_a.textContent = "Read Online >"
        book_link.append(book_a)


        let git_link = document.createElement("div");
        git_link.className = "git_link"

        let git_a = document.createElement("a")
        git_a.href = el.git;
        git_a.textContent = "Github Repo >"
        git_link.append(git_a);

        guide_item.append(img_link, book_link, git_link);
        guide_list.appendChild(guide_item);

    })
}

import  {navbar, footer} from "/componant/navbar.js";

 let nav_Data = navbar();

 let footer_Data = footer();


console.log(nav_Data);
console.log(footer_Data);

document.getElementById("my_header").innerHTML = (nav_Data);
document.getElementById("footer").innerHTML = (footer_Data);
