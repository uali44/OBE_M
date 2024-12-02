/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Amazing-Fusion\'">' + entity + '</span>' + html;
	}
	var icons = {
		'app-icon-IconSet-2-01': '&#xe900;',
		'app-icon-IconSet-2-02': '&#xe901;',
		'app-icon-IconSet-2-03': '&#xe902;',
		'app-icon-IconSet-2-04': '&#xe903;',
		'app-icon-IconSet-2-05': '&#xe904;',
		'app-icon-IconSet-2-06': '&#xe905;',
		'app-icon-IconSet-2-07': '&#xe906;',
		'app-icon-IconSet-2-08': '&#xe907;',
		'app-icon-IconSet-2-09': '&#xe908;',
		'app-icon-IconSet-2-10': '&#xe909;',
		'app-icon-IconSet-2-11': '&#xe90a;',
		'app-icon-IconSet-2-12': '&#xe90b;',
		'app-icon-IconSet-1-01': '&#xe90c;',
		'app-icon-IconSet-1-02': '&#xe90d;',
		'app-icon-IconSet-1-03': '&#xe90e;',
		'app-icon-IconSet-1-04': '&#xe90f;',
		'app-icon-IconSet-1-05': '&#xe910;',
		'app-icon-IconSet-1-06': '&#xe911;',
		'app-icon-IconSet-1-07': '&#xe912;',
		'app-icon-IconSet-1-08': '&#xe913;',
		'app-icon-IconSet-1-09': '&#xe914;',
		'app-icon-IconSet-1-10': '&#xe915;',
		'app-icon-IconSet-1-11': '&#xe916;',
		'app-icon-IconSet-1-12': '&#xe917;',
		'app-icon-IconSet-1-13': '&#xe918;',
		'app-icon-IconSet-1-14': '&#xe919;',
		'app-icon-IconSet-1-15': '&#xe91a;',
		'app-icon-IconSet-1-16': '&#xe91b;',
		'app-icon-IconSet-1-17': '&#xe91c;',
		'app-icon-IconSet-1-18': '&#xe91d;',
		'app-icon-IconSet-1-19': '&#xe91e;',
		'app-icon-IconSet-1-20': '&#xe91f;',
		'app-icon-IconSet-1-21': '&#xe920;',
		'app-icon-IconSet-1-22': '&#xe921;',
		'app-icon-IconSet-1-23': '&#xe922;',
		'app-icon-IconSet-1-24': '&#xe923;',
		'app-icon-IconSet-1-25': '&#xe924;',
		'app-icon-IconSet-1-26': '&#xe925;',
		'app-icon-IconSet-1-27': '&#xe926;',
		'app-icon-IconSet-1-28': '&#xe927;',
		'app-icon-IconSet-1-29': '&#xe928;',
		'app-icon-IconSet-1-30': '&#xe931;',
		'app-icon-IconSet-1-31': '&#xe932;',
		'app-icon-IconSet-1-32': '&#xe933;',
		'app-icon-IconSet-1-33': '&#xe934;',
		'app-icon-IconSet-1-34': '&#xe935;',
		'app-icon-IconSet-1-35': '&#xe936;',
		'app-icon-IconSet-1-36': '&#xe937;',
		'app-icon-IconSet-1-37': '&#xe938;',
		'app-icon-IconSet-1-38': '&#xe939;',
		'app-icon-IconSet-1-39': '&#xe93a;',
		'app-icon-IconSet-1-40': '&#xe93b;',
		'app-icon-IconSet-1-41': '&#xe93c;',
		'app-icon-IconSet-1-42': '&#xe93d;',
		'app-icon-IconSet-1-43': '&#xe93e;',
		'app-icon-IconSet-1-44': '&#xe93f;',
		'app-icon-IconSet-1-45': '&#xe940;',
		'app-icon-IconSet-1-46': '&#xe941;',
		'app-icon-IconSet-1-47': '&#xe942;',
		'app-icon-IconSet-1-48': '&#xe943;',
		'app-icon-IconSet-1-49': '&#xe944;',
		'app-icon-IconSet-1-50': '&#xe945;',
		'app-icon-IconSet-1-51': '&#xe946;',
		'app-icon-IconSet-1-52': '&#xe947;',
		'app-icon-IconSet-1-53': '&#xe948;',
		'app-icon-IconSet-1-54': '&#xe949;',
		'app-icon-IconSet-1-55': '&#xe94a;',
		'app-icon-IconSet-1-56': '&#xe94b;',
		'app-icon-IconSet-1-57': '&#xe94c;',
		'app-icon-IconSet-1-58': '&#xe94d;',
		'app-icon-IconSet-1-59': '&#xe94e;',
		'app-icon-IconSet-1-60': '&#xe94f;',
		'app-icon-IconSet-1-61': '&#xe950;',
		'app-icon-IconSet-1-62': '&#xe951;',
		'app-icon-IconSet-1-63': '&#xe952;',
		'app-icon-IconSet-1-64': '&#xe953;',
		'app-icon-IconSet-1-65': '&#xe954;',
		'app-icon-IconSet-1-66': '&#xe955;',
		'app-icon-IconSet-1-67': '&#xe956;',
		'app-icon-IconSet-1-68': '&#xe957;',
		'app-icon-IconSet-1-69': '&#xe958;',
		'app-icon-IconSet-1-70': '&#xe959;',
		'app-icon-IconSet-1-71': '&#xe95a;',
		'app-icon-IconSet-1-72': '&#xe95b;',
		'app-icon-IconSet-1-73': '&#xe95c;',
		'app-icon-IconSet-1-74': '&#xe95d;',
		'app-icon-IconSet-1-75': '&#xe95e;',
		'app-icon-IconSet-1-76': '&#xe95f;',
		'app-icon-IconSet-1-77': '&#xe960;',
		'app-icon-IconSet-1-78': '&#xe961;',
		'app-icon-IconSet-1-79': '&#xe962;',
		'app-icon-IconSet-1-80': '&#xe963;',
		'app-icon-IconSet-1-81': '&#xe964;',
		'app-icon-IconSet-1-82': '&#xe965;',
		'app-icon-IconSet-1-83': '&#xe966;',
		'app-icon-IconSet-1-84': '&#xe967;',
		'app-icon-IconSet-1-85': '&#xe968;',
		'app-icon-IconSet-1-86': '&#xe969;',
		'app-icon-IconSet-1-87': '&#xe96a;',
		'app-icon-IconSet-1-88': '&#xe96b;',
		'app-icon-IconSet-1-89': '&#xe96c;',
		'app-icon-IconSet-1-90': '&#xe96d;',
		'app-icon-IconSet-1-91': '&#xe96e;',
		'app-icon-IconSet-1-92': '&#xe96f;',
		'app-icon-IconSet-1-93': '&#xe970;',
		'app-icon-IconSet-1-94': '&#xe971;',
		'app-icon-IconSet-1-95': '&#xe972;',
		'app-icon-IconSet-1-96': '&#xe973;',
		'app-icon-IconSet-1-97': '&#xe974;',
		'app-icon-IconSet-1-98': '&#xe975;',
		'app-icon-IconSet-1-99': '&#xe976;',
		'app-icon-IconSet-1-100': '&#xe977;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/app-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
