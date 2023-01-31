import { useState } from "react";
import { Loader } from "./style/Loader";


function LoadingPage({
  txt,
  txtSize,
  transitionTime,
  bgColor,
  fontColor,
  loadingColor,
  isLoading,
  delayTime,
}) {
  const [result, setResult] = useState("opacity-100");

  if (isLoading === false) {
    setTimeout(() => {
      setResult("animate-wiggle opacity-0");
    }, delayTime);
  }

  const backgroundColor = {
    backgroundColor: bgColor,
  };

  return (
    <div
      className={`text-white flex flex-col justify-center items-center h-full w-full fixed bg-black z-50  ${result}`}
      style={backgroundColor}
    >
      <Loader
        txt={txt}
        txtSize={txtSize}
        transitionTime={transitionTime}
        fontColor={fontColor}
        loadingColor={loadingColor}
      >
        {txt}
      </Loader>
    </div>
  );
}

export default LoadingPage;
