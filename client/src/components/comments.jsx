import { Link } from 'react-router-dom'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';



function Comments(props) {

    const comments = [
        {
            id: 'Alex Dhido',
            userId: 1,
            profilePic: '/img/Login-bg.jpg',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, unde.',
            img: '',
        },
        {
            id: 'Jhon Micle',
            userId: 2,
            profilePic: '/img/Login-bg.jpg',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, unde.',
            img: '',
        },
    ]

    return (
        <div className="text-base flex flex-col gap-8">
            <div className="flex justify-between gap-3">
                <img src="/img/Login-bg.jpg" alt="" className='object-cover w-12 h-12 rounded-full' />
                <input type="text" placeholder="Write a comment" className="border border-gray-300 rounded-lg flex-grow px-3"/>
                <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">Sent</button>
            </div>
            {comments.map((comment) => {
                return (
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center justify-between gap-3'>
                            <div className='flex'>
                                <img src="/img/Login-bg.jpg" alt="" className='object-cover w-12 h-12 rounded-full' />
                                <Link to={ `/profile/${ comment.userId }` }>
                                    <div className="flex justify-center flex-col text-base ml-3">
                                        <span>{ comment.id }</span>
                                        <span>1 min ago</span>
                                    </div>        
                                </Link>
                            </div>
                            <div className="flex gap-3">
                                <MoreHorizOutlinedIcon />
                            </div>
                        </div>
                        <p className='text-base'>{ comment.desc }</p>
                        <img src={ comment.img } alt="" className='object-cover w-full rounded-md max-h-[500px]'/>
                    </div>

                )
            })}
        </div>
    )
  }
  
  export default Comments
  