import { useState, useEffect } from "react";

const useFetchPosts = (url) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setPosts(data.posts);
        setLoading(false);
      } else {
        setError("Error fetching posts");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setError("Error fetching posts");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading, error, setPosts };
};

export default useFetchPosts;
