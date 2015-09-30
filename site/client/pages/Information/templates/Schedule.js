Template.Schedule.helpers({
  scheduleItems: function () {
    return [
      {
        when: '8:00',
        ampm: 'AM',
        title: 'Breakfast is served',
        who: undefined,
        description: undefined,
        info: true
      },
      {
        when: '9:15',
        ampm: 'AM',
        title: 'Opening ceremonies',
        who: 'Zahra Jabini',
        description: undefined
      },
      {
        when: '9:35',
        ampm: 'AM',
        title: 'Keynote',
        who: 'Rod Vagg',
        description: undefined
      },
      {
        when: '10:00',
        ampm: 'AM',
        title: 'The Importance of <code>import</code> and <code>export</code>',
        who: 'Ben Newman',
        description: undefined
      },
      {
        when: '10:35',
        ampm: 'AM',
        title: 'Coffee/Snack Break',
        who: undefined,
        description: undefined,
        info: true
      },
      {
        when: '11:05',
        ampm: 'AM',
        title: 'Data Analysis with JavaScript',
        who: 'Nathan Epstein',
        description: undefined
      },
      {
        when: '11:30',
        ampm: 'AM',
        title: 'Managing changes to your data with dat',
        who: 'Karissa McKelvey',
        description: undefined
      },
      {
        when: '11:55',
        ampm: 'AM',
        title: 'Using Graph Theory to Build a Recommendation Engine in Node.js',
        who: 'Keith Horwood',
        description: undefined
      },
      {
        when: '12:30',
        ampm: 'PM',
        title: 'Lunch',
        who: undefined,
        description: undefined,
        info: true
      },
      {
        when: '2:15',
        ampm: 'PM',
        title: 'Making front-end modules actually work',
        who: 'Lin Clark',
        description: undefined
      },
      {
        when: '2:40',
        ampm: 'PM',
        title: 'Rapidly Developing Microservices with Node.js and Docker',
        who: 'William Blankenship',
        description: undefined
      },
      {
        when: '3:05',
        ampm: 'PM',
        title: 'Building Desktop Applications with Node and Electron',
        who: 'Steve Kinney',
        description: undefined
      },
      {
        when: '3:40',
        ampm: 'PM',
        title: 'Snacks/Sanity break',
        who: undefined,
        description: undefined,
        info: true
      },
      {
        when: '4:00',
        ampm: 'PM',
        title: 'Thin Client NodeBots and the future of JS in IoT',
        who: 'Kassandra Perch',
        description: undefined
      },
      {
        when: '4:25',
        ampm: 'PM',
        title: 'Refactoring the dinosaur',
        who: 'Suz Hinton',
        description: undefined
      },
      {
        when: '4:50',
        ampm: 'PM',
        title: 'The Social Coding Contract',
        who: 'Justin Searls',
        description: undefined
      }
    ];
  },
  scheduleItemClass: function() {
    return this.info ? 'info-color' : '';
  }
});
