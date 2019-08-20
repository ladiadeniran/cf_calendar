### A Simple App to Schedule an Appointment built with Ruby on Rails (API) and React for the Front End

##### Requirements
  The following dependencies should be installed in order to run the App locally.
  * Git
  * Postgres version 10 or greater
  * Nodejs version 8 or greate
  * Bundler version 1 or greater
  * Ruby version 2.4 or greater (developed this using Ruby 2.6.1)
  * Yarn(preferable) or npm5+

##### Running The App Locally
* Clone the repo with `git clone `
* On your terminal Navigate to the root of the Repository i.e `cf_calendar` or what you cloned the project into then move into the rails api folder `cf_calendar_api`
* Run `bin/rails db:setup RAILS_ENV=development` this will create the relevant databases. The credentials were not set because of the time constraint and as this is not a production application. Alternatively if you need to run the migration `bin/rails db:migrate RAILS_ENV=development` and seed data with `bin/rails db:seed RAILS_ENV=development`.
* Start the rails app with `rails server -p 4000` currently running the API on this port locally but if you choose to run on any other port you will have to change the port number in the react folder to this port. Relevant file can be found `cf_calendar_react/src/utils.js` Line 4 edit the relevant part of the url to the port the api is running on
* When that is done navigate to the front-end folder and run `yarn start` and the application is good to go.
* Have fun with the App.


###### TODO
* Develop a more comprehensive Authentication and Authorization System
* Specs were not adequate - Need to add more Unit, Integration tests and End-to-End tests
* We need to add more requirements in terms of which students are able to schedule with the mentors
* Improve user experience
* Add a state management library MobX or Redux will do
* Add Sidekiq job to send relevant mails and create a calendar event on the parties calendars.