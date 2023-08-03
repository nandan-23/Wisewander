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
async function generatePlan() {
    console.log('generatePlan function was called');

    const origin = document.getElementById("input0").value;
    const destination = document.getElementById("destination").value;
    const departure = document.getElementById("date").value;
    const number_of_days = document.getElementById("input4").value;
    const vibe = document.getElementById("input3").value;
    const budget = document.getElementById("input1").value;

    console.log('Values:', {origin, destination, departure, number_of_days, vibe, budget});

    const data = {
        origin,
        destination,
        departure,
        number_of_days,
        vibe,
        budget
    };

    console.log('Sending request to server with data:', data);


    const response = await fetch('http://localhost:8000/travel_plan/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    console.log('Server responded with:', response);

    const result = await response.json();
    // Display the JSON string in the "json-output" div.
    const formattedResult = formatResult(result.result,result.images);
    document.getElementById('json-output').innerHTML = formattedResult;
    console.log(result.result)
    console.log(formattedResult);
    console.log(result.images);
}
function formatResult(result, images) {
    let formattedResult = "";
    let imageIndex = 0; // Index for the images array
    const lines = result.split("\n");
    const imageSize = 200; // Set the desired image size here
    lines.forEach(line => {
        if (line.startsWith("**") && line.endsWith("**")) {
            formattedResult += `<strong>${line.substring(2, line.length - 2)}</strong><br>`;
        } else if (line.startsWith("*")) {
            let processedLine = line.substring(1);
            processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
            formattedResult += `<li>${processedLine}</li>`;
        } else if (line.startsWith("[")) {
            // Assuming that lines with images start with "["
            // Replace line with the corresponding image from the images array
            formattedResult += `<img src="${images[imageIndex]}" alt="Image ${imageIndex + 1}" style="width:${imageSize+150}px;height:${imageSize}px;"><br>`;
            imageIndex++;
        } else {
            formattedResult += `${line}<br>`;
        }
    });
    return formattedResult;
}

document.getElementById("inputForm").addEventListener('submit', (event) => {
    console.log('Form was submitted');
    event.preventDefault();
    generatePlan();
});

