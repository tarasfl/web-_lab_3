const amount_of_pages = document.getElementById('amount_of_pages')
const author = document.getElementById('author')
const price = document.getElementById('price')
const right_bar = document.getElementById('books_content')


export const get_id = (id) => `book-${id}`;
export const edit_id = (id) => `edit-${id}`

const item_template = ({id, amount_of_pages, author, price}) => `
    <div id='${get_id(id)}' class = 'book'>
        <p>Amount of pages: ${amount_of_pages}</p>
        <p>Author: ${author}</p>
        <p>Price: ${price}</p>
    </div>
`;


export const get_input = () => {
    let pages_val;
    let price_val;
    pages_val = parseInt(amount_of_pages.value)
    price_val = parseInt(price.value)
    if(isNaN(price_val) || isNaN(pages_val)){
        alert("Please type into amount of pages int type \nAuthor -string value \nPrice-int value")
        
    }else{
        return {
        amount_of_pages: pages_val,
        author: author.value,
        price: price_val
    }}   
}

export const clear_input = () => {
    amount_of_pages.value = ''
    author.value = ''
    price.value = ''
};
export const add_item_to_html = ({id, amount_of_pages, author, price}) => {
    right_bar.insertAdjacentHTML (
        'afterbegin', 
        item_template({id, amount_of_pages, author, price})
    )
} 

export const render_books = (books) => {
    right_bar.innerHTML = ''
    books.forEach(add_item_to_html);
}
