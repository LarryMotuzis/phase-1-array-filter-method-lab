






























// // Code your solution here

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']



// // function findMatching(arrayofDrivers, name) {
// //     const nameArray = arrayofDrivers.filter(
// //         function(item){
// //             if (item.toLowerCase() === name.toLowerCase()){
// //                 return true
// //             }

// //         }   
// //     )   
// //     return nameArray
// // }
// // console.log(findMatching(drivers, 'Sarah'))

// function findMatching(arrayOfDrivers, driver) {
//     const filtetDrivers = arrayOfDrivers.filter(
//         function(user) {
//             if (user.toUpperCase() === driver.toUpperCase()){
//                 return true
//             }  
//         }         
//     )  
//     return filtetDrivers
// }




// function fuzzyMatch(arrayOfDrivers, driverName) {
//     let firstTwoLetters = driverName.slice(0, 1);
//      let driverLooper = arrayOfDrivers.filter(
//         function(eachDriver) {
//         let oneDriver = eachDriver.slice(0, 1);
//         if (oneDriver === firstTwoLetters) {
//             return true
//             }
//         }
//     )  
//         return driverLooper
// }   

// console.log(fuzzyMatch(drivers, 'Bo'))


// function matchName(driverObjectsArray,nameToCompare){
//     const loopThrunFindName = driverObjectsArray.filter(
//         function(currentDriverObj){
//             if (currentDriverObj.name === nameToCompare){
//                 return true
//             }

//         }
//     )     
//         return loopThrunFindName  
// }           