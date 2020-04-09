
// var selected_month = d3.select('#selMonth').property("value");
// var selected_researcher = d3.select('#selName').property('value');
// // var selected_wk = d3.select('#selWeek').property('value');
// var selected_prod = d3.select('#selProd').property('value');

// function init(){
//     var trace_init = {
//         labels: [],
//         values: [],
//         type: "pie"
//     }

//     Plotly.newPlot("month_pie", [trace_init])
// }
// init()

function monthChanged(){
    var selected_month = d3.select('#selMonth').property('value');
    console.log(selected_month);
    plotrepeatPie()
    plotquanPie()
    plotmultiprodPie()
        }
function plotrepeatPie(){
    var selected_month = d3.select('#selMonth').property('value'); 
    d3.json('data/repeatProdcopy.json').then((data)=>{ 
        
        var prod_name = []
        var prod_percent = []
        
        if (selected_month ==="march") {
            var repeat_pur = d3.select('#rep_pur');
            repeat_pur.html("");
            
            // rep_pur.append("h4").text(data[0].Total/59061*100 +"% of Total Orders");
           repeat_pur.append("h4").text("8.65% of Total Orders")
        
        var repeat_labels = []
        var repeat_percent = []
       
        Object.keys(data).forEach((x) => repeat_labels.push(x))
        Object.values(data).forEach((y)=> repeat_percent.push(y))
        console.log(repeat_labels)
        console.log(repeat_percent)
        
        var trace_repeat= {
            labels: repeat_labels,
            values: repeat_percent,
            type: "pie"
        }
        var layout_repeat= {
            title: "Repeat Purchase"
        }
        Plotly.newPlot('rep_pur_pie', [trace_repeat],layout_repeat)
        
        }})
            }

function plotquanPie(){
    var selected_month = d3.select('#selMonth').property('value'); 
    d3.json('data/multipleQuancopy.json').then((data)=>{ 
        
        var prod_name = []
        var prod_percent = []
        
        if (selected_month ==="march") {
            var multi_quan = d3.select('#multi_quan');
            multi_quan.html("");
            console.log(data[0].Total)
            // rep_pur.append("h4").text(data[0].Total/59061*100 +"% of Total Orders");
            multi_quan.append("h4").text("8.25% of Total Orders")
        
        var multi_quan_labels = []
        var multi_quan_percent = []
        d3.json("data/multipleQuannototal.json").then((quan_data)=>{
            Object.keys(quan_data).forEach((x) => multi_quan_labels.push(x))
            Object.values(quan_data).forEach((y)=> multi_quan_percent.push(y))
            console.log(multi_quan_labels)
            console.log(multi_quan_percent)
      
        var trace_multiquan = {
            labels: multi_quan_labels,
            values: multi_quan_percent,
            type: "pie"
        }
        var layout_multiquan= {
            title: "Multiple Quantity/Order"
        }
        Plotly.newPlot('multi_quan_pie', [trace_multiquan],layout_multiquan)
        })
        }})
    }
function plotmultiprodPie(){
    var selected_month = d3.select('#selMonth').property('value'); 
    d3.json('data/prod_combination.json').then((data)=>{ 
        
        var prod_name = []
        var prod_percent = []
        
        if (selected_month ==="march") {
            var multi_prod = d3.select('#multi_prod');
            multi_prod.html("");
            // console.log(data[0].Total)
            // rep_pur.append("h4").text(data[0].Total/59061*100 +"% of Total Orders");
            multi_prod.append("h4").text("0.86% of Total Orders")
        
            var multi_prod_labels = []
            var multi_prod_percent = []
       
            Object.keys(data).forEach((x) => multi_prod_labels.push(x))
            Object.values(data).forEach((y)=> multi_prod_percent.push(y))
            console.log(multi_prod_labels)
            console.log(multi_prod_percent)
        
        var trace_multiprod = {
            labels: multi_prod_labels,
            values: multi_prod_percent,
            type: "pie",
          
        }
        var layout_multiprod= {
            title: "Multiple Products/Order"
        }
        Plotly.newPlot('multi_prod_perorder_pie', [trace_multiprod],layout_multiprod)
        
        }})
    }
            
//            
            

