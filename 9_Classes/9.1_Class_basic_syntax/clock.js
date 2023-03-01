// Перепишите класс
/* Класс Clock написан в функциональном стиле. 
Перепишите его, используя современный синтаксис классов.
*/
class Clock {
    constructor({template}) {
        this.template = template;
    }

    render() {
        let nowDate = new Date();
        let hours = nowDate.getHours();
        let minutes = nowDate.getMinutes();
        let seconds = nowDate.getSeconds();

        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;

        let output = this.template
            .replace("h", hours)
            .replace("m", minutes)
            .replace("s", seconds);
        
        console.log(output);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }

    stop() {
        clearInterval(this.timer);
    }
}

let clock = new Clock({template: "h:m:s"});
clock.start();