import { Announcement, Conversation, CourseFile, User, UserRole, TimeSlot } from './types';

export const CURRENT_USER_STUDENT: User = {
  id: 's1',
  name: 'Ankita Upadhyay',
  email: 'ankita@university.edu',
  role: UserRole.STUDENT,
  department: 'Computer Science',
  avatarUrl: 'https://picsum.photos/id/64/100/100'
};

export const CURRENT_USER_FACULTY: User = {
  id: 'f1',
  name: 'Pranav',
  email: 'pranav@university.edu',
  role: UserRole.FACULTY,
  department: 'Computer Science',
  avatarUrl: 'https://picsum.photos/id/55/100/100'
};

export const MOCK_ANNOUNCEMENTS: Announcement[] = [
  {
    id: '1',
    title: 'CS302 Project Submission',
    content: 'The deadline for the OS simulator project has been extended to Friday midnight. Late submissions will not be accepted.',
    date: '5 hours ago',
    author: 'Prof. Elena Gilbert',
    authorRole: 'COURSE FACULTY',
    category: 'ACADEMIC',
    endorsements: [
        { userId: 'f2', type: 'VERIFIED' },
        { userId: 'f3', type: 'VERIFIED' }
    ],
    timestamp: Date.now() - (5 * 60 * 60 * 1000)
  },
  {
    id: '2',
    title: 'Winter Break Holidays 2026',
    content: 'The university will remain closed from Dec 24th to Jan 5th for winter break. Classes resume on Jan 6th.',
    date: '2 days ago',
    author: 'Registrar Office',
    authorRole: 'ADMINISTRATION',
    category: 'ADMINISTRATIVE',
    endorsements: [
        { userId: 'f1', type: 'VERIFIED' }
    ],
    timestamp: Date.now() - (48 * 60 * 60 * 1000)
  },
  {
    id: '3',
    title: 'Cultural Fest Auditions',
    content: 'Auditions for the annual dance competition will be held in the auditorium this Saturday.',
    date: '2 hours ago',
    author: 'Student Council',
    authorRole: 'CLUB',
    category: 'CULTURAL',
    endorsements: [], // No endorsements yet
    timestamp: Date.now() - (2 * 60 * 60 * 1000)
  },
  {
    id: '4',
    title: 'Inter-Department Football Tournament',
    content: 'Registration for the annual football league is now open. Form your teams and register at the sports complex.',
    date: '1 week ago',
    author: 'Sports Committee',
    authorRole: 'CLUB',
    category: 'SPORTS',
    endorsements: [
        { userId: 'f5', type: 'VERIFIED' },
        { userId: 'f6', type: 'VERIFIED' }
    ],
    timestamp: Date.now() - (7 * 24 * 60 * 60 * 1000)
  }
];

// Conversations visible when logged in as a STUDENT
export const STUDENT_CONVERSATIONS: Conversation[] = [
  {
    id: 'c_s1',
    contactId: 'f1', // Links to Faculty Pranav
    contactName: 'Pranav',
    contactRole: 'Faculty',
    lastMessage: 'Start a conversation',
    lastMessageTime: 'Now',
    unreadCount: 0,
    contactAvatar: 'https://picsum.photos/id/55/100/100'
  },
  {
    id: 'c_s2',
    contactId: 'f2',
    contactName: 'Prof. Severus',
    contactRole: 'Chemistry',
    lastMessage: 'Assignment due tomorrow',
    lastMessageTime: 'Yesterday',
    unreadCount: 0,
    contactAvatar: ''
  }
];

// Conversations visible when logged in as FACULTY
export const FACULTY_CONVERSATIONS: Conversation[] = [
  {
    id: 'c_f1',
    contactId: 's1', // Links to Student Ankita
    contactName: 'Ankita Upadhyay',
    contactRole: 'Student',
    lastMessage: 'Start a conversation',
    lastMessageTime: 'Now',
    unreadCount: 0,
    contactAvatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: 'c_f2',
    contactId: 's3',
    contactName: 'Rishabh',
    contactRole: 'Student',
    lastMessage: 'Regarding the lab report...',
    lastMessageTime: 'Fri',
    unreadCount: 1,
    contactAvatar: ''
  }
];

export const MOCK_FILES: CourseFile[] = [
  { id: '1', name: 'Operating_Systems_Ch1.pdf', size: '2.4 MB', type: 'pdf', uploadedBy: 'Prof. Elena Gilbert', date: 'Jan 10, 2026' },
  { id: '2', name: 'Assignment_Guidelines.docx', size: '150 KB', type: 'doc', uploadedBy: 'Prof. Pranav', date: 'Jan 12, 2026' },
  { id: '3', name: 'Lab_Schedule_Final.xlsx', size: '45 KB', type: 'xls', uploadedBy: 'Admin', date: 'Jan 15, 2026' }
];

