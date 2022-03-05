const app = Vue.createApp({
  data() {
    return { 
      text: 'Coachability quiz',
      question1: false,
      question2: false,
      question3: false,
      coachabilityResult: '',
      question1text: 'You are choosing counseling for yourself',
      question2text: 'You believe that your own decisions fully impact your reality',
      question3text: 'You are willing to make time for yourself daily'
    }
  }, 
  methods: {
    checkStatus() {
      if (!this.question1) {
        this.coachabilityResult = 'You have to choose counseling yourself, do not force yourself nor your loved ones into something they are not ready for';
      } else if (!this.question2) {
        this.coachabilityResult = 'Self belief is key, if you do not believe in yourself, others cannot believe in you';
      } else if (!this.question3) {
        this.coachabilityResult = 'Daily time to reflect and work on yourself is an essential sacrifice for growth.';
      } else {
        this.coachabilityResult = 'You are ready!';
      }
    }
  }
});

app.mount('#coachability');