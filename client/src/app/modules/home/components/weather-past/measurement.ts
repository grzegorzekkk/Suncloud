export class Measurement {
    id: number;
    airHumidity: number;
    dateTime: string;
    rainfallLevel: number;
    soilHumidity: number;
    temperature: number;

    constructor() { }

    static fromJson(jsonString: any) {
        let measurement = new this;
        Object.assign(measurement, jsonString);
        return measurement;
    }

    getLocaleDateLong(): string {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(this.dateTime).toLocaleDateString("pl-PL", options);
    }

    getLocaleTime(): string {
        return new Date(this.dateTime).toLocaleTimeString();
    }

    getLocaleDateTime(): string {
        return this.getLocaleTime() + ' ' + new Date(this.dateTime).toLocaleDateString();
    }
}