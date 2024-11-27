//start guestbook//
const guestForm = document.getElementById("guestform");//declare variable//
const guestList = document.getElementById("guestlist");//declare variable//

guestForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const Email = document.getElementById("email").value;//ประกาศตัวแปรและรับค่าเข้ามา//
    const Name = document.getElementById("name").value;//ประกาศตัวแปรและรับค่าเข้ามา//
    const Comment = document.getElementById("comment").value;//ประกาศตัวแปรและรับค่าเข้ามา//
    
    
});