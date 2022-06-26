import React from 'react'
import CADashboard from './CADashboard/CADashboard'
import './CAdmin.css'
import CAEvent from './CAEvet/CAEvent'
import CANavbar from './CANavbar/CANavbar'
const CAdmin = (props) => {
    const {user} = props;
    return (
        <div className='CAdmin'>
            <CANavbar />
            <div className="interface">
                <CADashboard />
                <CAEvent user = {user} />
            </div>
        </div>
    )
}

export default CAdmin