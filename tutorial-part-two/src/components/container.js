import React from "react"
import containerStlyes from "./container.module.css"

export default ({ children }) => (
    <div className={containerStlyes.container}>{children}</div>
)
