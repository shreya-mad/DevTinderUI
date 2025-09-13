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
// ssh -i "devTinder-secret.pem" ubuntu@ec2-51-20-56-108.eu-north-1.compute.amazonaws.com
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

