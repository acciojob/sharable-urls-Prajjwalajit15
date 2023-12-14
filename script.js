// your code here
 function updateUrl() {
        var name = document.getElementById('name').value;
        var year = document.getElementById('year').value;

        // Construct the URL with query string
        var url = 'https://localhost:8080/?name=' + encodeURIComponent(name) + '&year=' + encodeURIComponent(year);

        // Update the h3 element with the generated URL
        document.getElementById('url').textContent = url;
    }