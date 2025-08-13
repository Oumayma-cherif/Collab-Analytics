from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get('/')
async def root():
    return {"status":"ok","service":"collab-analytics-backend"}

@app.websocket('/ws')
async def websocket_endpoint(ws: WebSocket):
    await ws.accept()
    try:
        while True:
            data = await ws.receive_text()
            await ws.send_text(f'ECHO: {data}')
    except Exception:
        await ws.close()
