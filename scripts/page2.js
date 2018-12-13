//sets focus on search input on page load
window.onload = function ()
{
    document.getElementById('searchField').focus();
}

//shows or hides site panels based on match from search input
function filter()
{
    document.getElementById('noResults').style.display = "none";

    var search = document.getElementById('searchField');
    var filter = search.value.toUpperCase();
    var sitesContainer = document.getElementById('devSites');
    var sites = document.getElementsByClassName('site');
    var siteList = Array.prototype.slice.call(sites);
    var siteCount = 0;

    for (i = 0; i < sites.length; i++)
    {
        a = sites[i];

        if (a.textContent.toUpperCase().indexOf(filter) > -1)
        {
            sites[i].style.display = "";
            siteCount = siteCount + 1;
        }
        else
        {
            sites[i].style.display = "none";
        }
    }
    
//This goes to the site when only one site is displayed or displays the no results div if none are displayed
var displayedSite = siteList.find(function (x) { return x.style.display === "" });
  if (siteCount === 1)
    {
        window.location = displayedSite.getAttribute("url");
    }
  else if (siteCount === 0)
    {
      document.getElementById('noResults').style.display = "block";
    }
}

//this clears the text from the search field
function clearText() {
    document.getElementById('searchField').value = "";
}

//these are the onClick functions for each site panel
function goToSpeedcurve() {
    window.location = 'https://speedcurve.com/';
}

function goToBrowserstack() {
    window.location = 'https://www.browserstack.com/';
}

function goToGoogle() {
    window.location = 'https://www.google.com/'
}

function goToSlack() {
    window.location = 'https://slack.com/'
}

function goToYelp() {
    window.location = 'https://biz.yelp.com/all_locations_reports/'
}

function goToPaypal() {
    window.location = 'https://www.paypal.com/signin?country.x=US&locale.x=en_US'
}

function goToDHL() {
    window.location = 'http://webtrack.dhlglobalmail.com/'
}

function goToAmazonSeller() {
    window.location = 'https://sellercentral.amazon.com/'
}

function goToDownDetector() {
    window.location = 'http://downdetector.com/status/aws-amazon-web-services/news/113099-problems-at-amazon-web-services-2'
}

function goToInternetHealth() {
    window.location = 'http://internetpulse.keynote.com/Main.aspx?Period=RH24'
}

function goToNationalID() {
    window.location = 'https://www.geradordecpf.org/'
}

//this goes to the site in focus when ENTER key is pressed
var sites = document.querySelectorAll('.site');
[].forEach.call(sites, function (el) {
    el.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            el.click();
        }
    });
});
