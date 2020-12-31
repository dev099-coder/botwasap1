exports.info = (id, XBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `*MENU ${XBOT}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

╔════════════════════
║ *Info ${LIGHTBOT}*
╠════════════════════
║├≽️⚜ *AUTOR* : _DEV JAVA_
║├≽️⚜ *DESIGNER* : _DEV JAVA_
║├≽️⚜ *OWNER* : _DEV JAVA & AFFIS JUNIANTO_
╠════════════════════
║  *${LIGHTBOT}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${LIGHTBOT}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY DEV JAVA*_
╠════════════════════
║ゞ📆 *${tampilTanggal}*
║ゞ⏱️ *${tampilWaktu}*
║ゞ📢 Bot Aktif ; *${aktif}*
╚════════════════════`
}
