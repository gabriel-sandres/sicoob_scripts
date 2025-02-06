// Função de copiar texto ao clicar no botão "Copiar"
function copyToClipboard(elementId) {
  var copyText = document.getElementById(elementId);
  if (copyText) {
    copyText.select();
    document.execCommand("copy");
    console.log("Copiado pelo botão: " + copyText.value);
  }
}
 
// Função de copiar texto ao clicar no campo
function copyOnClick(event) {
  var copyText = event.target;
  copyText.select();
  document.execCommand("copy");
  console.log("Copiado com clique: " + copyText.value);
}
 
const inputs = document.querySelectorAll('input[type="text"]');
 
inputs.forEach(input => {
  input.addEventListener('click', copyOnClick);
});
 
// Função de copiar texto ao focar no campo
function copyOnFocus(elementId) {
  var copyText = document.getElementById(elementId);
  if (copyText) {
    copyText.select();
    document.execCommand("copy");
    console.log("Copiado com foco: " + copyText.value);
  }
}
 
// Função de preencher o dropdown de "Navegação"
function populateDropdown() {
  var caminhoElement = document.getElementById('Caminho');
  if (caminhoElement) {
    var caminho = caminhoElement.value;
    var caminhoArray = caminho.split(',');
    var select = document.getElementById('navegacaoURA');
 
    select.innerHTML = '';
 
    var defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.text = "Navegação:";
    defaultOption.selected = true;
    defaultOption.disabled = true;
    defaultOption.style.color = "#000000";
    select.appendChild(defaultOption);
 
    caminhoArray.forEach(function (item) {
      var option = document.createElement('option');
      option.value = item.trim();
      option.text = item.trim();
      option.disabled = true;
      option.style.color = "#000000";
      select.appendChild(option);
    });
  }
}
 
window.onload = function () {
  // Preencher dropdown
  populateDropdown();
 
  // Não exibir mesma skill
  const skillValueElement = document.getElementById('SkillT');
  const select = document.getElementById('ListaTransf');
  const options = select.querySelectorAll('option');
 
  if (skillValueElement) {
    const skillValue = skillValueElement.value;
    options.forEach(option => {
      if (option.value === skillValue) {
        option.style.display = 'none';
      } else {
        option.style.display = '';
      }
    });
  }
 
  // Exibir skill de entrada
  const skillOrigemElement = document.getElementById('SkillOrigem');
  let skillFormatada = "";
 
  if (skillOrigemElement) {
    let skillOrigem = skillOrigemElement.value;
 
    switch (skillOrigem) {
      case "25166183":
        skillFormatada = "25166183 - TER SAC";
        break;
      case "25166580":
        skillFormatada = "25166580 - SAC Contestação";
        break;
      default:
        skillFormatada = " ";
        break;
    }
 
    const origemElement = document.getElementById('Origem');
    if (origemElement) {
      origemElement.value = skillFormatada;
    } else {
      console.warn("Elemento com ID 'Origem' não encontrado.");
    }
  }
};
 
// Popup Confirmação Transferência
function showPopup() {
  let opTransf = document.getElementById('ListaTransf').value;
  console.log(opTransf);
 
  if (opTransf != "") {
    let transfSkill = "";
 
    switch (opTransf) {
      case "SacContestacao":
        transfSkill = "25166580 - SAC Contestação";
        break;
      case "RetencaoSipag":
        transfSkill = "23121572 - Retenção Sipag";
        break;
      case "ConsorcioRetencao":
        transfSkill = " - Retenção Consórcio";
        break;
      case "UraPuc":
        transfSkill = "URA PUC";
        break;
      case "UraCoopcerto":
        transfSkill = "URA COOPCERTO";
        break;
      case "1":
        transfSkill = "1 - Retenção Consórcio";
        break;
      case "Poupanca":
        transfSkill = "POUPANÇA";
        break;
      case "RetencaoSeguros":
        transfSkill = "RETENÇÃO SEGUROS";
        break;
      case "RetencaoCartao":
        transfSkill = "RETENÇÃO CARTÃO";
        break;
      case "UraCartoes":
        transfSkill = "URA CARTÕES";
        break;
      case "UraCartoesBlack":
        transfSkill = "URA CARTÕES BLACK";
        break;
      case "UraConsorcio":
        transfSkill = "URA Consórcio";
        break;
      case "UraCoopera":
        transfSkill = "URA COOPERA";
        break;
      case "UraCartoesCresol":
        transfSkill = "URA CARTÕES CRESOL";
        break;
      case "UraLojistaCabal":
        transfSkill = "URA LOJISTA CABAL";
        break;
      case "UraSipag1":
        transfSkill = "URA SIPAG 1.0";
        break;
      case "UraSipag2":
        transfSkill = "URA SIPAG 2.0";
        break;
      default:
        transfSkill = "";
        break;
    }
 
    const result = confirm("Realmente deseja transferir para " + transfSkill + "?");
    if (result) {
      confirmTransfer();
    }
  } else {
    alert("Nenhuma opção selecionada.");
  }
}
 
