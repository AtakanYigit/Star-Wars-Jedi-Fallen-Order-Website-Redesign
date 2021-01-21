var page                    = 1;
var enabled                 = true;
var pageClicked             = 0;
var aboutButtonClicked      = 0;
var homeButtonClicked       = 0;
var mediaButtonClicked      = 0;
let background1_ShipWreck   = document.getElementsByClassName("backgroundImageShipWreck")[0];
let background1_Sky         = document.getElementsByClassName("backgroundImageSky")[0];
let background1_Jedi        = document.getElementsByClassName("backgroundImageJedi")[0];
let background1_Rock        = document.getElementsByClassName("backgroundImageRock")[0];
let background1_Logo        = document.getElementsByClassName("backgroundImageLogo")[0];
let background1_Tie1        = document.getElementsByClassName("backgroundImageTie1")[0];
let background1_Tie2        = document.getElementsByClassName("backgroundImageTie2")[0];
let background1_Tie3        = document.getElementsByClassName("backgroundImageTie3")[0];
let background2             = document.getElementsByClassName("background2")[0];
let media                   = document.getElementsByClassName("media")[0];
let scroller                = document.getElementsByClassName("scroller")[0];
let buyNow                  = document.getElementsByClassName("buyNowButton")[0];
let homeButton              = document.getElementsByClassName("homeButton")[0];
let aboutButton             = document.getElementsByClassName("aboutButton")[0];
let mediaButton             = document.getElementsByClassName("mediaButton")[0];
let quotes                  = document.getElementsByClassName("quoteContainer")[0];

function myFunction(event) {                                        //Func to navigate between pages
    if(enabled == true){
        mainFunc();
    }
}

function mainFunc(){
    if(enabled == true){
        var y = event.deltaY;
        if(y>0){
            if(page == 3){
                page = 3;
            }else{
                page += 1
            }

            if(page == 2){
                page1Go();
                page2Come();
                scrollerDown();
                buyNowDown2()
                aboutButtonCheck();
                quotesActive();
            }else if(page == 3){
                page2GoUp();
                mediaCome();
                scrollerDown2();
                buyNowDown();
                mediaButtonCheck();
                quotesInactive();
            }
        }else if(y<0){
            if(page == 1){
                page = 1;
            }else{
                page -= 1
            }
            if(page == 1){
                page1Come();
                page2GoDown();
                scrollerUp();
                buyNowUp();
                homeButtonCheck();
                quotesInactive();
            }else if(page == 2){
                page2Come();
                mediaGo();
                scrollerUp2();
                buyNowUp2();
                aboutButtonCheck();
                quotesActive();
            }
        }else if(aboutButtonClicked){
            if(pageClicked>page){
                page = pageClicked;
                page1Go();
                page2Come();
                scrollerDown();
                buyNowDown2()
                aboutButtonCheck();
                quotesActive();
            }else if(pageClicked<page){
                page = pageClicked;
                page2Come();
                mediaGo();
                scrollerUp2();
                buyNowUp2();
                aboutButtonCheck();
                quotesActive();
            }
            aboutButtonClicked  = 0;
        }else if(homeButtonClicked){
            if(page==2){
                page = pageClicked;
                page1Come();
                page2GoDown();
                scrollerUp();
                buyNowUp();
                homeButtonCheck();
                quotesInactive();
            }else if(page==3){
                page = pageClicked;
                page2Come();
                mediaGo();
                scrollerUp2();
                buyNowUp2();
                aboutButtonCheck();
                page1Come();
                page2GoDown();
                scrollerUp();
                buyNowUp();
                homeButtonCheck();
                quotesInactive();
            }
            homeButtonClicked   = 0;
        }else if(mediaButtonClicked){
            if(page==1){
                page = pageClicked;
                page1Go();
                page2Come();
                scrollerDown();
                buyNowDown2()
                aboutButtonCheck();
                quotesInactive();
                page2GoUp();
                mediaCome();
                scrollerDown2();
                buyNowDown();
                mediaButtonCheck();
                quotesInactive();
            }else if(page==2){
                page = pageClicked;
                page2GoUp();
                mediaCome();
                scrollerDown2();
                buyNowDown();
                mediaButtonCheck();
                quotesInactive();
            }
            mediaButtonClicked   = 0;
        }
        console.log("pageclicked:  " + pageClicked);
        console.log("page:  " + page);
    }
    enabled = false;
    setTimeout(function(){ enabled = true; }, 2500);            //Change Page Transition Time Here
}



function page1Go(){
    background1_Sky.style.transform             = "translateY(-50px)";
    background1_ShipWreck.style.transform       = "translateY(-300px)";
    background1_Jedi.style.transform            = "translateY(-600px)";
    background1_Rock.style.transform            = "translateY(-1000px)";
    background1_Logo.style.transform            = "translateY(-400px)";
    background1_Tie1.style.transform            = "translateY(-300px)";
    background1_Tie2.style.transform            = "translateY(-200px)";
    background1_Tie3.style.transform            = "translateY(-100px)";

    background1_Sky.style.opacity               = "0";
    background1_ShipWreck.style.opacity         = "0";
    background1_Jedi.style.opacity              = "0";
    background1_Rock.style.opacity              = "0";
    background1_Logo.style.opacity              = "0";
    background1_Tie1.style.opacity              = "0";
    background1_Tie2.style.opacity              = "0";
    background1_Tie3.style.opacity              = "0";
}

