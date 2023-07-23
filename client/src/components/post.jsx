import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Comments from './comments';


function Post(props) {

    const [liked, setliket] = useState(false);
    const [commented, setCommented] = useState(false);
    const [countLiked, setCountLiket] = useState(0);
    const [countComment, setcountComment] = useState(0);

    const handleLiked = () => {
        setliket(!liked);
        if(!liked) {
            setCountLiket((prev) => prev + 1);
        }else{
            setCountLiket((prev) => prev + -1);
        }

    }

    const handleComment = () => {
        setCommented(!commented);
    }


    return (
        <div className='bg-white p-5 rounded-xl mb-10'>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center justify-between gap-3'>
                    <div className='flex'>
                        <img src="/img/Login-bg.jpg" alt="" className='object-cover w-12 h-12 rounded-full' />
                        <Link to={ `/profile/${ props.post.userId }` }>
                            <div className="flex justify-center flex-col text-base ml-3">
                                <span>Jhon Mickle</span>
                                <span>1 min ago</span>
                            </div>        
                        </Link>
                    </div>
                    <div className="flex gap-3">
                        <MoreHorizOutlinedIcon />
                    </div>
                </div>
                <p className='text-base'>{ props.post.desc }</p>
                <img src={ props.post.img } alt="" className='object-cover w-full rounded-md max-h-[500px]'/>
                <div className='flex gap-10'>
                    <div className='text-base flex gap-2 items-center cursor-pointer' onClick={ handleLiked }>
                        { liked ?  <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                        <span> { countLiked } Likes</span>
                    </div>
                    <div className='text-base flex gap-2 items-center cursor-pointer' onClick={ handleComment }>
                        <TextsmsOutlinedIcon />
                        <span> { countComment } Comments</span>
                    </div>
                    <div className='text-base flex gap-2 items-center'>
                        <ShareOutlinedIcon />
                        <span>Share</span>
                    </div>
                </div>
                {commented ? <Comments post={ props.post }/> : null}
            </div>
        </div>
    )
  }
  
  export default Post
  