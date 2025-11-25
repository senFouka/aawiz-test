import axios from 'axios';
import { toast } from 'react-toastify';


export const defaults = {
    timeout: 300000,
};

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    ...defaults,
});

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        showErrorToast(
            error?.response?.data?.detail ??
            error?.response?.data?.error ??
            error?.response?.data?.message ??
            error?.response?.data?.error?.message ??
            error?.response?.error?.message ??
            'An error occurred',
        );

        return Promise.reject(error);
    },
);


export function showErrorToast(message: string) {
    return toast(typeof message === "string" ? message : JSON.stringify(message || "An error occurred"), {
        role: 'error',
        type: 'error',
        toastId: 'instance-error',
        position: 'bottom-center',
    });
}