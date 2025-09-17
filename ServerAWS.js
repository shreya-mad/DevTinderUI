// "localhost" means your own computer.

// It is a hostname (like a website address) that points back to the same device you are working on.

// Technical meaning: localhost resolves to the IP address 127.0.0.1 (IPv4) or ::1 (IPv6).

// Usage:

// When you type http://localhost in your browser, it tells your browser to connect to a web server running on your own computer.

// Developers use it for testing apps, websites, or databases on their own system before deploying them to a real server.

// 👉 Example:
// If you run a server on your computer at port 3000, you can open it in the browser by visiting:

// http://localhost:3000

// so to make our application or website visible to everyone we need to host our website onto some other 
// machine so that everyone can accress that and that machine is given by AWS
// that machine is the central place  from where we can access the website from accross the all over world


// now deployment process start 
// for taking machine on aws we simply select ec2 instance

// An EC2 instance in AWS (Amazon Web Services) is basically a virtual server in the cloud that you can use to run applications.

// Here’s a breakdown:

// EC2 = Elastic Compute Cloud

// Elastic → You can scale (increase/decrease) servers as needed.

// Compute → It provides processing power (like a computer CPU & memory).

// Cloud → It runs on AWS’s infrastructure, not on your personal hardware.

// An EC2 instance is like renting a computer from AWS that you can access anytime, install 
// software on, and use for whatever tasks you need.

// after selecting to ec2 we need to full some formalities like os and all  and there we need to make key pair, so .pem 
// file will be generated and then it will take that secret key automatically 
// then after filling all the information ,simply launch machine and then wait for stuaus update,it may takr 
// some time so after satatus update simply see all the imforation by clicking on id and then go to connect
// and that will give way to connect 
// AWS is giving you different ways to connect to that server so you can use 
// it just like you would use your own laptop or desktop. here we use ssh client  method bcos it is most 
// secure and most used
// It means logging into your EC2 instance (your virtual machine in the AWS cloud) from your own 
// computer so you can run commands, install software, deploy apps, etc.
// You’re not connecting to another physical device of yours — you’re connecting to the virtual computer 
// hosted by AWS in their data center.

// WHAT IS SSH
// SSH = Secure Shell
// It’s a protocol (a set of rules) used to securely connect to another computer over a network.

// Think of it like:

// You are on your laptop (client).

// You want to log in to another machine (like an EC2 instance in AWS, or a server at your office).

// Instead of physically sitting at that server, you use SSH to open a secure command-line 
// session(connection to that server) from your laptop.

//⚡ Key features of SSH

// Secure communication

// Encrypts all traffic so hackers can’t read it.

// Unlike older methods like Telnet, which sent passwords in plain text.

// Authentication

// You log in using a password or a key pair (private key & public key).

// In AWS EC2, you usually use the .pem private key file.

// Remote command execution

// Once connected, you can type commands on the remote machine as if you were sitting there.

// Port forwarding / tunneling

// Can securely forward data (like connecting to databases or websites securely through SSH).

// File transfer

// Using tools like scp (Secure Copy) or sftp, you can copy files over SSH.
 

// after selcting ssh client methos we simply run command present on that into the terminal 
// so here my laptop has windows so we dont need to run 2 commands of cdmod,dorectly run blow command 
// go to downloads folder then write below command to connect aws ec2 instance
// ssh -i "devTinder-secret.pem" ubuntu@ec2-51-20-56-108.eu-north-1.compute.amazonaws.com
// for connecting to ec2 instance ,we simply guided to go downloads foder because .pem file generated while 
// making ec2 instance is get dowloaded in default folder named downloads and we need .pem file for
//  connecting to ec2 instnce from our laptop
// You go into the Downloads folder in Command Prompt only because that’s where your .pem file is stored by 
// default. It’s not a requirement — you can connect from anywhere if you provide the full path of the .pem file.
// so by running above ,we simply logged into that virtiual machine from our machine(laptop)
// now terminal of our laptop becomes terminal of that virtual machine 
// now install all the dependecies of the project like node or something else and your node version 
// should match to version of node in our project other wise we will face many problems 


// instal node using below command becuase we need to install exact version used in our project
// # Install NVM
// curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
// source ~/.bashrc

// # Install exact Node.js version
// nvm install 22.17.1
// nvm use 22.17.1

// # Make it default for all new SSH sessions
// nvm alias default 22.17.1

// for log out from the machine we need to use command exit
// for security reason we get disconnected with the virtual machine of we keep our terminal open for a while
// now clone your project from github to ec2 by ssh and use command git clone and ssh link of that repo

// now run our project on ec2 so for that we need to make build of the project so that our project 
// gets bundled up so if we are using vite bundler then it will create dist folder which is similar to
// build in webpack bundler ,so dist is simply a optimes,minmised and production ready code of our prject 
// then install all the dependencies by npm install 
// above few steps are only for frontend deployemnt
// to deploy frontend project we need something known as ngnix

