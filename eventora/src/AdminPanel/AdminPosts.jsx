import React from 'react'
import Traditional from "../assets/DiscovereventData/traditional.png";
import Festival from "../assets/homepage-img5.jpg";
import raraCup from "../assets/DiscovereventData/raraCup.jpg"
import comedy2 from "../assets/DiscovereventData/comedy2.jpg"
import concert1 from '../assets/DiscovereventData/concert12.jpg'
import '../App.css'
import { MdDelete, MdEdit } from "react-icons/md";
import { IoEye } from "react-icons/io5";

function AdminPosts() {

    const AdminSubContent = [
        {
            id: crypto.randomUUID(),
            title: 'Cultural Dance ',
            BannerImg: Traditional,
            Category: 'culture',
            Location: 'lakeside,Pokhara',
            Organizer: 'The night club',
            StartDate: '2025-02-12',
            EndDate: '2025-02-20',
            Price: 'Rs 250'
        },
        {
            id: crypto.randomUUID(),
            title: 'Color festival',
            BannerImg: Festival,
            Category: 'entertainment',
            Location: 'lakeside,Pokhara',
            Organizer: 'Pec',
            StartDate: '2025-02-12',
            EndDate: '2025-02-20',
            Price: 'free'
        },
        {
            id: crypto.randomUUID(),
            title: 'Rara Gold Cup',
            BannerImg: raraCup,
            Category: 'Sports',
            Location: 'Pokhara Stadium',
            Organizer: 'Saraha Club',
            StartDate: '2025-02-05',
            EndDate: '2025-02-25',
            Price: 'Rs 500'
        },
        {
            id: crypto.randomUUID(),
            title: 'Laughter Show',
            BannerImg: comedy2,
            Category: 'comedy',
            Location: 'Lakeside,pokhara',
            Organizer: 'The Night Club',
            StartDate: '2025-02-20',
            EndDate: '2025-02-20',
            Price: 'Rs 200'
        },
        {
            id: crypto.randomUUID(),
            title: 'Nepthya live Show',
            BannerImg: concert1,
            Category: 'concert',
            Location: 'Amarsingh Chowk',
            Organizer: 'The Night Club',
            StartDate: '2025-02-22',
            EndDate: '2025-02-22',
            Price: 'Rs 200'
        },
    ]
    return (
        <div className='mt-5 w-[80vw] h-full'>
            <div className='text-lg font-medium'>
                <span>All Events</span>
            </div>

            <section className='grid grid-cols-[repeat(9,_minmax(100px,_1fr))] place-content-evenly w-[98%] py-[10px] text-lg text-[#5e9ff5] border-t-2 border-b-2'>
                <span className='text-[#3a3a3a]'>Title</span>
                <span>Banner Img</span>
                <span className='text-[#3a3a3a]'>Category</span>
                <span >Location</span>
                <span className='text-[#3a3a3a]'>Organizer</span>
                <span >Start Date</span>
                <span className='text-[#3a3a3a]'>End Date</span>
                <span >Price</span>
                <span className='text-[#3a3a3a]'>Actions</span>
            </section>

            <section className='w-[98%] flex flex-col justify-evenly items-center relative h-full text-[#5e9ff5] '>
                {AdminSubContent.map(content => (
                    <div key={content.id} className='grid grid-cols-[repeat(9,_minmax(100px,_1fr))] justify-evenly w-full py-[10px]  text-base  text-wrap break-words text-ellipsis overflow-hidden capitalize border-b'>

                        <div className=' text-[#3a3a3a] h-full'>
                            <span>
                                {content.title}
                            </span>
                        </div>

                        <div className='h-full'>
                            <img src={content.BannerImg} alt="" className='w-[80px] h-[50px]' />
                        </div>
                        <div className='text-[#3a3a3a] h-full'>
                             <span>
                                {content.Category}
                            </span>
                        </div>

                        <div className='w-[100px] h-full '>
                             <span>
                                {content.Location}
                            </span>
                        </div>
                        <div className='text-[#3a3a3a] w-[100px] h-full'>
                             <span>
                                {content.Organizer}
                            </span>
                        </div>
                        <div className='h-full'>
                             <span>
                                {content.StartDate}
                            </span>
                        </div>
                        <div className='text-[#3a3a3a] h-full'>
                            <span>
                                {content.EndDate} 
                            </span>
                        </div>
                        <div className=' h-full'>
                            <span>
                                {content.Price}
                            </span>
                        </div>

                        <div className=' w-[120px] flex items-center justify-center pr-12 pb-6 text-[#3a3a3a]'>

                            <ul className='flex gap-2'>
                                <li className='border border-[#3a3a3a] rounded-full p-1 cursor-pointer hover:text-green-600 hover:border-[#16a34a]'><IoEye size={20} /></li>
                                {/* <li className='border border-[#3a3a3a] rounded-2xl p-1 cursor-pointer hover:text-blue-500 hover:border-[#3b82f6]'><MdEdit size={20} /></li> */}
                                <li className='border border-[#3a3a3a] rounded-2xl p-1 cursor-pointer hover:text-[#ff3030] hover:border-[#ff3030]'><MdDelete size={20} /></li>
                            </ul>
                        </div>
                    </div>

                ))}
            </section>


        </div>
    )
}

export default AdminPosts