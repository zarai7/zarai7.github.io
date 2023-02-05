<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Personal Portfolio Website 2022</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">

	<link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
    <link rel="stylesheet" href="khalidcss.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
	<style>
		
@import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Tajawal&display=swap');

#bigdiv{
    display: flex;
    top: 0;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color: black;
    border-radius: 10px;
    padding: 6px;
    position: fixed;
    z-index: 100;
    width: 95%;
    margin-right: 20px;
    margin-left: 20px;
}

#naviga nav a{

    margin-right: 20px;
    text-decoration: none;
    font-size: 18px;
    font-weight: 200;
    color: white;
}
#logo{
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight: 200;
    
}
#s1{
    width: 100%;
    height: 550px;
    margin-top: 30px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    align-self: center;
    margin-left: 30px;
    margin-right: 30px;
 
}
.str{
    background-color: red;
    height: 10px;
    margin-top: -33px;
    width: 50px;
    border-radius: 20px;
}
#s1 h1{
    font-size: 40px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}
#s1 p{
   width: 80%;
   font-family: 'Aboreto', cursive;
   
}
section{
    
    z-index: 99;
}
#inp{
    padding: 10px;
    background-color: red;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 17px;
    width: 100px;
    border: 0;
    border-radius: 7px;
   
}
.para{
    
    padding: 10px;
}
#img{
    border-radius: 0px 100px 0px 100px;
    margin-right: 100px;
    width: 500px;
    box-shadow: 0px 0px 30px 15px red;
}
.nike{
    display: flex;
    justify-content: center;
    letter-spacing: 150px;
    font-size: 17px;
    font-style: italic;
    font-weight:800;
    
}
footer{
    
    height: 400px;
    background-color: black;
    margin-left: 30px;
    margin-right: 30px;
}
.ftr{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.navfotr{
    
    display: flex;
    
}
.navfotr nav{
    
    display: flex;
    flex-direction: column;
    

   
}
.navfotr nav a{
    color: white;
    margin-bottom: 15px;
    text-decoration: none;
    margin-left: 50px;
}
#cpt h1{
    color: white;
    text-align: center;
    font-size: 15px;
}
	
	</style>
</head>
<body>
	<!--------header---->
	<header>
		<!-- <a href="#" class="logo"><img src="img/logo.png"></a> -->
		<div class="bx bx-menu" id="menu-icon"></div>

		<ul class="navlist">
			<li><a href="#home">Home</a></li>
			<li><a href="#about">About</a></li>
			<li><a href="#portfolio">Portfolio</a></li>
			<li><a href="#service">Service</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
		
	</header>

	<!--------home---->
	<section class="home" id="home">
		<div class="home-text">
			<h3>Hello, I'm</h3>
			
			<h1>khalid zarai</h1>
			<div id="str"></div>
			<h5>A Developer Full stack <span>From Morocco</span></h5>
			<p>I am a full stack web developer in Morocco <br> and dedicated to my work.</p>
			<div class="social">
				<a href="#"><i class='bx bxl-facebook'></i></a>
				<a href="#"><i class='bx bxl-twitter' ></i></a>
				<a href="#"><i class='bx bxl-linkedin' ></i></a>
				<a href="#"><i class='bx bxl-behance' ></i></a>
			</div>
			<a href="#" class="btn">About Me</a>
		</div>

		<div class="home-img">
			<img src="img\WhatsApp_Image_2022-04-23_at_00.10.39-removebg-preview.png">
		</div>
	</section>

	<!--------sub service---->
	<section class="sub-service">
		<div class="items">
			<div class="sub-box"> 
				<div class="sub-img">
					<img src="img/target.svg">
				</div>
				<h3>Pixel Perfect</h3>
				<p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
			</div>

			<div class="sub-box">
				<div class="sub-img">
					<img src="img/brush.svg">
				</div>
				<h3>High Quality</h3>
				<p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
			</div>

			<div class="sub-box">
				<div class="sub-img">
					<img src="img/energy.svg">
				</div>
				<h3>Awesome Idea</h3>
				<p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
			</div>

		</div>
	</section>

	<!--------About---->
	<section class="about" id="about">
		<div class="about-img">
			<img src="img/about.jpg">
		</div>

		<div class="about-text">
			<h3>je suis développeur</h3>
			<h2>Je peux développer tout ce que vous voulez</h2>
			<p>Bonjour ! je suis un développeur web expérimenté et déterminé, prêt à mettre mes compétences à votre disposition pour réaliser votre projet avec succès. Je prends plaisir à chaque étape du processus de conception, en travaillant en étroite collaboration avec mes clients pour garantir leurs objectifs.</p>
			<a href="#" class="btn">Hire Me</a>
		</div>
	</section>

	<!--------portfolio---->
	<section class="portfolio" id="portfolio">
		<div class="heading">
			<h3>Portfolio</h3>
			<h2>My Amazing Work</h2>
			<p>Most common methods for designing websites that work well on desktop is <br> responsive and adaptive design</p>
		</div>

		<div class="portfolio-content">
			<div class="col">
				<img src="img/work1.jpg">
				<div class="layer">
					<h3>Web Design</h3>
					<h5>Popup</h5>
				</div>
			</div>

		</div>
	</section>

	<!--------service---->
	<section class="service" id="service">
		<div class="heading">
			<h3>Service</h3>
			<h2>What I Do For Clients</h2>
			<p>Most common methods for designing websites that work well on desktop is <br> responsive and adaptive design</p>
		</div>

		<div class="service-content">
			<div class="row">
				<div class="s s-one">
					<img src="img/anchor.svg">
				</div>
				<h3>Web Design</h3>
				<h5>Starts From <span>$99</span></h5>
				<p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
			</div>

			<div class="row">
				<div class="s s-tow">
					<img src="img/physics.svg">
				</div>
				<h3>Web Design</h3>
				<h5>Starts From <span>$99</span></h5>
				<p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
			</div>

			<div class="row">
				<div class="s s-three">
					<img src="img/contact.svg">
				</div>
				<h3>Web Design</h3>
				<h5>Starts From <span>$99</span></h5>
				<p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
			</div>

			<div class="row">
				<div class="s s-four">
					<img src="img/web.svg">
				</div>
				<h3>Web Design</h3>
				<h5>Starts From <span>$99</span></h5>
				<p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
			</div>

		</div>
	</section>

	<!--------work---->
	<section class="cta">
		<div class="heading">
			<h2>Completed 1200+ Projects <br> Successfully</h2>
		</div>

		<div class="cta-box">
			<div class="wrap one">
				<h3>1200+</h3>
				<p>Finished Projects</p>
			</div>

			<div class="wrap two">
				<h3>350+</h3>
				<p>Happy Customer</p>
			</div>

			<div class="wrap three">
				<h3>15k</h3>
				<p>Global Customers</p>
			</div>

		</div>
	</section>

	<!--------contact---->
	<section class="contact" id="contact">
		<div class="container">
			<div class="center">
				<h3>Let's talk about everything</h3>
				<p>Don't like forms? Send me an email.</p>
			</div>

			<div class="action">
				<form>
					<input type="email" name="email" placeholder="Enter Your email" required>
					<input type="submit" name="submit" value="Submit">
				</form>
			</div>
		</div>
	</section>

	<!--------ends---->
	<div class="ends">
		<p>Made with love by khalid zarai © 2022</p>
	</div>

	<script src="https://unpkg.com/scrollreveal"></script>

	<!--------Link to js---->
	<script type="text/javascript" src="js/script.js"></script>
	
</body>
</html>
