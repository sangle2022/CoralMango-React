import "./cardList.css";
function CardList({ data }) {
  return (
    <div className="card-list">
      {data.map((item, index) => (
        <div key={index} className="card">
          <img
            src="https://static.vecteezy.com/system/resources/previews/014/194/232/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
            alt=""
          />
          <h3>{item.name}</h3>
          <p>{item.occupation}</p>
          <p> {item.age}</p>
        </div>
      ))}
    </div>
  );
}

export default CardList;
