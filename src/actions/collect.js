export const collect = (products) => {
return {
    type : 'FETCH_DB',
    products : products // products : [{},{}...]
}
}