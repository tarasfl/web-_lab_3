import {
    get_input,
    clear_input,
    add_item_to_html,
    render_books
}from './dom_util.js'

import {
    get_all_books,
    post_books,
    update_book,
    delete_book
}from './api.js'
const search_button = document.getElementById('search_button');
const clear_button = document.getElementById('clear_button');
const create_button = document.getElementById('create_button');
const search_input = document.getElementById('search_input');
const sort_button = document.getElementById('sort_button');
const pages = document.getElementById('total_pages');

let books = books_arr
let books_array = books_arr


const add_item  = ({amount_of_pages, author, price}) => {
    const generated_id  =   uuid.v1()
    const new_item = {
        id: generated_id,
        amount_of_pages: amount_of_pages,
        author: author,
        price: price 
    }

    books.push(new_item)

    add_item_to_html(new_item)
    let total_pages = pages.innerHTML
    pages.innerHTML = parseInt(total_pages) + parseInt(amount_of_pages);
} 


export const refetch_all_books = async () => {
    const all_books = await get_all_books();
  
    books = all_books;
  
    render_books(books);
  };

search_button.addEventListener('click', (event) =>{
    event.preventDefault()

    console.log(books.author)

    let found_books = []
    found_books = books.filter(book => book.author.search(search_input.value) !== -1) 
    
    console.log(found_books)
    render_books(found_books)

})

clear_button.addEventListener('click', (event) => {
    event.preventDefault()

    render_books(books)
    search_input.value = ''
})

sort_button.addEventListener('click', (event) => {
    event.preventDefault()

    books.sort((a, b) => a.price - b.price)
    render_books(books)
})

refetch_all_books()