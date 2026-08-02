-- LCWU Student Life database schema.
-- Creates the database (if it does not already exist) and every
-- table the API endpoints read from, then seeds each one with the
-- same demo content used as the frontend fallback data, so the
-- live site looks identical whether or not the backend is connected.

CREATE DATABASE IF NOT EXISTS lcwu_student_life
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE lcwu_student_life;

-- ==========================================================
-- Notes and Past Papers Bank
-- ==========================================================
DROP TABLE IF EXISTS subjects;
CREATE TABLE subjects (
  code VARCHAR(10) PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  dept VARCHAR(60) NOT NULL,
  sem TINYINT UNSIGNED NOT NULL
) ENGINE=InnoDB;

INSERT INTO subjects (code, name, dept, sem) VALUES
('CS101', 'Programming Fundamentals', 'Computer Science', 1),
('CS210', 'Discrete Mathematics', 'Computer Science', 2),
('CS201', 'Data Structures and Algorithms', 'Computer Science', 3),
('CS305', 'Database Systems', 'Computer Science', 5),
('CS322', 'Operating Systems', 'Computer Science', 5),
('CS318', 'Computer Networks', 'Computer Science', 6),
('CS410', 'Artificial Intelligence', 'Computer Science', 7),
('CS450', 'Machine Learning', 'Computer Science', 8),
('SE110', 'Introduction to Software Engineering', 'Software Engineering', 1),
('SE210', 'Software Requirements Engineering', 'Software Engineering', 3),
('SE280', 'Software Testing and QA', 'Software Engineering', 4),
('SE340', 'Software Design and Architecture', 'Software Engineering', 5),
('SE415', 'Software Project Management', 'Software Engineering', 7),
('PSY101', 'Introduction to Psychology', 'Psychology', 1),
('PSY220', 'Developmental Psychology', 'Psychology', 3),
('PSY250', 'Social Psychology', 'Psychology', 4),
('PSY315', 'Abnormal Psychology', 'Psychology', 5),
('PSY402', 'Cognitive Psychology', 'Psychology', 7),
('ENG102', 'Composition and Communication', 'English', 1),
('ENG214', 'British Literature', 'English', 3),
('ENG330', 'Linguistics', 'English', 5),
('ENG360', 'Postcolonial Literature', 'English', 6),
('ENG405', 'Literary Criticism', 'English', 7),
('MATH121', 'Calculus I', 'Mathematics', 1),
('MATH230', 'Linear Algebra', 'Mathematics', 3),
('MATH245', 'Differential Equations', 'Mathematics', 4),
('MATH340', 'Probability and Statistics', 'Mathematics', 5),
('MATH415', 'Numerical Analysis', 'Mathematics', 7),
('PHY111', 'Mechanics', 'Physics', 1),
('PHY220', 'Electromagnetism', 'Physics', 3),
('PHY260', 'Thermodynamics', 'Physics', 4),
('PHY330', 'Modern Physics', 'Physics', 5),
('PHY410', 'Quantum Mechanics', 'Physics', 7);

-- ==========================================================
-- Final Year Project Vault
-- ==========================================================
DROP TABLE IF EXISTS fyp_projects;
CREATE TABLE fyp_projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(180) NOT NULL,
  dept VARCHAR(60) NOT NULL,
  year SMALLINT UNSIGNED NOT NULL,
  students JSON NOT NULL,
  supervisor VARCHAR(120) NOT NULL,
  tech JSON NOT NULL,
  description TEXT NOT NULL
) ENGINE=InnoDB;

INSERT INTO fyp_projects (title, dept, year, students, supervisor, tech, description) VALUES
('MedTrack, an AI Symptom Triage App', 'Computer Science', 2025,
 JSON_ARRAY('Ayesha Noor', 'Hamza Iqbal'), 'Dr. Sara Malik',
 JSON_ARRAY('React Native', 'Node.js', 'TensorFlow.js'),
 'A mobile app that helps students describe symptoms and get pointed toward the right campus health service before an appointment.'),
('CampusEats, a Cafeteria Ordering Platform', 'Software Engineering', 2024,
 JSON_ARRAY('Bilal Ahmed', 'Zara Fatima'), 'Dr. Imran Sheikh',
 JSON_ARRAY('Laravel', 'MySQL', 'Vue.js'),
 'Lets students preorder cafeteria meals and skip the lunch rush queue, with live pickup time estimates.'),
('MindEase, a Student Wellbeing Companion', 'Psychology', 2025,
 JSON_ARRAY('Mahnoor Khan'), 'Dr. Farah Yousaf',
 JSON_ARRAY('Flutter', 'Firebase'),
 'A mood tracking companion built around CBT style journaling prompts, designed with the campus counseling office.'),
