import { React, useState, useEffect } from 'react';
import Header from './Header';
import SelectTimeRange from './SelectTimeRange';
import ProgressButtons from '../shared/ProgressButtons';

const MOCK_DATA_SELECTED_DATES = [
  {
    day: 'Monday',
    date: 'May 3, 2021',
    availableTimes: ['12pm-1pm', '1pm-2pm', '2pm-3pm', '4pm-5pm'],
  },
  {
    day: 'Tuesday',
    date: 'May 4, 2021',
    availableTimes: ['2pm-3pm', '3pm-4pm', '5pm-6pm'],
  },
  {
    day: 'Monday',
    date: 'May 10, 2021',
    availableTimes: ['12pm-1pm', '1pm-2pm', '2pm-3pm', '4pm-5pm'],
  },
];

export default function CalendarSelectedTimes() {
  const [maxSlots, setMaxSlots] = useState(MOCK_DATA_SELECTED_DATES.length * 2);
  const [slots, setSlots] = useState();
  const [disabled, setDisabled] = useState(true);
  const [allSelectedTimes, setAllSelectedTimes] = useState({
    'May 3, 2021': {
      selectedTimes: [],
    },
    'May 4, 2021': {
      selectedTimes: [],
    },
    'May 10, 2021': {
      selectedTimes: [],
    },
  });

  useEffect(() => {
    countSelectedTimeSlots(allSelectedTimes);
    checkSelectedTimeSlots(allSelectedTimes);
  }, [allSelectedTimes]);

  const countSelectedTimeSlots = (selectedTimes) => {
    let totalSlots = 0;
    for (let times in selectedTimes) {
      const currentSelectedDayTimes = selectedTimes[times].selectedTimes;
      totalSlots += currentSelectedDayTimes.length;
    }
    setSlots(totalSlots);
  };

  const checkSelectedTimeSlots = (selectedTimes) => {
    for (let times in selectedTimes) {
      const currentSelectedDayTimes = selectedTimes[times].selectedTimes;
      if (currentSelectedDayTimes.length === 0) {
        return setDisabled(true);
      }
    }
    return setDisabled(false);
  };

  return (
    <div>
      <Header
        title='Schedule with Tracy'
        description='Choose your time availability for the selected days'
        activity='Home Inspection'
        action='Choose up to 2 times per day'
        slots={slots}
        maxSlots={maxSlots}
      />

      {MOCK_DATA_SELECTED_DATES.map((selected, index) => {
        return (
          <SelectTimeRange
            key={index}
            day={selected.day}
            date={selected.date}
            availableTimes={selected.availableTimes}
            setAllSelectedTimes={setAllSelectedTimes}
            allSelectedTimes={allSelectedTimes}
          />
        );
      })}

      <ProgressButtons
        firstBtnText='Go Back'
        secondBtnText='Next'
        disabled={disabled}
      />
    </div>
  );
}
