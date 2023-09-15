import Bookmarks from "../bookmarks/Bookmarks";
import PropTypes from 'prop-types';

const Bookmark = ({bookmark, read}) => {
    return (
        <div className="w-2/5 my-8 text-center">
            <h1 className="text-2xl">Reading time : {read}</h1>
            
           <h1 className="text-2xl">BookMark {bookmark.length}</h1> 
           {
                bookmark.map((bookmaks,idx) => <Bookmarks bookmaks={bookmaks} key={idx} ></Bookmarks>)
           }
        </div>
    );
};


Bookmark.propTypes = {
    bookmark: PropTypes.array.isRequired,
    read: PropTypes.number.isRequired,
}
export default Bookmark;