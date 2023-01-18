console.log("HI!");

const countryPromises = [];
const getCountryByName = async (countryName) => {
    // Fetch array
    const countryArray = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => {return response.json()})
    
    // Find the country based on search
    let country;
    for (let i = 0; i < countryArray.length; i++) {
        if (countryArray[i].name.common.toLowerCase() === countryName.toLowerCase()) {
            country = countryArray[i];
        }
    }
    console.log(country);
};

getCountryByName("united");