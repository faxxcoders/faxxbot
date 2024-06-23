exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
exports.Styles = (text, style = 1) => {
            var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
            var yStr = Object.freeze({
     1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
     // 1: '𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇1234567890'
            });
            var replacer = [];
            xStr.map((v, i) => replacer.push({
              original: v,
              convert: yStr[style].split('')[i]
            }));
            var str = text.toLowerCase().split('');
            var output = [];
            str.map(v => {
              const find = replacer.find(x => x.original == v);
              find ? output.push(find.convert) : output.push(v);
            });
           return output.join('');
         };