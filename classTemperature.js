class Temperature {
    _celcius;

    constructor(celcius) {
        this._celcius = celcius
    }

    get celcius() {
        return this._celcius
    }

    set celcius(celcius) {
        this._celcius = celcius
    }

    get fahrenheit() {
        return this.celcius * 1.8 + 32
    }

    get kenvin() {
        return this.celcius + 273.15
    }
}

function convertCToF(){
    let temperature = new Temperature()
    temperature.celcius = parseInt(prompt('Nhập độ C:'))
    alert(temperature.fahrenheit)
}

function convertCToK(){
    let temperature = new Temperature()
    temperature.celcius = parseInt(prompt('Nhập độ C:'))
    alert(temperature.kenvin)
}