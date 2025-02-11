
const meynellStartDate = new Date("2024-11-20T00:00:00");
const college1StartDate = new Date("2023-09-01T00:00:00");
const college1EndDate = new Date("2024-06-01T00:00:00");
const college2StartDate = new Date("2024-09-01T00:00:00");
// const meynellEndDate = new Date('YYYY-MM-DDT00:00:00')

const currentDate = Date.now();

const meynelltimeDifferenceMS = currentDate - meynellStartDate;
const college1timeDifferenceMS = college1EndDate - college1StartDate;
const college2timeDifferenceMS = currentDate - college2StartDate;
// const timeDifferenceMS = endDate - startDate;

const meynellTimeDifferenceMonths = Math.floor(
  meynelltimeDifferenceMS / 2592000000
);
const meynellTimeDifferenceYears = Math.floor(
  meynelltimeDifferenceMS / 31536000000
);
const meynellTimeDifferenceDecades = Math.floor(
  meynelltimeDifferenceMS / 315360000000
);

const college1TimeDifferenceMonths = Math.floor(
    college1timeDifferenceMS / 2592000000
  );
  const college1TimeDifferenceYears = Math.floor(
    college1timeDifferenceMS / 31536000000
  );
  const college1TimeDifferenceDecades = Math.floor(
    college1timeDifferenceMS / 315360000000
  );

  const college2TimeDifferenceMonths = Math.floor(
    college2timeDifferenceMS / 2592000000
  );
  const college2TimeDifferenceYears = Math.floor(
    college2timeDifferenceMS / 31536000000
  );
  const college2TimeDifferenceDecades = Math.floor(
    college2timeDifferenceMS / 315360000000
  );

const meynellTimeText = document.getElementById("meynellTimeText");
if (meynellTimeDifferenceDecades != 0) {
  if (meynellTimeDifferenceDecades == 1){
    meynellTimeText.innerText = `(${meynellTimeDifferenceDecades} decade.)`;
  } else {
    meynellTimeText.innerText = `(${meynellTimeDifferenceDecades} decades.)`;
  }
} 
else if (meynellTimeDifferenceYears != 0) {
  if (meynellTimeDifferenceYears == 1){
    meynellTimeText.innerText = `(${meynellTimeDifferenceYears} year.)`;
  } 
  else {
    meynellTimeText.innerText = `(${meynellTimeDifferenceYears} years.)`;
  }
} 
else if (meynellTimeDifferenceMonths != 0) {
  if (meynellTimeDifferenceMonths == 1) {
    meynellTimeText.innerText = `(${meynellTimeDifferenceMonths} month.)`;
  } else {
    meynellTimeText.innerText = `(${meynellTimeDifferenceMonths} months.)`;
  }
} 
else {
    meynellTimeText.innerText = `(Less than a month.)`;
}

const college1TimeText = document.getElementById("college1TimeText");
if (college1TimeDifferenceDecades != 0) {
  if (college1TimeDifferenceDecades == 1){
    college1TimeText.innerText = `(${college1TimeDifferenceDecades} decade.)`;
  } else {
    college1TimeText.innerText = `(${college1TimeDifferenceDecades} decades.)`;
  }
} 
else if (college1TimeDifferenceYears != 0) {
  if (college1TimeDifferenceYears == 1){
    college1TimeText.innerText = `(${college1TimeDifferenceYears} year.)`;
  } 
  else {
    college1TimeText.innerText = `(${college1TimeDifferenceYears} years.)`;
  }
} 
else if (college1TimeDifferenceMonths != 0) {
  if (college1TimeDifferenceMonths == 1) {
    college1TimeText.innerText = `(${college1TimeDifferenceMonths} month.)`;
  } else {
    college1TimeText.innerText = `(${college1TimeDifferenceMonths} months.)`;
  }
} 
else {
    college1TimeText.innerText = `(Less than a month.)`;
}

const college2TimeText = document.getElementById("college2TimeText");
if (college2TimeDifferenceDecades != 0) {
  if (college2TimeDifferenceDecades == 1){
    college2TimeText.innerText = `(${college2TimeDifferenceDecades} decade.)`;
  } else {
    college2TimeText.innerText = `(${college2TimeDifferenceDecades} decades.)`;
  }
} 
else if (college2TimeDifferenceYears != 0) {
  if (college2TimeDifferenceYears == 1){
    college2TimeText.innerText = `(${college2TimeDifferenceYears} year.)`;
  } 
  else {
    college2TimeText.innerText = `(${college2TimeDifferenceYears} years.)`;
  }
} 
else if (college2TimeDifferenceMonths != 0) {
  if (college2TimeDifferenceMonths == 1) {
    college2TimeText.innerText = `(${college2TimeDifferenceMonths} month.)`;
  } else {
    college2TimeText.innerText = `(${college2TimeDifferenceMonths} months.)`;
  }
} 
else {
    college2TimeText.innerText = `(Less than a month.)`;
}
