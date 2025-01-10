import Traditional from '../../assets/DiscovereventData/traditional.png'


const EventsData = [
    {
        id:crypto.randomUUID(),
        discoverImage:Traditional,
        imageTitle:'Cultural Dance',
        eventdate:'December 22',
        eventLocation:'lakeside,pokhara',
        eventPrice:'Free',
        eventTime:'7pm onwards',
    },
   
]

const getEventsData = () =>{
    return EventsData
}
export default getEventsData
