﻿//啟動模組
const Discord = require('discord.js');
const client = new Discord.Client({ autoReconnect: true });
//於cmd回傳啟動訊息
client.on("ready", () => {
    //用於統計使用者
    console.log(`G11回家囉!接觸了 ${client.users.cache.size} 位成員，看到了 ${client.channels.cache.size} 個頻道，加入了 ${client.guilds.cache.size} 個伺服器`);
    client.user.setActivity(`跟ArmFire1911睡覺|睡鼠help`);
});
client.on('ready', () => {
    console.log(`以 ${client.user.tag}身分登入了!`);
});



client.login(process.env['token']);
