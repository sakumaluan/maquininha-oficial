let valorVenda = 0;
let tipoPagamento = '';
let numeroCartao = '';
let senhaCartao = '';

document.getElementById('btn-proximo').addEventListener('click', () => {
  const valorInput = document.getElementById('valor').value;
  valorVenda = parseFloat(valorInput);
  if (isNaN(valorVenda) || valorVenda <= 0) {
    alert('Por favor, insira um valor válido.');
    return;
  }
  document.getElementById('tela-inicial').style.display = 'none';
  document.getElementById('tipo-pagamento').style.display = 'block';
});

function mostrarInserirCartao(tipo) {
  tipoPagamento = tipo;
  document.getElementById('tipo-pagamento').style.display = 'none';
  document.getElementById('inserir-cartao').style.display = 'block';
}

function mostrarSenha() {
  numeroCartao = document.getElementById('cartao').value;
  if (numeroCartao.length !== 16) {
    alert("Número do cartão deve ter 16 dígitos.");
    return;
  }
  document.getElementById('inserir-cartao').style.display = 'none';
  document.getElementById('senha').style.display = 'block';
}

function mostrarResultado() {
  senhaCartao = document.getElementById('senha').value;
  if (senhaCartao.length !== 4) {
    alert("Senha deve ter 4 dígitos.");
    return;
  }

  const taxa = tipoPagamento === 'debito' ? 0.015 : 0.035;
  const valorFinal = valorVenda * (1 - taxa);
  document.getElementById('valor-recebido').innerText = R$ ${valorFinal.toFixed(2)};

  document.getElementById('senha').style.display = 'none';
  document.getElementById('resultado').style.display = 'block';
}

function reiniciar() {
  document.getElementById('valor').value = '';
  document.getElementById('cartao').value = '';
  document.getElementById('senha').value = '';
  document.getElementById('resultado').style.display = 'none';
  document.getElementById('tela-inicial').style.display = 'block';
}