('Lexi, Grammar Feedback for ESL Writers', 'English', 2024,
 JSON_ARRAY('Areeba Siddiqui', 'Noman Raza'), 'Dr. Adeel Tariq',
 JSON_ARRAY('Python', 'NLTK', 'Flask'),
 'Gives second language writers plain English feedback on grammar and tone instead of just red underlines.'),
('GradeSense, Predicting Student Performance', 'Mathematics', 2025,
 JSON_ARRAY('Usman Ghani'), 'Dr. Nida Aslam',
 JSON_ARRAY('Python', 'Pandas', 'scikit learn'),
 'A statistical model that flags students likely to struggle in a course early enough for advisors to step in.'),
('SolarSim, a Photovoltaic Efficiency Simulator', 'Physics', 2024,
 JSON_ARRAY('Hira Baig', 'Talha Rasheed'), 'Dr. Kashif Nawaz',
 JSON_ARRAY('MATLAB', 'Python'),
 'Simulates solar panel output across a year of Lahore weather data to compare panel angles and materials.'),
('Helpdesk Bot, a University Query Assistant', 'Computer Science', 2023,
 JSON_ARRAY('Sana Malik', 'Fahad Rehman'), 'Dr. Ali Raza',
 JSON_ARRAY('Python', 'Rasa', 'React'),
 'A chatbot trained on Student Affairs FAQs so first year students get instant answers outside office hours.'),
('ClauseCheck, a Contract Risk Highlighter', 'Software Engineering', 2023,
 JSON_ARRAY('Rameen Faisal'), 'Dr. Imran Sheikh',
 JSON_ARRAY('Django', 'spaCy', 'PostgreSQL'),
 'Scans internship and job offer letters for clauses students commonly overlook, written in plain language.');

-- ==========================================================
-- Student Gallery
-- ==========================================================
DROP TABLE IF EXISTS gallery_images;
CREATE TABLE gallery_images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category VARCHAR(40) NOT NULL,
  image VARCHAR(500) NOT NULL,
  caption VARCHAR(160) NOT NULL
) ENGINE=InnoDB;