//             d3.json('marAmber_byprod.json').then((data) =>{
//                 proj_name = data.map(row => row.Product)
//                 proj_hrs = data.map(row =>row.Total);
//                 console.log(proj_name, proj_hrs)
//                 var trace_project = {
//                     labels: proj_name,
//                     values: proj_hrs,
//                     type: "pie",
//                     textinfo:"value"
//                 }
//                 var layout_byproj = {
//                     title: "Monthly Total by Project"
//                 }
//                 Plotly.newPlot('month_pie', [trace_project],layout_byproj)
//                 console.log(proj_name, proj_hrs)

//             });
//             d3.json('marmonthtotalbyweek_combined.json').then((data)=>{
//                 wk_total = data.amber.map(row => row.Total);
//                 console.log(wk_total)
//                 var trace_weekly = {
//                     labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
//                     values: wk_total,
//                     type: "pie",
//                     textinfo: "value"
//                 }
//                 var layout_weekly = {
//                     title: "Monthly Total by Week"
//                 }
//                 Plotly.newPlot("month_bywk_pie", [trace_weekly], layout_weekly)
//             });
//             d3.json('marAmber_byphase.json').then((data)=>{
//                 var xlabels = []
//                 let proj1 = [];
//                 let proj2 = [];
//                 let proj3 = [];
//                 let proj4 = [];
//                 let proj5 = [];
//                 Object.keys(data[0]).forEach((val)=>
//                     xlabels.push(val));
//                     console.log(xlabels);
//                 Object.values(data[0]).forEach((val)=> proj1.push(val));
//                     console.log(proj1);
//                     var trace_proj1 = {
//                         labels: xlabels,
//                         values: proj1,
//                         type: "pie",
//                         textinfo: 'value'
//                     };
//                     var layout_proj1 = {
//                         title: proj_title[0]
//                     };
//                     Plotly.newPlot('proj1_pie', [trace_proj1], layout_proj1);
    
//                 Object.values(data[1]).forEach((val)=> proj2.push(val));

//                     var trace_proj2 = {
//                         labels: xlabels,
//                         values: proj2,
//                         type: "pie",
//                         textinfo: 'value'
//                     }
//                     var layout_proj2 = {
//                         title: proj_title[1]
//                     };
//                     Plotly.newPlot('proj2_pie', [trace_proj2], layout_proj2);

//                 Object.values(data[2]).forEach((val)=> proj3.push(val));
 
//                     var trace_proj3 = {
//                         labels: xlabels,
//                         values: proj3,
//                         type: "pie",
//                         textinfo: 'value'
//                     }
//                     var layout_proj3 = {
//                         title: proj_title[2]
//                     };
//                     Plotly.newPlot('proj3_pie', [trace_proj3],layout_proj3);
//                 Object.values(data[3]).forEach((val)=> proj4.push(val));
//                 var trace_proj4 = {
//                     labels: xlabels,
//                     values: proj4,
//                     type: "pie",
//                     textinfo: 'value'
//                 };
//                 var layout_proj4 = {
//                     title: proj_title[3]
//                 };
//                 Plotly.newPlot('proj4_pie', [trace_proj4], layout_proj4);
//                 Object.values(data[4]).forEach((val)=> proj5.push(val));
//                     var trace_proj5 = {
//                         labels: xlabels,
//                         values: proj5,
//                         type: "pie",
//                         textinfo: 'value'
//                     }
//                 var layout_proj5 = {
//                     title: proj_title[4]
//                 };
//                     Plotly.newPlot('proj5_pie', [trace_proj5], layout_proj5);
//                 });
//             });
//         }
   
//         if ((selected_month ==="march")&& (selected_researcher ==='gwen')) {
//             var selmonth = d3.select('#month_hours');
//             selmonth.html("");
//             selmonth.append("h4").text(data.gwen[4].MonthTotal);
            
//             d3.json('marProjects_combined.json').then((data) =>{
//                 var proj_title = data.gwen
//                 console.log(proj_title[0])
            
