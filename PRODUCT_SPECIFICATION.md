  Private Driver Tracker

Product Specification v1.0

 Project Goal

Create an application that helps ride-hailing drivers (Uber / Bolt / FreeNow) understand how much they actually earn after deducting all operating costs.

The application is not intended to be only a portfolio project.

It should be a tool that I will use while working as an Uber driver.

Every new feature will be developed based on real experience gained from using the application.

⸻

 User

The target user is a ride-hailing driver working with:

* Uber
* Bolt
* FreeNow

The application should work both for drivers using a single platform and for those using multiple platforms at the same time.

⸻

 Core Product Principle

The application should save the user time, not create additional work.

Adding a single session should take no more than approximately 2 minutes.

Every new form field must provide real value.

⸻

 Data Model

1. Session

Added after each completed shift.

Fields:

* Date
* Platform
* Start time
* End time
* Number of trips
* Gross earnings
* Distance
* Fuel / charging cost
* Congestion Charge
* Parking

Calculated automatically:

* Total hours worked
* Earnings per hour
* Session costs
* Net profit from the session

⸻

2. Weekly Costs

Added once per week.

Examples:

* Vehicle rental
* Car wash
* Fines

Reason:

These costs may change from week to week.

⸻

3. Monthly Costs

Added once per month.

Examples:

* Insurance
* Phone
* Servicing
* Tyres

Reason:

They are not associated with a single session or a single week.

⸻

4. Settings (Future)

Configured once by the user.

Examples:

* Currency
* Miles / kilometres
* Fuel type
* Tax rate (%)
* Tax calculation basis

⸻

 Financial Model

Session

Gross earnings

↓

Session costs

↓

Net profit from the session

⸻

Week

Total gross earnings

↓

Weekly costs

↓

Weekly net profit

⸻

Month

Total weekly profits

↓

Monthly costs

↓

Estimated tax

↓

Final profit

⸻

 Dashboard

The dashboard should answer one question:

How much money did I actually earn?

Displayed data:

* Gross earnings
* Session costs
* Weekly costs
* Total costs
* Profit before tax
* Estimated tax (Future)
* Final net profit (Future)
* Gross earnings per hour
* Net earnings per hour

⸻

 Features We Will NOT Add

We intentionally exclude:

* Notes
* Comments
* Daily descriptions
* Daily ratings

Reason:

They do not increase the value of the application and make adding a session take longer.

⸻

 Design Principles

Every new feature must satisfy at least one condition:

1. Provide real value to the user.

OR

2. Teach an important React / JavaScript concept.

If it satisfies neither condition, we do not add it.

⸻

 MVP Roadmap

Stage 1 (Current)

* CRUD
* LocalStorage
* Session editing
* Statistics
* Session costs
* Net profit from a session

⸻

Stage 2

* Weekly costs
* Weekly dashboard
* Filtering
* Sorting

⸻

Stage 3

* Responsive design
* Chart
* README
* UI refinement

⸻

Stage 4

* API-based project
* TypeScript
* Git workflow
* Portfolio
* Job applications

⸻

 Project Development Rules

Before writing code, we always answer the following questions:

1. What problem are we solving?
2. What data will be required?
3. Which component owns the state?
4. How will the data flow?
5. Which functions will be required?
6. Only then do we write the code.

Think first.

React second.

⸻

 Project History

The project is being created by an active Uber driver.

The application will be tested during real work.

New features will be based on actual use of the application, not on ideas taken from tutorials.

Future Improvements

Vehicle Settings

* Automatically calculate fuel / charging cost.
* Store vehicle configuration.
* Support multiple vehicles.
* Provide different settings for EV / petrol / diesel vehicles.