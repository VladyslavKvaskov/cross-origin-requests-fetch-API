# cross-origin-requests-fetch-API
In this repository, I have developed a php file that can be used to make cross-origin requests using fetch API.
I am using cross-origin request to fetch reviews from Yelp using fetch API.

https://codepen.io/VladKvaskov/pen/MZGWgz

## The fetch API code for requests

      fetch('fetch_url.php', {

            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'url=URL_TO_FETCH'

      }).then(response=>response.text()).then(data=>{

        //do what you want with the data from response
        
      })

### PHP file_get_contents
You can use PHP to fetch a web page

      <?php
            echo file_get_contents('https://www.yelp.com/biz/flagship-movers-mill-valley?osq=flagship%20movers');
      ?>

And then use fetch API to fetch the result

      fetch('fetch_url.php').then(response => response.json()).then(data => {
            //do what you want with the data from response
      })
