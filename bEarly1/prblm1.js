//PROBLEM 1: MEDICINE STOCK ALERT SYSTEM

let medicines = [
    {name:"Paracetamol" , expiry: "2026-02-01", stock: 20, min: 30},
    {name: "Amoxicillin", expiry: "2026-01-15", stock: 50, min: 20}
];

function medicineAlert(medicines){
    let alerts = [];
    let today = new Date(); 

   
    for(let i=0; i<medicines.length; i++){
        let med = medicines[i];
        let expiryDate = new Date(med.expiry); 


        let daysLeft = (expiryDate - today) / (1000 * 60 * 60 * 24);


        if(med.stock < med.min){
            alerts.push({
                name : med.name,
                reason: "Low Stock"
            });
        }

 
        else if(daysLeft <= 30){
            alerts.push({
                name: med.name,
                reason: "Expiring Soon"
            });

        }

    }
    return alerts;
}
console.log(medicineAlert(medicines));