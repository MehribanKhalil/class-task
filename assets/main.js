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

    getInfo(discountRate){
        console.log(`
        The book name is ${this.bookName}
        Autor is ${this.bookAuthor}
        Publish year is ${this.publishYear}
        The price of the book is ${this.bookPrice}-man
        Discountedprice of the book is ${this.getBookPrice(discountRate)}`)
    }

}

const book = new Books('Death on Nile' , 'Agatha Christie' , 1937 , 6)
const book2 = new Books('The Mystery of the Blue Train' , 'Agatha Christie' , 1943 , 10)

book.getInfo(10)