const book = {
    "title": "Retrocession",
    "author": "Ayunita Kuraisy",
    "page": 432,
    "price": 110000,
    "stock": 230
}

function Purchasing(book, disc, tax, item){
    const discount = book.price * (disc/100);
    const totalDisc = book.price - discount;
    const amountOfTax = totalDisc * (tax/100);
    const priceAfterTax = totalDisc + amountOfTax;
    let totalPrice = 0;
    let itemsOrder = item;
    let leftItemsOrder = 0;

    for(let i = 1; i <= itemsOrder; i++){
        leftItemsOrder = itemsOrder - i;
        book.stock--;
        if(leftItemsOrder < book.stock){
            break;
        }
    }

    let itemsPurchase = itemsOrder + book.stock;
    totalPrice = priceAfterTax * itemsPurchase;
    
    console.log('Title                : ', book.title);
    console.log('Author               : ', book.author);
    console.log('Page                 : ', book.page);
    console.log('Price                : ', book.price);
    console.log('Amount of Discount   : ', discount);
    console.log('Amount of Tax        : ', amountOfTax);
    console.log('Total Items Purchase : ', itemsPurchase);
    console.log('Total Price          : ', totalPrice);

    if(book.stock > 0){
        console.log("Books can still be repurchased!")
    }
    else{
        console.log("We're sorry, the book is out of stock now!")
    }

    return totalPrice;
}

function creditTerms(totalPrice, monthsOfCredit){
    const amountOfInstallment = totalPrice/monthsOfCredit;
    remainingInstallment = [];

    console.log("Amount Of Installment : ", amountOfInstallment);

    for(let i = 0; i<monthsOfCredit; i++){
        remainingInstallment[i] = totalPrice - amountOfInstallment;
        totalPrice -= amountOfInstallment;
        if(i == 0){
            console.log("Remaining Installment after", i+1, "st Payment = ", remainingInstallment[i])
        }
        else if(i == 1){
            console.log("Remaining Installment after", i+1, "nd Payment = ", remainingInstallment[i])
        }
        else{
            console.log("Remaining Installment after", i+1, "th Payment = ", remainingInstallment[i])
        }
    }
}

creditTerms((Purchasing(book, 15, 10, 233)),5);