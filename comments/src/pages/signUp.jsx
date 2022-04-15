import React from 'react'
import '../CSS/styles.module.css'

import Input from '../components/input'

const signUp = () => {
    const input = [
        { label: 'Name', placeholder: 'Please Enter your name', type: 'text' },
        { label: 'Phone Number', placeholder: 'Please Enter yournumber', type: 'number' },
        { label: 'Gender', type: 'text' },
        { label: 'DoB', type: 'text' },
        { label: 'Password', type: 'text' },
        { label: 'SignUp', type: 'button' }
    ]

    const eachInput = input.map((item, index) => {
        return <Input item={item} key={index} />
    })
    return (
        <>
            <div className={'body'}>
                <form className={'form'}>
                    <h1 className={'h1'}>Create Account</h1>
                    {eachInput}
                </form>
            </div>
        </>
    )
}




export default signUp