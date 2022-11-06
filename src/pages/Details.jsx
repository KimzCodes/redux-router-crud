import usePostDetails from "../hooks/use-post-details";
import Loading from "../components/Loading";

const Details = () => {
  const { loading, error, record } = usePostDetails();

  return (
    <div>
      <Loading loading={loading} error={error}>
        <p>Title: {record?.title}</p>
        <p>Description: {record?.description}</p>
      </Loading>
    </div>
  );
};

export default Details;
