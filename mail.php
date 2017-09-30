<!DOCTYPE html>
<html>

<head>
  <meta charset='utf-8'>
  <meta name="description" content="Portfolio">
  <meta name="keywords" content="HTML,CSS,XML,JavaScript,PHP">
  <meta name="author" content="Megan Laurie">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You!</title>
  <!-- <link rel="stylesheet" href="https://rawgit.com/dodgeblaster/basecss/master/base.css"> -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Megrim" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
  <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
  <link rel="icon" type="image/svg" href="images/favicon.svg">
  <link rel="stylesheet" href="css/grid.css">
  <link rel="stylesheet" href="css/main.css">
  <script src = "js/menu.js"></script>
  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-96078574-1', 'auto');
  ga('send', 'pageview');
  </script>
</head>

<body>

    <!--Fixed Hero Background  -->
    <div class="hero">

    </div>

    <!-- Desktop Menu -->
    <div class="mini-heroTxt">

      <!-- Mobile Nav Menu -->
      <div id="mobileMenu">
        <h2><a href="index.html">Home</a></h2>
        <h2><a href="index.html#projects">Projects</a></h2>
        <ul>
          <li><a href="webSites.html">Websites</a></li>
          <li><a href="graphicDesign.html">Graphic Design</a></li>
          <!-- <li><a href="apps.html">Apps</a></li> -->
          <li><a href="photography.html">Photos</a></li>
          <li><a href="art.html">Art/Illustraions</a></li>
        </ul>
        <h2><a href="index.html#skills">Skills</a></h2>
        <h2><a href="index.html#about">About</a></h2>
        <h2><a href="contact.html">Contact</a></h2>
      </div>


      <nav>
        <div class="wrapper">
          <ul>
            <li><a href="index.html">Home</a></li>
            <div class="dropdown">
              <a onclick="myFunction()" class="dropbtn">Projects</a>
              <div id="myDropdown" class="dropdown-content">
                <a href="webSites.html">Websites</a>
                <a href="graphicDesign.html">Graphic Design</a>
                <a href="apps.html">Apps</a>
                <a href="photography.html">Photography</a>
                <a href="http://130.211.202.23">Blog</a>
                <a href="art.html">Art/Illustration</a>
              </div>
            </div>
            <!-- <li><a href="index.html#projects">Projects</a></li> -->
            <li><a href="index.html#skills">Skills</a></li>
            <li><a href="index.html#about">About</a></li>
            <li><a href="contact.html">Contact</a></li>

            <!--Hamburger Menu  -->
            <div id="nav-icon2" onclick="toggleNav()" >
              <!-- -->
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </ul>

          <!-- LOGO -->
          <div id="logo-box"></div>
        </div>
      </nav>

      <h1 id="mini-title2">Thank You</h1>
      <h2 id="thankyoumsg">Your message has been successfully sent.</h2>

    </div>

    <!--Main content of page  -->
    <?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $formcontent="From: $name \n Message: $message";
    $recipient = "megan@meganlaurie.ca";
    $subject = "Contact Form";
    $mailheader = "From: $email \r\n";
    mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    ?>

<div class="emptydiv">

</div>

     <footer class="social-footer">
       <div>
           <ul>
             <li><a href="mailto:megan@meganlaurie.ca" target = "_blank"><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
             <li><a href="https://github.com/meglaurie" target = "_blank" ><i class="fa fa-github" aria-hidden="true"></i></a></li>
             <li><a href="https://bitbucket.org/meglaurie" target="_blank"><i class="fa fa-bitbucket" aria-hidden="true"></i></a></li>
             <li><a href="https://www.linkedin.com/in/megan-laurie-4416b9136" target = "_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
             <li><a href="https://twitter.com/Mlaurie_" target = "_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
           </ul>
         </div>
         <p class="CRF"><i class="fa fa-copyright" aria-hidden="true"></i> Copyright Megan Laurie 2017</p>
     </footer>

  </body>
</html>
