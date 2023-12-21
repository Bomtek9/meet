# Meet App 📍

## Objective

To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.
Serverless

Going serverless for this project will help it be set up faster, saving a lot of time, as well as enabling it to easily scale in the future, if necessary. My serverless functions implementation will be made using AWS Lambda, in combination with an external Google Calendar API, and will also handle the OAuth verification.

## Key Features:

● Filter Events by City.
● Show/Hide Event Details.
● Specify Number of Events.
● Use the App When Offline.
● Add an App Shortcut to the Home Screen.
● Display Charts Visualizing Event Details.

## Technologies:

● AWS
● React
● TDD technique
● Google Calendar API

## live app link: https://bomtek9.github.io/meet/

## Features and User Stories

FEATURE 1: FILTER EVENTS BY CITY As a user, I should be able to filter events by city, so that I can see the events happening in the city I am interested in.

-Given user wanted to filter events by city when the user starts typing in the search bar Then the user should see a list of city suggestions that match what they’ve typed

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS As a user, I should be able to show/hide event details, so that I can see more details about an event that interests me.

-Given the user sees a list of events in the app When the user clicks on the more infos button Then the user will be able to see more details about a specific event.

FEATURE 3: SPECIFY NUMBER OF EVENTS .As a user, I should be able to specify the number of events I want to view in the app, so that I can see more or fewer events on my list.

-Given user wanted to specify the number of events they see on the app at once When user selects the said number of events Then the users app shows them the correct amount of events.

FEATURE 4: USE THE APP WHEN OFFLINE As a user, I should be able to use my app when its offline, so that I can still access the events I was viewing last time I was online.

-Given the user doesnt currently have an internet connection When the user opens the app Then the user sees and can navigate through the events they saw last time they were online.

FEATURE 5: ADD AN APP SHORTCUT TO THE HOME SCREEN As a user, I should be able to add my apps shortcut to my home screen, so that I can open the app faster.

-Given the user wanted to open their app faster When the user adds the app shortcut to their home screen Then they can access it more easily.

FEATURE 6: DISPLAY CHARTS VISUALIZING EVENT DETAILS As a user, I should be able to display charts visualizing event details, so that I have more precise information about the events.

-Given the users open the app When users selects chart view Then the user will have information on what events are happening in which city.
