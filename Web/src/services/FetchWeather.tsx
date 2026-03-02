import type { WeatherData } from "../types/weather"

export default async function fetchWeather(location: string): Promise<WeatherData> {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    const url = `https://api.weatherapi.com/v1/current.json?`

    try {
        const response = await fetch(`${url}key=${apiKey}&q=${location}`)

        if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.error.message || 'Failed to fetch weather data')
        }

        const data: WeatherData = await response.json()
        return data

    } catch (error) {
        throw error 
    }
}