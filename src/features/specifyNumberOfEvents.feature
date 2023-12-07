Feature: Specify Number of Events
    Scenario: When the user hasn't specified a number, 32 is the default number
        Given the user has opened the app
        When the list of upcoming events is displayed
        Then the default number should be 32

    Scenario: User can change the number of events
        Given the user has opened the app and the list of upcoming events is displayed
        When the user specifies the number of events visible
        Then the user should be able to see events equal to the given number at once
