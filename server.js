const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Endpoint to fetch data from an external API and render it
app.get('/', async (req, res) => {
    try {
        // Replace this URL with the external API endpoint you want to fetch data from
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        
        // Fetch data from the external API
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Render the data using an EJS template
        res.render('index', { data });
    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.status(500).send('Error fetching data from API');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
