(function(){var k=Handlebars.template({compiler:[7,"\x3e\x3d 4.0.0"],main:function(f,a,c,g,e){var d;return'\x3ch4\x3eList of containers \x3cbutton type\x3d"submit" class\x3d"btn btn-small btn-info" onclick\x3d"reloadContainers()"\x3eRefresh\x3c/button\x3e\x3c/h4\x3e\r\n\x3ctable id\x3d"containerTable" class\x3d"table table-striped"\x3e\r\n\t\x3cthead id\x3d"containerTableHeader"\x3e\r\n\t\t\x3ctr\x3e\r\n\t\t\t\x3ctd\x3eName\x3c/td\x3e\r\n\t\t\t\x3ctd\x3eStatus\x3c/td\x3e\r\n\t\t\t\x3ctd\x3ePID\x3c/td\x3e\r\n\t\t\t\x3ctd\x3eIP\x3c/td\x3e\r\n\t\t\t\x3ctd\x3eActions\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n\t\x3c/thead\x3e\r\n\t\x3ctbody id\x3d"containerTableData"\x3e\r\n'+
(null!=(d=c.each.call(null!=a?a:{},a,{name:"each",hash:{},fn:f.program(1,e,0),inverse:f.program(11,e,0),data:e}))?d:"")+'\t\t\x3ctr\x3e\r\n\t\t\t\x3ctd colspan\x3d"5"\x3e\x3cbutton type\x3d"button" class\x3d"btn btn-info" data-toggle\x3d"modal" data-target\x3d"#addContainer"\x3eAdd Container\x3c/button\x3e\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n\t\x3c/tbody\x3e\r\n\x3c/table\x3e\r\n'},1:function(f,a,c,g,e){var d,b;return'\t\t\x3ctr id\x3d"row_'+f.escapeExpression((b=null!=(b=c.name||(null!=a?a.name:a))?
b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"name",hash:{},data:e}):b))+'"\x3e\r\n\t\t\t\x3ctd id\x3d"name"\x3e\x3cb\x3e'+f.escapeExpression((b=null!=(b=c.name||(null!=a?a.name:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"name",hash:{},data:e}):b))+'\x3c/b\x3e\x3c/td\x3e\r\n\t\t\t\x3ctd id\x3d"status"\x3e'+f.escapeExpression((b=null!=(b=c.status||(null!=a?a.status:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"status",hash:{},
data:e}):b))+'\x3c/td\x3e\r\n\t\t\t\x3ctd id\x3d"pid"\x3e'+f.escapeExpression(f.lambda(null!=(d=null!=a?a.state:a)?d.pid:d,a))+'\x3c/td\x3e\r\n\t\t\t\x3ctd id\x3d"ip"\x3e\r\n'+(null!=(d=c.each.call(null!=a?a:{},null!=(d=null!=a?a.state:a)?d.network:d,{name:"each",hash:{},fn:f.program(2,e,0),inverse:f.noop,data:e}))?d:"")+'\t\t\t\x3c/td\x3e\r\n\t\t\t\x3ctd id\x3d"actions"\x3e\r\n\t\t\t\t\x3ca href\x3d"#" id\x3d"viewState_'+f.escapeExpression((b=null!=(b=c.name||(null!=a?a.name:a))?b:c.helperMissing,
"function"===typeof b?b.call(null!=a?a:{},{name:"name",hash:{},data:e}):b))+'" style\x3d"color: orange" onclick\x3d"toggleViewState(event, this,\''+f.escapeExpression((b=null!=(b=c.name||(null!=a?a.name:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"name",hash:{},data:e}):b))+'\')"\x3e\x3cspan class\x3d"glyphicon glyphicon-menu-up"\x3e\x3c/span\x3e\x26nbsp;\x3cspan id\x3d"showHide"\x3eSHOW\x3c/span\x3e\x3c/a\x3e\r\n'+(null!=(d=c["if"].call(null!=a?a:{},(c.ifCond||a&&a.ifCond||
c.helperMissing).call(null!=a?a:{},null!=a?a.status:a,"\x3d\x3d\x3d","Running",{name:"ifCond",hash:{},data:e}),{name:"if",hash:{},fn:f.program(5,e,0),inverse:f.program(7,e,0),data:e}))?d:"")+'\t\t\t\t\x3ca href\x3d"#" id\x3d"editContainer" style\x3d"color: blue" data-name\x3d"'+f.escapeExpression((b=null!=(b=c.name||(null!=a?a.name:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"name",hash:{},data:e}):b))+'" onclick\x3d"toggleEditState(event, this, \''+f.escapeExpression((b=
null!=(b=c.name||(null!=a?a.name:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"name",hash:{},data:e}):b))+'\')"\x3e\x3cspan class\x3d"glyphicon glyphicon-pencil"\x3e\x3c/span\x3e\x26nbsp;EDIT\x3c/a\x3e\r\n\t\t\t\t\x3ca href\x3d"#" id\x3d"saveContainer" style\x3d"display: none; color: green" data-name\x3d"'+f.escapeExpression((b=null!=(b=c.name||(null!=a?a.name:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"name",hash:{},data:e}):b))+'" onclick\x3d"toggleEditState(event, this, \''+
f.escapeExpression((b=null!=(b=c.name||(null!=a?a.name:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"name",hash:{},data:e}):b))+'\')"\x3e\x3cspan class\x3d"glyphicon glyphicon-floppy-disk"\x3e\x3c/span\x3e\x26nbsp;SAVE\x3c/a\x3e\r\n'+(null!=(d=c["if"].call(null!=a?a:{},(c.ifCond||a&&a.ifCond||c.helperMissing).call(null!=a?a:{},null!=a?a.status:a,"\x3d\x3d\x3d","Stopped",{name:"ifCond",hash:{},data:e}),{name:"if",hash:{},fn:f.program(9,e,0),inverse:f.noop,data:e}))?d:"")+'\t\t\t\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n\t\t\x3ctr id\x3d"stateRow_'+
f.escapeExpression((b=null!=(b=c.name||(null!=a?a.name:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"name",hash:{},data:e}):b))+'" style\x3d"display: none" \x3e\x3ctd colspan\x3d"5"\x3e\x3cdiv id\x3d"stateRowContent_'+f.escapeExpression((b=null!=(b=c.name||(null!=a?a.name:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"name",hash:{},data:e}):b))+'"\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e\r\n'},2:function(f,a,c,g,e){var d,b;return"\t"+(null!=(d=c.unless.call(null!=
a?a:{},e&&e.first,{name:"unless",hash:{},fn:f.program(3,e,0),inverse:f.noop,data:e}))?d:"")+"\r\n    "+f.escapeExpression((b=null!=(b=c.key||e&&e.key)?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"key",hash:{},data:e}):b))+"\x3d"+f.escapeExpression(f.lambda(null!=a?a.ip4Address:a,a))+"\r\n"},3:function(f,a,c,g,e){return","},5:function(f,a,c,g,e){var d;return'\t\t\t\t\x3ca href\x3d"#" id\x3d"stopContainer" style\x3d"color: brown" onclick\x3d"ajaxPost(event, this, \'/container/stop/'+
f.escapeExpression((d=null!=(d=c.name||(null!=a?a.name:a))?d:c.helperMissing,"function"===typeof d?d.call(null!=a?a:{},{name:"name",hash:{},data:e}):d))+'\')"\x3e\x3cspan class\x3d"glyphicon glyphicon-stop"\x3e\x3c/span\x3e\x26nbsp;STOP\x3c/a\x3e\r\n'},7:function(f,a,c,g,e){var d;return'\t\t\t\t\x3ca href\x3d"#" id\x3d"startContainer" style\x3d"color: brown" onclick\x3d"ajaxPost(event, this, \'/container/start/'+f.escapeExpression((d=null!=(d=c.name||(null!=a?a.name:a))?d:c.helperMissing,"function"===
typeof d?d.call(null!=a?a:{},{name:"name",hash:{},data:e}):d))+'\')"\x3e\x3cspan class\x3d"glyphicon glyphicon-play"\x3e\x3c/span\x3e\x26nbsp;START\x3c/a\x3e\r\n'},9:function(f,a,c,g,e){var d;return'\t\t\t\t\x3ca href\x3d"#" id\x3d"deleteContainer" style\x3d"color: red" data-name\x3d"'+f.escapeExpression((d=null!=(d=c.name||(null!=a?a.name:a))?d:c.helperMissing,"function"===typeof d?d.call(null!=a?a:{},{name:"name",hash:{},data:e}):d))+'" onclick\x3d"deleteContainer(\''+f.escapeExpression((d=null!=
(d=c.name||(null!=a?a.name:a))?d:c.helperMissing,"function"===typeof d?d.call(null!=a?a:{},{name:"name",hash:{},data:e}):d))+'\')"\x3e\x3cspan class\x3d"glyphicon glyphicon-remove"\x3e\x3c/span\x3e\x26nbsp;DELETE\x3c/a\x3e\r\n'},11:function(f,a,c,g,e){return'\t\t\x3ctr\x3e\x3ctd colspan\x3d"5"\x3eNo containers found\x3c/td\x3e\x3c/tr\x3e\r\n'},useData:!0}),h=Handlebars.templates=Handlebars.templates||{};h.container=k;h=Handlebars.partials=Handlebars.partials||{};h.container=k;k=Handlebars.template({compiler:[7,
"\x3e\x3d 4.0.0"],main:function(f,a,c,g,e){var d;return'\x3ch4\x3eList of images \x3cbutton type\x3d"submit" class\x3d"btn btn-small btn-info" onclick\x3d"reloadImages()"\x3eRefresh\x3c/button\x3e\x3c/h4\x3e\r\n\x3ctable id\x3d"imageTable" class\x3d"table table-striped"\x3e\r\n\t\x3cthead id\x3d"imageTableHeader"\x3e\r\n\t\t\x3ctr\x3e\r\n\t\t\t\x3ctd\x3eAliases\x3c/td\x3e\r\n\t\t\t\x3ctd\x3eFingerprint\x3c/td\x3e\r\n\t\t\t\x3ctd\x3eArchitecture\x3c/td\x3e\r\n\t\t\t\x3ctd\x3eDescription\x3c/td\x3e\r\n\t\t\t\x3ctd\x3eActions\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n\t\x3c/thead\x3e\r\n\t\x3ctbody id\x3d"imageTableData"\x3e\r\n'+
(null!=(d=c.each.call(null!=a?a:{},a,{name:"each",hash:{},fn:f.program(1,e,0),inverse:f.program(6,e,0),data:e}))?d:"")+"\t\x3c/tbody\x3e\r\n\x3c/table\x3e"},1:function(f,a,c,g,e){var d,b;return'\t\t\x3ctr id\x3d"row_'+f.escapeExpression((b=null!=(b=c.fingerprint||(null!=a?a.fingerprint:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"fingerprint",hash:{},data:e}):b))+'"\x3e\r\n\t\t\t\x3ctd id\x3d"alias"\x3e'+(null!=(d=c.each.call(null!=a?a:{},null!=a?a.aliases:a,{name:"each",
hash:{},fn:f.program(2,e,0),inverse:f.program(4,e,0),data:e}))?d:"")+'\x3c/td\x3e\r\n\t\t\t\x3ctd id\x3d"fingerprint"\x3e\x3cb\x3e'+f.escapeExpression((b=null!=(b=c.fingerprint||(null!=a?a.fingerprint:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"fingerprint",hash:{},data:e}):b))+'\x3c/b\x3e\x3c/td\x3e\r\n\t\t\t\x3ctd id\x3d"arch"\x3e'+f.escapeExpression((b=null!=(b=c.architecture||(null!=a?a.architecture:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"architecture",
hash:{},data:e}):b))+'\x3c/td\x3e\r\n\t\t\t\x3ctd id\x3d"desc"\x3e'+f.escapeExpression((b=null!=(b=c.description||(null!=a?a.description:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"description",hash:{},data:e}):b))+'\x3c/td\x3e\r\n\t\t\t\x3ctd id\x3d"actions"\x3e\r\n\t\t\t\t\x3ca href\x3d"#" id\x3d"editContainer" style\x3d"color: blue" data-name\x3d"'+f.escapeExpression((b=null!=(b=c.name||(null!=a?a.name:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"name",
hash:{},data:e}):b))+'" onclick\x3d"toggleEditState(event, this, \''+f.escapeExpression((b=null!=(b=c.fingerprint||(null!=a?a.fingerprint:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"fingerprint",hash:{},data:e}):b))+'\')"\x3e\x3cspan class\x3d"glyphicon glyphicon-pencil"\x3e\x3c/span\x3e\x26nbsp;EDIT\x3c/a\x3e\r\n\t\t\t\t\x3ca href\x3d"#" id\x3d"saveContainer" style\x3d"display: none; color: green" data-name\x3d"'+f.escapeExpression((b=null!=(b=c.name||(null!=a?a.name:a))?
b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"name",hash:{},data:e}):b))+'" onclick\x3d"toggleEditState(event, this, \''+f.escapeExpression((b=null!=(b=c.fingerprint||(null!=a?a.fingerprint:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"fingerprint",hash:{},data:e}):b))+'\')"\x3e\x3cspan class\x3d"glyphicon glyphicon-floppy-disk"\x3e\x3c/span\x3e\x26nbsp;SAVE\x3c/a\x3e\r\n\t\t\t\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n'},2:function(f,a,c,g,e){var d;return"\x3cb\x3e"+
f.escapeExpression((d=null!=(d=c.name||(null!=a?a.name:a))?d:c.helperMissing,"function"===typeof d?d.call(null!=a?a:{},{name:"name",hash:{},data:e}):d))+'\x26nbsp;\r\n\t\t\t\x3cspan id\x3d"deleteAlias" class\x3d"glyphicon glyphicon-remove" style\x3d"color: red" data-name\x3d"'+f.escapeExpression((d=null!=(d=c.name||(null!=a?a.name:a))?d:c.helperMissing,"function"===typeof d?d.call(null!=a?a:{},{name:"name",hash:{},data:e}):d))+'" onclick\x3d"deleteAlias(\''+f.escapeExpression((d=null!=(d=c.name||
(null!=a?a.name:a))?d:c.helperMissing,"function"===typeof d?d.call(null!=a?a:{},{name:"name",hash:{},data:e}):d))+"')\"\x3e\x3c/span\x3e\x3c/b\x3e\x3cbr/\x3e"},4:function(f,a,c,g,e){return'\x3cbutton type\x3d"submit" class\x3d"btn btn-small btn-info" onclick\x3d"addAlias()"\x3eAdd Alias\x3c/button\x3e'},6:function(f,a,c,g,e){return'\t\t\x3ctr\x3e\x3ctd colspan\x3d"5"\x3eNo images found\x3c/td\x3e\x3c/tr\x3e\r\n'},useData:!0});h=Handlebars.templates=Handlebars.templates||{};h.image=k;h=Handlebars.partials=
Handlebars.partials||{};h.image=k;k=Handlebars.template({compiler:[7,"\x3e\x3d 4.0.0"],main:function(f,a,c,g,e){var d;return'\x3ch4\x3eList of profiles \x3cbutton type\x3d"submit" class\x3d"btn btn-small btn-info" onclick\x3d"reloadProfiles()"\x3eRefresh\x3c/button\x3e\x3c/h4\x3e\r\n\x3ctable id\x3d"profileTable" class\x3d"table table-striped"\x3e\r\n\t\x3cthead id\x3d"profileTableHeader"\x3e\r\n\t\t\x3ctr\x3e\r\n\t\t\t\x3ctd\x3eType\x3c/td\x3e\r\n\t\t\t\x3ctd\x3eStatus\x3c/td\x3e\r\n\t\t\t\x3ctd\x3eStatusCode\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n\t\x3c/thead\x3e\r\n\t\x3ctbody id\x3d"profileTableData"\x3e\r\n'+
(null!=(d=c.each.call(null!=a?a:{},a,{name:"each",hash:{},fn:f.program(1,e,0),inverse:f.program(3,e,0),data:e}))?d:"")+"\t\x3c/tbody\x3e\r\n\x3c/table\x3e"},1:function(f,a,c,g,e){var d;return'\t\t\x3ctr\x3e\r\n\t\t\t\x3ctd id\x3d"type"\x3e\x3cb\x3e'+f.escapeExpression((d=null!=(d=c.type||(null!=a?a.type:a))?d:c.helperMissing,"function"===typeof d?d.call(null!=a?a:{},{name:"type",hash:{},data:e}):d))+'\x3c/b\x3e\x3c/td\x3e\r\n\t\t\t\x3ctd id\x3d"status"\x3e'+f.escapeExpression((d=null!=(d=c.status||
(null!=a?a.status:a))?d:c.helperMissing,"function"===typeof d?d.call(null!=a?a:{},{name:"status",hash:{},data:e}):d))+'\x3c/td\x3e\r\n\t\t\t\x3ctd id\x3d"statusCode"\x3e'+f.escapeExpression((d=null!=(d=c.statusCode||(null!=a?a.statusCode:a))?d:c.helperMissing,"function"===typeof d?d.call(null!=a?a:{},{name:"statusCode",hash:{},data:e}):d))+"\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n"},3:function(f,a,c,g,e){return'\t\t\x3ctr\x3e\x3ctd colspan\x3d"3"\x3eNo profiles found\x3c/td\x3e\x3c/tr\x3e\r\n'},useData:!0});
h=Handlebars.templates=Handlebars.templates||{};h.profile=k;h=Handlebars.partials=Handlebars.partials||{};h.profile=k;k=Handlebars.template({compiler:[7,"\x3e\x3d 4.0.0"],main:function(f,a,c,g,e){var d;return'\x3ch3\x3eServers\x3c/h3\x3e\r\n\x3cul class\x3d"nav nav-pills"\x3e\r\n'+(null!=(d=c.each.call(null!=a?a:{},a,{name:"each",hash:{},fn:f.program(1,e,0),inverse:f.noop,data:e}))?d:"")+'\x3cli\x3e\x3cbutton type\x3d"button" class\x3d"btn btn-info" data-toggle\x3d"modal" data-target\x3d"#addServer"\x3eAdd Server\x3c/button\x3e\x3c/li\x3e\r\n\x3c/ul\x3e\r\n'},
1:function(f,a,c,g,e){var d,b;return"\x3cli "+(null!=(d=c["if"].call(null!=a?a:{},null!=a?a.active:a,{name:"if",hash:{},fn:f.program(2,e,0),inverse:f.noop,data:e}))?d:"")+'\x3e\r\n\x3ca href\x3d"#" onclick\x3d"selectServer(\''+f.escapeExpression((b=null!=(b=c.name||(null!=a?a.name:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"name",hash:{},data:e}):b))+"')\"\x3e"+f.escapeExpression((b=null!=(b=c.name||(null!=a?a.name:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=
a?a:{},{name:"name",hash:{},data:e}):b))+" "+f.escapeExpression((b=null!=(b=c.remoteHostAndPort||(null!=a?a.remoteHostAndPort:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"remoteHostAndPort",hash:{},data:e}):b))+' \r\n\x3cspan id\x3d"removeServer" class\x3d"glyphicon glyphicon-remove" style\x3d"color: red" data-name\x3d"'+f.escapeExpression((b=null!=(b=c.name||(null!=a?a.name:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"name",hash:{},data:e}):b))+
'" onclick\x3d"removeServer(\''+f.escapeExpression((b=null!=(b=c.name||(null!=a?a.name:a))?b:c.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"name",hash:{},data:e}):b))+"')\"\x3e\x3c/span\x3e\x3c/a\x3e\r\n\x3c/li\x3e\r\n"},2:function(f,a,c,g,e){return'class\x3d"active"'},useData:!0});h=Handlebars.templates=Handlebars.templates||{};h.server=k;h=Handlebars.partials=Handlebars.partials||{};h.server=k})();