I started with working on the backend first. Added all the basic configuration same as doggr.
Then added all the model's, seed, migrations.
Once all the model's were done, I worked on adding the basic routes to get the users, get the food carts and get the reviews.

Tested if everything was working fine using postman.

Once everything was working, I added the docker compose file and tested if it was working in docker. I used the docker compose from doggr and created a similar file.
Didn't run into any issues so far.

Backend was working fine so moved to front end. Created the basic configuration same as doggr.
For front end I ran into multiple issues as I am new to react and hence could not finish all that I wanted to add on this application.

1. CORS issue, the API's were not accessible due to CORS. Hence made all the changes referencing doggr app.
2. One of the issues that took me hours to figure out was how to transfer data from one component to another. Googled a lot, tried multiple solutions but nothing seemed to be working. Finally, was able to do it using params.
3. Another issue that I faced was to redirect to the new component on click. It took me hours to figure it out. I also posted on discord, googled, tried some solutions and finally figured it out.
4. Basically, took me time as I was new to react and had to figure out everything and then implement.
5. Took some time to figure out auth0, ran into some issues, googled them and was able implement.

After working on the reviews page, I started working on the microservice. I implemented a python flask microservice. This microservice is returns reviews for any specific food cart. I decided to do this because there will be tons of reviews on any food cart so a microservice can handle the response for the same which could be faster.

Then added some more routes in backend as per the requirement. Used these on the frontend. Here, I ran into some issues with fetching the data the way I wanted. Finally used, find(). It was easy but spent some time to figure it out.

Finally, worked on some frontend stuff, like adding styles and some changes and debugging if everything works.

I could not do everything I intended to. These are,
1. Styling on front end
2. Protected routes
3. Adding reactions on reviews
4. Adding images for food carts