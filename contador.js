import React, { useState } from 'react';

/**
 * Componente funcional que implementa um contador de cliques.
 * O estado é gerenciado pelo hook useState.
 */
const Contador = () => {
  // 1. ESTADO INICIAL: Inicializa o estado 'count' com 0.
  const [count, setCount] = useState(0);

  // 2. FUNÇÃO DE INCREMENTO: Atualiza o estado 'count' somando 1 ao valor atual.
  const incrementarContador = () => {
    // Usamos a função de atualização para garantir que estamos usando o valor mais recente (embora 'count + 1' seja seguro neste caso simples).
    setCount(count => count + 1);
  };

  return (
    <div className="contador-container">
      {/* 3. RENDERIZAÇÃO: Exibe o valor atual do contador */}
      <h1>Contador de Cliques</h1>
      <p className="contador-valor">
        O contador está em: <strong>{count}</strong>
      </p>

      {/* 4. EVENTO: O botão chama 'incrementarContador' no evento onClick */}
      <button 
        onClick={incrementarContador} 
        className="btn-contador"
        aria-label="Clique para incrementar o contador"
      >
        Clique aqui
      </button>
    </div>
  );
};

export default Contador;
