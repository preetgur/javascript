console.log("Create a library class :");

// create a class library and implement the following;
// constructor must take the book list as argument
// getBookList()
// issueBook ( bookname, user)
// returnBook(bookname)

/* 
   harry = new Library(['Legend harry', ' legend Sonu','legend kaka']);    => Treats as object 
   harry = new Library("Gurpreet book");                                   => Treats as String
*/
class Library {
    constructor(givenBooklist) {
        this.booklist = givenBooklist;
        this.issuedBooks = {}; // empty object

        console.log(typeof this.issuedBooks);
        console.log(typeof this.booklist);


    }
    // harry.getBookList()

    getBookList() {
        this.booklist.forEach(function (element) {
            console.log(element);

        });
    }


    // harry.issueBook('Legend harry','preet')

    issueBook(bookname, user){
        if(this.issuedBooks[bookname] == undefined){
        this.issuedBooks[bookname]= user;             //this.issuedBook[key] = value ;

        }
        else{
            console.log("This Book is already issued");
        }
            }
    
    // harry.returnBook('Legend harry')
    returnBook(bookname){
        delete this.issuedBooks[bookname]
            }

    }