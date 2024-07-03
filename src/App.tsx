import { useEffect, useState } from 'react'
import './App.css'
import { createEvent, deleteEvent, listEvents } from './services/googleCalendar'
import { event } from './mock'

function App() {
  const [eventsData, setEventsData] = useState<Array<any>>([])

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

  function removeEvent(eventId: string) {
    return async () => {
      await deleteEvent(eventId)
    }
  }
  
  return (
    <>
      <h1>Criando eventos no Google Calendar</h1>
   
      <button onClick={createNewEvent}>Criar novo evento no Google Calendar</button>

      <h2>Meus eventos</h2>
      {eventsData.map((event) => (
        <div key={event.id} style={{display: 'flex', gap: 10, alignItems: 'center'}}>
          <p>{event.start.dateTime || event.start.date} - {event.summary}</p>
          <button style={{height: 40}} onClick={removeEvent(event.id)}>Apagar</button>
        </div>
      ))}
    </>
  )
}

export default App
