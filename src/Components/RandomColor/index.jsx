import { useState } from "react";
import "./style.css"

export const RandomcolorGenerator = () => {

    const [typeofColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length);
    }

    const handleHexColor = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "c", "D", "E", "F"];
        let hexColor = "#"
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        console.log(hexColor);
        setColor(hexColor);
    }

    const handleRgbColor = () => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        // let rgb = r+g+b;
        console.log(`rgb(${r}, ${g}, ${b})`) 
        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    return (
        <div className="wrapper" style={{
            height: "100vh",
            width: "100%",
            background: color,
        }}>
            <h1>Random color generator</h1>
            <div className="btn-container">
                <button onClick={() => setTypeOfColor("hex")}>Create Hex color</button>
                <button onClick={() => setTypeOfColor("rgb")}>Create RGB color</button>
                <button onClick={typeofColor === "hex" ? handleHexColor : handleRgbColor}>Generate Random color</button>
            </div>
        </div>
    )
}