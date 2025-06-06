import { useState } from 'react';

function App() {

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [experieceYears, setExperienceYars] = useState("")
  const [description, setDescription] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (
      !name.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experieceYears.trim() ||
      experieceYears <= 0 ||
      !description.trim()
    ) {
      alert("Tutti i campi devono essere compilati")
    } console.log("Submit effettuato", {
      name,
      username,
      password,
      specialization,
      experieceYears,
      description
    });

  }

  return (
    <>
      <h1>Welcome to My App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Nome Completo</p>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          <p>Username</p>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          <p>Specializzazione</p>
          <select value={specialization} onChange={(e) => setSpecialization(e.target.value)}>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>
        <label>
          <p>Anni di esperienza</p>
          <input type="number" value={experieceYears} onChange={(e) => setExperienceYars(e.target.value)} />
        </label>
        <label>
          <p>Descrizione</p>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
