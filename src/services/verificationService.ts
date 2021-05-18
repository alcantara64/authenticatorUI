import axios from 'axios';
const baseUrl = 'http://localhost:5006';

export class VerificationService {
    
  static sendToken(payload:any){
  return axios.post(`${baseUrl}/send-code`, payload)   
  }
  static verifyToken(token:string){
  return axios.post(`${baseUrl}/verify-code`)    
  }

}