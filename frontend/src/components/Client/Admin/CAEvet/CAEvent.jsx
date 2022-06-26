import React,{useState} from 'react'
import './CAEvent.css'
import Events from '../../../../Event.json';
import MakeForm from '../../../MakeForm/MakeForm';
const CAEvent = (props) => {
    const { user } = props;
    const [Show, setShow] = useState(false)
    return (
        <section className="CAEvent">
            <div className="Event_logo">
                <h2>Host Event</h2>
            </div>
            <div className="new_event">
                <a href="#" className="new_event_btn" onClick={()=>setShow(Show^1)}>New Event</a>
            </div>
            <MakeForm Show={Show} setShow={setShow} className='makeForm' />
            <ul className="event_info">
                <li className="event_card">
                    <h2>Running Event</h2>
                    <div className="event_holder">
                        <h3>DATE</h3>
                        <h3>Event Name</h3>
                        <p>Description</p>
                        <p>Responses</p>
                    </div>
                    <div className="event_scroll">
                        {Events.map((event) => <div className="event_col">
                            <small>{event.Date}</small>
                            <h3>TRIBE</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <a href={'/' + user.url + '/Admin/Table/' + event.url}>Data Entries</a>
                        </div>)}
                    </div>
                </li>

                <li className="event_card">
                    <h2>Past Event</h2>
                    <div className="event_holder">
                        <h3>DATE</h3>
                        <h3>Event Name</h3>
                        <p>Description</p>
                    </div>
                    <div className="event_scroll">

                        <div className="event_col">
                            <small>12-06-15</small>
                            <h3>TRIBE</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default CAEvent