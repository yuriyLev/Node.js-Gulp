# Node.js-Gulp

Welcome to the front-end project page! It's a bunch of test applications which was created in order to study and teach students whose aims are to obtain a great job )

Used tools: Yeoman, Gulp, Bower, Node.js, Twitter Bootstrap, Restangular, AngularJS UI Router.
Code editor: Jetbrains IDE or Notepad++.

1.Test Angular SPA project - Single page application exposes a shallow description of different technology usage in front-end.
2.AngController - creation of a simple controller which add new transactions to the Data base using above tools. In fact all the data are delivered to the browser from the model through the controller but we won't be using the Model. We deleted src/app/main.controller.js, src/app/main.controller.spec.js, src/app/main.html and src/components/navbar/, which were generated by Yeoman.<br>
3.TransacCounter - functionality add-ons of our table. Currently we don't see the connection between total counter and our transactions. In this part we add the service object through which we access to our transactions. This object help us obtain data in different controllers and bring the counter of total amount alive.
Also we:
- apply the Router library in order to navigate across different html files without reloading whole application making it SPA;
- are going to use templates instead of storing entire HTML code in a single file;
