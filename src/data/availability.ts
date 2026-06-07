// How many weeks ahead visitors can book
export const BOOKING_WINDOW_WEEKS = 4

// Your time zone — slots will be defined in THIS zone
export const HOST_TIMEZONE = 'America/Denver'

// Which days of the week you're available, and what start times (24h format)
// Empty array = that day is off
export const weeklySchedule: Record<string, string[]> = {
  monday:    ['09:00', '09:15', '10:30', '10:45', '11:00', '14:15', '14:30'],
  tuesday:    ['08:30', '08:45', '09:00', '09:15', '10:30', '10:45', '11:00', '14:15', '14:30'],
  wednesday: ['09:00', '09:15', '10:30', '10:45', '11:00', '14:15', '14:30'],
  thursday:  ['09:00', '09:15', '10:30', '10:45', '11:00', '14:15', '14:30'],
  friday:    ['08:30', '8:45', '09:00', '09:15', '10:30', '10:45', '11:00', '14:15', '14:30'],
  saturday: ['14:00', '14:15', '14:30', '14:45', '15:00', '15:15', '15:30', '15:45', '16:00', '16:15', '16:30', '16:45'],
  sunday:    [],
}

// Specific dates you want fully blocked (YYYY-MM-DD)
export const blockedDates: string[] = [
]