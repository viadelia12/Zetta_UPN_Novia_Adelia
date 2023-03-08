const book = {
    "title": "Retrocession",
    "author": "Ayunita Kuraisy",
    "page": 432,
    "price": 110000,
    "inStock": true
}

function Purchasing(book, disc, tax){
    const discount = book.price * (disc/100);
    const totalDisc = book.price - discount;
    const amountOfTax = totalDisc * (tax/100);
    const priceAfterTax = totalDisc + amountOfTax;

    if(book.inStock === true){
        stock = "Available"
    }
    else{
        stock = "Out of Stock"
    }

    console.log('Title                : ', book.title);
    console.log('Author               : ', book.author);
    console.log('Page                 : ', book.page);
    console.log('Price                : ', book.price);
    console.log('Stock                : ', stock);
    console.log('Amount of Discount   : ', discount);
    console.log('Price After Discount : ', totalDisc);
    console.log('Amoun of Tax         : ', amountOfTax);
    console.log('Price After Tax      : ', priceAfterTax);
}

Purchasing(book, 15, 10);