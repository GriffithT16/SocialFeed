import CustomButton from "../CustomButton/CustomButton";


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
            <tbody>
              <tr>
                <td>{entry.name}</td>
              </tr>
              <tr>
                <td className="input-group date">{entry.post}</td>
              </tr>
                <CustomButton />
            </tbody>
          ); 
        })}
      </tbody>
    </table>
  );
};

export default Post;
