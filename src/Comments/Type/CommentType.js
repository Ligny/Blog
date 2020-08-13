
export type CommentType = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
};

export type StateType = {
    comment: array<CommentType>,
    fetching: string,
    error: string,
}