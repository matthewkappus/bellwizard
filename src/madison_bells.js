 const regular_schedule = {
     title: "Regular Schedule",
     bells: [{
             name: "First Bell",
             time: "8:05"
         },
         {
             name: "Morning Announcments",
             time: "8:10"
         },
         {
             name: "1st Period",
             time: "8:14"
         },
         {
             name: "End of 1st Period",
             time: "8:14"
         },
         {
             name: "2nd Period",
             time: "9:12"
         },
         {
             name: "End of 2nd Period",
             time: "10:06"
         },
         {
             name: "3rd Period",
             time: "10:10"
         },
         {
             name: "End of 3rd Period",
             time: "11:04"
         },
         {
             name: "4th Period",
             time: "11:08"
         },
         {
             name: "End of 4th Period",
             time: "12:06"
         },
         {
             name: "5th Period",
             time: "12:10"
         },
         {
             name: "End of 5th Period",
             time: "12:10"
         },
         {
             name: "6th Period",
             time: "13:12"
         },
         {
             name: "End of 6th Period",
             time: "14:06"
         },
         {
             name: "7th Period",
             time: "14:10"
         },
         {
             name: "Final Bell",
             time: "15:05"
         }
     ]
 };

 export function getRegularSchuedule() {
     var d = new Date();
     var b = [];
     regular_schedule.bells.forEach(s => {
         var hm = s.time.split(":")
         d.setHours(hm[0]);
         d.setMinutes(hm[1]);
         b.push({
             name: s.name,
             time: d
         })
     })
     return {
         title: "Regular Schedule",
         bells: b
     }
 }