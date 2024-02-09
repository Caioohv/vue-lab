//! PURE JS VERSION 
/*

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement('li');
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = "";
}

buttonEl.addEventListener('click', addGoal); 

*/
//& VUE JS VERSION

Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: '',
      vueLink: 'https://vuejs.org/',
      markup: '<h2>Vue JS</h2>'
    }
  },
  methods: {
    addGoal() {
      if(this.enteredValue === '') return
      this.goals.push(this.enteredValue)
      this.enteredValue = ''
    }
  }
}).mount("#app")