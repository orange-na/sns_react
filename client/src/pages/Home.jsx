import Posts from "../components/posts"
import Story from "../components/story"

function Home() {

    return (
      <div className="basis-1/2 bg-gray-200 text-6xl overflow-scroll pl-8 pt-5">
        <Story />
        <Posts />

      </div>
    )
  }
  
  export default Home
  