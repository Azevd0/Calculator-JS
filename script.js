// Variável para armazenar o histórico de cálculos
var historicoCalculos = [];

function appendToDisplay(value) {
  var display = document.getElementById('display');
  if (display.value === 'Error') {
    display.value = '';
  }
  if (display.value.includes('=')) { // Se houver um resultado anterior, remova o resultado
    display.value = '';
  }
  display.value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  var expression = document.getElementById('display').value;
  try {
    var result = eval(expression);
    // Adiciona o cálculo atual ao histórico
    historicoCalculos.push({ expressao: expression, resultado: result });
    document.getElementById('display').value = expression + '=' + result;
    // Atualiza o histórico na página
    updateHistorico();
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

// Função para atualizar o histórico na página
function updateHistorico() {
  var historicoSelect = document.getElementById('historico-lista');
  // Limpa o histórico anterior
  historicoSelect.innerHTML = '';
  // Adiciona cada cálculo ao histórico
  historicoCalculos.forEach(function(item, index) {
    var option = document.createElement('option');
    option.textContent = item.expressao + ' = ' + item.resultado;
    option.value = index;
    historicoSelect.appendChild(option);
  });
}
