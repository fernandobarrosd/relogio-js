const clock = new Vue({
    el: "#app",
    data: {
        hours: 0,
        minutes: 0,
        seconds: 0
    },
   methods: {
    createDate() {
        const date = new Date();
        const dtHoras = date.getHours();
        const dtMinutos = date.getMinutes();
        const dtSegundos = date.getSeconds();
        return [dtHoras, dtMinutos, dtSegundos];
    },
    
   },
   beforeCreate() {
    setInterval(() => {
        const date = this.createDate();
        this.hours = date[0];
        this.minutes = date[1];
        this.seconds = date[2];
        
    })
   },

   
})