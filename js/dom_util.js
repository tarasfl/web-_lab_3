const amount_of_pages = document.getElementById('amount_of_pages')
const author = document.getElementById('author')
const price = document.getElementById('price')

export const get_input = () => {
    return {
        amount_of_pages: amount_of_pages.value,
        author: author.value,
        price: price.value
    }

}