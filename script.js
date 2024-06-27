function Gerar() {
  let n = document.getElementById("txtn");
  let table = document.getElementById("seltab");
  if (n.value.length == 0) {
    alert("digite um valor ");
  } else {
    let number = Number(n.value);
    let c = 1;
    table.innerHTML= ''
    while(c <= 10) {
      // Enquanto  C for < = 10 // gerar a tabuada de de valor até 10 
      let item = document.createElement("option"); // cria uma elemento de option , atribuindo o select do html
      item.text = `${number} x ${c} = ${number * c}`; // resultado da tabuada pegando as variáveis n = number do id txtn, c do else e o resultado da multiplicação n*c
      table.appendChild(item); // table do select que implementa a tabela da tabuada  (appendChild) adicionando o elemento na variável do script
      c++; // contagem para funcionar o calcúlo
    }
  }
}
