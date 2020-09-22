import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'new-project';
  type = 'line';
  data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: '',
      data: [12, 19, 3, 5, 2, 3, 10],
      backgroundColor: [
        'rgba(0, 153, 204, 0)'
      ],
      borderColor: [
        'rgb(0, 153, 204, 1)'
      ],
      borderWidth: 3
    }]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1.7,
    legend: {dispaly: false, labels: {boxWidth: 0}}
  };
}
