import Posts from "../components/posts"
import Story from "../components/story"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Post from "../components/post";

function Profile() {


    const posts = [
        {
            id: 'Jhon Micle',
            userId: 1,
            profilePic: 'img/Login-bg.jpg',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, unde.',
            img: '/img/story.jpg',
        },
        {
            id: 'Jhon Micle',
            userId: 2,
            profilePic: 'img/Login-bg.jpg',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, unde.',
            img: '/img/story.jpg',
        },
        {
            id: 'Jhon Micle',
            userId: 3,
            profilePic: 'img/Login-bg.jpg',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, unde.',
            img: '/img/story.jpg',
        }
    ]


    return (
        <div className="basis-1/2 bg-gray-200 text-6xl overflow-scroll pl-8 pt-5">
            <div className="relative">
                <img src="/img/story.jpg" alt="" className="w-full max-h-[300px] object-cover"/>
                <img src="/img/Login-bg.jpg" alt="" className="w-[250px] h-[250px] object-cover rounded-full absolute top-[175px] left-[calc(50%-125px)]"/>
            </div>
            <div className="bg-white mt-6 mb-6 rounded-xl max-w-[850px] m-auto text-base pt-[120px] pb-[50px] px-[30px] flex flex-col gap-6">
                <p className="text-center font-bold text-3xl">Jhon Micle</p>
                <div className="flex justify-between">
                    <div className="basis-1/3">
                        <a href="/"><FacebookOutlinedIcon sx={{ fontSize: 40 }}/></a>
                        <a href="/"><InstagramIcon sx={{ fontSize: 40 }} /></a>
                        <a href="/"><TwitterIcon sx={{ fontSize: 40 }} /></a>
                        <a href="/"><LinkedInIcon sx={{ fontSize: 40 }} /></a>
                        <a href="/"><YouTubeIcon sx={{ fontSize: 40 }} /></a>
                    </div>
                    <div className="flex gap-10 basis-1/3 justify-center">
                        <div>
                            <LocationOnOutlinedIcon />
                            <span>USA</span>
                        </div>
                        <div>
                            <LanguageOutlinedIcon />
                            <span>Yuto.dev</span>
                        </div>
                    </div>
                    <div className="flex gap-7 basis-1/3 justify-end">
                        <EmailOutlinedIcon />
                        <MoreVertOutlinedIcon />    
                    </div>
                </div>
                <button className="py-2 px-4 bg-blue-500 text-white rounded-lg inline">Follow</button>
            </div>
            <div className="max-w-[850px] m-auto">
                {posts.map((post) => {
                    return (
                        <Post post={ post } key={ post.userId }/>
                    )
                })}
            </div>
        </div>
    )
  }
  
  export default Profile
  