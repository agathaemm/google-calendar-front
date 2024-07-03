import axios from "axios";

const URL_BASE = 'http://localhost:3000/api/google-calendar/events';

export async function createEvent(event: any) {
    try {
        await axios.post(`${URL_BASE}/create`, event);
    } catch (error) {
        console.error('Erro ao criar o evento:', error);
    }
}

export async function listEvents() {
    try {
        const response = await axios.get(`${URL_BASE}/list`);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter os eventos:', error);
    }
}

export async function deleteEvent(eventId: string) {
    try {
        await axios.delete(`${URL_BASE}/delete/${eventId}`)
    }catch(error) {
        console.error('Erro ao deletar o evento: ', error)
    }
}