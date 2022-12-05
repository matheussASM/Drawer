export type Cards = {
    "id": number;
    "title": string;
    "hasDetail": boolean;
    "createdAt": string;
    "owner": User["name"];
    "currentState":States["state"];
}

export type User = {
    "id": number;
    "name": string;
}

export type States = {
    "id": number;
    "state": string;
}