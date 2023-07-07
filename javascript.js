 burger=document.querySelector('.burger');
 navbar=document.querySelector('.navbar');
 navlinks=document.querySelector('.nav-links');

burger.addEventListener('click',()=>{
navlinks.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');
})
function callphoneNumber(){
     var phoneNumber='+91 5264756137';
     if(navigator.userAgent.match(/iphone|ipad|ipod|Android/)){
          window.location.href='tel:'+phoneNumber;
     }else{
          alert('please dial' +phoneNumber+ 'on your phone to call us');
     }
}

function sendEmail() {
     var emailAddress='infoexample@gmail.com';
     var mailtoLink='mailto:' +emailAddress;
     window.location.href=mailtoLink;
}
function openMap() {
     var latitude = 28.604101;   // Replace with your latitude
     var longitude = 77.097616;  // Replace with your longitude
     var zoomLevel = 10;  // Adjust zoom level as needed

     // Create a URL with the specified coordinates and zoom level
     var mapUrl = 'https://www.google.com/maps?q=' + latitude + ',' + longitude + '&z=' + zoomLevel;

     // Open the map URL in a new tab or window
     window.open(mapUrl);
   }
