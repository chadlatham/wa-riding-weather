http://chadlatham-wd-q1-project.surge.sh/

https://github.com/chadlatham/wd-q1-project.git

# WA Riding Weather
This project is designed to solve the problem of people getting rained out at one off-road riding area when another choice was available. In Washington State, the weather changes frequently, and a person who is responsible for organizing an outing would feel the pain of sending his or her group to the wrong area. Having current weather forecasts presented in a simple and timely manner for multiple riding areas would be invaluable in the decision making process. WA Riding Weather attempts to solve this problem by letting a person select multiple riding areas in Washington to receive SMS based forecasts at regular intervals.

To accomplish this task, the site uses three API's - Google Maps, OpenWeatherMap, and TextBelt. Google Maps is used to create pins for each riding area and to provide a base layer for OpenWeatherMap current weather data. TextBelt provides free outgoing SMS text messages which are formatted using data from OpenWeatherMap's free 4-day forecasts.

Feedback from Patrick Richardson was critical to development of the user flow of the site. Specifically, the visual indicators that keep a user informed on how to proceed to receive forecasts. Mobile formatting was also influenced by his feedback.

The biggest implementation challenge was creating the interaction between Google Maps and OpenWeatherMap through a custom data layer. Limiting the number of API requests to OpenWeatherMap is challenging as users move the map around and require new data. An intermediary data storage layer is necessary but not implemented in the sites current version.