export const DEPARTMENT_TIMETABLES: Record<string, Record<string, TimeSlot[]>> = {
  'Computer Science': {
    'Monday': [
      { id: 'cs_mon_1', time: '09:00 - 10:00', course: 'CS302 - Operating Systems', room: 'Room 301', type: 'LECTURE' },
      { id: 'cs_mon_2', time: '11:00 - 13:00', course: 'CS305 - Database Mgmt', room: 'Lab 2', type: 'LAB' },
    ],
    'Tuesday': [
      { id: 'cs_tue_1', time: '10:00 - 11:00', course: 'CS101 - Intro to Programming', room: 'Room 101', type: 'LECTURE' },
      { id: 'cs_tue_2', time: '14:00 - 15:00', course: 'CS302 - Operating Systems', room: 'Room 301', type: 'LECTURE' },
    ],
    'Wednesday': [
      { id: 'cs_wed_1', time: '09:00 - 10:00', course: 'CS305 - Database Mgmt', room: 'Lab 2', type: 'LECTURE' },
      { id: 'cs_wed_2', time: '11:00 - 12:00', course: 'CS302 - Operating Systems', room: 'Room 301', type: 'LECTURE' },
    ],
    'Thursday': [
       { id: 'cs_thu_1', time: '11:00 - 12:00', course: 'CS302 - Operating Systems', room: 'Room 301', type: 'LECTURE' },
       { id: 'cs_thu_2', time: '13:00 - 15:00', course: 'CS101 - Intro to Programming', room: 'Lab 1', type: 'LAB' },
    ],
    'Friday': [
      { id: 'cs_fri_1', time: '10:00 - 11:00', course: 'CS305 - Database Mgmt', room: 'Room 204', type: 'LECTURE' },
    ],
    'Saturday': [],
    'Sunday': []
  },
  'Mechanical': {
    'Monday': [
      { id: 'mech_mon_1', time: '09:00 - 10:00', course: 'ME201 - Thermodynamics', room: 'Mech Block A', type: 'LECTURE' },
      { id: 'mech_mon_2', time: '11:00 - 13:00', course: 'ME205 - Fluid Mechanics Lab', room: 'Workshop 1', type: 'LAB' },
    ],
    'Tuesday': [
      { id: 'mech_tue_1', time: '10:00 - 11:00', course: 'ME202 - Solid Mechanics', room: 'Mech Block B', type: 'LECTURE' },
      { id: 'mech_tue_2', time: '14:00 - 15:00', course: 'ME201 - Thermodynamics', room: 'Mech Block A', type: 'LECTURE' },
    ],
    'Wednesday': [
      { id: 'mech_wed_1', time: '09:00 - 10:00', course: 'ME203 - Material Science', room: 'Lecture Hall 2', type: 'LECTURE' },
    ],
    'Thursday': [
       { id: 'mech_thu_1', time: '11:00 - 13:00', course: 'ME206 - CAD Workshop', room: 'Comp Lab 3', type: 'LAB' },
    ],
    'Friday': [
      { id: 'mech_fri_1', time: '10:00 - 11:00', course: 'ME204 - Heat Transfer', room: 'Mech Block A', type: 'LECTURE' },
    ],
    'Saturday': [],
    'Sunday': []
  },
  'Civil': {
    'Monday': [
      { id: 'civ_mon_1', time: '09:00 - 10:00', course: 'CE301 - Structural Analysis', room: 'Civil Block 1', type: 'LECTURE' },
    ],
    'Tuesday': [
      { id: 'civ_tue_1', time: '11:00 - 13:00', course: 'CE305 - Surveying Lab', room: 'Field Ground', type: 'LAB' },
    ],
    'Wednesday': [
      { id: 'civ_wed_1', time: '10:00 - 11:00', course: 'CE302 - Geotechnical Eng', room: 'Civil Block 2', type: 'LECTURE' },
    ],
    'Thursday': [
       { id: 'civ_thu_1', time: '09:00 - 11:00', course: 'CE306 - Concrete Tech Lab', room: 'Material Lab', type: 'LAB' },
    ],
    'Friday': [
      { id: 'civ_fri_1', time: '14:00 - 15:00', course: 'CE303 - Transportation Eng', room: 'Civil Block 1', type: 'LECTURE' },
    ],
    'Saturday': [],
    'Sunday': []
  },
  'BCA': {
    'Monday': [
      { id: 'bca_mon_1', time: '10:00 - 11:00', course: 'BCA401 - Web Development', room: 'Lab 4', type: 'LAB' },
    ],
    'Tuesday': [
      { id: 'bca_tue_1', time: '09:00 - 10:00', course: 'BCA402 - Core Java', room: 'Room 405', type: 'LECTURE' },
    ],
    'Wednesday': [
      { id: 'bca_wed_1', time: '11:00 - 13:00', course: 'BCA403 - Advanced Python', room: 'Lab 5', type: 'LAB' },
    ],
    'Thursday': [
       { id: 'bca_thu_1', time: '14:00 - 15:00', course: 'BCA404 - Computer Networks', room: 'Room 405', type: 'LECTURE' },
    ],
    'Friday': [
      { id: 'bca_fri_1', time: '09:00 - 11:00', course: 'BCA405 - Project Lab', room: 'Lab 4', type: 'LAB' },
    ],
    'Saturday': [],
    'Sunday': []
  },
  'Others': {
      'Monday': [], 'Tuesday': [], 'Wednesday': [], 'Thursday': [], 'Friday': [], 'Saturday': [], 'Sunday': []
  }
};