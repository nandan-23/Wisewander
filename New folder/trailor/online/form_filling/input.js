// Replace 'YOUR_ACCESS_KEY' with your actual Unsplash Access Key
let unsplashAccessKey = 'T6dRWHW6uAnjkjScxkYjojWO_Cy3UfYM7YP-HIuuuHA'; 

document.getElementById('destination').addEventListener('change', function(){
    let place = this.options[this.selectedIndex].text;
    
    fetch(`https://api.unsplash.com/search/photos?query=${place}&client_id=${unsplashAccessKey}`)
    .then(response => response.json())
    .then(data => {
        if(data && data.results && data.results.length > 0) {
            let imageUrl = data.results[0].urls.regular;
            document.getElementById('destinationImage').src = imageUrl;
        }
    })
    .catch(error => console.log(error));
});





document.getElementById('destination').addEventListener('change', function(){
    let place = this.options[this.selectedIndex].text;
    
    // Add zoomOut class
    document.getElementById('destinationImage').classList.add('zoomOut');
    
    fetch(`https://api.unsplash.com/search/photos?query=${place}&client_id=${unsplashAccessKey}`)
    .then(response => response.json())
    .then(data => {
        if(data && data.results && data.results.length > 0) {
            let imageUrl = data.results[0].urls.regular;
            // Set timeout to change the image after a delay, during which the image will be scaled to 0
            setTimeout(() => {
                document.getElementById('destinationImage').src = imageUrl;
                // Remove zoomOut class
                document.getElementById('destinationImage').classList.remove('zoomOut');
            }, 1000); // Delay time should be the same as the transition duration
        }
    })
    .catch(error => console.log(error));
});

