/*
This is empty on purpose! Your code to build the resume will go here.
 */


var work = {
			jobs:[	{
						title:"Skill Upgradation is ON",
						employer:"Self Employed",
						duration:"June 2016 - Future",
						location:"Kolkata",
						description:"I am learning Full Stack Web Development along with AI techniques to work on real time problem."
					}
					,
					{
						title:"Sr. Software Developer",
						employer:"Tech Mahindra",
						duration:"May 2016 - May 2017",
						location:"Kolkata",
						description:"I have worked on Hadoop and its components like HDFS, Map Reduce, Apache Pig, Hive, Sqoop , HBase and Oozie"
					}
					,	
					{
						title:"IT Analyst",
						employer:"Tata Consultancy Services",
						duration:"Jan 2012 - April 2016",
						location:"Hyderabad",
						description:"3 years of experience in DB2 development using PL/SQL, IBM Data Studio 2010 and TFS and 1.5 years in Hadoop Support"
					}
					
				]

		};

var project = {
			projects:[{
						title:"CEDL and MEDL (Enterprise Data Lake)",
						dates:"Nov 2016 - May 2017",
						description:"This project is on ETL data warehouse with Hadoop.\
						We developed a writeback solution in Spark jobs[in Java] \
						to get the data from source DB2 database",
						images:["",""]
					}
					,
					{
						title:"Anti Money Laundering Report",
						dates:"May 2016 - Oct 2016",
						description:"We receives the flat file with transaction data (separated by ~ or |) into unix server \
						which we load into hive tables. Once the original file loaded we prepared hive scripts \
						to generate weekly and monthly report for customer which cross certain threshold limit \
						of transaction and load the transformed data into reporting hive table",
						images:["",""]
					}
					,
					{
						title:"Enterprise data management on Hadoop:",
						dates:"May 2016 - Oct 2016",
						description:"Applications are receiving data from Upstream (like Mainframe, Teradata and Unix Server) to Edge Node (Hadoop Client). \
										Data is being transformed and loaded in to both Teradata and HDFS using MapReduce/DMX tool, Hive and Sqoop",
						images:["",""]
					}
					,
					{
						title:"CMT (Client Maintenance Tool) - US Trust",
						dates:"May 2014 - April 2016",
						description:"As a part of Global Wealth Management the Web Application maintains information of US Trust Clients, \
										whereby we can create new accounts, parties and roles played by each party on the account. \
										I was involved in the development of Stored Procedures and UDF at DB level for all functionalities \
										for the most complex Fee Module (end to end PL/SQL coding).",
						images:["",""]
					}
					,
					{
						title:"AOP (Account Opening Portal) - US Trust",
						dates:"Jan 2013 - April 2014",
						description:"As a part of Global Wealth Management the Web Application maintains information of US Trust Clients, \
										whereby we can create new accounts. \ I was involved in the development of Stored Procedures  \
										and UDF at DB level for all functionalities here as well",
						images:["",""]
					}															
					,
					{
						title:"Mainframe L3 Support Engineer",
						dates:"Apr 2012 - Dec 2012",
						description:"Monitoring Mainframe jobs and solving tickets",
						images:["",""]
					}													
				]		
			};

var bio = {
			name:"Gaurav Singh",
			role:"Technology Lover",
			contacts: {mobile:"+91 8143810766",
						email:"gauravsinghaec@gmail.com",
						github:"gauravsinghaec",
						twitter:"@ImSinghGaurav",
						location:"Kolkata"
						},
			biopic:"images/GauravCVImage.jpg",
			skills: ["Hadoop and Ecosystem","PL/SQL","Database","HTML","CSS","JavaScript","Python","C"],
			welcomeMessage: "I am here to help my community to make our world a better place to live using IT services."
		};

