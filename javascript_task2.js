let data = [{principal: 2500, time: 1.8}, 
            {principal:1000, time:5},
            {principal: 3000, time: 1}, 
            {principal: 2000, time: 3}
           ];

function interestCalculator (data) {
  
    let interestData = []
  
  for (let i of data){
    let rate= 0;
    
if ( (i.principal>=2500) &&(i.time>1 && i.time<3)) {
  rate = 3
}

else if ((i.principal>=2500) &&(i.time >= 3) ) {
  rate = 4
}

else if ((i.principal<2500) || (i.time <= 1)) {
  rate = 2
}

else rate = 1
    
  
  let interest = (i.principal * rate * i.time) / 100;
    
    
    

interestData.push( {principal:i.principal, rate: rate, time:i.time, interest: interest} );
    
 }
  
  console.log (interestData)
  
  }

interestCalculator (data)
