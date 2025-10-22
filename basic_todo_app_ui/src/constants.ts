// src/constants.ts
// Common constants for the Angular application

export const APP_NAME = 'Basic Todo App';
export const APP_DESCRIPTION = 'A simple todo application';
export const APP_VERSION = '0.1.0';
export const API_TIMEOUT_MS = 30000;

export const ROUTES = {
    ROOT: '',
    HOME: 'home',
    LOGIN: 'login',
    REGISTER: 'register',
    TODOS: 'todos',
    TODO_DETAILS: (id: string | number = ':id') => `todos/${id}`,
    PROFILE: 'profile',
} as const;

export const LOCAL_STORAGE_KEYS = {
    AUTH_TOKEN: 'basic_todo_auth_token',
    USER: 'basic_todo_user',
    LAST_VISIT: 'basic_todo_last_visit',
} as const;

export const HTTP_HEADERS = {
    JSON: { 'Content-Type': 'application/json' },
    FORM: { 'Content-Type': 'application/x-www-form-urlencoded' },
} as const;

export const DEFAULT_PAGINATION = {
    PAGE_INDEX: 0,
    PAGE_SIZE: 10,
    PAGE_SIZE_OPTIONS: [5, 10, 25, 50],
} as const;

export const DATE_FORMATS = {
    SHORT_DATE: 'yyyy-MM-dd',
    SHORT_DATETIME: 'yyyy-MM-dd HH:mm',
    LONG_DATETIME: 'yyyy-MM-dd HH:mm:ss',
} as const;

export enum TodoStatus {
    Pending = 'pending',
    Completed = 'completed',
    Archived = 'archived',
}

export const UI = {
    NOTIFICATION_DURATION_MS: 5000,
    DEFAULT_AVATAR: 'assets/images/default-avatar.png',
} as const;