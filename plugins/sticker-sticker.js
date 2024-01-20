import { sticker } from "../lib/sticker.js";
import uploadFile from "../lib/uploadFile.js";
import uploadImage from "../lib/uploadImage.js";
import { webp2png } from "../lib/webp2mp4.js";
import os from "os";


let handler = async (m, { conn, args, usedPrefix, command }) => {
    let stiker = false;
    let user = db.data.users[m.sender];
    let time = user.lastmining + 10000; //tiempo de espera en min
    if (new Date() - user.lastmiming < 10000)
        return await conn.reply(
            m.chat,
            `*ESPERA UNOS MINUTOS PARA USAR OTRO COMANDO*`,
            m
        );
    try {
        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || q.mediaType || "";
        if (/webp|image|video/g.test(mime)) {
            if (/video/g.test(mime))
                if ((q.msg || q).seconds > 11)
                    return m.reply(
                        "╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝙉𝙊 𝘿𝙀𝘽𝙀 𝘿𝙀 𝘿𝙐𝙍𝘼𝙍 𝙈𝘼𝙎 𝘿𝙀 *7* 𝙎𝙀𝙂𝙐𝙉𝘿𝙊𝙎\n\n𝙏𝙃𝙀 𝙑𝙄𝘿𝙀𝙊 𝙎𝙃𝙊𝙐𝙇𝘿 𝙉𝙊𝙏 𝙇𝘼𝙎𝙏 𝙈𝙊𝙍𝙀 𝙏𝙃𝘼𝙉 *7* 𝙎𝙀𝘾𝙊𝙉𝘿𝙎"
                    );
            let img = await q.download?.();
            if (!img)
                throw `╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉, 𝙑𝙄𝘿𝙀𝙊, 𝙂𝙄𝙁 𝙊 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙏𝙄𝙋𝙊 *.jpg* 𝙋𝘼𝙍𝘼 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝙀𝙇 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙐𝙎𝙀 *${
                    usedPrefix + command
                }*\n\n𝙍𝙀𝙎𝙋𝙊𝙉𝘿 𝙏𝙊 𝘼𝙉 𝙄𝙈𝘼𝙂𝙀, 𝙑𝙄𝘿𝙀𝙊, 𝙂𝙄𝙁 𝙊𝙍 𝙇𝙄𝙉𝙆 𝙊𝙁 𝙏𝙔𝙋𝙀 *.jpg* 𝙏𝙊 𝙈𝘼𝙆𝙀 𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙐𝙎𝙀 *${
                    usedPrefix + command
                }_*`;
            let out;
            try {
                stiker = await sticker(
                    img,
                    false,
                    global.packname,
                    global.author
                );
            } catch (e) {
                console.error(e);
            } finally {
                await conn.reply(
                    m.chat,
                    `${eg}⏳ *CREANDO STICKER, UN MOMENTO...* 🐈`,
                    m
                );
                if (!stiker) {
                    if (/webp/g.test(mime)) out = await webp2png(img);
                    else if (/image/g.test(mime)) out = await uploadImage(img);
                    else if (/video/g.test(mime)) out = await uploadFile(img);
                    if (typeof out !== "string") out = await uploadImage(img);
                    stiker = await sticker(
                        false,
                        out,
                        global.packname,
                        global.author
                    );
                }
            }
        } else if (args[0]) {
            if (isUrl(args[0]))
                stiker = await sticker(
                    false,
                    args[0],
                    global.packname,
                    global.author
                );
            else return m.reply("URL invalido");
        }
    } catch (e) {
        console.error(e);
        if (!stiker) stiker = e;
    } finally {
        if (stiker)
            conn.sendFile(
                m.chat,
                stiker,
                "sticker.webp",
                "",
                m,
                true,
                {
                    contextInfo: {
                        forwardingScore: 200,
                        isForwarded: false,
                        externalAdReply: {
                            showAdAttribution: false,
                            title: wm,
                            body: `h`,
                            mediaType: 2,
                            sourceUrl: nn,
                            thumbnail: imagen1,
                        },
                    },
                },
                { quoted: m }
            );
        else {
            let msj = await infoOS_Text();
            console.log("process.env -->", process.env);
          throw new Error(msj);
          throw new Error('Test Reinicar Render.com');

            throw "╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉, 𝙑𝙄𝘿𝙀𝙊, 𝙂𝙄𝙁 𝙊 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙏𝙄𝙋𝙊 *.jpg* 𝙋𝘼𝙍𝘼 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝙀𝙇 𝙎𝙏𝙄𝘾𝙆𝙀𝙍\n\n𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉 𝙍𝙀𝙎𝙋𝙊𝙉𝘿 𝙏𝙊 𝘼𝙉 𝙄𝙈𝘼𝙂𝙀, 𝙑𝙄𝘿𝙀𝙊, 𝙂𝙄𝙁 𝙊𝙍 𝙇𝙄𝙉𝙆 𝙊𝙁 𝙏𝙔𝙋𝙀 *.jpg* 𝙏𝙊 𝙈𝘼𝙆𝙀 𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍*";
        }
    }
    user.lastmiming = new Date() * 1;
};
handler.help = ["sticker"];
handler.tags = ["sticker"];
handler.command = ["s", "sticker", "stiker"];

