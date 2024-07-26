import { IoMdCall } from 'react-icons/io';
import "./call.css"
const CallButton = () => {
  return (
    <a href="tel:919289615376" className="call-button">
      <IoMdCall size={30} />
    </a>
  );
};

export default CallButton;
