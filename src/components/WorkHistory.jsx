import React from "react"
import "../styles/WorkHistory.css"

function Company() {
    return (
        <label>Company:
            <input></input>
        </label>
    )
}

function Position() {
    return (
        <label>Position:
        <input></input>
    </label>
    )
}

function Duties() {
    return (
        <label>Duties:
        <input></input>
    </label>
    )
}

function StartDate() {
    return (
        <label>Start Date:
        <input></input>
    </label>
    )
}

function EndDate() {
    return (
    <label>End Date: 
    <input></input>
</label>
    )
}

export default function WorkHistory() {
    return (
        <>
        <h2>Work History</h2>
        <div className="workhistory">
            <Company />
            <Position />
            <Duties />
            <StartDate />
            <EndDate />
            </div>
            </>
    )
}