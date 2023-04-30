import { FaTimes } from "react-icons/fa";

function MobileDropDown ({show})  {
  return (
  <div className="mobile-fade">
      <FaTimes className="close" onClick={show} />
      <ul className="mobile-list">
        <li>Collection</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
  </div>
  )
}

export default MobileDropDown
