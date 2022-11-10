import React, {useState} from 'react'
import './index.css'

function App() {
  const [weight, setWeight] = useState(0)
  const [squat, setSquat] = useState(0)
  const [bench, setBench] = useState(0)
  const [deadlift, setDeadlift] = useState(0)
  const [wilks, setWilks] = useState('')
  const [message, setMessage] = useState('')
  const[gender, setGender] = useState('')

  let imgSrc = ''
  let calcWilks = (event) => {
      event.preventDefault()

      if (weight === 0 || squat === 0 || bench === 0 || deadlift === 0) {
        alert('Please provide weight squat, bench and deadlift values')
      }
      else {
        
       let wilks = (+squat / 2.205 + +bench /2.205 + +deadlift / 2.205) 
       * (500) /
       ((- 0.00000001291 * weight/2.205*weight/2.205*weight/2.205
       *weight/2.205*weight/2.205) +
       (0.00000701863 * weight/2.205*weight/2.205*
       weight/2.205*weight/2.205)+
       (- 0.00113732 * weight/2.205*weight/2.205*weight/2.205) +
       (-0.002388645 * weight/2.205*weight/2.205) + (16.2606339 * weight/2.205) 
       + (-216.0475144)
       )
        setWilks(wilks.toFixed(1))
      }
  }

  return (
    <div className="App">
     <div className = 'container'>

      <h2 className = 'center'>Wilks Calculator</h2>
      
      <div>
        <h1>Gender</h1>
        </div>

        <div class="genders">
        <input type = "radio" name = "gender" value = "Female" 
        onChange = {e=>setGender(e.targetvalue)} /> Female

        <input type = "radio" name = "gender" value = "Male" 
        onChange = {e=>setGender(e.targetvalue)} /> Male
       </div>
      

      <form onSubmit = {calcWilks}>
        <div>
          <label>weight (lbs)</label>
          <input value = {weight} onChange={(event) => setWeight(event.target.value)}/>
        </div>
        <div>
          <label> squat (lbs)</label>
          <input value = {squat} onChange={(event) => setSquat(event.target.value)}/>
        </div>
        <div>
          <label> bench (lbs)</label>
          <input value = {bench} onChange={(event) => setBench(event.target.value)}/>
        </div>
        <div>
          <label> deadlift (lbs)</label>
          <input value = {deadlift} onChange={(event) => setDeadlift(event.target.value)}/>
        </div>

        
        <div>
          <button className = 'btn' type='submit'>Enter</button>
          <button className = 'btn btn-outline' type= 'submit'>Submit</button>
        </div>
      </form>

      <div className = 'center'>
        <h3>Your wilks is: {wilks}</h3>
        <p>{message}</p>
      </div>

      <div className = 'img-container'>
        <img src = {imgSrc} alt = ''></img>
      </div>
 
     </div>
    </div>
  );
}

export default App;
