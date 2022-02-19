function navbar() {
	return ` <input type="checkbox" name="" id="check">
    <label for="check" class="check">
        <i class="fa fa-bars" id="btn"></i>

    </label>
    <label class="logo"><a href="/index.html"><img src="https://static.frontendmasters.com/assets/fm/js/static/frontendmasters.e1e10b58c1.svg"></a></label>
    
    
    <ul>
        <li><a href="/courses.html">Courses</a></li>
        <li><a href="/html/teachers.html">Learn</a></li>
        <li><a id="pricingLI" href="/LOGIN_SIGNUP/signup.html">Pricing</a></li>
        <li><a id="loginLI" href="/LOGIN_SIGNUP/login.html">Login</a></li>
        <li><a id="joinLI"  class="join" href="">Join Now</a></li>
    </ul>`;
}

function footer() {
	return ` <div class="footer-wrap">
    <div class="footer-left">
        <label><img src="https://static.frontendmasters.com/assets/fm/js/static/frontendmasters.e1e10b58c1.svg"></label>

        <ul class="details">
            <li><a href="/courses.html">Courses</a></li>
            <li><a href="#">Learn</a></li>
           <li><a href="/html/teachers.html">Teachers</a></li>
           <li> <a href="/html/guides.html">Guides</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Join Now</a></li>
            <li><a href="#">FAQ</a></li>
        </ul>
      
    </div>
    <div id="joining">
        <a href=""><img height="50px" src="https://developer.apple.com/assets/elements/icons/download-on-the-app-store/download-on-the-app-store.svg"></a>
        <a href=""><img src="/Images/google play.png"></a>
    </div> 
    <div id="row">
        <div class="social">
            <a target="_blank" href="https://twitter.com/FrontendMasters"><img src="/Images/logo-twitter-png-5860.png"></a>
            <a target="_blank" href="https://www.linkedin.com/company/frontend-masters/"><img src="/Images/linkedin-logo-png-1853.png"></a>
            <a target="_blank" href="https://www.facebook.com/FrontendMasters"><img src="/Images/facebook-logo-png-38347.png"></a>
            <a target="_blank" href="https://www.instagram.com/FrontendMasters"><img src="/Images/logo-ig-png-32459.png"></a>
       </div> 
       <div class="contact">
           <span>
               Email:
                <a href="mailto:support@frontendmasters.com">support@frontendmasters.com</a>
           </span>
       </div>
     
    </div>
    <div id="text">
        <div class="copyright">
   © 2021 Frontend Masters .
   <a href="https://static.frontendmasters.com/assets/legal/MasterServicesAgreement.pdf">Terms of Service</a>
   . 
   <a href="https://static.frontendmasters.com/assets/legal/PrivacyPolicy.pdf">Privacy Policy</a>
        </div>
<div id="address">Frontend Masters is proudly made in Minneapolis, MN</div>
    </div>
</div>`;
}

export { navbar, footer };
