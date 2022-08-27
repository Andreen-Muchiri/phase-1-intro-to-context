// Your code here
let createEmployeeRecord = function(row){
    return {
        firstName: row[0],
    }
}
let createTimeInEvent = function(dateStamp){
let createTimeInEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    })
    return this
    return employee
}
};

let createTimeOutEvent = function(dateStamp){
let createTimeOutEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    })
    return this
    return employee
}
};

let hoursWorkedOnDate = function(soughtDate){
    let inEvent = this.timeInEvents.find(function(e){
let hoursWorkedOnDate = function(employee, soughtDate){
    let inEvent = employee.timeInEvents.find(function(e){
        return e.date === soughtDate
    })}})
};


    let outEvent = this.timeOutEvents.find(function(e){
    let outEvent = employee.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })
    
    return (outEvent.hour - inEvent.hour) / 100
    })

let wagesEarnedOnDate = function(dateSought){
    let rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
let wagesEarnedOnDate = function(employee, dateSought){
    let rawWage = hoursWorkedOnDate(employee, dateSought)
        * employee.payPerHour
    return parseFloat(rawWage.toString())
}
}
let allWageFor = function(){
    let eligibleDates = this.timeInEvents.map(function(e){
let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })}

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)
        return memo + wagesEarnedOnDate(employee, d)
    }, 0)

    return payable
}
let findEmployeeByFirstName = function(srcArray, firstName) {

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
        return memo + allWagesFor(rec)
    }, 0)
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    return payable
}
}
