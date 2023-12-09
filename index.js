"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
{
    console.log("\t\nI'd suggest to run a particular question at a time and comment out the rest of programs for better results and to avoid any errors.\n");
    {
        console.log("\n\t\t\tAssignment 4\n");
        console.log("Develop a program that determines the day of the week. From number 1 to 5 it should print day name Monday to Friday respectively and for 6 it should print weekend. Do it using switch statement.\n");
        rl.question("Enter a number (1-6): ", (numInput) => {
            var dayInput = numInput;
            switch (dayInput) {
                case "1":
                    console.log(`It is Monday\n`);
                    break;
                case "2":
                    console.log(`It is Tuesday\n`);
                    break;
                case "3":
                    console.log(`It is Wednesday\n`);
                    break;
                case "4":
                    console.log(`It is Thursday\n`);
                    break;
                case "5":
                    console.log(`It is Friday\n`);
                    break;
                case "6":
                    console.log(`It is Weekend\n`);
                    break;
                default:
                    console.log("Please enter a correct number\n");
                    break;
            }
            rl.close();
        });
    }
    // ==============================================================================
    {
        console.log("Try making ATM machine that matches pin and account number in it. If matches then user can withdraw amount. And if he or she hasn't sufficient balance show them a message. Show message for wrong acocount number and wrong pin separately.");
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        var users_name = "Imran Khan";
        var balanceInAccount = 50000;
        var accountNumber = "9876";
        rl.question("Please enter your account number: ", (accountInput) => {
            accountNumber = accountInput;
            switch (accountNumber) {
                case "9876":
                    rl.question("Please enter your pin: ", (pinInput) => {
                        var pin = pinInput;
                        switch (pin) {
                            case "1234":
                                console.log(`Welcome ${users_name}`);
                                rl.question("Please enter the amount you want to withdraw: ", (amountInput) => {
                                    var amount = amountInput;
                                    // {amount} should be less than or equal to 50,000
                                    if (Number(amount) <= balanceInAccount) {
                                        if (Number(amount) >= 100 && Number(amount) <= 10000) {
                                            var newBalance = balanceInAccount - Number(amount);
                                            console.log(`Please wait while we process your transaction, ${users_name}`);
                                            console.log(`Your transaction was successful. Your remaining balance is: Rs.${newBalance}`);
                                            console.log(`Thank you for using our service, ${users_name}!`);
                                        }
                                        else {
                                            console.log(`Please enter a valid amount, ${users_name}`);
                                        }
                                    }
                                    else {
                                        console.log(`Unfortunately, your account has insufficient funds, ${users_name}!`);
                                    }
                                    rl.close();
                                });
                                break;
                            default:
                                console.log(`Please enter the correct pin, ${users_name}`);
                                rl.close();
                                break;
                        }
                    });
                    break;
                default:
                    console.log("Please enter the correct account number!");
                    rl.close();
                    break;
            }
        });
    }
    // ==============================================================================
    {
        console.log('Write a ts program that prints message like "Good Morning" etc depending on time use hours only for now. Do it with both if else and switch statement\n');
        const time = new Date();
        const hours = time.getHours();
        var name = "Imran Khan";
        if (hours >= 4 && hours < 12) {
            console.log(`Good Morning ${name}`);
        }
        else if (hours >= 12 && hours < 16) {
            console.log(`Good Afternoon ${name}`);
        }
        else if (hours >= 16 && hours < 22) {
            console.log(`Good Evening ${name}`);
        }
        else {
            console.log(`Good Night ${name}`);
        }
        switch (hours) {
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                console.log(`Good morning ${name}`);
                break;
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                console.log(`Good Afternoon ${name}`);
                break;
            case 17:
            case 18:
            case 19:
            case 20:
                console.log(`Good Evening ${name}`);
                break;
            case 21:
            case 22:
            case 23:
            case 24:
                console.log(`Good Night ${name}`);
                break;
            default:
                console.log("Something went wrong!");
                break;
        }
    }
    // ==============================================================================
    {
        console.log("Write a program that prints the name of study for a person for instance middle, matric etc from playgroup to PhD on basis of class number. Do it with both if else if and switch statement.");
        // ----------------------------------------------
        // Doing with if-else statements
        // ----------------------------------------------
        rl.question("Enter a number (0-20): ", (numInput) => {
            var classInput = numInput;
            if (Number(classInput) >= 0 && Number(classInput) <= 20) {
                var classname;
                if (Number(classInput) === 0) {
                    console.log("Playgroup");
                }
                else if (Number(numInput) >= 1 && Number(numInput) <= 8) {
                    if (Number(classInput) === 1) {
                        classname = "1st Class";
                    }
                    else if (Number(numInput) === 2) {
                        classname = "2nd Class";
                    }
                    else if (Number(classInput) === 3) {
                        classname = "3rd Class";
                    }
                    else if (Number(numInput) === 4) {
                        classname = "4th Class";
                    }
                    else if (Number(classInput) === 5) {
                        classname = "5th Class";
                    }
                    else if (Number(numInput) === 6) {
                        classname = "6th Class";
                    }
                    else if (Number(classInput) === 7) {
                        classname = "7th Class";
                    }
                    else if (Number(classInput) === 8) {
                        classname = "8th Class";
                    }
                    console.log(`It is ${classname} and lies within the Middle section.`);
                }
                else if (Number(numInput) >= 9 && Number(numInput) <= 10) {
                    if (Number(classInput) === 9) {
                        classname = "9th Class";
                    }
                    else if (Number(classInput) === 10) {
                        classname = "10th Class";
                    }
                    console.log(`It is ${classname} and lies within the Matric section.`);
                }
                else if (Number(numInput) >= 11 && Number(numInput) <= 12) {
                    if (Number(classInput) === 11) {
                        classname = "11th Class";
                    }
                    else if (Number(classInput) === 12) {
                        classname = "12th Class";
                    }
                    console.log(`It is ${classname} and lies within the Intermidiate section.`);
                }
                else if (Number(numInput) >= 13 && Number(numInput) <= 14) {
                    if (Number(classInput) === 13) {
                        classname = "13th Class";
                    }
                    else if (Number(classInput) === 14) {
                        classname = "14th Class";
                    }
                    console.log(`It is ${classname} and lies within the Bachelor's section.`);
                }
                else if (Number(numInput) >= 15 && Number(numInput) <= 16) {
                    if (Number(classInput) === 15) {
                        classname = "15th Class";
                    }
                    else if (Number(classInput) === 16) {
                        classname = "16th Class";
                    }
                    console.log(`It is ${classname} and lies within the Masters section.`);
                }
                else if (Number(numInput) >= 17 && Number(numInput) <= 18) {
                    if (Number(classInput) === 17) {
                        classname = "17th Class";
                    }
                    else if (Number(classInput) === 18) {
                        classname = "18th Class";
                    }
                    console.log(`It is ${classname} and lies within the M-Phil section.`);
                }
                else if (Number(numInput) >= 19 && Number(numInput) <= 20) {
                    if (Number(classInput) === 19) {
                        classname = "19th Class";
                    }
                    else if (Number(classInput) === 20) {
                        classname = "20th Class";
                    }
                    console.log(`It is ${classname} and lies within the PHD.`);
                }
            }
            else {
                console.log("Please enter correct number between (0 - 20)");
            }
            rl.close();
        });
        // ----------------------------------------------
        // Doing with switch statement
        // ----------------------------------------------
        rl.question("Enter a number (0-20): ", (numInput) => {
            var classInput = numInput;
            switch (Number(classInput)) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                    var classname;
                    switch (Number(classInput)) {
                        case 0:
                            classname = "Playgroup";
                            console.log(`It is ${classname} and lies within the Playgroup section.`);
                            break;
                        case 1:
                            classname = "1st Class";
                            console.log(`It is ${classname} and lies within the Primary section.`);
                            break;
                        case 2:
                            classname = "2nd Class";
                            console.log(`It is ${classname} and lies within the Primary section.`);
                            break;
                        case 3:
                            classname = "3rd Class";
                            console.log(`It is ${classname} and lies within the Primary section.`);
                            break;
                    }
                    switch (Number(classInput)) {
                        case 4:
                            classname = "4th Class";
                            console.log(`It is ${classname} and lies within the Middle section.`);
                            break;
                        case 5:
                            classname = "5th Class";
                            console.log(`It is ${classname} and lies within the Middle section.`);
                            break;
                        case 6:
                            classname = "6th Class";
                            console.log(`It is ${classname} and lies within the Middle section.`);
                            break;
                        case 7:
                            classname = "7th Class";
                            console.log(`It is ${classname} and lies within the Middle section.`);
                            break;
                        case 8:
                            classname = "8th Class";
                            console.log(`It is ${classname} and lies within the Middle section.`);
                            break;
                    }
                    switch (Number(classInput)) {
                        case 9:
                            classname = "9th Class";
                            console.log(`It is ${classname} and lies within the Matric section.`);
                            break;
                        case 10:
                            classname = "10th Class";
                            console.log(`It is ${classname} and lies within the Matric section.`);
                            break;
                    }
                    switch (Number(classInput)) {
                        case 11:
                            classname = "11th Class";
                            console.log(`It is ${classname} and lies within the Intermidiate section.`);
                            break;
                        case 12:
                            classname = "12th Class";
                            console.log(`It is ${classname} and lies within the Intermidiate section.`);
                            break;
                    }
                    switch (Number(classInput)) {
                        case 13:
                            classname = "13th Class";
                            console.log(`It is ${classname} and lies within the Bachelor's section.`);
                            break;
                        case 14:
                            classname = "14th Class";
                            console.log(`It is ${classname} and lies within the Bachelor's section.`);
                            break;
                    }
                    switch (Number(classInput)) {
                        case 15:
                            classname = "15th Class";
                            console.log(`It is ${classname} and lies within the Masters section.`);
                            break;
                        case 16:
                            classname = "16th Class";
                            console.log(`It is ${classname} and lies within the Masters section.`);
                            break;
                    }
                    switch (Number(classInput)) {
                        case 17:
                            classname = "17th Class";
                            console.log(`It is ${classname} and lies within the M-Phil section.`);
                            break;
                        case 18:
                            classname = "18th Class";
                            console.log(`It is ${classname} and lies within the M-Phil section.`);
                            break;
                    }
                    switch (Number(classInput)) {
                        case 19:
                            classname = "19th Class";
                            console.log(`It is ${classname} and lies within the PHD.`);
                            break;
                        case 20:
                            classname = "20th Class";
                            console.log(`It is ${classname} and lies within the PHD.`);
                            break;
                    }
                    break;
                default:
                    console.log("Please enter correct number between (0 - 20)");
                    break;
            }
            rl.close();
        });
    }
    // ==============================================================================
    {
        console.log('Write a TS program that check wheather if the number is positive, zero or negative.');
        rl.question("Enter any number: ", (userInput) => {
            var number = userInput;
            if (Number(number) > 0) {
                console.log(`${number} is positive`);
            }
            else if (Number(number) < 0) {
                console.log(`${number} is negative`);
            }
            else if (Number(number) === 0) {
                console.log(`${number} is zero`);
            }
            else {
                console.log(`Please check your input => {${number}}, and enter a number!`);
            }
            rl.close();
        });
    }
    // ==============================================================================
    {
        console.log("Take 5 different numbers and check which one is greatest and then check which one is smallest use separate conditionals for both scenarios.");
        rl.question("Enter first number: ", (numInput1) => {
            var firstnum = Number(numInput1);
            rl.question("Enter second number: ", (numInput2) => {
                var secondnum = Number(numInput2);
                rl.question("Enter third number: ", (numInput3) => {
                    var thirdnum = Number(numInput3);
                    rl.question("Enter fourth number: ", (numInput4) => {
                        var fourthnum = Number(numInput4);
                        rl.question("Enter fifth number: ", (numInput5) => {
                            var fifthnum = Number(numInput5);
                            var array = [
                                firstnum,
                                secondnum,
                                thirdnum,
                                fourthnum,
                                fifthnum,
                            ];
                            function isNUmber(value) {
                                return typeof value === 'number' && !isNaN(value);
                            }
                            function checkifNumber(numbers) {
                                for (const num of numbers) {
                                    if (!isNUmber(num)) {
                                        return undefined;
                                    }
                                }
                                return numbers;
                            }
                            const validatedNumbers = checkifNumber(array);
                            if (validatedNumbers !== undefined) {
                                // For checking the largest number.
                                if (firstnum > secondnum && firstnum > thirdnum && firstnum > fourthnum && firstnum > fifthnum) {
                                    console.log(`First input => ${firstnum} is greater than the rest of numbers.`);
                                }
                                else if (secondnum > firstnum && secondnum > thirdnum && secondnum > fourthnum && secondnum > fifthnum) {
                                    console.log(`Second input => ${secondnum} is greater than the rest of numbers.`);
                                }
                                else if (thirdnum > firstnum && thirdnum > secondnum && thirdnum > fourthnum && thirdnum > fifthnum) {
                                    console.log(`Third input => ${thirdnum} is greater than the rest of numbers.`);
                                }
                                else if (fourthnum > firstnum && fourthnum > secondnum && fourthnum > thirdnum && fourthnum > fifthnum) {
                                    console.log(`Fourth input => ${fourthnum} is greater than the rest of numbers.`);
                                }
                                else if (fifthnum > firstnum && fifthnum > secondnum && fifthnum > thirdnum && fifthnum > fourthnum) {
                                    console.log(`Fifth input => ${fifthnum} is greater than the rest of numbers.`);
                                }
                                // For checking the smallest number.
                                if (firstnum < secondnum && firstnum < thirdnum && firstnum < fourthnum && firstnum < fifthnum) {
                                    console.log(`First input => ${firstnum} is smaller than the rest of numbers.`);
                                }
                                else if (secondnum < firstnum && secondnum < thirdnum && secondnum < fourthnum && secondnum < fifthnum) {
                                    console.log(`Second input => ${secondnum} is smaller than the rest of numbers.`);
                                }
                                else if (thirdnum < firstnum && thirdnum < secondnum && thirdnum < fourthnum && thirdnum < fifthnum) {
                                    console.log(`Third input => ${thirdnum} is smaller than the rest of numbers.`);
                                }
                                else if (fourthnum < firstnum && fourthnum < secondnum && fourthnum < thirdnum && fourthnum < fifthnum) {
                                    console.log(`Fourth input => ${fourthnum} is smaller than the rest of numbers.`);
                                }
                                else if (fifthnum < firstnum && fifthnum < secondnum && fifthnum < thirdnum && fifthnum < fourthnum) {
                                    console.log(`Fifth input => ${fifthnum} is smaller than the rest of numbers.`);
                                }
                                else {
                                    console.log(`Something went wrong. Please check your input => [${array}]`);
                                }
                            }
                            else {
                                console.log(`Please check your inputs => [${(array)}]`);
                            }
                            rl.close();
                        });
                    });
                });
            });
        });
    }
}
