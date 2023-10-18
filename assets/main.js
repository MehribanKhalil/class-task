// --------TASK --------Kitablar Class`i olacaq.Burda Kitabib adi,yazar adi,yazildigi il ve qiymeti olacak.QiymetIste methodu olacaq.Bu methodu cagiranda parametr olaraq endirim faizi isteyecek.Console.log`a Kitab adi,Yazar adi,Yazildigi il, qiymet ve endirimli qiymeti gostersin.


class Books {
    constructor(bookName,bookAuthor,publishYear,bookPrice){
        this.bookName=bookName
        this.bookAuthor=bookAuthor
        this.publishYear=publishYear
        this.bookPrice=bookPrice
    }

    getBookPrice(discountRate){
        const totalPrice = (this.bookPrice * (100- discountRate)/100); 
        return totalPrice;
    }

}

const book = new Books('Death on Nile' , 'Agatha Christie' , 1937 , 6)
const book2 = new Books('Mavi Qatarin Sirri' , 'Agatha Christie' , 1943 , 10)


console.log(`the book name is ${book.bookName}`)
console.log(`autor is ${book.bookAuthor}`)
console.log(`publish year is ${book.publishYear}`)
console.log(`the price of the book is ${book.bookPrice}-man`)
console.log(`discountedprice of the book is ${book.getBookPrice(10)}`)