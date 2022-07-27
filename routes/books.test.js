// process.env.NODE_ENV = "test"

// const request = require("supertest");


// const app = require("../app");
// const db = require("../db");


// // isbn of sample book
// let book_isbn;


// beforeEach(async () => {
//   let result = await db.query(`
//     INSERT INTO
//       books (isbn, amazon_url,author,language,pages,publisher,title,year)
//       VALUES(
//         '123432122',
//         'https://amazon.com/taco',
//         'Elie',
//         'English',
//         100,
//         'Nothing publishers',
//         'my first book', 2008)
//       RETURNING isbn`);

//   book_isbn = result.rows[0].isbn
// });

// describe("GET /books", function () {
//     test("Gets a list of 1 book", async function () {
//       const response = await request(app).get(`/books`);
//       const books = response.body.books;
//       expect(books).toHaveLength(1);
//       expect(books[0]).toHaveProperty("isbn");
//       expect(books[0]).toHaveProperty("amazon_url");
//     });
//   });
  

// afterEach(async function () {
//     await db.query("DELETE FROM BOOKS");
//   });
  
  
// afterAll(async function () {
//     await db.end()
//   });




process.env.NODE_ENV = 'test'

const request = require('supertest')
const db = require('../db')
const app = require('../app')


beforeEach(async ()=>{
    let results = await db.query(
                     
        `INSERT INTO books (isbn, amazon_url,author,language,pages,publisher,title,year)
        VALUES($1,$2,$3,$4,$5,$6,$7,$8)`,
        ['000','amazon.com','james bond','spanish','30','rat man','any title','2001']
    )
})


describe('get/', ()=>{
    test('gtt/', async ()=>{
        const response = await request(app).get('/books')
        expect(response.statusCode).toBe(200);
    } )
})


afterEach(async function () {
    // delete any data created by test
    await db.query("DELETE FROM books");
});


  
afterAll(async function () {
    // close db connection
    await db.end();
});
  