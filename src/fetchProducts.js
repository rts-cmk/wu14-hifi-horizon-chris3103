fetch("http://localhost:3000/products")
 .then(res => res.json())
 .then(products => {
    const img = document.getElementById("productImage");
    img.src = products[0].image;
    img.alt = products[0].title;
 })