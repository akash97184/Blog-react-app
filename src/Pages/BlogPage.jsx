import { React, useContext, useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {loading, setLoading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
            console.log("Erro aagya in blog id wali call me");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname])

  return (
    <div className=" relative max-w-2xl w-full mx-auto mb-4" >
        <Header/>
        <div className=' mt-[5rem]'>
            <button 
            className='rounded-md border-2 px-4 py-1'
            onClick={() => navigation(-1)}>
                Back
            </button>
        </div>

        {
            loading ? 
            (<div className="min-h-[80vh] w-full flex justify-center items-center">
                <p className="text-center font-bold text-3xl" >Loading</p>
            </div>) :

            blog ? 
            (<div className=' '>
                <BlogDetails post={blog} />
                <hr className=' mt-6'/>
                <h2 className=' mt-6 text-2xl font-bold '> Related Blogs :-</h2>
                {
                    relatedBlogs.map( (post) => (
                        <div key={post.id} >
                            <BlogDetails post={post} />
                        </div>
                    )  )
                }
            </div>) :

            ( <div>
                <p>Blog Not Found</p>
            </div>)

        }
    </div>
  )
}

export default BlogPage