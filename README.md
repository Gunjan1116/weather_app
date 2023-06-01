# weather_app
## Deployed Links
- [backend_link](https://eloquent-sopapillas-693db4.netlify.app/)
- [frontend_link](https://eloquent-sopapillas-693db4.netlify.app/)
## How to Use
- First User Need to **Register** by entering name,email,city name and password.
- Then User need to **login** by entering email and password which they have given during register.
- Then they can search the city name and **click the button search** to get current weather data of that search city.
- User can click on **save to History button** to save the data in history.
- User can click on **Get Previous Store Data** at navbar to see all history data which is saved by that paticular user.
## All Routes
### User Route
- backend_link/user/register
    - method:"POST"
    - body:
        - name:String,
        - email:String,
        - currentLocation:String,
        - password:String
    - response:{"msg":"error while registering"}
- backend_link/user/login
    - method:"POST"
    - body:
        - email:String,
        - password:String
    - response:{"msg":"Login Successfully","token":token}
### Weather Route
- backend_link/weather/current?q=${city_name}
    - method:"GET"
    - response:{"msg":`Current weather data for ${q} city`,"data":allData}
- backend_link/weather/save
    - method:"POST"
    - body:
        - cityName:String,
        - temperature:Number,
        - date:String,
        - time:String,
        - userId:String
    - provide token in headers
    - response:{"msg":"Data is saved to history"}
backend_link/weather/history
    - method:"GET"
    - provide token in headers
    - response:{"msg":"previous data","data":reqUser}