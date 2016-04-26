---
title: 'Webmaster test 2013 EGM'
---

[ WEBMASTER EXAM 2013 ]

Note on the root section: This section does not specifically test your ability as webmaster, 
but tests your root competency. As such, if you fail this section, the score will not count 
towards the overall test score, and all other questions will be marked out of 90 - you just 
won't be given root access. If you pass this section, however, it will positively affect your 
ability to carry out webmaster duties, and as such the entire test will be marked out of 130.

## HTML and other basics (30 marks)

1. Create a simple web page with a box in the center. That is 200 x 200px. The box must contain an image (random.png). (6 marks)
2. What does the following jquery code do? (2 marks)
```
<script type="text/javascript">// <![CDATA[  
$(document).ready(function(){  
$("button").click(function(){  
$.get("lolwut.txt",function(data){  
alert("Data: " + data);  
});  
});  
});  
// ]]></script>

```
3. Create a html form that sends a username and password to AccDetails.php (via POST) (3 marks)
4. What is webkit? (2 marks)
5. Briefly explain what XML & JSON are and why they are used? (4 marks)
6. What is cross site scripting (Xss)? What are some of the risks? (3 marks)
7. Write Javascript/Jquery code to replace the content of the following</pre>
```
<div id="divine"> <div id="divine">&nbsp;</div></div>
```
with "OMGWTFDIV." (5 marks)
8. Create a simple 3 button menu of your choosing using either buttons/lists or a table (5 marks)

## Server Side Scripting (30 marks)

1. In a language of your choice, write a web script that receives the values from the form in question 3 (HTML SECTION) above. Store them to a file. (10 marks)
2. Write an SQL query to do the following: (2 marks each)
	- Create a table called "warez" with the following columns -> id, what,where, who
	- Insert an item of your choosing into this table
	- Return all rows were the 'where' column is like "http://136.206.16"
3. Name 4 of the possible $key_name and associated $key_value you may find outputted by the following PHP script? (This prints Environment variables) (4 marks)
```
foreach($_SERVER as $key_name => $key_value) {
	echo '<b>'.$key_name.'</b> => ' .$key_value."<br>";
}
```
4. What are some dangers/vulnerabilities in the following piece of code? Provide solutions or simply explain how these could be prevented? (4 marks)
```
mysql_connect ("mysql.database", "webadmin","password");
mysql_select_db ("userdb");

$sql = mysql_query("select * from users where id = ".$_GET['id']);
$info = mysql_fetch_array($sql);

echo "<h1>".$_GET['id']."</h1>";
var_dump($info);
```
5. Briefly explain the components of an MVC Pattern? (3 marks)
6. What does the following PHP do? When would it be used? (3 marks)

`header('Content-type: application/json');`

## Apache & servers(30 marks)

1. You have created a vhost in /etc/apache2/sites-available/ How would you enable it without restarting apache?(2 marks)
2. How would you restart apache2? (1 marks)
3. What is mod_rewrite? Give an example of when you would use it?(2 marks)
4. What is fastcgi? Why would you use it? (2 marks)
5. What do the following HTTP response codes signify? (1 marks each)
	- 200
	- 404
	- 403
	- 500
6. Where are the apache access logs normally stored? What kind of information can you find here? (3 marks)
7. So the NSA eh? What is SSL? What does SSL stand for? What is the default port for SSL requests? What apache module provides SSL support? (5 marks)
8. How can you check what apache modules are enabled? (3 marks)
9. What is SuExec? (3 marks)
10. Name another web server? (1 marks)
11. What is Bind used for? Where do you configure it? (2 marks)
12. What is mod_userdir? (2 marks)

## Root Section (40 marks)

1. Why should the Pubcookie configuration file never be world readable? (2 marks)
2. Where on Debian/Ubuntu would you find the network interface config file? (2 marks)
3. What is it important to do before and after updating any config file (1 mark)
4. What is chrootkit? (1 mark)
5. What does NFS stand for and what does RedBrick use it for? (2 marks)
6. What is LDAP? What is an LDIF? (2 marks)
7. What is Nagios? Where can you view it? (2 marks)
8. When is it necessary to use port-forwarding? How do you? (2 marks)
9. Munin, what is it? (1 mark)
10.  What ports are the following on? (4 marks)
  - ssh
  - imap
  - irc
  - ldap
11. What is an IP KVM? Why is it a good thing to have? (2 marks)
12. What is pf? (1 mark)
13. How do you list all the processes for a single user? (1 mark)
14. What are ulimits? (1 mark)
15. What server are redbricks vm's hosted on? (1 mark)
16. Name three files on Redbrick that should only be readable by root? (3 marks)
17. How do you check the current kernel you are running? What os/version runs on Mor</pre>
