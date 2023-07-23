import Post from "./post"

function Posts() {

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
        <div>
            {posts.map((post) => {
                return (
                    <Post post={ post } key={ post.userId }/>
                )
            })}
        </div>
    )
  }
  
  export default Posts
  