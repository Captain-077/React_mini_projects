import React, { useState } from "react"
import data from "./data"
import "./style.css"

export const Accordion = () => {

    const [selected, setSelected] = useState(null)

    const handleSingleSelection = (id) => {
        setSelected(id === selected ? null : id)
        console.log(id)
    }


    return (
        <div className="wrapper">
            <h1>Accordion</h1>

            <div className="accordion">
                {
                    data && data.length > 0 ?
                        data.map((item, index) => {
                            return <div key={item.id} className="item">
                                <div onClick={() => handleSingleSelection(item.id)} className="title">
                                    <h3>{item.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    selected === item.id ? <div className="content"> {item.answer}</div> : null                            
                                }
                            </div>
                        })
                        :
                        <p>No data Found</p>
                }

                <button className="btn">Select All</button>

            </div>

        </div>

    )
}