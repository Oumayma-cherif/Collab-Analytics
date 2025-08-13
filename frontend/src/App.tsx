import React, {useEffect, useState} from 'react'

export default function App(){
  const [msg, setMsg] = useState('Connecting...')
  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8000/ws')
    ws.onopen = () => setMsg('Connected to backend websocket')
    ws.onmessage = e => console.log('ws msg', e.data)
    ws.onclose = () => setMsg('Socket closed')
    return ()=> ws.close()
  },[])
  return (<div style={{padding:20}}><h1>Collab Analytics (Starter)</h1><p>{msg}</p></div>)
}
