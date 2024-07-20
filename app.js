$(document).ready(function(){
    const ctx = document.getElementById('dashboard').getContext("2d");
    

   var chartdash= new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Republic', 'Democrat', 'Liberal', 'Green', 'Independent', 'Others'],
        datasets: [
            {
                label: '%avg',
                backgroundColor:'white',
                data: [44.33,18.33,10,11.67,12.33,3.33],
                type:'line',
                borderWidth: 2,
                borderColor:'white'
              },    
            
        {
          label: '2020',
          backgroundColor:['#E74C3C','#3498DB','#F7DC6F','#58D68D','#BB8FCE','#BFC9CA'],
          data: [32, 18, 10, 15, 19,6 ],
          borderWidth: 1
        },
        {
            label: '2024',
            backgroundColor:['#E74C3C','#3498DB','#F7DC6F','#58D68D','#BB8FCE','#BFC9CA'],
            data: [29, 27, 12, 15, 16, 1],
            borderWidth: 1
          }
        ,
        {
            label: '2028',
            backgroundColor:['#E74C3C','#3498DB','#F7DC6F','#58D68D','#BB8FCE','#BFC9CA'],
            data: [72, 10, 8, 5, 2, 3],
            borderWidth: 1
          }
          

    
    
    ]
      },
      options: {
        plugins: {
            legend: {
                display: false
            },
        }
        ,
        scales: {
            y: {  // not 'yAxes: [{' anymore (not an array anymore)
                ticks: {
                  color: "white", // not 'fontColor:' anymore
                  // fontSize: 18,
                  font: {
                    size: 18, // 'size' now within object 'font {}'
                  },
                  stepSize: 1,
                  beginAtZero: true
                }
              },
              x: {  // not 'xAxes: [{' anymore (not an array anymore)
                ticks: {
                  color: "white",  // not 'fontColor:' anymore
                  //fontSize: 14,
                  font: {
                    size: 14 // 'size' now within object 'font {}'
                  },
                  stepSize: 1,
                  beginAtZero: true
                }
            }
        }
    }
    });

    const ctxMet1 = document.getElementById('met1').getContext("2d");

   var tilechart=new Chart(ctxMet1,{
        type:'doughnut',
        data:{
            labels:['White','Black','Hispanic','Indian','Asian','Others'],
            datasets:[{
                label: 'Ethnicity%',
                data: [35, 27, 10,8,5,15],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)',
                  'rgb(28, 228, 217)',
                  'rgba(247, 111, 10, 0.8)',
                  'rgba(234, 3, 246, 0.8)'
                ]
                
            }]
            
        },
        options:{
            plugins: {
                legend: {
                    display: false
                },
            }
        }
    })


 });

