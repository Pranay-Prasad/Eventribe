import React, { useState } from 'react'
import './Rform.css'
const Rform = () => {
    const [Click, setClick] = useState(true)
    return (
        <section className="section Register">
            <div className="form_container">
                <div className={Click ? "indiv active" : "indiv"} data-active >
                    <form className='frm' >
                        <div className="username">
                            <small>Organization Name</small>
                            <input type="text" name='name' placeholder='Organization Name' required />
                        </div>
                        <div className="username">
                            <small>Email</small>
                            <input type="email" name='email' placeholder='Your Email' required />
                        </div>
                        <div className="username">
                            <small>Organization username should be unique (it will be included in url)</small>
                            <input type="text" name='urlname' placeholder='Ex: Eventribe' required />
                        </div>
                        <div className="username">
                            <small>Password</small>
                            <input type="password" name='password' placeholder='Admin Password' required />
                        </div>
                        <div className="username">
                            <small>Conform Password</small>
                            <input type="text" name='conformpassword' placeholder='conform Admin Password' required />
                        </div>
                        <button type='submit' id='sub_btn' className='btn btn-primary' onClick={() => { setClick(false) }}>Submit</button>
                    </form>
                </div>
                <div className={Click ? "indiv" : "indiv active"}  >
                    <form className='frm'>
                        <div className="username">
                            <small>Organization Name</small>
                            <input type="text" name='name' placeholder='Organization Name' required />
                        </div>
                        <div className="username">
                            <small>username</small>
                            <input type="text" name='urlname' placeholder='user name' required />
                        </div>
                        <div className="username">
                            <small>About</small>
                            <textarea name="about" rows="7" placeholder='Describe your organization'></textarea>
                        </div>
                        <div className="username">
                            <small>Linkedin url</small>
                            <input type="text" name='link1' placeholder='Linkedin Url' required />
                        </div>
                        <div className="username">
                            <small>Facebook url</small>
                            <input type="text" name='link1' placeholder='Facebook Url' required />
                        </div>
                        <div className="username">
                            <small>Instagram url</small>
                            <input type="text" name='link1' placeholder='Instagram Url' required />
                        </div>
                            <button type='submit' id='sub_btn' className='btn btn-primary'>Submit</button>
                    </form>
                </div>
        </div>
        </section>
    )
}

export default Rform