﻿﻿/*
  License - Creative Commons Attribution-NoDerivatives 4.0 International License. (CC BY-ND 4.0)
  Project - Real Grace
  Author  - Starlight & Sleid
  Script  - MapHack
  Version - 0.01
  https://github.com/realgrace/Dota-2-Scripts
*/
var _0x3efe=["\x69\x74\x65\x6D\x5F\x6F\x72\x63\x68\x69\x64","\x69\x74\x65\x6D\x5F\x62\x6C\x6F\x6F\x64\x74\x68\x6F\x72\x6E","\x69\x74\x65\x6D\x5F\x73\x68\x65\x65\x70\x73\x74\x69\x63\x6B","\x69\x74\x65\x6D\x5F\x63\x79\x63\x6C\x6F\x6E\x65","\x70\x75\x64\x67\x65\x5F\x64\x69\x73\x6D\x65\x6D\x62\x65\x72","\x6C\x69\x6F\x6E\x5F\x76\x6F\x6F\x64\x6F\x6F","\x70\x75\x63\x6B\x5F\x77\x61\x6E\x69\x6E\x67\x5F\x72\x69\x66\x74","\x73\x68\x61\x64\x6F\x77\x5F\x73\x68\x61\x6D\x61\x6E\x5F\x76\x6F\x6F\x64\x6F\x6F","\x64\x72\x61\x67\x6F\x6E\x5F\x6B\x6E\x69\x67\x68\x74\x5F\x64\x72\x61\x67\x6F\x6E\x5F\x74\x61\x69\x6C","\x72\x75\x62\x69\x63\x6B\x5F\x74\x65\x6C\x65\x6B\x69\x6E\x65\x73\x69\x73","\x74\x69\x64\x65\x68\x75\x6E\x74\x65\x72\x5F\x72\x61\x76\x61\x67\x65","\x65\x6E\x69\x67\x6D\x61\x5F\x62\x6C\x61\x63\x6B\x5F\x68\x6F\x6C\x65","\x61\x78\x65\x5F\x62\x65\x72\x73\x65\x72\x6B\x65\x72\x73\x5F\x63\x61\x6C\x6C","\x6D\x61\x67\x6E\x61\x74\x61\x75\x72\x5F\x72\x65\x76\x65\x72\x73\x65\x5F\x70\x6F\x6C\x61\x72\x69\x74\x79","\x6C\x65\x67\x69\x6F\x6E\x5F\x63\x6F\x6D\x6D\x61\x6E\x64\x65\x72\x5F\x64\x75\x65\x6C","\x62\x65\x61\x73\x74\x6D\x61\x73\x74\x65\x72\x5F\x70\x72\x69\x6D\x61\x6C\x5F\x72\x6F\x61\x72","\x74\x72\x65\x61\x6E\x74\x5F\x6F\x76\x65\x72\x67\x72\x6F\x77\x74\x68","\x66\x61\x63\x65\x6C\x65\x73\x73\x5F\x76\x6F\x69\x64\x5F\x63\x68\x72\x6F\x6E\x6F\x73\x70\x68\x65\x72\x65","\x62\x61\x74\x72\x69\x64\x65\x72\x5F\x66\x6C\x61\x6D\x69\x6E\x67\x5F\x6C\x61\x73\x73\x6F","\x64\x61\x72\x6B\x5F\x73\x65\x65\x72\x5F\x77\x61\x6C\x6C\x5F\x6F\x66\x5F\x72\x65\x70\x6C\x69\x63\x61","\x73\x6C\x61\x72\x64\x61\x72\x5F\x73\x6C\x69\x74\x68\x65\x72\x65\x65\x6E\x5F\x63\x72\x75\x73\x68","\x71\x75\x65\x65\x6E\x6F\x66\x70\x61\x69\x6E\x5F\x73\x6F\x6E\x69\x63\x5F\x77\x61\x76\x65","\x63\x65\x6E\x74\x61\x75\x72\x5F\x68\x6F\x6F\x66\x5F\x73\x74\x6F\x6D\x70","\x73\x76\x65\x6E\x5F\x73\x74\x6F\x72\x6D\x5F\x62\x6F\x6C\x74"]
var DisableItems=[_0x3efe[0],_0x3efe[1],_0x3efe[2],_0x3efe[3]]
var DisableAbils=[_0x3efe[4],_0x3efe[5],_0x3efe[6],_0x3efe[7],_0x3efe[8],_0x3efe[9]]
var InitSpells=[_0x3efe[10],_0x3efe[11],_0x3efe[12],_0x3efe[13],_0x3efe[14],_0x3efe[15],_0x3efe[16],_0x3efe[17],_0x3efe[18],_0x3efe[19],_0x3efe[20],_0x3efe[21],_0x3efe[22],_0x3efe[23]]
var DisableItems=[_0x3efe[0],_0x3efe[1],_0x3efe[2],_0x3efe[3]]
var DisableAbils=[_0x3efe[4],_0x3efe[5],_0x3efe[6],_0x3efe[7],_0x3efe[8],_0x3efe[9]]
var InitSpells=[_0x3efe[10],_0x3efe[11],_0x3efe[12],_0x3efe[13],_0x3efe[14],_0x3efe[15],_0x3efe[16],_0x3efe[17],_0x3efe[18],_0x3efe[19],_0x3efe[20],_0x3efe[21],_0x3efe[22],_0x3efe[23]]
var DisableItems=[_0x3efe[0],_0x3efe[1],_0x3efe[2],_0x3efe[3]]
var DisableAbils=[_0x3efe[4],_0x3efe[5],_0x3efe[6],_0x3efe[7],_0x3efe[8],_0x3efe[9]]
var InitSpells=[_0x3efe[10],_0x3efe[11],_0x3efe[12],_0x3efe[13],_0x3efe[14],_0x3efe[15],_0x3efe[16],_0x3efe[17],_0x3efe[18],_0x3efe[19],_0x3efe[20],_0x3efe[21],_0x3efe[22],_0x3efe[23]]
var _0x2ffa=["\x61\x6E\x74\x69\x61\x64\x64\x69\x63\x74\x69\x6F\x6E\x5F\x74\x6F\x61\x73\x74","\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435\x21\x20\u043D\u0435\u043E\u0431\u0445\u043E\u0438\u0434\u043E\x20\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C\x20\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u044E\x20\u0432\u0435\u0440\u0441\u0438\u044E\x20\u0437\u0430\u0433\u0440\u0437\u0447\u0438\u043A\u0430\x21\x20\x4D\x61\x70\x48\x61\x63\x6B\x20\x20\x2D\x20\u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D","\x35","\x63\x68\x65\x63\x6B\x65\x64","\x53\x63\x72\x69\x70\x74\x20\x64\x69\x73\x61\x62\x6C\x65\x64\x3A\x20\x52\x47\x5F\x4D\x61\x70\x48\x61\x63\x6B","\x23\x66\x66\x30\x30\x30\x30","\x53\x63\x72\x69\x70\x74\x20\x65\x6E\x61\x62\x6C\x65\x64\x3A\x20\x52\x47\x5F\x4D\x61\x70\x48\x61\x63\x6B","\x23\x30\x30\x66\x66\x30\x30","\x50\x61\x6E\x65\x6C","\x23\x73\x63\x72\x69\x70\x74\x73","\x52\x47\x5F\x4D\x61\x70\x48\x61\x63\x6B","\x6F\x6E\x61\x63\x74\x69\x76\x61\x74\x65","\x3C\x72\x6F\x6F\x74\x3E\x3C\x73\x74\x79\x6C\x65\x73\x3E\x3C\x69\x6E\x63\x6C\x75\x64\x65\x20\x73\x72\x63\x3D\x22\x73\x32\x72\x3A\x2F\x2F\x70\x61\x6E\x6F\x72\x61\x6D\x61\x2F\x73\x74\x79\x6C\x65\x73\x2F\x64\x6F\x74\x61\x73\x74\x79\x6C\x65\x73\x2E\x76\x63\x73\x73\x5F\x63\x22\x20\x2F\x3E\x3C\x69\x6E\x63\x6C\x75\x64\x65\x20\x73\x72\x63\x3D\x22\x73\x32\x72\x3A\x2F\x2F\x70\x61\x6E\x6F\x72\x61\x6D\x61\x2F\x73\x74\x79\x6C\x65\x73\x2F\x6D\x61\x67\x61\x64\x61\x6E\x2E\x76\x63\x73\x73\x5F\x63\x22\x20\x2F\x3E\x3C\x2F\x73\x74\x79\x6C\x65\x73\x3E\x3C\x50\x61\x6E\x65\x6C\x3E\x3C\x54\x6F\x67\x67\x6C\x65\x42\x75\x74\x74\x6F\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x43\x68\x65\x63\x6B\x42\x6F\x78\x22\x20\x69\x64\x3D\x22\x52\x47\x5F\x4D\x61\x70\x48\x61\x63\x6B\x22\x20\x74\x65\x78\x74\x3D\x22\x52\x47\x5F\x4D\x61\x70\x48\x61\x63\x6B\x22\x2F\x3E\x3C\x2F\x50\x61\x6E\x65\x6C\x3E\x3C\x2F\x72\x6F\x6F\x74\x3E"]
var _0x9d39=["\x41\x6E\x63\x69\x65\x6E\x74\x43\x72\x65\x65\x70\x53\x74\x61\x63\x6B","\x53\x75\x62\x73\x63\x72\x69\x62\x65\x73","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x50\x61\x6E\x65\x6C\x73","\x50\x61\x72\x74\x69\x63\x6C\x65\x73"]
var uiw=Game.GetScreenWidth()
var uih=Game.GetScreenHeight()
var interval=0
var hpn=false
var b=false
var camp
var z=0
var myid
var ent
var team
var status
var a=[[[-2625,-333,384],[-2576,-457,384],[-2517,-656,384],[-2675,-812,384],[-2826,-971,384],[-2987,-1121,384],[-3160,-1264,384],[-3292,-1416,384],[-3443,-1576,384],[-3621,-1706,384],[-3791,-1842,384],[-3959,-1983,384],[-4125,-2123,384]],[[3104,-769,256],[3033,-773,256],[2812,-786,256],[2602,-795,256],[2389,-772,256],[2207,-653,256],[2125,-447,256],[2085,-237,256],[2087,-15,256],[2152,187,256],[2267,360,256],[2322,575,256],[2400,736,256]]]
var camps=[[[-2463,-160,384],55,-0.05],[[3535,-786,256],54.9,0.1]]
var ancients={npc_dota_neutral_black_drake:[250,279],npc_dota_neutral_big_thunder_lizard:[223,393],npc_dota_neutral_granite_golem:[230,393]}
var spots=[[-3307,383,-2564,-413,400],[3456,-384,4543,-1151,300]]

