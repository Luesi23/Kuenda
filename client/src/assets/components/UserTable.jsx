import React, { useEffect, useState } from 'react';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [columns, setColumns] = useState([]);
    const [selectedColumns, setSelectedColumns] = useState([]);

    // Buscar estrutura da tabela
    useEffect(() => {
        fetch("http://localhost:8800/user/structure")
            .then(response => response.json())
            .then(data => {
                setColumns(data); // Supondo que o backend já retorna um array de strings
                setSelectedColumns(["id", "nome", "email"]); // Colunas padrão a exibir
            })
            .catch(error => console.error("Erro ao buscar estrutura da tabela:", error));
    }, []);

    // Buscar dados dos usuários
    useEffect(() => {
        fetch("http://localhost:8800/user")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Erro ao buscar usuários:", error));
    }, []);

    // Alternar colunas visíveis
    const toggleColumn = (column) => {
        setSelectedColumns(prev =>
            prev.includes(column)
                ? prev.filter(col => col !== column) // Remove se já estiver selecionada
                : [...prev, column] // Adiciona se não estiver
        );
    };

    return (
        <div>
            <h2>Usuários</h2>

            <div>
                <strong>Escolha as colunas:</strong>
                {columns.map((col, index) => (
                    <label key={index} style={{ marginRight: "10px" }}>
                        <input
                            type="checkbox"
                            checked={selectedColumns.includes(col)}
                            onChange={() => toggleColumn(col)}
                        />
                        {col}
                    </label>
                ))}
            </div>

            <table border="1">
                <thead>
                    <tr>
                        {selectedColumns.map((col, index) => (
                            <th key={index}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            {selectedColumns.map((col, colIndex) => (
                                <td key={colIndex}>{user[col]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;