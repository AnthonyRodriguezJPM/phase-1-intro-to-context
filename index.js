// Your code here



//const array = [firstName, familyName, title, payPerHour];

function createEmployeeRecord(array) {
    
    const object = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return object
};

const test1Array = ['Anthony', 'Rodriguez', 'Software Engineer', 35];

// console.log(createEmployeeRecord(test))


/////////////////////////////////////**************//////////////////////////////// 


function createEmployeeRecords(arrayOfArrays) {

// arrayOfArrays = [["moe", "sizlak", "barkeep", 2], ["bartholomew", "simpson", "scamp", 3]];
// For TWO ARRAYS ONLY!
    

    const arrayIntoObject = arrayOfArrays.map(createEmployeeRecord)

    console.log(arrayIntoObject);
    

    return arrayIntoObject

};

// let twoRows = [
//     ["moe", "sizlak", "barkeep", 2],
//     ["bartholomew", "simpson", "scamp", 3]
//   ]

//   createEmployeeRecords(twoRows)


/////////////////////////////////////**************//////////////////////////////// 

const testObject = createEmployeeRecord(test1Array)

function createTimeInEvent (recordObject, dateStamp) {

    const hourConvert = `${dateStamp.substring(11)}`
    const newHour = parseInt(hourConvert);
    const timeObject = {
        type: 'TimeIn',
        hour: newHour,
        date: `${dateStamp.substring(0, 10)}`
    }

    recordObject.timeInEvents.push(timeObject)

    // console.log(recordObject)
    // console.log(timeObject)
    // console.log(recordObject.timeInEvents[0].date)

    return recordObject


};

// console.log(testObject)

// console.log(createTimeInEvent(testObject, '2014-02-28 1400'))


/////////////////////////////////////**************//////////////////////////////// 
 

function createTimeOutEvent(objectCard, dateStamp) {
    const hour1 = dateStamp.substring(11);
    const parseHour = parseInt(hour1);
    const dateString = dateStamp.substring(0,10);
    // console.log(dateString);

    const timeOutObject = {
        type: 'TimeOut',
        hour: parseHour,
        date: dateString
    }
    // console.log(timeOutObject)

    objectCard.timeOutEvents.push(timeOutObject)
    // console.log(objectCard);
    return objectCard
};

// console.log(createTimeOutEvent(testObject, '2015-02-28 1700'))

/////////////////////////////////////**************//////////////////////////////// 

///given dateStamp and Date Only

const dateOnly = '0044-03-15';
const dateStampIn = '0044-03-15 0900';
const dateStampOut = '0044-03-15 1100';

function hoursWorkedOnDate (objectCard, dateOnly) {

    let initialRecord = createEmployeeRecord(objectCard);
    // console.log(initialRecord);
    console.log(dateOnly)

    // const dateOnly = dateStamp.substring(0,10)  ** Do not use

    const updatedRecord1 = createTimeInEvent(initialRecord, dateStampIn);
    // console.log(updatedRecord1)
    const updatedRecord2 = createTimeOutEvent(updatedRecord1, dateStampOut);
    // console.log(updatedRecord1);
    // updatedRecord = createTimeOutEvent(, dateStampNoHours);

    const hoursWorked = (updatedRecord2.timeOutEvents[0].hour-updatedRecord1.timeInEvents[0].hour)/100;

    return hoursWorked


}

// console.log(hoursWorkedOnDate(test1Array, "0044-03-15"));


/////////////////////////////////////**************////////////////////////////////

const cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])

function wagesEarnedOnDate (cRecord, dateOnly) {


    const hoursWorked = hoursWorkedOnDate(cRecord, dateOnly);
    console.log(hoursWorked)
    const wage = hoursWorked * cRecord.payPerHour
    console.log(wage)

    return wage



}

// console.log(wagesEarnedOnDate(cRecord, "0044-03-15" ))


/////////////////////////////////////**************////////////////////////////////


function allWagesFor(cRecord){

    let updatedRecord = createTimeInEvent(cRecord, dateStampIn);
    updatedRecord = createTimeOutEvent(up)


}







