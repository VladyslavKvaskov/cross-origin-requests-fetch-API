var result = document.querySelector('#result');
var reviews = document.querySelector('#reviews');
reviews.innerHTML = 'Loading...';

function fetchURL() {
fetch('https://marinmover.com/fetchAPI/fetch_url.php', {

      method: 'POST',
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'url=https://www.yelp.com/biz/flagship-movers-mill-valley?osq=flagship+movers'

}).then(response=>response.text()).then(data=>{

  result.innerHTML = data;
  try{
  reviews.innerHTML = document.querySelector('.review-list').innerHTML;
  }
  catch(err){
    console.log('error');
    fetchURL();
  }
})

}

fetchURL();




//var headers = new Headers();

//headers.set('Authorization', 'Basic ' + base64.encode('gadgetninja916@gmail.com' + ":" + 'Folsom65!'));
/*
fetch('https://mybusiness.googleapis.com/v4/accounts/account_name/locations/location_name/reviews', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer  ' + 'authentication-224803'
  }
})
.then(response=>response.text())
.then(data=>{result.innerHTML = data;})
*/
