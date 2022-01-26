// Your code here
function createEmployeeRecord(employee){
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
// const BenDetails = ["Ben","Rowe","Dev",60]
// const BenCard = createEmployeeRecord(BenDetails)

let dataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300],
    ["Byron", "Poodle", "Mascot", 3],
    ["Julius", "Caesar", "General", 27],
    ["Rafiki", "", "Aide", 10],
    ["Simba", "", "King", 100]
  ]

function createEmployeeRecords(employee){
    let holdingAllEmployeeData = {}
    let arrayOfObj = []
    employee.map((employeeData) =>{
        holdingAllEmployeeData = {
            firstName: employeeData[0],
            familyName: employeeData[1],
            title: employeeData[2],
            payPerHour: employeeData[3]
        }
        arrayOfObj.push(holdingAllEmployeeData)
    })
    
    return arrayOfObj
   
}



const testing = createEmployeeRecords(dataEmployees)

function createTimeInEvent(employee, dateStamp) {
    let splitingDateStamp = dateStamp.split(" ")
    console.log(splitingDateStamp[1])

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(splitingDateStamp[1]),
        date: splitingDateStamp[0]
    })
    
    return employee
    
}



function createTimeOutEvent(employee, dateStamp) {
    let splitingDateStamp = dateStamp.split(" ")
    console.log(splitingDateStamp[1])

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(splitingDateStamp[1]),
        date: splitingDateStamp[0]
    })
    
    return employee
    
}
cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")

function hoursWorkedOnDate(employee, dateStamp) {
   let timeIn = employee.timeInEvents.find((event) => event.hour == dateStamp)
   let timeOut = employee.timeOutEvents.find((event) => event.hour == dateStamp)
   
   let hourIn = timeIn.hour
   let hourOut = timeOut.hour 

   return ( hourIn - hourOut) /100
}

console.log(hoursWorkedOnDate(cRecord, "0044-03-15"))

