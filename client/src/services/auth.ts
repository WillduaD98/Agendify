import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {

  getProfile(): JwtPayload | null {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode(token); 
      } catch (error) {
        return null;
      }
    }
    return null;
  }

  loggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode(token);  
      if (decoded.exp) {
        const expirationDate = decoded.exp * 1000;  
        return Date.now() >= expirationDate; 
      }
      return true;  
    } catch (error) {
      return true;  
    }
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  login(idToken: string): void {
    localStorage.setItem('token', idToken);
    window.location.href = '/';  
  }

  logout(): void {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}

export default new AuthService();