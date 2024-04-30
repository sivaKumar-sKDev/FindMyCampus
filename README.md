
# FindMyCampus Web Application

## Description

**Problem and Background:**

- There is an absence of an efficient and user-friendly online platform for prospective students in India to search and discover colleges. 

- The existing resources are scattered, outdated, and insufficient in providing comprehensive details about colleges and the courses they offer.

- Students searching for colleges online face challenges due to excessive advertisements, which hinder their ability to make well-informed decisions about their education.


- There is a significant lack of a centralized platform where students can easily search for and discover colleges. 

- Comprehensive information about courses, contact details, and other relevant details is not readily available. 

- The current situation makes it difficult for students to navigate the college selection process effectively.




**Objective:**

- The proposed application addresses the lack of a centralized platform for college search and discovery in India. 

- By providing accurate and reliable information about colleges and courses, it empowers students to make informed decisions.

- The proposed solution is to build a web application with a backend database containing information about IT and management colleges in India, along with other institutions offering relevant courses. 

- In summary, the proposed solution aims to create an efficient and user-friendly platform that simplifies college search.



## Features

- **Comprehensive College Search:** Use FindMyCampus as your one-stop destination to explore your dream colleges. Discover information about available courses, admission processes, and more. Our repository includes details on over many colleges and courses across various streams.

- **Customized Filters:** Filter colleges based on location, exams, and fees. Easily searchable through form and well-presented upon the search input.

- **Student-Friendly Information:** We address the concerns of unavailability of an efficient and user-friendly online platform for prospective students to search and discover colleges in India.

- **Responsiveness:** Responsive design principles of web application ensure the application is accessible and functional across various devices and screen sizes.

- **Usability:** The user interface are intuitive and easy to navigate.

- **Smooth experiences** with added animation effects.

- **Well-presented records** by great UI/UX in the front-end.

- **Pagination** for displaying 10 records per page to improve user experience.




## Tech Stack

**Front-End Web Technologies:** HTML (Hyper Text Mark-up Language), CSS (Cascading Style Sheets), JavaScript

**Back-End Web Technologies:** Node.js, Express.js, EJS

**Database:** MySQL (XAMPP)



## Deployment

Steps To Deploy The FindMyCampus Application:

1. Create the database "*findmycampus*" on XAMPP and import the "*findmycampus.sql*" file to this database on XAMPP in the import section.

2. Open VSCode and open the FindMyCampus folder.

3. Initiate a nodejs server and install the required packages on the terminal:
Required packages: *mysql express nodemon dotenv cors body-parser ejs*

```bash
npm init
npm install
```


4. Go to the "package.json" file ==> under scripts type

```bash
  "start": "nodemon app.js",
```


5. On the terminal, just type 
```bash
npm start
```

Note: The XAMPP database must run in the background. Otherwise, application will throw error.


