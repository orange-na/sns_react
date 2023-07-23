
function Story() {

    const stories = [
        {
            id: 1,
            name: 'Jhon Micle',
            img: 'img/story.jpg',
        },
        {
            id: 2,
            name: 'Jhon Micle',
            img: 'img/story.jpg',
        },
        {
            id: 3,
            name: 'Jhon Micle',
            img: 'img/story.jpg',
        },
        {
            id: 4,
            name: 'Jhon Micle',
            img: 'img/story.jpg',
        },
        {
            id: 5,
            name: 'Jhon Micle',
            img: 'img/story.jpg',
        },
    ]

    return (
        <div className="mb-7 flex gap-3">
            <div className="relative">
                <img src='img/Login-bg.jpg' alt="" className="min-w-[200px] h-[300px] object-cover rounded-lg"/>
                <span className="absolute bottom-1 left-1 text-white text-xl">Jone Micle</span>
                <button className="absolute bottom-10 left-4 bg-blue-500 rounded-full w-7 h-7 flex items-center justify-center text-white text-2xl">+</button>
            </div>
            <div className="flex gap-3">
                {stories.map((story) => {
                    return (
                        <div className="relative" key={ story.id }>
                            <img src={ story.img } alt="" className="min-w-[200px] h-[300px] object-cover rounded-lg"/>
                            <span className="absolute bottom-1 left-1 text-white text-xl">{ story.name }</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
  }
  
  export default Story
  