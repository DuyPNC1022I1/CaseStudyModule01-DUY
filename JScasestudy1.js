//Phần đăng nhập vai trò admin
function login() {
    let USER = "admin";
    let PASSWORD = "123";
    let user = document.getElementById("user").value;
    let pass = document.getElementById("password").value;
    if ((user === USER) && (pass === PASSWORD)) {
        window.location.href = 'adminlogin.html';
    } else {
        alert('Đăng nhập không thành công. Vui lòng thử lại');
    }
}


//Phần edit list sản phẩm
class Product {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getImg() {
        return this.img;
    }

    setName(value) {
        this.name = name;
    }

    setPrice(value) {
        this.price = price;
    }

    setImg(value) {
        this.img = img;
    }
}

// Khởi tạo đối tượng Sản phẩm
let fj350 = new Product("Ghế Massage FJ-350", "32,000,000đ", "imageProduct/FC-350-02-8-768x768.png");
let fj600 = new Product("Ghế Massage FJ-600", "42,000,000đ", "imageProduct/FC-600-04-8-768x768.png");
let fjs555 = new Product("Ghế Massage FJ-S555", "60,000,000đ", "imageProduct/s555.png");
let fj369 = new Product("Ghế Massage FJ-369", "37,000,000đ", "imageProduct/ghe-massage-FJ369.png");
let fj3760 = new Product("Ghế Massage FJ-3760", "47,000,000đ", "imageProduct/JC-3760-S-DREAM-768x768.png");
let fj686 = new Product("Ghế Massage FJ-686", "62,000,000đ", "imageProduct/fjs555-1.png");
let fj3730 = new Product("Ghế Massage JJ-3730", "57,000,000đ", "imageProduct/JC-3730-1-768x768.png");
let fj250 = new Product("Ghế Massage FJ-250", "33,000,000đ", "imageProduct/ghe-massage-fj-250-min-600x600.png");
let fj550 = new Product("Ghế Massage FJ-550", "39,000,000đ", "imageProduct/999-1-300x300.png");
let fj8899 = new Product("Ghế Massage FJ-8899", "89,000,000đ", "imageProduct/ghe-massage-fc-8899-1-768x768.png");
let fjps9h = new Product("Ghế Massage FJ-PS9H", "65,000,000đ", "imageProduct/PS9H1865-2-600x600.png");
let fj666 = new Product("Ghế Massage FJ-666", "55,000,000đ", "imageProduct/Ban-sao-cua-fc-666-1-300x300.png");
let productArr = [fj350, fj600, fjs555, fj369, fj3760, fj686, fj3730, fj250, fj550, fj8899, fjps9h, fj666];

//Hiển thị sản phẩm trên màn hình
function display() {
    let result = "";
    for (let i = 0; i < productArr.length; i++) {
        result += `<div class="sanpham__thongtin">
                         <a class="sanpham__hinhanh">
                             <img src="${productArr[i].getImg()}" alt="this is image">
                         </a>
                         <div class="sanpham__ghichu">
                             <a class="sanpham__ten">${productArr[i].getName()} </a>
                             <div class="sanpham__gia">${productArr[i].getPrice()}</div>
                             <div class="sanpham__mua">
                                <button class="delete" onclick="deleteProd(${i})">Xóa</button>
                                <button class="edit" onclick="edit(${i})">Sửa</button>
                             </div>
                         </div>
                   </div>`
    }
    document.getElementById('show').innerHTML = result;
}

// Add sản phẩm
function addProduct() {
    //Lấy giá trị từ input
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let img = document.getElementById('image').value;
    //Khởi tạo đối tượng mới
    let product = new Product(name, price, img);
    productArr.unshift(product);
    display();
}

//Edit sản phẩm
function edit(index) {
    let name = prompt("Input name: ");
    let price = prompt("Input price:");
    let img = prompt("Input img:");

    let newProduct = new Product(name, price, img);
    productArr[index] = newProduct;
    display();
}

//Delete sản phẩm
function deleteProd(index) {
    productArr.splice(index, 1);
    display();
}