import { User } from "./user";

export interface Session{
    activeSession: boolean;
    activeUser?: User;
}