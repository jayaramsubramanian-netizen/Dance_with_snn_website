import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);
const EASE = [0.22, 1, 0.36, 1];

const DOCUMENTS = [
  {
    id: "handbook",
    title: "The SreeNarthana Handbook",
    subtitle: "Guidelines, Policies, Terms and Conditions for Students and Parents",
    tag: "Required",
    sections: [
      //       {
      //         heading: "Table of Contents",
      //         body: `OUR PHILOSOPHY
      // 1. ENROLLMENT
      // 2. CLASS PLACEMENT
      // 3. TUITION
      // 4. ATTENDANCE POLICY
      // 5. MAKE-UP CLASS POLICY
      // 6. TEMPORARY BREAK / LEAVE OF ABSENCE
      // 7. WITHDRAWAL
      // 8. CLASS SCHEDULE
      // 9. COMMUNICATION
      // 10. WEBSITE AND STUDENT PORTAL
      // 11. INCLEMENT WEATHER AND CLASS CANCELLATIONS
      // 12. ONLINE CLASS
      // 13. DRESS CODE
      // 14. SALANGAI (ANKLE BELLS)
      // 15. PRACTICE EXPECTATIONS
      // 16. CODE OF CONDUCT
      // 17. CLASS ETIQUETTE AND RESPECT FOR THE DANCE SPACE
      // 18. PARENT GUIDELINES
      // 19. LATE PICK-UP
      // 20. ANNUAL RECITALS AND EVENT PERFORMANCES
      // 21. COSTUME AND JEWELRY
      // 22. SALANGAI POOJA / SALANGAI INTRODUCTION CEREMONY
      // 23. ARANGETRAM (RANGAPRAVESAM)
      // 24. CERTIFICATION
      // 25. PHOTOGRAPHY AND MEDIA
      // 26. LIABILITY AND RISK
      // 27. ACKNOWLEDGMENT`,
      //       },

      {
        heading: "",
        body: `Welcome to SreeNarthana Natyalaya. Our mission is to nurture students in Bharatanatyam while fostering discipline, respect for the art form, and artistic excellence. This handbook outlines the guidelines, policies and expectations that help maintain a positive and respectful learning environment.`,
      },

      {
        heading: "Our Philosophy",
        body: `Bharatanatyam is an Indian classical art with deep cultural and spiritual roots. It is not merely a dance form but a sacred art that beautifully weaves together rhythm, expression, discipline, and devotion. At our Natyalaya, we strive to:

● Preserve and teach the traditional techniques of Bharatanatyam with authenticity and care.
● Encourage students to approach learning with humility and dedication.
● Instill respect for the Guru (teacher), the art form, and fellow dancers.
● Provide structured, progressive and holistic training.
● Nurture confidence, creativity, and a deep appreciation for cultural heritage.`,
      },

      {
        heading: "Enrollment",
        body: `Students or parents/guardians must complete a registration form prior to the commencement of classes. Enrollment is confirmed only upon receipt of the applicable tuition payment.

Participation & Media consent and Liability waiver is required as a part of the enrollment process.`,
      },

      {
        heading: "Class Placement",
        body: `Students will be placed in appropriate levels based on age, skill level, and prior experience. New students may be required to attend a trial or assessment class to determine suitable placement.

The faculty/teacher of SreeNarthana Natyalaya reserves the right to make final decisions regarding class assignments. Students may be moved to different levels at any time based on their progress, effort, discipline, and overall attitude.`,
      },

      {
        heading: "Tuition Policy",
        body: `Tuition is billed monthly and begins from the date of registration. Invoices will be sent by the 1st of the month and payment is due by the 7th of each month and remains the same regardless of absences or missed classes.

Payments received after the 15th of the month will incur a late fee of $10.

SreeNarthana Natyalaya reserves the right to charge any outstanding tuition and applicable late fees if payment is more than two weeks overdue. All payments are non-refundable and non-transferable, except in the event that classes are canceled by the Natyalaya.

Accepted payment methods include online payment (Zelle), check, and cash. Please refer to the Payment Terms and Instructions for additional details.`,
      },

      {
        heading: "Attendance Policy",
        body: `Regular attendance is essential for consistent progress in training. Students are expected to attend all scheduled classes regularly, arrive on time and be prepared to begin class promptly, as late entry may disrupt learning.

Parents/guardians are encouraged to notify the teacher in advance in case of absence or late arrival.

Note: Frequent absences may impact a student’s progress and eligibility to participate in performances.`,
      },

      {
        heading: "Make-Up Class Policy",
        body: `If a student is absent for two or more classes within a month, only one missed class will be eligible for a make-up session.

Parents/guardians are responsible for coordinating with the instructor to schedule the make-up class at a mutually convenient time.`,
      },

      {
        heading: "Temporary Break / Leave of Absence",
        body: `If a student needs to take a temporary break from classes due to travel, illness, or other commitments, parents/guardians must inform the teacher in advance. Advance notice allows the teacher to plan lessons and maintain continuity in the student’s training.

Guidelines:
● Whenever possible, temporary breaks should be communicated at least two weeks in advance.
● Tuition may still apply depending on the length of the break and class scheduling.
● Students returning after a long absence may require time to review previously learned material before rejoining the current class level.`,
      },

      {
        heading: "Withdrawal",
        body: `If a student wishes to withdraw from classes, the Natyalaya must be notified at least one month in advance. Withdrawal requests should be submitted in writing via email or a written notice to the teacher.

Tuition for the one-month notice period is still required. If notice is not provided at least one month in advance, the following month’s tuition will also be charged. No refunds will be issued for classes that have already been paid for or partially attended.

Providing advance notice allows the Natyalaya to manage class planning and scheduling effectively.`,
      },

      {
        heading: "Class Schedule",
        body: `A monthly calendar—including class schedules, holidays, rehearsals, additional practice sessions, events, and breaks—will be shared at the beginning of the month via the parent messaging group.

SreeNarthana Natyalaya generally follows the local ISD school calendar. Occasionally, classes may be scheduled during school holidays; parents/guardians will be notified in advance.

Parents/guardians are encouraged to check the calendar regularly to stay informed.`,
      },

      {
        heading: "Communication",
        body: `All information and communication will be done via email, parent messaging groups (Whatsapp), posted on our website and social media platforms. Parents/guardians will be notified of upcoming events, and other important updates. Families are encouraged to “like” our Facebook page and “follow” us on Instagram to stay informed.

It is the responsibility of parents/guardians to:
● Stay aware of all Natyalaya activities, including but not limited to Class schedules, holidays, performances, recitals, extra classes, and open/closed dates.
● Notify the Natyalaya of any changes to address, email, or phone number.
● Maintain a valid email address on file to receive communications or official updates.`,
      },

      {
        heading: "Website and Student Portal",
        body: `(coming soon)

Upon registration, students will be given access to a Student portal on our website to access learning materials and participate in assessments. Parents are required to review and follow the SreeNarthana Natyalaya Terms of Service to be able to access and use the website securely and effectively.`,
      },

      {
        heading: "Communication",
        body: `All communication will be via email, WhatsApp groups, website, and social media.

Parents must stay updated and inform the Natyalaya of any changes in contact details.`,
      },

      {
        heading: "Inclement Weather and Class Cancellations",
        body: `If a class is canceled by the teacher due to weather conditions or unavailability, parents/guardians will be notified in advance.

Canceled classes will be rescheduled whenever possible with prior notice. If rescheduling is not feasible, the fee for the class will be credited toward the following month’s tuition.

When necessary, classes may be conducted online to ensure continuity of learning during inclement weather.`,
      },

      {
        heading: "Online Class",
        body: `Online classes may be offered as an alternative during inclement weather or other extenuating circumstances, or on an ongoing basis for certain students at the teacher’s discretion.

Students are expected to:
● Follow all Natyalaya policies that apply to in-person classes.
● Keep cameras on throughout the session.
● Maintain adequate space for safe movement and dancing.
● Follow instructions from the teacher, who will moderate student participation during the session.

Parents/guardians are responsible for ensuring that the student’s learning environment is safe, distraction-free, and suitable for dance practice. Parents are required to sign off on an Online Class Consent.`,
      },

      {
        heading: "Dress Code",
        body: `Students must attend class dressed appropriately for Bharatanatyam practice. Proper attire promotes discipline, safety, and freedom of movement.

Required Attire:
● Bharatanatyam practice attire (salwar, practice saree, or dance uniform).
● Hair neatly tied back in a braid, bun, or ponytail; loose hair is not permitted.
● Minimal jewelry (such as small earrings or bangles).
● No shorts, sleeveless tops, or revealing clothing.
● Makeup is not required for regular practice sessions.
● Shoes must be removed before entering the dance space.
● Warm clothing is permitted during winter for comfort; however, socks are not allowed during practice due to safety concerns (risk of slipping).`,
      },

      {
        heading: "Salangai (Ankle Bells)",
        body: `Salangai (ankle bells) will be introduced at the discretion of the teacher when the student is ready.

Students are expected to:
● Bring their salangai to every applicable practice session.
● Handle them with care and respect.
● Remove salangai before wearing shoes and during restroom breaks.`,
      },

      {
        heading: "Practice Expectations",
        body: `Regular practice is essential for progress in Bharatanatyam. Students are encouraged to:

● Practice at home at least 3–4 times per week.
● Review fundamental skills, including adavus, hand gestures (hastas), expressions, and recently taught dance routines.
● Practice exercises that strengthen the body and build stamina.
● Maintain correct posture and rhythm by practicing in front of a mirror whenever possible.`,
      },

      {
        heading: "Code of Conduct",
        body: `All students are expected to conduct themselves in a respectful, disciplined, and responsible manner at all times, both inside and outside the classroom.

Students must:
● Show respect to the Guru (teacher), peers, parents, and the art form of Bharatanatyam.
● Follow all class rules, instructions, and Natyalaya policies.
● Demonstrate discipline, focus, and a positive attitude during classes and rehearsals.
● Refrain from disruptive behavior, including excessive talking, use of mobile devices, or any actions that interfere with learning.
● Treat the dance space, costumes, music, and equipment with care and respect.
● Maintain appropriate behavior during performances, rehearsals, and any Natyalaya-related events.
● Be courteous, inclusive, and supportive toward fellow dancers.

Note: Failure to adhere to the Code of Conduct may result in corrective action, including a warning, temporary suspension from class, or removal from performances, at the discretion of the teacher.`,
      },

      {
        heading: "Class Etiquette and Respect for the Dance Space",
        body: `Students are expected to uphold a culturally respectful, disciplined, safe, and focused learning environment that honors the tradition of Bharatanatyam.

General Etiquette
● Begin each class with Namaskaram (salutation) to God and Guru.
● Follow the teacher’s instructions carefully and remain attentive throughout the class.
● Refrain from unnecessary talking or use of mobile phones during class.
● Be mindful and respectful of shared class time and space with fellow dancers.

Respect for the Dance Space
● Maintain cleanliness; no food or drinks are allowed inside the practice area.
● Handle props, salangai (ankle bells), and all equipment with care.
● Treat the dance floor as a sacred space for learning and practice.
● Do not run inside the dance space; walk carefully to ensure safety.`,
      },

      {
        heading: "Parent Guidelines",
        body: `Parents/guardians play an important role in supporting their child’s learning. To help maintain a positive and focused learning environment, parents are requested to:

● Ensure students arrive on time and are prepared for class.
● Communicate concerns or questions promptly with the teacher.
● Support regular home practice.
● Observe classes occasionally, if desired, while maintaining a quiet presence.
● Notify the teacher in advance in case of absence or late arrival.
● Responsible for coordinating with the instructor to schedule the make-up class at a mutually convenient time.

Observation Guidelines:
● Parents may observe classes quietly without one-on-one interaction with their child during sessions.
● Conversations with the teacher should take place before or after class.
● Parents should avoid correcting or instructing students during lessons.
● Visitors are not encouraged during regular practice sessions.
● Parents are encouraged to treat dance sessions like a school environment, as continuous presence may inhibit students from interacting freely with the teacher and peers.`,
      },

      {
        heading: "Late Pick-Up",
        body: `Parents/guardians are expected to pick up students promptly at the end of each class. To ensure the safety of all students:

● Arrive on time for pick-up.
● Notify the instructor in advance if another parent or guardian will be picking up your child.
● If you anticipate being late, contact the instructor as soon as possible.
● Repeated late pick-ups may result in additional charges.

Please respect the instructor’s time, as it is reserved for preparation and other commitments. Timely pick-up is greatly appreciated.`,
      },

      {
        heading: "Annual Recitals and Event Performances",
        body: `Students may have opportunities to perform in:

● Annual recitals
● Cultural programs
● Community events

Participation in performances is subject to the teacher’s evaluation and may require:

● Attendance at additional rehearsals
● Costume and event registration fees
● Timely attendance at all scheduled practice sessions`,
      },

      {
        heading: "Costume and Jewelry",
        body: `For performances, students must wear the approved Bharatanatyam costume and jewelry set.

Parents/guardians are responsible for:

● Purchasing or renting the costume
● Proper care and maintenance of costume items
● Returning any borrowed items on time`,
      },

      {
        heading: "Salangai Pooja / Salangai Introduction Ceremony",
        body: `The Salangai (ankle bells) are an integral part of Bharatanatyam training. At an appropriate time, the Natyalaya will conduct a Salangai Pooja to formally introduce students to the bells.

Guidelines:
● Students will receive their first pair of Salangai when deemed ready by the teacher.
● The ceremony emphasizes respect, discipline, and devotion in learning Bharatanatyam.
● Parents are encouraged to attend and support this milestone.`,
      },

      {
        heading: "Arangetram (Rangapravesam)",
        body: `The Arangetram or Rangapravesam is the student’s first solo, full-length debut Bharatanatyam performance and marks the completion of foundational training.

Guidelines:
● Students must demonstrate proficiency in adavus, abhinaya, and performance stamina before being eligible.
● The teacher will evaluate readiness and provide guidance on repertoire, choreography, and practice schedules.
● Participation requires regular attendance, consistent home practice, and rehearsal commitment.
● Costume, jewelry, and venue arrangements are the responsibility of parents/guardians, with guidance from the teacher.
● Students may perform only after receiving explicit approval from the teacher.`,
      },

      {
        heading: "Certification",
        body: `SreeNarthana Natyalaya (SNN) may assist students in preparing for dance certifications that provide academic or skill-based credits; however, SNN is not a certifying body and is not affiliated with any certification organization.

Eligibility for certification preparation is determined by the student’s skill level, attendance, and readiness, and students are expected to commit to regular home practice and additional training beyond regular classes.

SNN has begun the process of revamping our curriculum, practice plans, and assessment to support students, but scheduling with 3rd party certifying bodies, registration, and all associated costs—including exam fees, costumes, materials, or travel—are the responsibility of parents/guardians.

Certification programs typically require a long-term commitment, often spanning months or years, and students and parents should understand the dedication required before enrolling.

While SNN will support students throughout the preparation process, passing exams or obtaining credit cannot be guaranteed. Parents and students are responsible for maintaining documentation of certification progress and results.`,
      },

      {
        heading: "Photography and Media",
        body: `Photos or videos may be taken during classes or performances for Natyalaya promotion or educational purposes.

Participation in photography or media recording requires optional parental consent, which is obtained as part of the registration process through the Participation & Media Consent.`,
      },

      {
        heading: "Liability and Risk",
        body: `By registering, parents/guardians acknowledge that Bharatanatyam and dance in general are physical activities that carry inherent risks of injury.

Parents/guardians assume all responsibility for any injury sustained by their child during classes, rehearsals, performances, or other Natyalaya-related activities.

SreeNarthana Natyalaya, its faculty, and staff are not liable for injuries, accidents, or personal property damage that may occur.

As part of registration, parents/guardians are required to complete a Liability Waiver.`,
      },

      {
        heading: "Acknowledgment",
        body: `Use of the SreeNarthana Natyalaya website is subject to our separate Terms of Service, while enrollment and participation in classes are governed by the terms and conditions explained in this handbook.

By signing this handbook, the parent and student agree to comply with all Natyalaya policies, terms and conditions, and safety guidelines.

Student Name: _____________________
Parent/Guardian Name: _____________________
Date: _____________________`,
      },
    ],
  },
  {
    id: "tos",
    title: "Terms of Service",
    subtitle: "Website Usage Terms",
    tag: "Required",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        body: `Welcome to Dancewithsnn.com the official website of SreeNarthana Natyalaya (SNN). By accessing or using our website, you agree to be bound by the most recent version of our Terms of Service. If you are a parent or legal guardian, you agree to these Terms on behalf of your child. Please read these Terms carefully and keep a copy for your reference.`,
      },
      {
        heading: "2. About Our Services",
        body: `SreeNarthana Natyalaya provides Bharatanatyam dance instruction through in-person and online classes for students, primarily for children in the ages 5–15. Our website may contain information related to Bharathanatyam, images, videos of programs and events, student registration or enrollment links, educational resources and materials created by SNN. We reserve the right to modify or discontinue one or more services at any time.`,
      },
      {
        heading: "3. Electronic Communications",
        body: `By visiting the SreeNarthana Natyalaya Website, creating an account, or communicating with us via email or other electronic means, you acknowledge that you are engaging in electronic communications.\n
        You consent to receive communications from us electronically, including but not limited to emails, website notices, announcements, and account-related messages. These communications may include information about classes, schedules, updates, policies, and other important service- related notifications.\n
        You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.`,
      },
      {
        heading: "4. UNLAWFUL OR PROHIBITED USE",
        body: `As a condition of your use of this website, you warrant or agree to use this website only for lawful purposes. You may not use the website in any way that violates applicable laws or regulations (or) attempt to gain unauthorized access to any part of the website or Interfere with the proper functioning or security of the website.`,
      },
      {
        heading: "5. Eligibility",
        body: `Our services are intended for children under parental supervision and adults acting on behalf of minors. Parents or legal guardians must register students with the dance school, provide consent for participation and supervise minors when using the learning tools available on our website.`,
      },
      {
        heading: "6. Privacy Policy",
        body: `SreeNarthana Natyalaya is committed to protecting the privacy of children who visit our website and ensuring compliance with the Children’s Online Privacy Protection Act (COPPA) regulations. Your use of this website is governed by our Privacy Policy which explains how we collect, use, and handle children’s personal information.`,
      },
      {
        heading: "7. ACCOUNT RESPONSIBILITY",
        body: `To access certain services on our Website, you may be required to create an account for a student. You agree to provide accurate, current, and complete information and to keep such information updated.\n
You are responsible for maintaining the confidentiality of your account credentials and for restricting access to your device. You agree to accept responsibility for all activities that occur under your account.\n
Accounts may not be assigned or transferred to any other person or entity. You acknowledge that SreeNarthana Natyalaya is not responsible for unauthorized access to your account resulting from loss, theft, or misuse of your login information.Parents or legal guardians must create and manage accounts for users under the age of 18.\n
SreeNarthana Natyalaya reserves the right, at its sole discretion, to refuse or cancel services or terminate accounts that contain false, inaccurate, or misleading information.`,
      },
      {
        heading: "8. NON-DISCRIMINATION",
        body: `SreeNarthana Natyalaya is committed to providing equal access to its services and opportunities to all individuals, without discrimination based on any characteristics protected under applicable laws. We do not discriminate against individuals with disabilities and are committed to providing them equal access to our website and services, in accordance with the Americans with Disabilities Act (ADA). Our services are offered on an equal and non-discriminatory basis to all students and families.`,
      },
      {
        heading: "9. THIRD PARTY SERVICES AND LINKS",
        body: `This website may include links to third-party websites or services (such as payment processors, external event registration platforms, or video platforms). These links are provided for your convenience only, and their inclusion does not imply endorsement by SreeNarthana Natyalaya or any association with their operators.\n
SreeNarthana Natyalaya is not responsible for the content, policies, or practices of any third- party websites, nor for any transactions or interactions you may have with such services.`,
      },
      {
        heading: "10. INTELLECTUAL PROPERTY",
        body: `All content on this website, including but not limited to choreography, learning materials, videos and recordings, logos, text, and images is the property of SreeNarthana Natyalaya unless otherwise stated and is protected by applicable copyright and intellectual property laws. You may not copy, reproduce, distribute, modify, record, share, or use any content for commercial purposes without prior written permission from SreeNarthana Natyalaya.`,
      },
      {
        heading: "11. USER GENERATED CONTENT",
        body: `By submitting or uploading content (such as comments, photos, or videos) to the website, you grant SreeNarthana Natyalaya a non-exclusive, royalty-free license to use, display, and share such content for promotional or educational purposes. You represent and warrant that your content does not violate any laws or infringe on the rights of third parties. SreeNarthana Natyalaya reserves the right to remove any content at its sole discretion.`,
      },
      {
        heading: "12. INDEMNIFICATION",
        body: `You agree to indemnify, defend, and hold harmless SreeNarthana Natyalaya, its instructors, staff, and affiliates from any claims, liabilities, damages, losses, or expenses (including attorney’s fees) arising from your use of the website, your violation of these Terms, or your violation of any applicable law or rights of a third party.`,
      },
      {
        heading: "13. INTERNATIONAL USERS",
        body: `The website and services are controlled, operated, and administered by SreeNarthana Natyalaya from our office in the United States. If you access the website or services from outside the United States, you are responsible for complying with all applicable local laws. You agree not to use any content or materials from the website in any country or in any manner prohibited by local laws, regulations, or restrictions`,
      },
      {
        heading: "14. DISCLAIMER OF WARRANTIES",
        body: `The SreeNarthana Natyalaya website and all services provided through it, including online classes, are offered “as is” and “as available”, without any warranties of any kind, either express or implied. SreeNarthana Natyalaya does not guarantee uninterrupted access to the website or online services and is not responsible for technical errors, service interruptions, or issues arising from third-party platforms or tools used to deliver classes, payments, or other services. You acknowledge that your use of the website and participation in services is at your own risk.`,
      },
      {
        heading: "15. LIMITATION OF LIABILITY",
        body: `To the fullest extent permitted by law, SreeNarthana Natyalaya, its instructors, staff, and affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use or inability to use the website or its services, any errors, interruptions, or technical issues with online platforms or third-party services or from unauthorized access to your account or personal information. Nothing in this section limits or excludes liability that cannot legally be limited or excluded under applicable law.`,
      },
      {
        heading: "16. TERMINATION OF ACCESS",
        body: `SreeNarthana Natyalaya reserves the right, at its sole discretion, to suspend, restrict, or terminate your access to the website, its services, or any account at any time and for any reason, including but not limited to violations of these Terms of Service. This includes the removal or deactivation of user accounts, deletion or modification of submitted content, and denial of access to any features of the website. Such actions may be taken without prior notice, and SreeNarthana Natyalaya shall not be liable to any user or third party for any suspension, termination, or removal of access, accounts, or content. Users acknowledge and agree that all decisions regarding termination or restriction of access are final and at the sole discretion of SreeNarthana Natyalaya.`,
      },
      {
        heading: "17. GOVERNING LAW",
        body: `These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States.`,
      },
      {
        heading: "18. DISPUTE RESOLUTION",
        body: `Any disputes arising out of or relating to these Terms shall first be attempted to be resolved through good-faith communication. If a resolution cannot be reached, the dispute shall be subject to the laws and courts of the State of Texas.`,
      },
      {
        heading: "19. PARENTAL RESPONSIBILITY",
        body: `Parents or legal guardians are responsible for supervising minors’ use of the website and ensuring compliance with these Terms.`,
      },
      {
        heading: "20. CHANGE OF TERMS",
        body: `SreeNarthana Natyalaya reserves the right, at its sole discretion, to modify, update, or revise these Terms of Service at any time. The most current version of the Terms will supersede all prior versions and will be effective immediately upon posting on the Website, with an updated effective date clearly indicated. We encourage all users, including parents and guardians, to periodically
review the Terms to remain informed of any updates or changes. Your continued use of the Website, participation in classes, or engagement with our services after such changes have been posted constitutes your acceptance of the revised Terms.`,
      },
      {
        heading: "21. CONTACT INFORMATION",
        body: `If you have any questions about these Terms, please contact us at:\n
SREENARTHANA NATYALAYA, Spring Texas USA\n
Email: narthanadanceschool@gmail.com\n
Phone: +1(630)-750-5272\n
Effective Date : March 30th 2026`,
      },
      {
        heading: "22. INTERPRETATION AND EFINITIONS",
        body: `Website : Refers to the SreeNarthana Natyalaya website, including all pages, subdomains, and portals used toprovide information or services.\n
User: Any person who accesses, registers, or uses the website, including parents/guardians acting on behalf of minors.\n
Parent/Guardian: A legal guardian or parent responsible for a child under 18 using the website.\n
Student/Minor: A child under 18 years who participates in dance classes or accesses learning materials via the website.\n
Account: Any account created by a user on the Website to access classes, learning materials, or other services.\n
Content: All materials available on the Website, including videos, photos, choreography, class materials, text, logos, and designs.\n
Service(s) : Any class, course, or online/offline activity offered by SreeNarthana Natyalaya via the Website.\n
Terms: All stated Terms of Service, including all updates and modifications. \n
Third-Party Service: Any service, software, or platform provided by a party other than SreeNarthana Natyalaya, such as Zoom, Google Meet, or payment processors.\n
Consent: Verifiable parental permission provided for minors in accordance with applicable child protection laws,
including COPPA`,
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    subtitle: "Data Collection and Usage (COPPA Compliant)",
    tag: "Info",
    sections: [
      {
        heading: "",
        body: `At SreeNarthana Natyalaya, we are committed to protecting the privacy of our students and their families. In accordance with the Children’s Online Privacy Protection Act (COPPA), we obtain verifiable parental consent before collecting or using personal information from children under 13 who access our online services. This policy explains how we collect, use, and protect student information to maintain a safe learning environment and ensure compliance with applicable laws and policies.`,
      },
      {
        heading: "Information we collect",
        body: `We may collect the following information from students and parents when registering for classes or for communication purposes:

Parent/Guardian Information
● Name
● Home Address (Optional)
● Email address
● Phone number
● Emergency contact details

Student Information
● Student name
● Age or date of birth`,
      },
      {
        heading: "How we use the information",
        body: `The information collected may be used for the following purposes:

● Class registration and scheduling
● Communication with parents regarding classes and updates.
● Provide access to website features and learning tools
● Display student work or participation (kept private unless parental permission is granted)
● Emergency contact if needed during class activities
● Administrative and operational purposes related to the dance school`,
      },
      {
        heading: "Children’s Privacy",
        body: `SreeNarthana Natyalaya follows the guidelines of the Children's Online Privacy Protection Act (COPPA) and does not knowingly collect personal information from children under 13 without parental consent.

Parents have the right to:
● Review personal information collected about their child
● Request corrections to inaccurate information
● Request deletion of their child’s information
● Withdraw consent for the collection or use of information`,
      },
      {
        heading: "Online Classes",
        body: `From time to time, classes may be conducted online using platforms such as Zoom, Google Meet, or similar video conferencing tools.

To ensure student safety:
● Online participation should occur with the knowledge and supervision of a parent or guardian.
● Meeting links and access details will be shared directly with registered families.
● Recordings will only be made when necessary for instructional purposes.`,
      },
      {
        heading: "Sharing of Information",
        body: `Sreenarthana Natyalaya does not sell, rent, or trade personal information. Personal information such as home address or contact details will never be publicly shared or visible on our website.

Information may only be shared under the following circumstances:
● With trusted service providers (such as payment processors or online class platforms) necessary for program operation
● If required by law or legal process`,
      },
      {
        heading: "Data Protection",
        body: `We take reasonable administrative and technical measures to protect personal information from unauthorized access, disclosure, or misuse.

Access to student information is limited to authorized individuals responsible for managing the dance school’s programs and operations. While we strive to protect information, no internet-based transmission or electronic storage system can guarantee complete security.`,
      },
      {
        heading: "Log Data",
        body: `When visitors access Sreenarthana Natyalaya’s website, certain information may automatically be collected by web browsers. This information, commonly referred to as Log Data, may include:

● Internet Protocol (IP) address
● Browser type and version
● Pages visited on the website
● Date and time of visits
● Time spent on pages
● Other diagnostic or statistical information

This information is used only for website administration, security monitoring, and improving website performance. Log data does not personally identify students or parents unless voluntarily provided.`,
      },
      {
        heading: "Cookies",
        body: `Our website may use cookies, which are small data files stored on a visitor’s computer or device.

Cookies help improve the website experience by remembering user preferences, help analyze website traffic and improving website functionality.

Visitors may choose to accept or decline cookies through their browser settings. Declining cookies may affect the functionality of certain parts of the website.`,
      },
      {
        heading: "Third Party Links",
        body: `The SreeNarthana Natyalaya website may contain links to third-party websites or services such as payment providers, social media platforms or external event registration platforms.

These websites operate independently and have their own privacy policies. Sreenarthana Natyalaya is not responsible for the privacy practices or content of these external websites. Visitors are encouraged to review the privacy policies of any third-party sites they access.`,
      },
      {
        heading: "Data Retention",
        body: `Sreenarthana Natyalaya retains personal information only as long as necessary to fulfill the purposes outlined in this policy, including:

● Managing class registration, attendance, and progress
● Communication with parents and students
● Safety and emergency purposes
● Legal or financial recordkeeping requirements

Once information is no longer required, it is securely deleted or anonymized.

Parents or guardians may request the deletion of their child’s information at any time, in accordance with COPPA and other applicable privacy laws.`,
      },
      {
        heading: "Photo, Video and Media Usage",
        body: `During classes, rehearsals, performances, workshops, or special events, photographs or videos of students may occasionally be taken.

These materials may be used for:
● Educational documentation
● Performance archives
● Dance school newsletters
● Promotional materials
● The official Sreenarthana Natyalaya website
● Social media pages such as Instagram, Facebook, or YouTube

Sreenarthana Natyalaya ensures that images and videos are used respectfully and appropriately. Sensitive personal information will not be posted alongside student images.

Parents will be required to sign a Parent Consent form for social media release and participation. If you prefer that your child’s image not be used, this can be indicated in the consent form.`,
      },
      {
        heading: "Policy Updates",
        body: `Sreenarthana Natyalaya may update this document periodically to reflect changes in policies, legal requirements, or program operations.

Updated versions will be communicated to families and may also be posted on the official website or shared with enrolled students.`,
      },
      {
        heading: "Contact Information for Privacy Requests",
        body: `Parents or guardians who have questions or concerns about the collection, use, or disclosure of their child’s personal information can contact:

Email: narthanadanceschool@gmail.com
Phone: 630-750-5272`,
      },
    ],
  },
  {
    id: "consent",
    title: "Parent Consent and Liability Waiver",
    subtitle: "PARENT CONSENT AND LIABILITY WAIVER",
    tag: "Optional",
    sections: [
      {
        heading: "Participation Consent",
        body: `Participation in events, performances, and other related activities at Sreenarthana Natyalaya is offered to all enrolled students as part of their educational experience. Online classes may occasionally be conducted using platforms such as Zoom or Google Meet, with participation occurring under the knowledge and supervision of a parent or guardian.`,
      },
      {
        heading: "Media Consent",
        body: `During classes, rehearsals, performances, workshops, or special events, photographs and videos of students may be captured to celebrate achievements and share updates with the community. These images or videos may be used for:

● The official Sreenarthana Natyalaya website
● Social media pages, including Instagram, Facebook, and YouTube
● Event programs or promotional materials
● Dance school newsletters or announcements

All media usage will prioritize student privacy and safety. Sensitive personal information will not be publicly shared alongside student images, and group or performance-based images will be prioritized over individual images unless specific parental consent is provided.`,
      },
      {
        heading: "Liability Waiver",
        body: `By enrolling in classes at Sreenarthana Natyalaya, the student and parent/guardian acknowledge and agree to the following:

Assumption of Risk
Dance classes involve physical activity, stretching, and movement that may carry a risk of injury. The student participates voluntarily and assumes full responsibility for any injury or harm that may occur.

Release of Liability
Parents/guardians release the Natyalaya, instructors, and staff from any liability for personal injury, loss, or damage to personal property that may occur during classes, rehearsals, performances, or school events. This includes both in-person and online classes.

Medical Responsibility
Parents/guardians affirm that the student is physically able to participate in dance activities. In case of emergency, the school is authorized to seek medical treatment if the parent/guardian is not immediately available.`,
      },
      {
        heading: "Parent / Guardian Acknowledgement",
        body: `Participation Consent
I give permission for my child to participate in classes, rehearsals, performances, and related activities conducted by SreeNarthana Natyalaya.

Online Consent
I understand that some classes may be conducted online using platforms such as Zoom or Google Meet. I accept responsibility for ensuring a safe environment for my child during online participation.

Photo & Video Consent
I give permission for my child to be photographed or recorded during classes and events. I understand these may be used for educational and promotional purposes, including website and social media.

☐ Yes
☐ No

Assumption of Risk
I understand that dance involves physical activity and there is a risk of minor injuries. I voluntarily allow my child to participate with full knowledge of these risks.

Medical Responsibility
I confirm that my child is physically fit to participate. I agree to inform the teacher of any medical conditions, injuries, or limitations.

Liability Waiver
I release and hold harmless SreeNarthana Natyalaya and its teachers from any liability for injuries, accidents, or loss of personal belongings that may occur during participation.

Emergency Medical Consent
In case of an emergency, I authorize the teacher to seek medical treatment for my child if I cannot be reached.

By signing below, parents or guardians acknowledge that they have read and understood the consents and waiver guidelines of Sreenarthana Natyalaya.

Student Name: _____________________________
Parent/Guardian Name: ___________________________
Date: __________________________`,
      },
    ],
  },
];

