import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import classes from "./styles.module.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  async function fetchListOfBlogs() {
    setPending(true);
    const response = await axios.get("http://localhost:5000/api/blogs");
    const result = await response.data;

    if (result && result.blogList && result.blogList.length) {
      setBlogList(result.blogList);
      setPending(false);
    } else {
      setPending(false);
      setBlogList([]);
    }
  }

  async function handleDeleteBlog(getCurrentId) {
    const response = await axios.delete(
      `http://localhost:5000/api/blogs/delete/${getCurrentId}`
    );
    const result = await response.data;

    if (result?.message) {
      fetchListOfBlogs();
      // navigate(0)
    }
  }

  function handleEdit(getCurrentBlogItem) {
    console.log(getCurrentBlogItem);
    navigate("/add-blog", { state: { getCurrentBlogItem } });
  }

  useEffect(() => {
    fetchListOfBlogs();
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1>Blog List</h1>
      {pending ? (
        <h1>Loading Blogs ! Please wait</h1>
      ) : (
        <div className={classes.blogList}>
          {blogList && blogList.length ? (
            blogList.map((blogItem) => (
              <div className={classes.note} key={blogItem._id}>
                <h1>{blogItem.title}</h1>
                <p>{blogItem.description}</p>
                <button><FaEdit onClick={() => handleEdit(blogItem)} size={20} /></button>
                <button><FaTrash
                  onClick={() => handleDeleteBlog(blogItem._id)}
                  size={20}
                /></button>
                
              </div>
            ))
          ) : (
            <h3>No Blogs Added</h3>
          )}
        </div>
      )}
    </div>
  );
}
