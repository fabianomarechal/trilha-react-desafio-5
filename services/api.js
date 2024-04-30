import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://qwfcomdakxtrtpkhhayv.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3ZmNvbWRha3h0cnRwa2hoYXl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NTQ1NTAsImV4cCI6MjAzMDAzMDU1MH0.WaMfqNhD0RL7dQ39chBD2vWc4utkLdmHS5RKxZpUDA0",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3ZmNvbWRha3h0cnRwa2hoYXl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NTQ1NTAsImV4cCI6MjAzMDAzMDU1MH0.WaMfqNhD0RL7dQ39chBD2vWc4utkLdmHS5RKxZpUDA0"
    }
})
