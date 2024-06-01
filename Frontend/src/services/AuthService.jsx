// AuthService.js
const AuthService = {
    // Fungsi untuk login dengan token sementara
    login: async (username, password) => {
      // Omitting actual authentication logic, for simplicity
      // Ini hanyalah contoh sederhana untuk keperluan pengembangan
      if (username === 'admin' && password === '123') {
        // Jika autentikasi berhasil, kita menghasilkan token sementara
        const temporaryToken = 'temporary_token_here';
        localStorage.setItem('adminToken', temporaryToken);
      } else {
        throw new Error('Invalid credentials');
      }
    },
    // Fungsi untuk logout
    logout: () => {
      localStorage.removeItem('adminToken');
    },
    // Fungsi untuk memeriksa apakah pengguna sudah terautentikasi
    isAuthenticated: () => {
      return !!localStorage.getItem('adminToken');
    },
  };
  
  export default AuthService;
  