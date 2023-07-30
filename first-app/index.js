new Vue({
  el: '#app',
  data: {
    titulo: 'O que vc digitar no input acima aparecerá aqui'
  },
  methods: {
    changeTitle(event){
      this.titulo = event.target.value
    }
  }
})