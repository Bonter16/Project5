/**
 *   @author Bonter, Brian (Bonterb@student.ncmich.edu)
 *   @version 0.0.3
 *   @summary Project 3  || created: 10.20.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let numberGuests,zone,totalPrice;
let continueResponse;

function main() {
    setContinueResponse();
    if(continueResponse === 1) {
        setNumberGuests();
        setZones();
        setTotalPrice();
        setContinueResponse();
        return main();
    }
}

main();

function setContinueResponse() {
    if (continueResponse) {
        continueResponse = -1;
        while (continueResponse !== 0 && continueResponse !== 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function setNumberGuests() {
    numberGuests = Number(PROMPT.question(`\nHow many guests will there be:`));
}

function setZones() {
    zone = Number(PROMPT.question(`\nHow many zones will you be travel:`));
}

function setTotalPrice(){
   const PRICE10 = 7.50,
       PRICE20 = 14.00,
       PRICE30 = 20.00,
       PRICE40 = 25.00,
       PRICE11 = 10.00,
       PRICE21 = 18.50,
       PRICE31 = 21.00,
       PRICE41 = 27.50,
       PRICE12 = 12.00,
       PRICE22 = 22.00,
       PRICE32 = 32.00,
       PRICE42 = 36.00,
       PRICE13 = 12.75,
       PRICE23 = 23.00,
       PRICE33 = 33.00,
       PRICE43 = 37.00;
    if (numberGuests == 1 && zone ==0){
        console.log(`Your amount due is ${PRICE10}`);
    }
    else if(numberGuests == 2 && zone ==0){
        console.log(`Your amount due is ${PRICE20}`);
    }
    else if(numberGuests == 3 && zone ==0){
        console.log(`Your amount due is ${PRICE30}`);
    }
    else if(numberGuests == 4 && zone ==0){
        console.log(`Your amount due is ${PRICE40}`);
    }
    else if(numberGuests == 1 && zone ==1){
        console.log(`Your amount due is ${PRICE11}`);
    }
    else if(numberGuests == 2 && zone ==1){
        console.log(`Your amount due is ${PRICE21}`);
    }
    else if(numberGuests == 3 && zone ==1){
        console.log(`Your amount due is ${PRICE31}`);
    }
    else if(numberGuests == 4 && zone ==1){
        console.log(`Your amount due is ${PRICE41}`);
    }
    else if(numberGuests == 1 && zone ==2){
        console.log(`Your amount due is ${PRICE12}`);
    }
    else if(numberGuests == 2 && zone ==2){
        console.log(`Your amount due is ${PRICE22}`);
    }
    else if(numberGuests == 3 && zone ==2){
        console.log(`Your amount due is ${PRICE32}`);
    }
    else if(numberGuests == 4 && zone ==2){
        console.log(`Your amount due is ${PRICE42}`);
    }
    else if(numberGuests == 1 && zone ==3){
        console.log(`Your amount due is ${PRICE13}`);
    }
    else if(numberGuests == 2 && zone ==3){
        console.log(`Your amount due is ${PRICE23}`);
    }
    else if(numberGuests == 3 && zone ==3){
        console.log(`Your amount due is ${PRICE33}`);
    }
    else if(numberGuests == 4 && zone ==3){
        console.log(`Your amount due is ${PRICE43}`);
    }
}

