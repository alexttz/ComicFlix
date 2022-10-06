var listaQuadrinhos = [
  'https://upload.wikimedia.org/wikipedia/pt/thumb/3/35/Amazing_Fantasy_15.jpg/220px-Amazing_Fantasy_15.jpg',
  'https://m.media-amazon.com/images/I/513-C3l+M+L.jpg',
  'https://s2.glbimg.com/q_6KFWhw3XL6gymO7JeP4n5fK-w=/e.glbimg.com/og/ed/f/original/2019/02/26/imagem_3_john_romita_marvel.jpg'
]

for (var i = 0; i < listaQuadrinhos.length; i++) {
  document.write('<img class="quadrinhos" src=' + listaQuadrinhos[i] + '>')
}
