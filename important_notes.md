# Why Cypress?
To understand the need for cypress, read this documentation from the official website

[Key Differences](https://docs.cypress.io/guides/overview/key-differences)

Here is an User Story and let us understand the details of it and see how can we automate it efficiently.

## User Story
This is a typical User Story for a login action.
- Open an URL
- Enter User Id and Password
- Click on Login
- Application should show Home page


Now, to test this user story, we can break or re-arrange it in this fashion

## Scenario = Login
### What information, do we expect from a user to do this action successfully?
   - URL of the application
   - User Id
   - Password

### What do we expect that user would do with this information?
- Open a browser and enter the URL
- Enter the User Id in some box, where the application expects the User ID
- Enter the Password in some box, where the application expects the Password
- Click on the Login button of that page
- Perform some other action on the Home Page 

### Food For Thought!
Are these the only scenarios that a smart QA Professional would test for? How can we add value here? List as many things that can go wrong here and see how do we incorporate them in our testing!