function confirmTransfer() {
  const opTransf = document.getElementById('ListaTransf').value;
  if (!opTransf) return alert("Nenhuma opção selecionada.");
 
  const skillName = skillConfig.skills[opTransf];
 
  if (confirm(`Realmente deseja transferir para ${skillName}?`)) {
    document.getElementById('openConfirmation').value = "transf";
    console.log('Transferência confirmada para:', skillName);
  }
}
 
 
document.getElementById('openConfirmation').addEventListener('click', showPopup);
 
// Botão "Pesquisa"
document.getElementById("btnPesquisa").addEventListener("click", function () {
  this.value = "pesquisa";
});
 
// Habilitar/desabilitar botão baseado na seleção
document.addEventListener('DOMContentLoaded', function() {
  const selectElement = document.getElementById('ListaTransf');
  const button = document.getElementById('openConfirmation');
 
  // Iniciar com o botão desabilitado
  button.disabled = true;
  button.style.cursor = "not-allowed";
 
  // Adicionar evento para habilitar/desabilitar o botão quando houver mudança no select
  selectElement.addEventListener('change', function() {
    if (selectElement.value !== "") {
      button.disabled = false;
      button.style.cursor = "pointer";
    } else {
      button.disabled = true;
      button.style.cursor = "not-allowed";
    }
  });
});
 
 
// Opções para o select
const allOptions = [
  { value: "", text: "Lista de Transferência:" },
  { value: "UraPuc", text: "URA PUC" },
  { value: "UraCoopcerto", text: "URA COOPCERTO" },
  { value: "RetencaoSipag", text: "RETENÇÃO SIPAG" },
  { value: "ConsorcioRetencao", text: "RETENCAO CONSÓRCIO" },
  { value: "Poupanca", text: "POUPANÇA" },
  { value: "RetencaoSeguros", text: "RETENÇÃO SEGUROS" },
  { value: "RetencaoCartao", text: "RETENÇÃO CARTÃO" },
  { value: "UraCartoes", text: "URA CARTÕES" },
  { value: "UraCartoesBlack", text: "URA CARTÕES BLACK" },
  { value: "UraConsorcio", text: "URA Consórcio" },
  { value: "UraCoopera", text: "URA COOPERA" },
  { value: "UraCartoesCresol", text: "URA CARTÕES CRESOL" },
  { value: "UraLojistaCabal", text: "URA LOJISTA CABAL" },
  { value: "UraSipag1", text: "URA SIPAG 1.0" },
  { value: "UraSipag2", text: "URA SIPAG 2.0" },
  { value: "SacContestacao", text: "SAC_CONTESTAÇÃO" }
];
 
// Obter o valor do input SkillT
const skillValue = document.getElementById("SkillT").value;
 
// Obter o select
const select = document.getElementById("ListaTransf");
 
// Limpar o select para evitar duplicação
select.innerHTML = "";
 
// Filtrar as opções para remover a que está em skillValue
const optionsToShow = allOptions.filter(option => option.value !== skillValue);
 
// Adicionar as opções ao select
optionsToShow.forEach(option => {
  const opt = document.createElement("option");
  opt.value = option.value;
  opt.textContent = option.text;
  select.appendChild(opt);
});