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
