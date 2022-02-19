function navbar() {
	return `<nav>
	<input type="checkbox" name="" id="check" />
	<label for="check" class="check">
		<i class="fa fa-bars" id="btn"></i>
	</label>
	<label class="logo"
		><a href="/index.html"
			><img
				src="https://static.frontendmasters.com/assets/fm/js/static/frontendmasters.e1e10b58c1.svg" /></a
	></label>

	<ul>
		<li><a href="/courses.html">Courses</a></li>
		<li><a href="">Learn</a></li>
		<li><a id="pricingLI" href="/LOGIN_SIGNUP/signup.html">Pricing</a></li>
		<li><a id="loginLI" href="/LOGIN_SIGNUP/login.html">Login</a></li>
		<li><a id="joinLI" class="join" href="/LOGIN_SIGNUP/signup.html">Join Now</a></li>
	</ul>
</nav>`;
}

export default navbar;