// Nginx (pronounced “engine-x”) is a high-performance web server and reverse proxy.

// It can be used to:

// Serve static files (HTML, CSS, JavaScript, images) for websites.

// Act as a reverse proxy, forwarding requests to backend servers (like Node.js, Python, PHP, etc.).

// Handle load balancing for multiple backend servers.

// Serve as a mail proxy (less common).
// Think of Nginx as a waiter in a restaurant:

// You (the user) ask for a dish (a website or app).

// Nginx is the waiter who takes your request and gives you the food.

// In technical terms:

// Web server: It can directly serve your website files (HTML, CSS, JS).

// Reverse proxy: It can forward requests to your app (like a Node.js or Vite app) running in the background.

// Load balancer: If there are many users, it distributes traffic to multiple servers so no server gets overloaded.
// after installing nginx ,simply run that in virtual machine
// copy code from dist(build file) to /var/www/html/ by below command
// sudo scp -r dist/* /var/www/html/
// now our frontend app should be running on the public ip of the ec2 instance but that wont bcos 
// aws locks all our port so when when we deploye our poject using nginx then it deployed on port no 80
// now enble port :80 on your instance
// so we have to go security group in security of oue instance and inbound rules there
// so go to edit inbound rule in that section then add rule inside that and add port range 80
// then add port  0.0.0.0/0 so that it will allow all the port to access it  then save rules
// now we can our frontend project on that instance public ip our fronted application 
// is deployed successfully,if we want to show any perticular domain name then simply buy domain 
// name then map that into our ip address

// ALL THE STEPS FOR FOR BACKENED DEPLOYEMENT
// npm install in virtual machine after going to backend project
// start backend by npm start command
// here we need to enable port 4000 of backned same as port 80 for frontedn
// hamra backened application run karega jab ham apne vs code me aur aws dono me project ko run krenege
// agr hamne apna projecgt bnd kiya to phir port pe hamara prject run nhi krega,here i need to run only on virtual machine ,not in our project
// so we have to do something jisse hamra npm starrt forver chlta rahe
// for that ,we will use PM2 packange
// then start server using below command
// pm2 start npm -- start
// by command pm2 logs,it will show the res of our backned project ,like database connection successfull


// our frontened is running on port http://51.20.56.108/
// and our backned is running on port http://51.20.56.108:4000/

// if we  map our website to devTinder.com then frontend would run on devTinder.com
// and our backend will run on devTinder.com:4000 but this is not standard ...stand 
// would be devTinder.com/api
// so for mapping our port no to /api we need nginx and there is something known as nginx proxy pass
// ham nginx me jake phir koi bhi /pai wali request ko :4000 pe map kr denge 
// to phir ham sudo nano  sudo nano /etc/nginx/sites-available/default command ko run krenge to phir 
// ye vhi redirect krenge jaha hame edit krna h
// to phir phle ham server name chnage krnege jki defalut me _ hai but hame yha pe apna 
// ip address dalna hoga jisse project ko access krte h ,like: 51.20.56.108/
// phir us server ke neeche some other rules ko add krnege ,below mentioned
// location /api {
    //     proxy_pass http://localhost:4000;
    //     proxy_http_version 1.1;
    //     proxy_set_header Upgrade $http_upgrade;
    //     proxy_set_header Connection 'upgrade';
    //     proxy_set_header Host $host;
    //     proxy_cache_bypass $http_upgrade;
    // }
    // then save and restart ngnix vby sudo systemctl restart nginx

// COMPLETELY CORRECRED NGINX CONFIGURATION
//     server {
//     listen 80 default_server;
//     listen [::]:80 default_server;

//     root /var/www/html;
//     index index.html index.htm index.nginx-debian.html;

//     server_name 51.20.56.108;

//     location /api {
//         proxy_pass http://localhost:4000;
//         proxy_http_version 1.1;
//         proxy_set_header Upgrade $http_upgrade;
//         proxy_set_header Connection 'upgrade';
//         proxy_set_header Host $host;
//         proxy_cache_bypass $http_upgrade;
//     }

//     location / {
//         try_files $uri $uri/ =404;
//     }
// }


// modify the api url in frontend code
// after that ,we need rto repeat whole the process of frontend deployement

// ADDING CUSTOM DOMAIN NAME TO OUR WEBSITE
// so for that we can use varius website and one of them is goDaddy but i have used duckdns because 
// its free  

// and for DNS mangement we can use cloudflare,DNS management meaning for which ip address we are mapping
// to purchased or free domain name
// we can manage DNS on goDaddy as well but cloudflare provides free ssl and all
// enable SSL and made website https

// if we have kept secret varibles of api in .env file then while production wneed to make .env file in 
// ec2 instance manually by simple command sudo nano .env and this will make .env file and then 
// we simply have to paste all the secret varibles inside that file 

