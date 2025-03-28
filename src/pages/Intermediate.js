import './Intermediate.css'
import { useNavigate } from 'react-router-dom';
import {Button} from "../components/ui/button";

const Intermediate = () => {
    const navigate = useNavigate();
    return ( 
        <div>
    <div id="one">
        <h1>Go from EMI to #ZMI -Zoomcar month monthly income</h1>
        <p>Share your car & earn up to 36,000 as #ZMI Earn fixed amount per sharing hour Gauranteed weekly payment No condition Apply</p>
        <Button
        variant="ghost"
        className="bg-green-600"
        >
        <button
        onClick={() => {
            navigate('/host');
        }
        }
        ><h4>START EARNING</h4></button>
        </Button>

    </div>
    <div id="two">
     <video src="https://www.zoomcar.com/zap/subscribe/build/64440836bb2a2ee19961407349dece57.mp4" autoplay="autoplay"></video>
     <image href="https://www.zoomcar.com/zap/subscribe/build/68ac6c1e3a13f1837af0d4cd921c9add.png" />
     <video  autoplay="autoplay" loop="loop" src="https://www.zoomcar.com/zap/subscribe/build/993b9e144e89da0b2a0df580e13a2cbe.mp4"></video>
     
     <h1>3 Simple steps Earning WIth your car in 24 hours </h1>
  
     <div class="three">
         <div >
            <h2>1. sign up for free!</h2>   
         <p>Become part of the Zoomcar Host program for absolutely free by filling up a short  after sign-up. It takes less than 2 mins to fill the form. No hidden charges. </p>
         </div>
         <div>
             <image href="https://www.zoomcar.com/zap/subscribe/build/bb6776beb9b8bacdc711e5a43f401134.svg" />
         </div>
     </div>
     <div class="three">
        <div>
            <image href="https://www.zoomcar.com/zap/subscribe/build/29d798d8bc5d57bf22445ed3cc67cff1.svg" />
        </div>
        <div >
            <h2>2.Get Your Cart Health Cheaked!</h2>
            <p>Once we receive your details, our expert visits your location to assess your vehicle, and install safety devices in it to ensure complete safety of your car. It all happens in 24 hours</p>
            </div>
    </div>
    <div class="three">
        <div >
           <h2>3.Share and Earn</h2>   
        <p>Share your car through the Zoomcar Host app whenever you are not using it. Flexiblilty in sharing, share as much or as less as you like. Your  </p>
        </div>
        <div>
            <image href="https://www.zoomcar.com/zap/subscribe/build/fc0cb48e9b85b44423a6660ba79ad43e.svg" />
        </div>
    </div>
    </div>
    <h1 class="h">How we protect your Car</h1>
    <div id="secpart">
   
    <div id="four">
  
   <div>
       <image href="https://www.zoomcar.com/zap/subscribe/build/e2bfa54a9b46567921c3f14e1276c68e.svg" />
       <h3>we cover major damages & repair </h3>
       <p>Zoomcar provides damage cover and repair handling in case of an unlikely incident of a major accident during the sharing period/ when your car is on a booking.</p>
   </div>
   <div>
    <image href="https://www.zoomcar.com/zap/subscribe/build/1f4b5b69d928bbf104735bdea4914f79.svg" />
    <h3>Your car stays in safe handling</h3>
    <p>
        All our renters are verified individuals with valid Driving license, and have excellent driving stats in the past on our platform. We have complete contact and address details of all our renters. 
    </p>
</div>
<div>
    <image href="https://www.zoomcar.com/zap/subscribe/build/eb002ff59dd838a60fd664d21539d877.svg" />
    <h3>conatcless sharing</h3>
    <p>Our Keyless technology enables contactless pick-up & drop of your car.</p>
</div>
<div>
    <image href="https://www.zoomcar.com/zap/subscribe/build/584189ee6116aeef9f0bfad788813be1.svg" />
    <h3>Flexibility in sharing</h3>
    <p>share your car whenever you want as per your usage and convenience</p>
</div>
<div>
    <image href="https://www.zoomcar.com/zap/subscribe/build/a0073dafcc39c09bcf084add77f94472.svg" />
    <h3>24 * 7 customer support </h3>
    <p>Call us, Chat with us, drop an Email to us, we've got your back round the clock!</p>
</div>
</div>
</div>
<div id="thirddetail">

    <h1 >Growing rapidly</h1>
    <p>join Host program and be part of the largest tech enable car sharing market place</p>

</div>
<div id="thirdpart">
<div class="thirddiv">
    <image href="https://www.zoomcar.com/zap/subscribe/build/e3a6d127cac35a3a7a139256bb3761eb.png" />
    <h1>5000+</h1>
    <p>Satisfied host</p>
</div>
<div class="thirddiv">
    <image href="https://www.zoomcar.com/zap/subscribe/build/4a5f55fc81b9a6df6a460a025fdfa509.png" />
    <h1>5lac+</h1>
    <p>booking served</p>
</div>
<div class="thirddiv">
    <image href="https://www.zoomcar.com/zap/subscribe/build/36da13bf403485c4efacd507efd93735.png" />
    <h1>32cr+</h1>
    <p>Kms run</p>
</div>
<div class="thirddiv">
    <image href="https://www.zoomcar.com/zap/subscribe/build/c0db9479a08980b830b63433f60d336c.png" />
    <h1>rs120cr+</h1>
    <p>Earned by hosts</p>
</div>

</div>
<div class="cal">
    <h1>Share Your</h1>
    <h1 class="gre">Xuv 500</h1>
</div>
<div class="cal">
    <h1>And earn up to </h1>
    <h1 class="gre">rs 36,000</h1>
    <h1> per month</h1>
</div>
<div id="lastpart">
<h3>Earn fixed amount per sharing hour</h3>
<button>Calculate Earning</button>
<a>How do we estimate your earning</a>
<image href="https://www.zoomcar.com/zap/subscribe/build/42d8d18a6ff5e453d77c7d1e2c871776.jpeg" />
<div>
    <h5>Users love Zoomcar Host program. Our app has 4.5+ rating on play store!</h5>
</div>
<video  autoplay="autoplay" loop="loop" src="https://www.zoomcar.com/zap/subscribe/build/993b9e144e89da0b2a0df580e13a2cbe.mp4"></video>
<div id="fifth">
   <h1>Still Have Question?</h1>
    <div class="line">
        <p>do i need to meet renters of my cars?</p>
        <p>How will I get Paid?</p>
        <p>What Happens if my car gets challans or traffic fines while my car is being shared?</p>
        <p>How much will i Earn?</p>
        <p>How is the price of my car decide ?</p>
        <p>why are safety device installeds?</p>
  
    </div>
</div>
<div id="six">
    <h1>Still confused?</h1>
     <div>
      <div>
          <h3>We are here to Help</h3>
          <p>vist detailed FAQs section or contact for more details </p>
      </div>
      <div class="subsix">
          <h4>FAQs</h4>
          <h4>CONTACTS US</h4>
      </div>
     </div>
 </div>

</div>
<div id="foot">
    <image href="https://www.zoomcar.com/zap/subscribe/build/5335b9a2cd132fc5c25ea3fec1177b02.svg" alt="" />
</div>
</div>
     );
}
 
export default Intermediate;