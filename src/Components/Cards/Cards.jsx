import './Cards.css'


function Cards(props) {
  return (
    <div className="col-12 col-lg-4 mb-4 mx-lg-2">
      <div className="card bg-black border-0">
        {props.children}
      </div>
    </div>
  );
}

export default Cards;
