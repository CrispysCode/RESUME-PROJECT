import React from "react"
import "../styles/Education.css"
function School() {
    return (
        <label>School:
            <input></input>
        </label>
    )
}

function Study() {
    return (
        <label>Study:
            <input></input>
        </label>
    )
}

function Graduate() {
    return (
        <label>Graduate date:
            <input></input>
        </label>
    )
}

export default function Education() {

    return (
        <>
        <h2>Education Information</h2>
        <div className="education">
            <School />
            <Study />
            <Graduate />
        </div>
        </>
    )
}