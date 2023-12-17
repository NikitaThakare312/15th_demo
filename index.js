console.log('person1:shows ticket');
console.log('person2:shows ticket');

const preMovie=async()=>{
    const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    });

    const getPopcorn = new Promise((resolve,reject)=>resolve(`popcorn`));

    const getCandy= new Promise((resolve,reject)=> resolve(`candy`));

    const getCoke = new Promise((resolve,reject)=>resolve(`coke`));


    let ticket=await promiseWifeBringingTicks;

    let [popcorn,candy,coke]=await Promise.all([getPopcorn,getCandy,getCoke])

    console.log(`${popcorn},${candy},${coke}`);

    //const addButter= new Promise((resolve,reject)=>resolve(`butter`));

    //console.log(`wife:i have ${ticket}`);
    //console.log('husband: we should go in');
    //console.log('wife: no i am hungry');
    
    //let popcorn=await getPopcorn;

    //console.log(`husband: i got some ${popcorn}`);
    //console.log('husband: we should go in');
    //console.log('wife: i need butter on my popcorn');

    //let butter = await addButter;
    
    //console.log(`husband: i got some ${butter} on popcorn`);
    //console.log(`husband: anything else darling`);
    //console.log(`wife:lets go we are getting late`);
    //console.log(`husband: thank you for the reminder *grins* `);
    
    return ticket;
    
}

preMovie().then((m)=>console.log(`person3: shows ${m}`));
console.log('person3:shows ticket');
console.log('person4:shows ticket');