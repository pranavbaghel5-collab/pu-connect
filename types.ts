export enum UserRole {
  STUDENT = 'STUDENT',
  FACULTY = 'FACULTY'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  avatarUrl?: string;
}

export interface Endorsement {
  userId: string;
  type: 'VERIFIED' | 'REJECTED';
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  authorRole: string;
  category: 'ACADEMIC' | 'CULTURAL' | 'SPORTS' | 'ADMINISTRATIVE' | 'OTHER';
  endorsements: Endorsement[];
  timestamp?: number;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  contactId: string;
  contactName: string;
  contactRole: string;
  contactAvatar?: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}

export interface CourseFile {
  id: string;
  name: string;
  size: string;
  type: 'pdf' | 'doc' | 'xls' | 'img' | 'video' | 'audio' | 'text' | 'other';
  uploadedBy: string;
  date: string;
  dataUrl?: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  course: string;
  room: string;
  type: 'LECTURE' | 'LAB';
}