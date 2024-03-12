// export default function Todo({task ,isDone}){
//     return (
//         <li>Task :{task}</li>
//     )
// }
// Conditional rendering option 1:
// export default function Todo({task ,isDone}){
//     if(isDone === true){
//         return <li>Finished {task}</li>
//     }
//     else{
//         return <li>Work On: {task}</li>
//     }
// }

// conditional rendering option 2
// export default function Todo({task ,isDone}){
//     if(isDone){
//         return <li>finish:{task}</li>
//     }
//     return <li>work on :{task}</li>
// }


// conditional rendering option 3 :ternary oparator
// export default function Todo({task ,isDone}){
//     return (
//         <li>{isDone ? 'Finished':'Work On'} : {task}</li>
//     )
// }

// conditional rendering option 4 :&&
// export default function Todo({task ,isDone}){
//     return (
//         <li>{task} {isDone && ':Done'}</li>
//     )
// }

// conditional rendering option 5 :||
// export default function Todo({task ,isDone}){
//     return (
//         <li>{task} {isDone || ':Do It'}</li>
//     )
// }

// conditional rendering option 6
export default function Todo({task ,isDone}){
    let listItem;
    if(isDone){
        listItem = <li>finish:{task}</li>
    }
    else{
        listItem = <li>work on :{task}</li>
    }
    return listItem
}