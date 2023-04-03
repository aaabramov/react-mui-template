import {doGet, doPatch, doPost} from '../utils/api';
import {AxiosInstance} from 'axios';
import {UserResource} from "./users";

export interface PostResource {
    id: number;
    title: string;
    user: UserResource;
}

export interface CreatePostRequest {
    title: string;
    userId: number;
}

export interface CreatePostResponse {
    id: number;
    title: string;
    userId: number;
}

export interface UpdatePostRequest {
    title: string;
}

export interface UpdatePostResponse {
    id: number;
    title: string;
}

export const usePostsApi = (api: AxiosInstance) => {

    const getOne = (postId: number): Promise<PostResource> => {
        return doGet(api, `/posts/${postId}`, {_expand: 'user'});
    }

    return {
        all: (): Promise<PostResource[]> => doGet(api, '/posts', {_expand: 'user'}),
        one: (postId: number): Promise<PostResource> => getOne(postId),

        create: (req: CreatePostRequest): Promise<PostResource> =>
            doPost<CreatePostResponse>(api, '/posts', req)
                .then(({id}) => getOne(id)),

        update: (postId: number, req: UpdatePostRequest) => (): Promise<PostResource> =>
            doPatch<UpdatePostResponse>(api, `/posts/${postId}`, req)
                .then(({id}) => getOne(id)),
    };
};
