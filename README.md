# Bills Burgers
 > The purpose of the application is to help a fictitious company called Bill’s Burgers to manage their process of selling hamburgers. Our application will help Bill to select types of burgers, some of the additional items (additions) to be added to the burgers and pricing.

## Running
----
This project was written in javascript and can be run in the browser (one that has ES6 class support) by opening the html file or can be run in a Node environment by simply running `node burgerStore.js`

There are no external dependencies needed to run this project other than node or a browser

## Objectives
----

The basic hamburger should have the following items.
1. bread roll type,
2. meat, and
3. up to 4 additional additions (things like lettuce, tomato, carrot, etc) that the customer can select to be added to the burger.
    
    a. Each one of these items gets charged an additional price so you need some way to track how many items got added and to calculate the price (for the base burger and all the additions).

This burger has a base price and the additions are all separately priced.

Create a Hamburger class to deal with all the above.

The constructor should only include the roll type, meat and price. <b> I did include a name just for easier reading </b>

Also create two extra varieties : 

1. Healthy burger (on a brown rye bread roll), plus two additional items can be added. The healthy burger can have a total of 6 items

2. Deluxe hamburger - comes with chips and drinks as additions, but no extra additions are allowed

All 3 classes should have a method that can be called anytime to show the base price of the hamburger plus all additionals, each showing the addition name, and addition price, and a grand total for the burger