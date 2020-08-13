// @flow

export type ListType = {
    userId: number,
    id: number,
    title: string,
    body: string,
};

export type StateType = {
    list: array<ListType>,
    fetching: string,
    error: string,
};