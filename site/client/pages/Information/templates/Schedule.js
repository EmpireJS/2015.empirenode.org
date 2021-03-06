Template.Schedule.helpers({
  scheduleItems: function () {
    return [
      {
        when: '10/22',
        ampm: 'Thurs',
        title: 'Pre-party @ UCB Theater',
        who: undefined,
        description: "We'll be kicking off the conference with improv comedy at UCB Chelsea, on Thursday Oct. 22nd. <br> <br> If you've missed the emails haven't registered yet, do so now! Only 90 seats available for this special event! <br> <br> <a href='https://ti.to/empirejs/empirenode-2015/with/ievyuthi83o' target='_new'>Click here to register!</a>  <br>  <br> Click <a href='https://chelsea.ucbtheatre.com/performance/41906'>here</a> for info about the show. <br> <br><span class='info-color'>UCB Theater</span><br> 307 W 26th St,<br> New York, NY 10001",
        info: true,
        hightlightDate: true
      },
      {
        when: '10/23',
        ampm: 'Fri',
        title: 'EmpireNode Conference',
        who: undefined,
        description: "Head on over to the National Museum of the American Indian. <br><br><span class='info-color'>National Museum of the American Indian</span><br>One Bowling Green,<br>New York, NY 10004",
        info: true,
        hightlightDate: true
      },
      {
        when: '8:00',
        ampm: 'AM',
        title: 'Breakfast and Registration',
        who: undefined,
        info: true,
        hightlightDate: true
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
        description: undefined,
        video: 'https://www.youtube.com/embed/J7HeSnxp0R4'
      },
      {
        when: '10:00',
        ampm: 'AM',
        title: 'The Importance of <code>import</code> and <code>export</code>',
        who: 'Ben Newman',
        description: undefined,
        video: 'https://www.youtube.com/embed/-zch_YmKfa0'
      },
      {
        when: '10:35',
        ampm: 'AM',
        title: 'Coffee/Snack Break',
        who: undefined,
        description: undefined,
        info: true,
        hightlightDate: true
      },
      {
        when: '11:05',
        ampm: 'AM',
        title: 'Data Analysis with JavaScript',
        who: 'Nathan Epstein',
        description: undefined,
        video: 'https://www.youtube.com/embed/eoY3IQk-2rk'
      },
      {
        when: '11:30',
        ampm: 'AM',
        title: 'Managing changes to your data with dat',
        who: 'Karissa McKelvey',
        description: undefined,
        video: 'https://www.youtube.com/embed/FSljZcPvFhQ'
      },
      {
        when: '11:55',
        ampm: 'AM',
        title: 'Using Graph Theory to Build a Recommendation Engine in Node.js',
        who: 'Keith Horwood',
        description: undefined,
        video: 'https://www.youtube.com/embed/KthdKB4LqGs'
      },
      {
        when: '12:30',
        ampm: 'PM',
        title: 'Lunch',
        who: undefined,
        description: undefined,
        info: true,
        hightlightDate: true
      },
      {
        when: '2:15',
        ampm: 'PM',
        title: 'Making front-end modules actually work',
        who: 'Lin Clark',
        description: undefined,
        video: 'https://www.youtube.com/embed/m8Y7OV1yig0'
      },
      {
        when: '2:40',
        ampm: 'PM',
        title: 'Rapidly Developing Microservices with Node.js and Docker',
        who: 'William Blankenship',
        description: undefined,
        video: 'https://www.youtube.com/embed/SUNxn0omNi4'
      },
      {
        when: '3:05',
        ampm: 'PM',
        title: 'Building Desktop Applications with Node and Electron',
        who: 'Steve Kinney',
        description: undefined,
        video: 'https://www.youtube.com/embed/rbSvc8_BHaw'
      },
      {
        when: '3:40',
        ampm: 'PM',
        title: 'Snacks/Sanity break',
        who: undefined,
        description: undefined,
        info: true,
        hightlightDate: true
      },
      {
        when: '4:00',
        ampm: 'PM',
        title: 'Thin Client NodeBots and the future of JS in IoT',
        who: 'Kassandra Perch',
        description: undefined,
        video: 'https://www.youtube.com/embed/WmjOrGJIxgo'
      },
      {
        when: '4:25',
        ampm: 'PM',
        title: 'Refactoring the dinosaur',
        who: 'Suz Hinton',
        description: undefined,
        video: 'https://www.youtube.com/embed/AScZPmXlLlI'
      },
      {
        when: '4:50',
        ampm: 'PM',
        title: 'The Social Coding Contract',
        who: 'Justin Searls',
        description: undefined,
        video: 'https://www.youtube.com/embed/PlagRkD4e8s'
      },
      {
        when: '6:00',
        ampm: 'PM',
        title: 'After party @ Bar Hugo Rooftop',
        who: undefined,
        description: "Join us after the conference for an evening of fun and socializing at the beautiful Bar Hugo at Hotel Hugo. Featuring dramatic views of the Hudson River, Freedom Tower and Statue of Liberty, Hotel Hugo’s rooftop duplex bar and lounge sparkles like a bronze lantern atop a soaring, 20-story tower. <br><br><span class='info-color'>Bar Hugo</span><br>525 Greenwich St.,<br>New York, NY 10013.</br></br><a href='http://bit.ly/1W5wdjw'>Click here for directions from the event.</a>",
        info: true,
        hightlightDate: true
      }
    ];
  },
  scheduleItemClass: function () {
    return this.info ? 'info-color' : '';
  },
  hightlightDateClass: function () {
    return this.hightlightDate ? 'info-bg-color' : '';
  }
});
