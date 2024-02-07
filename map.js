const apikey = "dMBz4i4PDcrgSlr8zO7NNpzNYk3VdyRbIyGsnksY";

const options = {
method: "GET",
headers: {
"X-Api-Key": apikey
}
};

//Fetching API
const countries = ["Austria", "Belgium", "Canada", "Chile", "Estonia", "Germany", "Hungary", "Iceland", "Ireland", "Mexico", "Norway", "Portugal", "Russia", "Slovakia", "Sweden", "Switzerland", "The Netherlands"];

async function getCountry(country) {
    try {

        if (!countries.includes(country)){
        document.getElementById("cpi").innerText = "Invalid Data";
        return;
         }

        const apiurl = `https://api.api-ninjas.com/v1/inflation?country=${country}`;
        const response = await fetch(apiurl, options);
        const data = await response.json();

        //Check if country passes through API
        if (data.length > 0 && data[0].hasOwnProperty("yearly_rate_pct")){

            const infoString = `Country: ${data[0].country}\n` +
            `Period: ${data[0].period}\n` +
            `Monthly Rate: ${data[0].monthly_rate_pct}%,\t` +
            `Yearly Rate: ${data[0].yearly_rate_pct}%`;

            document.getElementById("cpi").innerText = infoString;
        }
        else{
            document.getElementById("cpi").innerText = "Invalid Data";
        }

    }
    catch (error)
    {
        console.error("Error fetchin data:", error);
        document.getElementById("cpi").innerText = "Invalid Data";
    }
}

//Display Animation
document.querySelectorAll(".allPaths").forEach(e => {
    e.setAttribute('class', `allPaths ${e.id}`);

    //To indicate supported countries -Ensure region always stay grey
    if (countries.includes(e.id)){
        e.style.fill = "grey";

        e.addEventListener("mouseover", () => {
            window.onmousemove=function (j) {
            x = j.clientX
            y = j.clientY

            //Position of information box
            document.getElementById('name').style.top = y-20  + 'px'
            document.getElementById('name').style.left = x +10 + 'px'
            }

            document.getElementById("name").style.opacity = 1
            
            //Display country on information box
            document.getElementById("name").innerText = e.id
            
        });

        e.addEventListener("mouseleave", () => {
            document.getElementById("name").style.opacity = 0
        });

         //Add country into the getCountry void
         e.addEventListener("click",function(){
            getCountry(e.id)})

    }

    else{
        //When mouse over map
        e.addEventListener("mouseover", function () {
        window.onmousemove=function (j) {
            x = j.clientX
            y = j.clientY

            //Position of information box
            document.getElementById('name').style.top = y-20  + 'px'
            document.getElementById('name').style.left = x +10 + 'px'
            }
            const classes=e.className.baseVal.replace(/ /g, '.')         
            document.querySelectorAll(`.${classes}`).forEach(country =>{
                country.style.fill = "pink"
            })
            document.getElementById("name").style.opacity = 1
            
            //Display country on information box
            document.getElementById("name").innerText = e.id
        })

        //When mouse leave map
        e.addEventListener("mouseleave", function () {
            const classes=e.className.baseVal.replace(/ /g, '.')
            document.querySelectorAll(`.${classes}`).forEach(country =>{
                country.style.fill = "#ececec"
            })
            document.getElementById("name").style.opacity = 0
        })

        //Add country into the getCountry void
        e.addEventListener("click",function(){
            getCountry(e.id)
        })
    }
    

})
