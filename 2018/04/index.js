class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    let [shifts, sleeps] = this.getShiftsAndSleeps();
    let laziest = this.getSleepiestAgent(sleeps);
    let laziestSleeps = sleeps.filter((sleep) => sleep.guard == laziest);
    let sleepiestMinute = this.getSleepiestMinute(laziestSleeps);
    return laziest * sleepiestMinute
  }

  getSleepiestMinute(sleeps) {
    let sleepMinutes = {};
    sleeps.forEach((sleep) => {
      if (sleep.startDay === sleep.endDay) {
        for (let i = sleep.startMinute; i <= sleep.endMinute; i++) {
          sleepMinutes[i] = sleepMinutes[i] + 1 || 1;
        }
      } else {
        for (let i = sleep.startMinute; i < 1440; i++) {
          sleepMinutes[i] = sleepMinutes[i] + 1 || 1;
        }
        for (let i = 0; i <= sleep.endMinute; i++) {
          sleepMinutes[i] = sleepMinutes[i] + 1 || 1;
        }
      }
    });
    return Object.keys(sleepMinutes).sort(
      (minuteA, minuteB) => sleepMinutes[minuteB] - sleepMinutes[minuteA]
    )[0];
  }

  getSleepiestAgent(sleeps) {
    const agentSleep = {};
    for (let sleep of sleeps) {
      if (agentSleep[sleep.guard]) {
        agentSleep[sleep.guard] += this.calculateLengthOfaction(sleep);
      } else {
        agentSleep[sleep.guard] = this.calculateLengthOfaction(sleep);
      }
    }
    return Object.keys(agentSleep).sort(
      (agentA, agentB) => agentSleep[agentB] - agentSleep[agentA]
    )[0];
  }

  // I made a dict of shifts because I haven't carefully read part 1, hope it will be useful in part 2
  getShiftsAndSleeps() {
    const shifts = [];
    const sleeps = [];
    let curShift = {};
    let curSleep = {};
    let curGuard = "";
    for (let line of this.infos) {
      if (line.action.includes("Guard")) {
        curShift = this.getEndOfAction(curShift, line);
        shifts.push(curShift);
        curGuard = Number(line.action.split(" ")[1].substring(1));
        curShift = {
          guard: curGuard,
          startMinute: line.minute,
          startDay: line.day,
        };
      } else if (line.action === "falls asleep") {
        curShift = this.getEndOfAction(curShift, line);
        curSleep = {
          guard: curGuard,
          startMinute: line.minute,
          startDay: line.day,
        };
        shifts.push(curShift);
      } else if (line.action === "wakes up") {
        curSleep = this.getEndOfAction(curSleep, line);
        sleeps.push(curSleep);
        curShift = {
          guard: curGuard,
          startMinute: line.minute,
          startDay: line.day,
        };
      } else {
        throw new Error("Did not recognise action : " + line.action);
      }
    }
    shifts.shift();
    return [shifts, sleeps];
  }

  getEndOfAction(action, line) {
    if (line.minute === 0) {
      action.endMinute = 1439;
      action.endDay = line.day - 1;
    } else {
      action.endMinute = line.minute - 1;
      action.endDay = line.day;
    }
    return action;
  }

  calculateLengthOfaction(action) {
    if (action.startDay === action.endDay) {
      return action.endMinute - action.startMinute + 1;
    } else {
      let actionLength = 1;
      while (action.startDay + 1 !== action.endDay) {
        actionLength += 1440;
      }
      actionLength += 1440 - startMinute;
      actionLength += endMinute;
      return actionLength;
    }
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    const parsedData = [];
    for (let data of raw_data) {
      const [date, action] = data.split("] ");
      let [day, minute] = date.split(" ");
      day = Number(day.substring(1).split("-").join(""));
      let [hours, minutes] = minute.split(":");
      minute = Number(hours) * 60 + Number(minutes);
      parsedData.push({
        day,
        minute,
        action,
      });
    }
    const sortedData = parsedData.sort((a, b) =>
      a.day !== b.day ? a.day - b.day : a.minute - b.minute
    );
    return sortedData;
  }
}

module.exports = AdventOfCode;
