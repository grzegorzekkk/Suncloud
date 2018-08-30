export class WeatherData {
    constructor(public tempAverage: number, public tempMin: number, public tempMax: number,
        public wind: number, public humidity: number, public dateTime: number) {
            
        this.tempAverage=Math.round(tempAverage);
        this.tempMax=Math.round(tempMax);
        this.tempMin=Math.round(tempMin);
    }

    getFormattedDate(): string {
        let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        return new Date(this.dateTime * 1000).toLocaleDateString("pl-PL", options);
    }
}