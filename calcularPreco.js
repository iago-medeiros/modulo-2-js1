function calcularPreco(produto, preco) {
    let envio = 0;
    if (preco > 1 && preco <= 2000) envio = 300;
    if(preco >= 2001 && preco <= 4000) envio = 450;
    if(preco > 4000) envio = 700;

    console.log(`O produto ${produto} custa ${preco}. Seu custo de envio é ${envio}. Portando, o preço final é `, preco + envio )
}

calcularPreco ("Macbook", 2500);
calcularPreco ("Celular", 500);
calcularPreco ("Playstation", 4500);
