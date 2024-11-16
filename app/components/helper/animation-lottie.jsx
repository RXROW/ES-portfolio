" use client"

const { default: Lottie } = require("lottie-react");

const AnimationLottie = ({animationPath , width}) => {
const defualtOptions={
  loop:true,
  autoplay:true,
  animationData:animationPath,
  style:{
    width:"100%"
  }
}
};
return(
  <Lottie {...defualtOptions}/>
)
export default AnimationLottie;