export type WeatherData = {
    location: {
        name: string,
        region: string,
        country: string,    
        localtime: string
    },

    current: {
        "temp_c": number,
        "temp_f": number,
        "is_day": number,
        "condition": {
            "text": string,
            "icon": string,
            "code": number
        },
        "wind_kph": number,
        "humidity": number,
        "feelslike_c": number,
        "cloud": number
    }
}