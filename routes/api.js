require('../settings')
const express = require('express')
var isUrl = require("is-url")
var fetch = require('node-fetch')
const isImageURL = require('image-url-validator').default
const textpro = require('../lib/textpro')
const photooxy = require('../lib/photooxy')
const { fetchJson, runtime, getBuffer } = require('../lib/functions')
const { set } = require('lodash')
var router = express.Router()


// - DOWNLOADER MENU - \\

// - STALKER MENU - \\

// - SEARCH MENU - \\

// - MAKER MENU - \\


// - TEXT PRO MENU - \\
router.get('/textpro/grunge', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){ 
textpro("https://textpro.me/grunge-metallic-3d-text-effect-online-1115.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/typography', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){ 
textpro("https://textpro.me/create-artistic-typography-online-1086.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/gradient-neon-light', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/white-gold', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/light-glow-sliced', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/glowing-neon-light', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/deep-sea', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/metallic', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/transformer', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){ 
textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/thunder', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/thunder2', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/neon-light-text', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/matrix', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/neon-text', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/neon-text-effect-online-879.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/road-warning', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){ 
textpro("https://textpro.me/road-warning-text-effect-878.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/bokeh', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/bokeh-text-effect-876.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/advanced-glow', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/free-advanced-glow-text-effect-873.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/break-wall', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/break-wall-text-effect-871.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/blackpink', async(req, res, next) => {
var text = req.query.text
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/blackpink2', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/blackpink3', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-a-blackpink-logo-decorated-with-roses-online-free-1080.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/blackpink4', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-blackpink-style-logo-effects-online-1079.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/blackpink5', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-blackpink-s-born-pink-album-theme-logo-online-1092.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/glitch', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/pornhub', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/marvel-studio', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/marvel-studio2', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/avengers-logo', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/thor-logo', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-thor-logo-style-text-effect-online-1064.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})


// - PHOTOOXY MENU - \\
router.get('/photooxy/dark-metal', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/elegant-3d-neon-dark-metal-text-effect-online-free-416.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/white-stone', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/shadow', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/white-cube', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/3d-text-effect-under-white-cube-217.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/gradient', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/gradient-avatar-text-effect-207.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/fur-text', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/fur-text-effect-generator-198.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/flaming', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/scary-cemetery', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/harry-potter', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/3d-wood', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/3d-wood-text-black-style-182.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/illuminated-metallic', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/put-your', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/8-bit', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})


// - TOOLS MENU - \\

module.exports = router
