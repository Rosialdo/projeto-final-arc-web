import React, { useState } from 'react';

interface user {
    nome_user: string,
}

interface LoginModalProps {
  onLogin: (userData: user) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onLogin }) => {
  const [form, setForm] = useState<user>({
    nome_user: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(form);
  };

  return (
    <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
      <form onSubmit={handleSubmit} className="p-6 bg-[#A6A39F] rounded shadow-lg ">
      <h2 className="text-lg w-full text-center text-slate-950 mb-2"><strong>Adicione seus dados de Login</strong></h2>
        <input
          type="text"
          name="nome_user"
          value={form.nome_user}
          onChange={handleChange}
          placeholder="Escreva o seu nome"
          required
          className="w-full p-2 mb-3 border border-gray-300 rounded text-slate-900"
        />
        <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
