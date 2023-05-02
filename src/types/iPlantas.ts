import React from 'react';

export interface iPlantas {
  id: number;
  tamanho: number;
  tipo: string;
  descricao?: string;
  suites?: string;
  imagem: React.ReactNode;
}