const TAG_COLORS = {
  Required: { bg: "rgba(124,27,50,0.2)", text: "#FF8FA3", border: "rgba(124,27,50,0.5)" },
  Info: { bg: "rgba(91,45,142,0.2)", text: "#C09EFF", border: "rgba(91,45,142,0.5)" },
  Optional: { bg: "rgba(46,107,79,0.2)", text: "#90D4B0", border: "rgba(46,107,79,0.5)" },
};

/* ── Input field shared styles ── */
const inputSx = {
  width: "100%",
  height: "44px",
  px: "14px",
  borderRadius: "9px",
  background: "rgba(253,232,224,0.04)",
  border: "0.5px solid rgba(124,27,50,0.35)",
  color: "#FDE8E0",
  fontFamily: "'Roboto', sans-serif",
  fontSize: "0.88rem",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s ease",
  "&::placeholder": { color: "rgba(253,232,224,0.2)" },
  "&:focus": { borderColor: "rgba(124,27,50,0.7)" },
};

const labelSx = {
  fontFamily: "'Roboto', sans-serif",
  fontSize: "0.72rem",
  color: "rgba(253,232,224,0.45)",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  mb: 0.8,
};

/* ── Document Card ── */
function DocCard({ doc, onOpen }) {
  const tag = TAG_COLORS[doc.tag];
  return (
    <Box
      onClick={() => onOpen(doc)}
      sx={{
        position: "relative",
        p: "18px 20px",
        borderRadius: "12px",
        background: "rgba(253,232,224,0.03)",
        border: "0.5px solid rgba(124,27,50,0.25)",
        cursor: "pointer",
        overflow: "hidden",
        transition: "all 0.22s cubic-bezier(0.22,1,0.36,1)",
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0, top: 0, bottom: 0,
          width: "3px",
          background: "linear-gradient(180deg, transparent, #7C1B32, transparent)",
        },
        "&:hover": {
          background: "rgba(124,27,50,0.1)",
          borderColor: "rgba(124,27,50,0.5)",
          transform: "translateY(-3px)",
          boxShadow: "0 12px 32px rgba(124,27,50,0.2)",
        },
        "&:active": { transform: "scale(0.98)" },
      }}
    >
      <Box sx={{ display: "inline-block", px: "8px", py: "2px", borderRadius: "5px", background: tag.bg, border: `0.5px solid ${tag.border}`, mb: 1 }}>
        <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.65rem", fontWeight: 500, color: tag.text, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {doc.tag}
        </Typography>
      </Box>

      <Typography sx={{ fontFamily: "'Berkshire Swash', cursive", fontSize: "1rem", color: "#FDE8E0", mb: 0.3, lineHeight: 1.2 }}>
        {doc.title}
      </Typography>
      <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.75rem", color: "rgba(253,232,224,0.4)", letterSpacing: "0.02em", mb: 1.5 }}>
        {doc.subtitle}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", mb: 1.5 }}>
        {[100, 85, 92, 70].map((w, i) => (
          <Box key={i} sx={{ height: "3px", width: `${w}%`, borderRadius: "2px", background: "rgba(253,232,224,0.07)" }} />
        ))}
      </Box>

      <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.7rem", color: "rgba(124,27,50,0.7)", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.2s" }}>
        Read document →
      </Typography>
    </Box>
  );
}

