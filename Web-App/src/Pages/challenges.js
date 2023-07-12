import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";

export default function Challenges() {
  return (
    <>
      <h2 className="shop-heading">CHALLENGES</h2>
      <div className="challenges">
        <div class="product-card">
          <image class="product-img" src={img1} alt="" />
          <h4>Garbage Collection near Yamuna Bank</h4>
          <div>
            <span>Hosted by: eco NGO</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div class="product-card">
          <image class="product-img" src={img1} alt="" />
          <h4>Plantion Drive</h4>
          <div>
            <span>Hosted by: SSP School</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div class="product-card">
          <image class="product-img" src={img1} alt="" />
          <h4>Blog Writing Contest</h4>
          <div>
            <span>Hosted by: eco NGO</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div class="product-card">
          <image class="product-img" src={img1} alt="" />
          <h4>Recycling Contest</h4>
          <div>
            <span>Hosted by: nature NGO</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div class="product-card">
          <image class="product-img" src={img1} alt="" />
          <h4>Blog Writing Contest</h4>
          <div>
            <span>Hosted by: eco NGO</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div class="product-card">
          <image class="product-img" src={img1} alt="" />
          <h4>Garbage Collection near Yamuna Bank</h4>
          <div>
            <span>Hosted by: eco NGO</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div class="product-card">
          <image class="product-img" src={img1} alt="" />
          <h4>Recycling Contest</h4>
          <div>
            <span>Hosted by: nature NGO</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </>
  );
}
