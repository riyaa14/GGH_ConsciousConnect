function posts(props) {
  return (
    <>
      <div className="row">
        <div className="post-card">
          <div className="div1">
            <h4>{props.username}</h4>
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default posts;
