const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("welcomome");
});

app.get("/:date", (req, res) => {
  const dateStr = req.params.date;
  
  let errbool = false;
  // Parse the date string into day, month, and year
  const day = parseInt(dateStr.substring(0, 2));
  const month = parseInt(dateStr.substring(2, 4)) - 1;
  const year = parseInt(dateStr.substring(4, 8));


  let  ans = (dateStr.substring(0, 2)) + '-' + (dateStr.substring(2, 4)) + '-' + (dateStr.substring(4, 8));
console.log(ans);
  if (year === 0 || month > 12 || day > 31) {
    errbool = true;
}
  

  const date = new Date(year, month, day);

  if (dateStr.length !== 8 || errbool) {
    res.send("Invalid date format. Please use DDMMYYYY.");
  }
  
    
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });

    // Return the day of the week as a response
    
        res.json({dayOfWeek})
    
    
  
});

app.listen(port, (req, res) => {
  console.log("app is listenig to 3000");
});
