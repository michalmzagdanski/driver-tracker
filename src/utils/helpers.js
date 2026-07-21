function calculateHoursWorked(hoursFrom, hoursTo) {
    if (!hoursFrom || !hoursTo) {
        return 0;
    }



    const startParts = hoursFrom.split(":");
    const endParts = hoursTo.split(":");
    const startHours = Number(startParts[0]);
    const startMinutes = Number(startParts[1]);

    const endHours = Number(endParts[0]);
    const endMinutes = Number(endParts[1]);
    const startMinutesFromMidnight =
        startHours * 60 + startMinutes;
    const endMinutesFromMidnight =
        endHours * 60 + endMinutes;
    const totalWorkedMinutes =
        endMinutesFromMidnight - startMinutesFromMidnight;
    const hoursWorked = totalWorkedMinutes / 60;
    return hoursWorked;
}

function filterItemsByWeek(items, referenceDate) {
    const today = referenceDate;
    const daysFromMonday = today.getDay() === 0 ? 6 : today.getDay() - 1;
    const monday = new Date(today)
    monday.setDate(today.getDate() - daysFromMonday)
    monday.setHours(0, 0, 0, 0)
    const sunday = new Date(monday)
    sunday.setDate(monday.getDate() + 6)
    sunday.setHours(23, 59, 59, 999)
    return items.filter((item) =>{
        const itemDate = new Date(item.date)
        return itemDate>= monday && itemDate<= sunday
    })
}

function getFilteredSessions(sessions, filterMode, filterDate) {
    if (filterMode === "all")
      return sessions;
    if (filterMode === "day") {
      if (filterDate === "") {
        return sessions
      }
      return sessions.filter((session) => session.date === filterDate
      )
    }
    if (filterMode === "week") {
      if (filterDate === "") {
        return sessions
      }

      return filterItemsByWeek(sessions, new Date(filterDate))
    }
    return sessions
  }

export { calculateHoursWorked, filterItemsByWeek, getFilteredSessions }