Feature: Login to application
  Scenario: Enter valid username and password to login application
  
    Given User are on Home Page
    Given user enter valid username as "username" and password as "".
     When User click on login button
     Then user are on his login home page
      And user should see his account page
