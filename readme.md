## Automation testing 
The goal of this repo is to guide new aspiring learner who has little to no experience in the world of automation testing slowly.

My hope is that this effort will not be a standard run off the mill type of documentation or exercises, but, rather explain why we do things and how to adopt and learn the basics so that we build a strong foundation and innovate on that.

# Pre-requisite
1. Latest version of NodeJs from https://nodejs.org. 
2. Visual Studio Code - you can download it from Microsoft website for free

# Steps
1. From a command prompt, create a folder using md or mkdir CypressProjects
2. Then change dir using cd CypressProjects
3. Then create another dir using mkdir helloWorld
4. cd to helloworld
5. Then run npm install cypress --save-dev
    - This step will install all the dependencies that are needed to create and run Cypress tests for browser based applications
6. Now open that folder in VS Code
7. You should see a file called package.json with these contents. 

```
{
  "devDependencies": {
    "cypress": "^13.3.0"
  }
}
```
This means that for my program to run, I am depending on a package or software called "cypress" and the minimum version of that package I am expecting to work with is 13.3.0

8. Then from the same folder in the command prompt `C:\CypressProjects\helloWorld`, execute this command. `npx cypress open`

This will open a web browser (an electron application) that looks like this
![Initial Setup](https://github.com/dineshavsab/CypressProjects/blob/4e7ff3fdc22a8e3f004b1de0407918ec9a3d9c6b/docs/initial_cypress_setup.png)

9. Click on the Not Configured button of E2E Testing  
![E2E Configuration](https://github.com/dineshavsab/CypressProjects/blob/d853599612340d9e588b17888ec715c1c06987b7/docs/setup%202.png)   

10. #### Start E2E Testing in Chrome
![Setup Chrome](https://github.com/dineshavsab/CypressProjects/blob/8bfcd5c3e0d4742de868a770c26f452d2b4df63f/docs/Setup%20Chrome.png)

11. ### Scaffolding Default Examples
  Click on 'Scaffold example specs' 
  ![Scaffold](https://github.com/dineshavsab/CypressProjects/blob/1775536548c773c7732f69ff9973fe997cbe00d6/docs/Initial%20Cypress%20App%20Before%20Scaffolding.png)

12. A modal page should appear like this and click on 'Okay, I got it!'
![Okay](https://github.com/dineshavsab/CypressProjects/blob/e48375c8fd88da4b4fddb7619963cb6d10a6d0a2/docs/Scaffold%20Modal.png)

13. Screen after Scaffolding
![Final Screen](https://github.com/dineshavsab/CypressProjects/blob/dcbdb29c6da5f462af9753e6ad8e29e7acda590a/docs/Final%20Page%20after%20Scaffolding.png)

You have successfully setup the Cypress environment on your machine now.

When you click on the todo.cy.js, you will see
![todo.cy.js](https://github.com/dineshavsab/CypressProjects/blob/42db2e073f102770d3649f356afebce10f99d552/docs/todo.cy.js.png)

Test results of todo.cy.js 
![testresults](https://github.com/dineshavsab/CypressProjects/blob/42db2e073f102770d3649f356afebce10f99d552/docs/test%20results.png)


Congratulations !!! 

You have now completed the setup of hello world. 

You are free to explore the other tests as required.