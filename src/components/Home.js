
import BlogList from "../blogList";
import useFetch from "../useFetch";


const Home = () => {
  
  const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs");
  //  const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  //  }
   
   
    return (
      <div className="home">
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
         {blogs && <BlogList blogs={blogs} title="All Blogs" ></BlogList>}
         {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'momo')} title="Momo's Blog"></BlogList> */}
        
      </div>
    );
  } 
  export default Home;