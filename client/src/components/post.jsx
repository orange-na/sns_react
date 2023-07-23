import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';


function Post(props) {


    return (
        <div className='bg-white p-5 rounded-xl mb-10'>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center justify-between gap-3'>
                    <div className='flex'>
                        <img src="img/Login-bg.jpg" alt="" className='object-cover w-12 h-12 rounded-full' />
                        <div className="flex justify-center flex-col text-base ml-3">
                            <span>Jhon Mickle</span>
                            <span>1 min ago</span>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <MoreHorizOutlinedIcon />
                    </div>
                </div>
                <p className='text-base'>{ props.post.desc }</p>
                <img src={ props.post.img } alt="" className='object-cover w-full rounded-md'/>
                <div className='flex gap-10'>
                    <div className='text-base flex gap-2 items-center'>
                        <FavoriteBorderOutlinedIcon />
                        <span>Likes</span>
                    </div>
                    <div className='text-base flex gap-2 items-center'>
                        <TextsmsOutlinedIcon />
                        <span>Comments</span>
                    </div>
                    <div className='text-base flex gap-2 items-center'>
                        <ShareOutlinedIcon />
                        <span>Share</span>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Post
  