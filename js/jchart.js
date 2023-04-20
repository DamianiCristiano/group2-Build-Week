const ctx = document.getElementById('customCanvasBackgroundColor');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      
      datasets: [{
        label: '# of Votes',
        data: [],
        borderWidth: 1
      }]
    },
    
  }); 