import {
    get_input,
    clear_input,
    add_item_to_html
}from './dom_util.js'
const search_button = document.getElementById('search_button');
const clear_button = document.getElementById('clear_button');
const create_button = document.getElementById('create_button')

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
} 

create_button.addEventListener('click', (event) => 
{
    event.preventDefault();
    const {amount_of_pages, author, price} = get_input();
    console.log(amount_of_pages)
    clear_input();
    add_item({amount_of_pages, author, price})
});