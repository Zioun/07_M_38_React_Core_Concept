//todo option 1

// export default function Todo({task}){
//     return(
//         <h1>Todo Page {task}</h1>
//     )
// }

//todo option 2
// export default function Todo({task, isDone}){
//     if(isDone){
//         return(
//             <h3>Is Done is True</h3>
//         )
//     }else{
//         return(
//             <h3>Is Done is False</h3>
//         )
//     }
// }

//todo option 3
// export default function Todo({task, isDone}){
//     return(
//         <h3>{isDone? 'Finished' : 'Work on'}</h3>
//     )
// }

//todo option 4
// export default function Todo({task, isDone}){
//     return(
//         <h3>{task} {isDone && ': Done'}</h3>
//     )
// }

//todo option 5
// export default function Todo({task, isDone}){
//     return(
//         <h3>{task} {isDone || ': oops'}</h3>
//     )
// }

//todo option 6
export default function Todo({task, isDone}){
    let listItem
    if(isDone){
        listItem = <h3>Finish : {task}</h3>
    }else{
        listItem = <h3>Work on : {task}</h3>
    }
    return listItem;
}