export default handler;

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes + " m y " + seconds + " s ";
}

const isUrl = (text) => {
    return text.match(
        new RegExp(
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/,
            "gi"
        )
    );
};





const infoOS_Text = async () => {
    try {
            
        const memoryUsage = process.memoryUsage();
        
        let textArray = [
            //"": //"Uso de memoria RAM (en bytes):",
            "*Uso de memoria RAM*",
            "",
            `RSS (Resident Set Size): ${await bytesToSize(memoryUsage.rss)}`,
            "",
            `Heap Total: ${await bytesToSize(memoryUsage.heapTotal)}`,
            "",
            `Heap Used: ${await bytesToSize(memoryUsage.heapUsed)}`,
            "",
            `External: ${await bytesToSize(memoryUsage.external)}`,
            "",
            "",
            "",
            "*** A NIVEL GLOBAL ***",
            "",
            `Memoria total del sistema: ${await bytesToSize(os.totalmem())}`,
            "",
            `Memoria libre del sistema: ${await bytesToSize(os.freemem())}`,
            "",
            `Sistema Operativo (tipo): ${os.type()}`,
            "",
            `Sistema Operativo (platform): ${os.platform()}`,
            "",
            `Sistema Operativo version: ${os.release()}`,
            "",
            "",
            "",
            "",
            "=================",
            "=== Conceptos ===",
            "",
            "rss (Resident Set Size): Memoria que se mantiene en la RAM para el proceso. No solo es la memoria utilizada",
            "por tu código JavaScript, sino también por el propio motor V8 y las estructuras de datos internas.",
            //`RSS (Resident Set Size): ${await bytesToSize(memoryUsage.rss)}`,
            "",
            "heapTotal: Memoria total asignada para el montón de V8, que es donde se almacenan las variables y donde",
            "ocurre la gestión de la memoria para tu código JavaScript",
            //`Heap Total: ${await bytesToSize(memoryUsage.heapTotal)}`,
            "",
            "heapUsed: Memoria realmente utilizada dentro del montón asignado",
            //`Heap Used: ${await bytesToSize(memoryUsage.heapUsed)}`,
            "",
            "external: Memoria utilizada por objetos vinculados externamente a V8, como buffers y otros objetos nativos.",
            //`External: ${await bytesToSize(memoryUsage.external)}`,
        ]
        let result = textArray.join("\n");
        //console.log(result);
        return result;
    } catch (error) {
        console.log(" Error en InfoServer.infoOS_Text() -->", error);
    }
}




function bytesToSize(bytes) {
    return new Promise((resolve, reject) => {
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        if (bytes === 0) return "n/a";
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
        if (i === 0) resolve(`${bytes} ${sizes[i]}`);
        resolve(`${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`);
    });
}
