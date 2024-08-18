import React, { useState } from "react"
import data from "./data"
import "./style.css"

export const Accordion = () => {

    const [selected, setSelected] = useState(null)
    const [multiSelect, setMultiSelect] = useState(false)
    const [multiple, setMultiple] = useState([])

    const handleSingleSelection = (id) => {
        setSelected(id === selected ? null : id)
        // console.log(id)
    }

    const handelMultiSelection = (id) => {
        let copyMultiple = [...multiple]
        const findIndexofCrrId = copyMultiple.indexOf(id)
        if (findIndexofCrrId === -1) {
            copyMultiple.push(id)
        }
        else {
            copyMultiple.splice(findIndexofCrrId, 1)
        }

        setMultiple(copyMultiple)
        console.log(copyMultiple);
    }




    return (
        <div className="Wrapper">
            <h1>Accordion</h1>

            <div className="accordion">
                {
                    data && data.length > 0 ?
                        data.map((item, index) => {
                            return <div key={item.id} className="item">
                                <div onClick={
                                    multiSelect
                                        ? () => handelMultiSelection(item.id)
                                        : () => handleSingleSelection(item.id)
                                }
                                    className="title">
                                    <h3>{item.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    multiSelect
                                        ? multiple.indexOf(item.id) !== -1 &&
                                        <div className="content"> {item.answer}</div>
                                        : selected === item.id &&
                                        <div className="content"> {item.answer}</div>
                                }
                            </div>
                        })
                        :
                        <p>No data Found</p>
                }

                <button onClick={() => setMultiSelect(!multiSelect)} className="btn">Select All</button>

            </div>

        </div>

    )
}