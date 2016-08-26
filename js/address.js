var emails = [
{ name: "Peter Pan", to: "peter@pan.de" },
{ name: "Molly", to: "molly@yahoo.com" },
{ name: "Forneria Marconi", to: "live@japan.jp" },
{ name: "Master <em>Sync</em>", to: "205bw@samsung.com" },
{ name: "Dr. <strong>Tech</strong> de Log", to: "g15@logitech.com" },
{ name: "Don Corleone", to: "don@vegas.com" },
{ name: "Mc Chick", to: "info@donalds.org" },
{ name: "Donnie Darko", to: "dd@timeshift.info" },
{ name: "Quake The Net", to: "webmaster@quakenet.org" },
{ name: "Dr. Write", to: "write@writable.com" },
{ name: "GG Bond", to: "Bond@qq.com" },
{ name: "Zhuzhu Xia", to: "zhuzhu@qq.com" }
];

$(function() {
	$('#searchKeyWord').focus().autocomplete(emails);
});
