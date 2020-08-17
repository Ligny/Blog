export type RegisterType = {
    username: string,
    email: string,
};

export type StateType = {
    register: RegisterType[],
    fetching: string,
    error: string,
};