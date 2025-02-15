import musicImage from './music.png'
import holidayImage from './holidays.png'
import businessImage from './business.png'
import nightlifeImage from './nightlife.png'
import culturalImage from './cultural.png'
import exhibitionImage from './exhibition.png'
import comedyImage from './comedy.png'
import educationImage from './education.png'
import sportsImage from './sports.png'

const IconsData = [
    {
        id:crypto.randomUUID(),
        IconImage:musicImage,
        title:'Music',
        route : '/concert'
    },
    {
        id:crypto.randomUUID(),
        IconImage:holidayImage,
        title:'Holidays',
        route : '/comedy'
    },
    {
        id:crypto.randomUUID(),
        IconImage:hobbieImage,
        title:'Hobbies',
        route : '/comedy'
    },
    {
        id:crypto.randomUUID(),
        IconImage:businessImage,
        title:'business',
        route : '/comedy'
    },
    {
        id:crypto.randomUUID(),
        IconImage:nightlifeImage,
        title:'nightLife',
        route : '/comedy'
    },
    {
        id:crypto.randomUUID(),
        IconImage:culturalImage,
        title:'Cultural Events',
    },
    {
        id:crypto.randomUUID(),
        IconImage:exhibitionImage,
        title:'Exhibition',
    },
    {
        id:crypto.randomUUID(),
        IconImage:educationImage,
        title:'Education',
    },
    {
        id:crypto.randomUUID(),
        IconImage:sportsImage,
        title:'Sports',
    },  
    {
        id:crypto.randomUUID(),
        IconImage:comedyImage,
        title:'Comedy',
    },  
]

const getIconsData = () =>{
    return IconsData
}
export default getIconsData



// function getIconsImage(name){
//     return new URL(`../assests/Explore_icons/${name}`,import.meta.url).href
// }

// export {getIconsImage}