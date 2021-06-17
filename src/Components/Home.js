import React from 'react';
import data from "../data"
import classes from "./Home.module.css"

function Home() {
    return (
        <div>
            <h1 className={classes.title}>Employees</h1>
            <div className={classes.main}>
        {data.map(item => {
            return <article className={classes.container} key={item.id}>
                <div>
                 <img className={classes.image} src={item.image} width="200px"/>
                </div>
                <h3>{item.name}</h3>
                <p>Employee Id : {item.EmployeeId}</p>
                <strong>{item.role}</strong>
            </article>
    
        })}
        </div>          
        </div>
        
    )
}

export default Home
