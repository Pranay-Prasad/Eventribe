import React,{useState} from 'react'
import './MakeForm.css'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {GrAddCircle} from 'react-icons/gr'
import {AiOutlineDelete} from 'react-icons/ai'
const MakeForm = (props) => {
    const {Show,setShow} = props;
    const [Selector, setSelector] = useState(false)
    const [Type, setType] = useState('Default')
    const [Input_fields, setInput_fields] = useState([
        {Type:"Default",Disp:false},
        {Type:"Default",Disp:false}
    ])
    
    const handelclick = (el,Type,idx) =>{
        const list = [...Input_fields];
        list[idx].Type = Type; 
        setSelector(Selector^1);
    }
  return (
      <section className="createform" style={{display: Show?'':'none'}}>
          <div className="container">
              <div className="createform_header">
              <h2>Create Form</h2>
                  <button onClick={()=>setShow(Show^1)}>Close</button>
              </div>
              <div className="input_field">
                  {Input_fields.map((inp,idx)=>(
                      
                  <div key={idx} className="input_container">
                      <div className="input_values">
                        <input type="text"  name='Input_div' id='Input_div' placeholder='Title' className='input_header form_input'/>
                        <input type="text" style={{display: (inp.Type==='Default' || inp.Type==='Text')?'':'none'}} name='Input_div' id='Input_div' className='text_response form_input' />
                        <textarea name="text" style={{display: (inp.Type==='Longtext')?'':'none'}} className='form_text' id="text" cols="10" rows="3"></textarea>
                        <select multiple>
                            <option value="option1"></option>
                            <option value="option1"></option>
                            <option value="option1"></option>
                            <option value="option1"></option>
                        </select>
                      </div>
                      <div className="input_selector">
                          <ul>
                              <li><button className='secondary_selector'  onClick={el => handelclick(el,"Text",idx)}>Text</button></li>
                              <li><button className='secondary_selector' onClick={el => handelclick(el,"Longtext",idx)}>Long text</button></li>
                              <li><button className='secondary_selector'  onClick={el => handelclick(el,"Multiple",idx)}>Multiplechoice</button></li>
                          </ul>
                      </div> 
                      <div className="input_icons">
                          <BsThreeDotsVertical className='icn'/>
                          <GrAddCircle onClick={()=>{setInput_fields([...Input_fields,{Input_div:"",Type:"Default"}])}} className='icn'/>
                          <AiOutlineDelete onClick={(idx)=>{const list = [...Input_fields];list.splice(idx,1);setInput_fields(list)}} className='icn'/>
                      </div>
                  </div>
                  ))}
                      <button className='Input_Add_new' onClick={()=>{setInput_fields([...Input_fields,{Input_div:"",Type:"Default"}])}}>Add New</button> 
              </div>
          </div>
      </section>
  )
}

export default MakeForm