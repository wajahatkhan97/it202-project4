      
     let tags = [ ];
let create_rows = []; //for the table data

      //data fetching of COVID-19
      fetch("https://pomber.github.io/covid19/timeseries.json")
  .then(response => response.json())
      
  .then(json => {
          data = json;
                for (country_name in data) { 
                        let option = document.createElement("option");              

          option.value = country_name;        
                    
        document.querySelector("#listName").appendChild(option);    
        
        } 

});
        
      
      document.querySelector("#addC")                             
        .addEventListener("click",(e) => {                             
          let countryName = document.querySelector("#country_name").value; 
          //check for name as well if the names are in the list or no
  
          tags.push(countryName);                            
          let option = document.createElement("p");  
          option.innerText = tags;
          document.body.appendChild(option); //append
          
            
      
      });
        
      ///create a chart for this
        
         

  <!-----------------------Generating Table using https://material.io/develop/web/components/data-tables/ website example----  -->  

      
          
              function table_generator(){
                let table_Head = document.createElement("th");
                table_Head.classList.add("mdc-data-table__header-cell", "mdc-data-table__header-cell--numeric");
                let rows = document.createElement("tr");
                rows.classList.add("mdc-data-table__header-row");
                let date = table_Head.cloneNode(true);
                date.textContent = "Date"
                rows.appendChild(date);
                document.querySelector("table thead").appendChild(rows);
    
                let dates = data[tags[0]].map
                (item => 
                {
                    return item["date"]
                })
                
                  create_rows.push(dates);    
                for (let country of tags) 
                {             
                  let header_countries = table_Head.cloneNode(true);   
                  header_countries.textContent = country;           
                rows.appendChild(header_countries);                 
                  
                  let countriesData =  data[country].map
                  (item => {
                      return item["confirmed"];                  
                  });
                  create_rows.push(countriesData);                    
                }
                  
                  <!--- creating rows for data --->
                for (let i=0; i< create_rows[0].length; i++) {      
                  let tbl_rows =  document.createElement("tr");  
                  tbl_rows.classList.add("mdc-data-table__row"); 
                  for (let j=0; j < create_rows.length; j++) {      
                   let body_data = document.createElement("td")       
                   body_data.classList.add("mdc-data-table__cell")    
                   if (j > 0) {                                 
                     body_data.classList.add("mdc-data-table__cell--numeric"); 
                   } 
                   body_data.textContent = create_rows[j][i];             
                   tbl_rows.appendChild(body_data);                   
                  }
                  document.querySelector("table tbody").appendChild(tbl_rows);                      
                }
              } 
      
      
  
  
      <!-------------------------------------generate_chart https://material.io/develop/web/components/data-tables/ website example -->
        

      
      
    function generate_chart() {
        let date = ["Date"];  
        let chart = [];    
        for (let country of tags) {
          date.push(country);  
        }
        chart.push(date); 
    

        for (var i = 0; i < data[tags[0]].length; i++) {
          let row_data = [];         
          row_data.push(data[tags[0]][i]["date"]); 
          for (let country of tags) {
            row_data.push(data[country][i]["confirmed"]);  
          }
          chart.push(row_data);                       
        }

        let options = {
          width: 700,
          height: 500,           
        title: 'Cases Chart',
        curveType: 'none',
        };
        let dataChart = google.visualization.arrayToDataTable(chart);
        
        let chart1 = new google.visualization.LineChart(document.querySelector('#Chart'));

        chart1.draw(dataChart, options);
    }          


      
      <!-------------------BUTTONS AND OPERATIONS -------->
         document.querySelector("#Generate_Table")                             
        .addEventListener("click",(e) => {                             
          table_generator();
            generate_chart();
            
         });
      
    document.querySelector("#Clear")                             
        .addEventListener("click",(e) => {                             
        let table_body = document.querySelector("table tbody");
                let last_child = tbody.lastElementChild;  
                while (last_child ) {  //loop through until null                      
                    table_body.removeChild(last_child );       
                    last_child  = tbody.lastElementChild; 
                }
        //we need one more loop to remove header will do exact same thing except we will be selecting thead instead of tbody
        
                let table_head = document.querySelector("table thead");
                let last_child1 = tbody.lastElementChild;  
                while (last_child1 ) {  //loop through until null                      
                    table_head.removeChild(last_child1);       
                    last_child1  = tbody.lastElementChild; 
                }
            
         });
      
      
         const Show = (cl0, cl1, cl2, cl3) => {
		  document.querySelector(cl0).setAttribute("class", "viewS");
		  document.querySelector(cl1).setAttribute("class", "view");
		  document.querySelector(cl2).setAttribute("class", "view");
		  document.querySelector(cl3).setAttribute("class", "view");
		  return false;
	  }
      
<!-------------------------CHART -----------> 
    
         
         
         
    
      
      