// procurar o botão
document.querySelector("#add-time")
// quando clicar no botão
.addEventListener('click', cloneField)
// executar ação:
function cloneField() {
    //duplica os campos, que campos??
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // Pegar os campos, que campos??
    const fields = newFieldContainer.querySelectorAll('input')
    // para cada campo, limpar
    fields.forEach(function(field) {
        fields.value = ""
    });
    // colocar na página, onde??
    document.querySelector('.schedule-items').appendChild(newFieldContainer)
}
