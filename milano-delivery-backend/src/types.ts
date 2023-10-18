export interface GoogleProfile {
    id: string;
    displayName: string;
    emails: Array<{ value: string }>;
}

export interface User {
    isAdmin?: boolean;
}