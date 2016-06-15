var me = {
    name: "Megan King",
    phoneNumber: "2818444058",
    address: "3800 Vineland Dr, Austin, TX 78722"
}
var arrNum;
var cartoonimage = "<div class='col-md-12'><img src='assets/img/cartoon.png' id='cartoonImg' class=' center-block img-circle img-responsive'></div>"
var description = "<p>Hello, Megan here. I am a Jr. Developer building maintenance and facility management products through Outsystems while also doing freelance design and front-end development work. For design, I am a fan of the Adobe Creative Suite, as it is home to most of my favorites: InDesign, Photoshop, Illustrator, and the new Experience Design CC. For development purposes, I am proficient with HTML5, CSS3 and jQuery. At the momment, I am participating in a program at the University of Texas to expand my knowledge of these skills and learn new technologies. These new technologies include Node.js, React.js, and PHP with Laravel. <p>Throughout my professional career, I have accepted and excelled at jobs and projects that required me to learn quickly and adapt. Every position has required independent learning to excel, as well as a focused attitude to keep up with multiple tasks. Because of this, I have the drive, skills, and passion to take on your project and bring it to new heights, whatever it may be. Let's make the internet pretty, together.</p>";
var menuItems = ["<div class='col-md-12' id='menuItem1'><h3><a class='menuItem home' href='#'>home</a></h3></div>", "<div class='col-md-12' id='menuItem2'><h3><a class='menuItem portfolio' href='#'>portfolio</a></h3></div>", "<div class='col-md-12' id='menuItem3'><h3><a class='menuItem contact' href='#'>let's chat</a></h3></div></div>"];
var menuX = "<i class='fa fa-times fa-3x faMenu hidden-sm hidden-xs' aria-hidden='true' id='sideBarMenuX'></i><i class='fa fa-times faMenu visible-sm-inline-block visible-xs-inline-block' aria-hidden='true' id='xsSideBarMenuX'></i>"
var menuHTML = menuX + "<br><div class='row faMenu textMenu'>" + menuItems[0] + menuItems[1] + menuItems[2];
var headingText = "<div class='lrgText'>megan king</div><div class ='smlText'>UI/UX DESIGNER & FRONT-END DEVELOPER</div>"
var skills = ["<i class='fa fa-html5 fa-1x' aria-hidden='true'></i> HTML5", "<i class='fa fa-css3 fa-1x' aria-hidden='true'></i> CSS3", "<i class='fa fa-code fa-1x' aria-hidden='true'></i> Javascript", "<i class='fa fa-code fa-1x' aria-hidden='true'></i> jQuery", "<i class='fa fa-mobile fa-1x' aria-hidden='true'></i> Responsive Design", "<i class='fa fa-file-image-o fa-1x' aria-hidden='true'></i> PhotoShop", "<i class='fa fa-paint-brush fa-1x' aria-hidden='true'></i> Illustrator", "<i class='fa fa-paper-plane' aria-hidden='true'></i> InDesign"];
var experience = [{
    workPlace: "MicroMain",
    startEndDate: "September 2015 - Present",
    position: "Jr. Developer",
    description: "<b>Description: </b>I am part of a small engineering team that builds maintenance management and facility management products. I also oversee the UI/UX elements of the products.",
}, {
    workPlace: "Favor",
    startEndDate: "September 2014 - September 2015",
    position: "Recruiter",
    description: "",
}, {
    workPlace: "Tiff's Treats",
    startEndDate: "August 2012 - September 2014",
    position: "Manager",
    description: "",
}]
var education = [{
    school: "Friendswood High School",
    attended: "2008-2012",
    achievements: "National Technical Honor Society"
}, {
    school: "Austin Coding Academy",
    attended: "2015",
    achievements: "Learned the funamentals of front end design."
}, {
    school: "University of Texas Coding Bootcamp",
    attended: "2016",
    achievements: "Expanding my knowledge in full-stack Development by learning Node.js, React.js, and PHP."
}]
var socialMedia = [{
    type: "Facebook",
    url: "https://www.facebook.com/megantking"
}, {
    type: "LinkedIn",
    url: "https://www.linkedin.com/in/mgnking"
}, {
    type: "GitHub",
    url: "https://github.com/mgnking12"
}, {
    type: "twitter",
    url: "https://twitter.com/MoosTweets"
}];
var portfolioArray = [{
	compName: "<h2>MicroMain Global</h2>",
	img:'<img src="assets/img/portfolio/MMWelcome.png" class="img-responsive pArrImg" alt="">',
	work: '<video controls="controls" width="550" height="400" name="Video Name" src="assets/img/portfolio/MicroMainGlobal.mov" class="img-responsive center-block col-md-5 marg"></video><video controls="controls" width="550" height="400" name="Video Name" src="assets/img/portfolio/MicroMainGlobalTablet.mov" class="img-responsive center-block col-md-3 marg"></video><video controls="controls" width="550" height="400" name="Video Name" src="assets/img/portfolio/MicroMainGlobalPhone.mov" class="img-responsive center-block col-md-3 marg"></video>',
    description: "<p>This is a sample of the first UI/UX mock up I made for my current company's new product, MicrMain Global. I did this using Experience Design CC from the Adobe Suite. I created everything on this from the icons to the splash background on the home page.</p>",

},
{
	compName: "<h2>Favor</h2>",
	img:'<img src="assets/img/portfolio/favor.png" class="img-responsive pArrImg" alt="">',
	work: '<img src="assets/img/portfolio/favorFlav.jpg" class="img-responsive col-md-3 marg" alt=""><img src="assets/img/portfolio/favorteam.jpg" class="img-responsive col-md-5 marg" alt=""><img src="assets/img/portfolio/favorDeliversIt.jpg" class="img-responsive col-md-3 marg" alt="">',
    description: "<p>I worked at Favor for a year as a Recruiter. Since it was a start up, everyone wore many hats. I had the opportunity do design some ads for the maketing team using Photoshop and Illustrator.</p>",
  
},
{
	compName: "<h2>MicroMain</h2>",
	img: "<img src='assets/img/portfolio/MMLogoGreyBlack.png' class='img-responsive pArrImg' alt=''>",
	work: "<img src='assets/img/portfolio/MMLogo.png' class='img-responsive col-md-3 mmlp' alt=''><img src='assets/img/portfolio/MMLogoBlack.png' class='img-responsive col-md-3 mmlp' alt=''><img src='assets/img/portfolio/MMLogoBlueGreen.png' class='img-responsive col-md-3 mmlp' alt=''><img src='assets/img/portfolio/MMLogoGreyBlack 2.png' class='img-responsive col-md-3 mmlp' alt=''>",
    description: "<p>These are the logo designs that I made for my current company, MicroMain, using Illustrator.</p>",
},
{
	compName: "<h2>Sample Pages</h2>",
	img: "<img src='assets/img/portfolio/code.jpg' class='img-responsive pArrImg' alt=''>",
	work: "<a href='https://dry-eyrie-56821.herokuapp.com/?'><img src='assets/img/portfolio/movies.png'class='img-responsive spImg center-block col-md-4' alt=''></a><a href='https://cryptic-brushlands-70461.herokuapp.com/'><img src='assets/img/portfolio/office.png'class='img-responsive spImg col-md-4 center-block' alt=''></a><a href='http://fathomless-badlands-58412.herokuapp.com/'><img src='assets/img/portfolio/signup.png'class='img-responsive center-block spImg col-md-4' alt=''></a>",
    description: "<p>These are practice pages that I use to learn new skills and refrsh old skills. In the current examples, I am practicing working with APIs, AJAX calls, and Firebase.</p>",
 
},
{	
	compName: "<h2>reAUSTIN</h2>",
	img: "<img src='assets/img/portfolio/reAustin.png' class='img-responsive pArrImg' alt=''>",
	work: "<div><a href='https://murmuring-woodland-98139.herokuapp.com/'><img src='assets/img/portfolio/reATX.png' class='img-responsive center-block reATX' style='width: 80%' alt=''></a></div>",
    description: "Two friends and I are creating an app to find recycling bins around Austin. You will be able to add bins in your area, and if you have a bin at home that never gets full you can put yours up for use as well. Together we can make Austin even greener! This project is a work in progress, but we should have the MVP finished by early July. We are using HTML5, CSS3, the Materialize Framework, the Google API, and jQuery.",
 
}, ]
//var contactArray = ['<div class="form-group"><label for="usr">Name:</label><input type="text" class="form-control" id="usr"></div>','<div class="form-group"><label for="eml">Email:</label><input type="email" class="form-control" id="eml"></div>','<div class="form-group"><label for="comment">Comment:</label> <textarea class="form-control" rows="5" id="comment"></textarea></div>']

