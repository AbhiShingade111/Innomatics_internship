const con = document.querySelector("#container1")
const con2 = document.querySelector("#container2")
const prodinfo = document.querySelector("#prodinfo")
const cont = document.querySelector(".row")
let productList = []

function fetProduct() {
    const uri = "https://fakestoreapi.com/products"
    fetch(uri).then(res => {
        return res.json()
    }).then(data => {
        console.log(data)
        data.forEach((val) => {
            productList.push(val)
        })
        createProductCard(data)
        showProducts(data)
    })
}


fetProduct();
console.log("ProductList", productList)

function createProductCard(Prods) {
    Prods.forEach((prod) => {
        const ca = document.createElement("div")
        ca.classList.add("card", "position-relative", "col-lg-4", "col-md-6", "col-sm-8", "col-8", "col-xxl-3")
        ca.setAttribute("category",prod.category)

        const im = document.createElement("img")
        im.src = prod.image
        im.classList.add("card-img-top", "rounded-top")

        const br = document.createElement("hr")

        const cbody = document.createElement("div")
        cbody.classList.add("card-body")

        const h = document.createElement("h6")
        h.innerHTML = prod.title
        h.classList.add("card-title")

        const title = document.createElement("p")
        title.innerHTML = "Category : " + prod.category.toUpperCase()
        title.style.fontWeight = 800

        const p = document.createElement("p")
        p.innerHTML = "Price - Rs. " + prod.price
        p.style.color = "red"
        p.style.fontWeight = 800

        const btn = document.createElement("button")
        btn.innerHTML = "Read More"
        btn.classList.add("btn", "btn-primary", "bottom-0", "start-50", "translate-middle-x", "position-absolute", "my-btn")
        btn.setAttribute("id", "more-info")
        btn.onclick = () => {
            showProduct(prod)
        }


        cbody.appendChild(h)
        cbody.appendChild(title)
        cbody.appendChild(p)
        cbody.appendChild(btn)

        ca.appendChild(im)
        ca.appendChild(br)
        ca.appendChild(cbody)

        cont.appendChild(ca)
    })
}



function fetchDataByCategory(e) {
    e.preventDefault()

    const category = document.getElementById("cat").value;
    console.log(category)
    con.style.display = "block";
    const one = document.querySelector("#listprod")
    one.classList.add("d-block")
    con2.style.display = "none";
    const c = document.querySelectorAll(".card")
    c.forEach((prod) => {
        //console.log(prod.getAttribute("category"))
        //console.log(prod.innerText.toLoweCase().includes(category.toLoweCase()))
        if (category == 'all') {
            prod.style.display = "block";
        } else if (prod.getAttribute("category") == category) {
            prod.style.display = "block";
        } else {
            prod.style.display = "none";
        }
    })
}

function showProducts(prods) {

    prods.forEach((prod_obj) => {
        // console.log(prod_obj)
        //    con.style.display = "none";
        //    con2.style.display = "block";
        // const ele = document.createElement("div")
        // ele.classList.add("row", "d-flex", "justify-content-between")
        // ele.style.display = "none"
        // ele.setAttribute("id",prod_obj.id)




        const pr = document.createElement("div")
        pr.classList.add("prodCard")
        pr.setAttribute("id",prod_obj.id)
        pr.style.display = "none";

        const div = document.createElement("div")
        // div.classList.add("col-12", "col-lg-6", "col-md-6", "col-sm-12")
        div.classList.add("col-12")

        const prodheader = document.createElement("h2")
        prodheader.classList.add("prodHead")
        prodheader.innerHTML = prod_obj.title

        const desc = document.createElement("h6")
        desc.classList.add("prodDesc", "pe-5")
        desc.innerHTML = "Description : " + prod_obj.description

        const prodCategory = document.createElement("p")
        prodCategory.classList.add("mt-5")
        prodCategory.innerHTML = "Category : " + prod_obj.category.toUpperCase()

        const prodPrice = document.createElement("p")
        prodPrice.innerHTML = "Price : Rs. " + prod_obj.price

        const proRating = document.createElement("p")
        proRating.innerHTML = "Rating : " + prod_obj.rating.rate +" Stars"

        const prodCount = document.createElement("p")
        prodCount.innerHTML = "Count : " + prod_obj.rating.count +" persons reviewed this product." 

        div.appendChild(prodheader)
        div.appendChild(desc)
        div.appendChild(prodCategory)
        div.appendChild(prodPrice)
        div.appendChild(proRating)
        div.appendChild(prodCount)

        const div2 = document.createElement("div")
        //div2.classList.add("col-12", "col-lg-6", "col-md-6", "col-sm-12")
        div2.classList.add("col-12","text-center")

        const prodImage = document.createElement("img")
        prodImage.src = prod_obj.image
        prodImage.classList.add("prodimg")

        div2.appendChild(prodImage)

        pr.appendChild(div)
        pr.appendChild(div2)

        prodinfo.appendChild(pr)
    })

}


function showProduct(prod_obj){
    con.style.display = "none"
    con2.style.display = "block"
    console.log(prod_obj)

    const prod = document.querySelectorAll(".prodCard")
    prod.forEach((val) => {
        if(val.id == prod_obj.id){
            val.style.display = "block"
        }else{
            val.style.display = "none"
        }
    })
    
}