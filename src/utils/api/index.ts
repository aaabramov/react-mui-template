import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {usePostsApi} from '../../api/posts';
import {useQueryClient} from "@tanstack/react-query";
import {useUsersApi} from "../../api/users";

export const doGet = <Response>(
    api: AxiosInstance,
    url: string,
    params: Record<string, any> = {},
) =>
    api
        .get<Response>(url, {
            params,
        })
        .then((res) => res.data);

export const doPost = <Response>(api: AxiosInstance, url: string, body: any) =>
    api.post<Response>(url, body).then((res) => res.data);

export const doPut = <Response>(api: AxiosInstance, url: string, body: any) =>
    api.put<Response>(url, body).then((res) => res.data);

export const doPatch = <Response>(api: AxiosInstance, url: string, body: any) =>
    api.patch<Response>(url, body).then((res) => res.data);

export const doDelete = <Response>(
    api: AxiosInstance,
    url: string,
    body?: any,
) =>
    api
        .delete<never, AxiosResponse<Response>>(url, (body && {data: body}) || {})
        .then((res) => res.data);

export interface UseApiProps {
}

export const QUERY_KEYS = {
    POSTS: {
        ALL: ['POSTS_ALL'],
        SINGLE: (postId: number): string[] => ['POSTS', postId.toString()],
        NEW: 'POSTS_NEW',
    },
    USERS: {
        ALL: ['USERS_ALL'],
        SINGLE: (expenseId: number) => ['USERS', expenseId],
        NEW: 'USERS_NEW',
    }
};

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
});

export const useApi = (props: UseApiProps = {},) => {
    const queryClient = useQueryClient();
    const postsApi = usePostsApi(axiosInstance);
    const usersApi = useUsersApi(axiosInstance);

    return {
        queryClient,
        postsApi,
        usersApi,
    };
};
