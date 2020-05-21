function findMaxElementofArray(array) {
    return Math.max(...array);
  }

  function findMinElementofArray(array) {
    return Math.min(...array);
  }

  

  function calculateOptimalCost(PeopleArray) {
    let villagePeopleArray = [...PeopleArray];
    let templePeopleArray = [];
    let cost = 0;

    while (villagePeopleArray.length !== 0) {
      let max = findMaxElementofArray(villagePeopleArray);
      let min = findMinElementofArray(villagePeopleArray);

      if (villagePeopleArray.length === 2) {
        cost = cost + max;
        templePeopleArray.push(max);
        templePeopleArray.push(min);

        villagePeopleArray.splice(villagePeopleArray.indexOf(max), 1);
      villagePeopleArray.splice(villagePeopleArray.indexOf(min), 1);

        break;
      }

      templePeopleArray.push(max);
      templePeopleArray.push(min);
      cost = cost + max;

      villagePeopleArray.splice(villagePeopleArray.indexOf(max), 1);
      villagePeopleArray.splice(villagePeopleArray.indexOf(min), 1);

      templePeopleArray.splice(templePeopleArray.indexOf(min), 1);
      cost = cost + min;

      villagePeopleArray.push(min);
    }

    console.log("Input given " + PeopleArray);
    console.log("Output");
    console.log("--------------------------------------------------------")
    console.log('People reached the temple : ' + templePeopleArray);
    console.log('People remaining at village : ' + villagePeopleArray);
    console.log('Optimal cost : ' + cost);
    console.log("------------------------------------------------------");
    console.log("------------------------------------------------------");
  }

  calculateOptimalCost([500, 123, 873]);  
  calculateOptimalCost([600 ,800, 150, 700]);
  calculateOptimalCost([1321 ,2450
  ]);