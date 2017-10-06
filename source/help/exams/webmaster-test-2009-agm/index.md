---
title: 'Webmaster test 2009 AGM'
---

You have 45 minutes to complete this test. All sections are not marked equally - 30 marks go for HTML and PHP/scripting sections, 25 marks go to the apache section, and optionally 25 marks go to the root competency section.

**Note on the root section:** This section does not specifically test your ability as webmaster, but tests your root competency. As such, if you fail this section, the score will not count towards the overall test score, and all other questions will be marked out of 85 - you just won't be given root access. If you pass this section, however, it will positively affect your ability to carry out webmaster duties, and as such the entire test will be marked out of 110.

## HTML and other basics (30 marks)

1\. You have a paragraph of text, and you want to set the background color to yellow (#ffff00) and the foreground colour to blue (#0000ff). Give the HTML and CSS you'd use to do this. (3 marks)

2\. What CSS would you use to set the colour of all links on a page to red (#ff0000)? For the last mark, how would you set them to turn grey (#888888) when you hold the mouse over them? (3 marks)

3\. How would you create a bulletpoint list? (2 marks)

4\. Maketh me a table, with three rows and three cells in each row. (3 marks)

5\. You have a div (with id="mydiv"). How would you give it a dark grey (#888888) background, white text and a black, 1 pixel border? (5 marks)

6\. Show how you'd go about creating a two column layout on a page without using tables. (4 marks)

7\. Tell me something you can do to make your site more accessible to screen readers. (4 marks)

8\. Why is using BMP format for images a bad idea on the internet? Give two formats that are well-suited to the internet. (3 marks)

9\. Name three major browsers you'd test your website in. (3 marks)

## PHP and other scripting (30 marks)

1\. Give one way of including an external file in a PHP script. (3 marks)

2\. Write the following pseudocode in PHP:

<pre>x = 5
y = 6

if x > y
	output the word "Boo" in red (#ff0000)
else
	output the word "Moo" in blue (#0000ff)
end if
</pre>

(5 marks)

3\. Explain the difference between a for and a for each loop. (3 marks)

4\. Show how you'd connect to a database, send an SQL query and read the first row of results. (6 marks)

5\. What is SQL injection? Name one check that you should carry out on input data to avoid it. (5 marks)

6\. PHP encourages the programmer to dump all of their code and HTML into one file. Why is this a stupid idea? (4 marks)

7\. Briefly (in one line), what is MVC, and why is it the greatest thing in the history of hte universe? (3 marks)

## Apache and its various dangly bits (25 marks)

1\. What is an MPM? Which one do we use on murphy, and why? (6 marks)

2\. What's a DSO module, and how is it different to a static module? (4 marks)

3\. Apache runs under a specific username, but it can somehow spawn processes to run PHP scripts under other peoples' usernames. Omghaex?! How does it do this? (5 marks)

4\. What is SSL? What does SSL stand for? What is the default port for SSL requests? What apache module provides SSL support? (5 marks)

5\. Now that I think about it, what port does the rest of apache run on? (1 mark)

6\. Give one way to restart the apache web server (there are many, any of them will do) (3 marks)

7\. What does Tomcat do? (a three word answer will do, you're only getting one mark for it) (1 mark)

## So, you want to break my webserver? (25 optional marks)

1\. What is wrong with the following directory listing:

<pre>root@murphy:/etc/apache2/ssl# ls -l
total 10
-rw-r--r--   1 root     root        3028 May 20  2008 redbrick.dcu.ie.crt
-rw-------   1 root     root         729 May 20  2008 redbrick.dcu.ie.csr
-rw-r--r--   1 root     root         887 May 20  2008 redbrick.dcu.ie.key
root@murphy:/etc/apache2/ssl#
</pre>

(2 marks)

2\. A user emails you with the following:

<pre>Hi,

I'm having trouble logging in. I'm not sure if it's my putty or on Redbrick,
but I can't log in. My password is 8h3iudn. Halp!?

</pre>

Point out the problems with this email. What would be your next steps, apart from beating them over the head? (3 marks)

3\. What is NFS? What does Redbrick use it for? (3 marks)

4\. What is LDAP? What is it used for? (3 marks)

5\. Why should the Pubcookie configuration file never be world readable? (3 marks)

6\. You're connecting to Redbrick from a public WiFi network. This is fine, because SSH will encrypt the hell out of your traffic, but ohno! You get an SSH host key warning! To your knowledge, nothing has changed with Redbrick's setup, and nothing has changed with your laptop. What could be going on? Is it safe to ignore this warning? What do you do? (5 marks)

7\. I can't think of any more questions, and I'm hungry. What does the apropos command do? (2 marks)

8\. chmod u+s moo. What does this do? How can it be dangerous? (3 marks)

9\. What's a chroot and what could it be used for? (2 marks)