INSERT INTO gallery_images (category, image, caption) VALUES
('graduation', 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=700&q=80', 'Convocation day'),
('graduation', 'https://images.unsplash.com/photo-1607013407627-6ee814329547?auto=format&fit=crop&w=700&q=80', 'Caps up, Class of 2025'),
('campus', 'https://images.unsplash.com/photo-1583373834259-46cc92173cb7?auto=format&fit=crop&w=700&q=80', 'The main quadrangle'),
('campus', 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=700&q=80', 'Walking between classes'),
('library', 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=700&q=80', 'Central Library stacks'),
('library', 'https://images.unsplash.com/photo-1536925155833-43e9c2b2f499?auto=format&fit=crop&w=700&q=80', 'Quiet reading hall'),
('sports', 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=700&q=80', 'Volleyball finals'),
('sports', 'https://images.unsplash.com/photo-1521055170349-25f955971658?auto=format&fit=crop&w=700&q=80', 'Packed out at the gala'),
('events', 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=700&q=80', 'Founders Week stage'),
('events', 'https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?auto=format&fit=crop&w=700&q=80', 'Celebrating a win'),
('cafeteria', 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80', 'Lunch at the food court'),
('cafeteria', 'https://images.unsplash.com/photo-1613385258412-6825b29ae895?auto=format&fit=crop&w=700&q=80', 'The Burger Stop'),
('clubs', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80', 'Programming Society meetup'),
('clubs', 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=700&q=80', 'Society planning session'),
('study', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80', 'Group study before finals'),
('study', 'https://images.unsplash.com/photo-1619512673224-91cfb2688284?auto=format&fit=crop&w=700&q=80', 'Catching up on the lawn');

-- ==========================================================
-- Social Life and Fun Zone, upcoming events
-- ==========================================================
DROP TABLE IF EXISTS events;
CREATE TABLE events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  club VARCHAR(80) NOT NULL,
  title VARCHAR(160) NOT NULL,
  venue VARCHAR(120) NOT NULL,
  event_date DATE NOT NULL,
  tag VARCHAR(60) NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(500) NOT NULL
) ENGINE=InnoDB;

-- Seed dates are set relative to today so the section always shows
-- upcoming events instead of ones the WHERE event_date >= CURDATE()
-- filter in events.php would immediately hide.
INSERT INTO events (club, title, venue, event_date, tag, description, image) VALUES
('Cultural Festival', 'Founders Week Cultural Festival', 'Main Quadrangle', DATE_ADD(CURDATE(), INTERVAL 14 DAY), 'Open to all',
 'Three days of food stalls, live music, and department showcases marking the university founding.',
 'https://images.unsplash.com/photo-1682447404920-4be1294c2854?auto=format&fit=crop&w=700&q=80'),
('Sports Activities', 'Inter Department Sports Gala', 'Sports Complex', DATE_ADD(CURDATE(), INTERVAL 30 DAY), 'Teams of 8 or more',
 'Basketball, volleyball, and athletics, every department fields a team and bragging rights are on the line.',
 'https://images.unsplash.com/photo-1538352886333-5233ad94cb8b?auto=format&fit=crop&w=700&q=80'),
('Programming Society', 'CodeSprint, a 24 Hour Hackathon', 'Computer Labs, Block C', DATE_ADD(CURDATE(), INTERVAL 45 DAY), 'Beginners welcome',
 'Build something in a day, working in teams of up to four, with mentors from the CS faculty dropping by.',
 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80'),
('Photography Club', 'Lens and Light, a Golden Hour Walk', 'Meets at the Library steps', DATE_ADD(CURDATE(), INTERVAL 52 DAY), 'Bring any camera',
 'A relaxed campus walk for anyone with a camera or just a phone, chasing the last light of the day.',
 'https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?auto=format&fit=crop&w=700&q=80'),
('Debate Club', 'The Grand Debate, Finals Night', 'Auditorium, Block A', DATE_ADD(CURDATE(), INTERVAL 66 DAY), 'Free entry',
 'The semester best two teams face off in front of a live audience and a panel of faculty judges.',
 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80'),
('Volunteer Programs', 'Community Cleanup Drive', 'Meets at Student Center', DATE_ADD(CURDATE(), INTERVAL 74 DAY), 'Volunteer hours count',
 'A half day neighborhood cleanup with the Community Outreach society, gloves and transport provided.',
 'https://images.unsplash.com/photo-1619512673224-91cfb2688284?auto=format&fit=crop&w=700&q=80');

-- ==========================================================
-- Campus and Food, food guide
-- ==========================================================
DROP TABLE IF EXISTS food_spots;
CREATE TABLE food_spots (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  rating DECIMAL(2,1) NOT NULL,
  description TEXT NOT NULL,
  price_range VARCHAR(60) NOT NULL,
  hours VARCHAR(60) NOT NULL,
  image VARCHAR(500) NOT NULL
) ENGINE=InnoDB;

INSERT INTO food_spots (name, rating, description, price_range, hours, image) VALUES
('The Biryani Counter', 4.6, 'The queue moves fast and the chicken biryani sells out by 1pm, so get there early.', 'Rs. 150 to 250', '8am to 8pm',
 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=700&q=80'),
('Grill and Karahi Corner', 4.4, 'Karahi by the plate, split three ways if you are on a budget, it is meant to be shared.', 'Rs. 200 to 350', '11am to 9pm',
 'https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?q=80&w=876&auto=format&fit=crop'),
('Quick Bites Sandwich Bar', 4.3, 'The fastest option between back to back classes, order ahead through the counter app.', 'Rs. 100 to 200', '8am to 7pm',
 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=500&auto=format&fit=crop&q=60'),
('The Burger Stop', 4.5, 'Cash or campus card only, the combo deal is the best value on this list.', 'Rs. 150 to 300', '11am to 10pm',
 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=387&auto=format&fit=crop'),
('Chai and Snacks Corner', 4.7, 'The unofficial meeting point for every study group on campus, samosas go fast at 5pm.', 'Rs. 40 to 120', '7am to 9pm',
 'https://images.unsplash.com/photo-1683533699004-7f6b9e5a073f?w=500&auto=format&fit=crop&q=60'),
('Main Cafeteria', 4.2, 'The biggest seating area on campus and the only spot open for a proper sit down dinner.', 'Rs. 180 to 320', '8am to 9pm',
 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80');

-- ==========================================================
-- Student Stories, testimonials
-- ==========================================================
DROP TABLE IF EXISTS testimonials;
CREATE TABLE testimonials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  initials VARCHAR(4) NOT NULL,
  name VARCHAR(120) NOT NULL,
  department VARCHAR(80) NOT NULL,
  quote TEXT NOT NULL,
  is_approved TINYINT(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB;

INSERT INTO testimonials (initials, name, department, quote) VALUES
('AH', 'Aiman Haider', 'Computer Science, 3rd Year', 'This platform helped me find study resources and stay connected with campus activities.'),
('BR', 'Bilal Rashid', 'Software Engineering, 4th Year', 'I found my study group and my supervisor for FYP through this portal in the same week.'),
('MK', 'Mahnoor Khan', 'Psychology, 2nd Year', 'Booking a counseling session used to feel like a whole ordeal. Now it is three taps.'),
('UG', 'Usman Ghani', 'Mathematics, 4th Year', 'The Notes Bank alone saved me an entire weekend before my Linear Algebra final.');

-- ==========================================================
-- Contact form submissions
-- ==========================================================
DROP TABLE IF EXISTS contact_messages;
CREATE TABLE contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL,
  subject VARCHAR(160) NOT NULL,
  message TEXT NOT NULL,
  created_at DATETIME NOT NULL
) ENGINE=InnoDB;
