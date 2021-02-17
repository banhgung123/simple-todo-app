import axiosClient from './axiosClient';

const todoApi = {
    async getAll(params) {
        const url = '/todos';
        return await axiosClient.get(url, params);
    },

    async add(data) {
        const url = '/todos';
        return await axiosClient.post(url, data);
    },

    async remove(id) {
        const url = `/todos/${id}`;
        return await axiosClient.delete(url);
    },
};

export default todoApi;
