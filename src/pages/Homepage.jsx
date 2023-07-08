import cat from "../assets/cat.jpg";
import tae from "../assets/tae.jpg";

function Homepage() {
  return (
    <>
      <div>
        <div>น้องแงว</div>
        <img src={cat} />
      </div>
      <div>
        <div>น้องเง้</div>
        <img src={tae} />
      </div>
    </>
  );
}

export default Homepage;