//             d3.json('marGwen_byprod.json').then((data) =>{
//                 proj_name = data.map(row => row.Product)
//                 proj_hrs = data.map(row =>row.Total);
//                 console.log(proj_name, proj_hrs)
//                 var trace_project = {
//                     labels: proj_name,
//                     values: proj_hrs,
//                     type: "pie",
//                     textinfo:"value"
//                 }
//                 var layout_byproj = {
//                     title: "Monthly Total by Project"
//                 }
//                 Plotly.newPlot('month_pie', [trace_project], layout_byproj)
//                 console.log(proj_name, proj_hrs)
//             })
//             d3.json('marmonthtotalbyweek_combined.json').then((data)=>{
//                 wk_total = data.gwen.map(row => row.Total);
//                 console.log(wk_total)
//                 var trace_weekly = {
//                     labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
//                     values: wk_total,
//                     type: "pie",
//                     textinfo: "value"
//                 }
//                 var layout_weekly = {
//                     title: "Monthly Total by Week"
//                 }
//                 Plotly.newPlot("month_bywk_pie", [trace_weekly],layout_weekly)
//             })
//             d3.json('marGwen_byphase.json').then((data)=>{
//                 var xlabels = []
//                 let proj1 = [];
//                 let proj2 = [];
//                 let proj3 = [];
//                 let proj4 = [];
//                 let proj5 = [];
//                 Object.keys(data[0]).forEach((val)=>
//                     xlabels.push(val));
//                     console.log(xlabels);
//                 Object.values(data[0]).forEach((val)=> proj1.push(val));
//                     console.log(proj1);
//                     var trace_proj1 = {
//                         labels: xlabels,
//                         values: proj1,
//                         type: "pie",
//                         textinfo: 'value'
//                     };
//                     var layout_proj1 = {
//                         title: proj_title[0]
//                     };
//                     Plotly.newPlot('proj1_pie', [trace_proj1], layout_proj1);
    
//                 Object.values(data[1]).forEach((val)=> proj2.push(val));

//                     var trace_proj2 = {
//                         labels: xlabels,
//                         values: proj2,
//                         type: "pie",
//                         textinfo: 'value'
//                     }
//                     var layout_proj2 = {
//                         title: proj_title[1]
//                     };
//                     Plotly.newPlot('proj2_pie', [trace_proj2], layout_proj2);

//                 Object.values(data[2]).forEach((val)=> proj3.push(val));
 
//                     var trace_proj3 = {
//                         labels: xlabels,
//                         values: proj3,
//                         type: "pie",
//                         textinfo: 'value'
//                     }
//                     var layout_proj3 = {
//                         title: proj_title[2]
//                     };
//                     Plotly.newPlot('proj3_pie', [trace_proj3],layout_proj3);

//                 Object.values(data[3]).forEach((val)=> proj4.push(val));
//                 var trace_proj4 = {
//                     labels: xlabels,
//                     values: proj4,
//                     type: "pie",
//                     textinfo: 'value'
//                 };
//                 var layout_proj4 = {
//                     title: proj_title[3]
//                 };
//                 Plotly.newPlot('proj4_pie', [trace_proj4], layout_proj4);

//                 Object.values(data[4]).forEach((val)=> proj5.push(val));
//                     var trace_proj5 = {
//                         labels: xlabels,
//                         values: proj5,
//                         type: "pie",
//                         textinfo: 'value'
//                     }
//                 var layout_proj5 = {
//                     title: proj_title[4]
//                 };
//                     Plotly.newPlot('proj5_pie', [trace_proj5], layout_proj5);
//                 });
//             });
//     }

//         if ((selected_month ==="march")&& (selected_researcher ==='pitia')) {
//             var selmonth = d3.select('#month_hours');
//             selmonth.html("");
//             selmonth.append("h4").text(data.pitia[4].MonthTotal);
            
//             d3.json('marProjects_combined.json').then((data) =>{
//                 var proj_title = data.pitia
//                 console.log(proj_title[0])
            
//             d3.json('marPitia_byprod.json').then((data) =>{
//                 proj_name = data.map(row => row.Product)
//                 proj_hrs = data.map(row =>row.Total);
//                 console.log(proj_name, proj_hrs);
//                 var trace_project = {
//                     labels: proj_name,
//                     values: proj_hrs,
//                     type: "pie",
//                     textinfo:"value"
//                 }
//                 var layout_byproj = {
//                     title: "Monthly Total by Project"
//                 }
//                 Plotly.newPlot('month_pie', [trace_project], layout_byproj)
//                 console.log(proj_name, proj_hrs)
//             })
//             d3.json('marmonthtotalbyweek_combined.json').then((data)=>{
//                 wk_total = data.pitia.map(row => row.Total);
//                 console.log(wk_total)
//                 var trace_weekly = {
//                     labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
//                     values: wk_total,
//                     type: "pie",
//                     textinfo: "value"
//                 }
//                 var layout_weekly = {
//                     title: "Monthly Total by Week"
//                 }
//                 Plotly.newPlot("month_bywk_pie", [trace_weekly], layout_weekly)
//             });
//             d3.json('marPitia_byphase.json').then((data)=>{
//                 var xlabels = []
//                 let proj1 = [];
//                 let proj2 = [];
//                 let proj3 = [];
//                 // let proj4 = [];
//                 // let proj5 = [];
//                 Object.keys(data[0]).forEach((val)=>
//                     xlabels.push(val));
//                     console.log(xlabels);

