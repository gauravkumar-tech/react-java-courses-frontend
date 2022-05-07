import React from 'react'
import './Snackbar.css'

const snackBarObj = {
    "success" : "success",
    "failure" : "fail",
}

export default function SnackBar({response , message}) {
    return (
        <div >
            <div
            className={ response == snackBarObj.success ? 'success' : 'failure' }
            >{message}</div>
        </div>
    )
}
