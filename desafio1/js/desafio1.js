const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
    let email = document.getElementById('email').value;
  let data = {
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<p>Cadastrando...</p>`

  let pronto = `<p>Concluído.</p>`

  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})