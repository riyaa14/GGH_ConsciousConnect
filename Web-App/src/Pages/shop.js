import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";

export default function Shop() {
  return (
    <>
      <h2 className="shop-heading">COUPONS</h2>
      <div className="shop">
        <div class="offer">
          <h3>Get 5% off</h3>
          <p>200 Pts</p>
        </div>
        <div class="offer">
          <h3>Buy 1 Get 1 Free</h3>
          <p>9,000 Pts</p>
        </div>
        <div class="offer">
          <h3>Get 50% off</h3>
          <p>5,000 Pts</p>
        </div>
        <div class="offer">
          <h3>Buy 2 Get 1 Free</h3>
          <p>3,000 Pts</p>
        </div>
      </div>

      <br />
      <h2 className="shop-heading">PRODUCTS</h2>
      <div className="shop">
        <div class="product-card">
          <image class="product-img" src={img1} alt="" />
          <h4>Natural Soap</h4>
          <div>
            <span>$29</span>
            <button>+</button>
          </div>
        </div>

        <div class="product-card">
          <image class="product-img" src={img2} alt="" />
          <h4>Herbal Shampoo</h4>
          <div>
            <span>$119</span>
            <button>+</button>
          </div>
        </div>

        <div class="product-card">
          <image class="product-img" src={img3} alt="" />
          <h4>Forest Essential Oil</h4>
          <div>
            <span>$99</span>
            <button>+</button>
          </div>
        </div>

        <div class="product-card">
          <image class="product-img" src={img1} alt="" />
          <h4>Natural Coconut Oil</h4>
          <div>
            <span>$19</span>
            <button>+</button>
          </div>
        </div>

        <div class="product-card">
          <image class="product-img" src={img2} alt="" />
          <h4>Organic Sugar</h4>
          <div>
            <span>$89</span>
            <button>+</button>
          </div>
        </div>

        <div class="product-card">
          <image className="product-img" src={img3} alt="" />
          <h4>Healthy Natural Juice</h4>
          <div>
            <span>$10</span>
            <button>+</button>
          </div>
        </div>

        <div class="product-card">
          <image className="product-img" src={img3} alt="" />
          <h4>Organic Bread</h4>
          <div>
            <span>$9</span>
            <button>+</button>
          </div>
        </div>

        <div class="product-card">
          <image className="product-img" src={img3} alt="" />
          <h4>Natural Face Cleanser</h4>
          <div>
            <span>$190</span>
            <button>+</button>
          </div>
        </div>

        <div class="product-card">
          <image className="product-img" src={img3} alt="" />
          <h4>Organic Flour</h4>
          <div>
            <span>$320</span>
            <button>+</button>
          </div>
        </div>

        <div class="product-card">
          <image className="product-img" src={img3} alt="" />
          <h4>Healthy Fresh Orange Juice</h4>
          <div>
            <span>$20</span>
            <button>+</button>
          </div>
        </div>

        <div class="product-card">
          <image className="product-img" src={img3} alt="" />
          <h4>Organic Pulse</h4>
          <div>
            <span>$10</span>
            <button>+</button>
          </div>
        </div>

        <div class="product-card">
          <image className="product-img" src={img3} alt="" />
          <h4>Natural Face Cleanser</h4>
          <div>
            <span>$190</span>
            <button>+</button>
          </div>
        </div>

        <div class="product-card">
          <image class="product-img" src={img3} alt="" />
          <h4>Forest Essential Oil</h4>
          <div>
            <span>$99</span>
            <button>+</button>
          </div>
        </div>

        <div class="product-card">
          <image class="product-img" src={img2} alt="" />
          <h4>Herbal Shampoo</h4>
          <div>
            <span>$119</span>
            <button>+</button>
          </div>
        </div>

        <div class="product-card">
          <image className="product-img" src={img3} alt="" />
          <h4>Organic Pulse</h4>
          <div>
            <span>$10</span>
            <button>+</button>
          </div>
        </div>
      </div>
    </>
  );
}
