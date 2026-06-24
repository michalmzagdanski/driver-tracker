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
export { calculateHoursWorked }