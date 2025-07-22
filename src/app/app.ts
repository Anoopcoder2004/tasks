import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  headers = ["ID", "Name", "Age", "Gender", "Country","Salary"];

  rows:  Record<string, string>[] = [
    {
      ID: "1",
      Name: "Anoop",
      Age: "21",
      Gender: "Male",
      Country: "India",
      Salary: "100000"
    },
    {
      ID: "2",
      Name: "Mizhab",
      Age: "23",
      Gender: "Male",
      Country: "India",
      Salary: "73000"
    },
    {
      ID: "3",
      Name: "Nashab",
      Age: "27",
      Gender: "Male",
      Country: "India",
      Salary: "50000"
    },
      {
      ID: "4",
      Name: "Aiswarya",
      Age: "23",
      Gender: "Female",
      Country: "India",
      Salary: "25000"
    },
      {
      ID: "4",
      Name: "Aleena",
      Age: "23",
      Gender: "Female",
      Country: "India",
      Salary: "60000"    },
          {
      ID: "5",
      Name: "Emil",
      Age: "23",
      Gender: "Male",
      Country: "India",
      Salary: "5000"
    },
          {
      ID: "6",
      Name: "Arjun",
      Age: "23",
      Gender: "Male",
      Country: "India",
      Salary: "30000"
    },
          {
      ID: "7",
      Name: "Sulu",
      Age: "27",
      Gender: "Female",
      Country: "India",
      Salary: "20000"
    }
  ];
  sortAsc = true;

sortBySalary() {
  this.rows.sort((a, b) => {
    const aSalary = +a['Salary']; // convert to number
    const bSalary = +b['Salary'];
    return this.sortAsc ? aSalary - bSalary : bSalary - aSalary;
  });
  this.sortAsc = !this.sortAsc; // toggle direction next time
}

}

