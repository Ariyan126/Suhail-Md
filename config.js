const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ariyan12345678ahmed@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://ariyan:ariyandb@cluster0.v4bdqxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/+923555341506";
global.website=process.env.GURL || "https:// wa.me/+923555341506" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Ariyan-Ahmed" 


global.devs = "923555341506" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923555341506";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923555341506";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923555341506,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_40_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NCxcbiAgICAgICAgMzksXG4gICAgICAgIDUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM0LFxuICAgICAgICA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgODgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTksXG4gICAgICAgIDc1LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgODIsXG4gICAgICAgIDY3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg1LFxuICAgICAgICA1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDU1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk1LFxuICAgICAgICA2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDgwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTksXG4gICAgICAgIDE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2OWtrQW9zZGlTQ1IrVGdkdHZZd056S3BpZzlLYm9SUGFWejVkeVdXa0M4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzU1NTM0MTUwNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0FDMTYxOTNEMkUxRjA4MkIxNjA5OEVGNTA4MzUzNUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MTM1NjM4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNBVVh3MGxuUXI2eG9weFMyaHBjZ3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWZmN2NjOGQtYzdiMy00ZTJkLTlmODgtMzM2ZGY3NDkwZGQ0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg4LFxuICAgICAgMjI4LFxuICAgICAgNzMsXG4gICAgICAyMjcsXG4gICAgICAxNTQsXG4gICAgICAyNDcsXG4gICAgICA2NSxcbiAgICAgIDE4NixcbiAgICAgIDE5NyxcbiAgICAgIDIxMyxcbiAgICAgIDI0NSxcbiAgICAgIDI1MCxcbiAgICAgIDUzLFxuICAgICAgMTk3LFxuICAgICAgNjEsXG4gICAgICAyNCxcbiAgICAgIDE0MyxcbiAgICAgIDksXG4gICAgICAyMzMsXG4gICAgICAyNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgMjExLFxuICAgICAgOTAsXG4gICAgICAxNzUsXG4gICAgICAzOSxcbiAgICAgIDcyLFxuICAgICAgMTQ3LFxuICAgICAgOTYsXG4gICAgICAyMjUsXG4gICAgICAxNDgsXG4gICAgICA1MSxcbiAgICAgIDIzNSxcbiAgICAgIDYsXG4gICAgICAxODAsXG4gICAgICA3NSxcbiAgICAgIDE4OCxcbiAgICAgIDE0NCxcbiAgICAgIDE1MyxcbiAgICAgIDMwLFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjFGV1NFNU1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzU1NTM0MTUwNjoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY5NTQzOTM0Njc3MTE5OjE5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuGOquGOoc2l4Y+G4ben4Y694bef4Y6qzp0g4oOd4Y6q4Y674Y634Y6s4Y6gXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTis4eFNnUWpOdmZzd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWRUFpNFY2eWRuWlI3UWZBbVlldDFOL0pIMEhvZlFtT0VtdG9YRmozTHlrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxTTkJqN3VKYytRU0lxbUIzUDVRTG9WcGZ1cGt4czZlVU1ueS9JMDVHdlpST0xXVXFqdTZyM1R1MVhGWmJsOWhoWkc2eHpZQmJoMnRtRnJFc3Zvc0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJRSWF2bDFNUHhpbU8zYUlxSkRaeWJTcXl5UDd1MWppQ0x1aEZxUnk3QmJwUVUyZGhGZmdmRGZkTmtSS0MxdC9SWndYc1cvM083V1BKc0NqR2JrR2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzU1NTM0MTUwNjoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MTM1NjMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRTFrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFMWsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyOWl2R0JraUptM3dWTHY0QUQxaVZ2MEMrZXExelFDSnlUVFVZVFdzTGR3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg1MDI0MzUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkxMzU2MzQ2MzNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "AriyanTec", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ariyan-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Ariyan-Md",
  ownername:process.env.OWNER_NAME|| "Ariyan Ahmed",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
