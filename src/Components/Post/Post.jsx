const Post = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Post</th>
        </tr>
      </thead>
      <tbody>
        {props.parentEntries.map((entry) => {
          return (
            <thead>
              <tr>
                <td>{entry.name}</td>
              </tr>
              <tr>
                <td>{entry.post}</td>
              </tr>
              <button type="button" class="btn btn-success">Like</button>
              <button type="button" class="btn btn-danger">DisLike</button>
            </thead>
          );
        })}
      </tbody>
    </table>
  );
};

export default Post;
