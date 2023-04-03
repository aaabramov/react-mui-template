import {AxiosInstance} from 'axios';
import {doGet} from "../utils/api";

export interface UserResource {
    id: number;
    nickname: string;
}

export const useUsersApi = (api: AxiosInstance) => {

    return {
        all: (): Promise<UserResource[]> => doGet(api, '/users'),
    };
};
