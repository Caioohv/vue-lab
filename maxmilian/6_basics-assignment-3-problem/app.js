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
      return this.text
    },
  },
  watch: {
    counter(){
      if(this.counter < 37)
        this.text = 'Not there yet'

      if(this.counter == 37) 
        this.text = `Exactly!`

      if(this.counter > 37){
        this.text = 'Too much!'
        const that = this;
        setTimeout(()=>{
          that.counter = 0
        }, 5000)
      }
        

      
    }
  }
});

app.mount('#assignment');
