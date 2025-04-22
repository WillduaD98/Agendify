const API_URL = '/api/auth';

export const loginUser = async (credentials) => {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  return res.json();
};

export const registerUser = async (credentials) => {
  const res = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  return res.json();
};

export const fetchProfile = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch('/api/auth/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
