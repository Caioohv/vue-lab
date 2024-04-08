const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    clearInput(){
      this.name = '';
    }
  },
  // computed properties are cached based on their dependencies
  computed: {
    fullName() {
      if(this.name === ''){
        return '';  
      }
      return this.name + ' Vieira'
    }
  }
});

app.mount('#events');
