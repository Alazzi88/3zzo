import React from "react";

const MediaControlCard = () => {

  return (
    <div>
      <div
        style={{
          width:"80%" ,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "50px",
          padding: "50px",
        }}
      >
        <img src="img/html.png" alt="" width={300} height={200} />
        <img src="img/css.png" alt="" width={300} height={200} />
        <img src="img/javascript.png" alt="" width={300} height={200} />
        <img src="img/bootstrap.png" alt="" width={300} height={200} />
        <img src="img/react.png" alt="" width={300} height={200} />
        <img src="img/flutter.png" alt="" width={300} height={200} />
        <img src="img/firebase.png" alt="" width={300} height={200} />
      </div>

    </div>
  );
};

export default MediaControlCard;



// 