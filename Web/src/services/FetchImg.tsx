import weatherImages from "../components/weatherImgs";

export default function FetchImg(weather: string) {
    const weatherType = weather; 
    const imgs: string[] = []
   
    // const weatherImgUrl = weatherImages.find(weatherObj => weatherType === weatherObj.weather)

    for (let index = 0; index < weatherImages.length; index++) {
        const weatherImgUrl = weatherImages[index];
        if(weatherImgUrl.weather === weatherType){
            imgs.push(weatherImgUrl.img)
        }
    }
    const randomIndex = Math.floor(Math.random() * (imgs.length));
    return imgs[randomIndex]
}
