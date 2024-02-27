const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      input: '',
      confirmedInput: ''
    };
  },
  
  methods: {
    showAlert() {
      alert('Hello World!');
    },

    registerInput(event) {
      this.input = event.target.value;
    },

    showInput() {
      this.confirmedInput = this.input;
    }
  }
});

app.mount("#assignment");