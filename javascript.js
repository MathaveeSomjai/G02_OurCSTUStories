//start guestbook//
const guestForm = document.getElementById("guestform");//declare variable//
const guestList = document.getElementById("guestlist");//declare variable//

guestForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const Email = document.getElementById("email").value;//ประกาศตัวแปรและรับค่าเข้ามา//
    const Name = document.getElementById("name").value;//ประกาศตัวแปรและรับค่าเข้ามา//
    const Comment = document.getElementById("comment").value;//ประกาศตัวแปรและรับค่าเข้ามา//
    
    const guestCard = document.createElement('div');
    guestCard.classList.add('guest-card');
    guestCard.innerHTML = `
                <h2>${Name}</h2>
                <p><strong>Email:</strong>${Email}</p>
                <p><strong>Comment:</strong> ${Comment}</p>
                <p><br></p>`; //ให้แสดงข้อความขึ้นหลังกดส่ง//

    guestList.appendChild(guestCard);//ไม่รีเซ็ต(ถ้ากรอกใหม่จะขึ้นต่ออันเดิม)//
});

// count star rating//
//to access the star//
let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");

// Funtion to update rating//
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}

// To remove the pre-applied styling//
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}