$(document).ready(function() {
    var all = $("#all");
    all.attr('class', 'fluid-container');
    $("#row").prepend("<div id='sideBar'>");
    $("#row").prepend("<div id='xs-menu'>");
    //this is the menu bar that shows on mobile
    $("#xs-menu").attr('class', 'col-md-1 visible-sm-inline-block visible-xs-inline-block menuVisable').prepend("<i class='fa fa-bars faMenu' aria-hidden='true' id='xsSideBarMenu'></i>");
    //this is the menu bar that shows on everything besides mobile
    $("#sideBar").attr('class', 'col-md-1 hidden-sm hidden-xs menuVisable').prepend("<i class='fa fa-bars fa-3x faMenu' aria-hidden='true' id='sideBarMenu'></i>");
    //this is where the main content of the page goes
    $("#mainBody").attr('class', 'col-md-12').prepend("<div class='jumbotron'><div class='row'><div class='col-md-1'></div><div class='col-md-11 jumboVisable'></div></div>");
    $(".jumboVisable").prepend("<div class='heading text-center'>" + headingText + "</div>");
    $("#mainBody").append("<div class='row' id='mainRow'>");
    $("#mainRow").append("<div class='col-md-11 col-md-offset-1' id='mainContentHome'>");
    var content = $("#mainContentHome");
    content.append("<div id='visibleMainContent'>");
    var visContent = $("#visibleMainContent");
    visContent.append("<div class='row'><div class='col-sm-1'></div><div class='col-sm-4'>" + cartoonimage + "</div><div class='descriptionText col-sm-6'>" + description + "</div></div>");
    visContent.append("<div class='row technicalSection'></div>");
    //=====================SKILLS================================
    $(".technicalSection").prepend("<div class='col-sm-4 skillsSection'></div>");
    $(".skillsSection").prepend("<a href='#' class='center-block text-center' id='skillsButton'><i class='fa fa-bolt fa-4x' aria-hidden='true'></i><br>skills</a><div class='row text-left' id='rowSkills'></div>");
    for (var i = 0; i < skills.length; i++) {
        //make this show up as a jquery effect right now display is none
        $("#rowSkills").append("<div class='skills'>" + skills[i] + "</div>").css({
            display: 'none'
        });;
    }
    $("#rowSkills").prepend("<a href='#'><i class='fa fa-times faSkills' aria-hidden='true' id='faSkills'></i></a><br>");
       $("body").on('click', '#skillsButton', function(event) {
        $("#skillsButton").hide(300);
        $("#rowSkills").show(300);
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 700);
        return false;
    });
       $("body").on('click', '#faSkills', function(event) {
        $("#skillsButton").show(300);
        $("#rowSkills").hide(300);
        return false;
    });
    //============================EXPERIENCE============================
    $(".technicalSection").append("<div class='col-sm-4 experienceSection'></div>");
    $(".experienceSection").prepend("<a href='#' class='center-block text-center' id='experienceButton'><i class='fa fa-briefcase fa-4x' aria-hidden='true'></i><br>experience</a><div class='row text-left' id='rowExperience'></div>");
    for (var i = 0; i < experience.length; i++) {
        //make this show up as a jquery effect right now display is none
        $("#rowExperience").append("<div class='experiences'><h4>" + experience[i].workPlace + "</h4><b>Durration: </b>" + experience[i].startEndDate + "<br><b>Position: </b>" + experience[i].position + "<br>" + experience[i].description + "</div><br>").css({
            display: 'none'
        });;
    }
    $("#rowExperience").prepend("<a href='#'><i class='fa fa-times faExperience' aria-hidden='true' id='faExperience'></i></a><br>");
    $("body").on('click', '#experienceButton', function(event) {
        $("#experienceButton").hide(300);
        $("#rowExperience").show(300);
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 700);
        return false;
    });
    $("body").on('click', '#faExperience', function(event) {
        $("#experienceButton").show(300);
        $("#rowExperience").hide(300);
        return false;
    });
    //=====================EDUCATION======================================
    $(".technicalSection").append("<div class='col-sm-4 educationSection'></div>");
    $(".educationSection").prepend("<a href='#' class='center-block text-center' id='educationButton'><i class='fa fa-graduation-cap fa-4x' aria-hidden='true'></i><br>education</a><div class='row text-left' id='rowEducation'></div>");
    for (var i = 0; i < education.length; i++) {
        //make this show up as a jquery effect right now display is none
        $("#rowEducation").append("<div class='education'><h4>" + education[i].school + "</h4><b>Durration: </b>" + education[i].attended + "<br><b>Achievements: </b>" + education[i].achievements + "</div><br>").css({
            display: 'none'
        });;
    }
    $("#rowEducation").prepend("<a href='#'><i class='fa fa-times faEducation' aria-hidden='true' id='faEducation'></i></a><br>");
    $("body").on('click', '#educationButton', function(event) {
        $("#educationButton").hide(300);
        $("#rowEducation").show(300);
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 700);
        return false;
    });
    $("body").on('click', '#faEducation', function(event) {
        $("#educationButton").show(300);
        $("#rowEducation").hide(300);
        return false;
    });
    //===============MENUBAR============================
    $("body").on('click', '#xsSideBarMenu', function(event) {
        event.preventDefault();
        var xsMenu = $("#xs-menu");
        xsMenu.animate({
            width: '150vh',
            backgroundColor: '#2980b9',
            opacity: '0.8'
        }, 500).html(menuHTML);
    });
    $("body").on('click', '#sideBarMenu', function(event) {
        event.preventDefault();
        var sideBar = $("#sideBar");
        sideBar.animate({
            width: '150vh',
            opacity: '0.8'
        }, 500)
            .delay(0)
            .queue(function(n) {
                sideBar.html(menuHTML);
                n();
            });
    });
    $("body").on('click', '#xsSideBarMenuX', function(event) {
        /* Act on the event */
        event.preventDefault();
        var xsMenu = $("#xs-menu");
        xsMenu.animate({
            width: '100px',
            backgroundColor: 'transparent',
            opacity: '1'
        }, 500).html("<i class='fa fa-bars faMenu visible-sm-inline-block visible-xs-inline-block' aria-hidden='true' id='xsSideBarMenu'></i>");

    });

    $("body").on('click', '#sideBarMenuX', function(event) {
        event.preventDefault();
        var sideBar = $("#sideBar");
        sideBar.animate({
            width: '100px',
            opacity: '1'
        }, 500).html("<i class='fa fa-bars fa-3x faMenu hidden-sm hidden-xs' aria-hidden='true' id='sideBarMenu'></i>");

    });
    $("body").on('click', '.menuItem', function(event) {
        event.preventDefault();
        var sideBar = $(".menuVisable");
        var xsMenu = $("#xs-menu");
        xsMenu.animate({
            width: '100px',
            backgroundColor: 'transparent',
            opacity: '1'
        }, 500)
        sideBar.animate({
            width: '100px',
            opacity: '1'
        }, 500).html("<i class='fa fa-bars fa-3x faMenu hidden-sm hidden-xs' aria-hidden='true' id='sideBarMenu'></i><i class='fa fa-bars faMenu visible-sm-inline-block visible-xs-inline-block' aria-hidden='true' id='xsSideBarMenu'></i>");

    });
    //=================================PORTFOLIO=================================
    $("#mainContentHome").append("<div class='row portfolioPage'></div>");
     for (var i = 0; i < portfolioArray.length; i++) {
        $(".portfolioPage").append("<div class='col-md-4 portItem text-center' id='portItem" + i + "'><span class='imgText center-block'>click.</span>" + portfolioArray[i].img + "</div><div class='itemExpand center-block' id='itemExpand" + i + "'><a href='#'><i class='fa fa-times faPort' aria-hidden='true' id='faPort'></i></a><br><div class='portDes'>" + portfolioArray[i].compName + portfolioArray[i].description + portfolioArray[i].work + "</div></div>");
       //$(".itemExpand").append("<a href='#'><i class='fa fa-times faPort' aria-hidden='true' id='faPort'></i></a><br><div class='portDes'>" + portfolioArray[i].compName + portfolioArray[i].description + portfolioArray[i].work + portfolioArray[i].link + "</div>");
    }
    $("body").on('click', '#portItem0', function(event) {
    	
    	$(".portItem").hide(0);
    	$("#itemExpand0").show(1000, function() {
    });
    });
    $("body").on('click', '#portItem1', function(event) {
    	
    	$(".portItem").hide(0);
    	$("#itemExpand1").show(1000, function() {
    });
    });
    $("body").on('click', '#portItem2', function(event) {
    	
    	$(".portItem").hide(0);
    	$("#itemExpand2").show(1000, function() {
    });
    });
    $("body").on('click', '#portItem3', function(event) {
    	
    	$(".portItem").hide(0);
    	$("#itemExpand3").show(1000, function() {
    });
    });
    $("body").on('click', '#portItem4', function(event) {
    	
    	$(".portItem").hide(0);
    	$("#itemExpand4").show(1000, function() {
    });
    });
    $("body").on('click', '.portfolio', function(event) {
     $("#visibleMainContent").css('display', 'none');   
     $(".portfolioPage").css('display', 'block');   
      $(".contactPage").css('display', 'none');	
    });
     $("body").on('click', '.faPort', function(event) {
     	$(".itemExpand").hide(500);
    	$(".portItem").show(1000)
     	
     });
    //=============================HOME BUTTON===============================
    $("body").on('click', '.home', function(event) {
     $("#visibleMainContent").css('display', 'initial');  
     $(".portfolioPage").css('display', 'none');  
     $(".contactPage").css('display', 'none');   	
    });
    //=============================let's chat=================================
     $("body").on('click', '.contact', function(event) {
     	$("#visibleMainContent").css('display', 'none'); 
     	$(".contactPage").css('display', 'block'); 
     	$(".portfolioPage").css('display', 'none'); 
     });
});