function page1Come(){
    background1_Sky.style.transform             = "initial";
    background1_ShipWreck.style.transform       = "initial";
    background1_Jedi.style.transform            = "initial";
    background1_Rock.style.transform            = "initial";
    background1_Logo.style.transform            = "initial";
    background1_Tie1.style.transform            = "initial";
    background1_Tie2.style.transform            = "initial";
    background1_Tie3.style.transform            = "initial";

    background1_Sky.style.opacity               = "1";
    background1_ShipWreck.style.opacity         = "1";
    background1_Jedi.style.opacity              = "1";
    background1_Rock.style.opacity              = "1";
    background1_Logo.style.opacity              = "1";
    background1_Tie1.style.opacity              = "1";
    background1_Tie2.style.opacity              = "1";
    background1_Tie3.style.opacity              = "1";
}


function page2Come(){
    background2.style.transform                 = "translateY(-1498px)";
    background2.style.width                     = "2000px";
    background2.style.borderRadius              = "0";
    background2.style.opacity                   = "1";
}

function page2GoUp(){
    background2.style.transform                 = "translateY(-2430px)";
    background2.style.borderRadius              = "50%";
    background2.style.opacity                   = "0";
}

function page2GoDown(){
    background2.style.transform                 = "translateY(0px)";
    background2.style.borderRadius              = "500%";
    background2.style.opacity                   = "0";
}

function mediaCome(){
    media.style.opacity                         = "1";
    media.style.marginTop                       = "-710px";
}

function mediaGo(){
    media.style.opacity                         = "0";
    media.style.marginTop                       = "150vh";
}

function scrollerUp(){
    scroller.style.transform                    = "initial";
    scroller.style.height                       = "80px";
    setTimeout(function(){scroller.style.height ="32px"}, 1000);
    scroller.style.backgroundColor              = "#0061FF";
    scroller.style.boxShadow                    = "0 0 32px #5395ff";

}

function scrollerUp2(){
    scroller.style.transform                    = "translateY(300px)";
    scroller.style.height                       = "80px";
    setTimeout(function(){scroller.style.height ="32px"}, 1000);
    scroller.style.backgroundColor              = "#62e0f8";
    scroller.style.boxShadow                    = "0 0 32px #0058e6";
}

function scrollerDown(){
    scroller.style.transform                    = "translateY(300px)";
    scroller.style.height                       = "80px";
    setTimeout(function(){scroller.style.height ="32px"}, 1000);
    scroller.style.backgroundColor              = "#62e0f8";
    scroller.style.boxShadow                    = "0 0 32px #0058e6";

}
function scrollerDown2(){
    scroller.style.transform                    = "translateY(600px)";
    scroller.style.height                       = "80px";
    setTimeout(function(){scroller.style.height ="32px"}, 1000);
    scroller.style.backgroundColor              = "#ff0000";
    scroller.style.boxShadow                    = "0 0 32px #ff0000";
}

function buyNowDown(){
    buyNow.style.backgroundColor                = "#ff0000";
    buyNow.style.boxShadow                      = "0 0 32px #ff0000";
}
function buyNowDown2(){
    buyNow.style.backgroundColor                = "#00d5ff";
    buyNow.style.boxShadow                      = "0 0 32px #3180ff";
}

function buyNowUp(){
    buyNow.style.backgroundColor                = "#0061FF";
    buyNow.style.boxShadow                      = "0 0 32px #2033E1";
}

function buyNowUp2(){
    buyNow.style.backgroundColor                = "#62e0f8";
    buyNow.style.boxShadow                      = "0 0 32px #3180ff";
}

function homeButtonCheck(){
    homeButton.style.textShadow                 = "0 0 32px #0866ff,      0 0 32px #0866ff,      0 0 32px #0866ff";
    aboutButton.style.textShadow                = "0 0 32px #3180ff00,    0 0 32px #3180ff00,    0 0 32px #3180ff00";
    mediaButton.style.textShadow                = "0 0 32px #3180ff00,    0 0 32px #3180ff00,    0 0 32px #3180ff00";
}

function aboutButtonCheck(){
    homeButton.style.textShadow                 = "0 0 32px #3180ff00,  0 0 32px #3180ff00,  0 0 32px #3180ff00";
    aboutButton.style.textShadow                = "0 0 32px #3180ff,    0 0 32px #3180ff,    0 0 32px #3180ff";
    mediaButton.style.textShadow                = "0 0 32px #3180ff00,  0 0 32px #3180ff00,  0 0 32px #3180ff00";
}

function mediaButtonCheck(){
    homeButton.style.textShadow                 = "0 0 32px #ff000000,  0 0 32px #ff000000,  0 0 32px #ff000000";
    aboutButton.style.textShadow                = "0 0 32px #ff000000,  0 0 32px #ff000000,  0 0 32px #ff000000";
    mediaButton.style.textShadow                = "0 0 32px #ff0000,    0 0 32px #ff0000,    0 0 32px #ff0000";
}

function about(){
    pageClicked                 = 2;
    aboutButtonClicked          = 1;
    mainFunc();
}
function home(){
    pageClicked                 = 1;
    homeButtonClicked           = 1;
    mainFunc();
}

function mediabtn(){
    pageClicked                 = 3;
    mediaButtonClicked          = 1;
    mainFunc();
}

function quotesActive(){
    quotes.style.transition     = "opacity 2s ease-in-out  2s";
    quotes.style.opacity        = "1";
}
function quotesInactive(){
    quotes.style.transition     = "opacity 1.5s ease-in-out  -1s";
    quotes.style.opacity        = "0";
}
