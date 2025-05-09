import { useState } from "react";
import south_indian from "./south_indian.jpg";
import breads from "./breads.jpg";

const Example3 = () => {
  const [img, setImage] = useState(south_indian);//img : this variable holds the current image being shown — initially set to south_indian.

  //setImage : it is a function used to update that image.

  const handleClick = () => {
    setImage(prev => (prev === south_indian ? breads : south_indian));
  };

  return (
    <div>
      <img src={img} alt="Food item" width="200px" height="200px" />
      <br />
      <button onClick={handleClick}>Click Me to change the image!</button>
    </div>
  );
};

export default Example3;
