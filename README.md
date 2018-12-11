# cross-origin-requests-fetch-API
In this repository, I have developed a php file that can be used to make cross-origin requests using fetch API.
I am using cross-origin request to fetch reviews from Yelp using fetch API. Click [here](https://marinmover.com/fetchAPI/) to see the demo.

## The fetch API code for requests

      fetch('https://marinmover.com/fetchAPI/fetch_url.php', {

            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'url=URL_TO_FETCH'

      }).then(response=>response.text()).then(data=>{

        //do what you want with the data from response
        
      })
      
### The contents of fetch_url.php

      <?php header('Content-Type: text/html');
      $url = $_POST['url'];
      echo file_get_contents($url);
      ?>
      
#### Thanks for visiting this repository
In the .htaccess file on the server, I wrote 

      Header set Access-Control-Allow-Origin "*"
      
so you can access everything on the https://marinmover.com/ using fetch API.
