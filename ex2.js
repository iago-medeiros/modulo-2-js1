let products = [
{ name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
{ name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
{ name: 'Pendrive', price: 10, quantity: 10, colors: [] },
{ name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
{ name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
{ name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
{ name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
{ name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
{ name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
{ name: 'Monitor', price: 200, quantity: 3, colors: [] },
]

//1
const primeira = products = products.map((produto, index) => ({...produto, id: index +1}));
console.log('1. Adicione um ID exclusivo a cada produto começando em 1.', products);

//2 
const segundo = () => products.forEach(produto => console.log(produto.name));
console.log('2. Imprima o nome de cada um dos produtos no console.');
segundo();

//3
const terceiro = products.filter(produto => produto.id === 3)
console.log('3. Imprima no console o produto com o id 3.', terceiro);

//4
const quarto = products.filter((produto) => produto.colors.includes('black'));
console.log('4. Imprima no console os produtos com a cor “black”.', quarto);

//5 
const quinto = products.filter((produto) => produto.colors.length === 0);
console.log('5. Imprima no console os produtos que não possuem cor.', quinto);