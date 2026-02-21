import weatherImages from "../components/weatherImgs";

export default function FetchImg(weather: string) {
    const weatherType = weather; 
   
    const weatherImgUrl = weatherImages.find(weatherObj => weatherType === weatherObj.weather)
    if (!weatherImgUrl){
        throw new Error("Something Went Wrong");
    }
    return weatherImgUrl
}