function MapHack()
{
	GameEvents.SendEventClientSide(_0x2ffa[0],{message:_0x2ffa[1],duration:_0x2ffa[2]});
	RG_MapHack[_0x2ffa[3]]= fasle
}
var RG_MapHackcheckbox=function()
{
	if(!RG_MapHack[_0x2ffa[3]])
	{
		Game.ScriptLogMsg(_0x2ffa[4],_0x2ffa[5]);
		return
	}
	function _0x606dx3()
	{
		$.Schedule(interval,function()
		{
			MapHack();
			if(RG_MapHack[_0x2ffa[3]])
			{
				_0x606dx3()
			}
		}
		)
	}
	_0x606dx3();
	Game.ScriptLogMsg(_0x2ffa[6],_0x2ffa[7])
}

var _0x4456=["\x50\x61\x72\x74\x69\x63\x6C\x65\x73","\x45\x78\x70\x52\x61\x6E\x67\x65","\x70\x61\x72\x74\x69\x63\x6C\x65\x73\x2F\x75\x69\x5F\x6D\x6F\x75\x73\x65\x61\x63\x74\x69\x6F\x6E\x73\x2F\x72\x61\x6E\x67\x65\x5F\x64\x69\x73\x70\x6C\x61\x79\x2E\x76\x70\x63\x66"]
var exprangeLoad=function()
{
	try
	{
		Particles.DestroyParticleEffect(Game[_0x4456[0]].ExpRange,Game[_0x4456[0]].ExpRange)
	}
	catch(e)
	{
	}
	var _0x96f6x2=Players.GetPlayerHeroEntityIndex(Game.GetLocalPlayerID())
	Game[_0x4456[0]][_0x4456[1]]= Particles.CreateParticle(_0x4456[2],ParticleAttachment_t.PATTACH_ABSORIGIN_FOLLOW,_0x96f6x2);
	Particles.SetParticleControl(Game[_0x4456[0]].ExpRange,1,[Range,0,0])
}


var Temp=$.CreatePanel(_0x2ffa[8],$(_0x2ffa[9]),_0x2ffa[10])
Temp.SetPanelEvent(_0x2ffa[11],RG_MapHackcheckbox);
Temp.BLoadLayoutFromString(_0x2ffa[12],false,false);
var RG_MapHack=$.GetContextPanel().FindChildTraverse(_0x2ffa[10]).Children()[0]