import Traditional from './traditional.png'
import Comedy1 from './comedy1.jpg'
import Comedy2 from './comedy2.jpg'
import Concert12 from './concert12.jpg'
import Concert3 from './concert3.jpg'
import Lakhe from './lakhe.jpg'
import raraCup from './raraCup.jpg'
import pecSports from './pecSports.jpg'
const EventsData = [
    {
        id:crypto.randomUUID(),
        discoverImage:Traditional,
        imageTitle:'Cultural Dance',
        eventdate:'2025-02-18',
        eventLocation:'lakeside,pokhara',
        eventPrice:'Free',
        eventTime:'7pm onwards',
    },
    {
        id:crypto.randomUUID(),
        discoverImage:Comedy1,
        imageTitle:'Standup Comedy',
        eventdate:'2025-02-20',
        eventLocation:'Newroad,Pokhara',
        eventPrice:'Free',
        eventTime:'7pm onwards',
    },
    
    {
        id:crypto.randomUUID(),
        discoverImage:Concert12,
        imageTitle:'Nepthya live Show',
        eventdate:'2025-02-22',
        eventLocation:'Amarsingh Chowk',
        eventPrice:'Rs 200',
        eventTime:'7pm onwards',
    },
    {
        id:crypto.randomUUID(),
        discoverImage:raraCup,
        imageTitle:'Rara Gold Cup',
        eventdate:'2025-02-10',
        eventLocation:'Pokhara Stadium',
        eventPrice:'Rs 500',
        eventTime:'2pm onwards',
    },
    {
        id:crypto.randomUUID(),
        discoverImage:Comedy2,
        imageTitle:'Laughter Show',
        eventdate:'2025-02-16',
        eventLocation:'lakeside,pokhara',
        eventPrice:'Rs 150',
        eventTime:'7pm onwards',
    },
    {
        id:crypto.randomUUID(),
        discoverImage:Concert3,
        imageTitle:'Concert',
        eventdate:'2025-02-18',
        eventLocation:'Lakeside,pokhara',
        eventPrice:'Rs 300',
        eventTime:'7pm onwards',
    },
    {
        id:crypto.randomUUID(),
        discoverImage:Lakhe,
        imageTitle:'Lakhe Dance',
        eventdate:'2025-02-18',
        eventLocation:'lakeside,pokhara',
        eventPrice:'Rs 300',
        eventTime:'7pm onwards',
    },
  
    {
        id:crypto.randomUUID(),
        discoverImage:pecSports,
        imageTitle:'Pec Sports Meet',
        eventdate:'2025-01-15',
        eventLocation:'Pokhara Stadium',
        eventPrice:'Free',
        eventTime:'10am onwards',
    },
]

const getEventsData = () =>{
    return EventsData
}
export default getEventsData