/* ── Document Viewer ── */
function DocViewer({ doc, onClose, isMobile }) {
  return (
    <MotionBox
      key={doc.id}
      initial={{ opacity: 0, x: isMobile ? 0 : 30, y: isMobile ? 20 : 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: isMobile ? 0 : 30, y: isMobile ? 20 : 0 }}
      transition={{ duration: 0.32, ease: EASE }}
      sx={{
        position: isMobile ? "fixed" : "absolute",
        /* sits below the navbar — adjust 64px to match your actual navbar height */
        top: isMobile ? "64px" : 0,
        left: 0, right: 0, bottom: 0,
        zIndex: isMobile ? 1300 : 2,
        background: "radial-gradient(ellipse at 80% 20%, rgba(124,27,50,0.12) 0%, transparent 55%), #06030A",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 3, md: 5 },
        py: { xs: 2, md: 3 },
        mt: { md: "60px" },
        borderBottom: "0.5px solid rgba(124,27,50,0.2)",
        flexShrink: 0,
        gap: 2,
      }}>
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography sx={{ fontFamily: "'Berkshire Swash', cursive", fontSize: { xs: "1.15rem", md: "1.6rem" }, color: "#FDE8E0", lineHeight: 1.1 }}>
            {doc.title}
          </Typography>
          <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.72rem", color: "rgba(253,232,224,0.38)", mt: 0.3, letterSpacing: "0.04em" }}>
            {doc.subtitle}
          </Typography>
        </Box>

        {/* Close — always clearly visible */}
        <Box
          onClick={onClose}
          sx={{
            px: { xs: "14px", md: "18px" },
            py: { xs: "7px", md: "8px" },
            borderRadius: "8px",
            border: "0.5px solid rgba(124,27,50,0.5)",
            background: "rgba(124,27,50,0.12)",
            cursor: "pointer",
            flexShrink: 0,
            transition: "all 0.18s ease",
            "&:hover": { background: "rgba(124,27,50,0.25)", borderColor: "rgba(124,27,50,0.8)" },
            "&:active": { transform: "scale(0.95)" },
          }}
        >
          <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.75rem", color: "#FF8FA3", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
            ✕ Close
          </Typography>
        </Box>
      </Box>

      {/* Scrollable content */}
      <Box sx={{
        flex: 1,
        overflowY: "auto",
        px: { xs: 3, md: 5 },
        py: { xs: 3, md: 4 },
        "&::-webkit-scrollbar": { width: "4px" },
        "&::-webkit-scrollbar-track": { background: "transparent" },
        "&::-webkit-scrollbar-thumb": { background: "rgba(124,27,50,0.4)", borderRadius: "4px" },
      }}>
        <Box sx={{ mb: 4, pb: 3, borderBottom: "0.5px solid rgba(253,232,224,0.08)" }}>
          <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.68rem", color: "rgba(253,232,224,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", mb: 0.5 }}>
            Sree Narthana Natyalaya · Official Document
          </Typography>
          <Typography sx={{ fontFamily: "'Crimson Text', serif", fontSize: { xs: "0.93rem", md: "1rem" }, color: "rgba(253,232,224,0.45)", fontStyle: "italic", lineHeight: 1.7, maxWidth: "560px" }}>
            Please read this document carefully. By enrolling or participating in Sree Narthana Natyalaya programmes, you acknowledge and agree to the terms set out below.
          </Typography>
        </Box>

        <Box sx={{
          display: "flex", flexDirection: "column", gap: 3.5, maxWidth: "620px", whiteSpace: "pre-line",
          lineHeight: 1.8,
        }}>
          {doc.sections.map((s, i) => (
            <Box key={i}>
              <Typography sx={{ fontFamily: "'Berkshire Swash', cursive", fontSize: "1rem", color: "#FDE8E0", mb: 1, letterSpacing: "0.02em" }}>
                {s.heading}
              </Typography>
              <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.88rem", color: "rgba(253,232,224,0.58)", lineHeight: 1.8 }}>
                {s.body}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 5, pt: 3, borderTop: "0.5px solid rgba(253,232,224,0.06)" }}>
          <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.7rem", color: "rgba(253,232,224,0.2)", letterSpacing: "0.06em" }}>
            © {new Date().getFullYear()} Sree Narthana Natyalaya. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </MotionBox>
  );
}

/* ══════════════════════════════════════
   MAIN
══════════════════════════════════════ */
export default function PortalComponent() {
  const [activeDoc, setActiveDoc] = useState(null);

  return (
    <Box sx={{
      width: "100vw",
      minHeight: "100vh",
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      background: "#06030A",
      /* Desktop: lock to viewport height; mobile: scroll naturally */
      height: { xs: "auto", md: "100vh" },
      overflow: { xs: "visible", md: "hidden" },
    }}>

      {/* ══ LEFT 30% — Login ══ */}
      <Box sx={{
        width: { xs: "100%", md: "30%" },
        flexShrink: 0,
        background: `
          radial-gradient(ellipse at 30% 30%, rgba(124,27,50,0.28) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 80%, rgba(91,45,142,0.1) 0%, transparent 55%),
          #06030A
        `,
        borderRight: { md: "0.5px solid rgba(124,27,50,0.2)" },
        borderBottom: { xs: "0.5px solid rgba(124,27,50,0.15)", md: "none" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: { xs: "flex-start", md: "center" },
        px: { xs: 3, md: 5 },
        pt: { xs: 5, md: 0 },
        pb: { xs: 5, md: 0 },
        mt: { xs: "40px" },
        position: "relative",
        overflow: "hidden",
      }}>
        <Box sx={{ position: "absolute", top: 28, left: 28, opacity: 0.2 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M2 2 L2 20 M2 2 L20 2" stroke="#7C1B32" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </Box>
        <Box sx={{ position: "absolute", bottom: 28, right: 28, opacity: 0.2, transform: "rotate(180deg)" }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M2 2 L2 20 M2 2 L20 2" stroke="#7C1B32" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </Box>

        <Box sx={{ width: "100%", maxWidth: "320px" }}>
          <MotionBox initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: EASE }} sx={{ mb: 5, textAlign: "center" }}>
            <Typography sx={{ fontFamily: "'Berkshire Swash', cursive", fontSize: "1.8rem", color: "#FDE8E0", lineHeight: 1, mb: 0.4 }}>
              Sree Narthana Natyalaya
            </Typography>
            <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.72rem", color: "#E94B6E", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              Student Portal
            </Typography>
          </MotionBox>

          <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.15, ease: EASE }} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box>
              <Typography sx={labelSx}>Email</Typography>
              <Box component="input" type="email" placeholder="your@email.com" sx={inputSx} />
            </Box>
            <Box>
              <Typography sx={labelSx}>Password</Typography>
              <Box component="input" type="password" placeholder="••••••••" sx={inputSx} />
            </Box>

            <Box component="button" sx={{ mt: 0.5, height: "46px", borderRadius: "9px", background: "#7C1B32", border: "none", color: "#FDE8E0", fontFamily: "'Roboto', sans-serif", fontSize: "0.88rem", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", transition: "background 0.2s ease, transform 0.18s ease", "&:hover": { background: "#9B2240", transform: "translateY(-2px)" }, "&:active": { transform: "scale(0.97)" } }}>
              Sign In
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, my: 0.5 }}>
              <Box sx={{ flex: 1, height: "0.5px", background: "rgba(253,232,224,0.1)" }} />
              <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.7rem", color: "rgba(253,232,224,0.25)" }}>or</Typography>
              <Box sx={{ flex: 1, height: "0.5px", background: "rgba(253,232,224,0.1)" }} />
            </Box>

            <Box component="button" sx={{ height: "46px", borderRadius: "9px", background: "transparent", border: "0.5px solid rgba(124,27,50,0.4)", color: "rgba(253,232,224,0.6)", fontFamily: "'Roboto', sans-serif", fontSize: "0.88rem", cursor: "pointer", transition: "all 0.2s ease", "&:hover": { borderColor: "rgba(124,27,50,0.7)", color: "#FDE8E0", background: "rgba(124,27,50,0.08)" } }}>
              Create an Account
            </Box>

            <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.75rem", color: "rgba(253,232,224,0.25)", textAlign: "center", cursor: "pointer", "&:hover": { color: "rgba(253,232,224,0.5)" }, transition: "color 0.2s" }}>
              Forgot your password?
            </Typography>
          </MotionBox>
        </Box>
      </Box>

      {/* ══ RIGHT 70% — Documents ══ */}
      <Box sx={{
        flex: 1,
        position: "relative",
        background: `
          radial-gradient(ellipse at 70% 20%, rgba(124,27,50,0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 20% 80%, rgba(91,45,142,0.07) 0%, transparent 50%),
          #06030A
        `,
        /* desktop: overflow hidden so viewer overlays cleanly */
        overflow: { xs: "visible", md: "hidden" },
        height: { xs: "auto", md: "100%" },
      }}>

        {/* Scrollable content area */}
        <Box sx={{
          height: { xs: "auto", md: "100%" },
          overflowY: { xs: "visible", md: "auto" },
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "flex-start", md: "center" },
          px: { xs: 3, md: 6 },
          pt: { xs: 5, md: 0 },
          pb: { xs: 6, md: 0 },
          "&::-webkit-scrollbar": { width: "4px" },
          "&::-webkit-scrollbar-track": { background: "transparent" },
          "&::-webkit-scrollbar-thumb": { background: "rgba(124,27,50,0.3)", borderRadius: "4px" },
        }}>
          {/* Header */}
          <MotionBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }} sx={{ mb: { xs: 3, md: 4 } }}>
            <Typography sx={{ fontFamily: "'Berkshire Swash', cursive", fontSize: { xs: "1.7rem", md: "2.4rem" }, color: "#FDE8E0", lineHeight: 1.1, mb: 0.8 }}>
              Documents & Policies
            </Typography>
            <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.85rem", color: "rgba(253,232,224,0.38)", lineHeight: 1.6, maxWidth: "420px" }}>
              Please review and acknowledge all required documents before completing your enrollment.
            </Typography>
          </MotionBox>

          {/* Cards grid */}
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: { xs: 1.8, md: 2 }, maxWidth: "720px" }}>
            {DOCUMENTS.map((doc, i) => (
              <MotionBox key={doc.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 + i * 0.07, ease: EASE }}>
                <DocCard doc={doc} onOpen={setActiveDoc} />
              </MotionBox>
            ))}
          </Box>

          {/* Register Now */}
          <MotionBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.45, ease: EASE }} sx={{ mt: { xs: 4, md: 5 }, maxWidth: "720px" }}>
            <Box sx={{ height: "0.5px", background: "rgba(124,27,50,0.2)", mb: 3 }} />

            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "flex-start", sm: "center" }, justifyContent: "space-between", gap: 2 }}>
              <Box>
                <Typography sx={{ fontFamily: "'Berkshire Swash', cursive", fontSize: { xs: "1.05rem", md: "1.2rem" }, color: "#FDE8E0", mb: 0.3 }}>
                  Ready to Join?
                </Typography>
                <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.78rem", color: "rgba(253,232,224,0.32)", lineHeight: 1.5 }}>
                  Complete your enrollment by registering below.
                </Typography>
              </Box>

              <Box
                component="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfkF11rllSLF2jAGpF_Q8mfBgMvAhZKEEqlaGY52lGvHjLiZg/viewform?usp=sharing&ouid=117175852009957048619"   // ← put your real link here
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  px: "28px", py: "12px",
                  borderRadius: "10px",
                  background: "#7C1B32",
                  color: "#FDE8E0",
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                  transition: "background 0.2s ease, transform 0.18s ease",
                  "&:hover": { background: "#9B2240", transform: "translateY(-2px)" },
                  "&:active": { transform: "scale(0.97)" },
                }}
              >
                Register Now →
              </Box>
            </Box>
          </MotionBox>

          <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.68rem", color: "rgba(253,232,224,0.16)", mt: 3, letterSpacing: "0.04em", pb: { xs: 2, md: 0 } }}>
            Click any document to read in full.
          </Typography>
        </Box>

        {/* ── Document viewer ── */}
        <AnimatePresence>
          {activeDoc && (
            <>
              {/* Desktop: absolute overlay within right panel */}
              <Box sx={{ display: { xs: "none", md: "block" }, position: "absolute", inset: 0, zIndex: 10 }}>
                <DocViewer doc={activeDoc} onClose={() => setActiveDoc(null)} isMobile={false} />
              </Box>
              {/* Mobile: fixed full screen below navbar */}
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <DocViewer doc={activeDoc} onClose={() => setActiveDoc(null)} isMobile={true} />
              </Box>
            </>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
}