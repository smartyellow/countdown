'use strict';

const icons = {
  calendar: '<path d="M616 195V93c0-5-2-9-5-12-3-4-7-6-11-6H464V31c0-9-8-17-17-17s-16 8-16 17v44H205V31c0-9-7-17-16-17s-17 8-17 17v44H38c-4 0-8 2-11 6-3 3-5 7-5 12v637c0 5 2 9 5 12 3 4 7 6 11 6h543c4 0 9-2 12-6 3-3 4-7 4-12V567h142c5 0 9-2 12-5 3-4 5-8 5-13v-35c0-6-3-11-7-14a420 420 0 0 1-134-304ZM55 712v-48h510v48Zm510-83-1-1H55V345c28 66 73 122 129 162 56 39 122 60 188 60h193Zm158-97H372c-84-1-165-37-224-102-60-65-93-153-93-244v-75h117v47c0 10 8 18 17 18s16-8 16-18v-47h226v47c0 10 7 18 16 18s17-8 17-18v-47h119v84c0 63 13 124 37 180 24 57 59 107 103 147Zm0 0"/>',
};

module.exports = {

  // Friendly name
  name: 'Countdown',

  // Brief description of this plugin
  purpose: 'Widget that counts down to a given date.',

  // Version of this plugin
  version: '1.0.0',

  // Name of the plugin author
  author: 'Romein van Buren',

  // Name of vendor of this plugin
  vendor: 'Smart Yellow',

  // Array of plugins this plugin depends on
  requires: [],

  icon: icons.calendar,

  extensions: async () => ({
    countDownToDate: async countTo => {
      const today = new Date();
      const days = Math.ceil((countTo.getTime() - today.getTime()) / (1000 * 3600 * 24));
      return days;
    },
  }),

  gui: {
    widgets: () => [
      {
        path: 'countdown.svelte',
        title: 'Countdown',
        purpose: 'Counts down to a certain date.',
        defaults: {
          title: 'Countdown',
          eventTitle: new Date(new Date().getFullYear() + 1, 0, 1).getFullYear(),
          date: new Date(new Date().getFullYear() + 1, 0, 1),
        },
      },
    ],
  },

};
