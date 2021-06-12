const api = {
        key:"4b61509c56a92855a21c77e7fdc12eb6",
        base:"https://api.openweathermap.org/data/2.5/"
}
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);
function setQuery(evt){
        if(evt.keyCode == 13)
        getResult(searchbox.value);      
}
function getResult(query){
        var i,j=0;
        for(i=0;i<query.length;++i){
                if(query.charAt(i)==' ')
                j++;
        }
        if(query.length==j){
                window.alert("Input Field Must Not be Empty");
                return;
        }
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
                return weather.json();
        }).then(displayResult);
        function displayResult(weather){
                let city = document.querySelector('.city-location');
                city.innerText = `${weather.name}, ${weather.sys.country}`

                let now = new Date(); 
                let date = document.querySelector('.date-location');
                let days = ["Monday","Tuesday","Wednesday","Thursday","Friday",
                "Satuarday","Sunday"];
                date.innerText = days[now.getDay()-1];

                let temp = document.querySelector('.temprature');
                temp.innerText = `${Math.round(weather.main.temp)}°C`;
               
                let climate = document.getElementById("unique");
                climate.innerText = weather.weather[0].main;
                
                if(weather.weather[0].main=="Clouds"){
                var img = document.createElement('img');
                img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKT91PExFzWhlCaxIhuJML046g6QNvEUyTQ&usqp=CAU';
                img.style.height = '100px';
                img.style.width = '200px';
                document.getElementById("unique").appendChild(img);
                }else{
                        if(weather.weather[0].main=="Clear"){
                        var img = document.createElement('img');
                        img.src='https://windeurope.org/wp-content/uploads/wind-turbines-clear-weather-yellow-flower-field-vibrant-blue-sky.jpg';
                        img.style.height = '100px';
                        img.style.width = '200px';
                        document.getElementById("unique").appendChild(img);
                        }else{
                                if(weather.weather[0].main=="Haze"){
                                var img = document.createElement('img');
                                img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmU_RXoxWVOmzwgtTBxU8ok3Jp8ZgO8gz_A&usqp=CAU';
                                img.style.height = '100px';
                                img.style.width = '200px';
                                document.getElementById("unique").appendChild(img);
                                }else{
                                        if(weather.weather[0].main=="Rain"){
                                        var img = document.createElement('img');
                                        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFc0spXKrg98oiW0rzwZhScXWuellBu3OB-A&usqp=CAU';
                                        img.style.height = '100px';
                                        img.style.width = '200px';
                                        document.getElementById("unique").appendChild(img);
                                        }else{
                                                if(weather.weather[0].main=="Snow"){
                                                var img = document.createElement('img');
                                                img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGKho6s6JhOEhNQ1U4hd6t9V4nBeD_QXjPw&usqp=CAU';
                                                img.style.height = '100px';
                                                img.style.width = '200px';
                                                document.getElementById("unique").appendChild(img);
                                                }else{
                                                        if(weather.weather[0].main=="Mist"){
                                                        var img = document.createElement('img');
                                                        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTojgCGySxLJgBgCI4pE8i_trbOF-8NxacYOQ&usqp=CAU';
                                                        img.style.height = '100px';
                                                        img.style.width = '200px';
                                                        document.getElementById("unique").appendChild(img);
                                                                
                                                        }else{
                                                                if(weather.weather[0].main=="Fog"){
                                                                var img = document.createElement('img');
                                                                img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzl53X8dXYVyuMLdmaZSmxRyIUlKJ91gGWQg&usqp=CAU'
                                                                img.style.height = '100px';
                                                                img.style.width = '200px';
                                                                document.getElementById("unique").appendChild(img);
                                                                }
                                                        }
                                                }
                                        }
                                }
                        }
                }
                let windspeed = document.querySelector(".wind-speed");
                windspeed.innerText = `WindSpeed:${weather.wind.speed}`;
                     
        }
}