## Inflation Theme
By developing Inflation Atlas, we plan to educate users on the very basics of inflation, to the point where even a 4-year-old child could understand. We kept the website as minimalistic as possible and provided details such as a navigation map to see the different inflation rates in each country.

-- Sales Pitch --

Are you interested to know more about inflation? Inflation Atlas is meant to develop a good guide for users with minimal or no knowledge. With this website, we provide a navigation map for users to view the different inflation rates for each country. We also developed a quiz game, to make users test their knowledge or.. try their luck.

## Design Process
The original idea was to keep the website simple and plain. In the wireframe, we started with a black background. Turns out we went along with a white background as it looks more clean and neat. For the navigation bar, we decided to not overload it with too much information, we also used the hamburger menu to look better on mobile view. We used the catchphrase "DOLLARS & SENSE" with an animation effect and Lottie's animations to catch the attention of users.

## Features
- Home: Link back to homepage
- Info: Link to information about inflation
- Map: Link to navigation map for user to view inflation rates for each country
- Account: Link to account page
- Quiz: Test users on their knowledge
- Lottie Animation to attract attention

## Existing Features
- Map: Created using SVG image and multiple effects to make the map look fun and interactive so that users can navigate it easily.
- Quiz: Created using basic HTML CSS and JS, to see how well users understand the information we provided.
- Account: Created using basic HTML CSS and JS, for users to keep track of updates on our website.

## Technologies Used
- Implemented HTML, CSS and Javascript for every webpage.
- Implemented Lottie Animation.
- Implemented SVG image for the navigation map.
- Implemented bold fonts to look clean.

## Testing 
1. Navigation Map:
    1. Click on "Map" from the navigation bar.
    2. Try hovering around the map, and see if the hovered map turns white.
    3. Try to hover over any part of the map, and see if the country's name appears.
    4. Try to click on any part of the map, and see if the output gives invalid data or information about the country.
    5. Try to hover past a valid country (that passed through API), it should stay grey.
    6. Try to click on valid country, it should either state invalid data or give information about the country.
  
2. Quiz:
    1. Click on "Start Quiz"
    2. Try clicking on any answer, and see if it indicates the correct answer using colors.
    3. Try clicking on any answer on the first question, and see if the timer starts running.
    4. Try clicking on any answer, and see if other answers can be selected.
    5. Try clicking on any answer, and see if the "Next" button shows up.
    6. Try clicking on next, and see if it goes to the next question.
    7. Try completing the quiz, and see if the score appears to be true.
    8. Try completing the quiz, and see if the timer stops.
    9. Try clicking on try again, and see if it resets questions and timer.
  
3. Account:
   1. Click on "Account" from the navigation bar.
   2. Try writing on any input box.
   3. Try checking "Remember me"
   4. Try clicking "Send", and see if content is successfully recorded.
   5. Try clicking the "Register" link, it should stay on the same page.
       

### Project on different browsers and screen sizes
- On Laptop/Computer: The website looks minimalistic and has plenty of space, not bounded by large font and Lottie's animation. However, some devices might find the navigation map hard to view.
- On mobile:

### Interesting problems during the testing 
- Navigation Map: The original idea was to simply display the country's name and CPI when hovered over any part of the map. Turns out it couldn't work as we cannot link the API information on the information box. Hence, we decided to implement it on another box instead, which would be a better fit because it is large enough to provide all the information. The hardest part was when we figured out the reason why so many countries are invalid as the API server only provides API to certain countries for non-premium users, hence explain why only a selected few countries are valid data.

- Quiz: The original idea was what it looked like, to display multiple-choice questions and throw colors to indicate whether if answer is right or wrong. However, we found out that some answers can be repeatedly selected in the same question, hence we used the no-drop function on the cursor to prevent it. We also realised that questions can be skipped without selecting an answer by clicking on the "Next" button, hence we implemented the "nextBtn" display to none when a new question comes out, and to block when an answer is selected.
  
## Credits
- The navigation bar is taken from [BootStrap](https://getbootstrap.com/docs/5.0/components/navbar/)
- The Lottie's animation is taken from https://lottiefiles.com/
  1. https://lottiefiles.com/animations/reading-book-BCMBGK4iag
  2. https://lottiefiles.com/animations/money-money-money-S23a9Fs4Nk
  3. https://lottiefiles.com/animations/yellow-quiz-NvMT87O2kL
- The font for index.html is taken from [Google Fonts](https://fonts.google.com/specimen/Poppins)
- HTML, CSS and Javascript are referenced from [ChatGPT](https://chat.openai.com/)

### Media
- The SVG image used in "Map" was obtained from https://simplemaps.com/static/demos/resources/svg-library/svgs/world.svg
- The news in "Recent News Articles" from
  1. https://www.jpmorgan.com/insights/global-research/economy/global-inflation-forecast'
  2. https://www.jpmorgan.com/content/dam/jpm/cib/complex/content/research/global_inflation_2024/Inflation_Header_Image.svg
  3. https://www.wsj.com/articles/bank-of-thailand-keeps-policy-rate-unchanged-as-inflation-eases-d5a50e38
  4. https://images.wsj.net/im-922270?width=700&size=1.5005861664712778
  5. https://www.bloomberg.com/news/articles/2024-02-05/turkish-inflation-upswing-to-test-resolve-of-new-central-banker
  6. https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ietw_iMx5wn0/v0/1800x1201.jpg
  7. https://www.scmp.com/economy/economic-indicators/article/3251324/china-inflation-consumer-prices-fall-fourth-straight-month-january-adding-deflation-concerns
  8. https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2024/02/08/742806e0-9fc3-4253-a5ea-071da2f47aae_7cb24801.jpg?itok=5gnid1yz&v=1707356487
  9. https://www.channelnewsasia.com/business/philippine-finance-secretary-does-not-expect-rate-hike-inflation-easing-4109881
  10. https://onecms-res.cloudinary.com/image/upload/s--wq8xKiSe--/c_fill,g_auto,h_468,w_830/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/v1/one-cms/core/2024-02-08t093835z_2_lynxmpek170aj_rtroptp_3_philippines-economy-rates.jpg?itok=iy2QKaOP
  

