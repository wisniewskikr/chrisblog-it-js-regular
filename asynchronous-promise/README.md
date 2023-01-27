DESCRIPTION
-----------

##### Goal
The goal of this project is to present how to use **Promise** class in **java script**.

Promise class enables asynchronous working in java script. In other words Promise class can be processing log time and at the same time other javascript functions can be called. Promise consists of two parts:
* **Promise Configuration**: configuration looks like this: **let myPromise = new Promise(function(resolve, reject){resolve();reject()};**. Method **resolve()** should be called if everything is ok. Method **reject()** should be called if there is some error. These methods can receive some arguments as result of Promise
* **Promise Call**: call looks like this: **myPromise.then(function() {},function() {});**. First function is called if everything is ok. Second function is called if there is some error

##### Services
N/A

##### Flow
N/A 

##### Launch
To launch this application please make sure that the **Preconditions** are met and then follow instructions from **Usage** section.

##### Technologies
This project uses following technologies:
* **JavaScript**
* **Node**


PRECONDITIONS
-------------

##### Preconditions - Tools
* Installed **Operating System** (tested on Windows 10)
* Installed **Node** (tested on version v14.17.3)

##### Preconditions - Actions
* **Download** source code using Git 
* Open any **Command Line** (for instance "Windonw PowerShell" on Windows OS) tool on **project's folder** (exact localization of project you can check in GIT repositories on page `https://github.com/wisniewskikr/chrisblog-it-js`)


USAGE
-----

Usage steps:
1. In Command Line tool run example with `node app.js`