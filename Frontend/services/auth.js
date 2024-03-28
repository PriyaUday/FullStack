import axios from "axios";
import instance from "./axios";

const api_uri = "http://localhost:8181";

export const signIn = (data) => axios.post(`${api_uri}/api/v1/auth/login`, data);
export const signUp = (data) => axios.post(`${api_uri}/api/v1/auth/register`, data);
export const forgotPassword = (data) => axios.patch(`${api_uri}/api/v1/auth/forgot_password`,data);
// Admin Academy
export const createAcademy = (data) => instance.post(`${api_uri}/academy`, data);
export const updateAcademy = (academyData, data) => instance.put(`${api_uri}/academy/${academyData.name}`, data);
export const deleteAcademy = (academyData) => instance.delete(`${api_uri}/academy/${academyData.name}`);

// Admin Trainer
export const addTrainer = (data) => instance.post(`${api_uri}/traineradd`, data);
export const getTrainers = () => instance.get(`${api_uri}/trainer`);

// Admin Enrollment
export const enrollStudents = (data) => instance.get(`${api_uri}/enroll`, data);

// Admin user get
export const getUserDetails = () => instance.get(`${api_uri}/user/get`);

//User Academy
export const getAcademies = () => instance.get(`${api_uri}/academy`);

// User Course
export const getCourses = () => instance.get(`${api_uri}/course`);

//User enroll
export const enrollStudent = (data) => instance.post(`${api_uri}/enroll`, data);

//User trainer book
export const postTrainer = (data) => instance.post(`${api_uri}/trainer`, data);

//user trainer get
export const getTrainer = () => instance.get(`${api_uri}/traineradd`);