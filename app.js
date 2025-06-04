const api = {
    key: "aeb9a648de45dc65828b34450d2ec0df",
    baseurl: 'https://api.openweathermap.org/data/2.5/'
}
const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(e) {
    if (e.keyCode == 13) {
        getResult(searchBox.value)
        // console.log(searchBox.value);
    }


}

function getResult(query) {

    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json()
        })
        .then(displayResults)
        .catch(() => {
            alert("Incorrectly Entered ");
            // alert('Try Again');
            throw console.error(('try again'));

        })

}
function displayResults(weather) {
    // console.log(weather);
    let city = document.querySelector('.location .city')
    city.innerHTML = `${weather.name}${weather.sys.country}`
    let now = new Date();
    let date = document.querySelector('.location .date')
    date.innerHTML = dateBuilder(now)
    let temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`
    let weatherEl = document.querySelector('.weather')
    weatherEl.innerHTML = weather.weather[0].main;
    let hilow = document.querySelector('.hi-low')
    hilow.innerHTML = `${Math.floor(weather.main.temp_min)}<span>°C</span> /${Math.ceil(weather.main.temp_max)}<span>°C</span>`
}

function dateBuilder(s) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[s.getDay()];
    let date = s.getDate();
    let month = months[s.getMonth()];
    let year = s.getFullYear();
    return `${day} ${date} ${month} ${year}`;
}

function back() {
    document.getElementById('body').style.backgroundImage = "url(https://mlk1kpjw0crg.i.optimole.com/w:980/h:653/q:mauto/ig:avif/f:best/https://www.fulltimefamilies.com/wp-content/uploads/2021/08/AFBC63E6-6A23-4933-8F1E-3FD3FAB5054D.jpeg)"
}

 function myFunction() { return document.getElementById('body').style.backgroundImage = "url(https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }

myFunction().then(
    () => {
        setTimeout(setter, 1000)
        async function setter() {

            let modal = document.getElementById('modal');
            modal.style.display = "NONE"

        }
    }
);