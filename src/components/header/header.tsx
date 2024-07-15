import "./header.scss";
import { FaUsersRays } from "react-icons/fa6";

const header = () => {
  return (
    <div className="header">
      <div className="logo">
        <FaUsersRays></FaUsersRays>그림판
      </div>
    </div>
  );
};

export default header;
