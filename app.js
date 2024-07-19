$(document).ready(function(){
    const ctx = document.getElementById('dashboard').getContext("2d");

    new Chart(ctx, {
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
        legend: {
            labels: {
                background:"white",
                fontColor: "white",
                fontSize: 18
            }
        },
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


 });

