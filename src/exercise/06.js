// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useState, useRef } from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  const [error, setError] = useState('')
  const [username, setUserName] = useState('');
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input
  const inputRef = useRef()

  // 🐨 add the onSubmit handler to the <form> below
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(inputRef.current.value);
  }

  const handleUpdate = () => {
    const isLowerCase = inputRef.current.value === inputRef.current.value.toLowerCase();
    setError(isLowerCase ? null : 'You made mistakes in life.')
    // Set user to lowercase.
    setUserName(inputRef.current.value.toLowerCase());
  }

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div role="alert" style={{color: '#ff0f0f'}}>
        {error}
      </div>
      <div>
        <label htmlFor="user_input">Username:</label>
        <input
          id="user_input"
          onChange={handleUpdate}
          type="text"
          ref={inputRef}
          value={username}
        />
      </div>
      <button disabled={error} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
