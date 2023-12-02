Key Features:

Filter Events by City
Toggle Event Information
Dictate Event Quantity
Offline Functionality
App Shortcut Addition to Home
Visual Charts of Event Statistics

Feature: Filter Events By City

Scenario: When user hasn't searched for a city, show upcoming events from all cities. Given user hasn't searched for any city When the user opens the app Then the user should see the list of all upcoming events.

Scenario: User should see a list of suggestions when they search for a city. Given the main page is open When user starts typing in the city textbox Then the user should receive a list of cities (suggestions) that match what they’ve typed

Scenario: User can select a city from the suggested list. Given user was typing “Berlin” in the city textbox And the list of suggested cities is showing When the user selects a city (e.g., “Berlin, Germany”) from the list Then their city should be changed to that city (i.e., “Berlin, Germany”) And the user should receive a list of upcoming events in that city

Feature: Show/Hide Event Details

Scenario: Initially, the event details are hidden. Given the user is viewing the list of events When no action is taken on an event Then the event details should be hidden by default

Scenario: User can expand an event to view its details. Given the user is viewing the list of events When the user clicks on the "Show Details" button of an event Then the detailed information about the event should be displayed

Scenario: User can collapse an event to hide its details. Given the user has expanded an event to view its details When the user clicks on the "Hide Details" button of the event Then the event details should be hidden again

Feature: Specify Number of Events

Scenario: When a user hasn't set a number of events to display, show all events
Given user hasn't filtered events by a city When the user is on the home page of events Then a total number of events should be shown

Scenario: When a user has set number of events to display
Given the user is on the home page of events When the user sets a number in the number of events text box Then the user should see a that number of events in the list

Feature: Use the App When Offline

Scenario: View cached events when offline
Given I am offline
When I visit the events page
Then I should see the events that were last cached

Scenario: Show error for search setting changes when offline
Given I am offline
When I change the search settings
Then I should see an error message

Feature: Add an App Shortcut to the Home Screen

Scenario: Add app shortcut to home screen
Given I am on the homepage of the app
When I choose to add the app to the home screen
Then a shortcut of the app should be added to my device's home screen

Feature: Display Charts Visualizing Event Details

Scenario: Display a chart of events by city
Given I am on the events page
When I look at the events visualization section
Then I should see a chart showing the number of upcoming events in each city

Technical Mandates
Framed in React
Strict adherence to TDD
Google Calendar API with OAuth2
Serverless function calls (preferably AWS Lambda)
GitHub hosting
Full compatibility, inclusive of IE11
Adaptive design (ranging from 1920px to 320px)
Achieves PWA standards as per Lighthouse
Service workers ensure offline functionality
Deployment via GitHub Pages
Object-Oriented Programming (OOP) for alerts
Data visualization tools integrated
Aiming for ≥ 90% test coverage
Performance monitoring via online tools

Serverless functions
In the Meet app, serverless functions will play a crucial role in handling authorization for accessing public calendar events from the Google Calendar API. Users need to be authorized to retrieve event data for rendering in the React app. This authorization is facilitated by serverless functions, which are a more efficient alternative to building and maintaining a full server for this purpose. In this context, serverless functions will generate and provide access tokens, ensuring secure access to the Google Calendar API. AWS Lambda will be the chosen cloud-service provider for implementing these serverless functions, making the app's architecture more scalable and cost-effective.
