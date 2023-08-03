new Vue({
  el: '#desafio',
  data: {
    name: 'Caio Vieira',
    age: '20',
    link: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000'
  },
  methods: {
    getRandomNumber() {
      return Math.random()
    }
  }
})