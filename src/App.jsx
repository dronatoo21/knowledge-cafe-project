import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/blogs'
import Bookmark from './components/bookmark/Bookmark'
import Header from './components/header/Header'

function App() {

  const [bookmark, setBookmark] = useState([]);
  const [read, setRead] = useState(0);

  const handleBookmark = blog => {
    const newBookmarks = [...bookmark, blog]
    setBookmark(newBookmarks);
  };

  const handleRead = (time) => {
    const newReadTime = read + time;
    setRead(newReadTime);
    console.log(newReadTime);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl gap-12 mx-auto'>
        <Blogs handleBookmark={handleBookmark} handleRead={handleRead}/>
        <Bookmark read={read} bookmark={bookmark}/>
      </div>
    </>
  )
}

export default App