var education = {
				schools: [{name: "Asansol Engineering College",
							location: "Asansol",
							majors: ["Electronics & Telecommunication"],
							url: "http://www.aecwb.edu.in/",
							degreedate: "2011",
							degree: "BTech"							
						},
						{name: "DAV Higher Secondary School",
							location: "Asansol",
							majors: ["Mathematics","Physics","Chemistry","English","Hindi"],
							url: "",
							degreedate: "2007",							
							degree: "Xll Intermediate"
						},
						{name: "NDRV High School",
							location: "Sitaranpur",
							majors: ["Hindi","English","Physics","Life Science","Mathematics","History","Geography"],
							url: "",
							degreedate: "2005",
							degree: "X Matriculation"							
						}	
						],
				onlineCourses: [
							{title: "JavaScript",
							school: "Udacity",
							url: "http://www.udacity.com/",
							dates: "2016"							
						},
							{title: "HTML & CSS",
							school: "Udacity",
							url: "http://www.udacity.com/",
							dates: "2016"							
						},
							{title: "Python programming and Unix commands",
							school: "Tech Mahindra",
							url: "https://www.techmahindra.com/",
							dates: "2016"							
						},						
							{title: "Hadoop and its ecosystem classroom course",
							school: "Kelly Institute, Hyderabad",
							url: "http://www.kellytechno.com/",
							dates: "May 2015 -August 2015"							
						},
							{title: "TCS Training on Core Java",
							school: "TCS",
							url: "https://www.tcs.com/",
							dates: "2014 - 3 Months"	
						},
							{title: "TCS Training on Mainframe ",
							school: "TCS",
							url: "https://www.tcs.com/",
							dates: "2012 - 6 months"	
						},
							{title: "SQL and DBMS",
							school: "Self Learning",
							url: "",
							dates: "2010-2011 - 6 months"	
						},										
							{title: "C Language",
							school: "BTech",
							url: "",
							dates: "2008 - 6 months"			
						},
							{title: "Data Structure",
							school: "BTech",
							url: "",
							dates: "2009 - 6 months"			
						}						
						]
						
			};


var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

var formattedMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail= HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub= HTMLgithub.replace("%data%",bio.contacts.github);
var formattedTwitter= HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedLocation= HTMLlocation.replace("%data%",bio.contacts.location);

var formattedBioPic= HTMLbioPic.replace("%data%",bio.biopic);
var formattedWelcomemsg= HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomemsg);

$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedMobile);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);


if(bio.skills.length !=0){
	// var formattedSkillsStart= HTMLskillsStart;	
	var formattedSkills= HTMLskills.replace("%data%",bio.skills);
	$('#header').append(HTMLskillsStart);
	$('#skills').append(formattedSkills);
};


function displayWork(){
	for(var i = 0;i<work.jobs.length;i++){

		// var formattedworkStart = HTMLworkStart;
		$("#workExperience").append(HTMLworkStart);

		var formattedworkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		var formattedworkTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
		var formattedworkDates = HTMLworkDates.replace("%data%",work.jobs[i].duration);
		var formattedworkLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
		var formattedworkDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);

		var formattedworkEmployerTitle = formattedworkEmployer+formattedworkTitle;
		
		$(".work-entry:last").append(formattedworkEmployerTitle);
		$(".work-entry:last").append(formattedworkDates);
		$(".work-entry:last").append(formattedworkLocation);
		$(".work-entry:last").append(formattedworkDescription);

	}
}

if(work.jobs.length !=0){
	displayWork();
}


project.display = function () {

	for(var j = 0;j<project.projects.length;j++){
		// var formattedprojectStart = HTMLprojectStart;
		$("#projects").append(HTMLprojectStart);

		var formattedprojectTitle = HTMLprojectTitle.replace("%data%",project.projects[j].title);
		var formattedprojectDates = HTMLprojectDates.replace("%data%",project.projects[j].dates);
		var formattedprojectDescription = HTMLprojectDescription.replace("%data%",project.projects[j].description);
		
		$(".project-entry:last").append(formattedprojectTitle);
		$(".project-entry:last").append(formattedprojectDates);
		$(".project-entry:last").append(formattedprojectDescription);

		if(project.projects[j].images.length >0){		
			for (image in project.projects[j].images){
			var formattedprojectImage = HTMLprojectImage.replace("%data%",project.projects[j].images[image]);		
			$(".project-entry:last").append(formattedprojectImage);
			}		
		}
		
	};
}

if(project.projects.length !=0){
	project.display();
};

if(education.schools.length !=0){
	for(var i = 0;i<education.schools.length;i++){		
		
		// var formattedschoolStart = HTMLschoolStart;
		$("#education").append(HTMLschoolStart);

		var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
		var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[i].degreedate);
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
		
		var formattedSchoolDegreeName = formattedschoolName+formattedschoolDegree;

		$(".education-entry:last").append(formattedSchoolDegreeName);
		$(".education-entry:last").append(formattedschoolDates);
		$(".education-entry:last").append(formattedschoolLocation);
		$(".education-entry:last").append(formattedschoolMajor);
	};

};

if(education.onlineCourses.length !=0){
	// var formattedonlineClasses = HTMLonlineClasses;
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);
	for(var i = 0;i<education.onlineCourses.length;i++){
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
		var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates); 
		var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedonlineTitle+formattedonlineSchool);
		$(".education-entry:last").append(formattedonlineDates);
		$(".education-entry:last").append(formattedonlineURL);

	};

};

$("#main").prepend(internationalizeButton);
$("#mapDiv").append(googleMap);

