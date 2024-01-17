import express from 'express' 
import {createServer} from 'http'
import path from 'path'
import {Socket} from 'socket.io'
import {toBuffer} from 'qrcode'
import fetch from 'node-fetch'

function connect(conn, PORT) {
  const app = global.app = express()
  //console.log(app)
  const server = global.server = createServer(app)
  let _qr = 'QR invalido, probablemente ya hayas escaneado el QR.'

  conn.ev.on('connection.update', function appQR({qr}) {
    if (qr) {
      _qr = qr
      if (global.keepAliveRender === 1 && process.env.RENDER_EXTERNAL_URL) {
        console.log(`Para obtener el código QR por favor ingresa a ${process.env.RENDER_EXTERNAL_URL}/get-qr-code`);
      }
    } 
  })

  app.get('/get-qr-code', async (req, res) => {
    res.setHeader('content-type', 'image/png')
    res.end(await toBuffer(_qr))
  });

  app.get('*', async (req, res) => {
    res.json("GATABOT-MD en ejecución");
  });

  server.listen(PORT, async () => {
    console.log('App listened on port', PORT)
    if (global.keepAliveRender === 1) await keepAliveHostRender();
    if (opts['keepalive']) keepAlive()
  })
}

function pipeEmit(event, event2, prefix = '') {
  const old = event.emit;
  event.emit = function(event, ...args) {
    old.emit(event, ...args)
    event2.emit(prefix + event, ...args)
  }
  return {
    unpipeEmit() {
      event.emit = old
    }}
}

function keepAlive() {
  const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
  if (/(\/\/|\.)undefined\./.test(url)) return
  setInterval(() => {
    fetch(url).catch(console.error)
  }, 5 * 1000 * 60)
}

//Kurt18: Esta función va impedir que Render vaya a modo suspensión por inactividad
const keepAliveHostRender = async () => {


  setInterval(async() => {
      const urlRender = process.env.YYYXTERNTT_GG;
      const res = await fetch(urlRender);
      if (res.status === 200) {
        const result = await res.text();
        console.log(`Resultado desde keepAliveHostRender() ->`, result);
      }
  }, 3 * 1000 * 60)

}

export default connect
