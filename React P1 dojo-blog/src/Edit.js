import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [isPending, setIspending] = useState(true);
  const [blog, setBlog] = useState("");
  const [error, setError] = useState(null);
  //   const {
  //     data: blog,
  //     error,
  //     isPending,
  //   } = useFetch("http://localhost:8000/blogs/" + id);
  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(`http://localhost:8000/blogs/${id}`, {
        signal: abortCont.signal,
      })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          const blog = {
            title: data.title,
            body: data.body,
            author: data.author,
            id: data.id,
          };
          setAuthor(blog.author);
          setEditedTitle(blog.title);
          setEditedBody(blog.body);
          setBlog(data);
          setIspending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIspending(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, []);

  const history = useHistory();
  const [author, setAuthor] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [editedBody, setEditedBody] = useState("");

  //編輯文章
  const handleEdit = () => {
    const editedBlog = { title: editedTitle, body: editedBody };
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedBlog),
    }).then(() => {
      setIspending(false);
      history.push("/");
    });
  };

  return (
    <div className="blog-details-edit">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <input
            value={editedTitle}
            required
            onChange={(e) => {
              setEditedTitle(e.target.value);
            }}
          />
          <p>Written by {author}</p>
          <textarea
            cols="60"
            rows="10"
            className="blog-body"
            value={editedBody}
            required
            onChange={(e) => {
              setEditedBody(e.target.value);
            }}
          />
          <button className="update-btn" onClick={handleEdit}>
            Update
          </button>
        </article>
      )}
    </div>
  );
};

export default Edit;
