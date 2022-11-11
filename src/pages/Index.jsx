import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../state/postSlice";
import PostList from "../components/PostList";
import Loading from "../components/Loading";

const Index = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.posts);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const deleteRecord = useCallback(
    (id) => dispatch(deletePost(id)),
    [dispatch]
  );

  return (
    <Loading loading={loading} error={error}>
      <PostList
        data={records}
        deleteRecord={deleteRecord}
        isLoggedIn={isLoggedIn}
      />
    </Loading>
  );
};

export default Index;
