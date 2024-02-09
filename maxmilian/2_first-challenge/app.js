Vue.createApp({
  data() {
    return {
      name: `Caio Vieira`,
      url_nasa: `https://apod.nasa.gov/apod/image/2402/Rosette2024newt533mmcopy.jpg`
    }
  },
  methods: {
    getAge() {
      let today = new Date();
      let birthDate = new Date('2002-08-21');
      let yearsDifference = today.getFullYear() - birthDate.getFullYear();
      let monthDifference = today.getMonth() - birthDate.getMonth();
      let dayDifference = today.getDate() - birthDate.getDate();

      if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        yearsDifference--;
      }

      return yearsDifference;
    },

    getAgePlus5() {
      return this.getAge() + 5;
    },

    getRandomNumber(){
      return Math.random();
    }
  }
}).mount("#assignment")