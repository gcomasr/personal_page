// MAIN MENU CONTROL
// MAIN MENU CONTROL
// MAIN MENU CONTROL

const menuIcon = document.getElementById("menu-burger");
const menuOpt = document.getElementById("menu-list");

menuIcon.onclick = function (){
    if(menuOpt.className == "menu__hidden"){
        menuOpt.classList.remove("menu__hidden");
    }else{
        menuOpt.classList.add("menu__hidden");
    }
}


var nav_btns= document.querySelectorAll(".nav__link");
// console.log(nav_btns);
for (var i=0; i < nav_btns.length; i++){
    nav_btns[i].onclick = function() {
        var current_nav = document.querySelectorAll(".nav__link.active")
        // console.log(current_nav);
        current_nav[0].classList.remove("active");
        this.classList.add("active");
        menuOpt.classList.add("menu__hidden")
    };
} 

// SECTION BUTTONS FROM HOME SECTION CODING
// SECTION BUTTONS FROM HOME SECTION CODING
// SECTION BUTTONS FROM HOME SECTION CODING

var info_text= "<table><tbody><tr><td>(01/2022 - 03/2023)</td><td></td><td>Automation Engineer</td><td></td><td>Traktech SL</td></tr><tr><td>(05/2020 - 12/2021)</td><td></td><td>Project Manager<br>and BI developer</td><td></td><td>Continental <br>Automotive Spain</td></tr><tr><td>(11/2017 - 05/2020)</td><td></td><td>Electronic Analysis<br>Technician</td><td></td></tr><tr><td>(05/2018 - 06/2021)</td><td></td><td>Programming and<br>robotics teacher</td><td></td><td>Codelearn SL</td></tr></tbody></table>";
document.getElementById("home-section__info-text").innerHTML = info_text;

var info_btns= document.querySelectorAll(".home-section__info-btn");
console.log(info_btns);
for (var i=0; i < info_btns.length; i++){
    info_btns[i].onclick = function() {
        var current_info = document.querySelectorAll(".home-section__info-btn.active")
        console.log(current_info);
        current_info[0].classList.remove("active");
        this.classList.add("active");

        var info_id= this.id;
        // console.log("the id is: " + info_id);
        switch(info_id){
            case "home-section__info-btn-exp":
                info_text= "<table><tbody><tr><td>(01/2022 - 03/2023)</td><td></td><td>Automation Engineer</td><td></td><td>Traktech SL</td></tr><tr><td>(05/2020 - 12/2021)</td><td></td><td>Project Manager<br>and BI developer</td><td></td><td>Continental <br>Automotive Spain</td></tr><tr><td>(11/2017 - 05/2020)</td><td></td><td>Electronic Analysis<br>Technician</td><td></td></tr><tr><td>(05/2018 - 06/2021)</td><td></td><td>Programming and<br>robotics teacher</td><td></td><td>Codelearn SL</td></tr></tbody></table>";
                break;
            case "home-section__info-btn-edu":
                info_text=  "<table><tbody><tr><td>(09/2014 - 10/2018)</td><td></td><td>Industrial Electronics and <br> Automatic Control Engineering</td><td></td><td>ESEIAAT-UPC Barcelona Tech</td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Bachelor's thesis:</td><td></td><td>Construction of an economical <br> multitasking CNC Machine</td><td></td><td><a href='https://hdl.handle.net/2117/126275' target='_bank'>https://upcommons.upc.edu/ <br> handle/2117/126275</a></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>";
                break;

            case "home-section__info-btn-skills":
                info_text=  '...Languages... Catalan & Spanish (Native) // English (B2) // German (A1) <br>' +
                            '...Computing... TIA Portal, WinCC, Office, SolidWorks, AutoCAD, Fusion 360, Arduino, GitHub, Ultimaker CURA, Microstrategy, Power BI, Splunk and Linux. <br>' +
                            '...Coding... Ladder, RAPID, C++, Arduino, Python, VB, JAVA, VBA, HTML and CSS.';
                break; 
        }
        document.getElementById("home-section__info-text").innerHTML = info_text;
    };
} 