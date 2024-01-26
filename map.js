

const url = 'https://inflation-rate-around-the-world.p.rapidapi.com/g20';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '76582a7b90mshfdb9aab61fc9aa5p12ba3cjsn989f206324a5',
		'X-RapidAPI-Host': 'inflation-rate-around-the-world.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

// Fetch and parse data (as shown in your code snippet)

// Create a Leaflet map instance
const map = L.map('map-container').setView([40, 0], 2); // Adjust center and zoom as needed
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Create markers and tooltips
for (const countryData of parsedData) {
    const marker = L.marker([countryData.latitude, countryData.longitude])
        .addTo(map)
        .bindPopup(`Country: ${countryData.name}<br>Inflation Rate: ${countryData.inflationRate}%`);
}
