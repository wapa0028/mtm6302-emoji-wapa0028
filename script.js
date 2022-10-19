const $emojis = document.getElementById('emojis')
const emojis = []




for (let i = 128510; i <= 128550; i++){
    emojis.push(`<span class = "item1">&#${i};</span><br><code class= "item2">${i}</code>`)
  }
  
  $emojis.innerHTML += emojis.join('')
