<script>

import { translate } from 'helpers/webdesq/stores.js';

export let language = 'en';

const colours = [
  'aqua',
  'aquamarine',
  'beige',
  'black',
  'blue',
  'blueviolet',
  'brown',
  'chocolate',
  'crimson',
  'darkcyan',
  'darkgreen',
  'darkmagenta',
  'deeppink',
  'firebrick',
  'fuchsia',
  'green',
  'indianred',
  'navy',
  'olive',
  'orange',
  'orangered',
  'peru',
  'red',
  'sienna',
  'slategrey',
  'teal',
  'yellowgreen',
];

const fonts = [
  'Helvetica',
  'Georgia',
  'Verdana',
  'Times New Roman',
  'Lucida Console',
  'Monaco',
  'Lucida Handwriting',
  'Copperplate',
  'Papyrus',
];

export let widget = {};
export const settings = {
  title: {
    type: 'string',
    label: translate('title', language),
  },
  eventTitle: {
    type: 'string',
    label: translate('event title', language),
  },
  date: {
    type: 'date',
    label: translate('date', language),
  },
  colour: {
    type: 'select',
    label: translate('font colour', language),
    options: colours,
  },
  font: {
    type: 'select',
    label: translate('font', language),
    options: fonts,
  },
};

const today = new Date();
$: countTo = new Date(widget.date);
$: days = Math.ceil((countTo.getTime() - today.getTime()) / (1000 * 3600 * 24));
$: eventTitle = widget.eventTitle || countTo.toLocaleDateString();

$: colour = widget.colour || '#000000';
$: font = widget.font || 'Helvetica';

</script>

<div style="font-family: {font}; color: {colour};">
  <ins>{days}</ins>
  <p>
      {#if days === 1}
        {translate('day until <m>', [ eventTitle, language ])}
      {:else}
        {translate('days until <m>', [ eventTitle, language ])}
      {/if}
  </p>
</div>

<style>
  div {
    text-align: center;
    padding-bottom: 20px;
  }
  ins {
    font-size: 3rem;
		font-weight: 700;
		width: 150px;
		height: 150px;
		margin: 0;
		padding-top: 70px;
		vertical-align: middle;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center center;
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="890 372 1097 1097"%3E%3Cdefs%3E%3ClinearGradient id="a" x1="1510.5" x2="1510.5" y1="1288" y2="483" gradientUnits="userSpaceOnUse"%3E%3Cstop offset="0" stop-color="%23dc2b20"/%3E%3Cstop offset="1" stop-color="%23dc5262"/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill="url(%23a)" d="M1034 1288h953V483h-953Z"/%3E%3Cdefs%3E%3ClinearGradient id="b" x1="1947.667" x2="1193.303" y1="451.512" y2="1168.821" gradientUnits="userSpaceOnUse"%3E%3Cstop offset="0" stop-color="%23fff"/%3E%3Cstop offset="1" stop-color="%23e7e7e7"/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill="url(%23b)" d="M1073 1250h877V445h-877Z"/%3E%3Cpath fill="%23fff" d="M1267.261 575c0-14.912-12.147-27-27.131-27-14.983 0-27.13 12.088-27.13 27s12.147 27 27.13 27c14.984 0 27.131-12.088 27.131-27ZM1810.261 575c0-14.912-12.147-27-27.131-27-14.983 0-27.13 12.088-27.13 27s12.147 27 27.13 27c14.984 0 27.131-12.088 27.131-27Z"/%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient id="c" x1="1971.624" x2="1075.234" y1="624.786" y2="1154.016" gradientUnits="userSpaceOnUse"%3E%3Cstop offset="0" stop-color="%23fff"/%3E%3Cstop offset="1" stop-color="%23e7e7e7"/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill="url(%23c)" d="m939.754 1206.052 854.522 197.281 181.086-784.367-854.523-197.282Z"/%3E%3Cpath fill="%23fff" d="M1280.878 592.051c3.354-14.53-5.762-29.041-20.362-32.411-14.6-3.371-29.154 5.675-32.509 20.205-3.354 14.529 5.762 29.04 20.362 32.411 14.599 3.37 29.154-5.676 32.509-20.205ZM1809.96 714.199c3.355-14.529-5.761-29.04-20.361-32.411-14.6-3.37-29.154 5.676-32.509 20.205-3.354 14.53 5.762 29.041 20.362 32.411 14.599 3.371 29.154-5.675 32.508-20.205Z"/%3E%3C/g%3E%3C/svg%3E');
		margin-left: auto;
		margin-right: auto;
		display: inline-block;
    text-decoration: none;
    font-style: normal;
  }
  p {
    font-style: italic;
    margin: 0;
    line-height: 0;
  }
</style>
