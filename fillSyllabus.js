document.addEventListener('DOMContentLoaded', function () {
    const myForm = document.getElementById('myForm');
    myForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const title = document.getElementById('title').value;
        const category = document.querySelector('input[name="category"]:checked').value;
        const office = document.getElementById('office').value;
        const email = document.getElementById('email').value;
        const officeHours = document.getElementById('officeHours').value;
        const academicunit = document.getElementById('academicunit').value;
        const department = document.getElementById('department').value;
        const code = document.getElementById('code').value;
        const englishtitle = document.getElementById('englishtitle').value;
        const pr = document.getElementById('pr').value;
        const cr = document.getElementById('cr').value;
        const Numcredits = document.getElementById('Numcredits').value;
        const chpw = document.getElementById('chpw').value;
        const type = Array.from(document.querySelectorAll('input[name="type[]"]:checked')).map(input => input.value);
        const DL = document.querySelector('input[name="DL"]:checked').value;
        const O = Array.from(document.querySelectorAll('input[name="O"]:checked')).map(input => input.value);
const cs = document.getElementById('cs').value;
const CRN = document.getElementById('CRN').value;
const clsc = document.getElementById('clsc').value;
const cpks = document.getElementById('cpks').value;
const cd = document.getElementById('cd').value;
const cg = document.getElementById('cg').value;
const dm = document.getElementById('dm').value;
const otherLanguage = document.getElementById('otherLanguage').value;
const clo = document.getElementById('clo').value;
const WritingRequirements = document.getElementById('WritingRequirements').value;
const OralRequirements = document.getElementById('OralRequirements').value;
const TechnicalRequirements = document.getElementById('TechnicalRequirements').value;
const pg = document.getElementById('pg').value;
const ap = document.getElementById('ap').value;
const tqm = document.getElementById('tqm').value;
const hw = document.getElementById('hw').value;
const fe = document.getElementById('fe').value;
const date = document.getElementById('date').value;





        const resultWindow = window.open('YourSyllabus.html', '_blank');
        if (resultWindow) {
            const resultHTML = `
            <!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="syllabus.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Syllabus</title>
</head>
<body>
    <div class="navbar">
        <a href="index.html">Home</a>
        <a href="syllabus.html">Syllabus</a>
        <div class="dropdown">
        <button class="dropbtn" onclick="myFunction()">Research
        </button>
        <div class="dropdown-content" id="myDropdown">
          <a href="htmlResearch.html">HTML</a>
          <a href="cssResearch.html">CSS </a>
          <a href="jsResearch.html">JavaScript </a>
          <a href="references.html">Reference </a>
        </div>
        </div> 
      </div>  
      <h3 class="top_header">
        USEK - Course Offering
      </h3>
      <div class="top_menu">
        <div class="left">
          <a href="#">
            <img src="usekLogo.png" alt="USEK Logo" class="logo">
          </a>
          <p class="logo_title">
             ${code} - ${englishtitle} 
             <br><span style="font-weight: bold; font-size: 16px; font-style: italic;">
                 Department of ${department}
                </span></p>
    
        </div>
        <div class="middle_right">
          <p>
            <span style="font-weight: bold; font-size: 25px">HOLY SPIRIT UNIVERSITY OF KASLIK</span>
            <br>
            <br><span style="font-weight: bold; font-size: 18px">Syllabus (Students)</span><br>
            <i>${cs}
            </i>
          </p>
    
        </div>
      </div>
    
      <div class="row_content">
        <div class="column_about">
          <br>
          <p class="about_titles" style="font-size: 20px;">About the Instructor</p>
          <p class="about_titles">Name:</p>
          <div class="name">
            <p>Dr. ${name}
            </p>
          </div>
          <p class="about_titles">Title:</p>
          <p>${title}
            
        </p>
          <p class="about_titles">Category:</p>
          <p>${category}
            
        </p>
          <p class="about_titles">Office:</p>
          <p>${office}
           
        </p>
          <p class="about_titles">Email/Teams:</p>
           <p class="links"><a href=
             "mailto:
            ${email}" 
           title="Mail Now!"> 
            ${email}
        </a>
            <br><span style="font-size: smaller; font-style: italic">(Replies are to be expected within the following 2
              working days)</span>
          </p>
          <p class="about_titles">Office Hours:</p>
          <p>${officeHours}
            
        </p>
        </div>
        <div class="column_main">
         
          <div>
        
                <div class="titles">I. Course Information</div>
                
              <div><table class="courseInfoTable">
                <tr>
                  <td>Academic unit</td>
                  <td>${academicunit}
                   
                </td>
                </tr>
                <tr>
                  <td>Department</td>
                  <td>
                   ${department}
                </td>
                </tr>
                <tr>
                    <td>Code</td>
                    <td>
                        ${code}
                    </td>
                  </tr>
                  <tr>
                    <td>English Title</td>
                    <td>
                        ${englishtitle}
                    </td>
                  </tr>
                  <tr>
                    <td>French or Arabic Title</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>${type}
                    
                        <!-- ☒C ☐CTP ☐TP ☐P ☐TD ☐S ☐TH -->
                    </td>
                  </tr>
                  <tr>
                    <td>Pre-requisites</td>
                    <td>
                        ${pr}
                    </td>
                  </tr><tr>
                    <td>Co-requisites</td>
                    <td>${cr}
                    </td>
                  </tr><tr>
                    <td>Number of credits </td>
                    <td>
                        ${Numcredits}
                    </td>
                  </tr><tr>
                    <td>Contact hours per week </td>
                    <td>
                        ${chpw}
                    </td>
                  </tr><tr>
                    <td>Delivery Language</td>
                    <td>${DL}${otherLanguage}
                        <!-- ☐French ☒English ☐Arabic ☐Other (specify): -->
                    </td>
                  </tr><tr>
                    <td>Offered </td>
                    <td>${O}
                        <!-- ☒Fall ☐Spring ☐Summer -->
                    </td>
                  </tr><tr>
                    <td>Current Semester </td>
                    <td>
                        ${cs}
        
                    </td>
                  </tr><tr>
                    <td>CRN</td>
                    <td>
                        ${CRN}
                    </td>
                  </tr><tr>
                    <td>Class Schedule</td>
                    <td>
                        ${clsc}
                    </td>
                  </tr>
              </table></div><br>
            <div class="titles">II. Course prerequisite knowledge and skills</div>
            <div class="text1">
                 ${cpks}
            </div>
            <div class="titles">III. Instructor </div>
            <div><table class="courseTable">
              <tr>
                <td>Name and Title</td>
                <td> ${name}, ${title} 
                    
                </td>
              </tr>
              <tr>
                <td>Category</td>
                <td>${category}
                    
                </td>
              </tr>
              <tr>
                  <td>Office</td>
                  <td>${office}
                    
                </td>
                </tr>
                <tr>
                  <td>Email / Team</td>
                  <td>
                     ${email} 
                </td>
                </tr>
                <tr>
                  <td>Office hours </td>
                  <td>${officeHours}
                    
                </td>
                </tr>
                </table></div>
            <div class="titles">IV Course Core Information </div>
            <table class="courseTable">
              <tr>
                <td><b>Course Description</b><br>
                 ${cd}
              </tr>
              <tr>
                <td><b>Course Goals</b><br>
                  The course aims to:<br>
                  ${cg}
       </td>
              </tr> 
              <td><b>Delivery Mode</b><br>
               ${dm}
        </td>
              </tr>
              </table>
            <div class="titles">V. Course Learning Outcomes (LOs)</div>
            <div class="partFive">
              ${clo}
              </div>
            <div class="border111"><div class="titles">VI. Course General Requirements</div>
        <div class="titles1">Writing Requirements</div>
        <div>${WritingRequirements}</div>
        <div class="titles1">Oral Requirements</div>
        <div>${OralRequirements}
          </div>
        <div class="titles1">Technical Requirements</div>
        <div>${TechnicalRequirements}
        </div></div><br> 
          <button class="sButton" onclick="hideShow()">SHOW MORE / SHOW LESS</button><div id="divi" style="display: none" > <div class="titles"> </div><br>
         
        
            <div class="titles">VII. Course Grading System </div><br>
        
          A minimum grade of <b>${pg}</b> is required for this course.
          The Grading policy can be found in the <b>Academic Rules and Regulations</b> published on the website.
          <div class="titles1">Grading criteria </div>
          <div><table class="courseTable2">
            <tr>
              <td>Grading Criteria 
              </td><td>Total = 100%</td>
            </tr>
            <tr>
              <td>Active Participation</td>
              <td>${ap}</td>
            </tr>
            <tr>
              <td>Tests, quizzes, midterm percentage</td>
              <td>${tqm}</td>
            </tr>
            <tr>
              <td>Homework, Assignments, Projects</td>
              <td>${hw}</td>
            </tr>
            <tr>
              <td>Final Exam</td>
              <td>${fe}</td>
            </tr>
              </table></div>
            <div class="titles">VIII.  Course Policies and Support to students</div><br>
            The USEK <b>Academic Rules and Regulations</b> is the official document of record concerning academic programs
        and regulations. It can be found at <a href="www.usek.edu.lb">www.usek.edu.lb .</a>
        <div class="titles1">Class attendance policy</div>
        Students can, for valid and justified reasons, be absent for a number of teaching hours equal to three teaching
        weeks (20% of the course’s number of hours, i.e., 9 hours = 6 sessions of an hour and 15 minutes each).
        However, they are responsible for learning material covered in class and will fail all graded class activities
        (quizzes, tests, presentations, discussions, etc.) organized during these absences. <br>
        Students who exceed the authorized limit of absences will not be allowed to sit for their final exam. They
        must officially withdraw from the course before the official deadline, otherwise, they will be given the grade
        FW (Fail to Withdraw).
        Students with an excused absence will be permitted to make up coursework or complete an equivalent
        assignment agreed upon with the instructor.
        <div class="titles1">Absence to Mid-term and final exam</div>
        A student who does not show up for the Mid-term and final exams, for any reason, is given, by the teacher, a
        failing grade of zero. If this absence is due to special justifiable circumstances, such as:<br>
        • Death of a family member or relative.<br>
        • Hospitalization, attested by a medical report from the hospital.<br>
        • Tested positive to COVID‐19, attested by a PCR test with a QR code.<br>
        • Serious accident, attested by an official report from a sworn expert.<br>
        Then the student can present a petition with supporting documents at the Student Affairs Office within the 24
        hours following the missed exam. The request will be accepted for a valid justification or in case of a recurrence.
        A student who has shown up for the exam cannot, in any case, present a petition for a make-up exam.
        The Mid-term and final exams policy can be found at <a href="www.usek.edu.lb">www.usek.edu.lb</a> .
        <div class="titles1">Late Submission</div>
        Assignments are expected to be submitted by the designated deadlines. Late submissions may result in grade
        penalties unless prior arrangements have been made with the instructor.
        <div class="titles1">Academic Integrity</div>
        Plagiarism and any form of academic dishonesty are strictly prohibited. All work submitted must be your own,
        unless otherwise specified.
        Students are expected to practice the highest possible standards of academic integrity. Any deviation from this
        expectation will result in an academic penalty of the student failing the assignment and may result in additional
        disciplinary measures. This includes, but not limited to, improper citation of sources, using another student's
        work, and any other form of academic misrepresentation. Suspicions of use of artificial intelligence aids will be
        considered as alleged violations of Cheating.
        The Academic Integrity policy can be found at <a href="www.usek.edu.lb">www.usek.edu.lb</a> . 
        <div class="titles1">Netiquette</div>
        Students are expected to communicate with each other and with the instructor in a learning community. They
        are expected to be respectful, polite, and knowledgeable during oral and written communication and when
        posting to the class discussion forums.
        <div class="titles1">Arrangements for Students with Special Needs</div>
        USEK empowers students to manage challenges and limitations imposed by special needs. Students with
        disabilities are encouraged to contact the Access Office by sending an email to <a href="accessoffice@usek.edu.lb">accessoffice@usek.edu.lb</a>, for
        any accommodation needed to fulfill course requirements (within the first week of the semester).
        <div class="titles1">Writing Center</div>
        The USEK Writing Center offers writing assistance to students. Its main mission is to develop their writing skills
        and provide free writing support for students of all levels and at any stage of the writing process by offering inperson consultations during which writers can brainstorm ideas, adopt different writing approaches and
        strategies, and receive feedback from a well-trained tutor. For assistance student are encouraged to contact
        the center by sending an email to <a href="writingcenter@usek.edu.lb">writingcenter@usek.edu.lb</a>.
        <div class="titles1">Technical Support</div>
        The Enterprise and Information Technology Services (EITS) at USEK provides essential assistance to students
        for resolving technical issues and ensuring smooth access to digital resources. It offers guidance and
        troubleshooting for hardware and software problems, assists with network connectivity, and helps students
        navigate learning management systems and online platforms. <br>
        <div><table class="courseTable2">
          <tr>
            <td>Latest Update on</td>
            <td>Signature</td>
          </tr>
          <tr>
            <td>${date}</td>
            <td>${name}</td>
          </tr>
            </table></div></div>
      <script src="index.js"></script>
      
</body>
</html>
            `;

            resultWindow.document.open();
            resultWindow.document.write(resultHTML);
            resultWindow.document.close();
        } else {
            alert('Pop-up window blocked. Please allow pop-ups to view results.');
        }
    });
});
