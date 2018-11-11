/*
Find the year when there were most amount of people alive..
Input => list of people with their birth year and death year.
*/

/* Brute force implementation */
const getMostAliveYearBF = people => {
  // get min and max birth and death years
  let minYear = null;
  let maxYear = null;
  people.forEach (p => {
    if (minYear === null || p.born < minYear) {
      minYear = p.born;
    }

    if (maxYear === null || p.died > maxYear) {
      maxYear = p.died;
    }
  });

  // count people alive between min and max years
  let yearsCount = [];
  for (let i = minYear; i <= maxYear; i++) {
    for (let j = 0; j < people.length; j++) {
      if (people[j].born <= i && people[j].died >= i) {
        if (yearsCount[i]) {
          yearsCount[i]++;
        } else {
          yearsCount[i] = 1;
        }
      }
    }
  }

  // get the year with lergest count
  let largestYear = null;
  let lastCount = null;
  yearsCount.forEach ((count, year) => {
    if (lastCount === null || lastCount < count) {
      largestYear = year;
      lastCount = count;
    }
  });

  return {[largestYear]: lastCount};
};

/* More optimal implementation */
const getMostAliveYearOptimal = people => {
  // get all birth years
  let highestYear = null;
  let highestPopulation = null;
  people.forEach (years => {
    let year = years.born;
    let population = 0;

    people.forEach (p => {
      if (p.born <= year && p.died >= year) {
        population++;
      }

      if (p.died <= year) {
        population--;
      }
    });

    if (population > highestPopulation) {
      highestYear = year;
      highestPopulation = population;
    }
  });

  return {[highestYear]: highestPopulation};
};

const people = [
  {
    born: 2000,
    died: 2010,
  },
  {
    born: 1975,
    died: 2005,
  },
  {
    born: 1975,
    died: 2003,
  },
  {
    born: 1803,
    died: 1809,
  },
  {
    born: 1750,
    died: 1869,
  },
  {
    born: 1840,
    died: 1935,
  },
  {
    born: 1803,
    died: 1921,
  },
  {
    born: 1894,
    died: 1921,
  },
];

console.log (getMostAliveYearOptimal (people));
