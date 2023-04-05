export interface ICategory {
    id: number;
    title: String;
}

export interface IPost {
    id: number;
    title: string;
    status: "published" | "draft" | "rejected";
    category: { id: number };
    createdAt: string;
}