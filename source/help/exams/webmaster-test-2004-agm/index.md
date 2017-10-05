---
title: 'Webmaster test 2004 AGM'
---

## Notes:

* * *

*   All questions are relevant to performing the job of RedBricks webmaster.
*   I have left out asking questions about anything you wont learn till your performing the job such as adding sql or user accounts.
*   Give a decent amount of information for all questions. i.e if the question is "What is html?", the answer "A web language." doesnt cut it, an explanation is needed.
*   All references to apache refer to apache2 installed from source.
*   You have 1 hour 15 minutes, Good Luck.

* * *

## A: So you wanna be head of webgroup? (25)

## (General Web Knowledge)

1.  What does CSS stand for and what are they used for? What is xhtml? (5)
2.  What does SSI stand for ,what are they, and how are they used in the layout of the redbrick website? (5)
3.  Name 3 primary web browsers that you should aim to have your website render correctly in. (5)
4.  Name 3 duties of RedBricks webgroup and name 4 current members of the group. (5)
5.  What does ASP stand for, what are they and are they supported on RedBrick. (5)

## B: Ahoy there Lone Ranger, where's Tonto? (30)

## (Apache)

1.  You have the file apache1_3_9.tar.gz. What are the 4 commands necessary, in correct order, so as to get the webserver extracted and installed with its default options? Also what is the default port for a webserver. (5)
2.  What does SSL stand for? What is SSL? What is the default port for an SSL webserver. How does RedBrick make use of it? What is an option whilst compiling apache that provides ssl support? (5)
3.  What are the pros and cons of running php as a cgi and running php as an apache module.Explain your answer well. (4)
4.  What is a vhost and where is their document root directory located on RedBrick. (4)
5.  What is the function of SuExec? If a user had been converted from member to associat but the files in their webspace were not modified, would SuExec complain? Explain your answer. (4)
6.  What is an SSL certificate and who provides RedBricks SSL certificate? (4)
7.  What is the name of the script used to start, stop, or restart apache? How would you use it to start apache with ssl support. (4)

## C: What do you wish of me Satan? (25)

## (Tomcat)

1.  What is Tomcat and what is the main feature required for a user to be able to make use of RedBricks tomcat server. (Asking the webmaster is not a valid answer for the second part of that question :)) (5)
2.  What port does Tomcat run on on RedBrick and why are users generally obliviuos to this fact? (5)
3.  A user emails you to say that they are having some issues with tomcat. They have a servlet that is supposed to query data in their postgresql database and also store servlet access infomation into a file in the users account. They have checked their code and they know it is correct, yet when they run their servlet in a browser they get an sql authentication failure and a permission denied failure when trying to write to the file. Why are these problems occuring and how can each problem be fixed? (5)
4.  What is the primary difference between java servlets and jsp. (5)
5.  What command would you use to start , stop, or restart tomcat? (full path) Users contact you to report a "Bad Gateway" error, how would you fix it?(5)

## D: Help me I'm a CA3\. (25)

## (Scripting and other requests, a lesson in anger management)

1.  The following email arrives from a user:

    <pre>Hi, Would it be possible to get JavaScript   
    access for my account please? Regards.</pre>

    What would your reply be? (5)
2.  What does CGI stand for and what are they used for? What does PHP stand for? What should the permissions of web scripts be? Name 3 scripting languages a web script can be written in on RedBrick? (5)
3.  Their are 3 problems with the script below.2 prevent it from running at all and 1 prevents it from running in a browser. All permissions are correct, what are the 3 problems.

    <pre>   #/usr/bin/perl                                 

       $date=`date` 
       print "Current date and time is: $date"; (5)
       </pre>

4.  A user contacts you and requests permission to run a web forum. What are the rules regarding the running of a web forum on redbrick and what would your reply to the user be. (5)
5.  Write a simple website hit counter in any scripting language of your choice. The counter must display the current site hits on screen. Normal text output will do nothing fancy required :) (5)

## E: I have the powerrrrrrrr!!!! (25)

## (Root Skillz)

1.  What operating systems are installed on Enigma,Prodigy,Carbon and Deathray? What is the "privileged port range" on UNIX systems and why is it relevant to webmaster having root? (5)
2.  What do NFS and LDAP stand for and what are they? What does RedBrick use them for? (5)
3.  The load is climbing out of control and your the only root holder online. You have a feeling a rogue users script may be causing the problem, explain how you would go about tracking it down and sorting the problem, making sure to write down all commands you used. (5)
4.  You turn renegade and give the root password of carbon to a friend. Your friend types su into their terminal and enters the password but is denied access. What has gone wrong? Should they try it somewhere else? (5)
5.  Someone asks for an increase of 100mb in their web directory quota, and 50mb in their home directory quota. You grant the request for the increase, how would you go about implementing the change? (5)

## F: Cast your mind back to leaving cert english. (25)

## (The infamous essay)

**Do either 1 OR 2.**

1.  You have just recieved an email from IRMA regarding copyrighted songs being distributed from a users website. Explain the steps you would take and the order in which you would take them to deal with the issue. Make references to regulations where appropriate. (25)
2.  You have the files apache.tar.gz and php.tar.gz. Outline the steps needed (in correct order),to install the apache webserver with mod_php support into /home/apache. Why would mod_php be needed on a webserver? What type of php install does RedBrick have? (Other to the requirement of mod_php and an install to /home/apache, you can assume you are using the standard settings for apache and php) (25)

## G: It cant be that easy? (5)

## (Easy marks)

1.  Which version of Apache is running on RedBricks web services machine? (1)
2.  Which version of Tomcat is running on RedBricks web services machine? (1)
3.  Which version of PHP is running on RedBricks web services machine? (1)
4.  Which version of SquirrelMail is running on RedBricks web services machine? (1)
5.  What is the full path to the base directory of the primary Apache server, the webmail Apache server, and the tomcat server on RedBricks web services machine? Also what is the hostname of RedBricks web services machines? (1)
