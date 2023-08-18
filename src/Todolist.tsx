import React, {useState} from 'react';
import {filterType} from "./App";


type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number)=> void
    //tasksFilter: (filterKey: filterType)=> void
}

export function Todolist(props: PropsType) {

    let [filteredTasks,setFilteredTasks] = useState<filterType>('All')
    const tasksFilter = (filterKey: filterType)=> {
        setFilteredTasks(filterKey)

    }



    const filterFunction = ()=>{
        let filter = props.tasks
        if (filteredTasks === 'Active'){
            filter = props.tasks.filter(el=>!el.isDone)
        }
        if (filteredTasks === 'Completed'){
            filter = props.tasks.filter(el=>el.isDone)
        }
        return (filter)
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {filterFunction().map((el, index)=>{
                return (
                    <li>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                        <button onClick={()=> props.removeTask(el.id)}> x </button>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={()=>tasksFilter('All')}>All</button>
            <button onClick={()=>tasksFilter('Active')}>Active</button>
            <button onClick={()=>tasksFilter('Completed')}>Completed</button>
        </div>
    </div>
}
