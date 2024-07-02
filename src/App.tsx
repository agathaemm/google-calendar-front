import { useEffect, useState } from 'react'
import './App.css'
import { createEvent, listEvents } from './services/googleCalendar'
import { event } from './mock'

function App() {
  const [eventsData, setEventsData] = useState([])

  useEffect(() => {
    async function listAll() {
      const events = await listEvents()
      setEventsData(events)
    }
    listAll()
  }, [])

  async function createNewEvent() {
    await createEvent(event)
  }
  

  return (
    <>
      <h1>Criando eventos no Google Calendar</h1>
   
      <button onClick={createNewEvent}>Criar novo evento no Google Calendar</button>

      <h2>Meus eventos</h2>
      {eventsData.map((event, key) => (
        <p key={key}>{event}</p>
      ))}
    </>
  )
}

export default App