//                 Object.values(data[0]).forEach((val)=> proj1.push(val));
//                     console.log(proj1);
//                     var trace_proj1 = {
//                         labels: xlabels,
//                         values: proj1,
//                         type: "pie",
//                         textinfo: 'value'
//                     };
//                     var layout_proj1 = {
//                         title: proj_title[0]
//                     };
//                     Plotly.newPlot('proj1_pie', [trace_proj1], layout_proj1);
    
//                 Object.values(data[1]).forEach((val)=> proj2.push(val));

//                     var trace_proj2 = {
//                         labels: xlabels,
//                         values: proj2,
//                         type: "pie",
//                         textinfo: 'value'
//                     }
//                     var layout_proj2 = {
//                         title: proj_title[1]
//                     };
//                     Plotly.newPlot('proj2_pie', [trace_proj2], layout_proj2);

//                 Object.values(data[2]).forEach((val)=> proj3.push(val));
 
//                     var trace_proj3 = {
//                         labels: xlabels,
//                         values: proj3,
//                         type: "pie",
//                         textinfo: 'value'
//                     }
//                     var layout_proj3 = {
//                         title: proj_title[2]
//                     };
//                     Plotly.newPlot('proj3_pie', [trace_proj3],layout_proj3);
//                     var trace_proj4 = {
//                         labels: [],
//                         values: [],
//                         type: "pie",
//                         textinfo: 'value'
//                     }
//                     var layout_proj4 = {
//                         title: []
//                     };
//                     Plotly.newPlot('proj4_pie', [trace_proj4],layout_proj4);
//                     var trace_proj5 = {
//                         labels: [],
//                         values: [],
//                         type: "pie",
//                         textinfo: 'value'
//                     }
//                     var layout_proj5 = {
//                         title: []
//                     };
//                     Plotly.newPlot('proj5_pie', [trace_proj5],layout_proj5);


//             });
//         });
//     }
// })


// function weekChanged(){
//     // let week_name = nameChanged();
//     var selected_wk = d3.select('#selWeek').property('value');
//     var selected_researcher = d3.select('#selName').property('value');    
    
//     d3.json('mar_byweek_combined.json').then((data)=>{
//         let wklabels = [];
//         Object.keys(data.amber[0]).forEach((val)=> wklabels.push(val));
//         console.log(wklabels);
//         let wk1 = [];
//         let wk2 = [];
//         let wk3 = [];
//         let wk4 = [];

//         if ((selected_wk ==='wk1')&& (selected_researcher ==="amber")){
//             Object.values(data.amber[0]).forEach((val)=> wk1.push(val));
            
//             var trace_wk1 = {
//                 labels: wklabels,
//                 values: wk1,
//                 type: "pie",
//                 textinfo: "value"
//             }
//             var layout_wk1 = {
//                 title: "Week 1 Summary"
//             }
//             Plotly.newPlot('weekly_pie',[trace_wk1], layout_wk1)
//         } 
//         if ((selected_wk==="wk2")&&(selected_researcher ==='amber')){
//             Object.values(data.amber[1]).forEach((val)=> wk2.push(val));
//             var trace_wk2 = {
//                 labels: wklabels,
//                 values: wk2,
//                 type: "pie",
//                 textinfo: "value"
//             }
//             var layout_wk2 = {
//                 title: "Week 2 Summary"
//             }
//             Plotly.newPlot('weekly_pie',[trace_wk2], layout_wk2)
//         }
//         if ((selected_wk==="wk3")&&(selected_researcher ==='amber')){
//             Object.values(data.amber[2]).forEach((val)=> wk3.push(val));
//             var trace_wk3 = {
//                 labels: wklabels,
//                 values: wk3,
//                 type: "pie",
//                 textinfo: "value"
//             }
//             var layout_wk3 = {
//                 title: "Week 3 Summary"
//             }
//             Plotly.newPlot('weekly_pie',[trace_wk3], layout_wk3)
//         }
//         if ((selected_wk==="wk4")&&(selected_researcher ==='amber')){
//             Object.values(data.amber[3]).forEach((val)=> wk4.push(val));
//             var trace_wk4 = {
//                 labels: wklabels,
//                 values: wk4,
//                 type: "pie",
//                 textinfo: "value"
//             }
//             var layout_wk4 = {
//                 title: "Week 4 Summary"
//             }
//             Plotly.newPlot('weekly_pie',[trace_wk4], layout_wk4)
//         }
//         if ((selected_wk ==='wk1')&& (selected_researcher ==="gwen")){
//             Object.values(data.gwen[0]).forEach((val)=> wk1.push(val));
            
