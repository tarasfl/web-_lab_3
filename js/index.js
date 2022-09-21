import {
    get_input,
    clear_input,
    add_item_to_html,
    render_books,
    edit_id,
    get_id
}from './dom_util.js'
const search_button = document.getElementById('search_button');
const clear_button = document.getElementById('clear_button');
const create_button = document.getElementById('create_button');
const search_input = document.getElementById('search_input');
const sort_button = document.getElementById('sort_button');
const pages = document.getElementById('total_pages');
const create_form = document.getElementById('create_form')
const create_book = document.getElementById('create_book')

let books = []


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

create_button.addEventListener('click', (event) => 
{
    event.preventDefault();
    const {amount_of_pages, author, price} = get_input();
    clear_input();
    add_item({amount_of_pages, author, price})
});

search_button.addEventListener('click', (event) =>{
    event.preventDefault()

    let found_books = []
    found_books = books.filter(book => book.author.search(search_input.value) !== -1) 
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

create_book.addEventListener('click', () =>{
    create_form.classList.toggle('create_form')
    create_form.classList.toggle('none')
})
