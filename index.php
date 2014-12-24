<!DOCTYPE html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>
        CodeRED | Houston's Premier Hackathon
    </title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <link rel="shortcut icon" href="images/CodeRED-Icon.png" />
    <link href="css/style.css" media="screen" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,600,700,800,300' rel='stylesheet' type='text/css'>
</head>

<body>
    <div class="wrapper" id="wrapper">
        <header id="home">
            <div class="banner row" id="banner">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 noPadd">
                    <div class="bannerPart">
                        <img alt="" class="bannerImg" height="500%" src="images/back.jpg" style="visibility: hidden;">
                    </div>
                </div>
            </div>
            <div class="bannerText container" id="bannerContent">
              <div id="CodeRED">
                <img width="100%" src="images/CodeRED-Light.png"/>
                <br><br>
                <h2>Houston's Premier Hackathon</h2>
                <br><br>
              </div>
              <div id="registration">
                <a href="#">
                  <h3 class="regButton" id="regButtonHeader" onclick="toggleSignUpHeader()">
                    Sign me up!
                  </h3>
                <a>
                <br>
                <div id="regContent">
                  <form role="form">
                    <div class="form-group">
                      <label for="firstname">First name</label>
                      <input type="text" class="form-control" id="firstname" placeholder="Enter first name">
                    </div>
                    <div class="form-group">
                      <label for="lastname">Last name</label>
                      <input type="text" class="form-control" id="lastname" placeholder="Enter last name">
                    </div>
                    <div class="form-group">
                      <label for="email">Email (.edu preferred):</label>
                      <input type="email" class="form-control" id="email" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                      <label for="pwd">Password:</label>
                      <input type="password" class="form-control" id="pwd" placeholder="Enter password">
                    </div>
                    <div class="form-group">
                      <label for="school">School name:</label>
                      <div id="prefetch">
                        <input type="text" class="form-control typeahead" id="school" placeholder="Enter school name">
                      </div>
                    </div>
                    <div class="buttons">
                      <button type="submit" class="btn submit">Submit</button>
                      <button type="button" class="btn cancel" onclick="toggleSignUpHeader()">Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </header>
        <div class="menu">
                <div class="navbar-wrapper">
                    <div class="container">
                        <div class="navwrapper">
                            <div class="navbar navbar-inverse navbar-static-top">
                                <div class="container">
                                    <div class="navbar-header">
                                        <button class="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse" type="button">
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                        <a class="navbar-brand"><img height="24" src="images/CodeRED-Light.png"/></a>
                                    </div>
                                    <div class="navbar-collapse collapse">
                                        <ul class="nav navbar-nav">
                                            <li class="menuItem active">
                                                <a href="#wrapper">Home</a>
                                            </li>
                                            <li class="menuItem">
                                                <a href="#about">About</a>
                                            </li>
                                            <li class="menuItem">
                                                <a href="#schedule">Schedule</a>
                                            </li>
                                            <li class="menuItem">
                                                <a href="#faq">FAQ</a>
                                            </li>
                                            <li class="menuItem">
                                                <a href="#sponsors">Sponsors</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <section class="about" id="about">
            <div class="container">
                <div class="heading">
                    <h2>About</h2>
                </div>
                <div class="row">
                    <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <h3>What's a hackathon?</h3><br>
                      <p>Hackathons have taken the world by storm, and they're not about breaking or stealing. They're about solving problems and taking ideas and then building them for the world to see. They're about pushing the limits of the mind and body to create something amazing.
                      <br><br>
                      There's only one catch: You only have 24 hours. <br><br>
                      </p>
                      <h3>Houston's Premier Hackathon.</h3><br>
                      <p>Prepare for a weekend filled with learning new technologies, pushing your limits, and making new friends. Students from all 4 UH universities are teaming up to create the University of Houston System's first major hackathon
                      <br><br>
                      </p>

                      <h3>Everyone is welcome.</h3><br>
                      <p>Whether you're making your first website, hacking health with hardware, or creating something fun, CodeRED is for you. We'll have great workshops, mentors, and tools from xxx, xxx, xxx, and more!. 

                      <br><br>We'll provide plenty of food, awesome swag, and everything you need to carry out your craziest ideas.
                      </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="schedule" id="schedule">
            <div class="container">
                <div class="heading">
                    <h2>Schedule</h2>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="friday">
                        <div class="row">
                          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 scheduleHead">
                            <h5>Friday</h5>
                          </div>
                          <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                <h3>5:00PM</h3>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                                <h5>Registration opens</h5>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                <h3>6:00PM</h3>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                                <h5>Kick-off</h5>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="saturday">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 scheduleHead">
                          <h5>Saturday</h5>
                        </div>
                        <div class="row">
                          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                              <h3>6:00PM</h3>
                          </div>
                          <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                              <h5>Final Demos and Awards</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                              <h3>7:00PM</h3>
                          </div>
                          <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                              <h5>Closing ceremony</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <br>
            </div>
        </section>

        <section class="faq" id="faq">
            <div class="container">
                <div class="heading">
                    <h2>FAQ</h2>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h3>What if I don't have a team or idea?</h3>
                    <p>Don't worry! That's pretty common, you'll have time before the hacking begins to find a team. We'll also have Facebook group for attendees.</p>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h3>What if I don't know how to code? </h3>
                    <p>
                      No problem! Designers and creatives are very common at hackathons. Want to learn how to code? We can help you out with that too.
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h3>How much does it cost?</h3>
                    <p>Absolutely nothing for the event. We'll be providing snacks and meals, and sponsors will be handing out swag and prizes. </p>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h3>Who can attend?</h3>
                    <p>Any undergraduate and graduate student. You can be from any school. UH-System recent graduates are welcome as well. </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h3>What do I need to bring?</h3>
                    <p>A computer (preferably laptop), student ID, chargers, a sleeping bag if needed, and anything you need to maintain hygene.</p>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h3>How do I get there?</h3>
                    <p>Drive, carpool, Uber/Lyft, etc. If there's enough demand we'll look into organizing busses. <br><br></p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h3>How big can a team be?</h3>
                    <p>No more than four people, please don't be one man team. The real fun and productivity happens when you're a team.</p>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h3>What can I build?</h3>
                    <p>Pretty much anything you want. Your mind is your limit. As long as you're not soldering and/or doing anything illegal. </p>
                  </div>
                </div>
            </div>
        </section>

        <section class="sponsors" id="sponsors">
            <div class="container">
                <div class="heading">
                    <h2>Sponsors</h2>
                    <br>
                </div>

                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="text-align: center;">
                    <img src="images/HackSpark.png" width="100%"></img>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" style="text-align: center;">
                    <img src="images/HackSpark.png" width="100%"></img>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" style="text-align: center;">
                    <img src="images/HackSpark.png" width="100%"></img>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style="text-align: center;">
                    <img src="images/HackSpark.png" width="100%"></img>
                  </div>
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style="text-align: center;">
                    <img src="images/HackSpark.png" width="100%"></img>
                  </div>
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style="text-align: center;">
                    <img src="images/HackSpark.png" width="100%"></img>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="text-align: center;">
                    <img src="images/HackSpark.png" width="100%"></img>
                  </div>
                  <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="text-align: center;">
                    <img src="images/HackSpark.png" width="100%"></img>
                  </div>
                  <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="text-align: center;">
                    <img src="images/HackSpark.png" width="100%"></img>
                  </div>
                  <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="text-align: center;">
                    <img src="images/HackSpark.png" width="100%"></img>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="text-align: center;">
                    <hr><br><br><br><br>
                    <h3>Want to become a sponsor? Send us an email at this@that.com</h4>
                  </div>
                </div>
            </div>
        </section>

        <section class="footer" id="footer">
          <div class="container">
           <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <h5>&copy; 2014-2015 CougarCS.</h5>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="footerRight">
                  <h5>Contact us at this@that.com</h5>
              </div>
            </div>
          </div>
        </section>
    </div>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <script src="js/stickyAndMain.js"></script>
    <script src="http://twitter.github.io/typeahead.js/releases/latest/typeahead.bundle.min.js"></script>
    <script src="js/signup.js"></script>
</body>

</html>
