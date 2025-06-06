import { useState, useMemo, useRef } from 'react';

const letters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

function App() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [description, setDescription] = useState("")

  const nameRef = useRef()
  const specializationRef = useRef()
  const experieceYearsRef = useRef()

  const isUsernameValid = useMemo(() => {
    const charts = username.split("").every(char =>
      letters.includes(char.toLowerCase()) ||
      numbers.includes(char)
    )
    return charts && username.trim().length >= 6
  }, [username])

  const isPasswordValid = useMemo(() => {
    return password.trim().length >= 8 &&
      password.split("").some(char => letters.includes(char)) &&
      password.split("").some(char => numbers.includes(char)) &&
      password.split("").some(char => symbols.includes(char))
  }, [password])

  const isDescriptionValid = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length < 1000
  }, [description])


  function handleSubmit(e) {
    e.preventDefault()

    const name = nameRef.current.value
    const specialization = specializationRef.current.value
    const experieceYears = experieceYearsRef.current.value
    if (
      !name.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experieceYears.trim() ||
      experieceYears <= 0 ||
      !description.trim() ||
      !isUsernameValid ||
      !isPasswordValid ||
      !isDescriptionValid
    ) {
      alert("Tutti i campi devono essere compilati")
      return
    }
    console.log("Submit effettuato", {
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
          <input type="text" ref={nameRef} />
        </label>
        <label>
          <p>Username</p>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          {username.trim() && (
            <p style={{ color: isUsernameValid ? "green" : "red" }}>
              {isUsernameValid ? "Username valido" : "Inserisci un username con almeno 6 caratteri alfanumerici"}
            </p>
          )}
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {password.trim() && (
            <p style={{ color: isPasswordValid ? "green" : "red" }}>
              {isPasswordValid ? "Password valida" : "Inserisci una password con almeno 8 caratteri tra cui una lettera, un numero e un simbolo"}
            </p>
          )}
        </label>
        <label>
          <p>Specializzazione</p>
          <select ref={specializationRef}>
            <option value="">Seleziona</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>
        <label>
          <p>Anni di esperienza</p>
          <input type="number" ref={experieceYearsRef} />
        </label>
        <label>
          <p>Descrizione</p>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          {description.trim() && (
            <p style={{ color: isDescriptionValid ? "green" : "red" }}>
              {isDescriptionValid ? "Descrizione valida" : `Inserisci un testo con minimo 100 caratteri e massimo 1000 (${description.trim().length})`}
            </p>
          )}
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
