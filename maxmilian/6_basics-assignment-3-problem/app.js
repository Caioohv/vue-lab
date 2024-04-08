const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      text: ``
    };
  },
  methods: {
    add(number){
      this.counter += number
    }
  },
  computed: {
    textComputed(){
      if(this.counter < 37)
        return 'Not there yet'

      if(this.counter == 37) 
        return `Exactly!`

      if(this.counter > 37){
        return 'Too much!'
      }
    },
  },
  watch: {
    textComputed(){
      if(this.counter > 37){
        setTimeout(()=>{
          that.counter = 0
        }, 5000)
      }
    }
  }
});

app.mount('#assignment');
