// Demo data for the Notes and Past Papers Bank.
// In production this list is served by GET /api/subjects.php,
// this file is the fallback used if that request fails.

export const DEPARTMENTS = [
  "Computer Science",
  "Software Engineering",
  "Psychology",
  "English",
  "Mathematics",
  "Physics"
];

export const SUBJECTS = [
  { code: "CS101", name: "Programming Fundamentals", dept: "Computer Science", sem: 1 },
  { code: "CS210", name: "Discrete Mathematics", dept: "Computer Science", sem: 2 },
  { code: "CS201", name: "Data Structures and Algorithms", dept: "Computer Science", sem: 3 },
  { code: "CS305", name: "Database Systems", dept: "Computer Science", sem: 5 },
  { code: "CS322", name: "Operating Systems", dept: "Computer Science", sem: 5 },
  { code: "CS318", name: "Computer Networks", dept: "Computer Science", sem: 6 },
  { code: "CS410", name: "Artificial Intelligence", dept: "Computer Science", sem: 7 },
  { code: "CS450", name: "Machine Learning", dept: "Computer Science", sem: 8 },

  { code: "SE110", name: "Introduction to Software Engineering", dept: "Software Engineering", sem: 1 },
  { code: "SE210", name: "Software Requirements Engineering", dept: "Software Engineering", sem: 3 },
  { code: "SE280", name: "Software Testing and QA", dept: "Software Engineering", sem: 4 },
  { code: "SE340", name: "Software Design and Architecture", dept: "Software Engineering", sem: 5 },
  { code: "SE415", name: "Software Project Management", dept: "Software Engineering", sem: 7 },

  { code: "PSY101", name: "Introduction to Psychology", dept: "Psychology", sem: 1 },
  { code: "PSY220", name: "Developmental Psychology", dept: "Psychology", sem: 3 },
  { code: "PSY250", name: "Social Psychology", dept: "Psychology", sem: 4 },
  { code: "PSY315", name: "Abnormal Psychology", dept: "Psychology", sem: 5 },
  { code: "PSY402", name: "Cognitive Psychology", dept: "Psychology", sem: 7 },

  { code: "ENG102", name: "Composition and Communication", dept: "English", sem: 1 },
  { code: "ENG214", name: "British Literature", dept: "English", sem: 3 },
  { code: "ENG330", name: "Linguistics", dept: "English", sem: 5 },
  { code: "ENG360", name: "Postcolonial Literature", dept: "English", sem: 6 },
  { code: "ENG405", name: "Literary Criticism", dept: "English", sem: 7 },

  { code: "MATH121", name: "Calculus I", dept: "Mathematics", sem: 1 },
  { code: "MATH230", name: "Linear Algebra", dept: "Mathematics", sem: 3 },
  { code: "MATH245", name: "Differential Equations", dept: "Mathematics", sem: 4 },
  { code: "MATH340", name: "Probability and Statistics", dept: "Mathematics", sem: 5 },
  { code: "MATH415", name: "Numerical Analysis", dept: "Mathematics", sem: 7 },

  { code: "PHY111", name: "Mechanics", dept: "Physics", sem: 1 },
  { code: "PHY220", name: "Electromagnetism", dept: "Physics", sem: 3 },
  { code: "PHY260", name: "Thermodynamics", dept: "Physics", sem: 4 },
  { code: "PHY330", name: "Modern Physics", dept: "Physics", sem: 5 },
  { code: "PHY410", name: "Quantum Mechanics", dept: "Physics", sem: 7 }
];
