class Meetup {

  static WEEKDAYS = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday'
  }

  constructor(year, month) {
    this.month = month;
    this.year = year;
  }

  day(weekday, schedule) {
    let matchingWeekdays = this.#weekdayInMonth(weekday);
    schedule = schedule.toLowerCase();

    switch (schedule) {
      case 'first':
        return matchingWeekdays[0];
      case 'second':
        return matchingWeekdays[1];
      case 'third':
        return matchingWeekdays[2];
      case 'fourth':
        return matchingWeekdays[3];
      case 'fifth':
        return matchingWeekdays[4] ?? null;
      case 'last':
        return matchingWeekdays.pop();
      case 'teenth':
        return matchingWeekdays.filter(day => {
          return day.getDate() >= 13 && day.getDate() <= 19;
        })[0];
    }
  }


  #weekdayInMonth(weekday) {
    let weekdays = [];

    for (let index = 1; ; index++) {
      let day = new Date(this.year, this.month - 1, index);

      if (day.getMonth() !== this.month - 1) {
        break;
      }

      if (weekday.toLowerCase() === Meetup.WEEKDAYS[day.getDay()]) {
        weekdays.push(day);
      }
    }
    return weekdays;
  }
}

module.exports = Meetup;