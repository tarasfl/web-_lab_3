const amount_of_pages = document.getElementById('amount_of_pages')
const author = document.getElementById('author')
const price = document.getElementById('price')
const right_bar = document.getElementById('books_content')


const get_id = (id) => `item-${id}`;

const item_template = ({id, amount_of_pages, author, price}) => `
    <div id='${get_id(id)}' class = 'book'>
        <p>Amount of pages: ${amount_of_pages}</p>
        <p>Author: ${author}</p>
        <p>Price: ${price}</p>
    </div>
`;


export const get_input = () => {
    return {
        amount_of_pages: amount_of_pages.value,
        author: author.value,
        price: price.value
    }   
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