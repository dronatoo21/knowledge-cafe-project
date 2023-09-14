import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleBookmark, handleRead}) => {
    const {Title, Cover, Reading_Time, Posted_Date, Author, Image, Hashtags} = blog; 
    return (
        <div className='px-8 my-8 border-2 pb-4'>
            <img  src={Cover} alt="img" />
            <div className='flex justify-between items-center py-6'>
                <div className='flex gap-8'>
                    <img className=' w-14 rounded-full' src={Image} alt="img" />
                    <div>
                        <h1 className=' text-2xl'>{Author}</h1>
                        <p>{Posted_Date}</p>
                    </div>
                </div>
                <div>
                    <span>{Reading_Time} min read</span>
                    <button onClick={() => handleBookmark(blog)} className='ml-3'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl mb-4'>{Title}</h1>
            <p>
                {
                    Hashtags.map((hash,idx) => <span  key={idx}><a href="#">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleRead(Reading_Time)} className='mt-2'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleRead: PropTypes.func.isRequired,
}
export default Blog;