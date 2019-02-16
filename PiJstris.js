// ==UserScript==
// @name         PiJstris
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Delete elements of the website jstris.jezevec10.com to be able to play with a Raspberry Pi using a little screen
// @author       Klaudioz
// @match        https://*.jstris.jezevec10.com/*
// @grant    GM_addStyle


// ==/UserScript==

var chat = document.getElementById('chatLobby');
var players = document.getElementById('players');
if (chat || players) {
    chat.parentNode.removeChild(chat);
    players.parentNode.removeChild(players);
}

GM_addStyle ( `
    #main {
        float: none;
        display: inline-block;
    }
` );
