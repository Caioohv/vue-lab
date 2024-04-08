const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
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
      this.lastName = '';
    }
  },
  // computed properties are cached based on their dependencies
  computed: {
    fullname() {
      if(this.name === '' || this.lastName === ''){
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  // watch properties are not cached
  watch: {
    // will be used automatically when name changes
    // name(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
  }
});

app.mount('#events');
