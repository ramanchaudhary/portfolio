import { Component } from '@angular/core';




   @Component({

     selector: 'app-technologies',

     templateUrl: './technologies.component.html',

     styleUrls: ['./technologies.component.css']

   })

   export class TechnologiesComponent {

     technologies = [

       { name: 'JavaScript', description: 'A dynamic programming language for the web.', logo : '../../assets/logo-javascript.svg'},

       { name: 'Python', description: 'A versatile programming language used for various purposes.', logo : '../../assets/python-4.svg' },

       { name: 'MySQL', description: 'A popular open-source relational database management system.', logo : '../../assets/mysql-logo.svg' },

       { name: 'MongoDB', description: 'A flexible and scalable NoSQL database.', logo : '../../assets/mongodb-icon-1.svg' },

       { name: 'Docker', description: 'An open platform for building, shipping, and running applications.', logo : '../../assets/docker.svg' },

       { name: 'Kubernetes', description: 'An open-source container orchestration system.', logo : '../../assets/kubernets.svg' },

       { name: 'Angular', description: 'A popular TypeScript-based web application framework.', logo : '../../assets/angular-icon-1.svg' },

       { name: 'React', description: 'A JavaScript library for building user interfaces.', logo : '../../assets/react-2.svg' }

     ];

   }