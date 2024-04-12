document.querySelector('#Send').addEventListener('click', myClick);
function myClick(){
    let name = document.querySelector('#Name').value;
    let phone = document.querySelector('#Phone').value;
    let date = document.querySelector('#Date').value;
    let time = document.querySelector('#Time').value;
    let number = document.querySelector('#Number').value;
    fetch("http://127.0.0.1:8080",{
        method: 'POST',
        body: JSON.stringify({
            name,
            phone,
            date,
            time,
            number
        },),
        mode: "no-cors"
    })
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  document.addEventListener('DOMContentLoaded', () => {

    const inputElement = document.querySelector('#Phone') // ищем наш единственный input
    const maskOptions = { // создаем объект параметров
      mask: '+{7}(000)000-00-00' // задаем единственный параметр mask
    }
    IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами
  
  })