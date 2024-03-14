export type Authenticated = {
    db: string;
    login?: string;
    password: any;
    uid?: number;
    memberId?: number;
    fields?: string[];
    model?: string;
};
