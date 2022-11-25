//Phần Đăng nhập admin
function login() {
    let USER = "admin";
    let PASSWORD = "12345";
    let user = document.getElementById("user").value;
    let pass = document.getElementById("password").value;
    if ((user === USER) && (password === PASSWORD)) {
        alert('Đăng nhập thành công');
    } else {
        alert('Đăng nhập không thành công');
    }
}