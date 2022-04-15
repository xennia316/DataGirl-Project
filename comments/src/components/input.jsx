import React from 'react'
import '../CSS/styles.module.css'

const input = ({ item }) => {
    return (
        <>
            <div className={'input'}>
                <label>{item.label}</label>
                <input className={'Input'} type={item.type} placeholder={item.placeholder} />
            </div>
        </>
    )
}

export default input