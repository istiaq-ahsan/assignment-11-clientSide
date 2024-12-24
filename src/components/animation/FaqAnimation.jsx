import Lottie from "lottie-react";
import faq from "../../assets/Faq.json"

const FaqAnimation = () => {
    return (
        <>
            <Lottie className="h-96" animationData={faq}></Lottie>
        </>
    );
};

export default FaqAnimation;