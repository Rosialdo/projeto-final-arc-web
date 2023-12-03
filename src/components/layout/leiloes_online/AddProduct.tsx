import React, { useState } from "react";
import { Socket } from "socket.io-client"; // Import the Socket type

interface AddProductProps {
    closeModal: () => void; // closeModal is a function that doesn't return anything
    socket: Socket; // socket is of type Socket
}

const AddProduct: React.FC<AddProductProps> = ({ closeModal, socket }) => {
    // Add closeModal prop
    const [nome_prod, setnome_prod] = useState("");
    const [descricao, setdescricao] = useState("");
    const [image, setimage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        socket.emit("add_item", [
            nome_prod,
            descricao,
            image,
            new Date().toISOString(), 
        ]);
        closeModal(); 
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-slate-400 p-4 rounded shadow-lg">
                <button
                    className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded"
                    onClick={closeModal}
                >
                    Fechar
                </button>
                {/* Add this line */}
                <h2 className="text-lg w-full text-center mb-2">
                    <strong>Preencha dos dados e cadastre o produto</strong>
                </h2>
                <div className="">
                    <form
                        onSubmit={handleSubmit}
                        className="p-6 bg-white rounded shadow-lg"
                    >
                        <input
                            type="text"
                            className="w-full p-2 mb-3 border border-gray-300 rounded text-slate-900"
                            placeholder="Nome do Produto"
                            name="nome_prod"
                            value={nome_prod}
                            onChange={(e) => setnome_prod(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            className="w-full p-2 mb-3 border border-gray-300 rounded text-slate-900 overflow-scroll "
                            placeholder={
                                "Digite as caracteristicas do produto" +
                                (nome_prod ? false : "Produto")
                            }
                            name="descricao"
                            value={descricao}
                            onChange={(e) => setdescricao(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            className="w-full p-2 mb-3 border border-gray-300 rounded text-slate-900 overflow-scroll"
                            placeholder={
                                "Digite o Link da imagem de " + nome_prod
                            }
                            name="image"
                            value={image}
                            onChange={(e) => setimage(e.target.value)}
                            required
                        />

                        <button
                            className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                            type="submit"
                        >
                            Cadastrar produto
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