//             var trace_wk1 = {
//                 labels: wklabels,
//                 values: wk1,
//                 type: "pie",
//                 textinfo: "value"
//             }
//             var layout_wk1 = {
//                 title: "Week 1 Summary"
//             }
//             Plotly.newPlot('weekly_pie',[trace_wk1], layout_wk1)
//         } 
//         if ((selected_wk==="wk2")&&(selected_researcher ==='gwen')){
//             Object.values(data.gwen[1]).forEach((val)=> wk2.push(val));
//             var trace_wk2 = {
//                 labels: wklabels,
//                 values: wk2,
//                 type: "pie",
//                 textinfo: "value"
//             }
//             var layout_wk2 = {
//                 title: "Week 2 Summary"
//             }
//             Plotly.newPlot('weekly_pie',[trace_wk2], layout_wk2)
//         }
//         if ((selected_wk==="wk3")&&(selected_researcher ==='gwen')){
//             Object.values(data.gwen[2]).forEach((val)=> wk3.push(val));
//             var trace_wk3 = {
//                 labels: wklabels,
//                 values: wk3,
//                 type: "pie",
//                 textinfo: "value"
//             }
//             var layout_wk3 = {
//                 title: "Week 3 Summary"
//             }
//             Plotly.newPlot('weekly_pie',[trace_wk3], layout_wk3)
//             console.log(wk3)
//         }
//         if ((selected_wk==="wk4")&&(selected_researcher ==='gwen')){
//             Object.values(data.gwen[3]).forEach((val)=> wk4.push(val));
//             var trace_wk4 = {
//                 labels: wklabels,
//                 values: wk4,
//                 type: "pie",
//                 textinfo: "value"
//             }
//             var layout_wk4 = {
//                 title: "Week 4 Summary"
               
//             }
//             Plotly.newPlot('weekly_pie',[trace_wk4], layout_wk4)
//             console.log(wk4)
//         }
//         if ((selected_wk ==='wk1')&& (selected_researcher ==="pitia")){
//             Object.values(data.pitia[0]).forEach((val)=> wk1.push(val));
            
//             var trace_wk1 = {
//                 labels: wklabels,
//                 values: wk1,
//                 type: "pie",
//                 textinfo: "value"
//             }
//             var layout_wk1 = {
//                 title: "Week 1 Summary"
//             }
//             Plotly.newPlot('weekly_pie',[trace_wk1], layout_wk1)
//         } 
//         if ((selected_wk==="wk2")&&(selected_researcher ==='pitia')){
//             Object.values(data.pitia[1]).forEach((val)=> wk2.push(val));
//             var trace_wk2 = {
//                 labels: wklabels,
//                 values: wk2,
//                 type: "pie",
//                 textinfo: "value"
//             }
//             var layout_wk2 = {
//                 title: "Week 2 Summary"
//             }
//             Plotly.newPlot('weekly_pie',[trace_wk2], layout_wk2)
//         }
//         if ((selected_wk==="wk3")&&(selected_researcher ==='pitia')){
//             Object.values(data.pitia[2]).forEach((val)=> wk3.push(val));
//             var trace_wk3 = {
//                 labels: wklabels,
//                 values: wk3,
//                 type: "pie",
//                 textinfo: "value"
//             }
//             var layout_wk3 = {
//                 title: "Week 3 Summary"
//             }
//             Plotly.newPlot('weekly_pie',[trace_wk3], layout_wk3)
//         }
//         if ((selected_wk==="wk4")&&(selected_researcher ==='pitia')){
//             Object.values(data.pitia[3]).forEach((val)=> wk4.push(val));
//             var trace_wk4 = {
//                 labels: wklabels,
//                 values: wk4,
//                 type: "pie",
//                 textinfo: "value"
//             }
//             var layout_wk4 = {
//                 title: "Week 4 Summary"
//             }
//             Plotly.newPlot('weekly_pie',[trace_wk4], layout_wk4)
//         }
       
//     })
// }

